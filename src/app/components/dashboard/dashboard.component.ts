import { Component, Pipe, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../api.service';
import { ToastService } from '../../shared/toast/toast-service';
import { FormControl, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

/**
 * @title Table with expandable rows
 */
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class DashboardComponent implements OnInit{
	pipe: DatePipe;
	callendarData = [];
	

	today: number = Date.now();
	public barChartOptions: ChartOptions = {
		responsive: true,
	};
	public barChartLabels: Label[] = [];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [];
	chartFullDate = [];
	dyIncome = [];
	dyExpense = [];
	dyProfit = [];
	range = 'w';
	invoices;
	dates;
	chartCurr = 'USD';
	firstday;
	lastday;
	todayC;
	vendors=[];
	customers=[];
	endDate = new FormControl(new Date, Validators.required);
	d = new Date;
	dd = this.d.setDate(this.d.getDate() - 6);
	startDate = new FormControl(new Date(this.dd), Validators.required);

	public barChartData: ChartDataSets[] = [
		{ data: this.dyIncome, label: 'Income' },
		{ data: this.dyExpense, label: 'Expense' },
		{ data: this.dyProfit, label: 'Profit' }
	];
	days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	
	constructor(
		private apiService: ApiService,
		public toast: ToastService,
		
	) { 
		this.pipe = new DatePipe('en');
	}

	ngOnInit() {
		this.loadCustomers();
		this.loadVendors();
		this.genLast7Days();
		this.loadInvBill();


		this.todayC = new Date; // get this.todayCent date
		var first = this.todayC.getDate() - this.todayC.getDay(); // First day is the day of the month - the day of the week
		var last = first + 6; // last day is the first day + 6
		this.lastday = new Date(this.todayC.setDate(last));
	}

	calendarOptions: CalendarOptions;

	handleDateClick(arg) {
		alert('date click! ' + arg.dateStr)
	}

	loadCustomers() {
		this.apiService.loadAll('csmr').subscribe(
			result => {
				this.customers = result;
			},
		);
	}
	loadVendors() {
		this.apiService.loadAll('vdr').subscribe(
			result => {
				this.vendors = result;
			},
		);
	}
	loadInvBill() {
		
		this.apiService.loadAll('inv').subscribe(
			result => {

				result.forEach(e => {
					let d = new Date(e.due_date);
					this.callendarData.push({ 
						data: e,
						customer: this.customers,
						vendor: this.vendors,
						title: e.inv_number,
						date: e.due_date,
						color: (e.balance == 0) ? "#28a745" : (d >= new Date) ? (d > this.lastday) ? '#1e88e5' : "#ffb22b" : "#fc4b6c", 
					});					
				});
				this.apiService.loadAll('bil').subscribe(
					result => {
						result.forEach(e => {
							let d = new Date(e.due_date);
							this.callendarData.push({
								data: e,
								customer: this.customers,
								vendor: this.vendors,
								title: e.bill_number,
								date: e.due_date,
								color: (e.balance == 0) ? "#28a745" : (d >= new Date) ? (d > this.lastday) ? '#1e88e5' : "#ffb22b" : "#fc4b6c", 
							});
						});
					this.calendarOptions = {
						// initialView: 'listWeek',
						height: 700,
						// dateClick: this.handleDateClick.bind(this), // bind is important!
						eventClick: function (info) {
							console.log(info.event.extendedProps);
							
							let d = info.event.extendedProps.data;
							let v = info.event.extendedProps.vendor;
							let c = info.event.extendedProps.customer;
							
							if (d.inv_number) {
								
								let sc = c.filter(x => x.id == d.customer)[0];
								console.log(sc);

								alert(`Inv Numver: ` + d.inv_number + `\nBalance: ` + d.balance 
								+ `\nTotal Price: ` + d.total_price + `\nDue Date: ` + d.due_date + `\nCustomer: ` + sc.label);
							}
							else{
								
								let sv = v.filter(x => x.id == d.vendor)[0];
								console.log(sv);
								alert(`Bill Numver: ` + d.bill_number + `\nBalance: ` + d.balance
									+ `\nTotal Price: ` + d.total_price + `\nDue Date: ` + d.due_date + `\nVendor: ` + sv.label);

							}
						},
						events: this.callendarData,
					};
				}
				)
			}
		);
	}

	changeChartCurr() {
		this.chartCurr = (this.chartCurr == 'USD') ? 'AF' : 'USD';
		this.customDate();
	}

	// changeChartRange(type){		
	// 	if (type == 'm') {
	// 		this.range = 'm';
	// 	} else if (type == 'w') {
	// 		this.range = 'w';
	// 	}
	// 	this.loadChart();
	// }


	customDate(){
		var date = new Date(this.startDate.value);
		var end = new Date(this.endDate.value);
		var dates: any = [this.pipe.transform(this.startDate.value, 'MMMM d')];
		let x;
		this.chartFullDate = [];
		while (date < end) {
			x = date.setDate(date.getDate() + 1);
			dates.push(this.pipe.transform(x, 'MMMM d'));
			this.chartFullDate.push(x);
		}
		this.barChartLabels = dates;
		this.compliteChart(
			this.pipe.transform(this.startDate.value, 'yyyy-MM-dd'),
			this.pipe.transform(this.endDate.value, 'yyyy-MM-dd'));
		// this.loadChart();

	}
	compliteChart(start = null, end = null){
		this.getPayments(start, end);

		this.barChartData = [
			{ data: this.dyIncome, label: 'Income' },
			{ data: this.dyExpense, label: 'Expense' },
			{ data: this.dyProfit, label: 'Profit' }
		];
	}

	genLast7Days(){
		this.dyExpense = [];
		this.dyIncome = [];
		this.dyProfit = [];
		this.range = 'w';
		var date = new Date();
		var dates: any = [this.pipe.transform(date, 'MMMM d')];
		let x;
		for (let i = 1; i < 7; i++) {
			x = date.setDate(date.getDate() - 1);
			dates.unshift(this.pipe.transform(x, 'MMMM d'));
		}
		this.barChartLabels = dates;
		this.compliteChart(
			this.pipe.transform(date, 'yyyy-MM-dd'),
			this.pipe.transform(new Date(), 'yyyy-MM-dd')
		);
		this.customDate();

	}

	// genLast30Days() {
	// 	this.dyExpense = [];
	// 	this.dyIncome = [];
	// 	this.dyProfit = [];
	// 	this.range = 'm';

	// 	var date = new Date();
	// 	var dates = this.getDaysInMonth(date.getMonth(), date.getFullYear());
	// 	this.barChartLabels = dates[0]
	// 	this.compliteChart(
	// 		this.pipe.transform(dates[1][0], 'yyyy-MM-dd'),
	// 		this.pipe.transform(dates[1][dates[1].length-1], 'yyyy-MM-dd')
	// 	);
	// }

/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
	// getDaysInMonth(month, year) {
	// 	var date = new Date(year, month, 1);
	// 	var days = [];
	// 	var daysRead = [];
	// 	while (date.getMonth() === month) {
	// 		days.push(new Date(date));
	// 		daysRead.push(this.pipe.transform(date, 'MMMM d'));
	// 		date.setDate(date.getDate() + 1);
	// 	}
		
	// 	return [daysRead, days];
	// }

	getPayments(start, end){
		this.dyIncome = [];
		this.dyExpense = [];
		this.dyProfit = [];

		let query = 'pay?start=' + start + '&end=' + end + '&curr=' + this.chartCurr+'&';
		this.apiService.loadAll(query).subscribe(
			result => {
				this.diffAmounts(result);
			},
		);
	}

	diffAmounts(data){
		let index = 1;
		this.chartFullDate.forEach(e => {

			let d = this.pipe.transform(e);
			
			let matchPay = data.filter(x => this.pipe.transform(x.created_at) == d);			
			matchPay.forEach(pay => {
				if (pay.type == 'Expense') {
					if (this.dyExpense[index]) {
						this.dyExpense[index] += pay.amount;
					}
					else {
						this.dyExpense[index] = pay.amount;
					}
					if (this.dyProfit[index]) {
						this.dyProfit[index] -= pay.amount;
					}
					else {
						this.dyProfit[index] = -pay.amount;
					}

				} else {
					if (this.dyIncome[index]) {
						this.dyIncome[index] += pay.amount;
					}
					else {
						this.dyIncome[index] = pay.amount;
					}
					if (this.dyProfit[index]) {
						this.dyProfit[index] += pay.amount;
					}
					else {
						this.dyProfit[index] = pay.amount;
					}
				}
			});
			index++;
		});		
	}
}


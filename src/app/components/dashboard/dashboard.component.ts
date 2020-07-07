import { Component, Pipe } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../api.service';
import { ToastService } from '../../shared/toast/toast-service';
import { FormControl, Validators } from '@angular/forms';

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
export class DashboardComponent {
	pipe: DatePipe;

	today: number = Date.now();
	public barChartOptions: ChartOptions = {
		responsive: true,
	};
	public barChartLabels: Label[] = [];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [];

	dyIncome = [];
	dyExpense = [];
	dyProfit = [];
	range = 'w';
	dates;
	chartCurr = 'USD';
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
		this.genLast7Days();
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

	loadChart(){
		// if (this.range == 'm') {
		// 	this.genLast30Days();
		// } else if (this.range == 'w') {
			// this.genLast7Days();
		// }
	}

	customDate(){
		var date = new Date(this.startDate.value);
		var end = new Date(this.endDate.value);
		var dates: any = [this.pipe.transform(this.startDate.value, 'MMMM d')];
		let x;
		while (date < end) {
			x = date.setDate(date.getDate() + 1);
			dates.push(this.pipe.transform(x, 'MMMM d'));
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
		let query = 'pay?start=' + start + '&end=' + end + '&curr=' + this.chartCurr+'&';
		this.apiService.loadAll(query).subscribe(
			result => {
				this.diffAmounts(result);
			},
		);
	}

	diffAmounts(data){
		data.forEach(pay => {
			let index;
			if(this.range == 'w'){
				index = new Date(pay.created_at).getDay();
			}else{
				index = new Date(pay.created_at).getDate()-1;
			}
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
	}
}


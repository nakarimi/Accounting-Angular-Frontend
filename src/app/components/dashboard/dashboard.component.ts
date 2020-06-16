import { Component, Pipe } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../api.service';

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
	public barChartData: ChartDataSets[] = [
		{ data: this.dyIncome, label: 'Income' },
		{ data: this.dyExpense, label: 'Expense' },
		{ data: this.dyProfit, label: 'Profit' }
	];
	days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	constructor(
		private apiService: ApiService
	) { 
		this.pipe = new DatePipe('en');
	}

	ngOnInit() {
		this.genLast7Days();
		this.chartProfitCalc();
		this.getLast7DaysTran();
	}

	getLast7DaysTran(){
		this.apiService.loadAll('trs').subscribe(
			result => {
				console.log(result);
				
				
			},
			error => {
				console.log(error);
			}
		);
	}

	changeChartRange(type){
		if(type == 'm'){
			this.genLast30Days();
		} else if (type == 'w') {
			this.genLast7Days();
		} else if(type == 'y') {
			this.barChartLabels = this.months;
		}
		
	}

	chartProfitCalc() {
		this.barChartLabels.forEach((value: any, key: any) => {
			let profit = (+this.dyIncome[key]) - (+this.dyExpense[key]);
			this.dyProfit.push(profit);
		});
	}
	genLast7Days(){
		var date = new Date();
		var dates: any = [this.pipe.transform(date, 'MMMM d')];
		for (let i = 1; i < 7; i++) {
			// let d = new Date();
			const x = date.setDate(date.getDate() - 1);
			dates.unshift(this.pipe.transform(x, 'MMMM d'));
		}
		this.barChartLabels = dates;
	}

	genLastMonth(){
		var date = new Date();
		var dates: any = [this.pipe.transform(date, 'MMMM d')];
		for (let i = 1; i < 30; i++) {
			let d = new Date();
			const x = d.setMonth(d.getMonth() - i);
			dates.unshift(this.pipe.transform(x, 'MMMM d'));
		}
		this.barChartLabels = dates;
	}

	genCustomYear() {
		// var date = new Date();		
		// var dates: any = [this.pipe.transform(date, 'MMMM d')];
		// for (let i = 1; i < 7; i++) {
		// 	let d = new Date();
		// 	const x = d.setDate(d.getDate() - i);
		// 	dates.unshift(this.pipe.transform(x, 'MMMM d'));
		// }
		// this.barChartLabels = dates;
	}

	genLast30Days() {
		var date = new Date();
		var dates: any = [this.pipe.transform(date, 'MMMM d')];
		for (let i = 1; i < 30; i++) {
			let d = new Date();
			const x = d.setDate(d.getDate() - i);
			dates.unshift(this.pipe.transform(x, 'MMMM d'));
		}
		this.barChartLabels = dates;
	}
}


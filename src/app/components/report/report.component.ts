import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../api.service';
import { DatePipe } from '@angular/common';
import { ExportToCsv } from 'export-to-csv';
import { Router } from '@angular/router';
import { ToastService } from '../../shared/toast/toast-service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportFC = new FormGroup({
    endDate : new FormControl(null, Validators.required),
    currency: new FormControl(null, Validators.required),
    startDate: new FormControl(null, Validators.required),
  })
  pipe;
  paymentsForCSV: any = [];
  invoices:any = [];
  bills:any = [] ;
  accounts:any = [];
  customers:any = [];
  vendors:any = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private toast: ToastService
  ) { 
    this.pipe = new DatePipe('en');
  }

  ngOnInit() {
    this.checkPerm();
  }

  checkPerm() {
    this.api.loadAll('cuser').subscribe(
      result => {
        if (!result[0].is_superuser) {
          this.router.navigate(['/dashboard']);
          this.toast.show("Permission denied!", { classname: 'bg-danger text-light', delay: 5000 });
        }
      })
  }

  invoiceReport() { 
    let start = this.pipe.transform(this.reportFC.value.startDate, 'yyyy-MM-dd');
    let end = this.pipe.transform(this.reportFC.value.endDate, 'yyyy-MM-dd');
    let header = ["ID", "Inv number", "Currency", "Total Price", "Balance", "Due date", "Status", "Created_at", "Updated_at", "Customer"];
    let filename = "Invoices (From " + start + ") (To " + end + ")";
    let query = 'inv?start=' + start + '&end=' + end + '&curr=' + this.reportFC.value.currency + '&';

    this.api.loadAll(query).subscribe(
      (result: any) => {
        this.invoices = result;
        this.api.loadAll('csmr').subscribe(
          (result: any) => {
            this.customers= result;
            this.invoices.forEach((e, k) => {
              let c = this.customers.filter(x => x.id == e.customer)[0];

              if (c && c != undefined) {
                this.invoices[k].customer = c.label;
              }
              else {
                this.invoices[k].customer = "-";
              }
            })

            this.exportCsv(filename, this.invoices, header)
           });

      });


  }
  billReport() {
    let start = this.pipe.transform(this.reportFC.value.startDate, 'yyyy-MM-dd');
    let end = this.pipe.transform(this.reportFC.value.endDate, 'yyyy-MM-dd');
    let header = ["ID", "Bill number", "Currency", "Total price", "Balance", "Due date", "Status", "Created", "Updated", "Vendor"];
    let filename = "Bills (From " + start + ") (To " + end + ")";
    let query = 'bil?start=' + start + '&end=' + end + '&curr=' + this.reportFC.value.currency + '&';

    this.api.loadAll(query).subscribe(
      (result: any) => { 
        this.bills = result;
        this.api.loadAll('vdr').subscribe(
          (result: any) => {
            this.vendors = result;
            this.bills.forEach((e, k) => {
              let v = this.vendors.filter(x => x.id == e.vendor)[0];

              if (v && v != undefined) {
                this.bills[k].vendor = v.label;
              }
              else {
                this.bills[k].vendor = "-";
              }
            })
            this.exportCsv(filename, this.bills, header)
            
           });

      });

   }
  exportPayments() {
    let start = this.pipe.transform(this.reportFC.value.startDate, 'yyyy-MM-dd');
    let end = this.pipe.transform(this.reportFC.value.endDate, 'yyyy-MM-dd');
    let header = ['ID', 'Label', 'Type', 'Currency', "Amount", "Created", "Updated", 'Account', "Bill", "Invoice",];
    let filename = "Payment (From " + start + ") (To " + end + ")";
    let query = 'pay?start=' + start + '&end=' + end + '&curr=' + this.reportFC.value.currency + '&';
    this.api.loadAll(query).subscribe(
      result => {
        this.paymentsForCSV = result;
        this.api.loadAll('acnt').subscribe(
          result => {
            this.accounts = result;
            this.api.loadAll('inv').subscribe(
              (result: any) => {
                this.invoices = result;
                this.api.loadAll('bil').subscribe(
                  (result: any) => {
                    this.bills = result;
                    this.paymentsForCSV.forEach((e, k) => {
                      let a = this.accounts.filter(x => x.id == e.account)[0];
                      let i = this.invoices.filter(x => x.id == e.ref_inv)[0];
                      let b = this.bills.filter(x => x.id == e.ref_bill)[0];

                      if (a && a != undefined) {
                        this.paymentsForCSV[k].account = a.label;
                      }
                      else{
                        this.paymentsForCSV[k].account = "-";
                      }
                      if (i && i != undefined) {
                        this.paymentsForCSV[k].ref_inv = i.inv_number;
                      }
                      else {
                        this.paymentsForCSV[k].ref_inv = "-";
                      }
                      if (b && b != undefined) {
                        this.paymentsForCSV[k].ref_bill = b.bill_number;
                      }
                      else {
                        this.paymentsForCSV[k].ref_bill = "-";
                      }
                    });
                    this.exportCsv(filename, this.paymentsForCSV, header)
                  })
              });
          }
        );
      })

  }

  paymentReport() {
    this.exportPayments();
    // this.api.loadAll('pay').subscribe(
    //   (result: any) => { });

  }
  exportCsv(title, data, headers = null) {

    console.log(title);

    let options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: title,
      filename: title,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      headers: []
      //  <-- Won't work with useKeysAsHeaders present!
    };

    if (headers) {
      options.useKeysAsHeaders = false;
      options.headers = headers;
    }
    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(data);

  }


}

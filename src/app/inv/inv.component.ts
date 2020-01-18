import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html',
  styleUrls: ['./inv.component.css']
})
export class InvComponent implements OnInit {

  @Input() user;
  @Output() newUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.newUser.emit('Hassan');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opj-test',
  templateUrl: './opj-test.component.html',
  styleUrls: ['./opj-test.component.css']
})
export class OpjTestComponent implements OnInit {

  @Input() a: number;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.a = (a)++;
  }
}
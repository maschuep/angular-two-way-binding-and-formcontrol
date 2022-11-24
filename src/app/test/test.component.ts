import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  increment() {
    this.counterChange.emit(++this.counter);
  }
  change() {
    this.counterChange.emit(this.counter);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-test',
  templateUrl: './reactive-test.component.html',
  styleUrls: ['./reactive-test.component.css'],
})
export class ReactiveTestComponent implements OnInit {
  @Input() control: FormControl<string | number>;

  constructor() {}

  ngOnInit() {}
}

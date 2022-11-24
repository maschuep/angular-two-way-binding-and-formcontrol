import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mycounter = 1;

  counters = this.fb.group({
    counter1: new FormControl(121212),
    counter2: new FormControl(0),
  });

  a: { a: 999 };

  constructor(private fb: FormBuilder) {}
}

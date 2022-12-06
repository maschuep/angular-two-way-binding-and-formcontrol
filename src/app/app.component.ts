import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { map, tap, Subject } from 'rxjs';

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

  public a = { a: 999 };

  subj$ = new Subject<any>();
  subj1$ = this.subj$.pipe(map((d) => ({ ...d, a: (d.a += 1) })));

  counter = 0;

  constructor(private fb: FormBuilder) {}

  onCounterChange(e: any) {
    console.log(e);
  }

  go() {
    this.subj$.next(this.a);
  }
}

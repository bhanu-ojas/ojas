import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { switchMap, startWith } from 'rxjs/operators';
import { Subscription, interval, timer } from 'rxjs';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  result;
  dis: string;
constructor(private s: DataService) { }

  getdata() {
  interval(10000).pipe(startWith(0),
      switchMap(() => this.s.neelu())
    )
      .subscribe(resp => {
      this.result = resp['hits']
        console.log(resp)
      })
      ;
  }
  click(set) {
    this.dis = JSON.stringify(set)
  }
  ngOnInit() {
    this.getdata();

  }
}

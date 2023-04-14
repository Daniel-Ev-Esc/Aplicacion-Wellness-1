import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { map, Observable, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor() { 
    
  }
  
  ngOnInit() {
  }

  private _time$: Observable<Date> = timer(0, 1000).pipe
    (map(tick => new Date()),
      shareReplay(1)
    );

  get time(){
    return this._time$;
  }

}

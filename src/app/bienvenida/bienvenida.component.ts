import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent {
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

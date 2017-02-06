import { Component, Input } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'score-table',
  templateUrl: 'scoretable.component.html'
})
export class ScoreTable {
  @Input() player: string;
  @Input() innings: Observable<Array<Object>>;
  @Input() turn: number;
  total: number = 0;

  constructor() {}
}

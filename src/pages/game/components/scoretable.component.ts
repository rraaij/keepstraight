import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { AppState } from "../../../app/services/app-state";
import { Store } from "@ngrx/store";
import { GameActions } from "../../../app/actions/game-actions";

@Component({
  selector: 'score-table',
  templateUrl: 'scoretable.component.html'
})
export class ScoreTable {
  @Input() player: string;
  @Input() innings: Observable<Array<Object>>;
  @Input() hasTurn: boolean;
  @Input() hasWon: boolean;
  total: number = 0;

  @Output() onTableClicked: EventEmitter<boolean>;

  constructor(
    private store: Store<AppState>,
    private gameActions: GameActions
  ) {
    this.onTableClicked = new EventEmitter<boolean>();
  }

  toggleTurn(event) {
    this.onTableClicked.emit(this.hasTurn);
  }
}

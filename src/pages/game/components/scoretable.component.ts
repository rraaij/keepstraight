import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/rx';
import {AppState} from "../../../app/services/app-state";
import {Store} from "@ngrx/store";
import {GameActions} from "../../../app/actions/game-actions";

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

  constructor(
    private store: Store<AppState>,
    private gameActions: GameActions
  ) {}

  toggleTurn(event) {
    if(!this.hasTurn) {
      this.store.dispatch(this.gameActions.switchPlayer());
    }
  }
}

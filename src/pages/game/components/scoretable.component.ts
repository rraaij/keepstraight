import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Player} from "../../../app/models/game-model";

@Component({
  selector: 'score-table',
  templateUrl: 'scoretable.component.html'
})
export class ScoreTable {
  @Input() player: Player;
  @Input() side: string;

  @Output() onTableClicked: EventEmitter<boolean>;
  @Output() onRemoveInning: EventEmitter<Object>;

  constructor() {
    this.onTableClicked = new EventEmitter<boolean>();
    this.onRemoveInning = new EventEmitter<Object>();
  }

  isLastInning(inning) {
    return this.player.innings !== undefined && this.player.innings.indexOf(inning) === this.player.innings.length-1;
  }

  removeInning(inning) {
    this.onRemoveInning.emit({...inning, side: this.side});
  }

  toggleTurn(event) {
    this.onTableClicked.emit(this.player.hasTurn);
  }
}

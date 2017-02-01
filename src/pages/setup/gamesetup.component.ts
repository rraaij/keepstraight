import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { GameSetup } from '../../app/models/game-setup';

@Component({
  selector: 'setup-controls',
  templateUrl: 'gamesetup.component.html',
  styles: [`
    .score {
        font-size: xx-large;
        font-weight: bold;
        text-align: center;
        color: #387ef5;
    }
  `]
})
export class SetupControls implements OnChanges {
  @Input() gameSetup;
  playerOne: string;
  playerTwo: string;
  playerOneStarts: boolean = true;
  targetscore: number;

  @Output() onSetupChanged: EventEmitter<GameSetup>;

  constructor() {
    this.onSetupChanged = new EventEmitter<GameSetup>();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['gameSetup'].currentValue);
    this.playerOne = this.gameSetup.playerOne.name;
    this.playerTwo = this.gameSetup.playerTwo.name;
    this.targetscore = this.gameSetup.targetscore;
    this.playerOneStarts = this.gameSetup.playerOneStarts;
  }

  changeName(event, player) {
    if (player === 1 ) {
      this.gameSetup.playerOne.name = event;
    } else {
      this.gameSetup.playerTwo.name = event;
    }
    this.onSetupChanged.emit(this.gameSetup);
  }

  editTargetscore(event, editvalue) {
    this.gameSetup.targetscore += editvalue;
    this.targetscore = this.gameSetup.targetscore;
    this.onSetupChanged.emit(this.gameSetup);
  }

  selectStartingPlayer(event, player) {
    this.gameSetup.playerOneStarts = player === 1;
    this.playerOneStarts = this.gameSetup.playerOneStarts;
    this.onSetupChanged.emit(this.gameSetup);
  }
}

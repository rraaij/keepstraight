import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { GameSetup } from '../../app/models/game-setup';

@Component({
  selector: 'setup-controls',
  templateUrl: 'gamesetup.component.html'
})
export class SetupControls implements OnChanges {
  @Input() gameSetup;
  playerOne: string;
  playerTwo: string;
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
  }

  changeName(event, player) {
    if (player === 1 ) {
      this.gameSetup.playerOne.name = event;
    } else {
      this.gameSetup.playerTwo.name = event;
    }
    this.onSetupChanged.emit(this.gameSetup);
  }

  changeTargetscore(event) {
    this.gameSetup.targetscore = event;
    this.onSetupChanged.emit(this.gameSetup);
  }
}

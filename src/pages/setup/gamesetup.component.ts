import {Component, OnChanges, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { SetupModel } from '../../app/models/setup-model';

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
  @Input() gameSetup: SetupModel;
  playerOne: string;
  playerTwo: string;
  playerOneStarts: boolean = true;
  targetscore: number;

  @Output() onSetupChanged: EventEmitter<SetupModel>;

  constructor() {
    this.onSetupChanged = new EventEmitter<SetupModel>();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['gameSetup'].currentValue);
    this.playerOne = this.gameSetup.playerOne;
    this.playerTwo = this.gameSetup.playerTwo;
    this.targetscore = this.gameSetup.targetscore;
    this.playerOneStarts = this.gameSetup.playerOneStarts;
  }

  changeName(event, player) {
    if (player === 1 ) {
      this.gameSetup.playerOne = event;
    } else {
      this.gameSetup.playerTwo = event;
    }
    this.onSetupChanged.emit(this.gameSetup);
  }

  editTargetscore(editvalue) {
    this.gameSetup.targetscore += editvalue;
    this.targetscore = this.gameSetup.targetscore;
    this.onSetupChanged.emit(this.gameSetup);
  }

  selectStartingPlayer(player) {
    this.gameSetup.playerOneStarts = player === 1;
    this.playerOneStarts = this.gameSetup.playerOneStarts;
    this.onSetupChanged.emit(this.gameSetup);
  }
}

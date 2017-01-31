import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'game-setup',
  templateUrl: 'gamesetup.component.html'
})
export class GameSetup implements OnChanges {
  @Input() gameSetup;
  playerOne: string;
  playerTwo: string;
  targetscore: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['gameSetup'].currentValue);
    this.playerOne = this.gameSetup.playerOne.name;
    this.playerTwo = this.gameSetup.playerTwo.name;
    this.targetscore = this.gameSetup.targetscore;
  }

  changeName(event, player) {
    console.log('>> CHANGE:', event, player);
  }

  changeTargetscore(event) {
    console.log('>> SCORE:', event);
  }
}

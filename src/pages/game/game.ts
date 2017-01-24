import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { GameSetup } from '../../app/models/game-setup';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  public setupInfo: GameSetup;
  constructor(public nav: NavController, params: NavParams) {
    this.setupInfo = params.get('setup');
  }

  gotoSetup() {
    this.nav.pop();
  }
}

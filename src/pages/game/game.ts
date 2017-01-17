import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SetupPage } from '../setup/setup';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  constructor(public nav: NavController) {

  }

  gotoSetup() {
    this.nav.push(SetupPage);
  }
}

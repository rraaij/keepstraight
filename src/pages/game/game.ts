import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  constructor(public nav: NavController) {

  }

  gotoSetup() {
    this.nav.pop();
  }
}

import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import {Player} from "../../app/models/game-model";

@Component({
  templateUrl: 'updatescore.modal.html',
  styles: [`
    .balls {
        font-size: xx-large;
        font-weight: bold;
        color: #387ef5;
    }
  `]
})
export class UpdateScore {
  player: Player;
  max: number;
  balls: number = 2;
  foul: boolean = false;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController
  ) {
    this.player = params.get('player');
    this.max = Math.min(params.get('run'), 15);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.viewCtrl.dismiss({ balls: this.balls, foul: this.foul });
  }
}

import { Component } from '@angular/core';
import {Platform, NavParams, ViewController, AlertController} from 'ionic-angular';
import {Player} from "../../../app/models/game-model";

@Component({
  templateUrl: 'updatescore.modal.html',
  styles: [`
    .blue-bold-center {
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
              public viewCtrl: ViewController,
              public alertCtrl: AlertController
  ) {
    this.player = params.get('player');
    this.max = Math.min(params.get('run'), 15);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  updateBalls(indicator) {
    if(indicator === "more") {
      this.balls ++;
    } else {
      this.balls --;
    }
  }

  inningEndedInFoul(foul) {
    this.foul = foul;
  }

  submit() {
    if(this.player.consecutiveFouls === 2) {
      let confirm = this.alertCtrl.create({
        title: '3rd consecutive foul?',
        message: 'It seems that this is the 3rd consecutive foul for this player. That would mean that he gets a penalty of 15 points. Also the table should be reracked. Is that correct?',
        buttons: [
          {
            text: 'Yes, that\'s right.',
            handler: () => {
              this.viewCtrl.dismiss({ balls: this.balls, foul: this.foul, thirdFoul: true });
            }
          },
          {
            text: 'No, that\'s not right',
            handler: () => {
              this.viewCtrl.dismiss({ balls: this.balls, foul: this.foul, thirdFoul: false });
            }
          }
        ]
      });
      confirm.present();
    } else {
      this.viewCtrl.dismiss({balls: this.balls, foul: this.foul, thirdFoul: false});
    }
  }
}

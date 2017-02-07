import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import {Player} from "../../app/models/game-model";
import {GameActions} from "../../app/actions/game-actions";
import {AppState} from "../../app/services/app-state";

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
  run: number;
  balls: number = 2;
  foul: boolean = false;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController,
              private store: Store<AppState>,
              private gameActions: GameActions
  ) {
    this.player = params.get('player');
    this.run = params.get('run');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.store.dispatch(this.gameActions.submitInning(
      {
        run: this.run - this.balls - (this.foul ? 1 : 0),
        foul: this.foul
      }
    ));
    this.store.dispatch(this.gameActions.switchPlayer());
    this.viewCtrl.dismiss();
  }
}

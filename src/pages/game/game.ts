import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController, ModalController } from 'ionic-angular';
import { UpdateScore } from './updatescore.modal';
import { Game } from '../../app/models';
import { AppState } from '../../app/services/app-state';
import { Observable } from 'rxjs/rx';
import {Player} from "../../app/models/game-model";

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamePage implements OnInit {
  public game: Observable<Game>;
  playerOne: Player;
  playerTwo: Player;
  targetscore: number;
  possibleRun: number;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    private store: Store<AppState>
  ) {
    this.game = this.store.select(state => state.game);

    this.possibleRun = 15;
  }

  ngOnInit() {
    this.game.subscribe(
      gamedata => {
        if(gamedata.playerOne && gamedata.playerTwo) {
          this.playerOne = gamedata.playerOne;
          this.playerTwo = gamedata.playerTwo;
          this.targetscore = gamedata.targetscore;
        }
      }
    );
  }

  getCurrentScore(player) {
    let total = 0;
    const innings = this[`player${player}`].innings;
    if (innings.length > 0) {
      innings.map(inning => {
        total += inning.run;
      })
    }
    return total;
  }

  showCorrectionModel() {
    console.log('showCorrectionModel');
  }

  rerack() {
    this.possibleRun += 14;
  }

  updateScore() {
    const player = this.playerOne.hasTurn ? this.playerOne : this.playerTwo;
    let modal = this.modal.create(UpdateScore, { player, run: this.possibleRun});
    modal.present();
  }

  gotoSetup() {
    this.nav.pop();
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController, ModalController } from 'ionic-angular';
import { UpdateScore } from './updatescore.modal';
import { GameModel } from '../../app/models';
import { AppState } from '../../app/services/app-state';
import { Observable } from 'rxjs/rx';
import {GameActions} from "../../app/actions/game-actions";

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamePage implements OnInit {
  public game: Observable<GameModel>;
  playerOne: Object;
  playerTwo: Object;
  targetscore: number;
  possibleRun: number;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    private store: Store<AppState>,
    private gameActions: GameActions
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
    let modal = this.modal.create(UpdateScore);
    modal.present();

    // this.store.dispatch(this.gameActions.submitInning(
    //   {
    //     run: Math.floor(Math.random() * 12) + 1,
    //     foul: true
    //   }
    // ));
    // this.store.dispatch(this.gameActions.switchPlayer());
  }

  gotoSetup() {
    this.nav.pop();
  }
}

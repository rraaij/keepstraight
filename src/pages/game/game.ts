import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController, ModalController } from 'ionic-angular';
import { UpdateScore } from './components/updatescore.modal';
import { Game } from '../../app/models';
import { AppState } from '../../app/services/app-state';
import { Observable } from 'rxjs/rx';
import {Player} from "../../app/models/game-model";
import {GameActions} from "../../app/actions/game-actions";

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
  winner: string;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    private store: Store<AppState>,
    private gameActions: GameActions,
    private ref: ChangeDetectorRef
  ) {
    this.game = this.store.select(state => state.game);

    this.possibleRun = 15;

  }

  ngOnInit() {
    this.game.subscribe(
      gamedata => {
        // This ChangeDetectorRef stuff needs to be here so the
        // controls on screen will be updated when data changes.
        this.ref.markForCheck();
        setInterval(() => {
          this.ref.markForCheck();
        }, 100);

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

    // determine if there is a winner yet
    this.winner = this.playerOne.hasWon ? 'One' : (this.playerTwo.hasWon ? 'Two' : undefined);

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

    modal.onDidDismiss(data => {
      if (data) {
        this.store.dispatch(this.gameActions.submitInning(
          {
            run: this.possibleRun - data.balls,
            foul: data.foul
          }
        ));
        this.store.dispatch(this.gameActions.switchPlayer());
      }
      this.possibleRun = data.balls;
    });

    modal.present();
  }

  gotoSetup() {
    this.nav.pop();
  }
}

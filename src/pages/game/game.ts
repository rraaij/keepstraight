import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
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

  constructor(
    public nav: NavController,
    private store: Store<AppState>,
    private gameActions: GameActions
  ) {
    this.game = this.store.select(state => state.game);
  }

  ngOnInit() {
    this.game.subscribe(
      gamedata => {
        if(gamedata.playerOne && gamedata.playerTwo) {
          this.playerOne = gamedata.playerOne;
          this.playerTwo = gamedata.playerTwo;
        }
      }
    );
  }

  showCorrectionModel() {
    console.log('showCorrectionModel');
  }

  rerack() {
    console.log('rerack');
  }

  updateScore() {
    this.store.dispatch(this.gameActions.submitInning(
      {
        run: Math.floor(Math.random() * 12) + 1,
        foul: false
      }
    ));
    this.store.dispatch(this.gameActions.switchPlayer());
  }

  gotoSetup() {
    this.nav.pop();
  }
}

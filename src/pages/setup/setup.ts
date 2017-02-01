import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import { NavController} from 'ionic-angular';

import { GamePage } from '../game/game';
import { SetupModel } from '../../app/models';
import { AppState } from '../../app/services/app-state';
import { GameModel } from "../../app/models/game-model";
import {GameActions} from "../../app/actions/game-actions";

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupPage implements OnInit {
  public setup: Observable<SetupModel>;
  setupData: SetupModel;

  constructor(
    public nav: NavController,
    private store: Store<AppState>,
    private gameActions: GameActions
  ) {
    // 'game' here connects to 'game' in the AppState
    this.setup = this.store.select(state => state.setup);
  }

  ngOnInit() {
    this.setup.subscribe(
      gamedata => {
        this.setupData = gamedata;
      }
    );
  }

  setupChanged(event) {
    this.setupData = {
      playerOne: event.playerOne,
      playerTwo: event.playerTwo,
      targetscore: event.targetscore,
      playerOneStarts: event.playerOneStarts
    }
  }

  startNewGame() {
    if(this.setupData !== undefined) {
      let game: GameModel = {
        playerOne: { name: this.setupData.playerOne, innings: [] },
        playerTwo: { name: this.setupData.playerTwo, innings: [] },
        targetscore: this.setupData.targetscore,
        playerTurn: this.setupData.playerOneStarts ? 1 : 2
      };
      this.store.dispatch(this.gameActions.newGame(game));
      this.nav.push(GamePage);
    } else {
      console.error('[SETUP] startNewGame(setupinfo)', this.setupData);
    }
  }
}

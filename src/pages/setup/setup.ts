import {Component, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import { NavController} from 'ionic-angular';

import { GamePage } from '../game/game';
import { GameSetup } from '../../app/models/game-setup';
import { AppState } from '../../app/services/app-state';
import { SetupActions } from '../../app/actions';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupPage {
  public gamesetup: Observable<GameSetup>;
  setupData: GameSetup;

  constructor(
    public nav: NavController,
    private store: Store<AppState>,
    private setupActions: SetupActions
  ) {
    // 'game' here connects to 'game' in the AppState
    this.gamesetup = this.store.select(state => state.game);
  }

  setupChanged(event) {
    console.log('[SETUP] setupChanged(): ', event);

    this.setupData = {
      playerOne: { name: event.playerOne.name, innings: [] },
      playerTwo: { name: event.playerTwo.name, innings: [] },
      targetscore: event.targetscore,
      playerOneStarts: event.playerOneStarts,
      playerTurn: event.playerOneStarts ? 1 : 2
    }
  }

  startNewGame(setupInfo) {
    if(setupInfo !== undefined) {
      this.store.dispatch(this.setupActions.newGame(this.setupData));
      this.nav.push(GamePage, {gamesetup: this.gamesetup});
    } else {
      console.error('[SETUP] startNewGame(setupinfo)', setupInfo);
    }
  }
}

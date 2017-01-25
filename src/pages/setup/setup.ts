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
  public setup: Observable<GameSetup>;

  constructor(
    public nav: NavController,
    private store: Store<AppState>,
    private setupActions: SetupActions
  ) {
    // 'game' here connects to 'game' in the AppState
    this.setup = this.store.select(state => state.game);
  }

  startNewGame(setupInfo) {
    let setup: GameSetup = {
      playerOne: { name: setupInfo.playerOne, innings: [] },
      playerTwo: { name: setupInfo.playerTwo, innings: [] },
      targetscore: 100,
      playerOneStarts: true,
      playerTurn: 1
    }
    this.store.dispatch(this.setupActions.newGame(setup));
    this.nav.push(GamePage, { setup });
  }
}

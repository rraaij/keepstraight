import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import { NavController} from 'ionic-angular';

import { GamePage } from '../game/game';
import { SetupModel } from '../../app/models';
import { AppState } from '../../app/services/app-state';
import { GameActions } from '../../app/actions';

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
      playerOne: { name: event.playerOne.name, innings: [] },
      playerTwo: { name: event.playerTwo.name, innings: [] },
      targetscore: event.targetscore,
      playerOneStarts: event.playerOneStarts,
      playerTurn: event.playerOneStarts ? 1 : 2
    }
  }

  startNewGame() {
    if(this.setupData !== undefined) {
      this.store.dispatch(this.gameActions.newGame(this.setupData));
      this.nav.push(GamePage, {SetupModel: this.setup});
    } else {
      console.error('[SETUP] startNewGame(setupinfo)', this.setupData);
    }
  }
}

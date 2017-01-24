import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { NavController} from 'ionic-angular';

import { GamePage } from '../game/game';
import { GameSetup } from '../../app/models/game-setup';
import { AppState } from '../../app/reducers';
import { SetupActions } from '../../app/actions';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupPage {
  @Input() setupInfo: Observable<GameSetup>;

  constructor(
    public nav: NavController,
    private store: Store<AppState>,
    private setupActions: SetupActions
  ) {
    // 'setup' here connects to ../app/reducers/index.ts where 'setup'
    // is defined as a reduce so that it can be used in this component.
    this.setupInfo = store.select(state => state.setup);
  }

  startNewGame(setupInfo) {
    let setup: GameSetup = {
      playerOne: setupInfo.playerOne,
      playerTwo: setupInfo.playerTwo,
      targetscore: 100,
      playerOneStarts: true
    }
    this.store.dispatch(this.setupActions.newGame(setup));
    this.nav.push(GamePage);
  }
}

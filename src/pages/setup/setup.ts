import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { NavController} from 'ionic-angular';

import { GamePage } from '../game/game';
import { Setup } from '../../app/models/setup';
import { AppState } from '../../app/reducers';
import { SetupActions } from '../../app/actions';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
  setupInfo: Observable<Setup>;

  constructor(
    public nav: NavController,
    private store: Store<AppState>,
    private setupActions: SetupActions
  ) {
    // 'setup' here connects to ../app/reducers/index.ts where 'setup'
    // is defined as a reduce so that it can be used in this component.
    this.setupInfo = store.select('setup');
  }

  startNewGame() {
    this.setupActions.newGame(this.setupInfo);
    this.nav.push(GamePage);
  }
}

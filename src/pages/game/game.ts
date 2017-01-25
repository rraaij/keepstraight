import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavParams, NavController } from 'ionic-angular';
import { GameSetup } from '../../app/models/game-setup';
import { AppState } from '../../app/services/app-state';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  public setupInfo: Observable<GameSetup>;

  constructor(
    public nav: NavController,
    private params: NavParams,
    private store: Store<AppState>
  ) {
    // this.setupInfo = params.get('setup');
    this.setupInfo = this.store.select(state => state.setup);
  }

  gotoSetup() {
    this.nav.pop();
  }
}

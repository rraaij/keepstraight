import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavParams, NavController } from 'ionic-angular';
import { GameSetup } from '../../app/models/game-setup';
import { AppState } from '../../app/services/app-state';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage implements OnInit {
  public game: Observable<GameSetup>;
  playerturn: number;
  playerOne: Object;
  playerTwo: Object;

  constructor(
    public nav: NavController,
    private params: NavParams,
    private store: Store<AppState>
  ) {
    // this.setupInfo = params.get('setup');
    this.game = this.store.select(state => state.game);
  }

  ngOnInit() {
    this.game.subscribe(
      gamedata => {
        if(gamedata.playerOne && gamedata.playerTwo && gamedata.playerTurn) {
          this.playerOne = gamedata.playerOne;
          this.playerTwo = gamedata.playerTwo;
          this.playerturn = gamedata.playerTurn;
        }
      }
    );
  }

  showCorrectionModel() {
    console.log('showCorrectionModel');
  }

  gotoSetup() {
    this.nav.pop();
  }
}

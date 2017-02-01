import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { GameModel } from '../../app/models';
import { AppState } from '../../app/services/app-state';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage implements OnInit {
  public game: Observable<GameModel>;
  playerturn: number;
  playerOne: Object;
  playerTwo: Object;

  constructor(
    public nav: NavController,
    private store: Store<AppState>
  ) {
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

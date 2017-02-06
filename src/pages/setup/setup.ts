import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import { NavController, ActionSheetController } from 'ionic-angular';

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
    public actionsheet: ActionSheetController,
    private store: Store<AppState>,
    private gameActions: GameActions
  ) {
    // 'setup' here connects to 'setup' in the AppState
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
    if(!this.setupData.playerOne || this.setupData.playerOne === "" || !this.setupData.playerTwo || this.setupData.playerTwo === "") {
      let actionsheet = this.actionsheet.create({
        title: 'You didn\'t specify both player\'s usernames. Their names will be \'Player One\' and \'Player Two\'. Is that okay?',
        cssClass: 'setup-actionsheet',
        buttons: [
          {
            text: 'No, I\'ll specify their names.',
            icon: 'md-alert',
            role: 'cancel'
          },
          {
            text: 'Yes, that\'s fine.',
            icon: 'md-checkmark-circle',
            role: 'destructive',
            handler: () => {
              this.setupData.playerOne = "Player One";
              this.setupData.playerTwo = "Player Two";
              this.newGame(this.setupData);
            }
          }
        ]
      });
      actionsheet.present();
    } else {
      this.newGame(this.setupData);
    }
  }

  private newGame(setup: SetupModel) {
    let game: GameModel = {
      playerOne: { name: setup.playerOne, hasTurn: setup.playerOneStarts, innings: [] },
      playerTwo: { name: setup.playerTwo, hasTurn: !setup.playerOneStarts, innings: [] },
      targetscore: setup.targetscore
    };

    this.store.dispatch(this.gameActions.newGame(game));
    this.nav.push(GamePage);
  }
}

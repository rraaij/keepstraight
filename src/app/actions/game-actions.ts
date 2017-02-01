import {Injectable} from '@angular/core';
import { Action} from '@ngrx/store';

import { SetupModel, GameModel } from '../models';

@Injectable()
export class GameActions {

  static NEW_GAME = '[SETUP] New Game';
  newGame(game: GameModel): Action {
    return {
      type: GameActions.NEW_GAME,
      payload: game
    };
  }
  static SAVE_SETUP_SUCCESS = '[SETUP] Save setup success';
  saveSetupSuccess(setup: SetupModel): Action {
    return {
      type: GameActions.SAVE_SETUP_SUCCESS,
      payload: setup
    }
  }

}

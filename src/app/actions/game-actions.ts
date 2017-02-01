import {Injectable} from '@angular/core';
import { Action} from '@ngrx/store';

import { GameSetup } from '../models/game-setup';

@Injectable()
export class GameActions {
  static NEW_GAME = '[SETUP] New Game';
  newGame(gameSetup: GameSetup): Action {
    return {
      type: GameActions.NEW_GAME,
      payload: gameSetup
    };
  }

  static SAVE_SETUP_SUCCESS = '[SETUP] Save setup success';
  saveSetupSuccess(gameSetup: GameSetup): Action {
    return {
      type: GameActions.SAVE_SETUP_SUCCESS,
      payload: gameSetup
    }
  }

}

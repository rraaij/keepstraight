import {Injectable} from '@angular/core';
import { Action} from '@ngrx/store';

import { GameSetup } from '../models/game-setup';

@Injectable()
export class GameActions {

  static SAVE_SETUP_SUCCESS = '[SETUP] Save setup success';
  saveSetupSuccess(gameSetup: GameSetup): Action {
    return {
      type: GameActions.SAVE_SETUP_SUCCESS,
      payload: gameSetup
    }
  }

}

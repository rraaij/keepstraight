import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { GameSetup } from '../models/game-setup';

@Injectable()
export class SetupActions {
  static NEW_GAME = '[SETUP] New Game';
  newGame(gameSetup: GameSetup): Action {
    return {
      type: SetupActions.NEW_GAME,
      payload: gameSetup
    };
  }

  static SAVE_SETUP_SUCCESS = '[SETUP] Save setup success';
  saveSetupSuccess(gameSetup: GameSetup): Action {
    return {
      type: SetupActions.SAVE_SETUP_SUCCESS,
      payload: gameSetup
    }
  }

  static LOAD_SETUP_SUCCESS = '[SETUP] Load setup success';
  loadSetupSuccess(gameData: any): Action {
    return {
      type: SetupActions.LOAD_SETUP_SUCCESS,
      payload: gameData
    }
  }

  static GAMEDATA_CHANGE_SUCCESS = '[GAME] data change success';
  gamedataChangeSuccess(change: any): Action {
    return {
      type: SetupActions.GAMEDATA_CHANGE_SUCCESS,
      payload: change
    }
  }
}

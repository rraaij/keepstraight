import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { SetupModel } from '../models/setup-model';

@Injectable()
export class SetupActions {
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

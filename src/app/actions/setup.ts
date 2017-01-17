import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class SetupActions {
  static GET_INFO = '[SETUP] Get Info';
  getInfo(): Action {
    return {
      type: SetupActions.GET_INFO
    };
  }

  static NEW_GAME = '[SETUP] New Game';
  newGame(gameInfo): Action {
    return {
      type: SetupActions.NEW_GAME,
      payload: gameInfo
    };
  }
}

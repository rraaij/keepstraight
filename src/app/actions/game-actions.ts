import {Injectable} from '@angular/core';
import { Action} from '@ngrx/store';

import { SetupModel, GameModel } from '../models';
import {Inning} from "../models/game-model";

@Injectable()
export class GameActions {

  static NEW_GAME = '[GAME] New Game';
  newGame(game: GameModel): Action {
    return {
      type: GameActions.NEW_GAME,
      payload: game
    };
  }

  static SUBMIT_INNING = '[GAME] Submit Inning';
  submitInning(inning: Inning) {
    return {
      type: GameActions.SUBMIT_INNING,
      payload: { inning }
    }
  }

  static SWITCH_PLAYER = '[GAME] Switch Player';
  switchPlayer() {
    return {
      type: GameActions.SWITCH_PLAYER
    }
  }

  static SAVE_SETUP_SUCCESS = '[SETUP] Save setup success';
  saveSetupSuccess(setup: SetupModel): Action {
    return {
      type: GameActions.SAVE_SETUP_SUCCESS,
      payload: setup
    }
  }

}

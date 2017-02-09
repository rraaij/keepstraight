import {Injectable} from '@angular/core';
import { Action} from '@ngrx/store';

import { Setup, Game } from '../models';
import {Inning} from "../models/game-model";

@Injectable()
export class GameActions {

  static NEW_GAME = '[GAME] New Game';
  newGame(game: Game): Action {
    return {
      type: GameActions.NEW_GAME,
      payload: game
    }
  }

  static UPDATE_POSSIBLE_RUN = '[GAME] Update Possible Run';
  updatePossibleRun(value: number): Action {
    return {
      type: GameActions.UPDATE_POSSIBLE_RUN,
      payload: { value }
    }
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
  saveSetupSuccess(setup: Setup): Action {
    return {
      type: GameActions.SAVE_SETUP_SUCCESS,
      payload: setup
    }
  }

}

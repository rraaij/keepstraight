import { Action, ActionReducer } from '@ngrx/store';

import { GameModel } from '../models';
import { GameActions } from '../actions';
import {Inning} from "../models/game-model";

const initialState: GameModel = {
  playerOne: { name: '' },
  playerTwo: { name: '' },
  targetscore: 100,
  playerTurn: 1
};

export const GameReducer: ActionReducer<GameModel> =  (state: GameModel = initialState, action: Action) => {
  switch (action.type) {
    case GameActions.NEW_GAME: {
      return action.payload;
    }

    case GameActions.SUBMIT_INNING: {
      let player = state.playerTurn === 1 ? 'One' : 'Two';

        // TODO: SubmitInning here!
      let inning: Inning = {
        inning: 0,
        run: action.payload.inning.run,
        foul: action.payload.inning.foul,
        score: action.payload.inning.run
      }
      state[`player${player}`].innings.push(inning);
      return state;
    }

    case GameActions.SWITCH_PLAYER: {
      // TODO: switchPlayer
      state.playerTurn = state.playerTurn === 1 ? 2 : 1;
      return state;
    }

    case GameActions.SAVE_SETUP_SUCCESS: {
      if(!action.payload.ok) console.error(`[${action.type}] save setup FAILED`);
      return state;
    }

    default: {
      return state;
    }
  }
};

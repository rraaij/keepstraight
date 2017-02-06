import { Action, ActionReducer } from '@ngrx/store';

import { GameModel } from '../models';
import { GameActions } from '../actions';
import {Inning} from "../models/game-model";

const initialState: GameModel = {
  playerOne: { name: '', hasTurn: true },
  playerTwo: { name: '', hasTurn: false },
  targetscore: 100
};

export const GameReducer: ActionReducer<GameModel> =  (state: GameModel = initialState, action: Action) => {
  switch (action.type) {
    case GameActions.NEW_GAME: {
      return action.payload;
    }

    case GameActions.SUBMIT_INNING: {
      const player = state.playerOne.hasTurn ? 'One' : 'Two';
      let innings = state[`player${player}`].innings;
      const lastInning = innings.length > 0 ? innings[innings.length-1] : { inning: 0, score: 0 };

        // TODO: SubmitInning here!
      let inning: Inning = {
        inning: lastInning.inning + 1,
        run: action.payload.inning.run,
        foul: action.payload.inning.foul,
        score: lastInning.score + action.payload.inning.run
      }
      innings.push(inning);
      return state;
    }

    case GameActions.SWITCH_PLAYER: {
      state.playerOne.hasTurn = !state.playerOne.hasTurn;
      state.playerTwo.hasTurn = !state.playerTwo.hasTurn;
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

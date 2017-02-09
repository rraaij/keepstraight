import { Action, ActionReducer } from '@ngrx/store';

import { Game } from '../models';
import { GameActions } from '../actions';
import {Inning} from "../models/game-model";

const initialState: Game = {
  playerOne: { name: '', hasTurn: true, hasWon: false },
  playerTwo: { name: '', hasTurn: false, hasWon: false },
  targetscore: 100,
  possibleRun: 15
};

export const GameReducer: ActionReducer<Game> =  (state: Game = initialState, action: Action) => {
  switch (action.type) {
    case GameActions.NEW_GAME: {
      return action.payload;
    }

    case GameActions.UPDATE_POSSIBLE_RUN: {
      return { ...state, possibleRun: action.payload.value }
    }

    case GameActions.SUBMIT_INNING: {
      const player = state.playerOne.hasTurn ? 'One' : 'Two';
      let innings = state[`player${player}`].innings;
      const lastInning = innings.length > 0 ? innings[innings.length-1] : { inning: 0, score: 0 };
      const score = lastInning.score + action.payload.inning.run - (action.payload.inning.foul ? 1 : 0);

      // Submit the actual inning
      let inning: Inning = {
        inning: lastInning.inning + 1,
        run: action.payload.inning.run,
        foul: action.payload.inning.foul,
        score: score
      }
      innings.push(inning);

      // Determine if this player has won the game yet
      state[`player${player}`].hasWon = score >= state.targetscore;

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

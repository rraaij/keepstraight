import { Action, ActionReducer } from '@ngrx/store';

import { Game } from '../models';
import { GameActions } from '../actions';
import {Inning, Player} from "../models/game-model";

const initialState: Game = {
  playerOne: { name: '', hasTurn: true, consecutiveFouls: 0, hasWon: false },
  playerTwo: { name: '', hasTurn: false, consecutiveFouls: 0, hasWon: false },
  targetscore: 100,
  possibleRun: 15
};

const submitInning = (innings, newInning): Inning => {
  const lastInning = innings.length > 0 ? innings[innings.length-1] : { inning: 0, score: 0 };
  const score = lastInning.score + newInning.run - (newInning.foul ? 1 : 0);

  // Submit the actual inning
  let inning: Inning = {
    inning: lastInning.inning + 1,
    run: newInning.run,
    foul: newInning.foul,
    score: score
  }
  innings.push(inning);
  return inning;
}

export const GameReducer: ActionReducer<Game> =  (state: Game = initialState, action: Action) => {

  const getPlayer = (): Player => {
    const player = state.playerOne.hasTurn ? 'One' : 'Two';
    return state[`player${player}`];
  }

  switch (action.type) {
    case GameActions.NEW_GAME: {
      return action.payload;
    }

    case GameActions.UPDATE_POSSIBLE_RUN: {
      return { ...state, possibleRun: action.payload.value }
    }

    case GameActions.SUBMIT_INNING: {
      const player = getPlayer();
      let innings = player.innings;

      let inning = submitInning(innings, action.payload.inning);

      // Determine if this player has won the game yet
      player.hasWon = inning.score >= state.targetscore;

      return state;
    }

    case GameActions.UPDATE_FOULS: {
      const player = getPlayer();

      // Update the number of consecutive fouls for this player
      if (action.payload.foul.foul) {
        if(action.payload.foul.thirdFoul) {
          let innings = player.innings;
          submitInning(innings, { run: -15, foul: false });
          player.consecutiveFouls = 0;
        } else {
          player.consecutiveFouls ++;
        }
      } else {
        player.consecutiveFouls = 0;
      }
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

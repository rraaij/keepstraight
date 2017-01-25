import { Action, ActionReducer } from '@ngrx/store';

import { GameSetup } from '../models';
import { SetupActions } from '../actions';

const initialState: GameSetup = {
  playerOne: { name: 'PLAYER_ONE', innings: [] },
  playerTwo: { name: 'PLAYER_TWO', innings: [] },
  targetscore: 100,
  playerOneStarts: true,
  playerTurn: 1
};

export const SetupReducer: ActionReducer<GameSetup> =  (state: GameSetup = initialState, action: Action) => {
  switch (action.type) {
    case SetupActions.NEW_GAME: {
      return action.payload;
    }
    case SetupActions.LOAD_SETUP_SUCCESS: {
      if (action.payload) {
        return action.payload;
      }
      return state;
    }
    case SetupActions.GAMEDATA_CHANGE_SUCCESS: {

    }
    default: {
      return state;
    }
  }
};

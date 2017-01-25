import { Action, ActionReducer } from '@ngrx/store';

import { GameSetup } from '../models';
import { SetupActions } from '../actions';

const initialState: GameSetup = {
  playerOne: 'PLAYER_ONE',
  playerTwo: 'PLAYER_TWO',
  targetscore: 100,
  playerOneStarts: true
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

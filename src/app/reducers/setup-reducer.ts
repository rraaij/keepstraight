import { Action, ActionReducer } from '@ngrx/store';

import { GameSetup } from '../models';
import { SetupActions } from '../actions';

const initialState: GameSetup = {
  playerOne: { name: '', innings: [] },
  playerTwo: { name: '', innings: [] },
  targetscore: 100,
  playerOneStarts: true,
  playerTurn: 1
};

export const SetupReducer: ActionReducer<GameSetup> =  (state: GameSetup = initialState, action: Action) => {
  switch (action.type) {
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

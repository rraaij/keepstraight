import { Action, ActionReducer } from '@ngrx/store';

import { SetupModel } from '../models';
import { SetupActions } from '../actions';

const initialState: SetupModel = {
  playerOne: '',
  playerTwo: '',
  targetscore: 100,
  playerOneStarts: true
};

export const SetupReducer: ActionReducer<SetupModel> =  (state: SetupModel = initialState, action: Action) => {
  switch (action.type) {
    case SetupActions.LOAD_SETUP_SUCCESS: {
      if (action.payload) {
        state = {
          playerOne: action.payload.playerOne.name,
          playerTwo: action.payload.playerTwo.name,
          targetscore: action.payload.targetscore,
          playerOneStarts: action.payload.playerOne.hasTurn
        }
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

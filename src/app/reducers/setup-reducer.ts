import { Action } from '@ngrx/store';

import { Setup } from '../models';
import { SetupActions } from '../actions';

export type SetupState = Setup;

const initialState: SetupState = {
  playerOne: 'PLAYER_ONE',
  playerTwo: 'PLAYER_TWO',
  targetscore: 100,
  playerOneStarts: true
};

export default function (state = initialState, action: Action): SetupState {
  switch (action.type) {
    case SetupActions.GET_INFO: {
      return action.payload;
    }
    case SetupActions.NEW_GAME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

import { Action } from '@ngrx/store';

import { GameSetup } from '../models';
import { SetupActions } from '../actions';

export type GameState = GameSetup;

const initialState: GameState = {
  playerOne: 'PLAYER_ONE',
  playerTwo: 'PLAYER_TWO',
  targetscore: 100,
  playerOneStarts: true
};

export default function (state = initialState, action: Action): GameState {
  switch (action.type) {
    case SetupActions.NEW_GAME: {
      return action.payload;
    }
    case SetupActions.LOAD_SETUP_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

import { Action, ActionReducer } from '@ngrx/store';

import { GameModel } from '../models';
import { GameActions } from '../actions';

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
    case GameActions.SAVE_SETUP_SUCCESS: {
      if(!action.payload.ok) console.error(`[${action.type}] save setup FAILED`);
      return state;
    }
    default: {
      return state;
    }
  }
};

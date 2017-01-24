import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
// import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

import setupReducer, * as fromSetup from './setup-reducer';
//import gameReducer, * as fromGame from './game-reducer';

// e.g. 'setup' is used as a reducer in ../pages/setup/setup.ts using store.select('setup')
// to connect the setup in the store to the component

export interface AppState {
  setup: fromSetup.GameState;
  //game: fromGame.gameState;
};


//uncomment the storeLogger import and this line
//and comment out the other export default line to turn on
//the store logger to see the actions as they flow through the store
//turned this off by default as i found the logger kinda noisy

//export default compose(storeLogger(), combineReducers)({
export default compose(combineReducers)({
  setup: setupReducer,
  //game: gameReducer
});

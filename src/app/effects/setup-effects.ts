import 'rxjs/rx';
import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';

import { KeepstraightService } from '../services/keepstraight-service';
import { GameSetup } from '../models/game-setup';
import { SetupActions, GameActions } from '../actions';

@Injectable()
export class SetupEffects {
  constructor(
    private actions$: Actions,
    private db: KeepstraightService,
    private setupActions: SetupActions,
    private gameActions: GameActions
  ) {}

  @Effect() saveSetup$ = this.actions$
    .ofType(SetupActions.NEW_GAME)
    .map<GameSetup>(toPayload)
    .mergeMap(gamesetup => {
      return this.db.saveSetup(gamesetup)
    })
    .map(game$ => {
      return this.gameActions.saveSetupSuccess(game$)
    });

  @Effect() getSetup$ = this.db.getSetup()
    .map(setupData$ => {
      console.log('[Effect$] setup:', setupData$);
      return this.setupActions.loadSetupSuccess(setupData$)
    });

  @Effect() getChanges$ = this.db.getGamedataChanges()
    .map(change => {
      return this.setupActions.gamedataChangeSuccess(change);
    })
}

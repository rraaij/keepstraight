import 'rxjs/rx';
import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';

import { KeepstraightService } from '../services/keepstraight-service';
import { GameModel } from '../models';
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
    .ofType(GameActions.NEW_GAME)
    .map<GameModel>(toPayload)
    .mergeMap(setup => {
      return this.db.saveSetup(setup)
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

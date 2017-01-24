import 'rxjs/rx';
import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';

import { KeepstraightService } from '../services/keepstraight-service';
import { GameSetup } from '../models/game-setup';
import { SetupActions } from '../actions/setup-actions';

@Injectable()
export class SetupEffects {
  constructor(
    private actions$: Actions,
    private db: KeepstraightService,
    private setupActions: SetupActions
  ) {}

  @Effect() saveSetup$ = this.actions$
    .ofType(SetupActions.NEW_GAME)
    .map<GameSetup>(toPayload)
    .mergeMap(gamesetup => {
      return this.db.saveSetup(gamesetup)
    });

  @Effect() getSetup$ = this.db.getSetup()
    .map(setup$ => {
      console.log('[Effect$] setup:', setup$);
      return this.setupActions.loadSetupSuccess(setup$)
    });
}

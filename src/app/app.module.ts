import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { KeepstraightApp } from './app.component';
import { SetupPage } from '../pages/setup/setup';
import { GamePage } from '../pages/game/game';
import { SetupReducer } from './reducers/setup-reducer';
import actions from './actions';
import KeepstraightService from './services';
import { SetupEffects } from './effects/setup-effects';

@NgModule({
    declarations: [
      KeepstraightApp,
      SetupPage,
      GamePage
    ],
    imports: [
      IonicModule.forRoot(KeepstraightApp),
      StoreModule.provideStore({ setup: SetupReducer }),
      StoreDevtoolsModule.instrumentOnlyWithExtension(),
      EffectsModule.run(SetupEffects)
    ],
    bootstrap: [
      IonicApp
    ],
    entryComponents: [
      KeepstraightApp,
      SetupPage,
      GamePage
    ],
    providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      actions,
      KeepstraightService
    ]
})
export class AppModule {}

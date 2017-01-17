import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { KeepstraightApp } from './app.component';
import { SetupPage } from '../pages/setup/setup';
import { GamePage } from '../pages/game/game';
import reducer from './reducers';
import actions from './actions';
import service from './services';

@NgModule({
    declarations: [
      KeepstraightApp,
      SetupPage,
      GamePage
    ],
    imports: [
      IonicModule.forRoot(KeepstraightApp),
      StoreModule.provideStore({ reducer }),
      StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      KeepstraightApp,
      SetupPage,
      GamePage
    ],
    providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      actions,
      service
    ]
})
export class AppModule {}

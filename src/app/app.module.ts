import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { KeepstraightApp } from './app.component';
import { SetupPage } from '../pages/setup/setup';
import { GamePage } from '../pages/game/game';

@NgModule({
    declarations: [
      KeepstraightApp,
      SetupPage,
      GamePage
    ],
    imports: [
      IonicModule.forRoot(KeepstraightApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      KeepstraightApp,
      SetupPage,
      GamePage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

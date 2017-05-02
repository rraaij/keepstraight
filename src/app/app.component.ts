import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SetupPage } from '../pages/setup/setup';


@Component({
    templateUrl: 'app.html'
})
export class KeepstraightApp {
    rootPage = SetupPage;

    constructor(statusbar: StatusBar, splashscreen: SplashScreen, platform: Platform, private store: Store<any>) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusbar.styleDefault();
            splashscreen.hide();
        });
    }
}

import { Component } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'updatescore.modal.html'
})
export class UpdateScore {
  constructor(public platform: Platform,
              public viewCtrl: ViewController) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

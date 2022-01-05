import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Game setup', url: '/setup', icon: 'mail' },
    { title: 'Score correction', url: '/correction', icon: 'paper-plane' },
    { title: 'Games played', url: '/archive', icon: 'archive' },
  ];
}

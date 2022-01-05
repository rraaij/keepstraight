import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'setup',
    pathMatch: 'full',
  },
  {
    path: 'setup',
    loadChildren: () =>
      import('./setup/setup.module').then((m) => m.SetupPageModule),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./game/game.module').then((m) => m.GamePageModule),
  },
  {
    path: 'correction',
    loadChildren: () =>
      import('./correction/correction.module').then(
        (m) => m.CorrectionPageModule
      ),
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('./archive/archive.module').then((m) => m.ArchivePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

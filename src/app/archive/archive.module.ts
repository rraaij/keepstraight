import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ArchivePage } from './archive.page';
import { ArchivePageRoutingModule } from './archive-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ArchivePageRoutingModule],
  declarations: [ArchivePage],
})
export class ArchivePageModule {}

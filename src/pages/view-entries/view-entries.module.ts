import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewEntriesPage } from './view-entries';

@NgModule({
  declarations: [
    ViewEntriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewEntriesPage),
  ],
})
export class ViewEntriesPageModule {}

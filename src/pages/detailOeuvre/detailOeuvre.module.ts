import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailOeuvrePage } from './detailOeuvre';

@NgModule({
  declarations: [
    DetailOeuvrePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailOeuvrePage),
  ],
})
export class DetailOeuvrePageModule {}

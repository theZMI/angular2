import { NgModule } from '@angular/core';
import { MatCommonModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatCommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule
  ],
  exports: [
    MatCommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule
  ]
})
export class MaterialAppModule {
}

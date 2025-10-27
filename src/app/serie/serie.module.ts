import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';

@NgModule({
  imports: [
    CommonModule,
    SerieListComponent
  ],
  exports: [SerieListComponent]
})
export class SerieModule { }

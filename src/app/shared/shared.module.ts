import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TickizePipe } from './tickize.pipe';
import { SpaceImageDirective } from './space-image.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TickizePipe, SpaceImageDirective],
  exports: [
    FormsModule,
    TickizePipe,
    SpaceImageDirective,
    ReactiveFormsModule
  ]
})

export class SharedModule { }

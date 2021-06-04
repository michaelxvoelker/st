import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week.sfc';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [WeekComponent],
  exports: [WeekComponent],
})
export class UiModule {}

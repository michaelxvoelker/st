import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { UiModule, WeekDay } from '@studysmarter/ui';

@Component({
  selector: 'studysmarter-root',
  template: `
    <div>
      <studysmarter-week [currentDay]="currentDay"></studysmarter-week>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  get currentDay(): WeekDay {
    return new Date().toUTCString().slice(0, 2) as WeekDay;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

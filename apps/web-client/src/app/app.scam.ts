import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { UiModule } from '@studysmarter/ui';

@Component({
  selector: 'studysmarter-root',
  template: `
    <div>
      <studysmarter-week
        [primaryDay]="currentDay"
        [streakDays]="[5, 6]"
      ></studysmarter-week>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  get currentDay(): number {
    return (new Date().getDay() + 6) % 7;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

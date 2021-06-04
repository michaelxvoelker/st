import { Component, Input } from '@angular/core';

export type WeekDay = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

@Component({
  selector: 'studysmarter-week',
  styles: [
    `
      .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .day {
        @extend .circle;
        opacity: 0.5;
        border-width: 2px;
        border-style: dotted;
        border-color: #000;
      }

      .current-day {
        @extend .day;
        opacity: 1;
        border-style: solid;
      }

      .streak-day {
        @extend .day;
        opacity: 1;
        border-width: 0;
        background-color: rgb(0, 233, 176);
      }
    `,
  ],
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center " fxLayoutGap="15px">
      <ng-container *ngFor="let day of weekDays">
        <div
          fxLayoutAlign="center center"
          [ngClass]="{
            'streak-day': isStreakDay(day) && !isCurrentToday(day),
            'current-day': isCurrentToday(day)
          }"
          class="day"
        >
          {{ day }}
        </div>
      </ng-container>
    </div>
  `,
})
export class WeekComponent {
  weekDays: WeekDay[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  @Input() currentDay: WeekDay = 'Mo';

  @Input() streakDays: WeekDay[] = ['Mo'];

  isCurrentToday(day: WeekDay): boolean {
    return this.currentDay === day;
  }

  isStreakDay(day: WeekDay): boolean {
    return this.streakDays.includes(day);
  }
}

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
        border-style: dashed;
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
      <ng-container *ngFor="let day of days; let currentDay = index">
        <div
          fxLayoutAlign="center center"
          [ngClass]="{
            'streak-day':
              isStreakDay(currentDay) && !isCurrentToday(currentDay),
            'current-day': isCurrentToday(currentDay)
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
  @Input() primaryDay = 0;

  @Input() streakDays: number[] = [];

  #weekDays: WeekDay[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  get days(): WeekDay[] {
    return this.#weekDays;
  }

  isCurrentToday(day: number): boolean {
    return this.primaryDay === day;
  }

  isStreakDay(day: number): boolean {
    return this.streakDays.includes(day);
  }
}

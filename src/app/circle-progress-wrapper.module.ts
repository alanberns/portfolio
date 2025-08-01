// src/app/circle-progress-wrapper.module.ts
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 1000,
      showTitle: true,
      showUnits: true,
      units: '%',
      title: 'auto'
    })
  ],
  exports: [NgCircleProgressModule]
})
export class CircleProgressWrapperModule {}

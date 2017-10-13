import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'rla-achievement-detail',
  templateUrl: 'achievement-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementDetailComponent {
  public achievement: any;

  constructor(private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
      .switchMap(route => route.params)
      .forEach(params => this.achievement = params['id']);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rla-achievements',
  templateUrl: 'achievements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementsComponent {
  public achievements = ['1', '2', '3', '4', '5'];
}

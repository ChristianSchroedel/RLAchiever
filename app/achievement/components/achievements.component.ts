import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'rla-achievements',
  templateUrl: 'achievements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementsComponent {
  public achievements = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'}
  ];

  constructor(private router: RouterExtensions) {
  }

  public showDetails(achievement: any) {
    this.router.navigate(['achievements', achievement.id]);
  }
}

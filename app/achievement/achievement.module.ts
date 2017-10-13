import { NgModule } from '@angular/core';
import { AchievementRoutingModule } from './achievement.routing';
import { AchievementsComponent } from './components/achievements.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AchievementDetailComponent } from './components/achievement-detail.component';

@NgModule({
  declarations: [
    AchievementsComponent,
    AchievementDetailComponent
  ],
  exports: [
    AchievementsComponent,
    AchievementDetailComponent
  ],
  imports: [
    NativeScriptModule,
    AchievementRoutingModule
  ]
})
export class AchievementModule {
}

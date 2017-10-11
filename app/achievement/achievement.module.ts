import { NgModule } from '@angular/core';
import { AchievementRoutingModule } from './achievement.routing';
import { AchievementsComponent } from './components/achievements.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

@NgModule({
  declarations: [
    AchievementsComponent
  ],
  exports: [
    AchievementsComponent
  ],
  imports: [
    NativeScriptModule,
    AchievementRoutingModule
  ]
})
export class AchievementModule {
}

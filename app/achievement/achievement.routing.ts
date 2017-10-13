import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AchievementsComponent } from './components/achievements.component';
import { AchievementDetailComponent } from './components/achievement-detail.component';

const routes: Routes = [
  { path: '', component: AchievementsComponent },
  { path: ':id', component: AchievementDetailComponent }
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})
export class AchievementRoutingModule {
}

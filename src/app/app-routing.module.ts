import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeComponent } from './core/home/home.component';
import { CreateRequestComponent } from './core/create-request/create-request.component';
import { CreateRequest2Component } from './core/create-request2/create-request2.component';
import { ChatComponent } from './core/chat/chat.component';
import { NotificationComponent } from './core/notification/notification.component';
import { DemoComponent } from './core/demo/demo.component';
import { StatisticsComponent } from './core/statistics/statistics.component';
import { ControlManageComponent } from './core/control-manage/control-manage.component';
import { ControlsManageComponent } from './core/controls-manage/controls-manage.component';
import { FabricComponent } from './fabric/fabric.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'create-request', component: CreateRequestComponent },
  { path: 'create-request2', component: CreateRequest2Component },
  { path: 'chat', component: ChatComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'control-manage', component: ControlManageComponent },
  { path: 'controls-manage', component: ControlsManageComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'fabric', component: FabricComponent },
  { path: '**', component: PageNotFoundComponent }
  
];

/*const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

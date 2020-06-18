import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateHeaderComponent } from './create-header/create-header.component';
import { HomeComponent } from './home/home.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RouterModule } from '@angular/router';
import { CreateRequest2Component } from './create-request2/create-request2.component';
import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { DemoComponent } from './demo/demo.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ControlManageComponent } from './control-manage/control-manage.component';
import { ControlsManageComponent } from './controls-manage/controls-manage.component';
import { SpaceComponent } from './space/space.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CreateHeaderComponent, HomeComponent, CreateRequestComponent, CreateRequest2Component, ChatComponent, NotificationComponent, DemoComponent, StatisticsComponent, ControlManageComponent, ControlsManageComponent, SpaceComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, FooterComponent, CreateHeaderComponent, HomeComponent, CreateRequestComponent
  ]
})
export class CoreModule { }

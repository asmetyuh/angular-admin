import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SommedashboardComponent } from './components/sommedashboardcomponent/sommedashboardcomponent.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { UsersModule } from '../users/users.module';
import { UsersComponent } from '../users/users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    SommedashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    RouterModule
  ],
  providers:[UsersService]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SommedashboardComponent } from './components/sommedashboardcomponent/sommedashboardcomponent.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SommedashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

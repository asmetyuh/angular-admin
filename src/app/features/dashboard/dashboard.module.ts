import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SommedashboardcomponentComponent } from './components/sommedashboardcomponent/sommedashboardcomponent.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SommedashboardcomponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

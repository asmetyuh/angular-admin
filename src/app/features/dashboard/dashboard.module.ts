import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SommedashboardComponent } from './components/sommedashboardcomponent/sommedashboardcomponent.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    SommedashboardComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    NgChartsModule
  ],
  providers:[DatePipe]
})
export class DashboardModule { }

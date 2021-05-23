import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListServiceIndustryModule } from '../list-service-industry/list-service-industry.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ListServiceIndustryModule],
})
export class DashboardModule {}

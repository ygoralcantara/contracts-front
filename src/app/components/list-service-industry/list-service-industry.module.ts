import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServiceIndustryComponent } from './list-service-industry.component';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  declarations: [ListServiceIndustryComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ListServiceIndustryComponent],
})
export class ListServiceIndustryModule {}

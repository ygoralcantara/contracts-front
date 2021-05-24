import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServiceIndustryComponent } from './list-service-industry.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListServiceIndustryComponent],
  imports: [CommonModule, AngularMaterialModule, FlexLayoutModule],
  exports: [ListServiceIndustryComponent],
})
export class ListServiceIndustryModule {}

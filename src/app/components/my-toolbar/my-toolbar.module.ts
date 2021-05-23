import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyToolbarComponent } from './my-toolbar.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyToolbarComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [MyToolbarComponent],
})
export class MyToolbarModule {}

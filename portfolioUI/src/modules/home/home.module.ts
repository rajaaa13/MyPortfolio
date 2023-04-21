import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

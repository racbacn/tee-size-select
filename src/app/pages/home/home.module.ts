import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarModule } from 'src/app/widgets/toolbar/toolbar.module';
import { SectionsModule } from 'src/app/sections/sections.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ToolbarModule, SectionsModule],
})
export class HomeModule {}

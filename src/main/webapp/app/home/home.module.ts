import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppAdh1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AppAdh1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class AppAdh1HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { SessionsComponent } from './sessions/sessions.component';
import { ReportService } from '../../_providers/report.service';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [SessionsComponent],
  providers: [ReportService]
})
export class ReportsModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../shared/shared.module";
import { DashboardUserRoutingModule } from "./dashboard-user-routing.module";
import { AngularDropdownModule } from 'angular-dropdown';

import { HeaderComponent } from "./components/header/header.component";
import { SearchResutlsComponent } from "./components/search-resutls/search-resutls.component";
import { SearchResutlsCardComponent } from "./components/search-resutls-card/search-resutls-card.component";
import { StatusRequestComponent } from "./components/status-request/status-request.component";
import { StatusRequestCardComponent } from "./components/status-request-card/status-request-card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TabsComponent } from "./components/tabs/tabs.component";

import { LoginDialogComponent } from "./components/login-dialog/login-dialog.component";
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchResutlsComponent,
    SearchResutlsCardComponent,
    StatusRequestComponent,
    StatusRequestCardComponent,
    DashboardComponent,
    TabsComponent,
    LoginDialogComponent,
    LoginFormComponent
  ],
  imports: [CommonModule, DashboardUserRoutingModule, SharedModule, AngularDropdownModule],
  entryComponents: [LoginDialogComponent]
})
export class DashboardUserModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from '@angular/forms';

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
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { CheckboxAllComponent } from './components/forms/checkbox-all/checkbox-all.component';
import { CheckboxAllMaterialComponent } from './components/forms/checkbox-all-material/checkbox-all-material.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';

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
    LoginFormComponent,
    ReactiveFormComponent,
    CheckboxAllComponent,
    CheckboxAllMaterialComponent,
    TemplateDrivenFormComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, DashboardUserRoutingModule, SharedModule, AngularDropdownModule],
  entryComponents: [LoginDialogComponent]
})
export class DashboardUserModule { }

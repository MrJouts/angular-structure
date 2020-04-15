import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchResutlsComponent } from "./components/search-resutls/search-resutls.component";
import { StatusRequestComponent } from "./components/status-request/status-request.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { ReactiveFormComponent } from "./components/forms/reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./components/forms/template-driven-form/template-driven-form.component";
import { CheckboxAllComponent } from "./components/forms/checkbox-all/checkbox-all.component";
import { CheckboxAllMaterialComponent } from "./components/forms/checkbox-all-material/checkbox-all-material.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: SearchResutlsComponent },
      { path: "search-results", component: SearchResutlsComponent },
      { path: "status-request", component: StatusRequestComponent },
      { path: "forms", component: LoginFormComponent },
      { path: "reactive-form", component: ReactiveFormComponent },
      { path: "template-driven-form", component: TemplateDrivenFormComponent },
      { path: "checkbox-all", component: CheckboxAllComponent },
      {
        path: "checkbox-all-material",
        component: CheckboxAllMaterialComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserRoutingModule {}

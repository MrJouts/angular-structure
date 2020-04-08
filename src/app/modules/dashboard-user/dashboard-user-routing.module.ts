import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchResutlsComponent } from "./components/search-resutls/search-resutls.component";
import { StatusRequestComponent } from "./components/status-request/status-request.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: SearchResutlsComponent },
      { path: "search-results", component: SearchResutlsComponent },
      { path: "status-request", component: StatusRequestComponent },
      { path: "forms", component: LoginFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserRoutingModule {}

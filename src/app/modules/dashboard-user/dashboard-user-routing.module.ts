import { StatusRequestComponent } from "./components/status-request/status-request.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchResutlsComponent } from "./components/search-resutls/search-resutls.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: SearchResutlsComponent },
      { path: "search-results", component: SearchResutlsComponent },
      { path: "status-request", component: StatusRequestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule {}

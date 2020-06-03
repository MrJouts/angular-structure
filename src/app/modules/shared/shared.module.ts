import { IconServiceService } from './services/icon-service.service';
// import { HeaderComponent } from './../dashboard-user/components/header/header.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { MaterialModule } from "./../material/material.module";
import { FooterComponent } from "./components/footer/footer.component";
@NgModule({
  providers: [IconServiceService],
  declarations: [FooterComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [FooterComponent, MaterialModule, FormsModule]
})
export class SharedModule {}

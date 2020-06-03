import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LoginDialogComponent } from "./../login-dialog/login-dialog.component";
import { MessageService } from "./../../services/message.service";
import { FruitsService } from "./../../services/fruits.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  searchValue: string = null;

  constructor(
    private matDialog: MatDialog,
    private messageService: MessageService,
    private fruitsService: FruitsService
  ) {}

  ngOnInit() {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = [
      'test', 'test2'
    ]
    //   userName: "Emiliano",
    //   userLastName: "Hotes"
    // };

    const dialogRef = this.matDialog.open(LoginDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log("the dialog was closed");
      console.log("Dialog message:", result);
    });
  }

  search() {
    console.log("searching...");
    this.messageService.nextMessage(this.searchValue);
    this.fruitsService.addFruit(this.searchValue);
    this.searchValue = "";
  }

  // dialogRef.afterClosed().subscribe(value => {
  //   console.log(`Dialog sent: ${vaue}`);
  // });
}

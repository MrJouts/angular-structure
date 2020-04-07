import { Component, OnInit, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-login-dialog",
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"]
})
export class LoginDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close("thanks");
  }

  // dialogRef.afterClosed().subscribe(value => {
  //   console.log(`Dialog sent: ${value}`);
  // });
}

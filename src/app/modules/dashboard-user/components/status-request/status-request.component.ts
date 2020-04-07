import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-status-request",
  templateUrl: "./status-request.component.html",
  styleUrls: ["./status-request.component.scss"]
})
export class StatusRequestComponent implements OnInit {
  fruits: any[] = ["banana", "manzana", "pera", "tomate"];
  vegetales: any[] = ["Berenjena", "Chaucha", "Remolacha", "Zanahoria"];
  texto: string = "esto es un texto";

  title: string = "This is the title";

  constructor() {}

  ngOnInit() {}

  getNotification(message) {
    this.title = message;
  }
}

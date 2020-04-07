import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-status-request-card",
  templateUrl: "./status-request-card.component.html",
  styleUrls: ["./status-request-card.component.scss"]
})
export class StatusRequestCardComponent implements OnInit {
  @Input() vegetales: string;
  @Input() parrafo: string;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  vegetalesSeleccionados: any[] = [];

  constructor() {}

  ngOnInit() {}

  onClicked(content) {
    const buscar = this.vegetalesSeleccionados.find(e => e == content);
    if (!buscar) {
      this.vegetalesSeleccionados.push(content);
      this.notify.emit("this is the content: " + this.vegetalesSeleccionados);
    }

    console.log("encontrar", buscar);

    console.log(this.vegetalesSeleccionados);
  }
}

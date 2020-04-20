import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-search-resutls-card",
  templateUrl: "./search-resutls-card.component.html",
  styleUrls: ["./search-resutls-card.component.scss"],
})
export class SearchResutlsCardComponent implements OnInit {
  @Input() order: any[] = [];
  @Input() checked: boolean;
  constructor() {}

  ngOnInit() {
    console.log(this.checked);
  }

  orderChange() {
    this.checked = !this.checked;
    let checkedData = this.checked + " " + this.order['id'];
    console.log("info", checkedData);
  }
}

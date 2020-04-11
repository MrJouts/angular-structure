import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent implements OnInit {
  navLinks: any[] = [
    {
      path: "search-results",
      label: "Search results",
      rla: true,
    },
    {
      path: "status-request",
      label: "Status requests",
      rla: false,
    },
    {
      path: "forms",
      label: "Login form",
      rla: false,
    },
    {
      path: "reactive-form",
      label: "Reactive form",
      rla: false,
    },
  ];
  constructor() {}

  ngOnInit() {}
}

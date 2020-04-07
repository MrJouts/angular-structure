import { Component, OnInit } from "@angular/core";
import { MessageService } from "./../../services/message.service";
import { FruitsService } from "./../../services/fruits.service";

@Component({
  selector: "app-search-resutls",
  templateUrl: "./search-resutls.component.html",
  styleUrls: ["./search-resutls.component.scss"]
})
export class SearchResutlsComponent implements OnInit {
  message: string;
  fruitsData: any[] = ["a", "b"];
  constructor(
    private messageService: MessageService,
    private fruitsService: FruitsService
  ) {}

  ngOnInit() {
    this.messageService.sharedMessage.subscribe(
      message => (this.message = message)
    );

    this.fruitsService.fruitsObs.subscribe(
      fruits => (this.fruitsData = fruits)
    );
  }
}

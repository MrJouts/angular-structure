import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  private message = new BehaviorSubject("first message");
  sharedMessage = this.message.asObservable();

  constructor() {}

  nextMessage(message: string) {
    this.message.next(message);
  }
}

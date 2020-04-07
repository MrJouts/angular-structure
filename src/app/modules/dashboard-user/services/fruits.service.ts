import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FruitsService {
  fruitsArray: any[] = ["banana", "manzana"];
  private fruits = new BehaviorSubject(this.fruitsArray);
  fruitsObs = this.fruits.asObservable();
  constructor() {}

  addFruit(fruit: string) {
    this.fruits.next([...this.fruits.getValue(), fruit]);
  }
}

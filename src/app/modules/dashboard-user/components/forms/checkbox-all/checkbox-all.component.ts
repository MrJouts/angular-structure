import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox-all",
  templateUrl: "./checkbox-all.component.html",
  styleUrls: ["./checkbox-all.component.scss"],
})
export class CheckboxAllComponent implements OnInit {
  title = "Checkbox all";
  masterSelected: boolean;
  checkList: any;
  checkedList: any;

  constructor() {
    this.masterSelected = false;
    this.checkList = [
      { id: 1, value: "Spanish", isSelected: false },
      { id: 1, value: "Portuguesse", isSelected: false },
      { id: 1, value: "English", isSelected: false },
    ];
    this.getCheckedItemsList();
  }

  ngOnInit() {}

  checkUncheckAll() {
    for (var i = 0; i < this.checkList.length; i++) {
      this.checkList[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemsList();
  }

  isAllSelected() {
    this.masterSelected = this.checkList.every(function (item: any) {
      return item.isSelected == true;
    });
    this.getCheckedItemsList();
  }

  getCheckedItemsList() {
    this.checkedList = [];
    for (var i = 0; i < this.checkList.length; i++) {
      if (this.checkList[i].isSelected)
        this.checkedList.push(this.checkList[i]);
    }
    console.log(this.checkedList)
    this.checkedList = JSON.stringify(this.checkedList);
  }
}

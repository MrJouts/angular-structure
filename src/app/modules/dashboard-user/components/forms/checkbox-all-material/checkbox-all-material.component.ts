import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox-all-material",
  templateUrl: "./checkbox-all-material.component.html",
  styleUrls: ["./checkbox-all-material.component.scss"],
})
export class CheckboxAllMaterialComponent implements OnInit {
  checkbox_list: any[];

  master_checked: boolean = false;
  master_indeterminate: boolean = false;

  constructor() {
    this.checkbox_list = [
      {
        name: "Portuguese",
        disable: false,
        checked: false,
        labelPosition: "before",
      },
      {
        name: "Spanish",
        disable: false,
        checked: false,
        labelPosition: "after",
      },
      {
        name: "English",
        disable: false,
        checked: false,
        labelPosition: "after",
      },
    ];
  }

  ngOnInit() {}

  master_change() {
    for (let value of Object.values(this.checkbox_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    // Get total checked items
    for (let value of Object.values(this.checkbox_list)) {
      if (value.checked) {
        checked_count++;
      }
    }

    if (checked_count > 0 && checked_count < this.checkbox_list.length) {
      // If some checkboxes are checked but not all, then set indeterminate state.
      this.master_indeterminate = true;
    } else if (checked_count == this.checkbox_list.length) {
      // If checked count is equal to total items, then check the master checkbox and also set indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      // If none of the checkboxes in the list is checked then uncheck master also set indeterminate to false;
      this.master_checked = false;
      this.master_indeterminate = false;
    }
  }
}

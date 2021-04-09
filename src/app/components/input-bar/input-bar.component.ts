import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent {

  @Output() newTaskEvent = new EventEmitter<string>();
  @Output() filterEvent = new EventEmitter<number>();


  filters = [
    {
      name: "All",
      value: 1
    },
    {
      name: "Complented",
      value: 2
    },
    {
      name: "Uncompleted",
      value: 3
    }
  ]


  onAddTask(e: any) {

    if (e.value !== "") {
      this.newTaskEvent.emit(e.value);
      e.value = "";
    }
    return false;
  }


  onFilterChange(e: any) {

    let newFilter: number = e.target.value;
    this.filterEvent.emit(newFilter);
  }

}

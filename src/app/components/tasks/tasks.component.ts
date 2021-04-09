import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskModel } from '../../models/task.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() tasks: TaskModel[];
  @Input() filter: number;
  @Output() completeTaskEvent = new EventEmitter();
  @Output() deleteTaskEvent = new EventEmitter();

  constructor() {

    this.tasks = [];
    this.filter = 1;
  }

  onDeleteTask(id: number): void {
    this.deleteTaskEvent.emit(id);
  }

  onCompleteTask(id: number): void {
    this.completeTaskEvent.emit(id);
  }

}

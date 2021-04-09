import { Component } from '@angular/core';
import { TaskModel } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: TaskModel[];
  filterTask: number;

  constructor() {

    this.filterTask = 1;
    this.tasks = [];
  }

  addNewTask(newTask: string) {

    let createTask: TaskModel = {
      id: Math.random() * 1000,
      name: newTask,
      completed: false,
    };

    this.tasks.push(createTask);
  }

  deleteTask(id: number) {

    let deleteTasks: TaskModel[] = this.tasks.filter((item) => (item.id !== id));
    this.tasks = deleteTasks;
  }

  completeTask(id: number) {

    let completeTasks: TaskModel[] = this.tasks.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.tasks = completeTasks;
  }

  onNewFilter(filter: number) {

    this.filterTask = filter;
  }

}

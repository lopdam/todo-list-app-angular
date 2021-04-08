import { Component } from '@angular/core';
import { TaskModel } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // task1: TaskModel;
  // task2: TaskModel;
  // task3: TaskModel;
  // task4: TaskModel;

  tasks: TaskModel[];
  filterTask: number;

  constructor() {

    this.filterTask = 1;
    // this.task1 = {
    //   id: 1,
    //   name: 'Task 1',
    //   completed: false,
    // };
    // this.task2 = {
    //   id: 2,
    //   name: 'Task 2',
    //   completed: true,
    // };
    // this.task3 = {
    //   id: 3,
    //   name: 'Task 3',
    //   completed: false,
    // };
    // this.task4 = {
    //   id: 4,
    //   name: 'Task 4',
    //   completed: true,
    // };

    // this.tasks = [this.task1, this.task2, this.task3, this.task4];
    this.tasks = [];


  }

  addNewTask(newTask: string) {

    //idGenerate
    let idG: number = Math.random() * 1000;

    let createTask: TaskModel = {
      id: idG,
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

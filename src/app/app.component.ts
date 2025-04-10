import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent, TaskItemComponent,  FormsModule],
})
export class AppComponent {
  title = 'angular-testing-project';
  tasks: string[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  newTask: string = '';
  editing: boolean = false;
  editedTask: string = '';
  originalTask: string = '';
  @Input() task: string = '';
  @Output() taskAdded = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: string) {
    if (task.trim()) {
      this.tasks.push(task.trim());
      this.saveTasks();
    }
    console.log('Adding task:', task);


  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter((x) => x !== task);
    this.saveTasks();
    console.log('Deleting task:', task);
  }

  getTasks(): string[] {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    }
    console.log('No tasks found in localStorage.');

    return [];
  }
  updateTask() {
    const index = this.tasks.findIndex((x) => x === this.originalTask);
    if (index !== -1) {
      this.tasks[index] = this.editedTask;
      this.saveTasks();
    }
    this.editing = false;
    this.editedTask = '';
    this.originalTask = '';
  }
  editTask(task: string) {
    this.originalTask = task;
    this.editedTask = task;
    this.editing = true;
  }

  nuevaTarea: string = '';
  listadoTareas: string[] = [];

  

  
}

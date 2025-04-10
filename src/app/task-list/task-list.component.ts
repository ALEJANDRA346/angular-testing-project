import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskItemComponent]
})
export class TaskListComponent {
  task: string = '';
  
  agregar: string = '';
    editando: boolean = false;
  tareaEditada: string = '';
  tareaOriginal: string = '';
  tareas: string[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  // tareas: string[] = JSON.parse(localStorage.getItem('tareas') || '[]');

  tasks: string[] = [];

  constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    if (this.agregar.trim()) {
      this.tasks.push(this.agregar.trim());
      this.agregar = '';
      this.saveTasks();
      this.tareas.push(this.agregar.trim());
      this.guardar();
    }
    console.log('Adding task:', task);
  }
  guardar() {
     localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTask(task: string) {

    console.log('Updating task:', task);
  }

  deleteTask(task: string) {

    console.log('Deleting task:', task);
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  @Input() tarea: string = '';
  @Output() editar = new EventEmitter<string>();
  @Output() eliminar = new EventEmitter<string>();
}

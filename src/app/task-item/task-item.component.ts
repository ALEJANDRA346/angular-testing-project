import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: string = '';
  @Output() editar = new EventEmitter<string>();
  @Output() eliminar = new EventEmitter<string>();

}

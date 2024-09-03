import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  template: `
    <ul>
      <li>(TODO) Read Angular Essentials Guide</li>
    </ul>`,
})
export class TodoListItem {
  /* Component behavior is defined in here */
}
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  tasks = [
    {content: "Make Angular apps", completed: false},
    {content: "Be awesome", completed: true}
  ];

  toggleItemCompleted(event: any) {
    const index = event.listIndices[0];
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}

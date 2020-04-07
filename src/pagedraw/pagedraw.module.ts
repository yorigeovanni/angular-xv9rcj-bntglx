import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoApp } from './todo_app/todo_app.component';
import { Todoitem } from './todoitem/todoitem.component';
import { Textinput } from './textinput/textinput.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        TodoApp,
        Todoitem,
        Textinput
    ],
    exports: [
        TodoApp,
        Todoitem,
        Textinput
    ]
})
export class PagedrawModule { }
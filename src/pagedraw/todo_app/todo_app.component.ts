import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './todo_app.component.html',
    styleUrls: ['./todo_app.component.css']
})
export class TodoApp {
    @Input() text: string;
    @Input() list: Array<{content: string, completed: boolean}>;
    @Input() text2: string;
    @Output() toggleItemCompleted: EventEmitter<any> = new EventEmitter();
    @Output() toggleAll: EventEmitter<any> = new EventEmitter();
    triggerToggleItemCompleted(event: any, i: number, elem: any) {
        if(event.listElems === undefined) {
            event.listElems = [elem];
        } else {
            event.listElems.unshift(elem);
        }
        
        if(event.listIndices === undefined) {
            event.listIndices = [i];
        } else {
            event.listIndices.unshift(i);
        }
        event.stopPropagation();
        this.toggleItemCompleted.emit(event);
    }
    triggerToggleAll(event: any) {
        event.stopPropagation();
        this.toggleAll.emit(event);
    }
}
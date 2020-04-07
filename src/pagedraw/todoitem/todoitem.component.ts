import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'todoitem',
    templateUrl: './todoitem.component.html',
    styleUrls: ['./todoitem.component.css']
})
export class Todoitem {
    @Input() content: string;
    @Input() state: ("default");
    @Input() toggle: Function;
    @Input() handleDelete: Function;
    @Output() toggleItemCompleted: EventEmitter<any> = new EventEmitter();
    @Output() handleDelete: EventEmitter<any> = new EventEmitter();
    @Output() toggleItemCompleted: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();
    triggerToggleItemCompleted(event: any) {
        event.stopPropagation();
        this.toggleItemCompleted.emit(event);
    }
    triggerHandleDelete(event: any) {
        event.stopPropagation();
        this.handleDelete.emit(event);
    }
    triggerToggleItemCompleted2(event: any) {
        event.stopPropagation();
        this.toggleItemCompleted.emit(event);
    }
    triggerDelete(event: any) {
        event.stopPropagation();
        this.delete.emit(event);
    }
}
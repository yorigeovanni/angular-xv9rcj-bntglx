import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'textinput',
    templateUrl: './textinput.component.html',
    styleUrls: ['./textinput.component.css']
})
export class Textinput {
    @Input() value: string;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    @Output() onKeyDown: EventEmitter<any> = new EventEmitter();
    triggerOnChange(event: any) {
        event.stopPropagation();
        this.onChange.emit(event);
    }
    triggerOnKeyDown(event: any) {
        event.stopPropagation();
        this.onKeyDown.emit(event);
    }
}
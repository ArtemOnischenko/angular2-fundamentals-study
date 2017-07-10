import {Component, Input} from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4 class="well-title">{{title}}</h4>
            <ng-content></ng-content>
        </div>
    `
})
export class CollapsibleWell {
    @Input() title:string;
    isVisible: boolean = true;

    toggleContent() {
        this.isVisible = !this.isVisible;
    }
}
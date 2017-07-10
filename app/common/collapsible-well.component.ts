import {Component, Input} from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4 class="well-title">
                <ng-content select="[title-well]"></ng-content>
            </h4>
            <ng-content *ngIf="isVisible" select="[body-well]"></ng-content>
        </div>
    `
})
export class CollapsibleWell {
    isVisible: boolean = true;

    toggleContent() {
        this.isVisible = !this.isVisible;
    }
}
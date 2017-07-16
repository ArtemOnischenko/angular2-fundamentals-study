import {Directive, OnInit, ElementRef, Inject, Input} from "@angular/core";
import {jQ_TOKEN} from "./jQuery.service";
@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    el:HTMLElement;
    @Input('modal-trigger') elementId:string;

    constructor(ref: ElementRef, @Inject(jQ_TOKEN) private $:any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            console.log('ModalTriggerDirective');
            this.$(`#${this.elementId}`).modal({});
        });
    }
}
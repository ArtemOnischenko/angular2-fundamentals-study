import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {restrictedWords} from "../shared/restricted-words.validator";
import {ISession} from "../shared/event.model";

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
        em {float: right; color: #bd362f; padding-left: 10px}
        .error input {background: #E3C3C5}
    `]
})
export class CreateSessionComponent implements OnInit{
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();
    newSessionForm: FormGroup;
    name:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })

    }

    saveSession(formValues){
        let session:ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters:[]
        };
        this.saveNewSession.emit(session);
    }

    cancel(){
        this.cancelNewSession.emit();
    }



}
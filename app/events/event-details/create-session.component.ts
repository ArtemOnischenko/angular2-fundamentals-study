import {Component, OnInit} from "@angular/core";
import {FormControl, Validators, FormGroup} from "@angular/forms";

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
        em {float: right; color: #bd362f; padding-left: 10px}
        .error input {background: #E3C3C5}
    `]
})
export class CreateSessionComponent implements OnInit{
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
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })

    }

    saveSession(formValues){
        console.log(formValues)
    }



}
import {Component, OnInit, Inject} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from './auth.service'
import { Router } from '@angular/router'
import {TOASTER_TOKEN, Toaster} from "../common/toaster.service";

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em {float: right; color: #bd362f; padding-left: 10px}
        .error input {background: #E3C3C5}
    `]
})
export class ProfileComponent implements OnInit{
    profileForm:FormGroup;
    private firstName;
    private lastName;

    constructor(private router:Router,
                @Inject(TOASTER_TOKEN) private toatr: Toaster,
                private authService: AuthService) {

    }
    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName:  this.firstName,
            lastName:  this.lastName
        });
    }
    isValid(key:string){
        return this[key].valid || this[key].untouched
    }
    cancel() {
        this.router.navigate(['events']);
    }
    saveProfile() {
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(this.firstName.value, this.lastName.value);
            this.toatr.success('Profile Saved')
        }
    }
}

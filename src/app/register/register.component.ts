import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm, AbstractControl} from '@angular/forms';
import {IRegister} from './register';




function emailMatcher(c: AbstractControl) {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value == confirmControl.value) {
        return null;
    }
    return { 'match': true };
}


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    userForm: FormGroup;
    contact: IRegister;
    emailMessage: string;

    constructor(private fb: FormBuilder) { }

    private validationMessage = {
        required: 'Please enter your email address',
        pattern: 'Please enter a valid email'
    }


    ngOnInit() {

        this.userForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
                confirmEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            }, { Validators: emailMatcher }),

            lastname: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]]

        })
        const emailControl = this.userForm.get('emailGroup.email');
        emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));
    }


    setMessage(c: AbstractControl): void {
        this.emailMessage = "";
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessage[key]).join(' ');
        }
    }
    
    
      save(form: NgForm) { 
    this.contact = new IRegister(this.userForm.value.firstName,this.userForm.value.password, this.userForm.value.emailGroup.email, this.userForm.value.lastname);
          console.log(this.contact );
    //this.userService.postUser(this.contact).subscribe((data) => {console.log('Success', data), this._router.navigate(['/viewContacts'])}
    //  , (err) => console.log('Error', err));

  }
}

import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    username: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(3)
    ], [
        this.validateUsername
      ]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.formBuilder.control('', [
      Validators.required,
      this.validatePassword({
        lowercase: true,
        uppercase: true,
        number: true
      })
      // Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')
    ]),
    repeatPassword: this.formBuilder.control('')
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.registrationForm);

  }

  validateUsername<AsyncValidatorFn>(control: FormControl) {
    const value = control.value;
    return Observable.create((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const notAllowed = ['demo', 'admin', 'user'];
        const notValid = notAllowed.includes(value);
        const result = notValid ? {'invalidUsername': true} : null;
        observer.next(result);
        observer.complete();
      }, 2000);
    });
  }

  validatePassword(options: {
    uppercase?: boolean,
    lowercase?: boolean,
    number?: boolean,
    special?: boolean
  }): ValidatorFn {
    return (control: FormControl) => {

      const hasUppercase = control.value.match(/[A-Z]/);
      const hasLowercase = control.value.match(/[a-z]/);
      const hasNumber = control.value.match(/[\d]/);
      const hasSpecial = control.value.match(/[\W]/);

      const errors = {};
      let valid = true;

      if (options.lowercase && !hasLowercase) {
        errors['lowercase'] = true;
        valid = false;
      }

      if (options.uppercase && !hasUppercase) {
        errors['uppercase'] = true;
        valid = false;
      }

      if (options.number && !hasNumber) {
        errors['number'] = true;
        valid = false;
      }

      if (options.special && !hasSpecial) {
        errors['special'] = true;
        valid = false;
      }

      return valid ? null : { 'password': errors };
    };
  }
}


import { Directive, Input, OnDestroy } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appFieldsMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FieldsMatchDirective,
      multi: true
    }
  ]
})
export class FieldsMatchDirective implements Validator, OnDestroy {

  @Input() appFieldsMatch: FormControl;
  subscription: Subscription;

  constructor() {
    console.log(this);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value !== this.appFieldsMatch.value) {
      return {
        'passwordMatch': true
      };
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.subscription = this.appFieldsMatch.valueChanges.subscribe(fn);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

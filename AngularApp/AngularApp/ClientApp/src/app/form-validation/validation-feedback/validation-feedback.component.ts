import { Component, OnInit, Input, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-validation-feedback',
  templateUrl: './validation-feedback.component.html',
  styleUrls: ['./validation-feedback.component.css']
})
export class ValidationFeedbackComponent implements OnInit {

  @Input() field;
  @Input() controlName;

  constructor(@Optional() private formGroup: FormGroupDirective) {}

  ngOnInit() {
    if (!this.field && !this.controlName) {
      throw new Error('Validation feedback must have [control] or [controlName] input');
    } else if (this.controlName && this.formGroup) {
      this.field = this.formGroup.form.get(this.controlName);
    }
  }

}

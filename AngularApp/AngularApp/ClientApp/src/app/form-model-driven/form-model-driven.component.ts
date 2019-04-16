import { SpecialFormBuilder } from './models/FormBuilder';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-model-driven',
  templateUrl: './form-model-driven.component.html',
  styleUrls: ['./form-model-driven.component.css'],
  providers: [
    //{ provide: FormBuilder, useClass: SpecialFormBuilder }
  ]
})
export class FormModelDrivenComponent implements OnInit {

  formDefinition: FormGroup;

  constructor(private formBulder: FormBuilder) {

    this.formDefinition = this.formBulder.group({
      title: this.formBulder.control('batman'),
      fields: this.formBulder.array([
        this.createTextField(),
        this.createOptionsField()
      ])
    });
  }

  ngOnInit() {
  }

  createOption(defaultValue = '', selected = false) {
    return this.formBulder.group({
      selected: this.formBulder.control(selected),
      value: this.formBulder.control(defaultValue)
    });
  }
  // dodanie pola (text lub option) do listy
  addOption(options: FormArray) {
    options.insert(options.length, this.createOption());
  }

  addTextField(fields: AbstractControl) {
    if (fields instanceof FormArray) {
      fields.insert(fields.controls.length, this.createTextField());
    }
  }

  addOptionField(fields: AbstractControl) {
    if (fields instanceof FormArray) {
      fields.insert(fields.controls.length, this.createOptionsField());
    }
  }

  moveUpOption(options: FormArray, index: number) {
    if (index > 0) {
      const tempOption = options.controls[index];
      options.controls[index] = options.controls[index - 1];
      options.controls[index - 1] = tempOption;
    }
  }

  moveDownOption(options: FormArray, index: number) {
    if (index < options.controls.length - 1) {
      const tempOption = options.controls[index];
      options.controls[index] = options.controls[index + 1];
      options.controls[index + 1] = tempOption;
    }
  }

  removeOption(options: FormArray, index: number) {
    options.removeAt(index);
  }

  createTextField() {
    return this.formBulder.group({
      type: this.formBulder.control('text'),
      label: this.formBulder.control('')
    });
  }

  createOptionsField() {
    return this.formBulder.group({
      type: this.formBulder.control('options'),
      label: this.formBulder.control(''),
      options: this.formBulder.array([
        this.createOption('Test 1'),
        this.createOption('Test 2'),
        this.createOption('Test 3'),
      ])
    });
  }

  getControlsList(fields: AbstractControl) {
    if (!(fields instanceof FormArray)) {
      return [];
    } else {
      return fields.controls;
    }
  }

  addHints(field: FormGroup, checked: boolean) {
    // key, value
    if (checked) {
      field.addControl('hints', this.formBulder.control(''));
    } else {
      field.removeControl('hints');
    }
  }

}

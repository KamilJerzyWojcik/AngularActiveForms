import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  extraFields = [];
  @Input() data = {};
  @Output() dataChange = new EventEmitter();
  @ViewChild(NgForm) form: NgForm;

  fieldTypes = [
    {type: 'text', label: 'Text Field'},
    {type: 'checkbox', label: 'Checkbox Field'},
    {type: 'select', label: 'Select Field'}
  ];

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.form.setValue(this.data);
    });
  }

  addExtra(key) {
    this.extraFields.push({key});
  }

  save(formRef) {
    this.dataChange.emit(this.form.value);
  }

  cancel() {
    this.form.setValue(this.data);
  }

}

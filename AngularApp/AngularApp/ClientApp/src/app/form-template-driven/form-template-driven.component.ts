import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

  formData = {
    name: 'Default',
    active: true,
    enabled: true,
    hints: '',
    type: '',
    has_extra: false
  };

  constructor() { }

  ngOnInit() {
  }

  saveData(data) {
    console.log(data);
  }
}

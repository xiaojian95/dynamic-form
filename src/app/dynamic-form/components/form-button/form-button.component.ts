import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  config: FieldConfig;
  group: FormGroup;

  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config';
@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent implements OnInit {

  config: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

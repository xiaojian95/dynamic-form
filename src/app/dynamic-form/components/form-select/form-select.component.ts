import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  
  config: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

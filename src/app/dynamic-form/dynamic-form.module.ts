import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';

@NgModule({
  declarations: [  
    FormButtonComponent, 
    FormInputComponent, 
    FormSelectComponent, 
    DynamicFieldDirective,
    DynamicFormComponent,
    FormRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    DynamicFormComponent,
  ],
  entryComponents:[
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormRadioComponent
  ]
})
export class DynamicFormModule { }

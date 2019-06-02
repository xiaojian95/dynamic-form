import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './dynamic-form/models/field-config';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;


  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'radio',
      label: 'Favourite Radio',
      name: 'radio',
      options: [
        {
          value:"All",
          checked:true
        },
        {
          value:"Pizza",
          checked:false
        },
        {
          value:"Hot Dogs",
          checked:false
        },
        {
          value:"Knakworstje",
          checked:false
        }
      ],
      placeholder: 'Select an radio',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }






  ngAfterViewInit() {
    
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      console.log(this.form.valid)
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

     //this.form.setDisabled('submit', true);
     //this.form.setValue('name', 'Todd Motto');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }

}

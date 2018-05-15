import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-warehouse-form',
  templateUrl: 'warehouse-form.component.html',
  styleUrls: ['warehouse-form.component.scss']
})

export class WareHouseFormComponent implements OnInit {

  public form: FormGroup;

  public myFiles = ['index.html'];

  // Allows us to get a reference to the FilePond instance
  @ViewChild('myPond') public myPond: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({});
  }
  onSubmit({ valid, value }: { valid: boolean, value: any }) {

  }

  handleFilePondInit = () => {

    console.log('FilePond has initialised');

    // FilePond instance methods are available on `this.myPond`

  }

}
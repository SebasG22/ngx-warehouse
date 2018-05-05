import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from '../../actions/auth.actions';

@Component({
  selector: 'app-auth-email-login',
  templateUrl: 'email-login.component.html',
  styleUrls: ['email-login.component.scss']
})

export class EmailLoginComponent {

  public form: FormGroup = this.fb.group({
    'email': [null, Validators.required],
    'password': [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.form = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  public onSubmit({ valid, value }: { valid: boolean, value: any }) {
    console.log('Form Submitted');
    this.store.dispatch(new Login({ email: 'test@tesst.com', password: '123456' }));
  }

}
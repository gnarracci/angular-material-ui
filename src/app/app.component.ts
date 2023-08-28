import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  phoneNumber: FormControl = new FormControl('');

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  sendValues() {
    console.log(this.name.value);
    this.form.reset();
  }

}

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

  sendValues() {
    console.log(this.name.value, this.email.value, this.phoneNumber.value);
  }

}

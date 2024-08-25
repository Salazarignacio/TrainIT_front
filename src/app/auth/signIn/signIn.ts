import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
  });

  async onSubmit() {
    const formData = this.signInForm.value;
    console.log(formData);

    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    let response = await fetch('http://localhost:8080/users', opts);
    let data = await response.json();
    console.log('created succesfully ', data);
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}

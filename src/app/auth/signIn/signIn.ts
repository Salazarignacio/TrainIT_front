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
  });

  async onSubmit() {
    const respose = await fetch('http://localhost:8080/users')
    const formData = this.signInForm.value;
    
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}

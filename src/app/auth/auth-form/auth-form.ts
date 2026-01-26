import { Component, signal } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Card } from 'primeng/card'
import { InputText } from 'primeng/inputtext'
import { Button } from "primeng/button";
import { Password } from 'primeng/password'

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, Card, Button, InputText, Password],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
  mode = signal<'login' | 'register'>('login')

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
  })

  toogleMode(){
    this.mode.update(value => value === 'login' ? 'register' : 'login')
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return;
    const { username, password } = this.form.getRawValue();

    if(this.mode() === 'login') {
      this.login(username, password)
    } else {
      this.register(username, password)
    }
  }

  login(userName: string, password: string) {}

  register(userName: string, password: string) {}
}

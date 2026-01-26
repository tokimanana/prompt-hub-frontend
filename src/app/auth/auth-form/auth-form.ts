import { Component, inject, signal } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Card } from 'primeng/card'
import { InputText } from 'primeng/inputtext'
import { Button } from "primeng/button";
import { Password } from 'primeng/password'
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, Card, Button, InputText, Password],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
  private authService = inject(AuthService)
  private router = inject(Router)
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

  login(userName: string, password: string) {
    this.authService.login(userName, password).subscribe(() =>
      void this.router.navigate(['/'])
    )
  }

  register(userName: string, password: string) {
    this.authService.register(userName, password).subscribe(() =>
      void this.router.navigate(['/'])
    )
  }
}

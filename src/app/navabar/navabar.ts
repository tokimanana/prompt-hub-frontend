import { Component, inject, signal } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-navabar',
  imports: [NgOptimizedImage, Button, RouterLink],
  templateUrl: './navabar.html',
  styleUrl: './navabar.scss',
})
export class Navabar {
  authService = inject(AuthService);
  isDark = signal(false);

  toggleDarkMode() {
    this.isDark.update(value => !value);
    document.documentElement.classList.toggle('app-dark', this.isDark())
  }
}

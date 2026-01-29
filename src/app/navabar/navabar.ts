import { Component, effect, inject, signal } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { Button } from 'primeng/button'
import { Router, RouterLink } from '@angular/router'
import { AuthService } from '../auth/auth-service'

@Component({
  selector: 'app-navabar',
  imports: [NgOptimizedImage, Button, RouterLink],
  templateUrl: './navabar.html',
  styleUrl: './navabar.scss',
})
export class Navabar {
  authService = inject(AuthService)
  router = inject(Router)

  readonly DARK_MODE_KEY = 'dark-mode'
  isDark = signal(localStorage.getItem(this.DARK_MODE_KEY) === 'true')

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('app-dark', this.isDark())
      localStorage.setItem(this.DARK_MODE_KEY, String(this.isDark()))
    })
  }

  logout() {
    this.authService.logout().subscribe(() => {
      void this.router.navigate(['/'])
    })
  }
}

import { Component, signal } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navabar',
  imports: [NgOptimizedImage, Button, RouterLink],
  templateUrl: './navabar.html',
  styleUrl: './navabar.scss',
})
export class Navabar {
  isDark = signal(false);

  toggleDarkMode() {
    this.isDark.update(value => !value);
    document.documentElement.classList.toggle('app-dark', this.isDark())
  }
}

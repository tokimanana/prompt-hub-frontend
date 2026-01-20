import { Component } from '@angular/core'
import { Navabar } from './navabar/navabar'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Navabar, RouterOutlet],
})
export class App {}

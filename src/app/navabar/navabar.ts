import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { Button } from "primeng/button";

@Component({
  selector: 'app-navabar',
  imports: [NgOptimizedImage, Button],
  templateUrl: './navabar.html',
  styleUrl: './navabar.scss',
})
export class Navabar {}

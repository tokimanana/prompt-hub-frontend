import { Component } from '@angular/core'
import { PromptList } from "./prompts/prompt-list/prompt-list";
import { Navabar } from "./navabar/navabar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [PromptList, Navabar],
})
export class App {}

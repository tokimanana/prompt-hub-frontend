import { Component, input } from '@angular/core'
import { Prompt } from '../prompt.model'
import { ButtonModule } from 'primeng/button'
import { Textarea } from 'primeng/textarea'
import { TagModule } from 'primeng/tag'
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-prompt-card',
  imports: [ButtonModule, Textarea, TagModule, CardModule],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  prompt = input.required<Prompt>()

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}

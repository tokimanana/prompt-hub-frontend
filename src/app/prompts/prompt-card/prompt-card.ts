import { Component, input, inject, computed } from '@angular/core';
import { Prompt } from '../prompt.model'
import { ButtonModule } from 'primeng/button'
import { Textarea } from 'primeng/textarea'
import { TagModule } from 'primeng/tag'
import { CardModule } from 'primeng/card'
import { RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-prompt-card',
  imports: [ButtonModule, Textarea, TagModule, CardModule, RouterLink],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  authService = inject(AuthService)
  prompt = input.required<Prompt>()

  canEdit = computed(() => {
    const currentUser = this.authService.currentUser();
    return currentUser && this.prompt().author.id === currentUser.id
  })

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}

import { Component, effect, inject, input } from '@angular/core'
import { Card } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { Textarea } from 'primeng/textarea'
import { SelectModule } from 'primeng/select'
import { CategoryService } from '../category-service'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Button } from 'primeng/button'
import { PromptService } from '../prompt-service'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-prompt-form',
  imports: [Card, InputTextModule, SelectModule, Textarea, ReactiveFormsModule, Button, RouterLink],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {
  router = inject(Router)
  categoryService = inject(CategoryService)
  promptService = inject(PromptService)

  categories = toSignal(this.categoryService.getCategoris())

  promptId = input<number>()

  constructor() {
    effect(() => {
      const promptId = this.promptId()

      if (promptId) {
        this.promptService.getPrompt(promptId).subscribe((prompt) => {
          this.form.patchValue({
            title: prompt.title,
            content: prompt.content,
            categoryId: prompt.category.id,
          })
        })
      }
    })
  }

  form = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(30)],
      nonNullable: true,
    }),
    content: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    categoryId: new FormControl(-1, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true,
    }),
  })

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) {
      console.log(this.form.value);
      return
    }

    const prompt = this.form.getRawValue()
    const promptId = this.promptId();

    if(promptId) {
      this.promptService.updatePrompt(promptId, prompt).subscribe(() => this.router.navigate(['/']))
    } else {
      this.promptService.createPrompt(prompt).subscribe(() => this.router.navigate(['/']))
    }
  }
}

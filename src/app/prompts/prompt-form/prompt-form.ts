import { Component, inject } from '@angular/core'
import { Card } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { Textarea } from 'primeng/textarea'
import { SelectModule } from 'primeng/select'
import { CategoryService } from '../category-service'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Button } from "primeng/button";

@Component({
  selector: 'app-prompt-form',
  imports: [Card, InputTextModule, SelectModule, Textarea, ReactiveFormsModule, Button],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {
  categoryService = inject(CategoryService)

  categories = toSignal(this.categoryService.getCategoris())

  form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    categoryId: new FormControl(-1),
  })

  submit() {
    console.log(this.form.value);
  }
}

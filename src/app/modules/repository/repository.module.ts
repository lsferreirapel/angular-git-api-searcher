import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { MarkdownReadmeComponent } from './components/markdown-readme/markdown-readme.component';
import { RepositoryPage } from './pages/repository.page';

@NgModule({
  declarations: [
    MarkdownReadmeComponent,
    RepositoryPage
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class RepositoryModule { }

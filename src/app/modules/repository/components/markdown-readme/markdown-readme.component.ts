import { Component, Input } from '@angular/core';

@Component({
  selector: 'gs-readme',
  templateUrl: './markdown-readme.component.html',
  styleUrls: ['./markdown-readme.component.css']
})
export class MarkdownReadmeComponent {
  @Input() data;

  constructor () { }
}

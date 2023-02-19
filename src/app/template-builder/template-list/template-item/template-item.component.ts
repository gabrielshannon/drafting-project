import { Component, Input } from '@angular/core';
import { Template } from '../../template.model';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css'],
})
export class TemplateItemComponent {
  @Input() template: Template | undefined;
  @Input() index: number | undefined;

  constructor() {}

  ngOnInit() {}
}

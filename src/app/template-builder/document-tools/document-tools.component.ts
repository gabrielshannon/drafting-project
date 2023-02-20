import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplaterService } from '../template-builder.service';
import { Template } from '../template.model';

@Component({
  selector: 'app-document-tools',
  templateUrl: './document-tools.component.html',
  styleUrls: ['./document-tools.component.css']
})
export class DocumentToolsComponent {
  templates: Template[] | undefined;

  constructor(
   private templaterService: TemplaterService,
  ){}

  ngOnInit() {
    this.templates = this.templaterService.getTemplates();
    console.log(this.templates)
  }

}

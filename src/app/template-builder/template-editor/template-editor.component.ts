import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TemplaterService } from '../template-builder.service';
import { Template } from '../template.model';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css'],
})
export class TemplateEditorComponent {
  template: Template | undefined;
  id: number | undefined;

  constructor(
    private templaterService: TemplaterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.template = this.templaterService.getTemplate(this.id);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplaterService } from '../template-builder.service';
import { Template } from '../template.model';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  templates!: Template[];

  constructor(
   private templaterService: TemplaterService,
   private router: Router,
   private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.templates = this.templaterService.getTemplates();
  }

}

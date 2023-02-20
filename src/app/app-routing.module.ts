import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import { TemplateEditorComponent } from './template-builder/template-editor/template-editor.component';
import { TemplateStarterComponent } from './template-builder/template-starter/template-starter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/document-builder',
    pathMatch: 'full',
  },

  {
    path: 'document-builder', component: TemplateBuilderComponent,
    children: [
      { path: '', component: TemplateStarterComponent },
      { path: ':id', component: TemplateEditorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

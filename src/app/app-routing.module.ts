import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import { TemplateEditorComponent } from './template-builder/template-editor/template-editor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/document-builder',
    pathMatch: 'full',
  },

  {
    path: 'document-builder',
    component: TemplateBuilderComponent,
    children: [
      { path: '', component: TemplateEditorComponent },
      { path: ':id', component: TemplateEditorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

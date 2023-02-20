import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import { HeaderComponent } from './header/header.component';
import { TemplateEditorComponent } from './template-builder/template-editor/template-editor.component';
import { TemplateItemComponent } from './template-builder/document-tools/template-item/template-item.component';
import { TemplaterService } from './template-builder/template-builder.service';
import { DocumentToolsComponent } from './template-builder/document-tools/document-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateBuilderComponent,
    HeaderComponent,
    TemplateEditorComponent,
    TemplateItemComponent,
    DocumentToolsComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TemplaterService],
  bootstrap: [AppComponent],
})
export class AppModule {}

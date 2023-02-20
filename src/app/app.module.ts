import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import { HeaderComponent } from './header/header.component';

import { TemplateEditorComponent } from './template-builder/template-editor/template-editor.component';
import { TemplateListComponent } from './template-builder/template-list/template-list.component';
import { TemplateItemComponent } from './template-builder/template-list/template-item/template-item.component';
import { TemplaterService } from './template-builder/template-builder.service';
import { TemplateStarterComponent } from './template-builder/template-starter/template-starter.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateBuilderComponent,
    HeaderComponent,
    TemplateEditorComponent,
    TemplateListComponent,
    TemplateItemComponent,
    TemplateStarterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TemplaterService],
  bootstrap: [AppComponent],
})
export class AppModule {}

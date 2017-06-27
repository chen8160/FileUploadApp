import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FileDropDirective, FileSelectDirective } from "ng2-file-upload";
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    FileDropDirective,
    FileSelectDirective,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

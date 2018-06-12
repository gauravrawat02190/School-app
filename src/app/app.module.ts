import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student.component';
import { ProjectGridComponent } from './Student/projectgrid.component';
import { HttpHelper } from './HttpHelper/httphelper.service';
import { HttpModule } from '@angular/http';
import { SortPipes } from './Helpers/sortpipe.component';
import { SearchPipe } from './Helpers/search.component';

@NgModule({
  declarations: [
    StudentComponent,
    ProjectGridComponent,
    SortPipes,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class AppModule { }

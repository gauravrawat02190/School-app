import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './Student/student.component';
import { ProjectGridComponent } from './Student/projectgrid.component';
import { HttpHelper } from './HttpHelper/httphelper.service';
import { HttpModule } from '@angular/http';
import { SortPipes } from './Helpers/sortpipe.component';
import { SearchPipe } from './Helpers/search.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,   
     HomeComponent,
    StudentComponent,
    ProjectGridComponent,
    SortPipes,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'Home',
          component: HomeComponent
        },
        {
          path: 'Registeration',
          component: StudentComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

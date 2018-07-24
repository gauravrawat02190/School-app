import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './Student/student.component';
import { ProjectGridComponent } from './Student/projectgrid.component';
import { HttpModule } from '@angular/http';
import { SortPipes } from './Helpers/sortpipe.component';
import { SearchPipe } from './Helpers/search.component';
import { LayoutComponent } from './layout/layout.component';
import { WebTestComponentComponent } from './web-test-component/web-test-component.component';
import { RoutingModule } from './AppModule/routing-module/routing-module.module';

@NgModule({
  declarations: [
    LayoutComponent,   
     HomeComponent,
    StudentComponent,
    WebTestComponentComponent,
    ProjectGridComponent,
    SortPipes,
    SearchPipe
   
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],   
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

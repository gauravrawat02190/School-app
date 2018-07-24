import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '../../../../node_modules/@angular/router';
import { StudentComponent } from '../../Student/student.component';
import { HomeComponent } from '../../home/home.component';
import { WebTestComponentComponent } from '../../web-test-component/web-test-component.component';

const routes :Route[]=[
  {
    path: 'Home',
    component: HomeComponent    
  },
  {
    path: 'Registeration',
    component: StudentComponent    
  },
  {
    path:'WebTest',
    component:WebTestComponentComponent
  },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})


export class RoutingModule {



 }

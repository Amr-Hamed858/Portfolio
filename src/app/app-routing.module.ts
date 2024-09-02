import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServiceComponent } from './Components/service/service.component';
import { ProjectComponent } from './Components/project/project.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'services' , component: ServiceComponent},
  {path: 'projects' , component: ProjectComponent},
  {path: 'contact' , component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';

const routes: Routes = [

  {  path: '', redirectTo: '/home', pathMatch: 'full' },
  {  path: 'home', component: HomeComponent },
  {  path: 'navbar', component: NavbarComponent},
  {  path: 'card', component: CardComponent},
  {  path: 'footer', component: FooterComponent},
  {  path: 'experience', component: ExperienceComponent},
  {  path: 'projects', component: ProjectsComponent},
  {  path: 'skills', component: SkillsComponent},
  {  path: 'studies', component: StudiesComponent},


  



 
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}

import { PRIMARY_OUTLET, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
{
    path: '', component: AboutMeComponent, outlet: PRIMARY_OUTLET
},
{
    path: 'about-me', component: AboutMeComponent, outlet: PRIMARY_OUTLET
},
{
  path: 'experience', component: ExperienceComponent, outlet: PRIMARY_OUTLET
},
{
  path: 'education', component: EducationComponent, outlet: PRIMARY_OUTLET
},
{
  path: 'skills', component: SkillsComponent, outlet: PRIMARY_OUTLET
},
{
  path: 'interests', component: InterestsComponent, outlet: PRIMARY_OUTLET
},
{
  path: 'contact', component: ContactComponent, outlet: PRIMARY_OUTLET
}
];

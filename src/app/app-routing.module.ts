import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributionComponent } from './contribution/contribution.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExampleComponent } from './example/example.component';
import { InstallComponent } from './install/install.component';
import { AboutComponent } from './about/about.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
    { path: 'install', component: InstallComponent },
    { path: 'example', component: ExampleComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'contribution', component: ContributionComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tutorial', component: TutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InstallComponent } from './install/install.component';
import { ExampleComponent } from './example/example.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContributionComponent } from './contribution/contribution.component';
import { AboutComponent } from './about/about.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  { path: 'install', component: InstallComponent},
  { path: 'example', component: ExampleComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'contribution', component: ContributionComponent},
  { path: 'about', component: AboutComponent},
  { path: 'tutorial', component: TutorialComponent},
  { path: '', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InstallComponent,
    ExampleComponent,
    ExperienceComponent,
    ContributionComponent,
    AboutComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './TopBar/top-bar/top-bar.component';
import { HeaderComponent } from './Header/header/header.component';
import { ResumeComponent } from './Resume/resume/resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    ResumeComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactmeComponent,
    FooterComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'top-bar', component: TopBarComponent},
      {path: 'header', component: HeaderComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'contactme', component: ContactmeComponent},
    ]
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

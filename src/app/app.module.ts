import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QaComponent } from './qa/qa.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    NavBarComponent,
    QaComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

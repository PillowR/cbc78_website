import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PicturesComponent } from './pictures/pictures.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AdministrationBoardComponent } from './administration-board/administration-board.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { InterclubsComponent } from './interclubs/interclubs.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'join-us', component: JoinUsComponent },
  {path: 'pictures', component: PicturesComponent},
  {path: 'administration-board', component: AdministrationBoardComponent },
  {path: 'planning', component: PlanningComponent },
  {path: 'interclubs', component: InterclubsComponent },
  {path: 'contact', component: ContactComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

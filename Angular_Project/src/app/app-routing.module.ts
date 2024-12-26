import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"articles", component:ArticlesComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"articles/details", component: DetailsComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

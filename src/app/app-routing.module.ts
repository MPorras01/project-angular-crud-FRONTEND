import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './person/components/create-person/create-person.component';
import { ViewAllPersonsComponent } from './person/components/view-all-persons/view-all-persons.component';
import { CreateUserComponent } from './user/components/create-user/create-user.component';
import { EditUserModalComponent } from './user/components/edit-user-modal/edit-user-modal.component';
import { IndexComponent } from './user/components/index/index.component';
import { LoginComponent } from './user/components/login/login.component';
import { ViewAllUserComponent } from './user/components/view-all-user/view-all-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'CreateUserComponent',
    component: CreateUserComponent,
  },
  {
    path: 'ViewAllUserComponent',
    component: ViewAllUserComponent,
  },
  {
    path: 'IndexComponent',
    component: IndexComponent,
  },
  {
    path: 'EditUserModalComponent',
    component: EditUserModalComponent,
  },
  {
    path: 'CreatePersonComponent',
    component: CreatePersonComponent,
  },
  {
    path: 'ViewAllPersonsComponent',
    component: ViewAllPersonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

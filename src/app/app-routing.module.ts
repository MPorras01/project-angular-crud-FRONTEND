import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/components/create-user/create-user.component';
import { DeleteUserComponent } from './user/components/delete-user/delete-user.component';
import { EditUserModalComponent } from './user/components/edit-user-modal/edit-user-modal.component';
import { EditUserComponent } from './user/components/edit-user/edit-user.component';
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
    path: 'EditUserComponent',
    component: EditUserComponent,
  },
  {
    path: 'DeleteUserComponent',
    component: DeleteUserComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

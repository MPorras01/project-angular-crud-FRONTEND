import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/components/create-user/create-user.component';
import { DeleteUserComponent } from './user/components/delete-user/delete-user.component';
import { EditUserComponent } from './user/components/edit-user/edit-user.component';
import { IndexComponent } from './user/components/index/index.component';
import { LoginComponent } from './user/components/login/login.component';
import { ViewAllUserComponent } from './user/components/view-all-user/view-all-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EditUserModalComponent } from './user/components/edit-user-modal/edit-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ViewAllUserComponent,
    IndexComponent,
    EditUserModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/components/create-user/create-user.component';
import { IndexComponent } from './user/components/index/index.component';
import { LoginComponent } from './user/components/login/login.component';
import { ViewAllUserComponent } from './user/components/view-all-user/view-all-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EditUserModalComponent } from './user/components/edit-user-modal/edit-user-modal.component';
import { CreatePersonComponent } from './person/components/create-person/create-person.component';
import { ViewAllPersonsComponent } from './person/components/view-all-persons/view-all-persons.component';
import { EditPersonModalComponent } from './person/components/edit-person-modal/edit-person-modal.component';
import { FooterComponent } from './person/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ViewAllUserComponent,
    IndexComponent,
    EditUserModalComponent,
    CreatePersonComponent,
    ViewAllPersonsComponent,
    EditPersonModalComponent,
    EditUserModalComponent,
    FooterComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPersonModalComponent } from './components/edit-person-modal/edit-person-modal.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
  
    EditPersonModalComponent,
       FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonModule { }

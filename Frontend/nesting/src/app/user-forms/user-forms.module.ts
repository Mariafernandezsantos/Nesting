import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormsRoutingModule } from './user-forms-routing.module';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { PropertiesPublishedListComponent } from './components/properties-published-list/properties-published-list.component';
import { AddCardButtonComponent } from './components/add-card-button/add-card-button.component';
import { AddCardModalComponent } from './components/add-card-modal/add-card-modal.component';
import { CardAddedComponent } from './components/card-added/card-added.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';
import { EditPropertiesComponent } from './views/edit-properties/edit-properties.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent,
    UserdataComponent,
    PropertiesPublishedListComponent,
    AddCardButtonComponent,
    AddCardModalComponent,
    CardAddedComponent,
    PropertyEditComponent,
    EditPropertiesComponent
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserFormsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposComponent } from './propos/propos.component';
import { AddCycleComponent } from './cycle/add-cycle/add-cycle.component';
import { EditCycleComponent } from './cycle/edit-cycle/edit-cycle.component';
import { CycleListComponent } from './cycle/cycle-list/cycle-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    InscriptionComponent,
    LoginComponent,
    LoginAdminComponent,
    FooterComponent,
    AccueilComponent,
    ProposComponent,
    AddCycleComponent,
    EditCycleComponent,
    CycleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { ProposComponent } from './propos/propos.component';
import { CycleListComponent } from './cycle/cycle-list/cycle-list.component';
import { AddCycleComponent } from './cycle/add-cycle/add-cycle.component';
import { EditCycleComponent } from './cycle/edit-cycle/edit-cycle.component';

const routes: Routes = [
  {path:'inscription',component:InscriptionComponent},
  {path:'admin',component:LoginAdminComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:AccueilComponent},
  {path:'Apropos',component:ProposComponent},
  {path:'cycle-list',component:CycleListComponent},
  {path:'add-cycle',component:AddCycleComponent},
  {path:'edit-cycle/:id',component:EditCycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

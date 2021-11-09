import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ServicoComponent } from './servico/servico.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: '', component: HomeComponent },
   { path: 'cliente', component: ClienteComponent },
   { path: 'servico', component: ServicoComponent },
   { path: 'agendamento', component: AgendamentoComponent },
   { path: 'pagamento', component: PagamentoComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

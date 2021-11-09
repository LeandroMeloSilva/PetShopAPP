import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ServicoComponent } from './servico/servico.component';
import { PagamentoComponent } from './pagamento/pagamento.component';



@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    ClienteComponent,
    PagamentoComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}

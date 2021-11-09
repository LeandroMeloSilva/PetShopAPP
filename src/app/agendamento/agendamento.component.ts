import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../shared/agendamento.service';
import { Agendamento } from '../shared/agendamento.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'
  
]
})
export class AgendamentoComponent implements OnInit {

  constructor(public service: AgendamentoService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData. agendamentoId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCliente().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Enviado com Sucesso!', 'Detalhe de Agendamento Registrado com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCliente().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Atualizado com Sucesso!', 'Detalhes de Agendamento Registrados!')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Agendamento();
  }

  populateForm(selectedRecord: Agendamento) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Tem Certeza que Deseja Deletar esse Registro?')) {
      this.service.deleteCliente(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deletado com Sucesso", 'Detalhe de Agendamento');
          },
          err => { console.log(err) }
        )
    }
  }

}

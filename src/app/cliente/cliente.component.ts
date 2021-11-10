import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public clientes: any=[];
  public eventosFiltrados: any=[];
  private _filtroLista: string = '';



  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtraEventos(this.filtroLista): this.clientes;

  }


filtraEventos(filtrarPor: string): any {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.clientes.filter(


    (evento:{nome: string; cpf:string; lote:string; nomeAnimal:string}) => evento.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
    evento.cpf.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || evento.nomeAnimal.toLocaleLowerCase().indexOf(filtrarPor) !== -1


  );
}

  constructor(public service: ClienteService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData. clienteId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCliente().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Enviado com Sucesso!', 'Detalhe de cliente cadastrado com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCliente().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Atualizado com Sucesso!', 'Detalhe de cliente atualizado com Sucesso!')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Cliente();
  }

  populateForm(selectedRecord: Cliente) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Tem Certeza que Deseja Deletar esse Registro?')) {
      this.service.deleteCliente(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deletado com Sucesso", 'Detalhe de Cliente');
          },
          err => { console.log(err) }
        )
    }
  }

}


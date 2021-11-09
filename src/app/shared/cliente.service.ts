import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44360/api/Clientes'
  formData: Cliente = new Cliente();
  list: Cliente[];

  postCliente() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCliente() {
    return this.http.put(`${this.baseURL}/${this.formData.clienteId}`, this.formData);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Cliente[]);
  }


}

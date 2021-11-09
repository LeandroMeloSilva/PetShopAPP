import { Injectable } from '@angular/core';
import { Servico } from './servico.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44360/api/Servicoes'
  formData: Servico = new Servico();
  list: Servico[];

  postServico() {
    return this.http.post(this.baseURL, this.formData);
  }

  putServico() {
    return this.http.put(`${this.baseURL}/${this.formData.servicoId}`, this.formData);
  }

  deleteServico(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Servico[]);
  }


}

import { Injectable } from '@angular/core';
import { Pagamento } from './pagamento.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44360/api/Pagamentoes'
  formData: Pagamento = new Pagamento();
  list: Pagamento[];

  postPagamento() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPagamento() {
    return this.http.put(`${this.baseURL}/${this.formData.pagamentoId}`, this.formData);
  }

  deletePagamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Pagamento[]);
  }


}

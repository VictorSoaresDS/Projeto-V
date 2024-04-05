import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "https://api.harvardartmuseums.org/object?apikey=ec3952b0-5b72-488a-8e66-207b556cd15b&"; // URL da API com a chave de acesso
  constructor(private http: HttpClient) {} // Construtor da classe ApiService, injetando o serviço HttpClient

  getData() {
    // Método para obter dados da API
    return this.http.get<any>(`${this.url}page=1`); // Retorna a resposta de uma solicitação GET para a URL da API
  }
}
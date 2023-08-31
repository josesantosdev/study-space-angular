import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Colaborador } from '../model/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }

  public getColaboradores(): Observable<Colaborador[]> {
    const url = 'http://localhost:8080/colaborador';
    return this.http.get<Colaborador[]>(url);
  }

  public getColaboradorPorId(id: Number): Observable <Colaborador> {
    const url = 'http://localhost:8080/colaborador/' + id;
    return this.http.get<Colaborador>(url);
  }

  public postColaborador(colaborador: Colaborador): Observable <Colaborador> {
    const url = 'http://localhost:8080/colaborador';
    return this.http.post<Colaborador>(url, colaborador)
  }

}

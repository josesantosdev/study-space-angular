import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ColaboradorService } from '../../core/services/colaborador.service';
import { Colaborador } from '../../core/model/colaborador';
import { tap, catchError } from 'rxjs'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
    colaboradores: Colaborador[] = [];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.getColaboradores();
  }

  getColaboradores(): void {
    this.colaboradorService.getColaboradores()
      .pipe(
        tap(data => this.colaboradores = data),
        catchError(error => {
          console.error('Erro ao carregar colaboradores', error);
          throw error;
        })
      )
      .subscribe();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastraColaborador/cadastro.component';
import { ListaComponent } from './features/listaColaborador/lista.component';

const routes: Routes = [
  { path:'', redirectTo: '/cadastro', pathMatch: 'full'},
  { path:'cadastro', component: CadastroComponent },
  { path:'lista', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

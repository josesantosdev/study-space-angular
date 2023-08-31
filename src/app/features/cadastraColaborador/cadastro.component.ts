import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColaboradorService } from 'src/app/core/services/colaborador.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    senha: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private colaboradorService: ColaboradorService
  ) {}

  ngOnInit(): void {
    // Se você quiser definir os valores iniciais aqui, pode fazer isso:
    // this.cadastroForm.setValue({ nome: '', senha: '' });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const formData = this.cadastroForm.value;
      this.colaboradorService.postColaborador(formData).subscribe(
        (response) => {
          // Lógica após o sucesso do POST, se necessário
        },
        (error) => {
          // Lógica em caso de erro no POST, se necessário
        }
      );
    }
  }
}
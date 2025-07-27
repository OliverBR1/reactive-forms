import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-control',
  templateUrl: './forms-control.component.html',
  styleUrl: './forms-control.component.scss'
})
export class FormsControlComponent implements OnInit {
  //nome = new FormControl('Inicial' , [Validators.required, Validators.minLength(6)] );
  nome = new FormControl('Inicial' ,)

  ngOnInit() {
      console.log(this.nome);
  }

  mostrarStatus() {
     console.log(this.nome);
  } 

  alterarValor() {
    this.nome.setValue('Alterado!!!')
  }
  
  inputAlterado() {
    console.log(this.nome.value);
  }

  habilitar() {
    this.nome.enable();
  }

  desabilitar() {
    this.nome.disable();
  }

  resetar() {
    this.nome.reset('Valor Reset');
  }

}

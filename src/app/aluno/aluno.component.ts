import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  items = [
    { id: 1, name: 'Maylon', idade: '6 anos', sexo: 'Masculino', serie: 'Segundo Período' },
    { id: 2, name: 'Armando', idade: '5 anos', sexo: 'Masculino', serie: 'Primeiro Período' },
    { id: 3, name: 'Josi', idade: '10 anos', sexo: 'Feminino', serie: 'Sexta Serie' },
    { id: 4, name: 'Jack', idade: '8 anos', sexo: 'Feminino', serie: 'Quarta Serie' },
    { id: 5, name: 'Nonato', idade: '69 anos', sexo: 'Cabra Macho', serie: 'Alfabetização' }

  ];

}

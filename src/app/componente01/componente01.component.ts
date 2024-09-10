import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  nomes: string[] = ['Maylon Castro', 'Ana Silva', 'João Santos', 'Maria Oliveira'];

  indiceAtual: number = 0;

  name: string = this.nomes[this.indiceAtual];

  alerta() {
    alert(this.name)
  }

  trocarNome() {
    this.indiceAtual = (this.indiceAtual + 1) % this.nomes.length;
    this.name = this.nomes[this.indiceAtual];
  }

  imagem: string = '/assets/cachorro.jpg';
}

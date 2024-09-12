import { Component } from '@angular/core';
import { ComponentngifComponent } from "../componentngif/componentngif.component";

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [ComponentngifComponent],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  name1: string = "Maylon Castro";
  nomes: string[] = ['Maylon Castro', 'Ana Silva', 'João Santos', 'Maria Oliveira'];

  indiceAtual: number = 0;

  name: string = this.nomes[this.indiceAtual];

  alerta() {
    alert(this.name1)
  }

  trocarNome() {
    this.indiceAtual = (this.indiceAtual + 1) % this.nomes.length;
    this.name = this.nomes[this.indiceAtual];
  }

  imagem: string = './app/assets/cachorro.jpg';

  isDisabled: boolean = false;
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './componente01/componente01.component';
import { ComponentngifComponent } from "./componentngif/componentngif.component";
import { ComponenteNgForComponent } from "./componente-ng-for/componente-ng-for.component";
import { AlunoComponent } from "./aluno/aluno.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente01Component, ComponentngifComponent, ComponenteNgForComponent, AlunoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motoacademy';
}

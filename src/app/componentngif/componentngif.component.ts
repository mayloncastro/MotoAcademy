import { Component } from '@angular/core';

@Component({
  selector: 'app-componentngif',
  standalone: true,
  imports: [],
  templateUrl: './componentngif.component.html',
  styleUrl: './componentngif.component.css'
})
export class ComponentngifComponent {
  exibir:boolean = true;

  acao() {
    if(this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true
    }
  }

}

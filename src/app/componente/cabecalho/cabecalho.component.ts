import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {

  constructor(
    private router: Router
  ) {}

  home(){
    this.router.navigate(['/home'])
  }
  sobre(){
    this.router.navigate(['/sobre'])
  }
  servico(){
    this.router.navigate(['/produtos'])
  }
  contato(){
    this.router.navigate(['/contato'])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  emailCar: string = 'magnocar@gmail.com'

  constructor(
    private router: Router
  ) {}

  servicosButton(){
    this.router.navigate(['/produtos'])
  }
}

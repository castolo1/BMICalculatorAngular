import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'masculino';

  constructor(private router: Router){}

  cambiarAltura(event: any){
    this.altura=event.target.value;
  }

  masculino(){
    this.sexo='masculino';
  }

  femenino(){
    this.sexo='femenino';
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['resultado', BMI.toFixed(1)]);
  }
}

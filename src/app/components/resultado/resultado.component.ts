import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  bmi: number;
  resultado: string = '';
  interpretacion: string = '';

  constructor(private route: ActivatedRoute){
    //tomo bmi pasado por ruta
    this.bmi = +route.snapshot.paramMap.get('bmi')!;
  }
  
  ngOnInit(){
    this.getResultado();
  }

  getResultado(){
    if(this.bmi >= 25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer mas ejercico'
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!'
    }else{
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes como un poco mas'
    }
  }
}

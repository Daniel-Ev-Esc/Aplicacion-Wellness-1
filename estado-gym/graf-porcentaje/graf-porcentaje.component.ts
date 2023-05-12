import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-graf-porcentaje',
  templateUrl: './graf-porcentaje.component.html',
  styleUrls: ['./graf-porcentaje.component.scss']
})

export class GrafPorcentajeComponent {

  // Parámetros de aforo
  @Input() aforo_max: number;
  @Input() num_personas: number;

  // Variables de estilo y control de números
  porcentaje: number;
  porcentaje_redondeado: string;
  porcentaje_actual: string;

  ngOnInit() {

  }

  // Cuando haya cambios actualiza la gráfica
  ngOnChanges(changes: SimpleChanges) {
    this.porcentaje = this.num_personas < this.aforo_max ? (this.num_personas * 100 / this.aforo_max) : 100;
    this.porcentaje_redondeado = this.porcentaje.toPrecision(2);
    this.porcentaje_actual = this.porcentaje === 100 ? "100%" : this.porcentaje_redondeado.toString() + "%";
  }
}
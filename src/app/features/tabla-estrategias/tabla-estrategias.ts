import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Estrategia {
  id: number;
  nombre: string;
  objetivo: string;
  metaNumerica: number;
}

@Component({
  selector: 'app-tabla-estrategias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-estrategias.html',
  styleUrl: './tabla-estrategias.css',
})
export class TablaEstrategiasComponent {
  @Output() gestionarEstrategia = new EventEmitter<Estrategia>();
  @Output() verHistorial = new EventEmitter<Estrategia>();

  estrategias: Estrategia[] = [
    { id: 1, nombre: 'Estrategia A', objetivo: 'Reducir costos', metaNumerica: 50 },
    { id: 2, nombre: 'Estrategia de Ventas', objetivo: 'Incrementar ventas', metaNumerica: 200 },
    { id: 3, nombre: 'Estrategia de Mejora', objetivo: 'Mejorar servicio al cliente', metaNumerica: 80 },
    { id: 4, nombre: 'Estrategia de Innovations', objetivo: 'Fomentar la innovación', metaNumerica: 30 },
    { id: 5, nombre: 'Estrategia Delta', objetivo: 'Optimizar procesos', metaNumerica: 120 },
  ];

  onGestionar(estrategia: Estrategia) {
    this.gestionarEstrategia.emit(estrategia);
  }

  onVerHistorial(estrategia: Estrategia) {
    this.verHistorial.emit(estrategia);
  }
}

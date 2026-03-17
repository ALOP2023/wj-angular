import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { Estrategia } from '../tabla-estrategias/tabla-estrategias';

export interface Beneficiario {
  id: number;
  nombre: string;
  cedula: string;
  valorAcciones: number;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}

@Component({
  selector: 'app-gestion-estrategia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-estrategia.html',
  styleUrl: './gestion-estrategia.css',
})
export class GestionEstrategiaComponent {
  @Input() visible = false;
  @Input() estrategia: Estrategia | null = null;
  @Input() beneficiarios: Beneficiario[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() aprobarBeneficiario = new EventEmitter<Beneficiario>();
  @Output() rechazarBeneficiario = new EventEmitter<Beneficiario>();

  nombreEstrategia = '';
  objetivo = '';
  metaNumerica = 0;
  moneda = 'kpi prueba';
  periodicidad = 'Diaria';

  ngOnChanges() {
    if (this.estrategia) {
      this.nombreEstrategia = this.estrategia.nombre;
      this.objetivo = this.estrategia.objetivo;
      this.metaNumerica = this.estrategia.metaNumerica;
    }
  }

  cerrar() {
    this.close.emit();
  }

  aprobar(b: Beneficiario) {
    this.aprobarBeneficiario.emit(b);
  }

  rechazar(b: Beneficiario) {
    this.rechazarBeneficiario.emit(b);
  }
}

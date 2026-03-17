import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type EstadoBeneficiario = 'pendiente' | 'aprobado' | 'rechazado';

export interface RegistroHistorial {
  beneficiario: string;
  estado: EstadoBeneficiario;
  fecha: string;
  hora: string;
  actor: string;
  descripcion: string;
}

@Component({
  selector: 'app-historial-cambios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-cambios.html',
  styleUrl: './historial-cambios.css',
})
export class HistorialCambiosComponent {
  @Input() visible = false;
  @Input() estrategiaNombre = '';
  @Input() registros: RegistroHistorial[] = [];
  @Output() close = new EventEmitter<void>();

  cerrar() {
    this.close.emit();
  }
}


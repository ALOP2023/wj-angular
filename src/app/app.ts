import { Component, signal } from '@angular/core';
import { TablaEstrategiasComponent, Estrategia } from './features/tabla-estrategias/tabla-estrategias';
import { GestionEstrategiaComponent, Beneficiario } from './features/gestion-estrategia/gestion-estrategia';
import { HistorialCambiosComponent, RegistroHistorial } from './features/historial-cambios/historial-cambios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TablaEstrategiasComponent, GestionEstrategiaComponent, HistorialCambiosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');

  // Usuario simulado logueado
  usuarioActual = 'Juan Pérez';

  modalVisible = false;
  estrategiaSeleccionada: Estrategia | null = null;

  // Beneficiarios por estrategia (se podrían traer de un servicio)
  private beneficiariosPorEstrategia: Record<number, Beneficiario[]> = {
    1: [
      { id: 1, nombre: 'Juan Pérez', cedula: '12345678', valorAcciones: 10000, estado: 'pendiente' },
      { id: 2, nombre: 'María González', cedula: '87654321', valorAcciones: 8000, estado: 'pendiente' },
    ],
    2: [
      { id: 3, nombre: 'Carlos Ramírez', cedula: '11223344', valorAcciones: 12000, estado: 'pendiente' },
      { id: 4, nombre: 'Laura Martínez', cedula: '44332211', valorAcciones: 5000, estado: 'pendiente' },
    ],
    3: [
      { id: 5, nombre: 'Ana Torres', cedula: '99887766', valorAcciones: 9000, estado: 'pendiente' },
    ],
    4: [
      { id: 6, nombre: 'Pedro López', cedula: '55443322', valorAcciones: 7000, estado: 'pendiente' },
    ],
    5: [
      { id: 7, nombre: 'Lucía Díaz', cedula: '66778899', valorAcciones: 6000, estado: 'pendiente' },
    ],
  };

  beneficiariosGestion: Beneficiario[] = [];

  // Historial
  historialVisible = false;
  estrategiaHistorialNombre = '';
  registrosHistorial: RegistroHistorial[] = [];

  onGestionar(estrategia: Estrategia) {
    this.estrategiaSeleccionada = estrategia;
    this.beneficiariosGestion = this.beneficiariosPorEstrategia[estrategia.id] ?? [];
    this.modalVisible = true;
  }

  onCerrarModal() {
    this.modalVisible = false;
  }

  onAprobarBeneficiario(b: Beneficiario) {
    if (!this.estrategiaSeleccionada) return;
    const lista = this.beneficiariosPorEstrategia[this.estrategiaSeleccionada.id];
    const encontrado = lista?.find(x => x.id === b.id);
    if (encontrado) {
      encontrado.estado = 'aprobado';
    }
  }

  onRechazarBeneficiario(b: Beneficiario) {
    if (!this.estrategiaSeleccionada) return;
    const lista = this.beneficiariosPorEstrategia[this.estrategiaSeleccionada.id];
    const encontrado = lista?.find(x => x.id === b.id);
    if (encontrado) {
      encontrado.estado = 'rechazado';
    }
  }

  onVerHistorial(estrategia: Estrategia) {
    this.estrategiaHistorialNombre = estrategia.nombre;

    // Solo mostrar beneficiarios de esa estrategia.
    const lista = this.beneficiariosPorEstrategia[estrategia.id] ?? [];

    // Datos "quemados" para demo: fecha/hora/actor según estado.
    this.registrosHistorial = lista.map(b => {
      if (b.estado === 'aprobado') {
        return {
          beneficiario: b.nombre,
          estado: 'aprobado',
          fecha: '06/03/2026',
          hora: '10:02 AM',
          actor: 'Juan Pérez',
          descripcion: 'Aprobó la estrategia para el beneficiario.',
        };
      }

      if (b.estado === 'rechazado') {
        return {
          beneficiario: b.nombre,
          estado: 'rechazado',
          fecha: '06/03/2026',
          hora: '10:05 AM',
          actor: 'Juan Pérez',
          descripcion: 'Rechazó la estrategia para el beneficiario.',
        };
      }

      return {
        beneficiario: b.nombre,
        estado: 'pendiente',
        fecha: '05/03/2026',
        hora: '11:45 AM',
        actor: 'Waldir De la Cruz',
        descripcion: 'Creó la estrategia y la envió para revisión.',
      };
    });

    this.historialVisible = true;
  }

  onCerrarHistorial() {
    this.historialVisible = false;
  }
}

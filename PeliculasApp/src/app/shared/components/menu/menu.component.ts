import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../../../auth/services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Output() onCerrarSesion: EventEmitter<any> = new EventEmitter();

  public appPages = [
    { title: 'Inicio', url: '/dashboard', icon: 'home' },
    { title: 'Todos', url: '/peliculas/todos', icon: 'film' },
    { title: 'Abecedario', url: '/peliculas/abecedario', icon: 'information-circle' },
  ];

  constructor(private autenticacionService: AutenticacionService) {}

  cerrarSesion() {
    // Genera evento de cerrar sesión
    this.onCerrarSesion.emit();
    this.autenticacionService.cerrarSesion();
  }

  public estaSesionIniciada(): Observable<boolean> {
    return this.autenticacionService.isSesionIniciada();
  }
}


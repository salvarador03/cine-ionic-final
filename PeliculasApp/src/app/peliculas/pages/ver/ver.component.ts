import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PeliculasService } from 'src/app/peliculas/services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit {

  pelicula!: Pelicula;
  formulario: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {
    // Inicializa el formulario aquí con valores vacíos o predeterminados
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      genero: new FormControl(''),
      ano: new FormControl(''),
      director: new FormControl(''),
      precio: new FormControl(''),
      descuento: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.cargarPelicula();
  }

  cargarPelicula(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.peliculasService.getPelicula(id))
    ).subscribe(pelicula => {
      console.log(pelicula);
      this.pelicula = pelicula;
      // Ahora actualiza los valores del formulario aquí
      this.formulario.patchValue({
        titulo: this.pelicula.titulo,
        genero: this.pelicula.genero,
        ano: this.pelicula.ano,
        director: this.pelicula.director,
        precio: this.pelicula.precio,
        descuento: this.pelicula.descuento,
      });
    });
  }
}

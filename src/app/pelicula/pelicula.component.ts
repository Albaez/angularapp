import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDescripcion } from '../interfaces/IDescripcion';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class peliculaComponent {
  @Input() pelicula: IDescripcion = {
    titulo: 'Beetlejuice',
    tipo_pelicula: 'Comedia|Fantasia|Terror',
    descripcion: 'Esta es la continuación de la comedia Beetlejuice, sobre un fantasma que es reclutado para ayudar a rondar una casa',
    fecha: new Date(),
    img: {
      src: "https://th.bing.com/th/id/OIP.iwborjT51jllqtbzMMjIjAAAAA?rs=1&pid=ImgDetMain",
      alt: "Foto Poster"
    },
    enlace: 'https://www.imdb.com/title/tt2049403/?ref_=tt_mv_close',

  }
  @Input() destacado: boolean = false
}
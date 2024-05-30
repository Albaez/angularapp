import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IDescripcion } from './interfaces/IDescripcion';
import { peliculaComponent } from './pelicula/pelicula.component';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, peliculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'Peliculas-Time';



  peliculas : IDescripcion [] = [
    {
      titulo: 'Beetlejuice',
      tipo_pelicula: 'Comedia|Fantasia|Terror',
      descripcion: 'Esta es la continuación de la comedia Beetlejuice, sobre un fantasma que es reclutado para ayudar a rondar una casa',
      fecha: new Date(),
      img: {
        src: "https://th.bing.com/th/id/OIP.iwborjT51jllqtbzMMjIjAAAAA?rs=1&pid=ImgDetMain",
        alt: "Foto Poster"
      },
      enlace: 'https://www.imdb.com/title/tt2049403/?ref_=tt_mv_close',
      //destacado: true,
    },
    {
      titulo: 'Beetlejuice',
      tipo_pelicula: 'Comedia|Fantasia|Terror',
      descripcion: 'Esta es la continuación de la comedia Beetlejuice, sobre un fantasma que es reclutado para ayudar a rondar una casa',
      fecha: new Date(),
      img: {
        src: "https://th.bing.com/th/id/OIP.ofcYU08lAhcirlxxWuf_TgAAAA?rs=1&pid=ImgDetMain",
        alt: "Foto Poster"
      },
      enlace: 'https://www.imdb.com/title/tt2049403/?ref_=tt_mv_close',
      //destacado: false,
    },
    {
      titulo: 'Beetlejuice',
      tipo_pelicula: 'Comedia|Fantasia|Terror',
      descripcion: 'Esta es la continuación de la comedia Beetlejuice, sobre un fantasma que es reclutado para ayudar a rondar una casa',
      fecha: new Date(),
      img: {
        src: "https://th.bing.com/th/id/OIP.ofcYU08lAhcirlxxWuf_TgAAAA?rs=1&pid=ImgDetMain",
        alt: "Foto Poster"
      },
      enlace: 'https://www.imdb.com/title/tt2049403/?ref_=tt_mv_close',
      //destacado: false,
    },
  ]
}
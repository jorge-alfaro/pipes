import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Jorge Alfaro';
  nombre2 = 'SAraShinA RUka';
  array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
  PI: number = Math.PI;
  percentpipe = 0.9877;
  salario = 1234.5;
  fecha = new Date();
  activar = true;

  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/cM1WSovcn4I';

  valorPromesa = new Promise <string>(resolve => {
    setTimeout(() => {
      resolve ('llego la data');
    }, 4500);
  });

  hero = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  };
}

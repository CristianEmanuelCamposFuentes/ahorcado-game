import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Aca no se usa LET porque son PROPIEDADES

  palabra = 'AGUACATE';

  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }
  // Agregar :any al argumento, Si surge un error de tipo en TS
  comprobar(letra: any) {
    //Aqui se usa LET porque son VARIABLES
    this.existeLetra(letra);
    // console.log('Letra: ' + letra);

    // split separa todas las letras de una palabra por un espacio
    // y lo devuelve como array
    const palabraOcultaArr = this.palabraOculta.split(' ');

    // console.log(palabraOcultaArr);
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('Usuario GANO');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Usuario perdio');
    }
  }

  existeLetra(letra: any) {
    if (this.palabra.indexOf(letra) >= 0) {
      console.log('Letra existe');
    } else {
      console.log('Letra NO existe');
      this.intentos++;
    }
  }
}

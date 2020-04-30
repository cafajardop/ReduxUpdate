//Antes de redux
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions  from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  //Antes de Redux
  //@Input() contador: number;
  //@Output() cambioContador = new EventEmitter<number>();

  contador: number;
  //Me permite saber cual es el estado que esta en el store
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  this.store.select('contador')
  .subscribe (contador => this.contador = contador)
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({numero:2}));
  }
  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({numero:3}));
  }
  
  //YA NO LO NECESITAMOS AL NIETO
  // resetNieto(nuevoContador){
  // //  this.contador = nuevoContador;
  // //  this.cambioContador.emit(this.contador);
  // }
}

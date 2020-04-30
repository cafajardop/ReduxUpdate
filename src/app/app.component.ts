import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reduxUpdate';
  contador: number;

  //Implementamos NgRx en el constructor 
  constructor(private store:Store<AppState>){
    //this.contador = 10;
  this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  incrementar(){
    //this.contador ++;
    this.store.dispatch( actions.incrementar() );

  }

  decrementar(){
    //this.contador --;
    this.store.dispatch( actions.decrementar() )
  }
}

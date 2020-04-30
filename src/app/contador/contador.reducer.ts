//Reducer es quien recibe las acciones

import { createReducer,on } from '@ngrx/store';
import * as actions from './contador.actions';

//Aqui recibimos nuestro estado inicial nuestro state y por defecto lo dejamos en 10 y se recibe tambien la accion e importamos la action de ngrx
//Action es una simple interfaz
// export function contadorReducer(state: number = 10, action: Action) {
//   //aqui llamamos el tipo de la accion
//   //Todo lo q recibe el reducer tiene que resolverse en este espacio y aqui no se disparan servicios
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;
//     default:
//       return state;
//     //se coloca el stado default por que siempre debe devolver un estado
//   }
// }
export const initialState = 20;

const _contadorReducer = createReducer(initialState,
  on(actions.incrementar, state => state + 1),
  on(actions.decrementar, state => state - 1),
  on(actions.reset      , state => initialState),
  on(actions.multiplicar, (state,{numero}) => state * numero),
  on(actions.dividir, (state,{numero}) => state / numero),
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
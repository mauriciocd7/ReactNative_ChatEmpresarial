import React from 'react';
import { StackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';  /*Os reducers. Cada dado da store deve ter o seu próprio reducer, por exemplo: o dado "user" teria o seu reducer,
chamado "userReducer". Um reducer é encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store.*/
import Preload from './src/Preload';
//import Home from './src/Home';

let store = createStore(Reducers, applyMiddleware(ReduxThunk)); /*"store" é o nome dado pelo Facebook para o conjunto de estados da sua aplicação.
Vamos pensar na store como um grande centro de informações, que possui disponibilidade para receber e entregar exatamente o que o seu componente requisita (seja uma função, 
ou uma informação propriamente dita). Tecnicamente, a store é um objeto JavaScript que possui todos os estados dos seus componentes. */

const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  }
});

export default class App extends Component {
  render(){
    <Provider store = {store}>
        <Navegador></Navegador>
    </Provider>
  }
}

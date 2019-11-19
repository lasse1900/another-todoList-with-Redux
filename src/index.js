import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App {...state} />, document.getElementById('root'));
}
render()

store.subscribe(render)

setTimeout(() => {
  store.dispatch({ type: 'TODO_ADD', payload: { id: 4, name: 'New todo', isComplete: true} })
}, 1000)

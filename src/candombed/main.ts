
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { requireMonaco } from '../common/util/monacoFacade';
import { getReduceres } from './actions/reducers';
import layout from './ui/layout';
import { State, initialState } from './actions/State';
import { EventEmitter } from 'events';
import { installProjectObserver } from './projectObserver';

export const store: Store = createStore(getReduceres())

export function render() {
  ReactDOM.render(layout(store.getState()), document.getElementById('candombed-main'))
}

export const emitter = new EventEmitter()
let oldState: State = initialState
function stateChanged(){
  render()
  const newState = store.getState()
  emitter.emit('stateChange', oldState, newState)
  oldState = newState
}


requireMonaco(function(){
  store.subscribe(stateChanged)
  installProjectObserver()
  render()
})

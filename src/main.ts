import { dispatchExamples } from './examples';

import ReactDOM from 'react-dom'
import layout from './ui/layout';


export function render(){
  dispatchExamples()
  ReactDOM.render(layout(), document.getElementById('typescript-in-the-browser-main'))
}

export function main(){
  // debugger
  render()
  window.onhashchange=()=>{  render()}
}

main()
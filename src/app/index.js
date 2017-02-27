import { h, render } from 'preact';
import App from './components/app';
import 'es6-promise/auto';

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }

  render(<App />, document.body, document.getElementById('app'));
});

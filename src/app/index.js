import { h, render } from 'preact';
import App from './components/app';
import 'es6-promise/auto';

render(<App />, document.body, document.getElementById('app'));

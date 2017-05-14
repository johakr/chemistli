import loadScript from './utils/loadScript';
import { h, render } from 'preact';
import App from './components/app';

if (!('Promise' in window || 'fetch' in window)) {
	loadScript('/polyfills.js');
}

window.addEventListener('load', () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js');
	}

	render(<App />, document.body, document.getElementById('app'));
});

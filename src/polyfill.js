import Promise from 'promise-polyfill';
import fetch from 'whatwg-fetch';

if (!window.Promise) {
  window.Promise = Promise;
}

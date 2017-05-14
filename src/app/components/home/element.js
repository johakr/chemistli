import { h, Component } from 'preact';

const Element = props => (
  <div class="element">
    <div class="no">{props.no}</div>
    <div class="symbol">{props.symbol}</div>
    <div class="name">{props.name}</div>
  </div>
);

export default Element;

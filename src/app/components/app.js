import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from './home';

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute} url={this.props.url || ''}>
          <Home path="/q/:query" default />
        </Router>
      </div>
    );
  }
}

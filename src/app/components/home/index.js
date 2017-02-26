import { h, Component } from 'preact';
/** @jsx h */
import { route } from 'preact-router';
import fetch from 'isomorphic-fetch';
import Element from './element';

export default class Home extends Component {
  load = (word) => {
    this.setState({ submitted: true, success: null })

    return fetch(`http://localhost:3006/c/${word}`)
      .then(res => res.json())
      .then((json) => {
        if(json.success) {
          this.setState({ elements: json.elements, success: true });
        } else {
          return Promise.reject(json);
        }
      }).catch((ex) => {
        this.setState({ success: false });
      });
  };

  submit = (e) => {
    e.preventDefault();

    if (this.state.phrase.length) {
      route(`/q/${encodeURIComponent(this.state.phrase)}`);
      this.load(this.state.phrase);
    }
  }

  state = {
    phrase: '',
    elements: [],
    submited: false,
    success: null,
  };

  componentWillMount() {
    if (this.props.query) {
      this.state.phrase = this.props.query;
    }
  }

  componentDidMount() {
    if (this.props.query) {
      return this.load(this.state.phrase);
    }
  }

	render() {
    const { elements, submitted, success, phrase } = this.state;

		return (
      <div class="container">
        <form onSubmit={this.submit}>
          <fieldset>
            <input type="text" placeholder="cute" id="phrase" value={phrase} onInput={this.linkState('phrase')} />
            <button type="submit" class="button-primary">Sag es mit Chemie!</button>
          </fieldset>
        </form>

        <div id="elements">
          { submitted && success && elements.map(e => <Element {...e} />) }
          { submitted && success === false && <div class="not-found">\(^Д^)/</div>}
        </div>

      </div>
		);
	}
}

import { h, Component } from 'preact';
import { route } from 'preact-router';
import linkState from 'linkstate';
import Element from './element';
import error from '../../utils/error';

export default class Home extends Component {
  load = word => {
    this.setState({ submitted: true, success: null });

    return fetch(`/c/${word}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({ elements: json.elements, success: true });
        } else {
          return Promise.reject(json);
        }
      })
      .catch(ex => {
        this.setState({ success: false, errorMessage: error() });
      });
  };

  submit = e => {
    e.preventDefault();

    if (this.state.phrase.length) {
      route(`/q/${encodeURIComponent(this.state.phrase)}`);
      this.load(this.state.phrase);
    }
  };

  state = {
    phrase: '',
    elements: [],
    submited: false,
    success: null,
    errorMessage: '',
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
    const { elements, errorMessage, phrase, submitted, success } = this.state;

    return (
      <div class="container">
        <form onSubmit={this.submit}>
          <fieldset>
            <input
              aria-label="Phrase"
              type="text"
              autofocus
              placeholder="cute"
              id="phrase"
              value={phrase}
              onInput={linkState(this, 'phrase')}
            />
            <button type="submit" class="button-primary">
              Sag es mit Chemie!
            </button>
          </fieldset>
        </form>

        <div id="elements">
          {submitted && success && elements.map(e => <Element {...e} />)}
          {submitted &&
            success === false &&
            <div class="not-found">{errorMessage}</div>}
        </div>

      </div>
    );
  }
}

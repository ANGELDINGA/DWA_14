import { LitElement, html, css } from 'lit';

class TallyApp extends LitElement {
  static properties = {
    count: { type: Number },
    min: { type: Number },
    max: { type: Number },
    state: { type: String }
  };

  constructor() {
    super();
    this.count = 0;
    this.min = 0;
    this.max = 10;
    this.state = 'Normal';
  }

  static styles = css`
    .normal {
      color: black;
    }
    .min-reached {
      color: red;
    }
    .max-reached {
      color: green;
    }
  `;

  updated(changedProperties) {
    if (changedProperties.has('count')) {
      if (this.count <= this.min) {
        this.state = 'Minimum Reached';
      } else if (this.count >= this.max) {
        this.state = 'Maximum Reached';
      } else {
        this.state = 'Normal';
      }
    }
  }

  increment() {
    if (this.count < this.max) {
      this.count += 1;
    }
  }

  decrement() {
    if (this.count > this.min) {
      this.count -= 1;
    }
  }

  render() {
    return html`
      <div class="${this.state.replace(' ', '-').toLowerCase()}">
        <p>Count: ${this.count}</p>
        <p>State: ${this.state}</p>
        <button @click="${this.increment}">Increment</button>
        <button @click="${this.decrement}">Decrement</button>
      </div>
    `;
  }
}

customElements.define('tally-app', TallyApp);

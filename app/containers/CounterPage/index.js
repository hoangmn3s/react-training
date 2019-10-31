/* eslint-disable react/no-access-state-in-setstate */
/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import H1 from 'components/H1';
import Button from 'components/Button';
import messages from './messages';

export class CounterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  plusBtn = () => {
    // Get current state value.
    const currentValue = this.state.value;
    // Plus 1 on click
    this.setState({ value: currentValue + 1 });
  };

  minusBtn = () => {
    // Get current state value.
    const currentValue = this.state.value;
    // Check condition current Value > 0
    if (currentValue > 0) {
      this.setState({ value: currentValue - 1 });
    }
  };

  // Render JSX : Title, Value, Button.
  render() {
    return (
      <div>
        <Helmet>
          <title>Counter Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <div>
          {/* Show current Value here */}
          <h2>{this.state.value}</h2>
          <div style={{ display: 'inline-flex' }}>
            {/* on Click button plus => call plus function */}
            <Button onClick={this.plusBtn}>+</Button>
            {/* on Click button minus => call plus function */}
            <Button onClick={this.minusBtn}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default compose()(CounterPage);

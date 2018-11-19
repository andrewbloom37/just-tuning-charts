// @flow
// @SyntheticEvent

import React, { Fragment } from 'react';

import TableBody from './TableBody';

type Props = {};

type State = {
  inputValue: number,
};

export default class Table extends React.Component<Props, State> {
  state = {
    inputValue: 440,
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (!(event.target instanceof window.HTMLInputElement)) return;
    this.setState({ inputValue: Number(event.target && event.target.value) });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <h1>
          {`Just Intonation Ratios and Frequency for ${inputValue} Hz`}
        </h1>
        <label htmlFor="hertz">
          Input frequency in Hz:
          <input
            id="hertz"
            type="number"
            onChange={this.handleChange}
            value={parseFloat(inputValue)}
          />
        </label>
        <TableBody
          inputValue={inputValue}
        />
      </Fragment>
    );
  }
}

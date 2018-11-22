import React, { Fragment } from 'react';
import styled from 'styled-components';

import TableBody from './TableBody';

const Head = styled.h1`
  text-align: center;
`;

const CenteredTable = styled.table`
  margin: 0 auto;
`;

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

interface State {
  inputValue: number;
}

export default class Table extends React.Component<{}, State> {
  state = {
    inputValue: 432,
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    this.setState({ inputValue: Number(event.target && event.target.value) });
  }

  updateValue = (value: number) => {
    console.log(event);
    this.setState({ inputValue: value });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <Head>
          {`Just Intonation Ratios and Frequency for ${inputValue} Hz`}
        </Head>
        <CenteredBox>
          <label htmlFor="hertz">
            Input frequency in Hz:
            <input
              id="hertz"
              type="number"
              onChange={this.handleChange}
              value={parseFloat(`${inputValue}`)}
            />
          </label>
        </CenteredBox>
        <CenteredTable>
          <TableBody
            inputValue={inputValue}
            updateValue={this.updateValue}
          />
        </CenteredTable>
      </Fragment>
    );
  }
}

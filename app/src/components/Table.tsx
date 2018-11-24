import React, { Fragment } from 'react';
import styled from 'styled-components';

import TableBody from './TableBody';

const Head = styled.h1`
  text-align: center;
`;

const CenteredTable = styled.table`
  margin: 0 auto;
`;

interface State {
  inputValue: number;
  selectedNote: number;
}

export default class Table extends React.Component<{}, State> {
  state = {
    inputValue: 259.2,
    selectedNote: 60,
  };

  updateValue = (value: number, index: number) => {
    this.setState({ selectedNote: 60 + index, inputValue: value });
  }

  render() {
    const { inputValue, selectedNote } = this.state;
    return (
      <Fragment>
        <Head>
          Just Intonation Ratios and Frequency
        </Head>
        <CenteredTable>
          <TableBody
            inputValue={inputValue}
            selectedNote={selectedNote}
            updateValue={this.updateValue}
          />
        </CenteredTable>
      </Fragment>
    );
  }
}

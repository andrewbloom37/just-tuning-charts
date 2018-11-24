import React, { Fragment } from 'react';
import v4 from 'uuid/v4';
import styled from 'styled-components';

import { numberCalculator, slicedArr } from '../lib/intervalMap';

const TableGrid = styled.td`
  outline: solid 1px black;
  text-align: center;
  padding: 1px 25px;
`;

interface Props {
  inputValue: number;
  selectedNote: number;
  updateValue: (value: number, index: number) => void;
}

export default (props: Props) => {
  const { inputValue, selectedNote, updateValue } = props;
  const arr = slicedArr(selectedNote);
  return (
    <Fragment>
      <thead>
        <tr>
          <TableGrid>Ratio</TableGrid>
          <TableGrid>Midi Note</TableGrid>
          <TableGrid>Frequency</TableGrid>
        </tr>
      </thead>
      <tbody>
        {arr.map((_, index) => {
          const ratio = arr[index].split('/');
          const numerator = parseInt(ratio[0], 10);
          const denominator = parseInt(ratio[1], 10);
          const freqValue = numberCalculator({ inputValue, numerator, denominator });
          return (
            <tr key={v4()} onClick={() => updateValue(freqValue, index)}>
              <TableGrid>{`${numerator}/${denominator}`}</TableGrid>
              <TableGrid>{60 + index}</TableGrid>
              <TableGrid>{`${freqValue}`}</TableGrid>
            </tr>
          );
        })}
      </tbody>
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import v4 from 'uuid/v4';
import styled from 'styled-components';

import { intervalMap, numberCalculator } from '../lib/helpers';

const TableGrid = styled.td`
  outline: solid 1px black;
  text-align: center;
  padding: 1px 25px;
`;

interface Props {
  inputValue: number;
  updateValue: (value: number) => void;
}

export default (props: Props) => {
  const { inputValue, updateValue } = props;
  return (
    <Fragment>
      <thead>
        <tr>
          <TableGrid>Interval</TableGrid>
          <TableGrid>Ratio</TableGrid>
          <TableGrid>Frequency</TableGrid>
        </tr>
      </thead>
      <tbody>
        {Object.keys(intervalMap).map((interval) => {
          const { numerator, denominator } = intervalMap[interval];
          const freqValue = numberCalculator({ inputValue, numerator, denominator });
          return (
            <tr key={v4()}>
              <TableGrid>{interval}</TableGrid>
              <TableGrid>{`${numerator}/${denominator}`}</TableGrid>
              <TableGrid onClick={() => updateValue(freqValue)}>{`${freqValue}`}</TableGrid>
            </tr>
          );
        })}
      </tbody>
    </Fragment>
  );
};

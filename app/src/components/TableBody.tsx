import React from 'react';
import v4 from 'uuid/v4';
import styled from 'styled-components';

import { generateSeries, fractionGenerator, numberCalculator } from '../lib/helpers';

const TableGrid = styled.td`
  outline: solid 1px black;
  text-align: center;
  padding: 1px 25px;
`;

const powerSeries = generateSeries().filter((powerEl) => {
  const { numerator, denominator } = fractionGenerator(powerEl);
  const decimal = numberCalculator({ inputValue: 1, ...powerEl });
  return decimal >= 1 && decimal <= 2 && numerator <= 12 && denominator <= 12;
}).sort((a, b) => {
  const aNum = numberCalculator({ inputValue: 1, ...a });
  const bNum = numberCalculator({ inputValue: 1, ...b });
  return aNum - bNum;
});

interface Props {
  inputValue: number;
}

export default (props: Props) => {
  const { inputValue } = props;
  return (
    <tbody>
      <tr>
        <TableGrid>Ratio</TableGrid>
        <TableGrid>Frequency</TableGrid>
      </tr>
      {powerSeries.map((powerEl) => {
        const { numerator, denominator } = fractionGenerator(powerEl);
        return (
          <tr key={v4()}>
            <TableGrid>{`${numerator}/${denominator}`}</TableGrid>
            <TableGrid>{`${numberCalculator({ inputValue, ...powerEl })}`}</TableGrid>
          </tr>
        );
      })}
    </tbody>
  );
};

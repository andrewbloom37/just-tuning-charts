// @flow

import React, { Fragment } from 'react';
import v4 from 'uuid/v4';

import { generateSeries, fractionGenerator, numberCalculator } from '../lib/helpers';

type Props = {
  inputValue: number,
};

const powerSeries = generateSeries().filter((powerEl) => {
  const { numerator, denominator } = fractionGenerator(powerEl);
  const decimal = numberCalculator({ inputValue: 1, ...powerEl });
  return decimal >= 1 && decimal <= 2 && numerator <= 65 && denominator <= 65;
}).sort((a, b) => {
  const aNum = numberCalculator({ inputValue: 1, ...a });
  const bNum = numberCalculator({ inputValue: 1, ...b });
  return aNum - bNum;
});


export default (props: Props) => {
  const { inputValue } = props;
  return (
    <Fragment>
      {powerSeries.map((powerEl) => {
        const { numerator, denominator } = fractionGenerator(powerEl);
        return (
          <Fragment>
            <p key={v4()}>{`${numerator}/${denominator} : ${numberCalculator({ inputValue, ...powerEl })}`}</p>
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

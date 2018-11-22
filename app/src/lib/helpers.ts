interface Map<T> {
  [key: string]: T;
};

interface Interval {
  numerator: number;
  denominator: number;
};

export const intervalMap: Map<Interval> = {
  U: {
    numerator: 1,
    denominator: 1,
  },
  m2: {
    numerator: 14,
    denominator: 13,
  },
  M2: {
    numerator: 8,
    denominator: 7,
  },
  m3: {
    numerator: 6,
    denominator: 5,
  },
  M3: {
    numerator: 5,
    denominator: 4,
  },
  P4: {
    numerator: 4,
    denominator: 3,
  },
  A4: {
    numerator: 7,
    denominator: 5,
  },
  d5: {
    numerator: 10,
    denominator: 7,
  },
  P5: {
    numerator: 3,
    denominator: 2,
  },
  m6: {
    numerator: 8,
    denominator: 5,
  },
  M6: {
    numerator: 5,
    denominator: 3,
  },
  m7: {
    numerator: 7,
    denominator: 4,
  },
  M7: {
    numerator: 13,
    denominator: 7,
  },
};

interface Input {
  inputValue: number,
};

const isNegative = (num: number): boolean => num < 0 ? true : false;

export const shiftOctave = (twoPow: number, { numerator, denominator }: Interval): Interval => {
  if (isNegative(twoPow)) {
    const posTwoPow = -twoPow;
    return ({
      numerator,
      denominator: denominator * (2 ** posTwoPow),
    })
  }
  return ({
    numerator: numerator * (2 ** twoPow),
    denominator,
  })
}

export const numberCalculator = ({
  inputValue, numerator, denominator,
}: Input & Interval) => inputValue * numerator / denominator;

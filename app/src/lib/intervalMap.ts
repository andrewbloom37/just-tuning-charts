export interface Map<T> {
  [key: string]: T;
};

export interface Interval {
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
  // Prefer Augmented 4th over Diminished 5th?
  // d5: {
  //   numerator: 5,
  //   denominator: 7,
  // },
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

export const ratioArr = [
  '7/13',
  '4/7',
  '3/5',
  '5/8',
  '2/3',
  '7/10',
  '3/4',
  '4/5',
  '5/6',
  '7/8',
  '13/14',
  '1/1',
  '14/13',
  '8/7',
  '6/5',
  '5/4',
  '4/3',
  '7/5',
  '3/2',
  '8/5',
  '5/3',
  '7/4',
  '13/7',
];

export const slicedArr = (noteValue: number) => {
  const start = 71 - noteValue;
  const end = start + 12;
  return ratioArr.slice(start, end);
}

// Arr of calculated interval fractions e.g. [1/1, 14/13, 8/7, ... 13/7]
const intervalArr = Object.keys(intervalMap)
  .map(interval => intervalMap[interval].numerator / intervalMap[interval].denominator);

// 432 A4 = midi note 69
// 256 C4 = midi note 60 (middle C)

const midiNotes: Array<number> = [...(new Array(128))].map(() => 0);

interface Input {
  inputValue: number,
};

export const numberCalculator = ({
  inputValue, numerator, denominator,
}: Input & Interval) => inputValue * numerator / denominator;

interface FractionGeneratorOptions {
  twoPow: number,
  threePow: number,
  fivePow: number,
  sevenPow: number,
}

export const fractionGenerator = ({
  twoPow, threePow, fivePow, sevenPow,
}: FractionGeneratorOptions) => {
  let numerator = 1;
  let denominator = 1;
  if (twoPow > 0) {
    for (let i = 0; i < twoPow; i += 1) {
      numerator *= 2;
    }
  } else if (twoPow < 0) {
    const twoPowInv = -twoPow;
    for (let i = 0; i < twoPowInv; i += 1) {
      denominator *= 2;
    }
  }
  if (threePow > 0) {
    for (let i = 0; i < threePow; i += 1) {
      numerator *= 3;
    }
  } else if (threePow < 0) {
    const threePowInv = -threePow;
    for (let i = 0; i < threePowInv; i += 1) {
      denominator *= 3;
    }
  }
  if (fivePow > 0) {
    for (let i = 0; i < fivePow; i += 1) {
      numerator *= 5;
    }
  } else if (fivePow < 0) {
    const fivePowInv = -fivePow;
    for (let i = 0; i < fivePowInv; i += 1) {
      denominator *= 5;
    }
  }
  if (sevenPow > 0) {
    for (let i = 0; i < sevenPow; i += 1) {
      numerator *= 7;
    }
  } else if (sevenPow < 0) {
    const sevenPowInv = -sevenPow;
    for (let i = 0; i < sevenPowInv; i += 1) {
      denominator *= 7;
    }
  }
  return { numerator, denominator };
};

export const generateSeries = (): Array<FractionGeneratorOptions> => {
  const arr = [];
  for (let twoPow = -4; twoPow <= 4; twoPow += 1) {
    for (let threePow = -2; threePow <= 2; threePow += 1) {
      for (let fivePow = -1; fivePow <= 1; fivePow += 1) {
        for (let sevenPow = -1; sevenPow <= 1; sevenPow += 1) {
          arr.push({ twoPow, threePow, fivePow, sevenPow });
        }
      }
    }
  }
  return arr;
};

interface Input {
  inputValue: number,
};

export const numberCalculator = ({
  inputValue, twoPow, threePow, fivePow, sevenPow,
}: Input & FractionGeneratorOptions) => inputValue * (2 ** twoPow) * (3 ** threePow) * (5 ** fivePow) * (7 ** sevenPow);

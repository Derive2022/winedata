import data from "../data/data.json";
data.forEach((gamma) => {
  gamma.Gamma = (gamma["Ash"] * gamma["Hue"]) / gamma["Magnesium"];
});

export function gammaMean(arr) {
  const gamma = arr.map((obj, index) => obj.Gamma);
  const sum = gamma.reduce((acc, curr) => Number(curr) + acc, 0);
  const gammaLength = gamma.length;
  const mean = sum / gammaLength;
  return mean;
}
export function gammaMedian(arr) {
  const gamma = arr.map((obj, index) => obj.Gamma).sort();
  const gammaSize = gamma.length;
  if (gammaSize % 2 !== 0) {
    const medianGamma = gamma[Math.floor(gammaSize / 2) + 1];
    return medianGamma;
  } else if (gammaSize % 2 === 0) {
    const medianGamma =
      (gamma[Math.floor(gammaSize / 2)] +
        gamma[Math.floor(gammaSize / 2) + 1]) /
      2;
    return medianGamma;
  }
}
export function gammaMode(arr) {
  const gamma = arr.map((obj, index) => obj.Gamma.toFixed(3));

  const frequency = {};
  gamma.forEach((el) => {
    if (frequency[el]) {
      frequency[el]++;
    } else {
      frequency[el] = 1;
    }
  });
  console.log(frequency);
  let maxFrequency = 0;
  let mode = [];

  for (const el in frequency) {
    if (frequency[el] > maxFrequency) {
      maxFrequency = frequency[el];
      mode = [el];
    } else if (frequency[el] === maxFrequency) {
      mode.push(el);
    }
  }
  return mode.length === 1 ? mode[0] : "No mode";
}

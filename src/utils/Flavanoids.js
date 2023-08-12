export function flavanoidsMean(arr) {
  const flavanoids = arr.map((obj, index) => obj.Flavanoids);
  const sum = flavanoids.reduce((acc, curr) => Number(curr) + acc, 0);
  const flavanoidsLength = flavanoids.length;
  const mean = sum / flavanoidsLength;
  return mean;
}

export function flavanoidsMedian(arr) {
  const flavanoids = arr.map((obj, index) => obj.Flavanoids).sort();
  const flavSize = flavanoids.length;
  if (flavSize % 2 !== 0) {
    const medianFlav = flavanoids[Math.floor(flavSize / 2) + 1];
    return medianFlav;
  } else if (flavSize % 2 === 0) {
    const medianFlav =
      (flavanoids[Math.floor(flavSize / 2)] +
        flavanoids[Math.floor(flavSize / 2) + 1]) /
      2;
    return medianFlav;
  }
}

export function flavanoidsModes(arr) {
  const flavanoids = arr.map((obj, index) => obj.Flavanoids);
  const frequency = {};
  flavanoids.forEach((el) => {
    if (frequency[el]) {
      frequency[el]++;
    } else {
      frequency[el] = 1;
    }
  });
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
  return mode;
}

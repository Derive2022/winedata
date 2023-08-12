import React, { useEffect, useState } from "react";
import { gammaMean, gammaMedian, gammaMode } from "../utils/Gamma";
import data from "../data/data.json";

const GammaTable = () => {
  const [mean1, setMean1] = useState(0);
  const [mean2, setMean2] = useState(0);
  const [mean3, setMean3] = useState(0);
  const [median1, setMedian1] = useState(0);
  const [median2, setMedian2] = useState(0);
  const [median3, setMedian3] = useState(0);
  const [mode1, setMode1] = useState(0);
  const [mode2, setMode2] = useState(0);
  const [mode3, setMode3] = useState(0);

  useEffect(() => {
    //------------------: ALCOHOL:1 :---------------------------------------
    //Mean
    const gamma1 = data.filter((obj) => obj.Alcohol === 1);
    const value1 = gammaMean(gamma1).toFixed(3);
    setMean1(value1);
    //Median
    const medValue1 = gammaMedian(gamma1).toFixed(3);
    setMedian1(medValue1);
    //mode
    const modValue1 = gammaMode(gamma1);
    setMode1(modValue1);
    //------------------: ALCOHOL:2 :---------------------------------------
    //Mean
    const gamma2 = data.filter((obj) => obj.Alcohol === 2);
    const value2 = gammaMean(gamma2).toFixed(3);
    setMean2(value2);
    //Median
    const medValue2 = gammaMedian(gamma2).toFixed(3);
    setMedian2(medValue2);
    //mode
    const modValue2 = gammaMode(gamma2);
    setMode2(modValue2);
    //------------------: ALCOHOL:3 :---------------------------------------
    //Mean
    const gamma3 = data.filter((obj) => obj.Alcohol === 3);
    const value3 = gammaMean(gamma3).toFixed(3);
    setMean3(value3);
    //Median
    const medValue3 = gammaMedian(gamma3).toFixed(3);
    setMedian3(medValue3);
    //mode
    const modValue3 = gammaMode(gamma3);
    setMode3(modValue3);
  }, []);

  return (
    <>
      <h2>Gamma Table</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            <td>{mean1}</td>
            <td>{mean2}</td>
            <td>{mean3}</td>
          </tr>
          <tr>
            <td>Gamma Median</td>
            <td>{median1}</td>
            <td>{median2}</td>
            <td>{median3}</td>
          </tr>
          <tr>
            <td>Gamma Mode</td>
            <td>{mode1}</td>
            <td>{mode2}</td>
            <td>{mode3}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GammaTable;

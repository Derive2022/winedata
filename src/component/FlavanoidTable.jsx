import React, { useEffect, useState } from "react";
import {
  flavanoidsMean,
  flavanoidsMedian,
  flavanoidsModes,
} from "../utils/Flavanoids";
import data from "../data/data.json";

const FlavanoidTable = () => {
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
    const flavanoids1 = data.filter((obj) => obj.Alcohol === 1);
    const value1 = flavanoidsMean(flavanoids1).toFixed(3);
    setMean1(value1);
    //Median
    const medValue1 = flavanoidsMedian(flavanoids1).toFixed(3);
    setMedian1(medValue1);
    //mode
    const modValue1 = flavanoidsModes(flavanoids1);
    setMode1(modValue1);
    //-----------------------: ALCOHOL:2 :----------------------------------
    //Mean
    const flavanoids2 = data.filter((obj) => obj.Alcohol === 2);
    const value2 = flavanoidsMean(flavanoids2).toFixed(3);
    setMean2(value2);
    //Median
    const medValue2 = flavanoidsMedian(flavanoids2).toFixed(3);
    setMedian2(medValue2);
    //mode
    const modValue2 = flavanoidsModes(flavanoids2);
    setMode2(modValue2);
    //-----------------------: ALCOHOL:3 :----------------------------------
    //Mean
    const flavanoids3 = data.filter((obj) => obj.Alcohol === 3);
    const value3 = flavanoidsMean(flavanoids3).toFixed(3);
    setMean3(value3);
    //Median
    const medValue3 = flavanoidsMedian(flavanoids3).toFixed(3);
    setMedian3(medValue3);
    //mode
    const modValue3 = flavanoidsModes(flavanoids3).join(",");
    setMode3(modValue3);
  }, []);

  return (
    <>
      <h2>Flavanoids Table</h2>
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
            <td>Flavanoids Mean</td>
            <td>{mean1}</td>
            <td>{mean2}</td>
            <td>{mean3}</td>
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{median1}</td>
            <td>{median2}</td>
            <td>{median3}</td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{mode1}</td>
            <td>{mode2}</td>
            <td>{mode3}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FlavanoidTable;

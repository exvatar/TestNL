import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
function QuestionTwo(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q2?token=pee`)
    .then(res => {
      setData(res.data);
    })
  }, [])
  const calculate = (a) => {
    let totalEast = 0, totalWest = 0, totalSouth = 0, totalCentral = 0, totalNorth = 0;
    let result = a.map((value, idx) => {
      switch (value.location) {
        case `East`:
          totalEast += value.grandTotal;
          break;
        case `West`:
          totalWest += value.grandTotal;
          break;
        case `South`:
          totalSouth += value.grandTotal;
          break;
        case `Central`:
          totalCentral += value.grandTotal;
          break;
        case `North`:
          totalNorth += value.grandTotal;
          break;
        default:
          break;
      }
      if (idx === a.length - 1) {
        return (
          <>
            <p>East : {totalEast}</p>
            <p>West : {totalWest}</p>
            <p>South : {totalSouth}</p>
            <p>Central : {totalCentral}</p>
            <p>North : {totalNorth}</p>
          </>
        )
      }
    })
    return result;
  }
  return (
    <div>
      <h1>Question 2</h1>
      <h4>รวมยอดขายของแต่ละภาค    location</h4>
      {calculate(data )}
    </div>
  )
}

export default QuestionTwo

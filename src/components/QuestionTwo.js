import React from 'react'

function QuestionTwo(props) {
  let b = props.data;
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
      {calculate(b)}
    </div>
  )
}

export default QuestionTwo

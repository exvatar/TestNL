import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function QuestionThree() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q3?token=pee`)
    .then(res => {
      setData(res.data);
    })
  }, [])
  let result = [];
  const mapData = (b) => {
    b = b.filter((value)=> {return value.member !== null})
    b.forEach(data => {
      let checkDub = false
      if (result.length === 0) {
        result.push({ name: data.member.name, grandTotal: data.grandTotal })
      }
      for (let i = 0; i < result.length; i++) {
        if (data.member.name === result[i].name) {
          result[i].grandTotal += data.grandTotal;
          checkDub = true;
        }
      }
      if (checkDub == false) {
        result.push({ name: data.member.name, grandTotal: data.grandTotal })
      }
    });
    let show = `[ `;
    for (let index = 0; index < result.length; index++) {
      show += `${result[index].name} : ${result[index].grandTotal}, `;
    }
    show += `]`;
    return show;
  }
  return (
    <div>
      <h1>Question 3</h1>
      <h4>รวมยอดขายของสมาชิกแต่ละคนโดยชื่อ member.name</h4>
      {mapData(data)}
    </div>
  )
}

export default QuestionThree

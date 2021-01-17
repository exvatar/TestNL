import React from 'react'

function QuestionThree(props) {
  let b = props.data
  let result = [];
  const mapData = (b) => {
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
      {mapData(b)}
    </div>
  )
}

export default QuestionThree

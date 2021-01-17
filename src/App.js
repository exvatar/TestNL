import './App.css';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThr from './components/QuestionThree';
import { useState } from 'react';
import axios from 'axios';

function App() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
      })
  let a = [15, 417, 419, 542, 12, 543, 541, 101, 103, 107, 105, 78, 145, 156, 432, 254, 20, 50, 78, 465, 14, 542, 1235, 64, 97, 45641, 12, 17, 87]
  let b = [
    {
      "_id": "126294b6-d314-4b76-a5ff-d8a3de05bf80",
      "businessDate": "2019-07-28",
      "grandTotal": 31548,
      "location": "North",
      "paymentType": "VISA",

      // ถ้าบิลไหนลูกค้าไม่ได้เป็นสมาชิกค่า member = null
      // member : null,
      "member": {
        "name": "Vance",
        "gainPoints": 21
      }
    },
    {
      "_id": "126294b6-d314-4b76-a5ff-d8a3de05bf80",
      "businessDate": "2019-07-28",
      "grandTotal": 72148,
      "location": "North",
      "paymentType": "VISA",

      // ถ้าบิลไหนลูกค้าไม่ได้เป็นสมาชิกค่า member = null
      // member : null,
      "member": {
        "name": "Vance3",
        "gainPoints": 21
      }
    },
    {
      "_id": "126294b6-d314-4b76-a5ff-d8a3de05bf80",
      "businessDate": "2019-07-28",
      "grandTotal": 31158,
      "location": "West ",
      "paymentType": "VISA",

      // ถ้าบิลไหนลูกค้าไม่ได้เป็นสมาชิกค่า member = null
      // member : null,
      "member": {
        "name": "Vance",
        "gainPoints": 21
      }
    },
    {
      "_id": "126294b6-d314-4b76-a5ff-d8a3de05bf80",
      "businessDate": "2019-07-28",
      "grandTotal": 31148,
      "location": "East",
      "paymentType": "VISA",

      // ถ้าบิลไหนลูกค้าไม่ได้เป็นสมาชิกค่า member = null
      // member : null,
      "member": {
        "name": "Vance1",
        "gainPoints": 21
      }
    },
    {
      "_id": "126294b6-d314-4b76-a5ff-d8a3de05bf80",
      "businessDate": "2019-07-28",
      "grandTotal": 311484,
      "location": "South",
      "paymentType": "VISA",

      // ถ้าบิลไหนลูกค้าไม่ได้เป็นสมาชิกค่า member = null
      // member : null,
      "member": {
        "name": "Vance1",
        "gainPoints": 21
      }
    },
  ]
  const [state, setstate] = useState(<QuestionOne data={a}></QuestionOne>)
  return (
    <div className="App">
      <button onClick={() => setstate(<QuestionOne data={a}></QuestionOne>)}>Question 1</button>
      <button onClick={() => setstate(<QuestionTwo data={b}></QuestionTwo>)}>Question 2</button>
      <button onClick={() => setstate(<QuestionThr data={b}></QuestionThr>)}>Question 3</button>
      {state}
    </div>
  );
}

export default App;

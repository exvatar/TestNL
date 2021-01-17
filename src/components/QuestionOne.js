import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
function QuestionOne(props) {
    const [number, setNumber] = useState([0])
    useEffect(() => {
        axios.get(`https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q1?token=pee`)
            .then(res => {
                setNumber(res.data);
            })
    }, [])
    const sortnumber = (number) => {
        let sortNummber = number.sort(function (a, b) { return a - b })
        let show = `[ `;
        for (let index = 0; index < sortNummber.length; index++) {
            show += `${sortNummber[index]}, `;
        }
        show += ` ]`;
        return (
            <>
                {show}
            </>
        )
    }
    const primeNumber = (a = []) => {
        let filterNumber = a.filter((value) => {
            return value >= 100 && value <= 500;
        })
        let show = "[ ";
        for (let i = 0; i < filterNumber.length; i++) {
            let result = false;
            for (let j = 2; j <= filterNumber[i]; j++) {
                if (filterNumber[i] % j === 0 && j !== filterNumber[i]) {
                    result = true;
                }
            }
            if (result === false) {
                show += `${filterNumber[i]} ,`;
            }
        }
        show += ` ]`;
        return show;
    }
    const threeOrFive = (a = []) => {
        let filterNumber = a.filter((item) => {
            return item % 3 === 0 || item % 5 === 0;
        })
        let show = `[ `;
        for (let index = 0; index < filterNumber.length; index++) {
            show += `${filterNumber[index]}, `;
        }
        show += `]`;
        return show;
    }
    const filterDuplicate = (a = []) => {
        let filterNumber = a.filter((item, idx) => {
            return a.indexOf(item) === idx;
        })
        let show = `[ `;
        for (let index = 0; index < filterNumber.length; index++) {
            show += `${filterNumber[index]}, `;
        }
        show += `]`;
        return show;
    }
    return (
        <>
            <h1>Question 1 </h1>
            <h4>เรียงลำดับ จากน้อยไปมาก</h4>
            {sortnumber(number)}

            <h4>เอาตัวเลขเฉพาะ between 100 - 500 (รวมตัวเลข 100, 500ด้วย)</h4>
            {primeNumber(number)}

            <h4>เอาตัวเลขเฉพาะ หารด้วย แม่3 หรือ แม่5 ลงตัว</h4>
            {threeOrFive(number)}

            <h4>แสดงเฉพาะเลขที่ unique (ไม่ต้องแสดงเลขซ้ำ เช่น 9 สี่ตัว   ให้แสดงแค่ 9ตัวเดียว)</h4>
            {filterDuplicate(number)}
        </>
    )
}

export default QuestionOne

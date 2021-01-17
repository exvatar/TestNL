import './App.css';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThr from './components/QuestionThree';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setstate] = useState(<QuestionOne ></QuestionOne>)
  return (
    <div className="App">
      <button onClick={() => setstate(<QuestionOne></QuestionOne>)}>Question 1</button>
      <button onClick={() => setstate(<QuestionTwo></QuestionTwo>)}>Question 2</button>
      <button onClick={() => setstate(<QuestionThr></QuestionThr>)}>Question 3</button>
      {state}
    </div>
  );
}

export default App;

// import { useState } from 'react'

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight + 1)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text='left' />
//       <Button onClick={handleRightClick}text='right' />
//       {right}
//       <History allClicks={allClicks}/>

//     </div>
//   )
// }
// export default App

import { useState } from "react";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  const handleGoodBtn = () => {
    setAll(allClicks.concat("G"));
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralBtn = () => {
    setAll(allClicks.concat("N"));
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBadBtn = () => {
    setAll(allClicks.concat("B"));
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodBtn} text="good"></Button>

      <Button onClick={handleNeutralBtn} text="neutral"></Button>

      <Button onClick={handleBadBtn} text="bad"></Button>

      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={total}
        average={average}
        positive={positive}
      />

      <History allClicks={allClicks} />
    </div>
  );
};

export default App;

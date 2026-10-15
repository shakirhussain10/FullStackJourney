// import { useState } from "react";

// const Statistics = ({ good, neutral, bad, all, average, positive }) => {
//   if (all === 0) {
//     return (
//       <div>
//         <p>No feedback given</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <table>
//         <tbody>
//           <StatisticsLine text="good" value={good} />
//           <StatisticsLine text="neutral" value={neutral} />
//           <StatisticsLine text="bad" value={bad} />
//           <StatisticsLine text="all" value={all} />
//           <StatisticsLine text="average" value={average} />
//           <StatisticsLine text="positve" value={positive} />
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const StatisticsLine = (props) => {
//   return (
//     <tr>
//       <td>{props.text}</td>
//       <td>{props.value}</td>
//     </tr>
//   );
// };

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }

//   return <div>button press history: {props.allClicks.join(" ")}</div>;
// };
// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const total = good + neutral + bad;
//   const average = total === 0 ? 0 : (good - bad) / total;
//   const positive = total === 0 ? 0 : (good / total) * 100;

//   const handleGoodBtn = () => {
//     setAll(allClicks.concat("G"));
//     const updatedGood = good + 1;
//     setGood(updatedGood);
//   };

//   const handleNeutralBtn = () => {
//     setAll(allClicks.concat("N"));
//     const updatedNeutral = neutral + 1;
//     setNeutral(updatedNeutral);
//   };

//   const handleBadBtn = () => {
//     setAll(allClicks.concat("B"));
//     const updatedBad = bad + 1;
//     setBad(updatedBad);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>

//       <Button onClick={handleGoodBtn} text="good"></Button>

//       <Button onClick={handleNeutralBtn} text="neutral"></Button>

//       <Button onClick={handleBadBtn} text="bad"></Button>

//       <h1>statistics</h1>

//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         all={total}
//         average={average}
//         positive={positive}
//       />

//       <History allClicks={allClicks} />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {


  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];



  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };


  const voteBtn = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <p> {anecdotes[selected]} </p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteBtn}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
    </div>
  );
};

export default App;

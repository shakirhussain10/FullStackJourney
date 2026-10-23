import ReactDOM from 'react-dom/client'
import App from './App'

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App course={course} />
)
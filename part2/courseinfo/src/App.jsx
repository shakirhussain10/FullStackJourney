import Course from './components/Course'

const App = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {course.map(course => (
      <Course key={course.id} course={course} />
      ))}
    </div>
)
}

export default App


import './App.css'
import AddTodo from './components/AddTodo'
import AddTodoProduct from './components/AddTodoProduct'
import Todos from './components/Todos'
// import TodosProduct from './components/TodosProduct'
// import TodosProduct from './components/TodosProduct'


function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />

  <AddTodoProduct/>  
  {/* <TodosProduct/> */}
    </>
  )
}

export default App
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {

  const [todo,setTodo] = useState()

  const dispatch = useDispatch()
  const Todo = useSelector(state => state.Todo) 
  const {todos} = Todo

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(AddTodoAction(todo))
  }  

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }

  return (
    <div className="App">
      
      <header className='App-header'>
      <h2>Todo App List in Redux</h2>

      <form onSubmit={handleSubmit}>
        <input  placeholder='Enter a Todo' 
        style={{
          width:350,
          padding:10,
          borderRadius:20,
          border: "none",
          fontSize:20
        }}
        onChange={(event) => setTodo(event.target.value)}
        />
        <button type='submit'
        style={{
          padding: 12,
          borderRadius: 25,
          marginLeft: 20,
          fontSize:15,
        }}
        >Go</button>
      </form> 

      <ul className='allTodos'> 

      {todos && todos.map((t) => (
        <li key={t.id} className='singleTodo'>
        <span className='todoText'>{t.todo}</span>
        <button
        style={{
          borderRadius:25,
          padding:10,
          border:"1px solid white",
          color: "white",
          backgroundColor: "orangered",
        }}
        onClick={() => removeHandler(t)}
        >Delete</button>
      </li>
      ))}


        {/* <li className='singleTodo'>
          <span className='todoText'>First Todo</span>
          <button
          style={{
            borderRadius:25,
            padding:10,
            border:"1px solid white",
            color: "white",
            backgroundColor: "orangered",
          }}
          >Delete</button>
        </li> */}
      </ul>

      </header>
    </div>
  );
}

export default App;

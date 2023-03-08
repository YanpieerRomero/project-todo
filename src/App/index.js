
//import './App.css';
import React from "react";
import { TodoCounter } from "../Components/TodoCounter/TodoCounter"
import { TodoSearch } from "../Components/TodoSearch/TodoSearch"
import { TodoList } from "../Components/TodoList/TodoList"
import { TodoItem } from "../Components/TodoItem/TodoItem"
import { CreateTodoButtom } from "../Components/CreateTodoButtom/CreateTodoButtom"

const defaulTodos=[
  {text:'Despertarse a las 6:00', completed:true},
  {text:'Clases de Ingles', completed:true},
  {text:'Hacer Ejercicios', completed:false},
  { text: 'Ingresar al Daily', completed: false },
  {text:'Avanzar el curso de React', completed:false},
];

function App() {

  const [todos, setTodos] = React.useState(defaulTodos)
  const [searchValue, setSearchValue] = React.useState('');

  // todo.completed == true or !!todo.competed
  const completTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    
    searchedTodos = todos;
    
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase() 
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    console.log("index", todoIndex)


    const newTodos = [...todos]

    newTodos[todoIndex].completed = true;

    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed = {completTodos}   
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}

      </TodoList>

      <CreateTodoButtom></CreateTodoButtom>
      
    </React.Fragment>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

const getLocalTask = () => {
  let task = localStorage.getItem('tasks');

  if (task) {
    return JSON.parse(localStorage.getItem('tasks'));
  }
  else {
    return [];
  }

}

function App() {
  let [todoList, setTodoList] = useState(getLocalTask())

  let saveToDoList = (event) => {
    let task = event.target.task.value;
    if (!todoList.includes(task)) {
      let finalTask = [...todoList, task]
      setTodoList(finalTask)
      event.target.reset();
    }
    else {
      alert("Task already Exist")
    }
    event.preventDefault();
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todoList))
  }, [todoList]);

  return (
    <div className='container mx-auto mt-10'>
      <h2 className='text-3xl text-center mb-6'>Todo Application</h2>
      <TaskInput todoList={todoList} saveToDoList={saveToDoList} />
      <TaskList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;

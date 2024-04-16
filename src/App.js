import { useEffect, useState } from 'react';
import './App.css';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

const getLocalTask = () => {
  /* HERE WE WORK TO FETCH ITEMS FROM LOCAL STORAGE.
     IF TASK HAVE SOME VALUE THEN TASK ASSIGN TO todoList USING UseState Function AND IF TASK HAVE NOT SONE VALUE THEN PASS BLANK ARRAY TO UseState FUNCTION
  */
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
  /* HERE WE WORK TO GET THE TASK FROM INPUT METHOD AND UPDATE todoList USING setTodoList FUNCTION AND ALSO STORING PREVIOUS VALUE IN ARRAY FORMAT AND UPDATING A NEW VALUE  */
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
  
  /* HERE WE WORK TO STORE THE TASK ON LOCAL STORAGE AND ALSO CONVERT TASK IN STRING FORMAT */
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todoList))
  }, [todoList]);

  return (
    <div className='container mx-auto mt-10'>
      <h2 className='text-3xl text-center mb-6'>Todo Application</h2>

      {/* HERE WE PASS THE PROPS AS A OBJECT IN TASKINPUT AND TASKLIST  */}

      <TaskInput saveToDoList={saveToDoList} />
      <TaskList todoList={todoList} setTodoList={setTodoList}/>

    </div>
  );
}

export default App;

import {React,useState} from 'react'

const TaskList = ({ todoList, setTodoList }) => {
    let list = todoList.map((value, i) => {
        return (
            <TodoItems key={i} value={value} indexId={i} todoList={todoList} setTodoList={setTodoList} />
        )
    })
    return (
        <div class="max-w-md mx-auto">
            <ul class="w-full mt-8 font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {list}
            </ul>
        </div>
    )
}

export default TaskList

function TodoItems({ value, indexId, todoList, setTodoList }) {
    const [buttonText, setButtonText] = useState('Active');
    let  [status,setStatus] = useState(false);

    const handleButton = () => {
        setButtonText('Completed');
    };

    let checkStatus=()=>{
        setStatus(true)
    }

    let deleteTask = () => {
        let finalData = todoList.filter((v, i) => i !== indexId)
        setTodoList(finalData)
    }
    return (
        <li class="w-full cursor-pointer px-4 py-2 border border-gray-200 capitalize rounded-lg mt-4 dark:border-gray-600 bg-gray-50 hover:bg-gray-100">{value}
            <div className='float-end'>
                <button onClick={checkStatus}  type="button" className={`text-white rounded-lg text-sm bg-yellow-700 ms-auto inline-flex justify-center mx-2 px-1 items-center dark:hover:bg-gray-600 dark:hover:text-white ${(status) ? 'completeTodo':''}`}>
                    <span onClick={handleButton}>{buttonText}</span>
                </button>
                <button onClick={deleteTask} type="button" class="text-white bg-red-800 hover:bg-red-900 rounded-lg text-sm w-6 h-6 mx-2 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </li>
    )
}
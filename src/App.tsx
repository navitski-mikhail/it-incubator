import React, {useState} from 'react';
import './App.css';
import {taskType} from "./index";
import Todolist from "./Todolist";


function App() {
    const [dataLearnTasks, setDataLearnTasks] = useState<Array<taskType>>(
        [
            {id: 1, taskTitle: 'sport', isDone: false},
            {id: 2, taskTitle: 'chess', isDone: true},
            {id: 3, taskTitle: 'healthy', isDone: true},
        ])
    const removeTaskHandler = (id: number) => {
        const filteredDataLearnTasks = dataLearnTasks.filter(task => {
            return task.id !== id
        })
        setDataLearnTasks(filteredDataLearnTasks)
    }
    return (
        <div className="App">
            <Todolist headerTitle="What to learn"
                      data={dataLearnTasks}
                      removeTask={removeTaskHandler}/>
        </div>
    );
}

export default App;

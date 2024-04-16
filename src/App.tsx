import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {v1} from "uuid";

export type filterType = 'All' | 'Active' | 'Completed'

export type taskType = {
    id: string,
    taskTitle: string,
    isDone: boolean
}

function
App() {
    // tasks state
    const [dataLearnTasks, setDataLearnTasks] = useState<Array<taskType>>(
        [
            {id: v1(), taskTitle: 'sport', isDone: false},
            {id: v1(), taskTitle: 'chess', isDone: true},
            {id: v1(), taskTitle: 'healthy', isDone: true},
        ])

    //functions

    const addTaskHandler = (name: string) => {
        if (name) {
            const newTask = {id: v1(), taskTitle: name, isDone: false}
            const newTasks = [newTask, ...dataLearnTasks]
            setDataLearnTasks(newTasks)
        }
    }
    const removeTaskHandler = (id: string) => {
        const filteredDataLearnTasks = dataLearnTasks.filter(task => {
            return task.id !== id
        })
        setDataLearnTasks(filteredDataLearnTasks)
    }

    // filter
    const [filter, setFilter] = useState<filterType>('All')

    const changeFilter = (title: filterType) => {
        setFilter(title)
    }

    let filteredTasks = dataLearnTasks

    if (filter === 'Active') {
        filteredTasks = dataLearnTasks.filter(task => !task.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks = dataLearnTasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <Todolist headerTitle="What to learn"
                      data={filteredTasks}
                      removeTask={removeTaskHandler}
                      changeFilter={changeFilter}
                      addTask={addTaskHandler}
            />
        </div>
    );
}

export default App;

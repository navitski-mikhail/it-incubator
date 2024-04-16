import React, {useRef} from 'react';
import Button from "./Button";
import {filterType, taskType} from "./App";


type propsType = {
    headerTitle: string
    data: taskType[]
    removeTask: (id: string) => void
    changeFilter: (title: filterType) => void
    addTask: (name: string) => void
}

const Todolist = ({headerTitle, data, addTask, removeTask, changeFilter}: propsType) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <h3>{headerTitle}</h3>
            <div>
                <input ref={inputRef}
                       onKeyUp={event => {
                           if (event.key === 'Enter') {
                               if (inputRef.current) {
                                   addTask(inputRef.current.value)
                                   inputRef.current.value = ''
                               }
                           }
                       }}/>

                <Button title={'+'} onClick={() => {
                    if (inputRef.current) {
                        addTask(inputRef.current.value)
                        inputRef.current.value = ''
                    }
                }}/>
            </div>
            <ul>
                {data.length === 0 ? <li>Don't have any tasks</li> :
                    data.map(task => <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.taskTitle}</span>
                        <Button title={"REMOVE"} onClick={() => removeTask(task.id)}></Button>
                    </li>)
                }
            </ul>
            <div>
                <Button title={'All'} onClick={() => changeFilter('All')}/>
                <Button title={'Active'} onClick={() => changeFilter('Active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('Completed')}/>
            </div>
        </div>
    );
};

export default Todolist;
import React from 'react';
import Button from "./Button";
import {taskType} from "./index";


type propsType = {
    headerTitle: string
    data: taskType[]
    removeTask: (id: number) => void
}

const Todolist = ({headerTitle, data, removeTask}: propsType) => {
    return (
        <div>
            <h3>{headerTitle}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
                {/*<button>+</button>*/}
            </div>
            <ul>
                {data.length === 0 ? <li>Don't have any tasks</li> :
                    data.map(task => <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.taskTitle}</span>
                        <button onClick={() => removeTask(task.id)}>REMOVE</button>
                    </li>)
                }
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};

export default Todolist;
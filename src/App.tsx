import React from 'react';
import './App.css';
import {taskType} from "./index";


type propsType = {
    headerTitle: string
    data: taskType[]
}

function App({headerTitle, data}: propsType) {
    return (
        <div className="App">
            <div>
                <h3>{headerTitle}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {data.length === 0 ? <li>Don't have any tasks</li> :
                        data.map(task => <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/> <span>{task.taskTitle}</span>
                        </li>)
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default App;

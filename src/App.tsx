import React from 'react';
import './App.css';
import {taskType} from "./index";


type propsType = {
    headerTitle: string
    data: taskType[]
}

function App({headerTitle, data} : propsType) {
    console.log(data[0].taskTitle)
    return (
        <div className="App">
            <div>
                <h3>{headerTitle}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={data[0].isDone}/> <span>{data[0].taskTitle}</span></li>
                    <li><input type="checkbox" checked={data[1].isDone}/> <span>{data[1].taskTitle}</span></li>
                    <li><input type="checkbox" checked={data[2].isDone}/> <span>{data[2].taskTitle}</span></li>
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

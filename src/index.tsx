import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export type taskType = {
    id: number,
    taskTitle: string,
    isDone: boolean
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const dataLearnTasks: Array<taskType> = [
    {id: 1, taskTitle: 'sport', isDone: false},
    {id: 2, taskTitle: 'chess', isDone: true},
    {id: 3, taskTitle: 'healthy', isDone: true},
]

const dataDoTasks: Array<taskType> = [
    {id: 1, taskTitle: 'eat', isDone: true},
    {id: 2, taskTitle: 'sport exercise', isDone: false},
    {id: 3, taskTitle: 'brush', isDone: false},
]

const dataWantTasks: Array<taskType> = [
    {id: 1, taskTitle: 'watch', isDone: true},
    {id: 2, taskTitle: 'iphone', isDone: false},
    {id: 2, taskTitle: 'pencil', isDone: false}
]

root.render(
    <React.StrictMode>
        <>
            <App headerTitle="What to learn" data={dataLearnTasks}/>
            <App headerTitle="What to do" data={dataDoTasks}/>
            <App headerTitle="What to want" data={dataWantTasks}/>
        </>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


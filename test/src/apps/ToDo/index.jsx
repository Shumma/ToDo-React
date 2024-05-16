import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDo from './ToDo.jsx'
import Task from '../task/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Task />
    </React.StrictMode>,
)

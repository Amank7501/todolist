import React from 'react'

export const Task = (props) => {

    return (<div className='todo-list'  style={{backgroundColor:props.completed?"#5fec5f":"white"}}>
        <div className='task-name'>
            {props.taskName}
        </div>
        <button className='complete-btn'  onClick={() => props.completeTask(props.id)}>Complete</button>
        <button className='delete-btn' onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
    );
}


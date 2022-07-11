import {useState} from 'react';

const Task = ({task, removeTask}) => {
    const [isComplete, setIsComplete] = useState(task.isComplete);

    return (
        <div className="task-item">
            <p style={{ textDecoration: isComplete && "line-through" }}>{ task.content }</p>
            <input type="checkbox" onChange={() => setIsComplete(!isComplete)} checked={ isComplete } />
            <button onClick={ removeTask } >Delete</button>
        </div>
    )
}

export default Task
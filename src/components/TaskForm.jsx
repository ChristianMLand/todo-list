import {useState} from 'react';

const TaskForm = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTask({ content: task, isComplete: false });
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={ task } onChange={ e => setTask(e.target.value) } />
            <button>Add</button>
        </form>
    )
}

export default TaskForm
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import {useState} from "react";
import AddTask from "./Components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 2,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 3,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 4,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 5,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 6,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 7,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 8,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 9,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 10,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 11,
            text: 'Appointment',
            day: 'Feb 6th',
            reminder: true,
        },


    ])
    const [showAddTask, setshowAddTask] = useState(false)
    //delete task
    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }
    //Toggle reminder
    const toggleReminder = (id) => {
        console.log(id)
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))


    }

    const addTask = (task) => {
        console.log('task', task)
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])

    }

    return (
        <div className='container'>
            <Header title="Task Tracker" onAdd={()=>setshowAddTask(!showAddTask)} showAddTask={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ?
                <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : ('No task to show')}

        </div>
    );
}

export default App;

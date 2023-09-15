import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import {useState} from "react";
import task from "./Components/Task";

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
    return (
        <div className='container'>
            <Header title="Task Tracker"/>
            {tasks.length > 0 ?
                <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : ('No task to show')}

        </div>
    );
}

export default App;

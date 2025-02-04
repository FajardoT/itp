import { React, useState } from "react";
import { useEffect } from "react";
import { FaPlus , FaMinus , FaPen} from 'react-icons/fa';

import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";

export default function ManageList() {
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
    
    const [prevTask, setPrevTask] = useState(null);

    const handleToggleModal = () => {
        setAddTaskModalOpen(!addTaskModalOpen);
    };

    const handleRemoveTask = (id) => {
        setTasks((tasks) => tasks.filter(task => task.id !== id));
    };

    // sample tasks data
    const[tasks,setTasks] =  useState([{ id: 1, title: "Finish", tags: ["work", "urgent"], dueDate: "2024-10-15" },
        { id: 2, title: "Morning workout", tags: ["fitness"], dueDate: "2024-10-14" },
        { id: 3, title: "Read a book", tags: ["leisure"], dueDate: "2024-10-16" },
        { id: 4, title: "Read a book", tags: ["leisure"], dueDate: "2024-10-16" },
        { id: 5, title: "Read a book", tags: ["leisure"], dueDate: "2024-10-16" },
        { id: 6, title: "Read a book", tags: ["leisure"], dueDate: "2024-10-16" },
        { id: 7, title: "Read a book", tags: ["leisure"], dueDate: "2024-10-16" }]);

    return (
        <div className="w-full min-w-[300px] mx-auto mb-8 p-4">
            
            {/* show modal when add item clicked */}
            {addTaskModalOpen && <AddTaskModal isOpen={addTaskModalOpen} onClose={handleToggleModal}/> }
            

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-medium">Upcoming Tasks</h2>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaPlus className="h-5 w-5" />
                    <span className="ml-2" onClick={handleToggleModal}>Add Task</span>
                </button>
            </div>
            <div className="max-h-[675px] overflow-y-auto bg-gray-100 p-4 rounded-lg border border-gray-300">
                {tasks.map(task => (
                <TaskItem key={task.id} task={task} handleRemoveTask={handleRemoveTask} />
                ))}
            </div>
        </div>
    );
};

export function TaskItem({task, handleRemoveTask}) {
    const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);

     const handleEditToggleModal = () => {
        setEditTaskModalOpen(!editTaskModalOpen);
    };

    const handleEditOpenModal = (task) => {
        setEditTaskModalOpen(!editTaskModalOpen);
        console.log(task)
    };
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
        {editTaskModalOpen && <EditTaskModal isOpen={editTaskModalOpen} onClose={handleEditToggleModal} task={task}/> }
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <div className="text-lg font-semibold">{task.title}</div>
                <div className="flex flex-wrap mt-1">
                    {task.tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`text-sm mr-2 mb-1 px-2 py-1 rounded-full text-white ${
                        tag === 'work' ? 'bg-blue-500' :
                        tag === 'fitness' ? 'bg-green-500' :
                        tag === 'sleep' ? 'bg-purple-500' :
                        'bg-gray-400' // unknown tags
                        }`}
                    >
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
            
            
            <div className="text-sm text-gray-600 flex-col space-y-7">
                <div className="text-right">
                    {task.dueDate}
                </div>
                <div className="flex space-x-3 justify-end">
                    <button className="flex items-center text-blue-600 hover:text-blue-800" onClick={() => [handleEditOpenModal(task), handleEditToggleModal]}>
                        <FaPen className="h-5 w-5" />
                        <span className="ml-2" >Edit Task</span>
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800" onClick={()=>handleRemoveTask(task.id)}>
                        <FaMinus className="h-5 w-5" />
                        <span className="ml-2" >Remove Task</span>
                    </button>
                    
                </div>
            </div>
            

        </div>
        
    </div>
  );
};

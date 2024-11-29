import ManageList from '../components/ManageTasks';
import AddTaskModal from '../components/AddTaskModal';
import EditTaskModal from '../components/EditTaskModal';

export default function ManageTasks() {
    return (
        <div className="flex flex-col w-full">
            <h1 className="mx-8 mt-4 text-4xl font-medium text-blue-600">Manage Tasks</h1>
            <div className="flex-grow flex flex-row flex-wrap p-4"> 
                <ManageList />
            </div>
        </div>
    );
}
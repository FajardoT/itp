import TaskList from '../components/TaskList';
import { ChartAnalysis } from '../components/Chart';
import AddTaskModal from '../components/AddTaskModal';

export default function Dashboard() {
    return (
        <div className="flex flex-col w-full">
            <h1 className="mx-8 mt-4 text-4xl font-medium text-blue-600">Dashboard</h1>
            <div className="flex-grow flex flex-row flex-wrap p-4"> 
                <ChartAnalysis tasks={null}/>
                <TaskList /> 
            </div>
      </div>
    );
}
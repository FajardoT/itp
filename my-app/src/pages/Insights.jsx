import { FullChartAnalysis } from '../components/Chart';

export default function Insights() {
    return (
        <div className="flex flex-col w-full">
            <h1 className="mx-8 mt-4 text-4xl font-medium text-blue-600">Insights</h1>
            <div className="flex-grow flex flex-row flex-wrap p-4"> 
            <FullChartAnalysis tasks={null}/>
            </div>
        </div>
    );
}
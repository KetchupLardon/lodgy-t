import React, {useState, useEffect, createContext} from "react";
import { ProgressBar } from "./progressbar/ProgressBar";
import { AccordionContainer } from "./accordion/AccordionContainer";
import { TaskData } from "../api/TaskData";
import { ITasks } from "../interfaces/ITasks";
import '../css/accordion.css';


export const ProgressBarData: React.Context<any> = createContext(null);

export const Container = () => {
    const [datas, setDatas] = useState<ITasks[]>([]);
    const [allTasksCheckedValues, setAllTasksCheckedValues] = useState<number>(0)
    const [allValuesTasks, setAllValuesTasks] = useState<number>(0)

    useEffect( () => {   
        const taskData = new TaskData();

        taskData.fetchData().then(result => {
            setDatas(result)
            let taskCounter: number = 0;
            let activeTaskCounter: number = 0;
            result.forEach((data: ITasks) => {
                data.tasks.forEach(task => {
                    taskCounter = taskCounter + task.value;
                    if(task.checked)activeTaskCounter+= task.value;
                })
            })
            //Add all tasks values to set the percentage of the progressbar to its maximum value
            setAllValuesTasks(taskCounter);
            //Add the values of checked tasks returned by the API to initialise the progress of the ProgressBar
            setAllTasksCheckedValues(activeTaskCounter);
        });
    }, []);
    
    return (
        <ProgressBarData.Provider value={{allValuesTasks, allTasksCheckedValues, setAllTasksCheckedValues}} >
            <div  className="container">
                <div className="high_container">
                    <h1>Lodgify Grouped Tasks</h1>
                    <ProgressBar />
                </div>
                <div className="bottom_container">
                    <div className="container">
                        {datas?.length !== 0 && datas?.map( (data, i) => {
                            return <AccordionContainer key={"data_" + i} name={data.name} tasks={data.tasks} tasksGroupId={i} tasksAmount={data.tasks.length} />
                        })}
                    </div>
                </div>
            </div>
        </ProgressBarData.Provider>
    )
}
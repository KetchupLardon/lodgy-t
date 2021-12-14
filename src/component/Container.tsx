import React, {useState, useEffect, createContext} from "react";
import { ProgressBar } from "./progressbar/ProgressBar";
import { AccordionContainer } from "./accordion/AccordionContainer";
import { TaskData } from "../api/TaskData";
import { ITasks } from "../interfaces/ITasks";
import '../css/accordion.css';


export const ProgressBarData: React.Context<any> = createContext(null);

export const Container = () => {
    const [datas, setDatas] = useState<ITasks[]>([]);
    const [allTasksChecked, setAllTasksChecked] = useState<number>(0)
    const [allTasksAmount, setAllTaskAmount] = useState<number>(0)

    useEffect( () => {   
        const taskData = new TaskData();

        taskData.fetchData().then(result => {
            setDatas(result)
            let taskCounter: number = 0;
            let activeTaskCounter: number = 0;
            result.forEach((data: ITasks) => {
                taskCounter = taskCounter + data.tasks.length;
                data.tasks.forEach(task => {
                    if(task.checked)activeTaskCounter++;
                })
            })
            //Count the number of task to set the percentage of the progressbar to its maximum value
            setAllTaskAmount(taskCounter);
            //Count the number of checked task returned by the API to initialise the ProgressBar
            setAllTasksChecked(activeTaskCounter);
        });
    }, []);
    
    return (
        <ProgressBarData.Provider value={{allTasksAmount, allTasksChecked, setAllTasksChecked}} >
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
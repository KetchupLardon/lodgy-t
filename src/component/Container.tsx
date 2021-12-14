import React, {useState, useEffect, createContext} from "react";
import { ProgressBar } from "./progressbar/ProgressBar";
import { AccordionContainer } from "./accordion/AccordionContainer";
import { TaskData } from "../api/TaskData";
import { ITasks } from "../interfaces/ITasks";


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
            result.map((data: ITasks) => {
                taskCounter = taskCounter + data.tasks.length;
                data.tasks.map(task => {
                    if(task.checked)activeTaskCounter++;
                })
            })
            setAllTaskAmount(taskCounter);
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
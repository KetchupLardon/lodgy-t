import React, {useContext, useState, useEffect} from "react";
import '../../css/checkbox.css';
import { ProgressBarData } from "../Container";
import { ITaskDetails } from "../../interfaces/ITasks";

interface IAccordionItemProps { 
    task: ITaskDetails;
    id: number;
    tasksGroupId: number;
}

export const AccordionItem = ({task, id, tasksGroupId}: IAccordionItemProps) => {
    
    /*
    I took "description" and "name" because some of the tasks doesn't have description but name.
    I don't know if it's a problem from the API or if it was done in purpose for the exercise.
    */
    const {checked, description, name} = task;
    const { allTasksChecked, setAllTasksChecked } = useContext(ProgressBarData);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked])

    const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setAllTasksChecked(allTasksChecked + 1);
            setIsChecked(true);
        } else {
            setAllTasksChecked(allTasksChecked - 1);
            setIsChecked(false);
        }
    }

    return(
        <div className="accordion_container_item">
            <label className="checkbox_green" htmlFor={tasksGroupId + "_description_" + id} >
                <input type="checkbox" id={tasksGroupId + "_description_" + id} checked={isChecked} onChange={(e) => onChecked(e)} />
                <span>{description ?? name}</span>
            </label>
        </div>
    );
}
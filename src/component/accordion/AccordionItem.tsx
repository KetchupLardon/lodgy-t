import React, {useContext, useState, useEffect} from "react";
import { ProgressBarData } from "../Container";
import { IAccordionItemProps } from "../../interfaces/ITasks";

/*
I took "description" and "name" because some of the tasks doesn't have description but name.
I don't know if it's a problem from the API or if it was done in purpose for the exercise.
*/
export const AccordionItem = ({checked, description, name, value, id, tasksGroupId}: IAccordionItemProps) => {
    
    const { allTasksChecked, setAllTasksChecked } = useContext(ProgressBarData);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(checked);
    }, [])

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
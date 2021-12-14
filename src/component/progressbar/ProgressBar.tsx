import React, {useState, useEffect, useContext} from "react";
import { Filler } from "./Filler";
import { ProgressBarData } from "../Container";

export const ProgressBar = () => {
    const [percentage, setPercentage] = useState<number>(0);
    
    const { allTasksChecked, allTasksAmount } = useContext(ProgressBarData);

    useEffect(() => {
        setPercentage(Math.round((allTasksChecked / allTasksAmount)*100));
    }, [allTasksChecked, allTasksAmount])

    return(
        <div className="progress_bar">
            <Filler percentage={percentage} />
        </div>
    )
}
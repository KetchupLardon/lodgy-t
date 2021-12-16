import React, {useState, useEffect, useContext} from "react";
import { Filler } from "./Filler";
import { ProgressBarData } from "../Container";

export const ProgressBar = () => {
    const [percentage, setPercentage] = useState<number>(0);
    
    const { allTasksCheckedValues, allValuesTasks } = useContext(ProgressBarData);

    useEffect(() => {
        setPercentage(Math.round((allTasksCheckedValues / allValuesTasks)*100));
    }, [allTasksCheckedValues, allValuesTasks])

    return(
        <div className="progress_bar">
            <Filler percentage={percentage} />
        </div>
    )
}
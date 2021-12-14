import React from "react";

export const Filler = ({percentage}: {percentage: number}) => {
    return (
        <div className="progress_bar_filler" style={{ width: `${percentage}%` }}>
            {percentage}%
        </div>
    );
}
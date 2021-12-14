import React, {useState, useRef} from "react";
import { AccordionItem } from "./AccordionItem";
import { NoteBookSVG } from "../../assets/icons/NoteBookSVG";
// import { NoteBookCheckedSVG } from "../../assets/icons/NoteBookCheckedSVG";
import { ArrowDownSVG } from "../../assets/icons/ArrowDownSVG";
import { ITasks } from "../../interfaces/ITasks";

export const AccordionContainer = ({name, tasks, tasksGroupId, tasksAmount}: ITasks) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentHeight = useRef<any>();
    
    return (
        <div className="border_bottom_grey">
            <div className="accordion_container" style={{cursor: "pointer"}} onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <NoteBookSVG width="3%" />
                    <p>{name}</p>
                </div>
                <div>
                    <p>Show</p>
                    <ArrowDownSVG width="3%" fill="#999999" style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.4s ease"
                        }} />
                </div>
            </div>
            <div ref={currentHeight} style={{
                overflow: "hidden",
                maxHeight: isOpen ? `${currentHeight.current?.scrollHeight}px` : 0,
                opacity: isOpen ? 1 : 0,
                transform: `translate3d(0,${isOpen ? 0 : 10}px,0)`,
                transition: "all 0.4s ease",
                }}>
                {
                    tasks?.map((task, i) => {
                        return <AccordionItem key={"data_item" + i} task={task} tasksGroupId={tasksGroupId} id={i} />
                    })
                }
            </div>
        </div>
    )
}
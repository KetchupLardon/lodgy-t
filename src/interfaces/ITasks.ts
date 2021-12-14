export interface ITaskDetails {
    checked: boolean;
    value: number;
    description?: string;
    name?: string;
}

export interface ITasks {
    tasksAmount: number;
    name: string;
    tasks: ITaskDetails[];
    tasksGroupId: number;
}

export interface IAccordionItemProps {
    
    checked: boolean;
    value: number;
    description?: string;
    name?: string;
    id: number;
    tasksGroupId: number;
}
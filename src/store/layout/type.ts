export interface Tab {
    label:string,
    path:string,
    isHide?:boolean,
    isClose?:boolean,
    icon?:string,
    children?:Tab[]
}

export interface Menu {
    label:string,
    icon?:string,
    isOpen?:boolean,
    path:string,
    children?:Menu[]
}
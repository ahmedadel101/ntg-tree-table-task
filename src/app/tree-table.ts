export interface TreeTable {
  label:string;
  data:{
    id:number;
    name:string;
    managerID:number
    children?:[Children]
  }
}
export interface Children {
  label?:string;
  data?:{
    id?:number;
    name?:string;
    managerID?:number;
    children?:[Children]
  }
}



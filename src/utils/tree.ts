import {BasicKeyValue} from "../env";

export const initLevel = <T>(list: T[], index = 0, name = 'level', child = 'child') => {
  index++
  list.forEach((item: BasicKeyValue) => {
    item[name] = index
    item[child] && item[child].length > 0 && initLevel(item[child], index)
  })
}
export const treeToList = <T>(list: T[],add:T[],child='child')=>{
  list&&list.forEach((item:BasicKeyValue)=>{
    item && add.push(item as T)
    treeToList(item[child],add)
  })
}
export const findParentId = <T>(list: T[],add:any[],id:string,parent='parentId',key='menuId') => {
  const item = list.find((item:BasicKeyValue)=>item[key]==id) as BasicKeyValue
  const parentId = item&&item[parent]
  if (parentId){
    const index = add.findIndex(item=>item === id)
    index === -1 && add.push(parentId)
    findParentId(list,add,parentId)
  }
}
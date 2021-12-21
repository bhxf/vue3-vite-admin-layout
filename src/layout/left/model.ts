export interface MenuModel {
  menuId: number | string,
  parentId?: number | string,
  label: string,
  icon?: string,
  path?: string,
  child?: MenuModel[],
  level?: number,
}


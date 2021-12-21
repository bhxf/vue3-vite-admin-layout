<template>
  <div class="text-gray-200 ">
    <basic-tree-menu-item :menus="menus"/>
  </div>
</template>

<script setup lang="ts">

import BasicTreeMenuItem from "./BasicTreeMenuItem.vue";
import {MenuModel} from "../../../layout/left/model";
import {computed, provide, ref, unref} from "vue";
import {menuIdKey, activeMenuIdKey} from "../symbols";
import {findParentId, treeToList} from "../../../utils/tree";
import {cloneDeep} from "lodash-es";

const props = withDefaults(defineProps<{
  menus: MenuModel[],
  opens: string[],
  isMini: boolean,
  key: string,
}>(), {
  isMini: false,
  key: 'id'
})

const emits = defineEmits(['selectMenu'])

const offset = ref(10)
const selectMenuId = ref()
const openMenus = ref(props.opens || [])
const menuList: any[] = []
const miniLeft = computed(()=> props.isMini)

treeToList(cloneDeep(props.menus), menuList)

const addMenu = (menu: MenuModel, isFindParent = true) => {
  addMenuId(menu.menuId as string, isFindParent)
  emits('selectMenu', menu)
}
const addMenuId = (menuId: string, isFindParent = true) => {
  if (openMenus) {
    if (!isFindParent) {
      openMenus.value = []
      openMenus.value.push(menuId)
    } else {
      const index = openMenus.value.findIndex(item => item == menuId)
      if (index === -1) {
        openMenus.value = []
        openMenus.value.push(menuId)

        menuList && findParentId(unref(menuList), unref(openMenus), menuId)
      } else {
        openMenus.value.splice(index, 1)
      }
    }
  }
}
const computedOffset = (level: number) => {
  return (level * unref(offset)) + 'px'
}

provide('addMenu', addMenu)
provide('addMenuId', addMenuId)
provide('computedOffset', computedOffset)
provide('menuList', menuList)
provide('isMini', miniLeft)
provide(menuIdKey, openMenus)
provide(activeMenuIdKey, selectMenuId)

</script>

<style scoped lang="less">
</style>

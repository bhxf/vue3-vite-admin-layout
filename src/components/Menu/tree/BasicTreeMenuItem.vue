<template>
  <div v-for="(menu,index) in menus" :key="index">
    <div v-if="isMini" class="px-2 py-1">
      <div :class="['icon-title',openMenus.includes(menu.menuId)?'icon-title-active':'']" @click="addMenu(menu,false)">
        <label class="text-xs pb-1">{{ menu.label }}</label>
      </div>
    </div>
    <div v-else>
      <div v-if="menu.child && menu.child.length>0">
        <div :class="['g-hover']" :style="{paddingLeft: computedOffset(menu.level)}" @click="addMenuId(menu.menuId)">
          <div class="gap-x-2 py-1 pr-4 items-center flex">
            <div v-else class="rounded-full h-2 w-2 mx-3"/>
            <label class="flex-1">{{ menu.label }}</label>
          </div>
        </div>
        <div class="bg-gray-800" v-if="openMenus.includes(menu.menuId)">
          <basic-tree-menu-item :menus="menu.child"/>
        </div>
      </div>
      <div
        v-else
        @click="addMenuId(menu.menuId)"
        :class="['gap-x-2 g-hover py-1 items-center flex',openMenus.includes(menu.menuId)?'icon-title-active':'']"
        :style="{paddingLeft: computedOffset(menu.level)}"
      >
        <div v-else class="rounded-full h-2 w-2 mx-3"/>
        <label>{{ menu.label }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MenuModel} from "../../../layout/left/model";
import {inject, Ref} from "vue";
import {menuIdKey} from "../symbols";

const props = defineProps<{
  menus: MenuModel[],
}>()

const openMenus = inject(menuIdKey)
const isMini = inject<Ref<boolean>>('isMini')
const addMenuId = inject('addMenuId')
const addMenu = inject('addMenu')
const computedOffset = inject('computedOffset')

</script>

<style scoped lang="less">
.icon-title{
  @apply flex flex-col items-center justify-center py-1 rounded-md hover:bg-black hover:bg-opacity-10 hover:text-white;
}
.icon-title-active{
  @apply bg-black bg-opacity-20 text-white;
}
</style>

<template>
  <div v-for="(menu,index) in menus" :key="index">
    <div>
      <div v-if="menu.child && menu.child.length>0">
        <div :style="{paddingLeft: computedOffset(menu.level)}">
          <div class="text-gray-700 font-medium gap-x-2 py-2 pr-4 items-center flex">
            <label class="flex-1">{{ menu.label }}</label>
          </div>
        </div>
        <div class="bg-opacity-10">
          <drawer-menu-item :menus="menu.child"/>
        </div>
      </div>
      <div
        v-else
        @click="handleMenu(menu.menuId)"
        :class="['gap-x-2 text-gray-500 g-hover py-2 items-center flex',selectMenuId == menu.menuId?'active':'']"
        :style="{paddingLeft: computedOffset(menu.level)}"
      >
        <label>{{ menu.label }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MenuModel} from "../model";
import {inject, Ref, ref, unref} from "vue";

const props = withDefaults(defineProps<{menus:MenuModel[]}>(),{})
const offset = ref(10)
const selectMenuId = inject<Ref<string>>('selectMenuId')
const computedOffset = (level:number)=>{
  return (level*unref(offset))+'px'
}
const handleMenu = (menuId:string) => {
  selectMenuId && (selectMenuId.value = menuId)
}
</script>

<style scoped lang="less">
.active{
  @apply bg-black text-black font-medium bg-opacity-10;
}
</style>

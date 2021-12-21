<template>
  <div v-if="isLeftDrawer && selectMenu?.child && selectMenu?.child.length>0" class="left-drawer-layout">
    <div class="flex items-center pl-3 p-1">
      <label>{{selectMenu?.label}}</label>
    </div>
    <drawer-menu :menus="selectMenu?.child"/>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import menuStore from "../../store/layout/menuStore";
import DrawerMenu from "./menu/DrawerMenu.vue";

const leftWidth = inject('leftWidth')
const topHeight = inject('topHeight')
const leftDrawerWidth = inject('leftDrawerWidth')
const leftDrawerZIndex = inject('leftDrawerZIndex')
const isLeftDrawer = inject('isLeftDrawer')

const width = computed(() => unref(leftDrawerWidth) + 'px')
const left = computed(() => unref(leftWidth) + 'px')
const top = computed(() => unref(topHeight) + 'px')
const selectMenu = computed(() => menuStore.getSelectMenu)
</script>

<style scoped lang="less">
.left-drawer-layout {
  position: absolute;
  margin-left: v-bind(left);
  width: v-bind(width);
  height: 100vh;
  z-index: v-bind(leftDrawerZIndex);
  @apply bg-gray-50 shadow font-medium text-gray-700;
}
</style>

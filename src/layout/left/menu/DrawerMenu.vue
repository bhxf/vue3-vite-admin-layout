<template>
  <div class="text-sm">
    <drawer-menu-item :menus="menus" />
  </div>
</template>

<script setup lang="ts">
import {MenuModel} from "../model";
import DrawerMenuItem from "./DrawerMenuItem.vue";
import {provide, ref} from "vue";

const props = withDefaults(defineProps<{menus:MenuModel[],title:string}>(),{})
const selectMenuId = ref()
provide('selectMenuId',selectMenuId)
</script>

<style scoped lang="less">
</style>

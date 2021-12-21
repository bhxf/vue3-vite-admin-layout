<template>
  <div class="tabs-layout">
    <div v-for="tab in tabs" class="tab">
      <label>{{tab.label}}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import tabStore from "../../../store/layout/tabStore";

const topHeight = inject<number>('topHeight')||0
const leftWidth = inject<number>('leftWidth')||0
const tabsHeight = inject<number>('tabsHeight')||0
const tabsZIndex = inject<number>('tabsZIndex')||0
const leftDrawerWidth = inject<number>('leftDrawerWidth')||0

const top = computed(()=>{
  return unref(topHeight)+'px'
})
const left = computed(()=>{
  return (unref(leftWidth)+unref(leftDrawerWidth))+'px'
})
const height = computed(()=>{
  return unref(tabsHeight)+'px'
})
const tabs = computed(()=>tabStore.getTabs)

</script>

<style scoped lang="less">
.tabs-layout{
  margin-top: v-bind(top);
  padding-left: v-bind(left);
  position: absolute;
  height: v-bind(height);
  z-index: v-bind(tabsZIndex);
  @apply text-sm text-gray-700 bg-gray-50 w-full overflow-hidden flex-nowrap items-center flex;

  .tab{
    @apply flex flex-shrink-0 items-center hover:bg-black hover:bg-opacity-5 p-2;
  }
}
</style>

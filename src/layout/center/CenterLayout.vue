<template>
  <div class="center-layout">
    <div class="h-full p-3">
      <div class="h-full bg-white shadow rounded overflow-auto flex flex-wrap justify-between gap-4 p-3">
        <div v-for="i in 100" class="bg-indigo-600 bg-opacity-80 shadow-lg rounded-md w-28 h-28"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";

const topHeight = inject<number>('topHeight')||0
const tabsHeight = inject<number>('tabsHeight')||0
const leftWidth = inject<number>('leftWidth')||0
const leftDrawerWidth = inject<number>('leftDrawerWidth')||0

const top = computed(()=>{
  return (unref(topHeight)+unref(tabsHeight))+'px'
})
const left = computed(()=>{
  return unref(leftWidth)+unref(leftDrawerWidth)+'px'
})

</script>

<style scoped lang="less">
.center-layout{
  position: absolute;
  padding-top: v-bind(top);
  padding-left: v-bind(left);
  width: 100%;
  height: 100vh;
  z-index: 0;
  @apply bg-gray-200;
}
</style>

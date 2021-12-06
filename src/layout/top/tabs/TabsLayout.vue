<template>
  <div class="tabs-layout"></div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";

const topHeight = inject('topHeight')
const leftWidth = inject('leftWidth')
const tabsHeight = inject('tabsHeight')
const tabsZIndex = inject('tabsZIndex')

const top = computed(()=>{
  return unref(topHeight)+'px'
})
const left = computed(()=>{
  return unref(leftWidth)+'px'
})
const height = computed(()=>{
  return unref(tabsHeight)+'px'
})

</script>

<style scoped lang="less">
.tabs-layout{
  margin-top: v-bind(top);
  padding-left: v-bind(left);
  position: absolute;
  height: v-bind(height);
  z-index: v-bind(tabsZIndex);
  @apply bg-gray-50 w-full;
}
</style>

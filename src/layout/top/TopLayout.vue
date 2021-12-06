<template>
  <div class="top-layout">
    <div class="flex-1"></div>
    <RightActions/>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import RightActions from "./actions/RightActions.vue";

const topZIndex = inject('topZIndex')
const topHeight = inject('topHeight')
const top = computed(()=>{
  return unref(topHeight)+'px'
})

</script>

<style scoped lang="less">
.top-layout{
  position: absolute;
  height: v-bind(top);
  width: 100%;
  z-index: v-bind(topZIndex);
  @apply flex items-center bg-gray-700 text-white;
}
</style>

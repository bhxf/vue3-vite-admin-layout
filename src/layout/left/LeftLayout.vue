<template>
  <div v-if="isLeft" class="left-layout">

  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";

const leftZIndex = inject('leftZIndex')
const leftWidth = inject('leftWidth')
const topHeight = inject('topHeight')
const isLeft = inject('isLeft')

const left = computed(()=>{
  return unref(leftWidth)+'px'
})
const top = computed(()=>{
  return unref(topHeight)+'px'
})

</script>

<style scoped lang="less">
.left-layout{
  position: absolute;
  padding-top: v-bind(top);
  width: v-bind(left);
  height: 100vh;
  z-index: v-bind(leftZIndex);
  @apply bg-gray-600;
}
</style>

<template>
  <div class="center-layout">
    <div class="h-full p-5">
      <div class="h-full bg-white rounded-md overflow-auto flex flex-wrap justify-between gap-4 p-3">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import XIcon from "../../components/XIcon/XIcon";

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
  @apply bg-slate-100;
}
</style>

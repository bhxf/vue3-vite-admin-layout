<template>
  <div v-if="isLeftDrawer" class="left-drawer-layout"></div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";

const leftWidth = inject('leftWidth')
const topHeight = inject('topHeight')
const leftDrawerWidth = inject('leftDrawerWidth')
const leftDrawerZIndex = inject('leftDrawerZIndex')
const isLeftDrawer = inject('isLeftDrawer')

const width = computed(() => unref(leftDrawerWidth) + 'px')
const left = computed(() => unref(leftWidth) + 'px')
const top = computed(() => unref(topHeight) + 'px')

</script>

<style scoped lang="less">
.left-drawer-layout {
  position: absolute;
  padding-top: v-bind(top);
  margin-left: v-bind(left);
  width: v-bind(width);
  height: 100vh;
  z-index: v-bind(leftDrawerZIndex);
  @apply bg-gray-100;
}
</style>

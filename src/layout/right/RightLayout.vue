<template>
  <click-out-side v-if="isRight" class="right-layout flex flex-col" @clickOutSide="isRight = false">
    <div class="flex w-full p-3 border-b-2 border-gray-100 bg-white">
      <div class="flex-1 text-lg font-medium">项目设置</div>
      <VIcon @click="isRight = false" name="X"/>
    </div>
    <div class="p-3 h-36 overflow-auto flex flex-row w-full gap-x-4 bg-gray-50">
      <div :class="['item',layoutModel === LayoutModel.DRAWER?'active-item':'border-gray-50']" @click="selectedLayoutModel(LayoutModel.DRAWER)">
        <div class="h-7 bg-gray-800 rounded-t-md"></div>
        <div class="flex-1 flex">
          <div class="w-10 bg-white rounded-l-md h-full"></div>
          <div class="flex-1 h-full"></div>
        </div>
      </div>
      <div :class="['item',layoutModel === LayoutModel.NO_DRAWER?'active-item':'border-gray-50']" @click="selectedLayoutModel(LayoutModel.NO_DRAWER)">
        <div class="h-7 bg-gray-800 rounded-t-md"></div>
        <div class="flex-1 flex">
          <div class="flex-1 h-full"></div>
        </div>
      </div>
      <div :class="['item',layoutModel === LayoutModel.MIN_DRAWER?'active-item':'border-gray-50']" @click="selectedLayoutModel(LayoutModel.MIN_DRAWER)">
        <div class="h-7 bg-gray-800 rounded-t-md"></div>
        <div class="flex-1 flex">
          <div class="w-6 bg-gray-900 rounded-bl-md h-full"></div>
          <div class="w-4 bg-white h-full"></div>
          <div class="flex-1 h-full"></div>
        </div>
      </div>
    </div>
  </click-out-side>
</template>

<script setup lang="ts">
import {computed, inject, unref,Ref} from "vue";
import ClickOutSide from "../../components/ClickOutSide/src/ClickOutSide.vue";
import VIcon from "../../components/Icon/VIcon.vue";
import {LayoutModel} from "../../enum/project";

const layoutModel = inject<Ref<LayoutModel>>('layoutModel')
const rightWidth = inject('rightWidth')
const topHeight = inject('topHeight')
const isRight = inject('isRight')
const rightZIndex = inject('rightZIndex')

const right = computed(()=>{
  return unref(rightWidth)+'px'
})
const top = computed(()=>{
  return unref(topHeight)+'px'
})

const selectedLayoutModel = (model:LayoutModel) => {
  layoutModel && (layoutModel.value = model)
}

</script>

<style scoped lang="less">
.right-layout{
  right: 0;
  position: absolute;
  width: v-bind(right);
  height: 100vh;
  z-index: v-bind(rightZIndex);
  @apply bg-white shadow;

  .active-item{
    @apply border-blue-600;
  }
  .item{
    flex-shrink: 0;
    @apply w-32 h-28 flex flex-col rounded-xl bg-gray-100 border-4 hover:border-blue-600;
  }
}
</style>

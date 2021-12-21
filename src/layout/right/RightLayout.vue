<template>
  <click-out-side v-if="isRight" class="right-layout flex flex-col shadow-md" @clickOutSide="isRight = false">
    <div class="flex items-center w-full pl-6 pt-2 pb-2 bg-slate-600">
      <div class="flex-1 text-md font-medium text-white">项目设置</div>
      <XIcon @click="isRight = false" size="20px" name="md:CloseRound" color="white"/>
    </div>
    <div class="p-3 flex flex-col w-full gap-y-2 items-center">
      <div :class="['item',layoutModel === LayoutModel.DRAWER?'active-item':'border-white']" @click="selectedLayoutModel(LayoutModel.DRAWER)">
        <div class="h-5 bg-gray-600 rounded-t-md"></div>
        <div class="flex-1 flex">
          <div class="w-10 bg-gray-500 rounded-bl-md h-full"></div>
          <div class="flex-1 h-full"></div>
        </div>
      </div>
      <div :class="['item',layoutModel === LayoutModel.NO_DRAWER?'active-item':'border-white']" @click="selectedLayoutModel(LayoutModel.NO_DRAWER)">
        <div class="h-5 bg-gray-600 rounded-t-md"></div>
        <div class="flex-1 flex">
          <div class="flex-1 h-full"></div>
        </div>
      </div>
      <div :class="['item',layoutModel === LayoutModel.MIN_DRAWER?'active-item':'border-white']" @click="selectedLayoutModel(LayoutModel.MIN_DRAWER)">
        <div class="h-5 bg-gray-600 rounded-t-md"></div>
        <div class="flex-1 flex">
          <div class="w-6 bg-gray-500 rounded-bl-md h-full"></div>
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
import {LayoutModel} from "../../enum/project";
import XIcon from "../../components/XIcon/XIcon";

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
    @apply w-40 h-28 flex flex-col rounded-xl bg-gray-100 border-4 hover:border-blue-600;
  }
}
</style>

<template>
  <div class="right-actions">
    <div @click="open" class="items-center justify-center flex p-1">
      <XIcon name="tb:SettingsAutomation" color="white" />
    </div>
  </div>
</template>

<script setup lang="ts">

import {inject, Ref, unref} from "vue";
import XIcon from "../../../components/XIcon/XIcon";

const isRight = inject<Ref<boolean>>('isRight')
const open = () => {
  isRight&&(isRight.value = !unref(isRight))
}
</script>

<style scoped lang="less">
.right-actions{
  @apply flex h-full;
}
</style>

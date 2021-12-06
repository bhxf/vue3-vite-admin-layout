<template>
  <div class="px-3">
    <VIcon @click="open" name="Settings"/>
  </div>
</template>

<script setup lang="ts">

import VIcon from "../../../components/Icon/VIcon.vue";
import {inject, Ref, unref} from "vue";

const isRight = inject<Ref<boolean>>('isRight')
const open = () => {
  isRight&&(isRight.value = !unref(isRight))
}
</script>

<style scoped lang="less">
</style>

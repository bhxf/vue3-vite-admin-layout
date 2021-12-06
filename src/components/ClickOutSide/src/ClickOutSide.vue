<template>
  <div ref="wrap">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  const emit = defineEmits(['clickOutSide']);
  const wrap = ref<HTMLElement|null>(null);

  onClickOutside(wrap, () => {
    emit('clickOutSide');
  });

</script>

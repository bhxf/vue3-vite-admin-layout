<template>
    <div class="header-layout g-bg">
        <HeaderActionLayout/>
        <TabsLayout/>
    </div>
</template>

<script setup lang="ts">
import TabsLayout from "./TabsLayout.vue";
import HeaderActionLayout from "./HeaderActionLayout.vue";
</script>

<style lang="less">
.header-layout {
    z-index: 1;
    @apply absolute w-full flex flex-col items-center items-stretch;
}
</style>

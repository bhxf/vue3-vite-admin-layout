<template>
    <ClickOutSide @clickOutside="isShow = false" class="flex flex-col justify-center items-center">
        <div class="flex items-center justify-center">
            <slot></slot>
            <VIcon @click.stop="isShow = !isShow" class="p-0" name="ArrowDropDownRound"/>
        </div>

        <div class="relative w-full">
            <div v-show="isShow" class="absolute bg-white shadow-md top-0 left-0" style="width: initial">
                <slot name="items"/>
            </div>
        </div>
    </ClickOutSide>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ClickOutSide from "../ClickOutSide/src/ClickOutSide.vue";
import VIcon from "../Icon/VIcon.vue";

const isShow = ref(false)
</script>

<style lang="less">
</style>

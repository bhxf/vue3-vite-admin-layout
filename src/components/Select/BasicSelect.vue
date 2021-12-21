<template>
    <ClickOutSide class="w-36 relative rounded-l-md border-r-0 border-gray-300 border hover:bg-black hover:bg-opacity-5 px-2 inline-flex items-center justify-center" @clickOutSide="isShow=false">
        <span @click="isShow = !isShow" class="flex flex-1 items-center">
            <label class="flex-1">select</label>
        </span>
        <div v-if="isShow" class="flex flex-col absolute bg-white left-0 top-8 shadow-md mt-1 pt-1" style="width: inherit">
            <label class="hover:bg-blue-700 hover:bg-opacity-5 py-1 px-2 flex items-center" v-for="i in 10">
                <span>select{{i}}</span>
            </label>
        </div>
    </ClickOutSide>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ClickOutSide from "../ClickOutSide/src/ClickOutSide.vue";
const isShow = ref(false)
</script>

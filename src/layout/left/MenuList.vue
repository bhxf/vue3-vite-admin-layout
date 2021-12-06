<template>
    <div
        class="w-full max-w-md mx-auto bg-white flex flex-col gap-y-1 text-gray-800 pt-3">
        <template
            v-for="menu in menuList"
            :key="menu.path"
        >
            <div
                v-if="menu.children&&menu.children?.length>0"
                class="flex flex-col"
            >
                <div class="flex flex-nowrap hover:bg-purple-100 hover:text-purple-900 px-4 py-0.5 justify-between" @click="menu.isOpen = !(menu.isOpen?menu.isOpen:false)">
                    <span>{{menu.label}}</span>
                    <ChevronUpIcon class="w-5 h-5"/>
                </div>
                <div v-if="menu?.isOpen === true">
                    <div
                        class="text-gray-600 px-5 py-0.5 hover:bg-purple-100 hover:text-purple-900"
                        v-for="child in menu.children"
                        :key="child.path"
                    >
                        {{ child.label }}
                    </div>
                </div>
            </div>
            <div
                v-else
                class="px-4 py-1 hover:bg-purple-100 hover:text-purple-900"
            >
                {{ menu.label }}
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import {ChevronUpIcon} from '@heroicons/vue/solid'
import {Menu} from "../../store/layout/type";
import {ref} from "vue";

const props = defineProps<{ menus: Menu[] }>()

const menuList = ref(props.menus||[])
</script>

<style lang="less">

</style>

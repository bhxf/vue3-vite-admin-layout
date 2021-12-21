<template>
    <ClickOutSide
        :class="['basic-tab',isShow?'border-white':'border-gray-100']"
        @clickOutSide="clickOutSide">
        <div :class="['title gap-x-1',isShow?'bg-white':'']">
            <slot>
                <label>{{ label }}</label>
            </slot>
            <span v-if="child&&child.length>0" @click.stop="clickTabDown">
                <slot name="icon">
                </slot>
            </span>
        </div>
        <div v-if="isShow" class="relative w-full">
            <div ref="tabItem" class="tab-item fixed bg-white shadow-md flex flex-col justify-center">
                <div
                    class="hover:bg-black hover:bg-opacity-5 py-2 px-3 flex items-center gap-x-1"
                    v-for="tab in child">
                    <label>
                        {{ tab.label }}
                    </label>
                </div>
            </div>
        </div>
    </ClickOutSide>
</template>

<script setup lang="ts">

import ClickOutSide from "../../components/ClickOutSide/src/ClickOutSide.vue";
import {nextTick, ref, unref} from "vue";

const props = withDefaults(defineProps<{
    child: any[],
    label: string,
    icon: string,
}>(), {})
const left = ref()
const right = ref()
const isShow = ref(false)
const tabItem = ref<HTMLElement|null>(null)
const clickOutSide = () => {
    isShow.value = false
}
const clickTabDown = async () => {
    isShow.value = !unref(isShow)
    if (unref(isShow)){
        await nextTick()
        const offsetLeft = tabItem.value&&tabItem.value.offsetLeft||0
        const pOffsetLeft = tabItem.value&&tabItem.value.parentElement?.offsetLeft||0
        const clientWidth = tabItem.value&&tabItem.value.clientWidth||0
        const pClientWidth = tabItem.value&&tabItem.value.parentElement?.clientWidth||0

        const offsetRight = window.innerWidth-offsetLeft-clientWidth
        const pRight = window.innerWidth-pOffsetLeft-pClientWidth

        offsetRight>clientWidth ? (left.value = `${offsetLeft}px`):(right.value = `${pRight}px`)
    }
}
</script>

<style scoped lang="less">
.basic-tab {
    min-width: fit-content;
    @apply flex flex-col text-xs;
    @apply hover:border-blue-600 hover:border-opacity-10 hover:border-t-0;

    .title {
        @apply py-1 px-3 flex-1 flex justify-center items-center;
        @apply hover:bg-blue-600 hover:bg-opacity-5;
    }

    .tab-item {
        left: v-bind(left);
        right: v-bind(right);
    }

}
</style>

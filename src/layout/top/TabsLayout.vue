<template>
    <div class="tabs-layout">

        <div ref="tabsRef" class="flex-1 flex overflow-hidden relative pl-2">
            <template v-for="tab in tabs" :key="tab.path">
                <TabLayout
                    v-show="tab.isHide!==false"
                    @click="selectTab(tab)"
                    :id="getTabId(tab.path)"
                    :label="tab.label"
                    :icon="tab.icon"
                    :class="[tab.path === currentTab?.path?'active':'']"
                    :child="tab.children"
                />
            </template>
        </div>
        <TabLayout v-if="isMore" label="更多" :child="moreTabs"/>

        <div class="flex gap-x-1">
        </div>

    </div>
</template>

<script setup lang="ts">
import {computed, inject, nextTick, ref, unref, watch} from "vue";
import tabStore from "../../store/layout/tabStore";
import {Tab} from "../../store/layout/type";
import TabLayout from "./TabLayout.vue";
import {cloneDeep} from "lodash-es";

const isMore = ref(false)
const tabsRef = ref<HTMLElement|null>(null)
const tabs = computed<Tab[]>(()=>tabStore.tabs)
const moreTabs = computed<Tab[]>(()=>tabStore.tabs.filter(tab=>tab.isHide===false))
const currentTab = computed<Tab|null>(()=>tabStore.currentTab)

const tabsLayoutHeight = inject('tabsLayoutHeight')
const height = computed(()=>unref(tabsLayoutHeight)+'px')

const selectTab = (tab:Tab) => {
  tabStore.commitTab(tab)
}
const addTab = ()=>{
    const time = new Date().getTime()
    tabStore.commitTab({label:'tab'+time,path:'/tab'+time})
}
const getTabId = (path:string)=>{
    return `tab-${path}`
}

watch(tabs,async (value)=>{
    await nextTick()
    const scrollWidth = tabsRef.value?.scrollWidth||0
    const clientWidth = tabsRef.value?.clientWidth||0
    const isMoreTab = scrollWidth>clientWidth
    isMore.value = isMoreTab||moreTabs.value.length>0

    if (isMoreTab){
        await nextTick()
        const list = cloneDeep(value) as Tab[]
        list.reverse()
        list.forEach(tab=>{
            if (tab.isHide !== false){
                const path = tab.path
                const tabDom = document.getElementById(getTabId(path))
                const childOffsetLeft = tabDom?.offsetLeft||0
                const childClientWidth = tabDom?.clientWidth||0
                const childLeft = (childOffsetLeft + childClientWidth)
                const isScroll = clientWidth < childLeft
                isScroll && tabStore.commitTabByPath(path)
            }
        })
    }
},{deep:true,immediate:true})
</script>

<style scoped lang="less">
.tabs-layout{
    max-height: v-bind(height);
    @apply flex-1 bg-white flex flex-nowrap items-center justify-start px-2;
    .active{
        @apply bg-blue-800 border-t-2 border-blue-700 bg-opacity-10;
    }
}
</style>

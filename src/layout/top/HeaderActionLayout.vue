<template>
    <div class="header-action-layout flex">
        <div class="px-6 py-2 flex flex-col items-center justify-center">
            <div class="font-bold">JCHTXT</div>
            <div class="text-xs font-medium">基础后台系统</div>
        </div>
        <div class="flex-1 justify-center items-center flex p-2">
            <div class="flex h-9 gap-x-0" style="width: 500px;">
                <BasicSelect class="z-10">select</BasicSelect>
                <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    class="z-10 focus:border focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                />
            </div>
        </div>
        <div class="flex gap-4 pr-4 items-center">
            <VIcon name="NotificationsNoneOutlined"/>
            <VIcon name="SettingsOutlined"/>
            <VIcon name="SupervisedUserCircleOutlined"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import VIcon from "../../components/Icon/VIcon.vue";
import BasicSelect from "../../components/Select/BasicSelect.vue";

const headerActionLayoutHeight = inject('headerActionLayoutHeight')
const height = computed(()=>unref(headerActionLayoutHeight)+'px')
</script>

<style lang="less">
.header-action-layout{
    max-height: v-bind(height);
}
</style>

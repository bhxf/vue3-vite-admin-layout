<template>
    <div class="absolute menu-child-layout bg-white flex flex-col">
        <div class="flex">
        </div>
        <div class="flex-1 overflow-auto">
            <MenuList :menus="menus"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import MenuList from "./MenuList.vue";
import {Menu} from "../../store/layout/type";

const menuChildLayoutWidth = inject('menuChildLayoutWidth')
const headerLayoutHeight = inject('headerLayoutHeight')
const menuLayoutWidth = inject('menuLayoutWidth')
const menuWidth = computed(() => unref(menuLayoutWidth) + 'px')
const width = computed(() => unref(menuChildLayoutWidth) + 'px')
const height = computed(() => unref(headerLayoutHeight) + 'px')
const menus: Menu[] = [
    {
        label: '用户管理', path: '/',
        children: [
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
        ]
    },
    {
        label: '用户管理', path: '/',
        children: [
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
        ]
    },
    {
        label: '用户管理', path: '/',
        children: [
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
        ]
    },
    {
        label: '用户管理', path: '/',
        children: [
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
            {label: '用户管理1', path: '/'},
        ]
    },
    {label: '角色管理', path: '/'},
    {label: '权限管理', path: '/'},
    {label: '菜单管理', path: '/'},
    {label: '部门管理', path: '/'},
]
</script>

<style scoped lang="less">
.menu-child-layout {
    transition: 0.3s;
    padding-top: v-bind(height);
    height: 100vh;
    left: v-bind(menuWidth);
    width: v-bind(width);
}
</style>

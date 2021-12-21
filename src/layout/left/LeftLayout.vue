<template>
  <div v-if="isLeft" class="left-layout">
    <div class="logo">
    </div>
    <XMenu :mini="isLeftDrawer" :menus="menus" :menu="{value:'menuId',child:'child',label:'label'}" />
  </div>
</template>

<script setup lang="ts">
import {computed, inject, unref} from "vue";
import {MenuModel} from "./model";
import {initLevel} from "../../utils/tree";
import menuStore from "../../store/layout/menuStore";
import XMenu from "../../components/XMenu/XMenu";

const menus: MenuModel[] = [
  {
    menuId: 1,
    label: '系统管理', icon: '', path: '',
    child: [
      {menuId: 3,label: '用户管理', icon: '', path: '',parentId:1},
      {menuId: 4,label: '菜单管理', icon: '', path: '',parentId:1,
        child: [
          {menuId: 5,label: '用户管理', icon: '', path: '',parentId:4},
          {menuId: 6,label: '菜单管理', icon: '', path: '',parentId:4},
          {menuId: 7,label: '部门管理', icon: '', path: '',parentId:4},
        ]
      },
      {menuId: 8,label: '部门管理', icon: '', path: '',parentId:1,
        child: [
          {menuId: 9,label: '用户管理', icon: '', path: '',parentId:8},
          {menuId: 10,label: '菜单管理', icon: '', path: '',parentId:8},
          {menuId: 11,label: '部门管理', icon: '', path: '',parentId:8},
        ]
      },
    ]
  },
  {menuId: 12,label: '用户管理', icon: '', path: ''},
  {menuId: 13,label: '菜单管理', icon: '', path: ''},
  {menuId: 14,label: '部门管理', icon: '', path: ''},
]

//初始化层级
initLevel(menus)

const leftZIndex = inject('leftZIndex')
const leftWidth = inject('leftWidth')
const topHeight = inject('topHeight')
const isLeft = inject('isLeft')
const isLeftDrawer = inject('isLeftDrawer')

const left = computed(() => {
  return unref(leftWidth) + 'px'
})
const top = computed(() => {
  return unref(topHeight) + 'px'
})

//只在第一级菜单点击才会触发
const selectMenu = (menu:MenuModel) => {
  menuStore.commitSelectMenu(menu)
}

</script>

<style scoped lang="less">
.left-layout {
  position: absolute;
  width: v-bind(left);
  height: 100vh;
  z-index: v-bind(leftZIndex);
  @apply overflow-auto bg-gray-600 text-gray-100 text-sm;

  .logo{
    height: v-bind(top);
    @apply bg-slate-400 justify-center items-center flex;
  }
}
</style>

<template>
  <div class="main-layout g-bg">
    <top-layout/>
    <tabs-layout/>
    <left-layout/>
    <left-drawer-layout/>
    <right-layout/>
    <center-layout/>
  </div>
</template>

<script setup lang="ts">

import {computed, provide, ref, watch} from "vue";
import tabStore from "../store/layout/tabStore";
import {Tab} from "../store/layout/type";
import TopLayout from "./top/TopLayout.vue";
import LeftLayout from "./left/LeftLayout.vue";
import RightLayout from "./right/RightLayout.vue";
import CenterLayout from "./center/CenterLayout.vue";
import TabsLayout from "./top/tabs/TabsLayout.vue";
import {LayoutModel, LayoutProp} from "../enum/project";
import LeftDrawerLayout from "./left/LeftDrawerLayout.vue";
import menuStore from "../store/layout/menuStore";

const tabs: Tab[] = []
for (let i = 0; i < 13; i++) {
  tabs.push(
    {
      label: '系统管理' + i, path: '/sys' + i, children: [
        {label: '菜单列表', path: '/menu'},
        {label: '用户列表', path: '/user'},
        {label: '部门列表', path: '/dept'},
        {label: '角色列表', path: '/role'},
        {label: '日志列表', path: '/log'},
      ]
    }
  )
}
tabStore.commitTabs(tabs)

const topHeight = ref(LayoutProp.TOP_HEIGHT)
const tabsHeight = ref(LayoutProp.TABS_HEIGHT)
const leftWidth = ref(LayoutProp.LEFT_WIDTH)
const rightWidth = ref(LayoutProp.RIGHT_WIDTH)
const leftDrawerWidth = ref(LayoutProp.MIN_LEFT_DRAWER_WIDTH)

const topZIndex = ref(98)
const tabsZIndex = ref(98)
const leftZIndex = ref(100)
const rightZIndex = ref(101)
const leftDrawerZIndex = ref(99)

const isTop = ref(true)
const isTabs = ref(true)
const isLeft = ref(true)
const isRight = ref(false)
const isLeftDrawer = ref(false)

const updateLeftDrawerWidth = () => {
  if (isLeftDrawer.value && selectMenu.value?.child && selectMenu.value.child.length > 0) {
    leftDrawerWidth.value = LayoutProp.MIN_LEFT_DRAWER_WIDTH
  } else {
    leftDrawerWidth.value = 0
  }
}

const selectMenu = computed(() => menuStore.getSelectMenu)
watch(selectMenu, () => updateLeftDrawerWidth())

const layoutModel = ref<LayoutModel>(LayoutModel.DRAWER)
watch(layoutModel, (value) => {
  switch (value) {
    case LayoutModel.DRAWER:
      isLeft.value = true
      isLeftDrawer.value = false
      leftWidth.value = LayoutProp.LEFT_WIDTH
      leftDrawerWidth.value = 0
      break;
    case LayoutModel.MIN_DRAWER:
      isLeft.value = true
      isLeftDrawer.value = true
      leftWidth.value = LayoutProp.MIN_LEFT_WIDTH
      updateLeftDrawerWidth()
      break;
    case LayoutModel.NO_DRAWER:
      isLeft.value = false
      isLeftDrawer.value = false
      leftWidth.value = 0
      leftDrawerWidth.value = 0
      break;
  }
}, {immediate: true})

provide('layoutModel', layoutModel)

provide('topHeight', topHeight)
provide('leftWidth', leftWidth)
provide('rightWidth', rightWidth)
provide('tabsHeight', tabsHeight)
provide('tabsHeight', tabsHeight)

provide('leftDrawerWidth', leftDrawerWidth)
provide('topZIndex', topZIndex)
provide('tabsZIndex', tabsZIndex)
provide('leftZIndex', leftZIndex)
provide('rightZIndex', rightZIndex)
provide('leftDrawerZIndex', leftDrawerZIndex)

provide('isTop', isTop)
provide('isTabs', isTabs)
provide('isLeft', isLeft)
provide('isRight', isRight)
provide('isLeftDrawer', isLeftDrawer)

</script>

<style scoped lang="less">
.main-layout {
  height: 100vh;
  position: relative;
}
</style>

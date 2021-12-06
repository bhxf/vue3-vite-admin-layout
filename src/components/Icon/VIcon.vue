<template>
    <div :class="['icon',isBg?'g-hover':'']">
        <Icon
            :size="size"
            :color="color"
        >
            <component :is="material[name]||tabler[name]"/>
        </Icon>
    </div>
</template>

<script setup lang="ts">
import {Icon} from '@vicons/utils'
import * as material from '@vicons/material'
import * as tabler from '@vicons/tabler'
const props = withDefaults(
    defineProps<{
        name:string,
        color:string,
        size:string|number,
        flat:boolean,
        isBg:boolean,
    }>(),
    {
        size:20,
        flat:false,
        color:'',
        isBg:true,
    }
)
</script>

<style scoped lang="less">
.icon{
    height: fit-content;
    width: fit-content;
    @apply p-1 rounded flex items-center justify-center;
}
</style>

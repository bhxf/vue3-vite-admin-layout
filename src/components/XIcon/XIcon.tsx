import {computed, defineComponent, unref,h} from "vue";
import {bool, string} from "vue-types";
import {Icon} from "@vicons/utils";

enum IconType {
  MD = 'md',
  TB = 'tb'
}

import * as material from '@vicons/material'
import * as tabler from '@vicons/tabler'

export default defineComponent({
  name: 'XIcon',
  emits: [],
  props: {
    name: string().isRequired,
    dense: bool().def(false),
    flat: bool().def(false),
  },
  components: {
    Icon
  },
  setup(props,{attrs}) {

    if (props.name.indexOf(':') === -1) {
      console.error('name 参数不正确，缺少 : 。')
      return
    }

    const prefix = props.name.split(':')[0]
    const icon = props.name.split(':')[1]
    const com = computed(()=>{
      let iconCom = null

      switch (prefix) {
        case IconType.TB:
          iconCom = tabler as BasicKeyValue
          break;
        case IconType.MD:
          iconCom = material as BasicKeyValue
          break;
      }

      return iconCom && iconCom[icon]
    })
    const p = computed(()=>props.dense===false?'p-1':'p-3')
    const f = computed(()=>props.flat!==false?'bg-black bg-opacity-5':'')

    return () =>
      <>
        <div class={`flex justify-center items-center hover:bg-black hover:bg-opacity-5 rounded-md ${unref(p)} ${unref(f)}`}>
          <Icon
            {...attrs}
          >
            {h(unref(com))}
          </Icon>
        </div>
      </>
  }
})
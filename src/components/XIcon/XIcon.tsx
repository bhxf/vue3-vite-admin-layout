import {computed, defineComponent, h, ref} from 'vue';
import {bool, string} from 'vue-types';
import {Icon} from '@vicons/utils';
import './XIcon.scss';

enum IconType {
  MD = 'md',
  TB = 'tb',
}

enum ColorType {
  RED = 'red',
  ORANGE = 'orange',
  BLUE = 'blue',
  DARK = 'dark',
  WHITE = 'white',
}

import * as material from '@vicons/material';
import * as tabler from '@vicons/tabler';
import {BasicKeyValue} from "../../env";
import {hexToRGBByOpacity} from "../../utils/color";

const XIcon = defineComponent({
  name: 'XIcon',
  emits: [],
  props: {
    color: string<ColorType | string>().def(ColorType.DARK),
    name: string().def('md:ReportGmailerrorredRound'),
    size: string().def('23px'),
    dense: bool().def(false),
    flat: bool().def(false),
    icon: bool().def(false),
  },
  components: {
    Icon,
  },
  setup(props, {attrs}) {
    const prefix = props.name.split(':')[0];
    const icon = props.name.split(':')[1];
    const isColor = ref(false);
    const com = computed(() => {
      let iconCom: BasicKeyValue = {};

      switch (prefix) {
        case IconType.TB:
          iconCom = tabler as BasicKeyValue;
          break;
        case IconType.MD:
          iconCom = material as BasicKeyValue;
          break;
      }

      return iconCom && iconCom[icon];
    });
    const colorMap = new Map<ColorType | string, string>([
      [ColorType.RED, '#ef4444'],
      [ColorType.ORANGE, '#f97316'],
      [ColorType.BLUE, '#3b82f6'],
      [ColorType.DARK, '#4a4a4a'],
      [ColorType.WHITE, '#ffffff'],
    ]);

    const p = computed(() => (props.dense === false ? 'p-1' : 'p-3'));
    const f = computed(() => (props.flat !== false ? bgRgbColor.value : {}));
    const color = computed(() => colorMap.get(props.color) || props.color);
    const bgRgbColor = computed(() => ({background: hexToRGBByOpacity(color.value, 0.2)}));
    const bgColor = computed<any>(() => {
      return (isColor.value && props.icon === false) ? bgRgbColor.value : {}
    });

    return () => (
      <>
        <div
          onMouseover={() => (isColor.value = true)}
          onMouseout={() => (isColor.value = false)}
          class={['x-icon', p.value]}
          style={[bgColor.value, f.value]}
        >
          <Icon color={color.value} size={props.size} {...attrs}>
            {h(com.value)}
          </Icon>
        </div>
      </>
    );
  },
});

export default XIcon
export type XIcon = InstanceType<typeof XIcon>;

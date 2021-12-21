import {computed, defineComponent, ref} from "vue";
import {array, bool, number, object} from "vue-types";
import {BasicKeyValue} from "../../env";
import XIcon from "../XIcon";
import "./XMenu.scss"
import {findParentId, initLevel, treeToList} from "../../utils/tree";

export interface MenuType {
  label: string,
  value: string,
  icon: string,
  child: string,
}

export const menuProps = {
  menus: array<BasicKeyValue>().def([]),
  menu: object<MenuType>().def({
    label: 'label',
    value: 'value',
    icon: 'icon',
    child: 'child',
  }),
  level: number(),
  mini: bool().def(false)
}


const XMenu = defineComponent({
  name: "XMenu",
  emits: [],
  props: menuProps,
  components: {XIcon},
  setup(props) {

    const menuList = ref<BasicKeyValue[]>([])
    const menuTrees = ref<BasicKeyValue[]>(props.menus)
    const opens = ref<string[]>([])
    const active = ref<string>('')

    treeToList<BasicKeyValue>(props.menus, menuList.value)
    initLevel(menuTrees.value, 0)

    const activeClass = computed(() => {
      return (menuId: string) => {
        return active.value === menuId ? 'active' : '';
      }
    })

    const openClass = computed(() => {
      return (menuId: string) => {
        return opens.value.includes(menuId) ? 'open' : '';
      }
    })

    const itemClass = computed(() => {
      return props.mini !== false ? 'item-mini' : 'item-none'
    })

    const miniClass = computed(()=>{
      return props.mini !== false ? 'gap-y-1 pt-4':''
    })

    const pl = (level: number) => {
      return props.mini === false ? {paddingLeft: level + 'rem'} : {}
    }

    const clickParentMenu = (menu: BasicKeyValue) => {
      const menuId = menu[props.menu.value]
      const index = opens.value.findIndex(item => item === menuId)
      if (index === -1) {
        opens.value.push(menuId)
        findParentId(menuList.value, opens.value, menuId)
      } else {
        opens.value.splice(index, 1)
      }
    }

    const clickChildMenu = (menu: BasicKeyValue) => {
      active.value = menu[props.menu.value]
    }

    const menuParent = (menu: BasicKeyValue) => {
      return (
        <div class={['w-full']}>
          <div
            onClick={() => clickParentMenu(menu)}
            class={[
              itemClass.value,
              openClass.value(menu[props.menu.value])
            ]}
            style={pl(menu.level)}
          >
            <XIcon name={props.menu.icon} icon color={'white'}/>
            <label>{menu[props.menu.label]}</label>
            <XIcon name={'tb:ChevronDown'} icon size={'18px'} color={'white'}/>
          </div>
          {
            (opens.value.includes(menu[props.menu.value])) && (
              <div
                class={['bg-slate-500']}>
                {
                  menu[props.menu.child].map((item: BasicKeyValue) => {
                    const child = item.child
                    if (child && child.length > 0)
                      return menuParent(item)
                    else
                      return menuChild(item)
                  })
                }
              </div>
            )
          }
        </div>
      )
    }

    const menuChild = (menu: BasicKeyValue) => {
      return (
        <div
          onClick={() => clickChildMenu(menu)}
          class={[
            itemClass.value,
            activeClass.value(menu[props.menu.value])
          ]}
          style={pl(menu.level)}
        >
          <XIcon name={props.menu.icon} icon color={'white'}/>
          <label>{menu[props.menu.label]}</label>
        </div>
      )
    }

    const initMenu = () => {
      return menuTrees.value.map((item: BasicKeyValue) => {

        if (props.mini !== false) return menuChild(item)

        const child = item[props.menu.child]
        if (child && child.length > 0)
          return menuParent(item)
        else
          return menuChild(item)

      })
    }

    return () =>
      <>
        <div class={[
          'x-menu',
          miniClass.value
        ]}>
          {initMenu()}
        </div>
      </>
  }
})

export default XMenu
import { InjectionKey, Ref } from 'vue';

/** 全局的用户信息 InjectionKey */
export const menuIdKey: InjectionKey<Ref<(string|number) []>> = Symbol();
export const activeMenuIdKey: InjectionKey<Ref<(string|number)>> = Symbol();
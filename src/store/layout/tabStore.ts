import {getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {Tab} from "./type";
import store from "../index";

@Module({dynamic: true, store, name: 'tabStore'})
class TabStore extends VuexModule{

    tabs:Tab[] = []
    currentTab:Tab|null = null

    get getTabs(){
        return this.tabs
    }

    get getCurrentTab(){
        return this.currentTab
    }

    @Mutation
    commitTabs(tabs:Tab[]){
        this.tabs = tabs
    }

    @Mutation
    commitTab(tab:Tab){
        this.currentTab = tab
        const hasTab = this.tabs.find(item=>item.path === tab.path)
        !hasTab && this.tabs.push(tab)
    }

    @Mutation
    commitTabByPath(path:string){
        const tab = this.tabs.find(item=>item.path === path)
        tab && (tab.isHide = false)
    }

    @Mutation
    commitCurrentTab(tab:Tab){
        this.currentTab = tab
    }
}

const tabStore = getModule(TabStore)
export default tabStore
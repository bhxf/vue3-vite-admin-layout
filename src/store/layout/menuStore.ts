import {getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "../index";
import {MenuModel} from "../../layout/left/model";

@Module({dynamic: true, store, name: 'menuStore'})
class MenuStore extends VuexModule{

    selectMenu:MenuModel|null = null

    get getSelectMenu(){
        return this.selectMenu
    }

    @Mutation
    commitSelectMenu(selectMenu:MenuModel){
        this.selectMenu = selectMenu
    }
}

const menuStore = getModule(MenuStore)
export default menuStore
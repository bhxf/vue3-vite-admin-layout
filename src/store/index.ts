import {createStore} from 'vuex';
import {config} from 'vuex-module-decorators';

config.rawError = true;

const store = createStore({
    strict: true,
});

export default store;

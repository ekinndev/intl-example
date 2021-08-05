import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lang: 'TR',
    },
    mutations: {
        changeLanguage(state) {
            if (state.lang === 'TR') {
                state.lang = 'EN';
            } else {
                state.lang = 'TR';
            }
        },
    },
    actions: {},
    modules: {},
});


const state = {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
};

const getters = {

};

const mutations = {
    SET_ISCOLLAPSE(state, payLoad) {
        state.isCollapse = !state.isCollapse
        sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    }
};

const actions = {}


export default {
    namespaced: true,
    state, getters, mutations, actions
}
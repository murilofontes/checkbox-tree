import
  {
    SET_SELECTED_NAME,
    SET_CHILDREN_NAMES,
    UNSET_CHILDREN_NAMES,
    CLEAR_ALL_SELECTED_NAMES
  } from '../types'

const state = {
  namesSelected: []
}
const mutations = {
  [SET_SELECTED_NAME] (state, id)
  {
    state.namesSelected = id
  },
  [SET_CHILDREN_NAMES] (state, childrenIds)
  {
    state.namesSelected = state.namesSelected.concat(childrenIds)
  },
  [UNSET_CHILDREN_NAMES] (state, childrenIds)
  {
    state.namesSelected = state.namesSelected.filter((id) => !childrenIds.includes(id));
  },
  [CLEAR_ALL_SELECTED_NAMES] (state) {
    state.namesSelected = []
  }
}
const getters = {
  selectedNames: state =>
  {
    return state.namesSelected
  }
}

const actions = {
  setName ({ commit }, id)
  {
    commit(SET_SELECTED_NAME, id)
  },
  setChildrenNames ({ commit }, ids)
  {
    commit(SET_CHILDREN_NAMES, ids)
  },
  unsetChildrenNames ({ commit }, ids)
  {
    commit(UNSET_CHILDREN_NAMES, ids)
  },
  clearAllNamesSelection ({ commit }) {
    commit(CLEAR_ALL_SELECTED_NAMES)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
export { mutations, actions, getters }

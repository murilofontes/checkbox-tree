import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Checkbox from '@/components/atoms/Checkbox'
import { getters } from '@/store/modules/namesSelection'

const localVue = createLocalVue()

localVue.use(Vuex)

let actions = {
  setChildrenNames: jest.fn(),
  unsetChildrenNames: jest.fn(),
  setName: jest.fn()
}

let store = new Vuex.Store({
  actions,
  getters
})

const wrapper = shallowMount(Checkbox, {
  localVue,
  store,
  propsData: {
    label: 'Name',
    value: '123',
    children: {
      "id": "a853dddc-b639-41e6-a876-958b1e7f65d1",
      "name": "Harald Svante August",
      "children": {}
    }
  }
})

describe('Checkbox', () =>
{
  it('Check if component renders corretly"', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Check if getAllDescendantsValues method is called once its has a children element"', () => {
    jest.spyOn(wrapper.vm, 'getAllDescendantsValues')

    wrapper.find('#chkbox-123').trigger('click')
    expect(wrapper.vm.getAllDescendantsValues).toHaveBeenCalled()
  })
})

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    title: 'My Counter'
  }),
  getters: {
    oddOrEven(state) {
      return state.count % 2 === 0 ? 'even' : 'odd'
    }
  },
  actions: {
    increaseCounter(amount) {
      this.count += amount
    },
    decreaseCounter(amount) {
      this.count -= amount
    }
  }
})

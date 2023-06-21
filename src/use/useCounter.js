import { reactive, computed, watch, onMounted, nextTick } from "vue"

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

export function useCounter() {

  watch(() => counterData.count, (newCount, oldCount) => {
    if(newCount === 20) alert('Way to go! You made it to 20!!')
  })

  const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd')

  const increaseCounter = async (amount, e) => {
    counterData.count += amount
    await nextTick()
    console.log('do something when count has updated in the dom')
    // nextTick(() => {
    //   console.log('do something when count has updated in the dom')
    // })
  }

  const decreaseCounter = amount => counterData.count -= amount

  onMounted(() => {
    console.log('mounted CounterData')
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
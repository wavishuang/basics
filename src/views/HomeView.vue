<script setup>
/**
 * import
 */
  import { vAutofocus } from '@/directives/vAutofocus'
  import { 
    ref,
    onBeforeMount, onMounted, 
    onBeforeUnmount, onUnmounted,
    onActivated, onDeactivated,
    onBeforeUpdate, onUpdated
  } from 'vue'
  import { useCounter } from '@/use/useCounter.js'
  import { useCounterStore } from '@/stores/counter.js'

/**
 * App Title
 */
  const appTitle = 'My Ok Counter App'
  const appTitleRef = ref(null)

  onMounted(() => {
    console.log(`app title width is ${ appTitleRef.value.offsetWidth } wide`)
  })

/**
 * CountData
 */
  // const {
  //   counterData,
  //   oddOrEven,
  //   increaseCounter,
  //   decreaseCounter
  // } = useCounter()

  /**
   * useCounterStore()
   */
  const counter = useCounterStore()

/**
 * life cycle
 */
  // onBeforeMount(() => {
  //   console.log('before mounted')
  // })

  // onBeforeUnmount(() => {
  //   console.log('before unmounted')
  // })

  // onUnmounted(() => {
  //   console.log('unmounted')
  // })

  // onActivated(() => {
  //   console.log('activated')
  // })

  // onDeactivated(() => {
  //   console.log('deactivated')
  // })

  // onBeforeUpdate(() => {
  //   console.log('before upate')
  // })

  // onUpdated(() => {
  //   console.log('update')
  // })
</script>

<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}</h3>
    <div>
      <button class="btn" @click="counter.decreaseCounter(2)">--</button>
      <button class="btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(1, $event)">+</button>
      <button class="btn" @click="counter.increaseCounter(2, $event)">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counter.title" v-autofocus />
    </div>
  </div>
</template>

<style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  .btn, .counter {
    font-size: 40px;
    margin: 10px;
  }
  .edit {
    margin: 60px;
  }
</style>
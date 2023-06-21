<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input type="checkbox" v-model="showDarkModals" />
      </label>
    </div>
    <pre>{{ showDarkModals }}</pre>
    <button @click="showModal = true">Show modal</button>
    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="showModal"
      title="My modal title (via prop)">
      <p>Excepteur veniam minim magna ad deserunt consequat esse dolor.Anim dolore veniam amet nulla Lorem est sint do ad adipisicing id. Reprehenderit anim adipisicing est velit aute aliqua labore voluptate voluptate irure. Eiusmod anim laborum aliqua minim in in proident in eu nulla laboris sint irure. Ad enim commodo nisi dolor nostrud amet minim laboris ad enim. Incididunt velit cupidatat culpa excepteur mollit in quis dolor sit adipisicing. Tempor laborum adipisicing est non esse est sunt. Cillum consequat proident eu eiusmod eiusmod minim nostrud aliquip fugiat quis anim dolore ?</p>
    </component>
  </div>
</template>

<script setup>
/**
 * imports 
 */
  import { ref } from 'vue'
  import Modal from '@/components/Modal.vue'
  import ModalDark from '@/components/ModalDark.vue'

/**
 * modals
 */
  const showDarkModals = ref(false)
  const showModal = ref(false)
</script>


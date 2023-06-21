showDarkModals<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
/**
 * props
 */
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title specified'
    }
  })

/**
 * emits
 */
  const emit = defineEmits(['update:modelValue', 'hideModal'])
</script>

<style scoped>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div v-show="show" class="modal" @click.self="$emit('close')">
    <div class="modal__box">
      <Close class="modal__close-button" @click="$emit('close')"></Close>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

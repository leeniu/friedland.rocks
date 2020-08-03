<template>
  <nuxt-link class="logo" to="/">
    <ElectricGuitar v-bind="$attrs" class="logo__image"></ElectricGuitar>
    <span v-if="slogan" class="logo__slogan"></span>
  </nuxt-link>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    slogan: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

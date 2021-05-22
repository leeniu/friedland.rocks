<template>
  <nuxt-link class="logo" to="/">
    <fr-electric-guitar v-bind="$attrs" class="logo__image" />
    <span v-if="slogan" class="logo__slogan"></span>
  </nuxt-link>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    slogan: {
      type: Boolean,
      default: false
    }
  }
}
</script>

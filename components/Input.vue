<template>
  <div :class="[stacked ? 'input--stacked' : 'input']">
    <label v-if="label" class="input__label" :for="name">
      {{ label }}
    </label>
    <input
      :name="name"
      :value="value"
      v-bind="$attrs"
      class="input__field"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    stacked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

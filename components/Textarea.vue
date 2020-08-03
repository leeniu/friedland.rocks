<template>
  <div :class="[stacked ? 'textarea--stacked' : 'textarea']">
    <label v-if="label" class="textarea__label" :for="name">
      {{ label }}
    </label>
    <textarea
      :name="name"
      :value="value"
      v-bind="$attrs"
      class="textarea__field"
      @input="$emit('input', $event.target.value)"
    >
        <slot>
        </slot>
    </textarea>
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

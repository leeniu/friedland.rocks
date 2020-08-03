<template>
  <Modal :show="value" class="contact-modal" @close="$emit('input', false)">
    <div class="contact-modal__content">
      <h2 class="contact-modal__headline">Kontakt</h2>
      <ContactForm @success="$emit('input', false)"></ContactForm>
    </div>
  </Modal>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<template>
  <form
    method="POST"
    name="contact-form"
    class="contact-form"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="onSubmit"
  >
    <Input
      required
      novalidate
      type="text"
      name="name"
      label="Name *"
      placeholder="Erika Mustermann"
      :stacked="true"
      :disabled="loading"
      v-model="form.name"
      class="contact-form__element"
    />

    <Input
      required
      novalidate
      type="email"
      name="email"
      label="E-Mail-Adresse *"
      placeholder="erika.mustermann@test.de"
      :stacked="true"
      :disabled="loading"
      v-model="form.email"
      class="contact-form__element"
    />

    <Textarea
      rows="4"
      required
      novalidate
      type="text"
      name="message"
      label="Nachricht *"
      placeholder="Ich würde gern am XX.XX. für ein Kennenlernen vorbeikommen ..."
      :stacked="true"
      :disabled="loading"
      v-model="form.message"
      class="contact-form__element"
    />

    <input type="hidden" name="form-name" value="contact-form" />

    <div class="contact-form__footer">
      <Button type="submit" class="contact-form__submit" :disabled="loading">
        Absenden
      </Button>
      <Loader v-if="loading" class="contact-form__loader"></Loader>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        message: null,
        email: null,
        name: null,
      },
      loading: false,
    }
  },
  methods: {
    async onSubmit() {
      const data = { 'form-name': 'contact-form', ...this.form }
      try {
        this.loading = true
        let response = await fetch('/', {
          method: 'POST',
          body: Object.keys(data)
            .map(
              (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            )
            .join('&'),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        if (response.status === 200) {
          alert('Vielen Dank! Das Formular wurde übermittelt.')
          this.form.message = null
          this.form.email = null
          this.form.name = null
          this.$emit('success')
        } else {
          throw new Error()
        }
      } catch (error) {
        alert(
          'Ein unbekannter Fehler ist aufgetreten. Das Formular konnte nicht übermittelt werden.'
        )
        this.$emit('error')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

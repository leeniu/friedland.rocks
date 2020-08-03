<template>
  <footer class="footer">
    <nav class="footer__navigation">
      <ul class="footer_list">
        <li :key="link.text" v-for="link in links" class="footer_list-element">
          <nuxt-link class="footer_list-link" :to="link.target">
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Home',
          target: '/',
        },
        {
          text: 'Impressum',
          target: '/impressum',
        },
        {
          text: 'Datenschutz',
          target: '/datenschutz',
        },
      ],
    }
  },
}
</script>

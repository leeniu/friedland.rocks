<template>
  <header class="nav-bar">
    <div class="nav-bar__logo-box">
      <Logo class="nav-bar__logo"></Logo>
    </div>

    <button
      type="button"
      class="nav-bar__button"
      :class="[open ? 'nav-bar__button--opened' : 'nav-bar__button--closed']"
      @click="open = !open"
    >
      <span class="nav-bar__button-icon">&nbsp;</span>
    </button>

    <nav
      class="nav-bar__content"
      :class="[open ? 'nav-bar__content--opened' : 'nav-bar__content--closed']"
    >
      <ul class="nav-bar__list">
        <li class="nav-bar__list-item">
          <a href="/#section-features" class="nav-bar__link" @click="closeMenu">
            Über uns
          </a>
        </li>
        <li class="nav-bar__list-item">
          <a href="/#section-about" class="nav-bar__link" @click="closeMenu">
            Angebote
          </a>
        </li>
        <li class="nav-bar__list-item">
          <a href="/#section-cta" class="nav-bar__link" @click="closeMenu">
            Kontakt
          </a>
        </li>
        <hr />
        <li class="nav-bar__list-item">
          <nuxt-link
            to="impressum"
            class="nav-bar__link"
            @click.native="closeMenu"
          >
            Impressum
          </nuxt-link>
        </li>
        <li class="nav-bar__list-item">
          <nuxt-link
            to="datenschutz"
            class="nav-bar__link"
            @click.native="closeMenu"
          >
            Datenschutz
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    closeMenu() {
      this.open = false
    },
  },
}
</script>

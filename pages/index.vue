<template>
  <main class="home">
    <ContactModal v-model="showContactModal"></ContactModal>

    <Hero @click="showContactModal = true"></Hero>

    <section class="home-features" id="section-features">
      <div class="home-features__layout">
        <h2 class="home-features__headline">
          <span class="text-gradient">Dein Instrument - Dein Style</span>
        </h2>
        <div class="home-features__content">
          <article class="home-features__article">
            <h3 class="home-features__article-heading">
              Die Welt der Musik ist gigantisch!<br />
              Lern worauf Du Lust hast.
            </h3>
            <p class="home-features__article-text">
              Wähle aus einer Vielzahl von Instrumenten und
              Interessens-Gebieten, z.B:
            </p>

            <ul class="home-features__article-list">
              <li>E- & Akustik-Gitarre</li>
              <li>Ukulele</li>
              <li>Klavier & Keyboard</li>
              <li>Songwriting & Komposition</li>
              <li>Musik-Produktion</li>
            </ul>
          </article>

          <div class="home-features__images">
            <img
              class="home-features__images-1"
              src="/images/features__e-guitar.jpg"
              alt="Foto einer E-Gitarre"
            />
            <img
              class="home-features__images-2"
              src="/images/features__ukulele.jpg"
              alt="Foto einer Ukulele"
            />
            <img
              class="home-features__images-3"
              src="/images/features__piano.jpg"
              alt="Foto eines Klaviers"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="home-about" id="section-about">
      <div class="home-about__layout">
        <div class="u-text-center">
          <h2 class="home-about__headline">
            Dein Tempo - Deine Intensität
          </h2>
        </div>
        <article class="home-about__article">
          <div class="home-about__article-body">
            <FeatureBox>
              <template #icon>
                <i class="fal fa-user-music"></i>
              </template>
              <template #headline>Einzelunterricht</template>
              <template #content
                >Einzelunterricht mit Deinem Lehrer. ​Mit System zu Deinen
                Zielen!</template
              >
            </FeatureBox>
            <FeatureBox>
              <template #icon>
                <i class="fal fa-tv-music"></i>
              </template>
              <template #headline>Video Lessons On Demand</template>
              <template #content
                >Individuelle Video lessons, jederzeit und überall Gitarre
                üben!</template
              >
            </FeatureBox>
            <FeatureBox>
              <template #icon>
                <i class="fal fa-tachometer-alt-fastest"></i>
              </template>
              <template #headline>Intensiv Training</template>
              <template #content
                >Intensives Training speziell für fortgeschrittene Gitarristen
                die mehr wollen!</template
              >
            </FeatureBox>
          </div>
        </article>
      </div>
    </section>

    <section class="home-cta" id="section-cta">
      <div class="home-cta__layout">
        <h2 class="home-cta__headline">
          <span class="text-gradient"
            >Genau das was Du suchst? Probiers einfach aus</span
          >
        </h2>

        <p class="home-cta__text">
          Schick uns eine Nachricht und wir setzen uns umgehend mit Dir in
          Verbindung - natürlich jederzeit völlig unverbindlich.
        </p>

        <Button
          type="button"
          class="home-cta__button"
          @click="showContactModal = true"
        >
          Kontakt
        </Button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showContactModal: false,
    }
  },
}
</script>

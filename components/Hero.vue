<template>
  <div class="hero">
    <div class="hero__overlay"></div>
    <video
      loop
      muted
      autoplay
      class="hero__video"
      disableRemotePlayback
      disablePictureInPicture
      poster="/images/hero__poster.jpg"
    >
      <source src="/videos/hero__video.webm" type="video/webm" />
      <source src="/videos/hero__video.mp4" type="video/mp4" />
    </video>
    <div class="hero__content-box">
      <h1 class="hero__headline">
        Friedland <span class="hero__headline--highlight">Rocks!</span>
      </h1>
      <p class="hero__tagline">
        Innovativer Musikunterricht für die
        <span class="hero__tagline--highlight">Gemeinde Friedland.</span>
      </p>
      <Button type="button" class="hero__button" @click="$emit('click')">
        Kontakt
      </Button>
    </div>
  </div>
</template>

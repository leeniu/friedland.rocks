<template>
  <div class="feature-box">
    <div class="feature-box__icon">
      <slot name="icon">
        <i class="fal fa-user-music"></i>
      </slot>
    </div>

    <h5 class="feature-box__headline">
      <slot name="headline">
        Einzelunterricht
      </slot>
    </h5>

    <p class="feature-box__content">
      <slot name="content">
        Einzelunterricht mit Deinem Lehrer. ​Mit System zu Deinen Zielen!
      </slot>
    </p>
  </div>
</template>

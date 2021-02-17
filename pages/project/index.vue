<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="slide1">
          <Project1 />
        </div>
        <div class="swiper-slide" data-hash="slide2">
          <Project2 />
        </div>
        <div class="swiper-slide" data-hash="slide3">
          <Project3 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper'

export default {
  data() {
    return {
      title: this.$i18n.t('project'),
    }
  },
  head() {
    return {
      title: this.title + ' - Your_Name',
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    })
  },
}
</script>

<style></style>

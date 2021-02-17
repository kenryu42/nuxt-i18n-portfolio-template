<template>
  <div>
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <swiper-slide><Project1 /></swiper-slide>
      <swiper-slide><Project2 /></swiper-slide>
      <swiper-slide><Project3 /></swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$i18n.t('project'),
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  head() {
    return {
      title: this.title + ' - Your_Name',
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    slideIndex() {
      return this.$store.state.slide.index
    },
  },
  mounted() {
    this.swiper.slideTo(this.slideIndex, 1000, false)
  },
}
</script>

<style></style>

<template>
  <div>
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <swiper-slide><Project1 /></swiper-slide>
      <swiper-slide><Project2 /></swiper-slide>
      <swiper-slide><Project3 /></swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="button-prev" class="prevBtn swiper-button-prev"></div>
      <div slot="button-next" class="nextBtn swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  swiperOption: {
    slidesPerView: number
    spaceBetween: number
    loop: boolean
    pagination: {
      el: string
      clickable: boolean
    }
    navigation: {
      nextEl: string
      prevEl: string
    }
  }
}

interface Title {
  title: string
}
export default Vue.extend({
  data(): Data {
    return {
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
  head(): Title {
    return {
      title: this.$i18n.t('project') + ' - Your_Name',
    }
  },
  computed: {
    swiper(): any {
      return this.$refs.mySwiper.$swiper
    },
    slideIndex(): number {
      return this.$store.state.slide.index
    },
  },
  mounted() {
    this.swiper.slideTo(this.slideIndex, 1000, false)
  },
})
</script>

<style>
@media only screen and (max-width: 1024px) {
  .prevBtn {
    display: none;
  }
  .nextBtn {
    display: none;
  }
}
</style>

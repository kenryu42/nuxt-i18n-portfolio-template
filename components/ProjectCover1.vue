<template>
  <nuxt-link
    :to="localePath('project')"
    :aria-label="$t('project') + ' 1'"
    :title="$t('project') + ' 1'"
    @click.native="gotoSlide(1)"
  >
    <div
      class="bg-cover bg-center h-96 max-w-6xl md:h-128 mx-5 my-5 md:mx-20 lg:mx-auto"
      data-aos="fade-up"
      style="background-image: url(/project1.jpg)"
    >
      <div class="absolute bg-white opacity-90 p-2 mt-8">
        <span class="font-bold md:text-2xl">{{ $t('project') }} 1 </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  methods: {
    gotoSlide(index) {
      this.$store.commit('slide/goto', index)
    },
  },
}
</script>

<style></style>

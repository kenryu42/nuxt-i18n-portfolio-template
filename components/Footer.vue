<template>
  <div>
    <div class="h-2 bg-gradient-to-r from-green-400 to-blue-500 mt-14"></div>
    <footer class="flex justify-center px-4 text-gray-400 bg-gray-900">
      <div class="container py-6">
        <div class="flex justify-center">
          <Github />
          <div class="px-5"></div>
          <Instagram />
          <div class="px-5"></div>
          <LinkedIn />
          <div class="px-5"></div>
          <Twitter />
        </div>
        <hr class="h-px m-6 bg-gray-700 border-none" />
        <div class="flex justify-center">
          <a
            class="github-button"
            href="https://github.com/kenxdrgn/i18n-nuxt-portfolio-template/fork"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="true"
            aria-label="Fork kenxdrgn/i18n-nuxt-portfolio-template on GitHub"
            >Fork</a
          >
          <div class="px-6"></div>
          <a
            class="github-button"
            href="https://github.com/kenxdrgn/i18n-nuxt-portfolio-template"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star kenxdrgn/i18n-nuxt-portfolio-template on GitHub"
            >Star</a
          >
        </div>
        <hr class="h-px m-6 bg-gray-700 border-none" />
        <h1 class="text-center text-xs">
          {{ $t('footer_time') }}:
          <span class="text-blue-400">2021-02-01</span>
        </h1>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

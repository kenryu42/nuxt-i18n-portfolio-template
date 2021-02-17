<template>
  <footer
    class="flex justify-center px-4 text-gray-100 bg-gray-900 border-t-8 border-yellow-300"
  >
    <div class="container py-6">
      <div class="flex justify-center">
        <Github />
        <div class="px-5"></div>
        <Instagram />
        <div class="px-5"></div>
        <Twitter />
        <div class="px-5"></div>
        <Facebook />
      </div>
      <hr class="h-px m-6 bg-gray-700 border-none" />
      <div class="flex justify-center">
        <a
          class="github-button"
          href="https://github.com/kenxdrgn/Face-Detection-And-Auto-Crop/fork"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork kenxdrgn/Face-Detection-And-Auto-Crop on GitHub"
          >Fork</a
        >
        <div class="px-6"></div>
        <a
          class="github-button"
          href="https://github.com/kenxdrgn/Face-Detection-And-Auto-Crop"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star kenxdrgn/Face-Detection-And-Auto-Crop on GitHub"
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
</template>

<script>
export default {}
</script>

<style></style>

<template>
  <section class="bg-gray-100">
    <div class="bg-white dark:bg-darkmode">
      <div class="">
        <div
          class="mx-5 md:mx-20 h-64 md:h-128 bg-cover bg-center"
          style="background-image: url('/project3.jpg')"
        ></div>
      </div>

      <div class="py-12 px-6 max-w-xl mx-auto">
        <h2
          class="text-2xl text-gray-900 dark:text-gray-300 font-bold md:text-3xl"
        >
          LOREM
          <span class="text-green-400">IPSUM</span>
        </h2>
        <p class="mt-4 text-gray-900 dark:text-gray-400">
          {{ $t('p1_desc') }} <br /><br />
          {{ $t('p1_frontend') }} <br />
          {{ $t('p1_backend') }}
        </p>

        <div class="flex mt-8 justify-center">
          <a
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            class="flex bg-gray-900 dark:bg-gray-800 text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800 dark:hover:bg-gray-700"
            >{{ $t('trynow') }}<ExternalLink class="ml-1 mt-1"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>

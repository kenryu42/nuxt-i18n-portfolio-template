<template>
  <section class="bg-gray-100">
    <div class="bg-white dark:bg-gray-800">
      <div class="">
        <div
          class="h-64 md:h-128 lg:h-192 bg-cover bg-center"
          style="background-image: url('/project1.jpg')"
        ></div>
      </div>

      <div class="py-12 px-6 max-w-xl mx-auto">
        <h2
          class="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl"
        >
          LOREM
          <span class="text-yellow-300">IPSUM</span>
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          {{ $t('p1_desc') }} <br /><br />
          {{ $t('p1_frontend') }} <br />
          {{ $t('p1_backend') }}
        </p>

        <div class="flex mt-8 justify-center">
          <a
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            class="flex bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800"
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

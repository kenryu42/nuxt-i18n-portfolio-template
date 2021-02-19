<template>
  <div
    class="py-60 text-center font-medium tracking-wide text-5xl md:text-8xl dark:text-gray-300"
  >
    <nuxt-link
      :to="localePath('about')"
      :aria-label="$t('about')"
      :title="$t('about')"
    >
      <vue-typed-js
        class="flex justify-center"
        :loop="true"
        :type-speed="50"
        :back-speed="50"
        :strings="[
          'Hello',
          'こんにちは',
          '你好',
          'Hola',
          'Bonjour',
          '哈囉',
          'नमस्ते',
          'Hallo',
          'Здравствуйте',
          'Olá',
          'Ciao',
          '여보세요',
          'Merhaba',
          'مرحبا',
          'สวัสดี',
          'Hallå',
          'Hej',
          'xin chào',
          'dzień dobry',
          'Hei',
          'שלום',
          'Χαίρετε',
          'Salut',
          'Ahoj',
          'zdravo',
        ]"
      >
        <span class="typing"></span>
      </vue-typed-js>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

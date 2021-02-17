<template>
  <div>
    <div
      class="py-40 text-shadow-md text-center font-medium tracking-wide text-5xl md:text-8xl animate__animated animate__fadeOut animate__infinite"
    >
      <nuxt-link to="/about" :aria-label="$t('about')" :title="$t('about')">
        {{ message }}
      </nuxt-link>
    </div>
    <ProjectCover1 />
    <ProjectCover2 />
    <ProjectCover3 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
      animateClass: '',
    }
  },
  mounted() {
    this.startInterval()
  },
  methods: {
    startInterval() {
      let i = -1
      const messages = [
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
        'Hello',
      ]
      setInterval(() => {
        this.message = messages[++i % messages.length]
      }, 3000)
    },
  },
}
</script>

<style>
.animate__animated.animate__fadeOut {
  --animate-duration: 3s;
}
</style>

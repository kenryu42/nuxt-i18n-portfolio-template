<template>
  <div class="py-12">
    <img
      class="w-48 h-48 mx-auto rounded-full shadow-2xl animate__animated animate__zoomIn"
      src="/avatar.jpg"
      alt="avatar"
    />
    <div
      class="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg"
    >
      <div class="flex items-center px-6 py-3 bg-gray-900">
        <PenIcon />
        <h1 class="mx-3 font-semibold text-gray-100 dark:text-gray-300 text-lg">
          {{ $t('about_title') }}
        </h1>
      </div>

      <div class="py-4 px-6">
        <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-300">
          Hi, I'm [Your_Name]
        </h1>

        <p class="py-2 text-gray-800 dark:text-gray-300">
          {{ $t('about_subtitle') }}
        </p>

        <div class="flex items-center mt-4 text-gray-900 dark:text-gray-400">
          <WorkIcon />
          <h1 class="px-2 text-sm">[Your_Company_Name]</h1>
        </div>

        <div class="flex items-center mt-4 text-gray-900 dark:text-gray-400">
          <LocationIcon />
          <h1 class="px-2 text-sm">{{ $t('location') }}</h1>
        </div>

        <div class="flex items-center mt-4 text-gray-900 dark:text-gray-400">
          <GlobalIcon />
          <h1 class="px-2 text-sm">
            {{ $t('language') }}
          </h1>
        </div>

        <div class="flex items-center mt-4 text-gray-900 dark:text-gray-400">
          <MailIcon />
          <a
            href="mailto:your_email@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            class="px-2 text-sm text-blue-600 underline"
            >your_email@gmail.com <ExternalLink class="inline"
          /></a>
        </div>
        <div class="flex items-center mt-4 text-gray-900 dark:text-gray-400">
          <DocIcon />
          <nuxt-link
            :to="localePath('/resume.pdf')"
            target="_blank"
            class="px-2 text-sm text-blue-600 underline"
          >
            {{ $t('resume') }} <ExternalLink class="inline" />
          </nuxt-link>
        </div>
        <div class="flex items-center mt-4 text-gray-900 dark:text-gray-400">
          <LinkIcon />
          <a
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            class="px-2 text-sm text-blue-600 underline"
          >
            Link <ExternalLink class="inline" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$i18n.t('about'),
    }
  },
  head() {
    return {
      title: this.title + ' - Your_Name',
    }
  },
}
</script>

<style></style>

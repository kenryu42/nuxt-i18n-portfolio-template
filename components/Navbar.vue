<template>
  <nav
    class="bg-gradient-to-r from-green-400 to-blue-500 sticky top-0 z-20 border-b-8 border-gray-900"
  >
    <div
      class="px-4 py-2 lg:py-3 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <h1 class="ml-2 text-xl font-bold tracking-widest text-gray-900">
          <a
            class="hover:text-gray-700"
            title="Your_Name"
            :href="localePath('/')"
            >YOUR_NAME</a
          >
          <span class="hidden lg:inline"
            >[
            <nuxt-link
              :class="{
                'text-red-700': $nuxt.$i18n.localeProperties.code === 'en',
              }"
              class="hover:text-red-700"
              :to="switchLocalePath('en')"
              @click.native="gotoSlide(1)"
              >EN</nuxt-link
            >
            |
            <nuxt-link
              :class="{
                'text-red-700': $nuxt.$i18n.localeProperties.code === 'jp',
              }"
              class="hover:text-red-700"
              :to="switchLocalePath('jp')"
              @click.native="gotoSlide(1)"
              >JP</nuxt-link
            >
            |
            <nuxt-link
              :class="{
                'text-red-700': $nuxt.$i18n.localeProperties.code === 'cn',
              }"
              class="hover:text-red-700"
              :to="switchLocalePath('cn')"
              @click.native="gotoSlide(1)"
              >CN</nuxt-link
            >
            ]</span
          >
        </h1>
        <button
          class="lg:hidden"
          :aria-label="$t('darkmode')"
          :title="$t('darkmode')"
          @click="switchToggle"
        >
          <On v-show="dark" />
          <Off v-show="!dark" />
        </button>

        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <button
              :aria-label="$t('darkmode')"
              :title="$t('darkmode')"
              @click="switchToggle"
            >
              <On v-show="dark" />
              <Off v-show="!dark" />
            </button>
          </li>
          <li>
            <nuxt-link
              :to="localePath('/')"
              :aria-label="$t('home')"
              :title="$t('home')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('home') }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('/about')"
              :aria-label="$t('about')"
              :title="$t('about')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('about') }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('/timeline')"
              :aria-label="$t('timeline')"
              :title="$t('timeline')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('timeline') }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('/skill')"
              :aria-label="$t('skill')"
              :title="$t('skill')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('skill') }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('/project')"
              :aria-label="$t('project')"
              :title="$t('project')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              @click.native="gotoSlide(1)"
              >{{ $t('project') }}</nuxt-link
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            :class="
              isMenuOpen
                ? 'hamburger hamburger--minus is-active'
                : 'hamburger hamburger--minus'
            "
            type="button"
            :aria-label="$t('menu')"
            :title="$t('menu')"
            @click="activeHamburger"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div
        v-show="isMenuOpen"
        class="animate__animated animate__flipInY h-screen"
      >
        <ul class="lg:hidden text-center text-lg">
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              :to="localePath('/')"
              :aria-label="$t('home')"
              :title="$t('home')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('home') }}</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              :to="localePath('/about')"
              :aria-label="$t('about')"
              :title="$t('about')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('about') }}</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              :to="localePath('/timeline')"
              :aria-label="$t('timeline')"
              :title="$t('timeline')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('timeline') }}</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              :to="localePath('/skill')"
              :aria-label="$t('skill')"
              :title="$t('skill')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >{{ $t('skill') }}</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              :to="localePath('/project')"
              :aria-label="$t('project')"
              :title="$t('project')"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              @click.native="gotoSlide(1)"
              >{{ $t('project') }}</nuxt-link
            >
          </li>
          <li>
            <span>
              [
              <nuxt-link
                :class="{
                  'text-red-700': $nuxt.$i18n.localeProperties.code === 'en',
                }"
                class="hover:text-red-700"
                :to="switchLocalePath('en')"
                @click.native="gotoSlide(1)"
                >&nbsp;&nbsp;EN&nbsp;&nbsp;</nuxt-link
              >
              |
              <nuxt-link
                :class="{
                  'text-red-700': $nuxt.$i18n.localeProperties.code === 'jp',
                }"
                class="hover:text-red-700"
                :to="switchLocalePath('jp')"
                @click.native="gotoSlide(1)"
                >&nbsp;&nbsp;JP&nbsp;&nbsp;</nuxt-link
              >
              |
              <nuxt-link
                :class="{
                  'text-red-700': $nuxt.$i18n.localeProperties.code === 'cn',
                }"
                class="hover:text-red-700"
                :to="switchLocalePath('cn')"
                @click.native="gotoSlide(1)"
                >&nbsp;&nbsp;CN&nbsp;&nbsp;</nuxt-link
              >
              ]
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  isMenuOpen: boolean
  dark: boolean
}

export default Vue.extend({
  data(): Data {
    return {
      isMenuOpen: false,
      dark: false,
    }
  },
  mounted() {
    this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.darkMode(this.dark)
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.dark = e.matches
        this.darkMode(this.dark)
      })
  },
  methods: {
    activeHamburger(): void {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.body.className = 'non-scroll top-0'
      } else {
        document.body.className = ''
      }
    },
    gotoSlide(index: number): void {
      this.$store.commit('slide/goto', index)
    },
    switchToggle(): void {
      this.dark = !this.dark
      this.darkMode(this.dark)
    },
    darkMode(dark: boolean): void {
      dark
        ? document.querySelector('html')!.classList.add('dark')
        : document.querySelector('html')!.classList.remove('dark')
    },
  },
})
</script>
<style>
button:focus {
  outline: none;
}
.non-scroll {
  overflow: hidden;
}
</style>

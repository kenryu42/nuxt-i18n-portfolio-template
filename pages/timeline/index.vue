<template>
  <div class="p-4 md:p-10">
    <div class="md:flex mt-20 text-center">
      <div class="mx-auto md:w-2/3 text-gray-900 dark:text-gray-300">
        <h1 class="font-bold text-2xl mb-10 uppercase">{{ $t('timeline') }}</h1>

        <div
          class="relative mt-5 text-left animate__animated animate__fadeInUp dark:text-gray-400"
        >
          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2020</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-10">June.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2020</div>
                <div class="text-xs">June.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>
          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2019</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-10">June.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2019</div>
                <div class="text-xs">June.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2018</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-10">May.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2018</div>
                <div class="text-xs">May.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2015</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-4">February.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2015</div>
                <div class="text-xs">February.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2014</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-6">March.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2014</div>
                <div class="text-xs">March.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2009</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-6">March.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2009</div>
                <div class="text-xs">March.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2005</div>
              <div class="md:flex space-x-1 text-xs">
                <div class="mr-4">October.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black dark:border-gray-500 absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <div
                class="h-4 w-4 absolute border-2 border-black dark:border-gray-500 bg-green-400 dark:bg-blue-500"
              ></div>
            </div>

            <div class="ml-10">
              <div class="font-bold md:mb-4">
                {{ $t('timeline_title') }}
              </div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2005</div>
                <div class="text-xs">October.</div>
              </div>
              <div class="mb-10">
                {{ $t('timeline_desc') }}
              </div>
            </div>
          </div>
          <div class="font-bold text-center my-10">
            {{ $t('timeline_born') }} 🤰🏼👶🏼
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$i18n.t('timeline'),
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

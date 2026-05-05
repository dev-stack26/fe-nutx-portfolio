<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
  ],
  titleTemplate: '%s - Site Title',
});

const colorMode = useColorMode();
colorMode.preference = 'dark';
</script>
<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center">
        <div class="mr-4">
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
            >Hoan Lam
          </NuxtLink>
        </div>
        <MenuBar />
      </div>
      <ColorModeSelector />
    </header>
    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>
<style>
body {
  font-family: 'Roboto';
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: 'main page',
  description: 'main page',
  ogTitle: 'main page',
  ogDescription: 'main page',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'main page',
  twitterDescription: 'main page',
  twitterImage: 'main page',
  twitterCard: 'summary',
});

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
  ],
});
</script>
<template>
  <div>Home [page]</div>
</template>

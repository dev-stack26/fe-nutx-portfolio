<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
})
</script>

<template>
  <div>
    <div v-if="page">
      <ContentRenderer :value="page" class="prose dark:prose-invert" />
    </div>
    <div v-else class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>

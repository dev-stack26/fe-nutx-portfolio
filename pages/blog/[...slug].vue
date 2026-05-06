<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  const blog = queryCollection('blog');
  return blog.path(route.path).first();
});
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogUrl: route.path,
  twitterTitle: page.value?.title,
  twitterDescription: page.value?.description,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <div v-if="page">
      <ContentRenderer
        :value="page"
        class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
      />
    </div>
    <div v-else class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>

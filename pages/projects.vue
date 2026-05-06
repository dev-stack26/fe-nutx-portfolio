<script setup lang="ts">
useHead({
  title: 'Projects',
});
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});
</script>

<template>
  <div v-if="page" class="prose dark:prose-invert max-w-none">
    <ContentRenderer :value="page" />
  </div>
</template>

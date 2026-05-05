<script setup lang="ts">
interface BlogItem {
  path: string;
  title: string;
  date?: string;
  displayYear?: boolean;
  year?: number | string;
}

const { data: blogs } = await useAsyncData<BlogItem[]>('blog-list', () => {
  return queryCollection('blog').select('path', 'title', 'date').all();
});

const posts = computed(() => {
  const items = blogs.value;
  if (!items) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for (const post of items) {
    const year = post.date ? new Date(post.date).getFullYear() : 'None';
    const displayYear = year !== lastYear;
    post.displayYear = displayYear;
    post.year = year;
    result.push(post);
    lastYear = year;
  }

  return result;
});
</script>
<template>
  <section class="not-prose font-mono">
    <div class="flex flex-row gap-5 text-sm text-gray-400">
      <div>year</div>
      <div>title</div>
    </div>
    <ul v-if="posts && posts.length > 0">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink
          :to="post.path"
          class="flex flex-row gap-5 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white dark:text-gray-900': !post.displayYear,
              'text-gray-400 dark:text-gray-500': post.displayYear,
            }"
          >
            {{ post.year }}
          </div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

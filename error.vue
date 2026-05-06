<script setup lang="ts">
useHead({
  title: 'Error Page',
});
defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-6xl font-bold mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl mb-8">{{ error.message }}</p>
      <NuxtLink
        to="/"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Home
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

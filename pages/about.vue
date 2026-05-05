<script setup lang="ts">
useHead({
  title: 'About',
});
</script>

<template>
  <div class="prose dark:prose-invert">
    <ContentRenderer path="/about" :value="{}" />
  </div>
</template>

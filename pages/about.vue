<script setup lang="ts">
useHead({
  title: 'About',
})
</script>

<template>
    <div>
      <ContentRenderer path="/about" :value="{}" class="prose dark:prose-invert" />
    </div>
</template>
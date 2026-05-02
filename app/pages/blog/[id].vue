<script setup lang="ts">
definePageMeta({
    layout: "custom"
})
    const route = useRoute();
</script>

<template>
    <div>hello from blog detail page {{route.params.id}}</div>
</template>
<script lang="ts" setup>

const modes = ['light', 'dark', 'system'] as const

const colorMode = useColorMode()

const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference as typeof modes[number])
  const nextIndex = (currentIndex + 1) % modes.length
  return modes[nextIndex]
})

const toggleColorMode = () => colorMode.preference = nextMode.value || 'system';

</script>
<template>
    <div class="flex items-center space-x-2">
        <button @click="toggleColorMode">
            {{ nextMode }}
        </button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <main class="flex items-center space-x-3">
    <div class="h-8 w-[18px] rounded-sm bg-primaryRed"></div>
    <h3 class="text-primaryRed font-semibold">{{ props.title }}</h3>
  </main>
</template>

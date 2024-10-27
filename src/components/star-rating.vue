<script setup lang="ts">
import { computed } from "vue";
import { Star } from "lucide-vue-next";

const props = defineProps<{
  avgRating: number;
}>();

const stars = computed(() => {
  const fullStars = Math.floor(props.avgRating);
  const hasHalfStar = props.avgRating % 1 >= 0.5;
  return {
    fullStars,
    hasHalfStar,
    emptyStars: 5 - fullStars - (hasHalfStar ? 1 : 0),
  };
});
</script>

<template>
  <div class="flex items-center space-x-1">
    <Star
      v-for="i in stars.fullStars"
      :key="'full-' + i"
      class="text-primaryYellow w-4 h-4 fill-primaryYellow"
    />

    <div v-if="stars.hasHalfStar" class="relative w-4 h-4">
      <Star class="text-primaryYellow w-4 h-4 fill-primaryYellow absolute" />
      <div class="bg-white absolute w-2 h-4 right-0 top-0"></div>
    </div>

    <Star
      v-for="i in stars.emptyStars"
      :key="'empty-' + i"
      class="text-gray-300 w-4 h-4 fill-gray-300"
    />
  </div>
</template>

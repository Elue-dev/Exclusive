<script setup lang="ts">
import { ref } from "vue";

import { FLASH_SALES } from "@/data/products";
import SectionHeading from "../section-heading.vue";
import ProductCard from "../product-card.vue";

import { MoveLeft, MoveRight } from "lucide-vue-next";

const scrollContainer = ref<HTMLElement | null>(null);

function scroll(direction: "left" | "right") {
  if (scrollContainer.value) {
    const scrollAmount = 220;
    scrollContainer.value.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
}
</script>

<template>
  <SectionHeading :title="`Today's`" />
  <div class="flex justify-between items-center">
    <h1 class="font-medium text-xl mt-3">Flash Sales</h1>
    <div class="flex space-x-3">
      <div
        @click="scroll('left')"
        class="bg-ex-gray-200 p-2 rounded-full inline-block cursor-pointer"
      >
        <MoveLeft class="size-4" />
      </div>

      <div
        @click="scroll('right')"
        class="bg-ex-gray-200 p-2 rounded-full inline-block cursor-pointer"
      >
        <MoveRight class="size-4" />
      </div>
    </div>
  </div>

  <div
    ref="scrollContainer"
    class="mt-5 flex items-center overflow-x-scroll gap-5 no-scrollbar"
  >
    <ProductCard
      v-for="product in FLASH_SALES"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

<script setup lang="ts">
import { Heart, Eye } from "lucide-vue-next";
import StarRating from "./star-rating.vue";
import type { Product } from "@/types/product";
import type { PropType } from "vue";
import { Button } from "@/components/ui/button";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});

function getDiscountedPrice(fixedPrice: number, percentageOff: number) {
  const percentagePrice = fixedPrice * (percentageOff / 100);
  return fixedPrice - percentagePrice;
}
</script>

<template>
  <main>
    <div>
      <div class="bg-ex-gray-200 h-[180px] w-[220px] rounded-sm p-3 relative">
        <div class="">
          <div
            v-if="product.percentageOff"
            class="bg-primaryRed text-white font-medium inline-block rounded-sm py-1 px-2"
          >
            <p class="text-[11px]">{{ `- ${product.percentageOff}%` }}</p>
          </div>

          <div v-else class="mb-6"></div>
        </div>

        <div class="">
          <img
            :src="product.image"
            :alt="product.title"
            class="object-contain h-[110px] w-[90%]"
          />
        </div>

        <div class="absolute top-3 right-2 flex flex-col gap-y-2">
          <div
            class="bg-white p-[8px] inline-block rounded-full cursor-pointer"
          >
            <Heart class="size-4" />
          </div>

          <div
            class="bg-white p-[8px] inline-block rounded-full cursor-pointer"
          >
            <Eye class="size-4" />
          </div>
        </div>
      </div>
      <Button class="w-full rounded-none rounded-bl-sm rounded-br-sm h-[10px"
        >Add To Cart</Button
      >
    </div>

    <div class="mt-3">
      <h2 class="text-[14px]">{{ product.title }}</h2>
      <div class="flex items-center space-x-3">
        <p class="text-primaryRed font-medium">
          $ {{ getDiscountedPrice(product.price, product.percentageOff!) }}
        </p>
        <p class="line-through text-ex-gray-300 font-medium">
          $ {{ product.price }}
        </p>
      </div>

      <div class="flex items-center mt-2">
        <StarRating :avgRating="product.avgRating" />
        <p class="text-ex-gray-300 text-[12px] ml-2">
          ({{ product.numRatings }})
        </p>
      </div>
    </div>
  </main>
</template>

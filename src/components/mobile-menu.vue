<script setup lang="ts">
import Logo from "@/assets/svg/logo.svg";
import { HEADER_LINKS } from "@/data";

import { AlignJustify, SquareX } from "lucide-vue-next";

const props = defineProps<{
  open: boolean;
  closeSheet: () => void;
}>();
</script>

<template>
  <!-- ====== LINKS ======= -->
  <section>
    <div class="mb-4 flex justify-between items-center">
      <router-link to="/">
        <img :src="Logo" alt="Exclusive" class="logo" />
      </router-link>

      <SquareX
        class="lg:hidden cursor-pointer size-7 text-gray-600"
        @click="closeSheet"
      />
    </div>

    <ul
      v-for="link in HEADER_LINKS"
      :key="link.name"
      class="mt-4"
      @click="closeSheet"
    >
      <li :class="{ 'router-link-active': $route.path === link.path }">
        <router-link :to="link.path">
          <p>{{ link.name }}</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.router-link-active {
  border-bottom: 1px solid #c0c0c0;
  transition: border 1s ease;
}
.logo {
  border-bottom: 0 !important;
}
</style>

<script setup lang="ts">
import Logo from "@/assets/svg/logo.svg";
import { HEADER_LINKS } from "@/data";

import { SquareX } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";

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
      class="mt-8"
      @click="closeSheet"
    >
      <li :class="{ 'router-link-active': $route.path === link.path }">
        <router-link :to="link.path">
          <p>{{ link.name }}</p>
        </router-link>
      </li>
    </ul>

    <div class="flex items-center space-x-5 mt-7">
      <div class="relative w-full max-w-sm items-center">
        <Input
          id="search"
          type="text"
          placeholder="What are you looking for?"
          class="pl-10 text-[12px] outline-none"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>
    </div>

    <div class="absolute bottom-10">
      <p class="text-neutral-500 mt-4 text-sm">
        &copy; Copyright Exclusive Inc. {{ new Date().getFullYear() }}.
      </p>
      <p class="text-neutral-500 text-sm">All right reserved</p>
    </div>
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

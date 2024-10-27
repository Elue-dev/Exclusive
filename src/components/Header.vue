<script setup lang="ts">
import Logo from "@/assets/svg/logo.svg";
import { HEADER_LINKS } from "@/data";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import { Heart, ShoppingCart } from "lucide-vue-next";
</script>

<template>
  <header class="container py-4">
    <section class="flex justify-between items-center">
      <!-- ====== LOGO ======= -->
      <div>
        <router-link to="/">
          <img :src="Logo" alt="Exclusive" />
        </router-link>
      </div>

      <!-- ====== LINKS ======= -->
      <div class="flex items-center space-x-5">
        <ul v-for="link in HEADER_LINKS" :key="link.name">
          <li :class="{ 'router-link-active': $route.path === link.path }">
            <router-link :to="link.path">
              <p>{{ link.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="flex items-center space-x-5">
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
        <Heart class="size-8" />
        <ShoppingCart class="size-8" />
      </div>
    </section>
  </header>
</template>

<style scoped>
.router-link-active {
  border-bottom: 1px solid #555;
  transition: border 1s ease;
}
</style>

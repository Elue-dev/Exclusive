<script setup lang="ts">
import Logo from "@/assets/svg/logo.svg";
import { HEADER_LINKS } from "@/data";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import { Heart, ShoppingCart, AlignJustify } from "lucide-vue-next";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileMenuView from "./MobileMenuView.vue";
import { ref } from "vue";

const open = ref(false);

function closeSheet() {
  open.value = false;
}
</script>

<template>
  <header class="py-4 border-b border-b-gray-200">
    <section class="container">
      <div class="flex justify-between items-center">
        <div>
          <router-link to="/">
            <img :src="Logo" alt="Exclusive" />
          </router-link>
        </div>

        <div class="hidden lg:flex items-center space-x-5">
          <ul v-for="link in HEADER_LINKS" :key="link.name">
            <li :class="{ 'router-link-active': $route.path === link.path }">
              <router-link :to="link.path">
                <p>{{ link.name }}</p>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="flex items-center space-x-5">
          <div class="relative w-full max-w-sm items-center hidden lg:block">
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
          <Heart class="size-6 md:size-8 cursor-pointer" />
          <ShoppingCart class="size-6 md:size-8 cursor-pointer" />

          <Sheet :open="open" :onOpenChange="(value: boolean) => open = !value">
            <SheetTrigger as-child>
              <AlignJustify
                class="lg:hidden cursor-pointer size-6 md:size-8"
                @click="open = true"
              />
            </SheetTrigger>

            <SheetContent>
              <MobileMenuView :open="open" :closeSheet="closeSheet" />
            </SheetContent>
          </Sheet>
        </div>
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

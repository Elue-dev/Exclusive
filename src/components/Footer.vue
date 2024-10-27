<script setup lang="ts">
import LogoWhite from "@/assets/svg/logo-white.svg";
import { ACCOUNT, QUICK_LINKS } from "@/data/footer-links";
</script>

<template>
  <footer class="bg-black mt-[100px]">
    <main
      class="container text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start py-10 gap-7"
    >
      <div>
        <img :src="LogoWhite" alt="Exclusive Logo" />
      </div>

      <div>
        <h1 class="font-bold text-[18px] mb-2">Support</h1>
        <p class="text-sm font-normal mb-2">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <a
          href="mailto:exclusive@gmail.com"
          class="text-sm font-normal mb-2 block"
          >exclusive@gmail.com</a
        >
        <a class="text-sm font-normal mb-2">+88015-88888-9999</a>
      </div>

      <div>
        <h1 class="font-bold text-[18px] mb-2">Account</h1>
        <div v-for="account in ACCOUNT" :key="account.name">
          <router-link :to="account.path">
            <p class="text-sm font-normal mb-2">{{ account.name }}</p>
          </router-link>
        </div>
      </div>

      <div>
        <h1 class="font-bold text-[18px] mb-2">Quick Links</h1>
        <div v-for="link in QUICK_LINKS" :key="link.name">
          <router-link :to="link.path">
            <p class="text-sm font-normal mb-2">{{ link.name }}</p>
          </router-link>
        </div>
      </div>
    </main>

    <div class="text-center pb-5 border-t border-t-neutral-800">
      <p class="text-neutral-700 mt-4">
        &copy; Copyright Exclusive Inc. {{ new Date().getFullYear() }}. All
        right reserved
      </p>
    </div>
  </footer>
</template>

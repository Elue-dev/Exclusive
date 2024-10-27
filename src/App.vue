<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";

import Header from "./components/Header.vue";
import "@/styles/main.css";
import { ref, watch } from "vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const shouldShowHeader = ref(true);
const authRoutes = ["sign-up", "login", "forgot-password", "reset=password"];

watch(
  () => route.path,
  (newPath) => {
    shouldShowHeader.value = !authRoutes.some((authRoute) =>
      newPath.includes(authRoute)
    );
  },
  { immediate: true }
);
</script>

<template>
  <Header v-if="shouldShowHeader" />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>

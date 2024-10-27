<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

import Header from "./components/header.vue";
import "@/styles/main.css";
import { ref, watch } from "vue";
import Footer from "./components/footer.vue";

const route = useRoute();
const shouldShowHeaderAndFooter = ref(true);
const authRoutes = ["sign-up", "login", "forgot-password", "reset=password"];

watch(
  () => route.path,
  (newPath) => {
    shouldShowHeaderAndFooter.value = !authRoutes.some((authRoute) =>
      newPath.includes(authRoute)
    );
  },
  { immediate: true }
);
</script>

<template>
  <Header v-if="shouldShowHeaderAndFooter" />
  <main class="container">
    <RouterView />
  </main>
  <Footer v-if="shouldShowHeaderAndFooter" />
</template>

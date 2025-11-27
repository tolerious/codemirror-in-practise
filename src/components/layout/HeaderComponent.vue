<template>
  <div class="header">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";
import { RouterName } from "@/constant.ts";

const router = useRouter();

const title = computed(() => {
  if (router.currentRoute.value.name === RouterName.BasicEditor) {
    return "Basic Editor";
  }
  return RouterName.Default;
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

<template><div class="basic-editor-container">123</div></template>

<script setup lang="ts">
import { onMounted } from "vue";
import router from "@/router";

onMounted(() => {
  console.log(router.currentRoute.value.name);
});
</script>

<style scoped lang="scss"></style>

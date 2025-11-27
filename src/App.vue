<script setup lang="ts"></script>

<template>
  <div class="container">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header"
    "body"
    "footer";
}
</style>

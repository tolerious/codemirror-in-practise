<template>
  <div class="wrapper">
    <div ref="basic-editor-container" class="basic-editor-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCreateEditor } from "@/composables/createEditor.ts";
import { basicSetup } from "codemirror";

const { createEditor } = useCreateEditor();

onMounted(() => {
  const mountPoint = document.querySelector(".basic-editor-container")! as HTMLElement;
  createEditor(mountPoint, [basicSetup], "Basic Editor");
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-around;
  overflow: auto;
  .basic-editor-container {
    max-height: 100%;
    width: 90%;
  }
}
</style>

<script setup>

import Wrapper from "./components/Wrapper.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

const userName = "Sora";
const MethodName = (index) => {
  // 処理 (todos.value.splice(index, 1)
  console.log("emit test" + index);
};
</script>

<template>
  <Wrapper :name="userName" />
  <AppHeader :name="userName" @MethodName="MethodName" />
  <AppMain />
  <AppFooter />
  <main>
    <!-- コンポーネントを読み込み -->
  </main>
</template>

<style scoped></style>

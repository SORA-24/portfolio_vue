<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section id="wrapper" class="fadeout">
    <div class="logo-title">
      <h2 class="vue-green">Vue 3</h2>
      <h1>{{ name }} 'S SITE</h1>
    </div>
  </section>
</template>

<style scoped>
#wrapper {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  background-color: var(--color-nav-span-background);

  .logo-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;

    & > h1 {
      font-size: 3rem;
      /* em 親要素の基準　親に指定されていない場合は16px */
      /* rem root em → html要素の基準　親に指定されていない場合は16px */
      color: var(--color-nav-background);
    }
  }
}

.fadeout {
  animation-name: fadeout;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  /* 
    CSS Animation アニメーション完了後にアニメーションの最後の状態のままで止めたい
    https://chaika.hatenablog.com/entry/2016/07/06/083000 
  */
  animation-fill-mode: forwards;
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>

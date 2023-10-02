<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer id="footer">
    <div class="footer-content">
      <small>© 2020 SORA inc.</small>
      <ul class="footer-links">
        <li>
          <a href=""><i class="fab fa-fw fa-twitter"></i></a>
        </li>
        <li>
          <a href=""><i class="fab fa-fw fa-instagram"></i></a>
        </li>
        <li>
          <a href=""><i class="fab fa-fw fa-facebook-square"></i></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 4px;
  background-color: #dcdcdc;
}
.footer-content {
  text-align: center;
}

.footer-links {
  display: flex;
}
</style>

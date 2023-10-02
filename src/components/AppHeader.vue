<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});

//　親コンポーネントのmethodを読み込む
const emit = defineEmits(["MethodName"]);
const ClickElement = (i) => emit("MethodName", i);

// navItem
const navItems = [
  { id: 1, name: "Home", url: "#Home" },
  { id: 2, name: "Test1", url: "#Test1" },
  { id: 3, name: "Test2", url: "#Test2" },
];

function ToggleNav() {
  var nav = document.querySelector(".header--nav-wrapper");

  if (nav.classList.contains("close")) {
    nav.classList.remove("close");
  } else {
    nav.classList.add("close");
  }
}

window.onresize = function () {
  var windowSize = window.innerWidth;
  var nav = document.querySelector(".header--nav-wrapper");

  if (windowSize > 769) {
    nav.classList.add("close");
  }
};
</script>

<template>
  <header id="header">
    <h2 class="header--logo-title">
      {{ name }} 'S SITE
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    </h2>
    <div class="header--nav-wrapper close">
      <div class="header--toggle" @click="ToggleNav">
        <span></span>
      </div>
      <nav class="header--nav">
        <ul>
          <li v-for="navItem in navItems" :key="id" class="header--nav-item">
            <a :href="navItem.url">{{ navItem.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header--nav-pc">
      <ul>
        <li v-for="navItem in navItems" :key="id" class="header--nav-pc-item">
          <a :href="navItem.url">{{ navItem.name }}</a>
        </li>
      </ul>
    </div>
  </header>

  <!-- <button @click="ClickElement(1)" class="btn">test</button> -->
</template>

<style scoped>
#header {
  position: fixed;
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 4px;
  background-color: #dcdcdc;
}

.header--logo-title {
  margin: 0;
  font-size: 1.5rem;
  line-height: 60px;
}
.header--logo-title > a {
  height: 100%;
}

.header--nav-wrapper {
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 80%;
  transition: 0.8s;
  font-size: 1.2rem;
}
.header--nav-wrapper > ul {
  height: 100%;
  padding: 0;
  list-style: none;
}
.header--nav-wrapper .header--nav {
  flex: 1;
  padding: 30px;
  background-color: var(--color-nav-background);
}
.header--nav-wrapper .header--nav-item {
  position: relative;
  padding: 9px 15px 10px 0;
  border-bottom: 1px solid var(--color-nav-span-background);
}
.header--nav-wrapper .header--nav-item::before {
  position: absolute;
  top: 16px;
  right: 11px;
  width: 7px;
  height: 7px;
  content: "";
  transform: rotate(45deg);
  border-top: solid 2px #ffffff;
  border-right: solid 2px #ffffff;
}

/* ハンバーガメニュー */
.header--toggle {
  position: relative;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: var(--color-nav-background);
}

.header--toggle span,
.header--toggle span:before,
.header--toggle span:after {
  position: absolute;
  display: block;
  width: 25px;
  height: 3px;
  content: "";
  transition: 0.3s;
  border-radius: 3px;
  background-color: var(--color-nav-span-background);
}

.header--toggle > span {
  background-color: transparent;
}

.header--toggle span:before {
  bottom: 0;
  transform: rotate(45deg);
}

.header--toggle span:after {
  top: 0;
  transform: rotate(-45deg);
}

/* 閉じた時 */
.header--nav-wrapper.close {
  right: calc(-80% + 60px);
}
.header--nav-wrapper.close .header--toggle > span {
  background-color: var(--color-nav-span-background);
}
.header--nav-wrapper.close .header--toggle span:before {
  bottom: 8px;
  transform: rotate(0deg);
}
.header--nav-wrapper.close .header--toggle span:after {
  top: 8px;
  transform: rotate(0deg);
}

/* PCヘッダーナビ */
.header--nav-pc {
  display: none;
  margin-left: auto;
  padding: 0 10px;
}

.header--nav-pc ul {
  display: flex;
  justify-content: end;
  height: 60px;
  margin: 0;

  -moz-column-gap: 12px;
  column-gap: 12px;
}

.header--nav-pc ul li {
  height: 100%;
  padding: 0;
}

.header--nav-pc ul li a {
  display: inline-block;
  padding: 0 24px;
  line-height: 60px;
}

.header--nav-pc ul li a:hover {
  color: var(--color-nav-span-background);
  background-color: var(--color-nav-background);
}

@media (min-width: 769px) {
  .header--nav-wrapper.close {
    right: -80%;
    opacity: 0;
  }

  .header--nav-pc {
    display: block;
  }
}
</style>

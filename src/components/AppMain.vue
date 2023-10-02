<script setup>
const skillList = [
  {
    icon: "fas fa-fw fa-code",
    name: "HTML・CSS(Sass)",
    content:
      "ECサイトパッケージ製品、全画面での既存レイアウト改善やレスポンシブ対応の実装及びレビュワーを務めました",
  },
  {
    icon: "fab fa-fw fa-js",
    name: "JavaScript・Vue.js",
    content:
      "非同期通信やアニメーション、vue.jsの画面レンダリングなどの実装可能です。",
  },
  {
    icon: "fab fa-fw fa-js",
    name: "C#",
    content:
      "業務経験のメインで利用している言語です。こちらも実装者及びレビュワーなどの経験があります",
  },
  {
    icon: "fab fa-fw fa-php",
    name: "PHP・Laravel",
    content:
      "個人開発でECサイトデモサイト、Laravelを利用して勤怠管理システムを実装しました",
  },
  {
    icon: "",
    name: "Azure",
    content:
      "Az-104というアソシエイトレベルの管理者の資格を取得しております。また業務においてはAzureRepos、AppService、Analytics、DevOps、AzureSQLServerなどを利用した経験があります。",
  },
  {
    icon: "",
    name: "DB",
    content:
      "DBはC#では、SQL Server、PHPではMySQLを利用していました。テーブルが100近いリレーショナルを意識した実装の業務経験があります",
  },
  {
    icon: "fas fa-fw fa-keyboard",
    name: "etc..",
    content:
      "Github、git、MySQL、phpmyadmin、docker、AWSなどを使用してきました",
  },
];

const workItems = [
  {
    title: "ECサイト（Leather Shop）",
    src: "/src/assets/img/app_main/leathershopimage.png",
    alt: "",
    href: "http://118.27.5.212:8080/ecsite/login.php",
    skill: "FR:HTML,CSS,JS　BE:PHP　DB:MYSQL",
    comment: "模擬ECサイトを実装しました。",
  },
  {
    title: "勤怠管理システム",
    src: "/src/assets/img/app_main/attendance_app.png",
    alt: "",
    href: "http://118.27.5.212:8000",
    skill: "FR:HTML,CSS,JS　BE:PHP(Laravel)　DB:MYSQL",
    comment: "作業時間を記録し、複数人でのトーク画面など実装しました",
  },
];
</script>

<template>
  <div class="main">
    <section id="about">
      <div class="app-main-content">
        <h2 class="app-main-title">ABOUT</h2>
        <div class="about-body app-main-body">
          <div class="about-image-container">
            <figure class="about-image">
              <img src="/src/assets/img/app_main/sora.jpeg" alt="" />
            </figure>
          </div>
          <div class="about-explanation-container">
            <p class="about-explanation-header">西村 空（にしむら そら）</p>
            <p class="about-explanation">
              ■簡単な経歴
              <br />2017年～2020年：地方公務員として勤務
              <br />2020年～：プログラマー、システムエンジニア
              <br-space />
              大手ゼネコン会社の業務システムの運用保守を通じて、要件定義から機能開発などを行いました。
              <br-space />
              ユーザ様の立場に立って、ご要望を丁寧にヒアリングさせていただき、システムで実現することに自信を持っています！
              <br-space />
              どんな案件でも誠心誠意対応させていただき、必ずご依頼主様に満足いただけるサービスを提供いたします。
              <br />
            </p>
            <p class="about-pastime-container">
              ■趣味<br />
              読書、絵を描くこと、景色の写真撮影、ボルダリング（バイク：昔はバイク(隼)に乗っていたこともありました。）
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="skill">
      <div class="app-main-content">
        <h2 class="app-main-title">SKILL</h2>
        <div class="skill-body app-main-body">
          <ul>
            <li v-for="skill in skillList" :key="id">
              <div class="skill_content">
                <h5><i :class="skill.icon"></i>{{ skill.name }}</h5>
                <p>{{ skill.content }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="work">
      <div class="app-main-content">
        <h2 class="app-main-title">WORK</h2>
        <div class="work-body app-main-body">
          <div v-for="workItem in workItems" :key="id" class="work-item">
            <h5>{{ workItem.title }}</h5>
            <div>SkilSet：{{ workItem.skill }}</div>
            <figure class="work-item-image">
              <img :src="workItem.src" alt="" />
              <a :href="workItem.href" class="work-item-link">click</a>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- 
    <section id="">
      <div class="app-main-content">
        <h2 class="app-main-title"></h2>
        <div class="app-main-body"></div>
      </div>
    </section>
    -->
  </div>
</template>

<style></style>

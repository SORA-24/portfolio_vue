# portfolio_vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Create Project

```sh
npm init vue@latest 
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

#### 開発のためのコンパイルとホットリロード

```sh
npm run dev
```

### Compile and Minify for Production

- 本番環境用のビルド実効

```sh
npm run build
```

### 本番環境用ビルドの内容の確認

- dist フォルダの内容を表示している

```sh
npm run preview
```

## Vue

 Option

### TypeScript 機能を追加

- [Vue+TypeScript】Composition APIでTypeScript入門](https://reffect.co.jp/vue/vue3-composition/)
- [【TypeScript入門】TypeScriptを実践で活用したい人向けの基本を徹底解説](https://reffect.co.jp/html/hello-typescript-tutorial/)

### JSX Support 機能を追加

- Jsの内部にhtmlを記述することができる

```JavaScript
function App() {
  return (
        <div>Hello World</div>;
        <Comprnent mag="test"></Comprnent>
  );
}
```

### Vue Router 機能を追加

- SPAを作成することができる
- /(ルート)以外にアクセスできるパスを追加することができる
  - /about にアクセスすれば about ページ、/profile にアクセスすれば profile ページを表示させるなど

```Javascript
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
```

- index.js ファイルで、routerに与えられた情報をもとに、読み込むvueファイルをルーティングすることができる

### Pinia 機能の追加

- Pinia(ピニア) は状態管理ライブラリで、複数のコンポーネントでデータを共有する場合に利用することはできます
- Vuexに取って代わる状態管理ツールとして誕生したPinia
- グローバルなデータの状態（global state）を管理する

### Vitest 機能の追加

- Unit Testing(単体テスト)を行うための機能

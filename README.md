# Nuxt3 + SCSS : LP Starter template.

## これはなに

Nuxt3 (Vue3) RC + SCSS + TypeScriptを使い、webエンジニア・ポートフォリオ風のシンプルなランディングページを実装するためのスターター・テンプレート。
<br>
<img width="1280" alt="nuxt3-scss-ts-lp-starter" src="https://user-images.githubusercontent.com/102408514/173215151-535114d7-d60a-41fa-b497-90b8a134706d.png">

## 特徴

- Nuxt3 (Vue3) ベースだが特徴的な機能は極力少なくし、jQueryからのステップアップ時に概ね理解しやすい構成
- シングルページかつレスポンシブ
- 一般的なヘッダ・コンテンツ・フッタとモバイル表示ではハンバーガーメニュー
- ハンバーガーメニュー表示時はbodyはスクロールロック
- メニューのリンクから各sectionへはスムーズ・スクロール
- ページ内のsectionごとにコンポーネント化
- ヘッダ/フッタ/メニュー/ボタン類もコンポーネント化

## デモ
https://nuxt3-scss-ts-lp-starter.netlify.app/

## セットアップ

```
git clone https://github.com/old-pgmrs-will/nuxt3_scss_simple_landingpage
cd nuxt3_scss_simple_landingpage
yarn install
yarn dev -o
```

または

```
npm install
npm run dev

# http://localhost:3000/
# にアクセス
```

## ライセンス
MIT License

## リソース
- SKILL sectionで使用しているアイコン  
https://fontawesome.com/

- プレースホルダー画像  
https://placeimg.com/

# Shorten URL generator
運用Node.js + Express框架與MongoDB Atlas雲端資料庫並部署在Heroku的縮網址服務 [【Demo Link】](https://tina-url.herokuapp.com/)

## 專案畫面

### 首頁
<img width="800" alt="index" src="https://user-images.githubusercontent.com/69742330/118943360-2015fc00-b986-11eb-81ab-bc3ef9a34737.png">

### 創造新短網址畫面
<img width="800" alt="create-link" src="https://user-images.githubusercontent.com/69742330/118943377-2310ec80-b986-11eb-881a-3e145aedf6ab.png">

## 產品功能
1. 使用者可以數入原網址，並轉換成短網址
2. 使用者若輸入重複的原網址，會提供已成立的網址
3. 使用者可以按複製紐，複製以創造的短網址
4. 若使用者未輸入任何網址，則會跳出提示請使用者輸入網址

## 環境建置與需求
+ [Node.js: v14.16.1](https://nodejs.org/en/)

## 安裝與執行步驟
打開終端機將專案下載至本地執行
```
git clone https://github.com/tinahung126/URL-Shortener.git
```
進入專案資料夾
```
cd URL-Shortener
```
安裝專案需求套件
```
npm install 
npm i nodemon
```
啟動伺服器，執行專案
```
npm run dev
```
終端機顯示 Start listening on http://localhost:3000 即成功啟動，可至 http://localhost:3000 開始使用！

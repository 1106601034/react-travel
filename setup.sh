npx create-react-app a --template typescript
cd ./a
npm install react-icons --save
npm install typescript-plugin-css-modules --save-dev
npm install antd @ant-design/icons
cd ..
mv ./a/node_modules ./
rm -r ./a
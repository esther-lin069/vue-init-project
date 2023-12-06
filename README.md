# vue-init-project

## IDE 建議安裝套件

- IDE：[VSCode](https://code.visualstudio.com/) 
- 套件：[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) 、 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin). 、 [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 專案建議 node 版本
```sh
node v18.16.1
```

## 專案建置流程（nvm use會自動調整node版本至匹配的版本）

```sh
nvm use
yarn install
```

### 專案開發流程

```sh
yarn dev
```

### Lint 專案 [ESLint](https://eslint.org/)、[Stylelint](https://stylelint.io/)

```sh
yarn lint:eslint
yarn lint:stylelint
```

### 打包

```sh
yarn build
```

# vue3BasicProjects

这是我在VUE3入门学习过程中整理的30个单页小项目, 从基础的纯html和css项目, 到使用javascript的项目, 逐渐深入. 初学者可以借此熟悉vue3的语法, 和web组件的实现思路.

单页项目都封装成一个独立的vue component, 放置在'src/components/subs'目录中.

路由切换通过@vue-router实现, 位置在'src/routes.ts'中.

依赖尽量保持简单, 对外部库如bootstrap, font-awesome, tailwindcss的使用都是通过引用cdn的方式实现.

项目搜集自网上, 主要是
[50projects50days](https://github.com/bradtraversy/50projects50days)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

# Webpack 学习文档

> 推荐资料：
>
> - [Webpack从入门到上线](https://www.cnblogs.com/yincheng/p/webpack.html)
> - [基于 Webpack4 搭建 Vue 开发环境](https://juejin.im/post/5bc30d5fe51d450ea1328877)
> - [Webpack中文文档](https://webpack.docschina.org/concepts/)

## 一、安装

1. 确保电脑上安装有 node 环境且 npm 命令可用。
2. 新建文件夹，使用`npm init`新建项目
3. 使用`npm install -g webpack webpack-cli`安装 webpack 命令
4. 项目文件夹下执行`npm install webpack webpack-cli --save-dev`进行项目脚手架安装

## 二、基础打包

1. 新建**webpack.config.js**文件，加入基础配置项目，进行 JS 打包
2. 在项目文件下执行`webpack`命令，即可以看到生成的打包文件在 dist 文件夹下




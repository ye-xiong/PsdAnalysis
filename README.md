# PsdAnalysis  PSD文件分析器 （目录下有一个PsdAnalysis Setup 0.0.1.exe安装包，直接复制到电脑安装即可使用）

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```
### 介绍

1. 本分析器使用electron-vue为主要技术栈，以element为主要UI库进行编写

2. 各页面的数据共享使用vuex进行管理

3. 使用Node.js的模块进行处理和解析

4. js部分采用ES6进行编写

5. css部分采用scss预编译

6. 布局使用Flex弹性布局



### 如何使用

1. 该分析器支持一次性分析多个文件

2. 将文件或文件夹拖拽到该分析器可获取到正确的文件路径

3. 或者直接输入文件路径，即可解析

4. 点击开始分析按钮即可开始解析，文件夹下包含的多个psd源文件的信息将直接在表格上显示

5. 点击查看各图层详情可查看该文件下的各个图层的详细信息
---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

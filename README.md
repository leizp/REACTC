# react-demo

> this is react vue+cil spa

## 环境安装

> less 和 sass 配置

``` bash
// vue cil 内置配置了less和sass，只需要安装几个使用
// sass 安装
npm install node-sass --save-dev
npm install sass-loader --save-dev

//less 安装
npm install less --save-dev
npm install less-loader --save-dev
// 安装成功以后使用：<style lang="sass/less"></style>即可
```
> postcss-config 安装

```sh
  npm install postcss-color-gray --save-dev

  #接下来在postcssrc.js安装插件
  module.exports = {
    "plugins": {
      // to edit target browsers: use "browserlist" field in package.json
      "autoprefixer": {},
      // put your plugin here
      "postcss-color-gray": {}
    }
  }
```
> 移动端flexible配置

``` bash
// 1、安装flexible

npm i lib-flexible --save

// 2、在项目入口文件main.js中引入lib-flexible


import 'lib-flexible/flexible.js'

// 3、在项目根目录的index.html 头部加入手机端适配的meta的代码

<meta name="viewport" content="width=device-width, initial-scale=1.0">

// 4、根据转换工具吧把px转为rem，（根元素设为设计图的1/10:750px---> fontSize: 75）

// 5、尽量使用sass函数转换rem，或者在vue中配置px2rem-loader（请自己配置）

<style lang="scss">
  $browser-default-font-size: 75px !default; // sass 跟聚设计图定义默认rem更元素，设计图的1/10
  //sass px 转rem函数
  @function px2rem($px){//$px为需要转换的字号
    @return $px / $browser-default-font-size * 1rem;
  }
  .tree {
    width: px2rem(750px);
    height: px2rem(1234px);
    border: solid 1px red;
    box-sizing: border-box;
  }
</style>
```

>点击延迟

```bash
npm install fastclick --save
#在main.js 中引入
const FastClick = require('fastclick')
FastClick.attach(document.body) // 解决点击延迟问题
```
> 为了兼容低版本浏览器，请引入· es6-promise

```sh
npm install es6-promise --save

#然后在main.js 中
require('es6-promise').polyfill()
```

>引入axios 请求数据

```sh
npm install axios --save
# 在需要用到的页面中引入
import axios from 'axios'
```


## 使用命令

```bash
# install all this dependencies.
npm install

# development, default port: 8080
npm run dev

# production
npm run build

# build with report
npm run build --report

# lint the files
npm run lint

# run the tests
npm test
```



import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'

import Header from './components/Header/Header.vue'
//定义全局组件(所有组件都可以看到) 组件引入不能使用先注册，就是指定标签名
Vue.component('Header',Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  /* 非回调函数的特点：我们自己调用，自己指定函数的形参变量对应的实参数据
  回调函数，特点：不是我们调用，形参变量不由我们定义，所以需要我们根据形参变量来定义实参数据
  形参变量是个函数，接收一个组件

  箭头函数的箭头有两个作用：
  1.定义一个匿名函数（必然有的）
  2.(有可能有的return的作用)
    箭头右边紧跟大括号就没有renturn的作用，
    箭头右边没有紧跟大括号就有renturn的作用
  */
// render函数接收一个函数参数，返回的是函数参数返回的结果
  // render:createElement => createElement(App)  //createElement创建元素，模板的标签名App
  render:h => h(App),
  router,//配置路由
  Header
})
/* 
  组件间通信的方式
   props：函数数据(子向父)    非函数数据(父向子)
   slot：插槽   父向子传递数据  
   {{}}： 插值   通过写标签的时候通过属性传过去

   注册组件
    局部注册  component:{}
    全局注册  在入口文件中
*/
/* 
使用git进行管理
 git init
 git add .
 git commit -m "init"
 git status 状态
 连接远程仓库git remote add origin https://github.com/Jun-1125/0218my-project.git
  git push origin master 远程没有直接建立一个master分支
  再建立一个分支   git checkout -b dev   -b是根据当前分支建立dev分支，然后再建立dev
  git push origin dev 远程也建立一个新的分支dev，然后同步本地的dev分支
  如果想要克隆远程的仓库的话，是只有一个master分支，需要本地再建立一个dev分支才可以pull origin dev 
 
*/
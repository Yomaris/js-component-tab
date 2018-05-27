# js-component-tab
实现面向对象的方式实现 Tab 组件

## 组件功能
点击tab，实现页面的切换

## 组件实现方式
1. init函数中初始化变量
2.bind函数绑定事件：点击时给头部当前 index 加上 “active” 的样式，并且去除掉其它 li 已有的 “active”样式。
将身体当前 index 显示出来，并且隐藏兄弟 li 元素。
## 如何使用
用new方法构造函数，例如页面中有三个切换tab，则需要构建三个函数
```javascript
var tab1 = new Tab(document.querySelectorAll('.tab')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab')[1]);
var tab2 = new Tab(document.querySelectorAll('.tab')[2]);
```

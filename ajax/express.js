// 1. 引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('我现在大四了 刚学会火球术 是不是废了');

});
app.post('/',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('若黯夜降临 吾必当立于万万人之前 横刀相渊 血染天穹');

});

//针对ie缓存
app.get('/ie',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('这个是ie的缓存'); //send 只能接收字符串类型

});

//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    //3秒后开始响应
    setTimeout(()=>{
        response.send('延时响应'); //send 只能接收字符串类型
    },3000)
   

});
 //all可以接收任意类型的请求
app.all('/json',(request,response)=>{
    //设置响应头，设置允许跨域。CORS方式跨域很方便加个响应头就行
    //还有一个JSONP跨域方式，比较，麻烦，不推荐用
    response.setHeader('Access-Control-Allow-Origin','*'); 
    //设置响应
    const apple = {
      name : "陈子文",
      age : 22 ,
      sex : "男"
    }

    let json = JSON.stringify(apple);
    response.send(json); //send 只能接收字符串类型
})

//4. 监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已启动，8000端口监听中...")
})

//激活自动刷新服务器 
//第一步    npm install -g nodemon
//第二步    nodemon express.js


//前端ajax请求方式

/*form表单、ifream、刷新页面
Ajax - 异步网络请求的开山鼻祖
jQuery - 一个时代
fetch - Ajax的替代者
axios、request等众多开源库 */
const express=require('express');

const stuRouter=require('./route/stu.js');
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
//托管静态资源到public
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));
//路由器使用:放最后
app.use('/stu',stuRouter);
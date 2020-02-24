const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
let router=express.Router();
//1.用户注册 post /reg
router.post('/reg', (req, res)=>{
	let obj = req.body;
console.log(obj);
pool.query('insert into reg set ?', [obj], (err, result)=>{
	if(err) throw err;
if(result.affectedRows>0) res.send('1');
});
});
//1.登录 get
router.get("/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	console.log($uname);
	var sql="select * from reg where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//2.获取所有用户 
router.get("/list",(req,res)=>{
	var sql="select * from person";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});



//3.根据id删除用户
router.delete("/deluser/:id",(req,res)=>{
	var $id=req.params.id;
	var sql="delete from person where id=?";
	pool.query(sql,[$id],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//4.根据id查询用户
router.get("/searchuser/:id",(req,res)=>{
	var $id=req.params.id;
	var sql="select * from person where id=?";
	pool.query(sql,[$id],(err,result)=>{
		if(err) throw err;
		res.send(result[0]);
	});
});
//5.根据id修改用户
router.put("/update",(req,res)=>{
	var obj=req.body;
console.log(obj)
	var sql="update person set ? where id=?";
	pool.query(sql,[obj,obj.id],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//导出路由器
module.exports=router;
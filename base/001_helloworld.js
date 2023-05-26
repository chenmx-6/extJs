//Ext.onReady 准备函数 类似于window.onload
Ext.onReady(function(){
	
	//提示信息
	Ext.MessageBox.alert('我是标题!' , 'Hello World!' , function(){
		console.info(this);
		alert('我是回调函数!');
	} , this);

	// Ext.Msg.alert('提示信息','ExtJS!!!');
	// alert('执行');
	
	
	//询问框
	Ext.Msg.confirm('提示信息','确认删除该条记录么?',function(op){
			// yes  on
			if(op == 'yes'){
				alert('确认了!');
			} else {
				alert('取消了!');
			}
	});


	//输入框
	//String title, String msg, [Function fn], [Object scope], [Boolean/Number multiline], [String value]
	Ext.Msg.prompt('我是标题!','请输入姓名:' , function(op , val){
		//op  ok cancel
		console.info(op);
		console.info(val);
	} , this , true , '张三');

	//等待框 
	Ext.Msg.wait('提示信息','我是内容' ,{
		   interval: 400, 			//循环定时的间隔
		   duration: 2000,			//总时长
		   increment: 5,			//执行进度条的次数
		   text: '更新中,请稍后...',	//进度条上的文字
		   scope: this,
		   fn: function(){
				alert('更新成功!');
		   },
		   animate:true				//更新渲染时提供一个动画效果
	});

	//show方法
	// Ext.Msg.show({
	// 	title:'我是自定义的提示框!!' , 
	// 	msg:'我是内容!!' , 
	// 	width:300 , 
	// 	height:300 ,
	// 	buttons:Ext.Msg.YESNOCANCEL ,
	// 	icon:Ext.Msg.WARNING		// ERROR INFO QUESTION  WARNING
	// });



	
	
	
});
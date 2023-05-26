Ext.onReady(function(){

	
	//ex003:用windowGroup对象去操作多个window窗口
	var wingroup = new Ext.WindowGroup();
	for(var i = 1 ; i <=5;i++){
		var win = Ext.create('Ext.Window',{
			title:'第' + i + '个窗口' , 
			id:'win_' + i , 
			width:300 , 
			height:300 ,
			renderTo:Ext.getBody()
		});
		win.show();
		wingroup.register(win);		//把窗体对象注册给ZindexManger
	}
	
	var btn1 = Ext.create('Ext.button.Button',{
		text:'全部隐藏' , 
		renderTo:Ext.getBody(),
		handler:function(){
			wingroup.hideAll();		//隐藏所有被管理起来的window组件
		}
	});
	
	var btn2 = new Ext.button.Button({
		text:'全部显示' , 
		renderTo:Ext.getBody(),
		handler:function(){
			wingroup.each(function(cmp){
				cmp.show();
			});
		}		
	});
	
	var btn3 = new Ext.button.Button({
		text:'把第三个窗口显示在最前端' , 
		renderTo:Ext.getBody(),
		handler:function(){
			wingroup.bringToFront('win_3'); //把当前的组件显示到最前端
		}		
	});	
	
	
	var btn4 = new Ext.button.Button({
		text:'把第五个窗口显示在最末端' , 
		renderTo:Ext.getBody(),
		handler:function(){
			wingroup.sendToBack('win_5');	//把当前的组件显示到最后
		}		
	});		
	
	
});
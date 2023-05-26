Ext.onReady(function(){

	//ex001:点击一个按钮 ,打开一个新的窗体 window重复创建的问题
	//第一种实现
	//JQuery code: var btn = $('#btn'); var dombtn = btn.get(0);
	// var btn = Ext.get('btn');		//这个元素是经过Ext包装的一个Ext的Dom对象//alert(btn.dom.value);
	// btn.on('click',function(){
	// 	if(!Ext.getCmp('mywin')){      //获取不到时再创建
	// 		Ext.create('Ext.window.Window',{
	// 			id:'mywin' ,		//如果你给组件加了一个id  那么这个组件就会被Ext所管理
	// 			title:'新窗体' , 
	// 			height:300 ,
	// 			width:400 ,
	// 			renderTo:Ext.getBody() //,
	// 			//modal:true  //模态，避免点击外面
	// 		}).show();		
	// 	}
	// });
	
	//第二种实现 较浪费内存资源
	var win = Ext.create('Ext.window.Window',{
				title:'新窗体' , 
				height:300 ,
				width:400 ,
				renderTo:Ext.getBody() ,
				closeAction:'hide'  //closeAction默认是destroy 
	});
	
	Ext.get('btn').on('click',function(){
			win.show();
	});
	
	
	
	
	
	
});
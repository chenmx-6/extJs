Ext.onReady(function () {

	//Ext.create方法相当于创建一个实例对象
	Ext.create('Ext.window.Window', {
		title: '我的第一个组件,window',
		width: 400, 	//Number型  也可以是字符串类型  width: '90%'
		height: 300,
		layout: 'fit',
		constrain: true,		//限制窗口不超出浏览器边界
		modal: true,			//设置一个模态窗口
		//plain:true ,
		icon: 'js/extjs/icons/used/browser_window.png',				//字符串参数,图片的路径
		//iconCls:'' ,   		//CSS样式
		x: 50,
		y: 50,
		autoScroll: true,		//添加滚动条
		html: '<div style=width:200px;height:200px>我是一个div</div><div style=width:200px;height:200px>我是第二个div</div>',
		//constrainHeader:true,	//不允许该窗口的title超出浏览器边界
		// renderTo:Ext.getBody()	//新创建的组件 渲染到什么位置
	}).show();








});
Ext.onReady(function(){

	
	//ex002 : 在组件中添加子组件  ,并进行一系列针对于组件的操作
	
	//在组件中添加子组件：
// 	var win = new Ext.window.Window({
// 		title:"添加子组件实例" , 
// 		width:'40%' ,
// 		height:400 , 
// 		renderTo:Ext.getBody() ,
// 		draggable:false , 	//不允许拖拽
// 		resizable:false , 	//不允许改变窗口大小
// 		closable:false, 	//不显示关闭按钮
// 		collapsible:true ,	//显示折叠按钮
// 		bodyStyle: 'background:#ffc; padding:10px;' , // 设置样式
// 		html:'我是window的内容!!' ,
// 		//Ext items(array) 配置子组件的配置项
// 		items:[{
// 			//Ext的组件 给我们提供了一个简单的写法	 xtype属性去创建组件 建议使用xtype
// 			xtype:'panel',
// 			width:'50%',
// 			height:100 ,
// 			html:'我是面板'
// 		},
// 		new Ext.button.Button({
// 			text:'我是按钮' , 
// 			handler:function(){
// 				alert('执行!!');
// 			}
// 		})
// //		{
// //			xtype:'button' , 
// //			text:'我是按钮',
// //			handler:function(btn){
// //				alert('我被点击了');
// //				alert(btn.text);
// //			}
// //		}
// 		]
		
// 	});
// 	win.show();	
	
	var win = new Ext.Window({ //可简写
		id:'mywin' ,
		title:'操作组件的形式' ,
		width:500 , 
		height:300 , 
		renderTo:Ext.getBody() , 
		//表示在当前组件的top位置添加一 个工具条
		bbar:[{			//bbar(bottom) lbar(leftbar)  rbar(rightbar)  fbar(footbar)
			text:'按钮1' ,
			handler:function(btn){
				//组件都会有 up、down 这两个方法(表示向上、或者向下查找) 需要的参数是组件的xtype或者是选择器
				alert(btn.up('window').title);
			}
		},{
			text:'按钮2' , 
			handler:function(btn){
				//最常用的方式
				alert(Ext.getCmp('mywin').title);
			}
		},{
			text:'按钮3' ,
			handler:function(btn){
				//以上一级组件的形式去查找 OwnerCt
				//console.info(btn.ownerCt);
				alert(btn.ownerCt.ownerCt.title);
			}			
		}]		
	});
	win.show();





	Ext.create('Ext.data.Store', {
		storeId:'employeeStore',
		fields:['firstname', 'lastname', 'seniority', 'dep', 'hired'],
		data:[
			{firstname:"Michael", lastname:"Scott"},
			{firstname:"Dwight", lastname:"Schrute"},
			{firstname:"Jim", lastname:"Halpert"},
			{firstname:"Kevin", lastname:"Malone"},
			{firstname:"Angela", lastname:"Martin"}
		]
	});
	
	Ext.create('Ext.grid.Panel', {
		width:'80%',
		title: 'Action Column Demo',
		store: Ext.data.StoreManager.lookup('employeeStore'),
		columns: [
			{text: 'First Name',  dataIndex:'firstname'},
			{text: 'Last Name',  dataIndex:'lastname'},
			{
				text:'action',
				xtype:'actioncolumn',
				width:50,
				dataIndex:'firstname',
				items: [{
					icon: './js/extjs/examples/restful/images/delete.png',
					// Use a URL in the icon config
					tooltip: 'Edit',
					handler: function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
						alert("Edit " + rec.get('firstname'));
					}
				},{
					icon: './js/extjs/examples/restful/images/delete.png',
					tooltip: 'Delete',
					handler: function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
						alert("Terminate " + rec.get('firstname'));
					}
				}]
			}
		],
		// width: 250,
		renderTo: Ext.getBody()
	}).show();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
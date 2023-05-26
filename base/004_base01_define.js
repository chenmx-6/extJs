Ext.onReady(function(){
	
	//第12讲:config、constructor
	/*
	//在Ext中如何去定义一个类: Ext.define(className , properties , callback)
	Ext.define('Person',{
		//这里是对于这个类的一些配置信息
		//config属性 就是配置当前类的属性内容,并且会加上get和set方法
		config:{
			name:'z3' , 
			age: 20
		},
		//自己定义的方法
		say:function(){
			alert('我是方法...');
		},
		//给当前定义的类加一个构造器 ,目的就是为了初始化信息
		constructor:function(config){
			var me = this ;
//			for(var attr in config){
//				alert(attr + " : " + config[attr]);
//			}
			me.initConfig(config);	// 真正的初始化传递进来的参数
		}
	});
	
	//Ext.create 实例化一个对象
	var p = Ext.create('Person',{
		name:'王五' , 
		age:30
	});
	alert(p.getName());
	alert(p.getAge());
	p.say();
	*/
	
	
	
	//第13讲:extend 
	
	//Ext的继承代码
	/**
	//Sup Class
	Ext.define('Person',{
		config:{
			name:'bjsxt'
		} ,
		constructor:function(config){
			var me = this ;
			me.initConfig(config);
		}
	});
	//Sub Class
	Ext.define('Boy',{
		//使用Ext的继承
		extend:'Person',
		config:{
			sex:'男',
			age:20
		}
	});
	var b = Ext.create('Boy',{
		name:'张三',
		age:25
	});
	alert(b.name);
	alert(b.sex);
	alert(b.age);
	
	*/
	
	
	//javascript : prototype(原型)  :所有类的实例对象所共享
	/**
	 
	function Person(name){
		this.name = name; 
		//this.sayName = sayName ;
	};
//	function sayName(){
//		alert(this.name);
//	};
	Person.prototype.sayName = function(){
		alert(this.name);
	};
	
	var p1  = new Person('张三');
	p1.sayName();
	var p2  = new Person('李四');
	p2.sayName();	
	alert(p1.sayName == p2.sayName);
 
	*/




	//javascript : prototype(原型)  :实现继承
	/**
	
	//SupClass
	var Person = function(name){
		this.name = name; 
	};
	//alert(Person.prototype.constructor);		//原型对象的构造器,默认是当前的类的模板
	//SupClass prototype object
	Person.prototype = {
		constructor:Person ,
		id:100
	};
	
	//SubClass
	var Boy = function(name,sex,age){
		//借用构造函数继承的方式
		Person.call(this,name);
		this.sex = sex ;
		this.age = age ;
	};
	
	//实现原型继承: 继承了父类的模板和父类的原型对象
	//Boy.prototype = new Person();
	//自己实现extend的方法
	function myextend(sub , sup){
	        var F = function() {},		//定义一个空函数做为中转函数
	            subclassProto,			//子类的原型对象
	            superclassProto = sup.prototype;	//把父类的原型对象 交给了superclassProto变量
	
	        F.prototype = superclassProto;	// 做中转的位置：把父类的原型对象 赋值给了 F这个空函数的原型对象
	        subclassProto = sub.prototype = new F();	//进行原型继承
	        subclassProto.constructor = sub;		//还原构造器
	        sub.superclass = superclassProto;		//做了一个保存,保存了父类的原型对象
			//目的是为了防止你大意了
	        if (superclassProto.constructor === Object.prototype.constructor) {
	            superclassProto.constructor = sup;
	        }	
	};
	myextend(Boy ,Person);
	var b = new Boy('李四','男',25);
	alert(b.name);
	alert(b.sex);
	alert(b.id);
	
	*/
	
	
	//第14讲:Ext.define 其他配置项
	
	
	//别名、备用名
	/**
	Ext.define("User",{
		config:{
			name:'bjsxt111' , 
			age:100
		},
		alias:'uu' ,//起别名	底层代码在Ext.ClassManger
		alternateClassName:'uuu',	//给当前类一个备用名 底层代码在Ext.ClassManger
		constructor:function(config){
			var me = this;
			me.initConfig(config);
		}
	});
	 
	var u = Ext.create('uuu');
	alert(u.name);
	alert(u.age);
	*/
	
	
	//statics(子类不能继承) inheritableStatics(子类可以继承) 给当前类定义静态方法或属性
	
	/**
	Ext.define('Person',{
		config:{
			name:'我是父类'
		},
		statics:{	//静态的方法或属性
			static_id:'我是Person的id,不能被子类所继承!!'
		},
		inheritableStatics:{	//静态的方法或属性
			inheritableStatics_id:'我是Person的id,我可以被子类继承!!'
		},
		constructor:function(config){
			var me = this;
			me.initConfig(config);
		}
	});
	
	//一定注意:!!!!!//实例对象是无法使用静态属性或方法的
	//var p = Ext.create('Person');
	//alert(p.static_id);	
	//用类名去使用静态属性:!!!!
//	alert(Person.static_id);
//	alert(Person.inheritableStatics_id);
	
	Ext.define('User',{
		extend:'Person' , 
		config:{
			age:20
		}
	});
	alert(User.static_id);
	alert(User.inheritableStatics_id);
	
	*/
	
	//mixins 混合的配置项,可以多继承的配置
	
	/**
	Ext.define("Sing",{
		canSing:function(){
			alert('cansing...');
		}
	});
	Ext.define("Say",{
		canSay:function(){
			alert('cansay...');
		}
	});	
	Ext.define('User',{
		mixins:{
			sing:"Sing" , 
			say:"Say"
		}
	});
	
	var u = Ext.create("User");
	u.canSay();
	u.canSing();
	*/
	
	
	
	//^_^伪代码说明： requires 和 uses 以及  singleton
	/**
	Ext.define('MyComponent',{
		//可能需要Ext或者是其他的类做支持
		//requires加载需要的类时机是：当前类初始化之前被加载
		//requires:['Ext.window.Window','Ext.button.Button'] 
		//uses加载需要的类时机是：当前类初始化之后被加载
		//uses:['Ext.form.Panel','Ext.grid.Panel']
		//singleton:true	//当前的类就被当做一个单例对象
	});
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
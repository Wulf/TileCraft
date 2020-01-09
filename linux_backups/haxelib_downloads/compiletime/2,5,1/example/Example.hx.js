(function () { "use strict";
var $hxClasses = {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var CompileTime = function() { };
$hxClasses["CompileTime"] = CompileTime;
CompileTime.__name__ = true;
var CompileTimeClassList = function() { };
$hxClasses["CompileTimeClassList"] = CompileTimeClassList;
CompileTimeClassList.__name__ = true;
CompileTimeClassList.get = function(id) {
	if(CompileTimeClassList.lists == null) CompileTimeClassList.initialise();
	return CompileTimeClassList.lists.get(id);
};
CompileTimeClassList.getTyped = function(id,type) {
	return CompileTimeClassList.get(id);
};
CompileTimeClassList.initialise = function() {
	CompileTimeClassList.lists = new haxe.ds.StringMap();
	var m = haxe.rtti.Meta.getType(CompileTimeClassList);
	if(m.classLists != null) {
		var _g = 0;
		var _g1 = m.classLists;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			var array = item;
			var listID = array[0];
			var list = new List();
			var _g2 = 0;
			var _g3 = array[1].split(",");
			while(_g2 < _g3.length) {
				var typeName = _g3[_g2];
				++_g2;
				var type = Type.resolveClass(typeName);
				if(type != null) list.push(type);
			}
			CompileTimeClassList.lists.set(listID,list);
		}
	}
};
var Example = function() { };
$hxClasses["Example"] = Example;
Example.__name__ = true;
Example.main = function() {
	var date = new Date(2014,8,18,10,23,14);
	var dateAsString = "2014-09-18 10:23:14";
	var file = "Compile Time\n============\n\nSimple Haxe Macro Helpers that let you do or get things at compile-time. \n\nUsage\n-----\n\n```haxe\n// Compile date and time\n\nvar date = CompileTime.buildDate();\t\t\t\t\t\t// Equivalent of writing `new Date(2012,11,25,20,48,15);`\nvar dateAsString = CompileTime.buildDateString();\t\t// A string saying \"2012-12-25 20:48:15\"\n\n// Read a file\n\nvar file = CompileTime.readFile(\"README.md\"); // will be compiled as an ordinary string in your code\n\n// Read a file and use String Interpolation\n\nvar name=\"Jason\", age=25;\nvar greeting = CompileTime.interpolateFile(\"test.txt\"); \n\t// Reads the contents of test.txt, and interpolates local values, similar to single quote string interpolation\n\t// Same as writing greeting = 'Hello my name is $name and I am ${age-5} years old'\n\t// Result will be \"Hello my name is Jason and I am 20 years old\";\n\n// Import a whole package to make sure it's included in compilation.  Does not affect dead-code-elimination.\n\nCompileTime.importPackage(\"server.controllers\");\n\n// Read a file, and check it is valid XML.  Will give a compile time error if it's not XML.\n\nvar xmlString = CompileTime.readXmlFile(\"haxelib.xml\");\t// Will insert it as a String.  \nXml.parse(xmlString);\n\n// Read a file, and check it is valid JSON.  Will give a compile time error if it's not valid Json.\n\nvar jsonString = CompileTime.readJsonFile(\"test.json\"); // Inserts the contents of text.json as a String\n\n// Parse the JSON file, so it is inserted as an object declaration into the code.\n// This has the added benefit of giving you compile time typing and autocompletion.\n\nvar jsonObject = CompileTime.parseJsonFile(\"test.json\"); \nvar typedJsonObject:Person = CompileTime.parseJsonFile(\"test.json\"); // Same as above, but check the result matches a typedef\n\n// Read a markdown file, convert to HTML and check the result is valid XML.  Will give a compile time error if it doesn't validate.\n\nvar htmlString = CompileTime.readMarkdownFile(\"test.md\");\t// Will insert it as a HTML String.  \nXml.parse(htmlString);\n\n// Get lists of classes that have been compiled\n\n// Returns a list of all the classes in the \"my.package\" package, including sub-packages\nCompileTime.getAllClasses(\"my.package\");\n\n// Returns a list of only the classes in the \"my.package\" package, so not including sub-packages\nCompileTime.getAllClasses(\"my.package\", false);\n\n// Returns a list of all the classes that inherit MySuperClass, no matter what package\nCompileTime.getAllClasses(MySuperClass);\n\n// Returns a list of all the classes in the \"my.package\" package that inherit MySuperClass.\nCompileTime.getAllClasses(\"my.package\", MySuperClass);\n\n// Returns a list of all the classes that implement MyInterface, no matter what package.\nCompileTime.getAllClasses(MyInterface);\n\n// Returns a list of all the classes in the \"my.package\" package that implement MyInterface.\nCompileTime.getAllClasses(\"my.package\", MyInterface);\n\n```\n";
	var name = "Jason";
	var age = 25;
	var greeting = "Hello my name is " + name + " and I am " + (age - 5) + " years old";
	var xmlString = "<xml>\n\t<title valid=\"true\">My Title</title>\n</xml>";
	var markdownHTML = "<h1>Welcome</h1>\n<p><strong>This is the future.</strong> I hope you like it.</p>";
	var jsonString = "{\n\t\"name\": \"Jason\",\n\t\"age\": 26,\n\t\"pets\": [\"Theo\", \"Darcy\", \"Calamity\"]\n}";
	var jsonObject_age = 26;
	var jsonObject_pets = ["Theo","Darcy","Calamity"];
	var jsonObject_name = "Jason";
	var typedJsonObject_age = 26;
	var typedJsonObject_pets = ["Theo","Darcy","Calamity"];
	var typedJsonObject_name = "Jason";
	Example.myObj;
	var allClasses = CompileTimeClassList.get("null,true,");
	Example.assert(Lambda.count(allClasses) > 10,{ fileName : "Example.hx", lineNumber : 37, className : "Example", methodName : "main"});
	var packClasses = CompileTimeClassList.get("pack,true,");
	Example.assertEquals(10,Lambda.count(packClasses),{ fileName : "Example.hx", lineNumber : 40, className : "Example", methodName : "main"});
	var packClassesOnly = CompileTimeClassList.get("pack,false,");
	Example.assertEquals(2,Lambda.count(packClassesOnly),{ fileName : "Example.hx", lineNumber : 43, className : "Example", methodName : "main"});
	var packSub1Classes = CompileTimeClassList.get("pack.sub1,true,");
	Example.assertEquals(4,Lambda.count(packSub1Classes),{ fileName : "Example.hx", lineNumber : 46, className : "Example", methodName : "main"});
	var packSub2Classes = CompileTimeClassList.get("pack.sub2,true,");
	Example.assertEquals(4,Lambda.count(packSub2Classes),{ fileName : "Example.hx", lineNumber : 49, className : "Example", methodName : "main"});
	var baseAClasses = CompileTimeClassList.get("null,true,pack.BaseA");
	Example.assertEquals(4,Lambda.count(baseAClasses),{ fileName : "Example.hx", lineNumber : 52, className : "Example", methodName : "main"});
	var baseBClasses = CompileTimeClassList.get("null,true,pack.BaseB");
	Example.assertEquals(4,Lambda.count(baseBClasses),{ fileName : "Example.hx", lineNumber : 55, className : "Example", methodName : "main"});
	var baseBClasses1 = CompileTimeClassList.get("null,true,pack.BaseB");
	Example.assertEquals(4,Lambda.count(baseBClasses1),{ fileName : "Example.hx", lineNumber : 58, className : "Example", methodName : "main"});
	var baseBPackSub1Classes = CompileTimeClassList.get("pack.sub1,true,pack.BaseB");
	Example.assertEquals(2,Lambda.count(baseBPackSub1Classes),{ fileName : "Example.hx", lineNumber : 61, className : "Example", methodName : "main"});
	var $it0 = baseBPackSub1Classes.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		var o = Type.createInstance(c,[]);
		haxe.Log.trace(o.b,{ fileName : "Example.hx", lineNumber : 66, className : "Example", methodName : "main"});
	}
	var interfaceCClasses = CompileTimeClassList.get("null,true,pack.InterfaceC");
	Example.assertEquals(6,Lambda.count(interfaceCClasses),{ fileName : "Example.hx", lineNumber : 70, className : "Example", methodName : "main"});
	var interfaceCClasses1 = CompileTimeClassList.get("pack.sub1,true,pack.InterfaceC");
	Example.assertEquals(3,Lambda.count(interfaceCClasses1),{ fileName : "Example.hx", lineNumber : 73, className : "Example", methodName : "main"});
};
Example.assertEquals = function(expected,actual,pos) {
	if(expected != actual) haxe.Log.trace("Failure (Expected " + Std.string(expected) + ", actual " + Std.string(actual) + ")",pos);
};
Example.assert = function(condition,pos) {
	if(condition == false) haxe.Log.trace("Failure",pos);
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = true;
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = true;
List.prototype = {
	push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = true;
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
var haxe = {};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = true;
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
};
haxe.rtti = {};
haxe.rtti.Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe.rtti.Meta;
haxe.rtti.Meta.__name__ = true;
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	if(meta == null || meta.obj == null) return { }; else return meta.obj;
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = true;
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var pack = {};
pack.BaseA = function() {
	this.a = "Base";
};
$hxClasses["pack.BaseA"] = pack.BaseA;
pack.BaseA.__name__ = true;
pack.InterfaceC = function() { };
$hxClasses["pack.InterfaceC"] = pack.InterfaceC;
pack.InterfaceC.__name__ = true;
pack.BaseB = function() {
	this.b = "Base";
};
$hxClasses["pack.BaseB"] = pack.BaseB;
pack.BaseB.__name__ = true;
pack.BaseB.__interfaces__ = [pack.InterfaceC];
pack.sub1 = {};
pack.sub1.Sub1TypeANumber1 = function() {
	pack.BaseA.call(this);
	this.a = "sub1.1";
};
$hxClasses["pack.sub1.Sub1TypeANumber1"] = pack.sub1.Sub1TypeANumber1;
pack.sub1.Sub1TypeANumber1.__name__ = true;
pack.sub1.Sub1TypeANumber1.__interfaces__ = [pack.InterfaceC];
pack.sub1.Sub1TypeANumber1.__super__ = pack.BaseA;
pack.sub1.Sub1TypeANumber1.prototype = $extend(pack.BaseA.prototype,{
});
pack.sub1.Sub1TypeANumber2 = function() {
	pack.BaseA.call(this);
	this.a = "sub1.2";
};
$hxClasses["pack.sub1.Sub1TypeANumber2"] = pack.sub1.Sub1TypeANumber2;
pack.sub1.Sub1TypeANumber2.__name__ = true;
pack.sub1.Sub1TypeANumber2.__super__ = pack.BaseA;
pack.sub1.Sub1TypeANumber2.prototype = $extend(pack.BaseA.prototype,{
});
pack.sub1.Sub1TypeBNumber1 = function() {
	pack.BaseB.call(this);
	this.b = "sub1.1";
};
$hxClasses["pack.sub1.Sub1TypeBNumber1"] = pack.sub1.Sub1TypeBNumber1;
pack.sub1.Sub1TypeBNumber1.__name__ = true;
pack.sub1.Sub1TypeBNumber1.__super__ = pack.BaseB;
pack.sub1.Sub1TypeBNumber1.prototype = $extend(pack.BaseB.prototype,{
});
pack.sub1.Sub1TypeBNumber2 = function() {
	pack.BaseB.call(this);
	this.b = "sub1.2";
};
$hxClasses["pack.sub1.Sub1TypeBNumber2"] = pack.sub1.Sub1TypeBNumber2;
pack.sub1.Sub1TypeBNumber2.__name__ = true;
pack.sub1.Sub1TypeBNumber2.__super__ = pack.BaseB;
pack.sub1.Sub1TypeBNumber2.prototype = $extend(pack.BaseB.prototype,{
});
pack.sub2 = {};
pack.sub2.Sub2TypeANumber1 = function() {
	pack.BaseA.call(this);
	this.a = "sub2.1";
};
$hxClasses["pack.sub2.Sub2TypeANumber1"] = pack.sub2.Sub2TypeANumber1;
pack.sub2.Sub2TypeANumber1.__name__ = true;
pack.sub2.Sub2TypeANumber1.__super__ = pack.BaseA;
pack.sub2.Sub2TypeANumber1.prototype = $extend(pack.BaseA.prototype,{
});
pack.sub2.Sub2TypeANumber2 = function() {
	pack.BaseA.call(this);
	this.a = "sub2.2";
};
$hxClasses["pack.sub2.Sub2TypeANumber2"] = pack.sub2.Sub2TypeANumber2;
pack.sub2.Sub2TypeANumber2.__name__ = true;
pack.sub2.Sub2TypeANumber2.__super__ = pack.BaseA;
pack.sub2.Sub2TypeANumber2.prototype = $extend(pack.BaseA.prototype,{
});
pack.sub2.Sub2TypeBNumber1 = function() {
	pack.BaseB.call(this);
	this.b = "sub2.1";
};
$hxClasses["pack.sub2.Sub2TypeBNumber1"] = pack.sub2.Sub2TypeBNumber1;
pack.sub2.Sub2TypeBNumber1.__name__ = true;
pack.sub2.Sub2TypeBNumber1.__super__ = pack.BaseB;
pack.sub2.Sub2TypeBNumber1.prototype = $extend(pack.BaseB.prototype,{
});
pack.sub2.Sub2TypeBNumber2 = function() {
	pack.BaseB.call(this);
	this.b = "sub2.2";
};
$hxClasses["pack.sub2.Sub2TypeBNumber2"] = pack.sub2.Sub2TypeBNumber2;
pack.sub2.Sub2TypeBNumber2.__name__ = true;
pack.sub2.Sub2TypeBNumber2.__super__ = pack.BaseB;
pack.sub2.Sub2TypeBNumber2.prototype = $extend(pack.BaseB.prototype,{
});
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
Date.__name__ = ["Date"];
CompileTimeClassList.__meta__ = { obj : { classLists : [["null,true,","Array,CompileTime,CompileTimeClassList,Date,Example,HxOverrides,IntIterator,Lambda,List,_Map.Map_Impl_,Math,Reflect,String,Std,StringBuf,StringTools,Type,haxe.EnumTools,haxe.EnumValueTools,haxe.Json,haxe.Log,haxe.ds.BalancedTree,haxe.ds.TreeNode,haxe.ds.EnumValueMap,haxe.ds._HashMap.HashMap_Impl_,haxe.ds.IntMap,haxe.ds.ObjectMap,haxe.ds.StringMap,haxe.ds.WeakMap,haxe.macro.Context,haxe.macro.Error,haxe.macro.Format,haxe.rtti.Meta,js.Boot,pack.BaseA,pack.BaseB,pack.sub1.Sub1TypeANumber1,pack.sub1.Sub1TypeANumber2,pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2,pack.sub2.Sub2TypeANumber1,pack.sub2.Sub2TypeANumber2,pack.sub2.Sub2TypeBNumber1,pack.sub2.Sub2TypeBNumber2"],["pack,true,","pack.BaseA,pack.BaseB,pack.sub1.Sub1TypeANumber1,pack.sub1.Sub1TypeANumber2,pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2,pack.sub2.Sub2TypeANumber1,pack.sub2.Sub2TypeANumber2,pack.sub2.Sub2TypeBNumber1,pack.sub2.Sub2TypeBNumber2"],["pack,false,","pack.BaseA,pack.BaseB"],["pack.sub1,true,","pack.sub1.Sub1TypeANumber1,pack.sub1.Sub1TypeANumber2,pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2"],["pack.sub2,true,","pack.sub2.Sub2TypeANumber1,pack.sub2.Sub2TypeANumber2,pack.sub2.Sub2TypeBNumber1,pack.sub2.Sub2TypeBNumber2"],["null,true,pack.BaseA","pack.sub1.Sub1TypeANumber1,pack.sub1.Sub1TypeANumber2,pack.sub2.Sub2TypeANumber1,pack.sub2.Sub2TypeANumber2"],["null,true,pack.BaseB","pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2,pack.sub2.Sub2TypeBNumber1,pack.sub2.Sub2TypeBNumber2"],["null,true,pack.BaseB","pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2,pack.sub2.Sub2TypeBNumber1,pack.sub2.Sub2TypeBNumber2"],["pack.sub1,true,pack.BaseB","pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2"],["null,true,pack.InterfaceC","pack.BaseB,pack.sub1.Sub1TypeANumber1,pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2,pack.sub2.Sub2TypeBNumber1,pack.sub2.Sub2TypeBNumber2"],["pack.sub1,true,pack.InterfaceC","pack.sub1.Sub1TypeANumber1,pack.sub1.Sub1TypeBNumber1,pack.sub1.Sub1TypeBNumber2"]]}};
Example.myObj = { age : 26, pets : ["Theo","Darcy","Calamity"], name : "Jason"};
Example.main();
})();

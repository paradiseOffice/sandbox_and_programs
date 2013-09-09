/* start module: ClassTest */
$pyjs.loaded_modules['ClassTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ClassTest'].__was_initialized__) return $pyjs.loaded_modules['ClassTest'];
	var $m = $pyjs.loaded_modules["ClassTest"];
	$m.__repr__ = function() { return "<module: ClassTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ClassTest';
	$m.__name__ = __mod_name__;
	var $bool23,$bool22,$bool1;

	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
	if ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['imports'] = $p['___import___']('imports.circ1', null);
	}
	$m['exec_order'] = $p['___import___']('imports.exec_order', null, null, false);
	$m['IMPORTS'] = $p['___import___']('imports.imports', null, null, false);
	$m['EXEC_ORDER'] = $pyjs.loaded_modules['imports']['exec_order'];
	$m['I18N'] = $p['___import___']('I18N', null);
	$m['WithAttribute'] = $p['___import___']('imports.classes.WithAttribute', null, null, false);
	$m['imports'] = $p['___import___']('imports.decors', null);
	$m['names'] = $p['dict']([]);
	$m['SubAssignBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$m['names'].__setitem__('SubAssign', 'SubAssign');
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SubAssignBase', $p['tuple']($bases), $data);
	})();
	$m['SubAssign'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SubAssignBase']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$m['names'].__setitem__('SubAssignBase', 'SubAssignBase');
		var $bases = new Array($m['SubAssignBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SubAssign', $p['tuple']($bases), $data);
	})();
	$m['GetAttribute'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['getIt'] = $p['getattr']($m['WithAttribute'], 'ATTR');
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GetAttribute', $p['tuple']($bases), $data);
	})();
	$m['Sink'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.sink = 'Sink';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Sink', $p['tuple']($bases), $data);
	})();
	$m['SinkInfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(object_type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				object_type = arguments[1];
			}

			self.object_type = object_type;
			self.instance = null;
			return null;
		}
	, 1, [null,null,['self'],['object_type']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['object_type']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createInstance'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$bool2,$eq1;
			if ((($bool2=(($eq1=$p['getattr'](self, 'instance'))===($eq2=null)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.instance = self['createInstance']();
			}
			return $p['getattr'](self, 'instance');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getInstance'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SinkInfo', $p['tuple']($bases), $data);
	})();
	$m['Trees'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Sink']['__init__'](self);
			self.test = 'Trees';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Trees', $p['tuple']($bases), $data);
	})();
	$m['TestClass1Bug339'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var test;
			self.test = (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)();
			$pyjs_kwargs_call(self['test'], 'test_method', null, null, [{test_arg:0}]);
			test = (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)();
			$pyjs_kwargs_call(test, 'test_method', null, null, [{test_arg:0}]);
			self.test = (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)();
			self['test']['test_method'](0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestClass1Bug339', $p['tuple']($bases), $data);
	})();
	$m['TestClass2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('test_method', function(test_arg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				test_arg = arguments[1];
			}

			self.value = 0;
			return null;
		}
	, 1, [null,null,['self'],['test_arg']]);
		$cls_definition['test_method'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestClass2', $p['tuple']($bases), $data);
	})();
	$m['UserListPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('setUsers', function(title, screennames) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
				screennames = arguments[2];
			}
			if (typeof screennames == 'undefined') screennames=arguments.callee.__args__[4][1];

 			return null;
		}
	, 1, [null,null,['self'],['title'],['screennames', null]]);
		$cls_definition['setUsers'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UserListPanel', $p['tuple']($bases), $data);
	})();
	$m['TestClassBug342'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.u = $m['UserListPanel']();
			$pyjs_kwargs_call(self['u'], 'setUsers', null, null, [{screennames:33}, 'title']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestClassBug342', $p['tuple']($bases), $data);
	})();
	$m['ClassTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('testInstancePassing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var i,s;
			s = $m['SinkInfo']($m['Trees']);
			i = s['getInstance']();
			self['assertEquals']($p['getattr'](i, 'test'), 'Trees');
			self['assertEquals']($p['getattr'](i, 'sink'), 'Sink');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInstancePassing'] = $method;
		$method = $pyjs__bind_method2('testBug342', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,t;
			try {
				t = $m['TestClassBug342']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #342 encountered');
				}
			} finally {
				self['assertTrue'](true);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBug342'] = $method;
		$method = $pyjs__bind_method2('testBug339', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				$m['TestClass1Bug339']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #339 encountered');
				}
			} finally {
				self['assertTrue'](true);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBug339'] = $method;
		$method = $pyjs__bind_method2('testSubAssign', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $4,$2,$3,$1;
			self['assertEquals']((typeof ($1=$m['names']).__array != 'undefined'?
				((typeof $1.__array[$2='SubAssignBase']) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__('SubAssignBase')), 'SubAssignBase');
			self['assertEquals']((typeof ($3=$m['names']).__array != 'undefined'?
				((typeof $3.__array[$4='SubAssign']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('SubAssign')), 'SubAssign');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSubAssign'] = $method;
		$method = $pyjs__bind_method2('testClassVars', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,$bool3,$pyjs_try_err,y,x,z,expected_result1,expected_result2;
			expected_result1 = 'test';
			expected_result2 = 1;
			self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'x'), expected_result1);
			self['assertEquals']($m.ExampleClass['x']['upper'](), expected_result1['upper']());
			y = (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)();
			self['assertEquals']($p['getattr'](y, 'x'), expected_result1);
			$m.ExampleClass.x = expected_result2;
			self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'x'), expected_result2);
			z = (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)();
			self['assertEquals']($p['getattr'](z, 'x'), expected_result2);
			self['assertEquals']($p['getattr'](y, 'x'), expected_result2);
			self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'c'), (1)|(2));
			try {
				$m.ExampleClass()['fail_a']();
				self['fail']('Failed to raise error on ExampleClass().fail_a() bug #217');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ((($pyjs_try_err_name == $p['NameError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NameError']))||(($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					e = $pyjs_try_err;
					self['assertTrue'](true);
				} else if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['fail']('Failed to raise NameError or AttributeError on ExampleClass().fail_a() bug #217');
				} else {
					self['fail']('Failed to raise NameError or AttributeError on ExampleClass().fail_a()');
				}
			}
			if ((($bool3=$m['IN_BROWSER']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				try {
					x = $m.ExampleClass()['fail_a']();
					self['assertTrue'](pyjslib.isUndefined(x));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassVars'] = $method;
		$method = $pyjs__bind_method2('test_iops', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul8,b0,$mul6,$assign2,$sub3,$assign1,$sub4,$and1,$and2,$and3,$and4,$and5,a0,$bool6,$bool4,$bool5,$mul7,X,$mul5,a,c,b,d,$add6,$add7,$add5,$add8;
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(x) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						x = arguments[1];
					}

					self.x = x;
					return null;
				}
	, 1, [null,null,['self'],['x']]);
				$cls_definition['__init__'] = $method;
				$method = $pyjs__bind_method2('__add__', function(y) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						y = arguments[1];
					}
					var $add2,$add1;
					return X((typeof ($add1=$p['getattr'](self, 'x'))==typeof ($add2=$p['getattr'](y, 'x')) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)));
				}
	, 1, [null,null,['self'],['y']]);
				$cls_definition['__add__'] = $method;
				$method = $pyjs__bind_method2('__mul__', function(y) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						y = arguments[1];
					}
					var $mul2,$mul1;
					return X((typeof ($mul1=$p['getattr'](self, 'x'))==typeof ($mul2=$p['getattr'](y, 'x')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
				}
	, 1, [null,null,['self'],['y']]);
				$cls_definition['__mul__'] = $method;
				$method = $pyjs__bind_method2('__sub__', function(y) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						y = arguments[1];
					}
					var $sub2,$sub1;
					return X((typeof ($sub1=$p['getattr'](self, 'x'))==typeof ($sub2=$p['getattr'](y, 'x')) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)));
				}
	, 1, [null,null,['self'],['y']]);
				$cls_definition['__sub__'] = $method;
				$method = $pyjs__bind_method2('__iadd__', function(y) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						y = arguments[1];
					}
					var $add3,$add4;
					self.x = (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](y, 'x')) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					return self;
				}
	, 1, [null,null,['self'],['y']]);
				$cls_definition['__iadd__'] = $method;
				$method = $pyjs__bind_method2('__imul__', function(y) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						y = arguments[1];
					}
					var $mul4,$mul3;
					self.x = (typeof ($mul3=$p['getattr'](self, 'x'))==typeof ($mul4=$p['getattr'](y, 'x')) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
					return self;
				}
	, 1, [null,null,['self'],['y']]);
				$cls_definition['__imul__'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			$assign1 = X(2);
			a = $assign1;
			a0 = $assign1;
			$assign2 = X(4);
			b = $assign2;
			b0 = $assign2;
			c = (typeof ($add5=a)==typeof ($add6=b) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			d = (typeof ($mul5=a)==typeof ($mul6=b) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6));
			self['assertTrue'](((($bool4=$and1=(c !== a)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(c !== b):$and1));
			self['assertTrue'](((($bool5=$and3=(d !== a)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5.__nonzero__=='function'?
						$bool5.__nonzero__() :
						(typeof $bool5.__len__=='function'?
							($bool5.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool6=$and4=(d !== b)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(d !== c):$and4):$and3));
			self['assertEqual']($p['getattr'](c, 'x'), 6);
			self['assertEqual']($p['getattr'](d, 'x'), 8);
			a = (typeof ($add7=a)==typeof ($add8=b) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			self['assertTrue']((a === a0), 'Bug #573 __iadd__ should modify object in-place');
			self['assertEqual']($p['getattr'](a, 'x'), 6);
			self['assertEqual']($p['getattr'](a0, 'x'), $p['getattr'](a, 'x'), 'Bug #573 __iadd__ should modify all references to an object');
			a = (typeof ($sub3=a)==typeof ($sub4=b) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			self['assertTrue']((a !== a0));
			self['assertEqual']($p['getattr'](a, 'x'), 2);
			self['assertNotEqual']($p['getattr'](a0, 'x'), $p['getattr'](a, 'x'), 'Bug #573 reference should not have same value after __iadd__ & __neg__');
			b = (typeof ($mul7=b)==typeof ($mul8=c) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8));
			self['assertTrue']((b === b0), 'Bug #573 __imul__ should modify object in-place');
			self['assertEqual']($p['getattr'](b, 'x'), 24);
			self['assertEqual']($p['getattr'](b0, 'x'), $p['getattr'](b, 'x'), 'Bug #573 __imul__ should modify all references to an object');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_iops'] = $method;
		$method = $pyjs__bind_method2('test_getattr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var X,$pyjs_try_err,x;
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(x) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						x = arguments[1];
					}
					if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

					self.x = x;
					return null;
				}
	, 1, [null,null,['self'],['x', 0]]);
				$cls_definition['__init__'] = $method;
				$method = $pyjs__bind_method2('__getattr__', function(name) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						name = arguments[1];
					}
					var $add9,$add10;
					return X((typeof ($add9=$p['getattr'](self, 'x'))==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)));
				}
	, 1, [null,null,['self'],['name']]);
				$cls_definition['__getattr__'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			x = X();
			self['assertEqual']($p['getattr'](x, 'x'), 0);
			try {
				self['assertEqual']($p['getattr']($p['getattr'](x, 'next'), 'x'), 1);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'x'), 2);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'a'), 'b'), 'c'), 'x'), 3);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #575 __getattr__ method not supported');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_getattr'] = $method;
		$method = $pyjs__bind_method2('test_deep_property_access', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var X,$pyjs_try_err,x;
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(x) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						x = arguments[1];
					}
					if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

					self.x = x;
					return null;
				}
	, 1, [null,null,['self'],['x', 0]]);
				$cls_definition['__init__'] = $method;
				$method = $pyjs__bind_method2('bla', function() {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
					}

					return $p['getattr'](self, 'next');
				}
	, 1, [null,null,['self']]);
				$cls_definition['bla'] = $p['property']($p['staticmethod']($method));
				$method = $pyjs__bind_method2('next', function() {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
					}
					var $add11,$add12;
					return X((typeof ($add11=$p['getattr'](self, 'x'))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)));
				}
	, 1, [null,null,['self']]);
				$cls_definition['next'] = $p['property']($p['staticmethod']($method));
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			x = X();
			self['assertEqual']($p['getattr'](x, 'x'), 0);
			try {
				self['assertEqual']($p['getattr']($p['getattr'](x, 'next'), 'x'), 1);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'x'), 2);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'next'), 'x'), 3);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'bla'), 'next'), 'bla'), 'next'), 'bla'), 'x'), 5);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #576 Deep property access not supported');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_deep_property_access'] = $method;
		$method = $pyjs__bind_method2('test_slice', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var X,$pyjs_try_err,data,x;
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(data) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						data = arguments[1];
					}

					self.data = data;
					return null;
				}
	, 1, [null,null,['self'],['data']]);
				$cls_definition['__init__'] = $method;
				$method = $pyjs__bind_method2('__getitem__', function(index) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						index = arguments[1];
					}
					var $6,$5;
					if (!( $p['isinstance'](index, $p['slice']) )) {
					   throw $p['AssertionError']();
					 }
					return (typeof ($5=$p['getattr'](self, 'data')).__array != 'undefined'?
						((typeof $5.__array[$6=index]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(index));
				}
	, 1, [null,null,['self'],['index']]);
				$cls_definition['__getitem__'] = $method;
				$method = $pyjs__bind_method2('__setitem__', function(index, value) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						index = arguments[1];
						value = arguments[2];
					}

					if (!( $p['isinstance'](index, $p['slice']) )) {
					   throw $p['AssertionError']();
					 }
					$p['getattr'](self, 'data').__setitem__(index, value);
					return null;
				}
	, 1, [null,null,['self'],['index'],['value']]);
				$cls_definition['__setitem__'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			data = $p['list']([1, 2, 3]);
			x = X(data);
			self['assertEqual']($p['__getslice'](data, 0, 2), $p['__getslice'](x, 0, 2), 'Bug #577 __getitem__ should be used for slicing');
			self['assertEqual']($p['__getslice'](x, 0, 2), $p['list']([1, 2]), 'Bug #577 __getitem__ not supported');
			try {
				$p['__setslice'](x, 1, 2, $p['list']([5]));
				self['assertEqual']($p['__getslice'](data, 0, null), $p['__getslice'](x, 0, null), 'Bug #577 __setitem__ should be used for slice assignment');
				self['assertEqual']($p['__getslice'](x, 1, null), $p['list']([5, 3]));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #577 slice / __getitem__ / __setitem__ not supported');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_slice'] = $method;
		$method = $pyjs__bind_method2('testInheritedProperties', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj1,obj2,obj,expected_result1,expected_result2,expected_result3;
			expected_result1 = 'test';
			expected_result2 = 1;
			expected_result3 = 'other';
			obj1 = (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass)();
			self['assertEquals']($p['getattr'](obj1, 'x'), expected_result1);
			obj1.x = expected_result2;
			obj2 = (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)();
			self['assertEquals']($p['getattr'](obj2, 'x'), expected_result1);
			obj2.x = expected_result3;
			self['assertEquals']($p['getattr'](obj2, 'x'), expected_result3);
			self['assertEquals']($p['getattr'](obj1, 'x'), expected_result2);
			obj = $pyjs_kwargs_call(null, (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass), null, null, [{b:222}]);
			self['assertEquals']($p['getattr'](obj, 'prop_a'), 1);
			self['assertEquals']($p['getattr'](obj, 'prop_b'), 222);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInheritedProperties'] = $method;
		$method = $pyjs__bind_method2('testInheritedPropertyObjects', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj1,obj2,$10,$9,$len2,$8,$len1,$7,expected_result1,expected_result2;
			expected_result1 = 'another';
			expected_result2 = 'other';
			obj1 = (typeof ExampleParentObject == "undefined"?$m.ExampleParentObject:ExampleParentObject)();
			self['assertEquals']((($len1=$p['getattr'](obj1, 'x')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))), 0);
			obj1['x']['append'](expected_result2);
			obj2 = (typeof ExampleChildObject == "undefined"?$m.ExampleChildObject:ExampleChildObject)();
			self['assertEquals']((($len2=$p['getattr'](obj2, 'x')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))), 1);
			obj2['x']['append'](expected_result1);
			self['assertEquals']((typeof ($7=$p['getattr'](obj2, 'x')).__array != 'undefined'?
				((typeof $7.__array[$8=1]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(1)), expected_result1);
			self['assertEquals']((typeof ($9=$p['getattr'](obj1, 'x')).__array != 'undefined'?
				((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(0)), expected_result2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInheritedPropertyObjects'] = $method;
		$method = $pyjs__bind_method2('testInheritedConstructors', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj1,obj3,obj2,res,expected_result4,expected_result1,expected_result2,expected_result3;
			expected_result1 = 'test';
			expected_result2 = 'parent';
			expected_result3 = 'grandparent';
			expected_result4 = 'older';
			obj1 = (typeof ExampleChildNoConstructor == "undefined"?$m.ExampleChildNoConstructor:ExampleChildNoConstructor)();
			self['assertEquals']($p['getattr'](obj1, 'x'), expected_result1, 'ExampleParentConstructor.__init__() was NOT called for ExampleChildNoConstructor');
			obj2 = (typeof ExampleChildConstructor == "undefined"?$m.ExampleChildConstructor:ExampleChildConstructor)();
			self['assertNotEqual']($p['getattr'](obj2, 'x', null), expected_result1, 'ExampleParentConstructor.__init__() was called for ExampleChildConstructor');
			obj3 = (typeof ExampleChildExplicitConstructor == "undefined"?$m.ExampleChildExplicitConstructor:ExampleChildExplicitConstructor)();
			self['assertEquals']($p['getattr'](obj3, 'x'), expected_result1, 'ExampleParentConstructor.__init__() was NOT called for ExampleChildExplicitConstructor');
			self['assertEquals']($p['getattr'](obj1, 'y'), expected_result2, 'Did not inherit property from parent');
			self['assertEquals']($p['getattr'](obj2, 'y'), expected_result2, 'Did not inherit property from parent');
			self['assertEquals']($p['getattr'](obj1, 'z'), expected_result3, 'Did not inherit property from grandparent');
			self['assertEquals']($p['getattr'](obj2, 'z'), expected_result3, 'Did not inherit property from grandparent');
			res = $p['getattr'](obj1, 'r', null);
			self['assertNotEqual'](res, expected_result4, $p['sprintf']('ExampleGrandParentConstructor.__init__() was called (%s)', res));
			self['assertNotEqual']($p['getattr'](obj2, 'r', null), expected_result4, 'ExampleGrandParentConstructor.__init__() was called');
			self['assertEqual']($p['getattr']((typeof ExampleChildConstructor == "undefined"?$m.ExampleChildConstructor:ExampleChildConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
			self['assertEqual']($p['getattr']((typeof ExampleChildNoConstructor == "undefined"?$m.ExampleChildNoConstructor:ExampleChildNoConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
			self['assertEqual']($p['getattr']((typeof ExampleChildExplicitConstructor == "undefined"?$m.ExampleChildExplicitConstructor:ExampleChildExplicitConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
			self['assertEqual']($p['getattr']((typeof ExampleChildConstructor == "undefined"?$m.ExampleChildConstructor:ExampleChildConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
			self['assertEqual']($p['getattr']((typeof ExampleChildNoConstructor == "undefined"?$m.ExampleChildNoConstructor:ExampleChildNoConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
			self['assertEqual']($p['getattr']((typeof ExampleChildExplicitConstructor == "undefined"?$m.ExampleChildExplicitConstructor:ExampleChildExplicitConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInheritedConstructors'] = $method;
		$method = $pyjs__bind_method2('testInheritFromType', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var SubclassedFloat,subclassed_type,$iter1_nextval,$iter1_type,val,SubclassedInt,$iter1_iter,i_types,SubclassedString,$pyjs_try_err,inst,$iter1_array,v,cls,$iter1_idx;
			i_types = $p['list']([$p['tuple']([$p['float_int'], 1]), $p['tuple']([$p['float'], 1.5]), $p['tuple']([$p['str'], 'test']), $p['tuple']([$p['float_int'], 1]), $p['tuple']([$p['tuple'], $p['tuple']([1, 2])]), $p['tuple']([$p['list'], $p['list']([1, 2])]), $p['tuple']([$p['dict'], $p['dict']([['1', 1]])]), $p['tuple']([$p['set'], $p['set']($p['list']([1, 2]))])]);
			$iter1_iter = i_types;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
				cls = $tupleassign1[0];
				val = $tupleassign1[1];
				try {
					subclassed_type = (function(){
						var $cls_definition = new Object();
						var $method;
						$cls_definition.__module__ = 'ClassTest';
						$method = $pyjs__bind_method2('test_inh_method', function() {
							if (this.__is_instance__ === true) {
								var self = this;
							} else {
								var self = arguments[0];
							}

							return 1;
						}
	, 1, [null,null,['self']]);
						$cls_definition['test_inh_method'] = $method;
						var $bases = new Array(cls);
						var $data = $p['dict']();
						for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
						return $p['_create_class']('subclassed_type', $p['tuple']($bases), $data);
					})();
					subclassed_type.__name__ = $p['getattr'](cls, '__name__');
					inst = subclassed_type(val);
					self['assertEqual'](inst, val, $p['sprintf']("Subclasses of type '%s' are not instantiated properly, issue #623", $p['getattr'](cls, '__name__')));
					self['assertEqual'](inst['test_inh_method'](), 1, $p['sprintf']("Methods of subclasses of type '%s' fail, issue #623", $p['getattr'](cls, '__name__')));
					self['assertEqual']($p['str'](inst), $p['str'](val), $p['sprintf']("__str__ of subclasses of type '%s' fail, issue #623", $p['getattr'](cls, '__name__')));
					self['assertEqual']($p['type'](inst), subclassed_type, $p['sprintf']("Subclasses of type '%s' have wrong type, issue #623", $p['getattr'](cls, '__name__')));
					self['assertTrue']($p['isinstance'](inst, subclassed_type), $p['sprintf']("Subclasses of type '%s' have wrong type, issue #623", $p['getattr'](cls, '__name__')));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']($p['sprintf']("Subclassing type '%s' does not work, issue #623", $p['getattr'](cls, '__name__')));
					}
				}
			}
			SubclassedString = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array($p['str']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('SubclassedString', $p['tuple']($bases), $data);
			})();
			SubclassedInt = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array($p['float_int']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('SubclassedInt', $p['tuple']($bases), $data);
			})();
			SubclassedFloat = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array($p['float']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('SubclassedFloat', $p['tuple']($bases), $data);
			})();
			try {
				self['assertEqual']($p['str'](SubclassedString('string')), 'string', '#484');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Could not instantiate subclassed string, bug #484');
				}
			}
			try {
				v = $p['str'](SubclassedInt(1));
				self['assertEqual'](v, '1', $p['sprintf']("bug #484 - %s != '1'", v));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Could not instantiate subclassed int');
				}
			}
			try {
				self['assertEqual']($p['str'](SubclassedFloat(1.1)), '1.1', '#484');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Could not instantiate subclassed float');
				}
			}
			self['assertTrue']($p['isinstance'](SubclassedString('abc'), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
			self['assertTrue']($p['isinstance'](SubclassedInt(1), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
			self['assertTrue']($p['isinstance'](SubclassedFloat(1.1), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInheritFromType'] = $method;
		$method = $pyjs__bind_method2('testClassMethods', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $32,results,$33,$66,$65,$39,$29,$28,$55,$74,$21,$20,$22,$25,$24,$27,$26,instance,$49,$48,$69,$68,$43,$42,$41,$40,$47,$46,$45,$44,$72,$73,$70,$60,$71,$62,$51,$64,$67,$14,$15,$16,$17,$11,$12,$13,$36,$37,$34,$35,$18,$19,$30,$31,$58,$59,$61,$63,$50,$38,$52,$53,$54,$23,$56,$57;
			results = $m.ExampleClass['sampleClassMethod']('a');
			self['assertEqual']((typeof ($11=results).__array != 'undefined'?
				((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($13=results).__array != 'undefined'?
				((typeof $13.__array[$14=1]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(1)), 'a');
			results = $m.ExampleParentClass['sampleClassMethod']('a');
			self['assertEqual']((typeof ($15=results).__array != 'undefined'?
				((typeof $15.__array[$16=0]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(0)), (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($17=results).__array != 'undefined'?
				((typeof $17.__array[$18=1]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(1)), 'a');
			results = $m.ExampleChildClass['sampleClassMethod']('a');
			self['assertEqual']((typeof ($19=results).__array != 'undefined'?
				((typeof $19.__array[$20=0]) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__(0)), (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($21=results).__array != 'undefined'?
				((typeof $21.__array[$22=1]) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__(1)), 'a');
			results = $m.ExampleClass['sampleClassMethodVarargs']('a', 'b', 'c');
			self['assertEqual']((typeof ($23=results).__array != 'undefined'?
				((typeof $23.__array[$24=0]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($27=(typeof ($25=results).__array != 'undefined'?
				((typeof $25.__array[$26=1]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(1))).__array != 'undefined'?
				((typeof $27.__array[$28=0]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(0)), 'a');
			self['assertEqual']((typeof ($31=(typeof ($29=results).__array != 'undefined'?
				((typeof $29.__array[$30=1]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__(1))).__array != 'undefined'?
				((typeof $31.__array[$32=1]) != 'undefined'?$31.__array[$32]:
					$31.__getitem__($32)):
					$31.__getitem__(1)), 'b');
			self['assertEqual']((typeof ($35=(typeof ($33=results).__array != 'undefined'?
				((typeof $33.__array[$34=1]) != 'undefined'?$33.__array[$34]:
					$33.__getitem__($34)):
					$33.__getitem__(1))).__array != 'undefined'?
				((typeof $35.__array[$36=2]) != 'undefined'?$35.__array[$36]:
					$35.__getitem__($36)):
					$35.__getitem__(2)), 'c');
			results = $pyjs_kwargs_call($m.ExampleClass, 'sampleClassMethodKwargs', null, null, [{c:9, b:8, a:7}]);
			self['assertEqual']((typeof ($37=results).__array != 'undefined'?
				((typeof $37.__array[$38=0]) != 'undefined'?$37.__array[$38]:
					$37.__getitem__($38)):
					$37.__getitem__(0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($39=results).__array != 'undefined'?
				((typeof $39.__array[$40=1]) != 'undefined'?$39.__array[$40]:
					$39.__getitem__($40)):
					$39.__getitem__(1)), 7);
			self['assertEqual']((typeof ($41=results).__array != 'undefined'?
				((typeof $41.__array[$42=2]) != 'undefined'?$41.__array[$42]:
					$41.__getitem__($42)):
					$41.__getitem__(2)), 8);
			self['assertEqual']((typeof ($43=results).__array != 'undefined'?
				((typeof $43.__array[$44=3]) != 'undefined'?$43.__array[$44]:
					$43.__getitem__($44)):
					$43.__getitem__(3)), 9);
			results = $m.ExampleClass()['sampleClassMethod']('a');
			self['assertEqual']((typeof ($45=results).__array != 'undefined'?
				((typeof $45.__array[$46=0]) != 'undefined'?$45.__array[$46]:
					$45.__getitem__($46)):
					$45.__getitem__(0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($47=results).__array != 'undefined'?
				((typeof $47.__array[$48=1]) != 'undefined'?$47.__array[$48]:
					$47.__getitem__($48)):
					$47.__getitem__(1)), 'a');
			results = $m.ExampleParentClass()['sampleClassMethod']('a');
			self['assertEqual']((typeof ($49=results).__array != 'undefined'?
				((typeof $49.__array[$50=0]) != 'undefined'?$49.__array[$50]:
					$49.__getitem__($50)):
					$49.__getitem__(0)), (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($51=results).__array != 'undefined'?
				((typeof $51.__array[$52=1]) != 'undefined'?$51.__array[$52]:
					$51.__getitem__($52)):
					$51.__getitem__(1)), 'a');
			results = $m.ExampleChildClass()['sampleClassMethod']('a');
			self['assertEqual']((typeof ($53=results).__array != 'undefined'?
				((typeof $53.__array[$54=0]) != 'undefined'?$53.__array[$54]:
					$53.__getitem__($54)):
					$53.__getitem__(0)), (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($55=results).__array != 'undefined'?
				((typeof $55.__array[$56=1]) != 'undefined'?$55.__array[$56]:
					$55.__getitem__($56)):
					$55.__getitem__(1)), 'a');
			results = $m.ExampleClass()['sampleClassMethodVarargs']('a', 'b', 'c');
			self['assertEqual']((typeof ($57=results).__array != 'undefined'?
				((typeof $57.__array[$58=0]) != 'undefined'?$57.__array[$58]:
					$57.__getitem__($58)):
					$57.__getitem__(0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
			self['assertEqual']((typeof ($61=(typeof ($59=results).__array != 'undefined'?
				((typeof $59.__array[$60=1]) != 'undefined'?$59.__array[$60]:
					$59.__getitem__($60)):
					$59.__getitem__(1))).__array != 'undefined'?
				((typeof $61.__array[$62=0]) != 'undefined'?$61.__array[$62]:
					$61.__getitem__($62)):
					$61.__getitem__(0)), 'a');
			self['assertEqual']((typeof ($65=(typeof ($63=results).__array != 'undefined'?
				((typeof $63.__array[$64=1]) != 'undefined'?$63.__array[$64]:
					$63.__getitem__($64)):
					$63.__getitem__(1))).__array != 'undefined'?
				((typeof $65.__array[$66=1]) != 'undefined'?$65.__array[$66]:
					$65.__getitem__($66)):
					$65.__getitem__(1)), 'b');
			self['assertEqual']((typeof ($69=(typeof ($67=results).__array != 'undefined'?
				((typeof $67.__array[$68=1]) != 'undefined'?$67.__array[$68]:
					$67.__getitem__($68)):
					$67.__getitem__(1))).__array != 'undefined'?
				((typeof $69.__array[$70=2]) != 'undefined'?$69.__array[$70]:
					$69.__getitem__($70)):
					$69.__getitem__(2)), 'c');
			self['assertEqual']($m.ExampleParentClass()['inert']('inert'), 'inert');
			self['assertEqual']($m.ExampleParentClass()['global_x1'](), 'global test');
			self['assertEqual']($m.ExampleParentClass()['global_x2'](), 'global test');
			instance = (typeof RecurseMe == "undefined"?$m.RecurseMe:RecurseMe)();
			self['assertEqual']((typeof ($71=$p['getattr'](instance, 'chain')).__array != 'undefined'?
				((typeof $71.__array[$72=0]) != 'undefined'?$71.__array[$72]:
					$71.__getitem__($72)):
					$71.__getitem__(0)), 0);
			self['assertEqual']((typeof ($73=$p['getattr'](instance, 'chain')).__array != 'undefined'?
				((typeof $73.__array[$74=1]) != 'undefined'?$73.__array[$74]:
					$73.__getitem__($74)):
					$73.__getitem__(1)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassMethods'] = $method;
		$method = $pyjs__bind_method2('testStaticMethod', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,m;
			self['assertEqual']($m.ExampleClass['sampleStaticMethod']('a'), 'a', 'Expected static method to take the parameter I give as its first parameter');
			try {
				m = $m.ExampleClass['oldIdiomStaticMethod']('middle');
				self['assertEqual'](m, 'beforemiddleafter');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Issue #415 - staticmethod(method) idiom does not work');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStaticMethod'] = $method;
		$method = $pyjs__bind_method2('test_method_alias', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$pyjs_try_err,C;
			C = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('original', function() {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
					}

					return 5;
				}
	, 1, [null,null,['self']]);
				$cls_definition['original'] = $method;
				$cls_definition['alias'] = $p['staticmethod']($cls_definition['original']);
				$method = $pyjs__bind_method2('method_using_alias', function() {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
					}

					return self['alias']();
				}
	, 1, [null,null,['self']]);
				$cls_definition['method_using_alias'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('C', $p['tuple']($bases), $data);
			})();
			c = C();
			self['assertEqual'](c['original'](), 5);
			try {
				self['assertEqual'](c['alias'](), 5);
				self['assertEqual'](c['method_using_alias'](), 5);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #578 : method alias fails');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_method_alias'] = $method;
		$method = $pyjs__bind_method2('test_class_isinstance_type', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var C;
			C = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('C', $p['tuple']($bases), $data);
			})();
			self['assertTrue']($p['isinstance'](C, $p['type']), 'Bug #579 type type not supported');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_class_isinstance_type'] = $method;
		$method = $pyjs__bind_method2('test__new__Method', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,prop,instance,$pyjs_try_err,$bool7;
			c = (typeof OtherClass1 == "undefined"?$m.OtherClass1:OtherClass1)();
			self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'ObjectClass');
			self['assertEqual']($p['getattr'](c, 'prop'), 1);
			c = (typeof OtherSubclass1 == "undefined"?$m.OtherSubclass1:OtherSubclass1)();
			self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'ObjectClass', 'Issue #414: __new__ method on superclass not called');
			c = (typeof OtherClass2 == "undefined"?$m.OtherClass2:OtherClass2)();
			self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'OtherClass2');
			try {
				prop = $p['getattr'](c, 'prop');
				self['fail']('failed to raise an error on c.prop (improperly follows explicit __new__ with implicit __init__)');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['assertTrue'](true);
				}
			}
			self['assertTrue']($p['getattr'](c, 'init'), 'OtherClass2.__init__() is not executed');
			try {
				c = (typeof OtherClass3 == "undefined"?$m.OtherClass3:OtherClass3)(41, 42);
				self['assertTrue'](true);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Issue #417: __new__ method fails for lack of arguments');
				}
			}
			self['assertEqual'](((($bool7=$p['hasattr'](c, 'y')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ($p['getattr'](c, 'y')) : (0)), 42, 'Issue #417: __new__ method not passed constructor arguments.');
			try {
				c = (typeof OtherClass3 == "undefined"?$m.OtherClass3:OtherClass3)();
				self['fail']("Issue #418: __new__ method doesn't fail for lack of arguments");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['assertTrue'](true);
				}
			}
			try {
				c = (typeof OtherClass4 == "undefined"?$m.OtherClass4:OtherClass4)();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['fail']('TypeError on OtherClass4()');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			c = $pyjs_kwargs_call(null, (typeof OtherSubclass4 == "undefined"?$m.OtherSubclass4:OtherSubclass4), null, null, [{c:3, d:4}, 1, 2]);
			try {
				self['assertEqual']($p['getattr'](c, 'args'), $p['tuple']([1, 2]));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					self['fail']('c.args is not defined');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				self['assertEqual']($p['getattr'](c, 'kwargs'), $pyjs_kwargs_call(null, $p['dict'], null, null, [{c:3, d:4}]));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					self['fail']('c.kwargs is not defined');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			instance = $m.MultiBase['__new__']((typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1));
			self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
			instance = $m.MultiInherit1['__new__']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase));
			self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiBase');
			instance = $pyjs_kwargs_call($p['object'], '__new__', null, $p['dict']([]), [{}, (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1)]);
			self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test__new__Method'] = $method;
		$method = $pyjs__bind_method2('testIsInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c;
			c = (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)();
			self['failIf']($p['isinstance'](c, (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)));
			self['failUnless']($p['isinstance'](c, (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)));
			self['failUnless']($p['isinstance'](c, (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsInstance'] = $method;
		$method = $pyjs__bind_method2('testIsInstanceNested', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c;
			c = (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)();
			self['failUnless']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)])));
			self['failIf']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), (typeof ExampleParentObject == "undefined"?$m.ExampleParentObject:ExampleParentObject)])));
			self['failUnless']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), $p['tuple']([(typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)])])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsInstanceNested'] = $method;
		$method = $pyjs__bind_method2('testInstanceChecking', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $76,$77,$75,$78,$cmp2,$pyjs_try_err,e,$cmp1;
			try {
				$m.ExampleChildClass['get_x']((typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)());
				self['assertTrue'](true);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['fail'](e);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				$m.ExampleChildClass['get_x']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)());
				self['fail']('Failed to raise error for invalid instance');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['assertTrue'](((((($cmp1=(typeof ($75=$p['getattr'](e, 'args')).__array != 'undefined'?
						((typeof $75.__array[$76=0]) != 'undefined'?$75.__array[$76]:
							$75.__getitem__($76)):
							$75.__getitem__(0))['find']('get_x() must be called'))===($cmp2=0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))))|1) == 1), (typeof ($77=$p['getattr'](e, 'args')).__array != 'undefined'?
						((typeof $77.__array[$78=0]) != 'undefined'?$77.__array[$78]:
							$77.__getitem__($78)):
							$77.__getitem__(0)));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInstanceChecking'] = $method;
		$method = $pyjs__bind_method2('testIsSubclass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var A,C,B,E,D;
			A = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array(pyjslib.object);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('A', $p['tuple']($bases), $data);
			})();
			B = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array(A);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('B', $p['tuple']($bases), $data);
			})();
			C = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array(B);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('C', $p['tuple']($bases), $data);
			})();
			D = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array(pyjslib.object);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('D', $p['tuple']($bases), $data);
			})();
			E = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array(D,C);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('E', $p['tuple']($bases), $data);
			})();
			self['assertTrue']($p['issubclass'](A, A));
			self['assertTrue']($p['issubclass'](C, A));
			self['assertTrue']($p['issubclass'](E, A));
			self['assertTrue']($p['issubclass'](E, $p['tuple']([(typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass), A])));
			self['assertFalse']($p['issubclass'](A, (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass)));
			self['assertRaises']($p['TypeError'], $p['issubclass'], (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass)(), (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
			self['assertRaises']($p['TypeError'], $p['issubclass'], (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass), (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass)());
			self['assertRaises']($p['TypeError'], $p['issubclass'], null, (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsSubclass'] = $method;
		$method = $pyjs__bind_method2('testMetaClass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var instance,Klass;
			Klass = $p['type']('MyClass', $p['tuple']([$p['object']]), $p['dict']([['method', (typeof method == "undefined"?$m.method:method)], ['x', 5]]));
			instance = Klass();
			self['assertEqual'](instance['method'](), 1);
			self['assertEqual']($p['getattr'](instance, 'x'), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMetaClass'] = $method;
		$method = $pyjs__bind_method2('testMetaClassInheritFromType', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var instance,$pyjs_try_err,Metaklass,Klass;
			Metaklass = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('metamethod', function() {
					if (this.__is_instance__ === true) {
						var cls = this;
					} else {
						var cls = arguments[0];
					}

					return 2;
				}
	, 1, [null,null,['cls']]);
				$cls_definition['metamethod'] = $method;
				var $bases = new Array($p['type']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('Metaklass', $p['tuple']($bases), $data);
			})();
			Klass = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$cls_definition['__metaclass__'] = Metaklass;
				$method = $pyjs__bind_method2('method', function() {
					if (this.__is_instance__ === true) {
						var cls = this;
					} else {
						var cls = arguments[0];
					}

					return 1;
				}
	, 1, [null,null,['cls']]);
				$cls_definition['method'] = $method;
				$cls_definition['x'] = 5;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('Klass', $p['tuple']($bases), $data);
			})();
			try {
				self['assertEqual'](Klass['metamethod'](), 2);
				instance = Klass();
				self['assertEqual'](instance['method'](), 1);
				self['assertEqual']($p['getattr'](instance, 'x'), 5);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('bug #298 - missing metaclass features');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMetaClassInheritFromType'] = $method;
		$method = $pyjs__bind_method2('testMetaClassDct', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var MetaklassDctSaver,MyClass,$pyjs_try_err;
			MetaklassDctSaver = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(name, bases, dct) {
					if (this.__is_instance__ === true) {
						var cls = this;
					} else {
						var cls = arguments[0];
						name = arguments[1];
						bases = arguments[2];
						dct = arguments[3];
					}

					$p['$$super'](MetaklassDctSaver, cls)['__init__'](name, bases, dct);
					cls.saved_dct = dct;
					return null;
				}
	, 1, [null,null,['cls'],['name'],['bases'],['dct']]);
				$cls_definition['__init__'] = $method;
				var $bases = new Array($p['type']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('MetaklassDctSaver', $p['tuple']($bases), $data);
			})();
			MyClass = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$cls_definition['__metaclass__'] = MetaklassDctSaver;
				$cls_definition['a'] = 1;
				$cls_definition['b'] = 2;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('MyClass', $p['tuple']($bases), $data);
			})();
			try {
				self['assertTrue']($p['isinstance']($p['getattr'](MyClass, 'saved_dct'), $p['dict']));
				self['assertTrue']($p['getattr'](MyClass, 'saved_dct').__contains__('a'));
				self['assertTrue']($p['getattr'](MyClass, 'saved_dct').__contains__('b'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('bug #298 - missing metaclass features');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMetaClassDct'] = $method;
		$method = $pyjs__bind_method2('testMultiSuperclass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_value,c;
			new_value = 'New value';
			c = (typeof ExampleMultiSuperclassNoConstructor == "undefined"?$m.ExampleMultiSuperclassNoConstructor:ExampleMultiSuperclassNoConstructor)(new_value);
			self['assertEqual']($p['getattr'](c, 'x'), new_value);
			self['assertEqual']($p['getattr'](c, 'y'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m.ExampleMultiSuperclassParent2:ExampleMultiSuperclassParent2), 'y'));
			self['assertEqual'](c['get_value'](), new_value);
			c = (typeof ExampleMultiSuperclassExplicitConstructor == "undefined"?$m.ExampleMultiSuperclassExplicitConstructor:ExampleMultiSuperclassExplicitConstructor)(new_value);
			self['assertEqual']($p['getattr'](c, 'x'), $p['getattr']((typeof ExampleMultiSuperclassParent1 == "undefined"?$m.ExampleMultiSuperclassParent1:ExampleMultiSuperclassParent1), 'x'));
			self['assertEqual']($p['getattr'](c, 'y'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m.ExampleMultiSuperclassParent2:ExampleMultiSuperclassParent2), 'y'));
			self['assertEqual']($p['getattr'](c, 'z'), new_value);
			self['assertEqual'](c['get_value'](), new_value);
			self['assertEqual'](c['get_values'](), ':'['join']($p['list']([$p['getattr']((typeof ExampleMultiSuperclassParent1 == "undefined"?$m.ExampleMultiSuperclassParent1:ExampleMultiSuperclassParent1), 'x'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m.ExampleMultiSuperclassParent2:ExampleMultiSuperclassParent2), 'y'), new_value])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMultiSuperclass'] = $method;
		$method = $pyjs__bind_method2('testMultiDoubleInherit', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var i;
			i = (typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit)(1, 2, 3);
			self['assertEqual'](i['get_x'](), 1);
			self['assertEqual'](i['get_y'](), 2);
			self['assertEqual'](i['get_z'](), 3);
			$m.MultiInherit2['set_x'](i, 5);
			self['assertEqual']($m.MultiInherit1['get_x'](i), 5);
			self['assertEqual'](i['getName'](), 'MultiInherit2', 'Inheritance prolem issue #560');
			self['assertEqual']($p['str'](i), 'MultiInherit2', 'Inheritance prolem issue #560');
			i = (typeof DoubleInheritReversed == "undefined"?$m.DoubleInheritReversed:DoubleInheritReversed)(1, 2, 3);
			self['assertEqual'](i['getName'](), 'MultiInherit2');
			self['assertEqual']($p['str'](i), 'MultiInherit2');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMultiDoubleInherit'] = $method;
		$method = $pyjs__bind_method2('testClassArguments', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,e,$79,$82,$81,$80,$pyjs_try_err;
			c = (typeof ClassArguments == "undefined"?$m.ClassArguments:ClassArguments)();
			try {
				c['no_args']();
				self['fail']("Exception should be raised on 'c.no_args()'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($79=$p['getattr'](e, 'args')).__array != 'undefined'?
						((typeof $79.__array[$80=0]) != 'undefined'?$79.__array[$80]:
							$79.__getitem__($80)):
							$79.__getitem__(0)), 'no_args() takes no arguments (1 given)');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertEqual'](c['self_arg'](), true);
			self['assertEqual'](c['two_args'](1), 1);
			try {
				c['two_args']();
				self['fail']("Exception should be raised on 'c.two_args()'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($81=$p['getattr'](e, 'args')).__array != 'undefined'?
						((typeof $81.__array[$82=0]) != 'undefined'?$81.__array[$82]:
							$81.__getitem__($82)):
							$81.__getitem__(0)), 'two_args() takes exactly 2 arguments (1 given)');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassArguments'] = $method;
		$method = $pyjs__bind_method2('testSuperTest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,e,instance,$pyjs_try_err,z;
			c = (typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit)(1, 2, 3);
			self['assertEqual']($p['$$super']((typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit), c)['get_y'](), 2);
			c.y = 4;
			self['assertEqual']($p['$$super']((typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit), c)['get_y'](), 4);
			instance = $p['$$super']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase), (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1))['__new__']((typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1));
			self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
			instance = $p['$$super']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase), (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1))['__new__']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase));
			self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiBase');
			instance = $p['$$super']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase), (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1))['__new__']((typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1));
			instance['__init__'](1, 2);
			self['assertEqual']($p['getattr'](instance, 'x'), 1);
			self['assertEqual']($p['getattr'](instance, 'y'), 2);
			try {
				z = $p['getattr'](instance, 'z');
				self['fail']('failed to raise error for instance.z');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['assertTrue'](true);
				} else {
					self['fail']('failed to raise Attribute error for instance.z');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSuperTest'] = $method;
		$method = $pyjs__bind_method2('testSuperArgTest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a2,a3;
			a2 = $pyjs_kwargs_call(null, (typeof SuperArg2 == "undefined"?$m.SuperArg2:SuperArg2), null, null, [{a:1, b:2, c:3}]);
			a3 = $pyjs_kwargs_call(null, (typeof SuperArg3 == "undefined"?$m.SuperArg3:SuperArg3), null, null, [{a:1, b:2, c:3}]);
			self['assertEqual']($p['list'](['SuperArg2', $p['getattr'](a2, 'a1_args')]), $p['list'](['SuperArg2', $p['list']([$p['tuple'](['a', 1]), $p['tuple'](['b', 2]), $p['tuple'](['c', 3])])]));
			self['assertEqual']($p['list'](['SuperArg3', $p['getattr'](a3, 'a1_args')]), $p['list'](['SuperArg3', $p['list']([$p['tuple'](['a', 1]), $p['tuple'](['b', 2]), $p['tuple'](['c', 3])])]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSuperArgTest'] = $method;
		$method = $pyjs__bind_method2('testImportTest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,e,$89,$88,$87,imports,$84,$83,$91,$92,$93,$94,teststring,$pyjs_try_err,$90,$86,C,$85;
			imports = $p['___import___']('imports', null);
			self['assertEqual']((typeof ($83=$p['getattr'](imports, 'exec_order')).__array != 'undefined'?
				((typeof $83.__array[$84=0]) != 'undefined'?$83.__array[$84]:
					$83.__getitem__($84)):
					$83.__getitem__(0)), 'circ1-1');
			self['assertEqual']((typeof ($85=$m['exec_order']).__array != 'undefined'?
				((typeof $85.__array[$86=1]) != 'undefined'?$85.__array[$86]:
					$85.__getitem__($86)):
					$85.__getitem__(1)), 'circ2-1');
			self['assertEqual']((typeof ($87=$m['EXEC_ORDER']).__array != 'undefined'?
				((typeof $87.__array[$88=2]) != 'undefined'?$87.__array[$88]:
					$87.__getitem__($88)):
					$87.__getitem__(2)), 'circ2-2');
			self['assertEqual']((typeof ($89=$p['getattr'](imports, 'exec_order')).__array != 'undefined'?
				((typeof $89.__array[$90=3]) != 'undefined'?$89.__array[$90]:
					$89.__getitem__($90)):
					$89.__getitem__(3)), 'circ1-2');
			self['assertEqual']((typeof ($91=$p['getattr'](imports, 'exec_order')).__array != 'undefined'?
				((typeof $91.__array[$92=3]) != 'undefined'?$91.__array[$92]:
					$91.__getitem__($92)):
					$91.__getitem__(3)), (typeof ($93=$p['getattr']($m['IMPORTS'], 'exec_order')).__array != 'undefined'?
				((typeof $93.__array[$94=3]) != 'undefined'?$93.__array[$94]:
					$93.__getitem__($94)):
					$93.__getitem__(3)));
			imports = $p['___import___']('imports.child', null);
			teststring = 'import test';
			try {
				c = imports['child']['Child']();
				self['assertEqual'](c['value'](teststring), teststring);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['fail']($p['getattr'](e, 'message'));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			C = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array($p['getattr']($p['getattr'](imports, 'child'), 'Child'));
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('C', $p['tuple']($bases), $data);
			})();
			c = C();
			self['assertEqual'](c['value'](teststring), teststring);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testImportTest'] = $method;
		$method = $pyjs__bind_method2('testPassMeAClass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var res;
			res = (typeof PassMeAClassFunction == "undefined"?$m.PassMeAClassFunction:PassMeAClassFunction)((typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
			self['assertEqual'](res, 'foo in PassMeAClass');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testPassMeAClass'] = $method;
		$method = $pyjs__bind_method2('testClassAttributeAccess', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['getattr']($m['GetAttribute'], 'getIt'), $p['getattr']($m['WithAttribute'], 'ATTR'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassAttributeAccess'] = $method;
		$method = $pyjs__bind_method2('testNameMapping', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $101,$100,$103,$102,$98,$99,$107,$106,$109,$95,$97,instance,r,$110,$108,$105,$96,$104;
			instance = (typeof MultiBase == "undefined"?$m.MultiBase:MultiBase)('a');
			r = instance['$$prototype'](1, 2, 3);
			self['assertEqual']((typeof ($95=r).__array != 'undefined'?
				((typeof $95.__array[$96=0]) != 'undefined'?$95.__array[$96]:
					$95.__getitem__($96)):
					$95.__getitem__(0)), 'MultiBase');
			self['assertEqual']((typeof ($97=r).__array != 'undefined'?
				((typeof $97.__array[$98=1]) != 'undefined'?$97.__array[$98]:
					$97.__getitem__($98)):
					$97.__getitem__(1)), 1);
			self['assertEqual']((typeof ($99=r).__array != 'undefined'?
				((typeof $99.__array[$100=2]) != 'undefined'?$99.__array[$100]:
					$99.__getitem__($100)):
					$99.__getitem__(2)), 2);
			self['assertEqual']((typeof ($101=r).__array != 'undefined'?
				((typeof $101.__array[$102=3]) != 'undefined'?$101.__array[$102]:
					$101.__getitem__($102)):
					$101.__getitem__(3)), 3);
			instance = (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1)('a', 'b');
			r = instance['$$call'](1, 2, 3);
			self['assertEqual']((typeof ($103=r).__array != 'undefined'?
				((typeof $103.__array[$104=0]) != 'undefined'?$103.__array[$104]:
					$103.__getitem__($104)):
					$103.__getitem__(0)), 'MultiInherit1');
			self['assertEqual']((typeof ($105=r).__array != 'undefined'?
				((typeof $105.__array[$106=1]) != 'undefined'?$105.__array[$106]:
					$105.__getitem__($106)):
					$105.__getitem__(1)), 1);
			self['assertEqual']((typeof ($107=r).__array != 'undefined'?
				((typeof $107.__array[$108=2]) != 'undefined'?$107.__array[$108]:
					$107.__getitem__($108)):
					$107.__getitem__(2)), 2);
			self['assertEqual']((typeof ($109=r).__array != 'undefined'?
				((typeof $109.__array[$110=3]) != 'undefined'?$109.__array[$110]:
					$109.__getitem__($110)):
					$109.__getitem__(3)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNameMapping'] = $method;
		$method = $pyjs__bind_method2('testGlobalClassFactory', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,pmc;
			(typeof gregister == "undefined"?$m.gregister:gregister)('passme', (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
			(typeof gregister == "undefined"?$m.gregister:gregister)('exchild', (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass));
			(typeof gregister == "undefined"?$m.gregister:gregister)('mscp1', (typeof ExampleMultiSuperclassParent1 == "undefined"?$m.ExampleMultiSuperclassParent1:ExampleMultiSuperclassParent1));
			pmc = (typeof ggetObject == "undefined"?$m.ggetObject:ggetObject)('passme');
			self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass', 'foo !in PassMeAClass');
			try {
				pmc = (typeof ggetObject == "undefined"?$m.ggetObject:ggetObject)('mscp1', 5);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual']($p['getattr'](pmc, 'x'), 5, 'pass me class x != 5');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5'");
					}
				}
			}
			try {
				pmc = (typeof ggetObject == "undefined"?$m.ggetObject:ggetObject)('exchild', 5, 7);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual']($p['getattr'](pmc, 'prop_a'), 1, 'pass me class prop_a != 1');
					self['assertEqual']($p['getattr'](pmc, 'prop_b'), 7, 'pass me class prop_b != 7');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGlobalClassFactory'] = $method;
		$method = $pyjs__bind_method2('testClassFactory', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var pmc,$pyjs_try_err,f;
			f = (typeof Factory == "undefined"?$m.Factory:Factory)();
			f['register']('passme', (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
			f['register']('exchild', (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass));
			try {
				pmc = f['getObjectCompilerBug']('passme');
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, 'Compiler bug in class factory test');
					}
				}
			}
			pmc = f['getObject']('passme');
			self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
			try {
				pmc = f['getObject']('exchild', 5, 7);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual']($p['getattr'](pmc, 'prop_a'), 1);
					self['assertEqual']($p['getattr'](pmc, 'prop_b'), 7);
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassFactory'] = $method;
		$method = $pyjs__bind_method2('testClassFactory', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var pmc,$pyjs_try_err,f;
			f = (typeof Factory == "undefined"?$m.Factory:Factory)();
			f['register']('passme', (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
			f['register']('exchild', (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass));
			try {
				pmc = f['getObjectCompilerBug']('passme');
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, 'Compiler bug in class factory test');
					}
				}
			}
			pmc = f['getObject']('passme');
			self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
			try {
				pmc = f['getObject']('exchild', 5, 7);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual']($p['getattr'](pmc, 'prop_a'), 1);
					self['assertEqual']($p['getattr'](pmc, 'prop_b'), 7);
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassFactory'] = $method;
		$method = $pyjs__bind_method2('testImportKeywords', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var imports,dict,enumerate;
			imports = $p['___import___']('imports.enum.super', null);
			self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](imports, '$$enum'), '$$super'), '$$var'), 1);
			self['assertEqual'](imports['$$enum']['$$super']['$$function'](), 2);
			enumerate = $p['___import___']('imports.enumerate', null, null, false);
			self['assertEqual']($p['getattr'](enumerate, 'list'), 1);
			dict = $p['___import___']('imports.enumerate.dict', null, null, false);
			self['assertEqual'](dict(), $p['tuple']([1, 2]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testImportKeywords'] = $method;
		$method = $pyjs__bind_method2('testDescriptors', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,$pyjs_try_err,x,decorated;
			decorated = (typeof Decorated == "undefined"?$m.Decorated:Decorated)();
			$m['revealAccessLog'] = null;
			self['assertEqual']($p['getattr'](decorated, 'x'), 10);
			self['assertEqual']($m['revealAccessLog'], "Retrieving var 'x'");
			decorated.x = 5;
			self['assertEqual']($m['revealAccessLog'], "Updating var 'x': 5");
			self['assertEqual']($p['getattr'](decorated, 'x'), 5);
			$p['delattr'](decorated, 'x');
			self['assertEqual']($m['revealAccessLog'], "Deleting var 'x'");
			try {
				x = $p['getattr'](decorated, 'x');
				self['fail']("Failed to raise error for 'del decorated.x'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['assertTrue'](true);
				} else {
					self['fail']("Failed to raise Attribute error for 'del decorated.x'");
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDescriptors'] = $method;
		$method = $pyjs__bind_method2('testProperty', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var p,$pyjs_try_err,e,x;
			p = (typeof OldStylePropertyDecorating == "undefined"?$m.OldStylePropertyDecorating:OldStylePropertyDecorating)();
			p.x = 1;
			self['assertEqual']($p['getattr'](p, '_x'), 1);
			self['assertEqual']($p['getattr'](p, 'x'), 1);
			$p['delattr'](p, 'x');
			try {
				x = $p['getattr'](p, '_x');
				self['fail']("Failed to raise error for 'x = p._x'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['assertTrue'](true);
				} else {
					self['fail']("Failed to raise Attribute error for 'x = p._x'");
				}
			}
			p = (typeof NewStylePropertyDecorating == "undefined"?$m.NewStylePropertyDecorating:NewStylePropertyDecorating)();
			p.x = 1;
			self['assertEqual']($p['getattr'](p, '_x'), 1);
			self['assertEqual']($p['getattr'](p, 'x'), 1);
			$p['delattr'](p, 'x');
			try {
				x = $p['getattr'](p, '_x');
				self['fail']("Failed to raise error for 'x = p._x'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['assertTrue'](true);
				} else {
					self['fail']("Failed to raise Attribute error for 'x = p._x'");
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testProperty'] = $method;
		$method = $pyjs__bind_method2('testDynamicLoading', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($m['I18N']['i18n']['example'](), 'This is an example');
			self['assertEqual']($m['I18N']['domain']['i18n']['example'](), 'This is a domain example');
			self['assertEqual']($m['I18N']['domain']['subdomain']['i18n']['example'](), 'This is a subdomain example');
			self['assertEqual']($m['I18N']['i18n']['another_example'](), 'This is another example');
			self['assertEqual']($m['I18N']['domain']['i18n']['another_example'](), 'This is another example');
			$m['I18N']['set_locale']('en_US');
			self['assertEqual']($m['I18N']['i18n']['example'](), 'This is an en_US example');
			self['assertEqual']($m['I18N']['domain']['i18n']['example'](), 'This is a domain en_US example');
			self['assertEqual']($m['I18N']['domain']['subdomain']['i18n']['example'](), 'This is a subdomain en_US example');
			self['assertEqual']($m['I18N']['i18n']['another_example'](), 'This is en_US another example');
			self['assertEqual']($m['I18N']['domain']['i18n']['another_example'](), 'This is en_US another example');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDynamicLoading'] = $method;
		$method = $pyjs__bind_method2('testClassesAnywhere', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var A,a;
			A = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(what) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						what = arguments[1];
					}
					var $bool9,$bool8,B;
					if ((($bool9=!(($bool8=what) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9.__nonzero__=='function'?
									$bool9.__nonzero__() :
									(typeof $bool9.__len__=='function'?
										($bool9.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						B = (function(){
							var $cls_definition = new Object();
							var $method;
							$cls_definition.__module__ = 'ClassTest';
							$method = $pyjs__bind_method2('__init__', function() {
								if (this.__is_instance__ === true) {
									var self = this;
								} else {
									var self = arguments[0];
								}

								self.v = 0;
								return null;
							}
	, 1, [null,null,['self']]);
							$cls_definition['__init__'] = $method;
							var $bases = new Array($p['object']);
							var $data = $p['dict']();
							for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
							return $p['_create_class']('B', $p['tuple']($bases), $data);
						})();
					}
					else {
						B = (function(){
							var $cls_definition = new Object();
							var $method;
							$cls_definition.__module__ = 'ClassTest';
							$method = $pyjs__bind_method2('__init__', function() {
								if (this.__is_instance__ === true) {
									var self = this;
								} else {
									var self = arguments[0];
								}

								self.v = 1;
								return null;
							}
	, 1, [null,null,['self']]);
							$cls_definition['__init__'] = $method;
							var $bases = new Array($p['object']);
							var $data = $p['dict']();
							for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
							return $p['_create_class']('B', $p['tuple']($bases), $data);
						})();
					}
					self.b = B();
					return null;
				}
	, 1, [null,null,['self'],['what']]);
				$cls_definition['__init__'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('A', $p['tuple']($bases), $data);
			})();
			a = A(0);
			self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), 0);
			a = A(1);
			self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassesAnywhere'] = $method;
		$method = $pyjs__bind_method2('testClassDefinitionCode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var A,a,$eq8,$eq9,$eq3,$eq6,$eq7,$eq4,$eq5,v,$eq10;
			A = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('__init__', function(what) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						what = arguments[1];
					}
					var B;
					B = (function(){
						var $cls_definition = new Object();
						var $method;
						$cls_definition.__module__ = 'ClassTest';
						if ((($bool11=!(($bool10=what) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
							false :
							(typeof $bool10=='object'?
								(typeof $bool10.__nonzero__=='function'?
									$bool10.__nonzero__() :
									(typeof $bool10.__len__=='function'?
										($bool10.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
								false :
								(typeof $bool11=='object'?
									(typeof $bool11.__nonzero__=='function'?
										$bool11.__nonzero__() :
										(typeof $bool11.__len__=='function'?
											($bool11.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$method = $pyjs__bind_method2('__init__', function() {
								if (this.__is_instance__ === true) {
									var self = this;
								} else {
									var self = arguments[0];
								}

								self.v = 0;
								return null;
							}
	, 1, [null,null,['self']]);
							$cls_definition['__init__'] = $method;
						}
						else {
							$method = $pyjs__bind_method2('__init__', function() {
								if (this.__is_instance__ === true) {
									var self = this;
								} else {
									var self = arguments[0];
								}

								self.v = 1;
								return null;
							}
	, 1, [null,null,['self']]);
							$cls_definition['__init__'] = $method;
						}
						var $bases = new Array($p['object']);
						var $data = $p['dict']();
						for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
						return $p['_create_class']('B', $p['tuple']($bases), $data);
					})();
					self.b = B();
					return null;
				}
	, 1, [null,null,['self'],['what']]);
				$cls_definition['__init__'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('A', $p['tuple']($bases), $data);
			})();
			a = A(0);
			self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), 0);
			a = A(1);
			self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), 1);
			A = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$cls_definition['l'] = $p['list']([1, 2, 3]);
				$cls_definition['l'].__setitem__(1, 22);
				$cls_definition['d'] = $p['dict']([]);
				$cls_definition['d'].__setitem__('a', 1);
				$cls_definition['l1'] = $p['list']([]);
				$cls_definition['l2'] = $p['list']([]);
				$iter2_iter = $p['range'](4);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					$cls_definition['i'] = $iter2_nextval;
					$cls_definition['l1']['append']($cls_definition['i']);
				}
				$cls_definition['i'] = 0;
				while ((($bool12=((($cmp3=$cls_definition['i'])===($cmp4=4)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$cls_definition['l2']['append']($cls_definition['i']);
					$cls_definition['i'] = (typeof ($add13=$cls_definition['i'])==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				}
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('A', $p['tuple']($bases), $data);
			})();
			a = A();
			v = $p['list']([1, 22, 3]);
			self['assertTrue']((($eq3=$p['getattr'](a, 'l'))===($eq4=v)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l'), v])));
			v = $p['dict']([['a', 1]]);
			self['assertTrue']((($eq5=$p['getattr'](a, 'd'))===($eq6=v)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'd'), v])));
			v = $p['list']([0, 1, 2, 3]);
			self['assertTrue']((($eq7=$p['getattr'](a, 'l1'))===($eq8=v)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l1'), v])));
			self['assertTrue']((($eq9=$p['getattr'](a, 'l2'))===($eq10=v)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10))))), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l2'), v])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassDefinitionCode'] = $method;
		$method = $pyjs__bind_method2('testGenericMethodDecorators', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj,res,$bool13,$add15,$add16,$pyjs_try_err,t,msg,e,exc_raised;
			obj = (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods)();
			self['assertEqual'](obj['mtd1']('b'), '1b2');
			self['assertEqual'](obj['mtd2']('b'), '31b24');
			self['assertEqual'](obj['mtd3']('b'), 'abc');
			self['assertEqual'](obj['mtd4']('b'), 'a3b4c');
			exc_raised = false;
			try {
				res = obj['mtd5']('b');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					t = $pyjs_try_err;
					exc_raised = true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertTrue'](exc_raised, 'TypeError wrong arguments count not raised');
			self['assertEqual'](obj['mtd_static']('b'), '5b6');
			self['assertEqual']($pyjs_kwargs_call($m.DecoratedMethods, 'mtd_static', $p['list'](['b']), $p['dict']([]), [{}]), '5b6');
			self['assertEqual'](obj['mtd_static2']('b'), '55b66');
			self['assertEqual']($m.DecoratedMethods['mtd_static']('b'), '5b6');
			self['assertEqual']($m.DecoratedMethods['mtd_static2']('b'), '55b66');
			try {
				self['assertEqual'](obj['mtd_class']('b'), '7b8');
				self['assertEqual'](obj['mtd_class2']('b'), '77b88');
				self['assertEqual']($m.DecoratedMethods['mtd_class']('b'), '7b8');
				self['assertEqual']($m.DecoratedMethods['mtd_class2']('b'), '77b88');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					msg = $p['str'](e);
					if ((($bool13=msg.__contains__('fnc() takes exactly 2 arguments (1 given)')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
							false :
							(typeof $bool13=='object'?
								(typeof $bool13.__nonzero__=='function'?
									$bool13.__nonzero__() :
									(typeof $bool13.__len__=='function'?
										($bool13.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						msg = (typeof ($add15='bug #318 - ')==typeof ($add16=msg) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16));
						self['fail']($p['sprintf']('Bug #580 : %s ', msg));
					}
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGenericMethodDecorators'] = $method;
		$method = $pyjs__bind_method2('testExpressionInherit', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $116,$114,$115,$112,$113,$111,t2,cl,T2,T,Y,X,t;
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('m1', function() {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
					}

					return 1;
				}
	, 1, [null,null,['self']]);
				$cls_definition['m1'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			Y = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				$method = $pyjs__bind_method2('m2', function() {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
					}

					return 2;
				}
	, 1, [null,null,['self']]);
				$cls_definition['m2'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('Y', $p['tuple']($bases), $data);
			})();
			cl = $p['list']([$p['list'], X, Y]);
			T = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array((typeof ($111=cl).__array != 'undefined'?
				((typeof $111.__array[$112=0]) != 'undefined'?$111.__array[$112]:
					$111.__getitem__($112)):
					$111.__getitem__(0)));
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('T', $p['tuple']($bases), $data);
			})();
			self['assertEqual'](T($p['list']([1])), $p['list']([1]));
			T = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array((typeof ($113=cl).__array != 'undefined'?
				((typeof $113.__array[$114=1]) != 'undefined'?$113.__array[$114]:
					$113.__getitem__($114)):
					$113.__getitem__(1)),(typeof ($115=cl).__array != 'undefined'?
				((typeof $115.__array[$116=2]) != 'undefined'?$115.__array[$116]:
					$115.__getitem__($116)):
					$115.__getitem__(2)));
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('T', $p['tuple']($bases), $data);
			})();
			t = T();
			self['assertEqual'](t['m1'](), 1);
			self['assertEqual'](t['m2'](), 2);
			T2 = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ClassTest';
				var $bases = new Array($p['type'](t));
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('T2', $p['tuple']($bases), $data);
			})();
			t2 = T2();
			self['assertEqual'](t2['m1'](), 1);
			self['assertEqual'](t2['m2'](), 2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testExpressionInherit'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ClassTest', $p['tuple']($bases), $data);
	})();
	$m['PassMeAClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('foo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'foo in PassMeAClass';
		}
	, 1, [null,null,['self']]);
		$cls_definition['foo'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PassMeAClass', $p['tuple']($bases), $data);
	})();
	$m['PassMeAClassFunction'] = function(klass) {
		var c;
		c = klass();
		return c['foo']();
	};
	$m['PassMeAClassFunction'].__name__ = 'PassMeAClassFunction';

	$m['PassMeAClassFunction'].__bind_type__ = 0;
	$m['PassMeAClassFunction'].__args__ = [null,null,['klass']];
	$m['method'] = function(self) {

		return 1;
	};
	$m['method'].__name__ = 'method';

	$m['method'].__bind_type__ = 0;
	$m['method'].__args__ = [null,null,['self']];
	$m['ExampleClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['x'] = 'test';
		$cls_definition['a'] = 1;
		$cls_definition['b'] = 2;
		$cls_definition['c'] = ($cls_definition['a'])|($cls_definition['b']);
		$method = $pyjs__bind_method2('sampleClassMethod', function(arg) {
    var cls = this.prototype;

			return $p['tuple']([cls, arg]);
		}
	, 2, [null,null,['cls'],['arg']]);
		$cls_definition['sampleClassMethod'] = $method;
		$method = $pyjs__bind_method2('sampleClassMethodVarargs', function() {
    var cls = this.prototype;
			var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


			return $p['tuple']([cls, args]);
		}
	, 2, ['args',null,['cls']]);
		$cls_definition['sampleClassMethodVarargs'] = $method;
		$method = $pyjs__bind_method2('sampleClassMethodKwargs', function(a, b, c) {
    var cls = this.prototype;
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			return $p['tuple']([cls, a, b, c]);
		}
	, 2, [null,null,['cls'],['a', 0],['b', 1],['c', 2]]);
		$cls_definition['sampleClassMethodKwargs'] = $method;
		$method = $pyjs__bind_method2('sampleStaticMethod', function(arg) {

			return arg;
		}
	, 3, [null,null,['arg']]);
		$cls_definition['sampleStaticMethod'] = $method;
		$method = $pyjs__bind_method2('shouldntWork', function() {
			if (this.__is_instance__ === true) {
				var arg = this;
			} else {
				var arg = arguments[0];
			}
			var $add20,$add17,$add18,$add19;
			return (typeof ($add19=(typeof ($add17='before')==typeof ($add18=arg) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)))==typeof ($add20='after') && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20));
		}
	, 1, [null,null,['arg']]);
		$cls_definition['shouldntWork'] = $method;
		$cls_definition['oldIdiomStaticMethod'] = $p['staticmethod']($p['staticmethod']($cls_definition['shouldntWork']));
		$method = $pyjs__bind_method2('fail_a', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (typeof a == "undefined"?$m.a:a);
		}
	, 1, [null,null,['self']]);
		$cls_definition['fail_a'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleClass', $p['tuple']($bases), $data);
	})();
	$m['x'] = 'global test';
	$m['ExampleParentClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['x'] = 'test';
		$method = $pyjs__bind_method2('__init__', function(a, b) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];

			self.prop_a = a;
			self.prop_b = b;
			return null;
		}
	, 1, [null,null,['self'],['a', 1],['b', 2]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('sampleClassMethod', function(arg) {
    var cls = this.prototype;

			return $p['tuple']([cls, arg]);
		}
	, 2, [null,null,['cls'],['arg']]);
		$cls_definition['sampleClassMethod'] = $method;
		$method = $pyjs__bind_method2('get_x', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_x'] = $method;
		$method = $pyjs__bind_method2('inert', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			return x;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['inert'] = $method;
		$method = $pyjs__bind_method2('global_x1', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['x'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['global_x1'] = $method;
		$method = $pyjs__bind_method2('global_x2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['x'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['global_x2'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleParentClass', $p['tuple']($bases), $data);
	})();
	$m['ExampleChildClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(a, b) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];

			$pyjs_kwargs_call($m['ExampleParentClass'], '__init__', null, null, [{b:b}, self]);
			return null;
		}
	, 1, [null,null,['self'],['a', 11],['b', 22]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['ExampleParentClass']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleChildClass', $p['tuple']($bases), $data);
	})();
	$m['ExampleParentObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['x'] = $p['list']([]);
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleParentObject', $p['tuple']($bases), $data);
	})();
	$m['ExampleChildObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		var $bases = new Array($m['ExampleParentObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleChildObject', $p['tuple']($bases), $data);
	})();
	$m['ExampleGrandParentConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['z'] = 'grandparent';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.r = 'older';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('older', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.w = 2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['older'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleGrandParentConstructor', $p['tuple']($bases), $data);
	})();
	$m['ExampleParentConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['y'] = 'parent';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.x = 'test';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('dosomething', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.m = 1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['dosomething'] = $method;
		var $bases = new Array($m['ExampleGrandParentConstructor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleParentConstructor', $p['tuple']($bases), $data);
	})();
	$m['ExampleChildConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['ExampleParentConstructor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleChildConstructor', $p['tuple']($bases), $data);
	})();
	$m['ExampleChildNoConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		var $bases = new Array($m['ExampleParentConstructor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleChildNoConstructor', $p['tuple']($bases), $data);
	})();
	$m['ExampleChildExplicitConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['ExampleParentConstructor']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['ExampleParentConstructor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleChildExplicitConstructor', $p['tuple']($bases), $data);
	})();
	$m['ObjectClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.prop = 1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ObjectClass', $p['tuple']($bases), $data);
	})();
	$m['OtherClass1'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__new__', function(cls) {

			return $m['ObjectClass']();
		}
	, 3, [null,null,['cls']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherClass1', $p['tuple']($bases), $data);
	})();
	$m['OtherSubclass1'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		var $bases = new Array($m['OtherClass1']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherSubclass1', $p['tuple']($bases), $data);
	})();
	$m['OtherClass2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['init'] = false;
		$method = $pyjs__bind_method2('__new__', function(cls) {

			return $m['ObjectClass']['__new__'](cls);
		}
	, 3, [null,null,['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.init = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherClass2', $p['tuple']($bases), $data);
	})();
	$m['OtherClass3'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__new__', function(cls, x, y) {
			var val;
			val = $p['object']['__new__'](cls);
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			val.x = $tupleassign2[0];
			val.y = $tupleassign2[1];
			return val;
		}
	, 3, [null,null,['cls'],['x'],['y']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherClass3', $p['tuple']($bases), $data);
	})();
	$m['OtherClass4Mixin'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherClass4Mixin', $p['tuple']($bases), $data);
	})();
	$m['OtherClass4'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__new__', function(cls) {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof cls != 'undefined') {
					if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cls;
						cls = arguments[1];
					}
				} else {
				}
			}

			return $pyjs_kwargs_call($p['$$super']($m['OtherClass4'], cls), '__new__', args, kwargs, [{}, cls]);
		}
	, 3, ['args',['kwargs'],['cls']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($p['object'],$m['OtherClass4Mixin']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherClass4', $p['tuple']($bases), $data);
	})();
	$m['OtherSubclass4'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self.args = args;
			self.kwargs = kwargs;
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['OtherClass4']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OtherSubclass4', $p['tuple']($bases), $data);
	})();
	$m['ExampleMultiSuperclassParent1'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['x'] = 'Initial X';
		$method = $pyjs__bind_method2('__init__', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self.x = x;
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_value', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_value'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleMultiSuperclassParent1', $p['tuple']($bases), $data);
	})();
	$m['ExampleMultiSuperclassParent2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['y'] = 'Initial Y';
		$method = $pyjs__bind_method2('__init__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}

			self.y = y;
			return null;
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_value', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'y');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_value'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleMultiSuperclassParent2', $p['tuple']($bases), $data);
	})();
	$m['ExampleMultiSuperclassNoConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['z'] = 'Initial Z';
		var $bases = new Array($m['ExampleMultiSuperclassParent1'],$m['ExampleMultiSuperclassParent2']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleMultiSuperclassNoConstructor', $p['tuple']($bases), $data);
	})();
	$m['ExampleMultiSuperclassExplicitConstructor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['z'] = 'Initial Z';
		$method = $pyjs__bind_method2('__init__', function(z) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				z = arguments[1];
			}

			self.z = z;
			return null;
		}
	, 1, [null,null,['self'],['z']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_value', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'z');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_value'] = $method;
		$method = $pyjs__bind_method2('get_values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return ':'['join']($p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'z')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_values'] = $method;
		var $bases = new Array($m['ExampleMultiSuperclassParent1'],$m['ExampleMultiSuperclassParent2']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ExampleMultiSuperclassExplicitConstructor', $p['tuple']($bases), $data);
	})();
	$m['ClassArguments'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('no_args', function() {
			if (this.__is_instance__ === true) {
			} else {
			}

			return false;
		}
	, 1, [null,null]);
		$cls_definition['no_args'] = $method;
		$method = $pyjs__bind_method2('self_arg', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['self_arg'] = $method;
		$method = $pyjs__bind_method2('two_args', function(arg1) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg1 = arguments[1];
			}

			return arg1;
		}
	, 1, [null,null,['self'],['arg1']]);
		$cls_definition['two_args'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ClassArguments', $p['tuple']($bases), $data);
	})();
	$m['MultiBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['$$name'] = 'MultiBase';
		$method = $pyjs__bind_method2('__init__', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self.x = x;
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_x', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_x'] = $method;
		$method = $pyjs__bind_method2('set_x', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self.x = x;
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['set_x'] = $method;
		$method = $pyjs__bind_method2('$$prototype', function($$default, $$arguments, $$this) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
				$$arguments = arguments[2];
				$$this = arguments[3];
			}
			var $$default,$$this,$$arguments;
			return $p['tuple']([$p['getattr'](self, '$$name'), $$default, $$arguments, $$this]);
		}
	, 1, [null,null,['self'],['$$default'],['$$arguments'],['$$this']]);
		$cls_definition['$$prototype'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'MultiBase';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MultiBase', $p['tuple']($bases), $data);
	})();
	$m['MultiInherit1'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['$$name'] = 'MultiInherit1';
		$method = $pyjs__bind_method2('__init__', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self.y = y;
			$m['MultiBase']['__init__'](self, x);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_y', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'y');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_y'] = $method;
		$method = $pyjs__bind_method2('$$call', function($$default, $$arguments, $$this) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
				$$arguments = arguments[2];
				$$this = arguments[3];
			}
			var $$default,$$this,$$arguments;
			return self['$$prototype']($$default, $$arguments, $$this);
		}
	, 1, [null,null,['self'],['$$default'],['$$arguments'],['$$this']]);
		$cls_definition['$$call'] = $method;
		var $bases = new Array($m['MultiBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MultiInherit1', $p['tuple']($bases), $data);
	})();
	$m['MultiInherit2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['$$name'] = 'MultiInherit2';
		$method = $pyjs__bind_method2('__init__', function(x, z) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				z = arguments[2];
			}

			self.z = z;
			$m['MultiBase']['__init__'](self, x);
			return null;
		}
	, 1, [null,null,['self'],['x'],['z']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_z', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'z');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_z'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'MultiInherit2';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'MultiInherit2';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		var $bases = new Array($m['MultiBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MultiInherit2', $p['tuple']($bases), $data);
	})();
	$m['DoubleInherit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['$$name'] = 'DoubleInherit';
		$method = $pyjs__bind_method2('__init__', function(x, y, z) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				z = arguments[3];
			}

			$m['MultiInherit1']['__init__'](self, x, y);
			$m['MultiInherit2']['__init__'](self, x, z);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MultiInherit1'],$m['MultiInherit2']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DoubleInherit', $p['tuple']($bases), $data);
	})();
	$m['DoubleInheritReversed'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['$$name'] = 'DoubleInheritReversed';
		$method = $pyjs__bind_method2('__init__', function(x, y, z) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				z = arguments[3];
			}

			$m['MultiInherit1']['__init__'](self, x, y);
			$m['MultiInherit2']['__init__'](self, x, z);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MultiInherit2'],$m['MultiInherit1']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DoubleInheritReversed', $p['tuple']($bases), $data);
	})();
	$m['RecurseMe'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['chain'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['chain']['append'](0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RecurseMe', $p['tuple']($bases), $data);
	})();
	$m['RecurseMe'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['$$super']($p['getattr'](self, '__class__'), self)['__init__']();
			self['chain']['append'](1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['RecurseMe']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RecurseMe', $p['tuple']($bases), $data);
	})();
	$m['Factory'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['_classes'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('register', function(className, classe) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				className = arguments[1];
				classe = arguments[2];
			}

			$p['getattr']($m['Factory'], '_classes').__setitem__(className, classe);
			return null;
		}
	, 1, [null,null,['self'],['className'],['classe']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('getObjectCompilerBug', function(className) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kargs != 'undefined') args.__array.push(kargs);
					var kargs = arguments[arguments.length+1];
				} else {
					delete kargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				className = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kargs != 'undefined') args.__array.push(kargs);
					kargs = arguments[arguments.length+1];
				} else {
					delete kargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kargs == 'undefined') {
				kargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kargs = className;
						className = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $117,$118;
			return $pyjs_kwargs_call(null, (typeof ($117=$p['getattr']($m['Factory'], '_classes')).__array != 'undefined'?
				((typeof $117.__array[$118=className]) != 'undefined'?$117.__array[$118]:
					$117.__getitem__($118)):
					$117.__getitem__(className)), args, kargs, [{}]);
		}
	, 1, ['args',['kargs'],['self'],['className']]);
		$cls_definition['getObjectCompilerBug'] = $method;
		$method = $pyjs__bind_method2('getObject', function(className) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kargs != 'undefined') args.__array.push(kargs);
					var kargs = arguments[arguments.length+1];
				} else {
					delete kargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				className = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kargs != 'undefined') args.__array.push(kargs);
					kargs = arguments[arguments.length+1];
				} else {
					delete kargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kargs == 'undefined') {
				kargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kargs = className;
						className = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var f,$119,$120;
			f = (typeof ($119=$p['getattr']($m['Factory'], '_classes')).__array != 'undefined'?
				((typeof $119.__array[$120=className]) != 'undefined'?$119.__array[$120]:
					$119.__getitem__($120)):
					$119.__getitem__(className));
			return $pyjs_kwargs_call(null, f, args, kargs, [{}]);
		}
	, 1, ['args',['kargs'],['self'],['className']]);
		$cls_definition['getObject'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Factory', $p['tuple']($bases), $data);
	})();
	$m['gclasses'] = $p['dict']([]);
	$m['gregister'] = function(className, classe) {

		$m['gclasses'].__setitem__(className, classe);
		return null;
	};
	$m['gregister'].__name__ = 'gregister';

	$m['gregister'].__bind_type__ = 0;
	$m['gregister'].__args__ = [null,null,['className'],['classe']];
	$m['ggetObject'] = function(className) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

		var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
			if (typeof kargs != 'undefined') args.__array.push(kargs);
			kargs = arguments[arguments.length+1];
		} else {
			delete kargs['$pyjs_is_kwarg'];
		}
		if (typeof kargs == 'undefined') {
			kargs = $p['__empty_dict']();
			if (typeof className != 'undefined') {
				if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
					kargs = className;
					className = arguments[1];
				}
			} else {
			}
		}
		var classe,$122,$121;
		classe = (typeof ($121=$m['gclasses']).__array != 'undefined'?
			((typeof $121.__array[$122=className]) != 'undefined'?$121.__array[$122]:
				$121.__getitem__($122)):
				$121.__getitem__(className));
		return $pyjs_kwargs_call(null, classe, args, kargs, [{}]);
	};
	$m['ggetObject'].__name__ = 'ggetObject';

	$m['ggetObject'].__bind_type__ = 0;
	$m['ggetObject'].__args__ = ['args',['kargs'],['className']];
	$m['revealAccessLog'] = null;
	$m['RevealAccess'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(initval, name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				initval = arguments[1];
				name = arguments[2];
			}
			if (typeof initval == 'undefined') initval=arguments.callee.__args__[3][1];
			if (typeof name == 'undefined') name=arguments.callee.__args__[4][1];

			self.val = initval;
			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['initval', null],['name', 'var']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];

			$m['revealAccessLog'] = $p['sprintf']('Retrieving %s', $p['getattr'](self, '$$name'));
			return $p['getattr'](self, 'val');
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, val) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				val = arguments[2];
			}

			$m['revealAccessLog'] = $p['sprintf']('Updating %s: %s', $p['tuple']([$p['getattr'](self, '$$name'), val]));
			self.val = val;
			return null;
		}
	, 1, [null,null,['self'],['obj'],['val']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			$m['revealAccessLog'] = $p['sprintf']('Deleting %s', $p['getattr'](self, '$$name'));
			$p['delattr'](self, 'val');
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RevealAccess', $p['tuple']($bases), $data);
	})();
	$m['Decorated'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$cls_definition['x'] = $m['RevealAccess'](10, "var 'x'");
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Decorated', $p['tuple']($bases), $data);
	})();
	$m['OldStylePropertyDecorating'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self._x = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getx', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getx'] = $method;
		$method = $pyjs__bind_method2('setx', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self._x = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setx'] = $method;
		$method = $pyjs__bind_method2('delx', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['delattr'](self, '_x');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['delx'] = $method;
		$cls_definition['x'] = $p['property']($p['staticmethod']($cls_definition['getx']), $p['staticmethod']($cls_definition['setx']), $p['staticmethod']($cls_definition['delx']), "I'm the 'x' property.");
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OldStylePropertyDecorating', $p['tuple']($bases), $data);
	})();
	$m['Property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or1,$or2,$bool14,$bool15,$bool16,$bool17;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if ((($bool17=((($bool15=$or1=!(($bool14=(doc === null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:!(($bool16=$p['hasattr'](fget, '__doc__')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = $p['getattr'](fget, '__doc__');
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $bool18,$bool19;
			if ((($bool18=(obj === null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self;
			}
			if ((($bool19=($p['getattr'](self, 'fget') === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $p['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $bool20;
			if ((($bool20=($p['getattr'](self, 'fset') === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $p['AttributeError'];
				var $pyjs__raise_expr2 = "can't set attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $bool21;
			if ((($bool21=($p['getattr'](self, 'fdel') === null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $p['AttributeError'];
				var $pyjs__raise_expr2 = "can't delete attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		$method = $pyjs__bind_method2('property_setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self['__setattr__']('fset', fset);
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['property_setter'] = $method;
		$method = $pyjs__bind_method2('property_deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self['__setattr__']('fdel', fdel);
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['property_deleter'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Property', $p['tuple']($bases), $data);
	})();
	$m['property'] = $p['property'];
	if ((($bool23=!(($bool22=$p['hasattr']($m['property'], 'setter')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
		false :
		(typeof $bool22=='object'?
			(typeof $bool22.__nonzero__=='function'?
				$bool22.__nonzero__() :
				(typeof $bool22.__len__=='function'?
					($bool22.__len__()>0 ?
						true :
						false) :
					true ) ) :
			 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
			false :
			(typeof $bool23=='object'?
				(typeof $bool23.__nonzero__=='function'?
					$bool23.__nonzero__() :
					(typeof $bool23.__len__=='function'?
						($bool23.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['property'] = $m['Property'];
	}
	$m['NewStylePropertyDecorating'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self._x = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('x', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['x'] = $m['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('x', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self._x = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['x'] = $cls_definition['x']['setter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('x', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['delattr'](self, '_x');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['x'] = $cls_definition['x']['deleter']($p['staticmethod']($method));
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NewStylePropertyDecorating', $p['tuple']($bases), $data);
	})();
	$m['SuperArg1'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			self.a1_args = $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])]);
			return null;
		}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SuperArg1', $p['tuple']($bases), $data);
	})();
	$m['SuperArg2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			self.a2_args = $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])]);
			$pyjs_kwargs_call($p['$$super']($m['SuperArg2'], self), '__init__', null, null, [{a:a, b:b, c:c}]);
			return null;
		}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SuperArg1']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SuperArg2', $p['tuple']($bases), $data);
	})();
	$m['SuperArg3'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			self.a3_args = $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])]);
			$p['$$super']($m['SuperArg3'], self)['__init__'](a, b, c);
			return null;
		}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SuperArg1']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SuperArg3', $p['tuple']($bases), $data);
	})();
	$m['mdeco1'] = function(f) {
		var fn1;
		fn1 = function(self, x) {
			var $add21,$add22,$add24,$bool25,$bool24,$add23;
			if ((($bool25=!(($bool24=$p['isinstance'](self, (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('fn1 - self is not instance of DecoratedMethods'));
			}
			return (typeof ($add23=(typeof ($add21='1')==typeof ($add22=f(self, x)) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22)))==typeof ($add24='2') && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24));
		};
		fn1.__name__ = 'fn1';

		fn1.__bind_type__ = 0;
		fn1.__args__ = [null,null,['self'],['x']];
		return fn1;
	};
	$m['mdeco1'].__name__ = 'mdeco1';

	$m['mdeco1'].__bind_type__ = 0;
	$m['mdeco1'].__args__ = [null,null,['f']];
	$m['mdeco2'] = function(f) {
		var fn2;
		fn2 = function(self, x) {
			var $add28,$add25,$add27,$add26,$bool27,$bool26;
			if ((($bool27=!(($bool26=$p['isinstance'](self, (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('fn2 - self is not instance of DecoratedMethods'));
			}
			return (typeof ($add27=(typeof ($add25='3')==typeof ($add26=f(self, x)) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26)))==typeof ($add28='4') && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28));
		};
		fn2.__name__ = 'fn2';

		fn2.__bind_type__ = 0;
		fn2.__args__ = [null,null,['self'],['x']];
		return fn2;
	};
	$m['mdeco2'].__name__ = 'mdeco2';

	$m['mdeco2'].__bind_type__ = 0;
	$m['mdeco2'].__args__ = [null,null,['f']];
	$m['mdeco_with_wrong_args'] = function(f) {
		var fn_wwa;
		fn_wwa = function(x) {
			var $add29,$add30,$add31,$add32;
			return (typeof ($add31=(typeof ($add29='5')==typeof ($add30=f(x)) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30)))==typeof ($add32='6') && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32));
		};
		fn_wwa.__name__ = 'fn_wwa';

		fn_wwa.__bind_type__ = 0;
		fn_wwa.__args__ = [null,null,['x']];
		return fn_wwa;
	};
	$m['mdeco_with_wrong_args'].__name__ = 'mdeco_with_wrong_args';

	$m['mdeco_with_wrong_args'].__bind_type__ = 0;
	$m['mdeco_with_wrong_args'].__args__ = [null,null,['f']];
	$m['mdeco_static'] = function(f) {
		var fns;
		fns = function(x) {
			var $add35,$add36,$add34,$add33;
			return (typeof ($add35=(typeof ($add33='5')==typeof ($add34=f(x)) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34)))==typeof ($add36='6') && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36));
		};
		fns.__name__ = 'fns';

		fns.__bind_type__ = 0;
		fns.__args__ = [null,null,['x']];
		return fns;
	};
	$m['mdeco_static'].__name__ = 'mdeco_static';

	$m['mdeco_static'].__bind_type__ = 0;
	$m['mdeco_static'].__args__ = [null,null,['f']];
	$m['mdeco_class'] = function(f) {
		var fnc;
		fnc = function(cls, x) {
			var $add38,$add39,$add37,$add40,$bool28;
			if ((($bool28=(cls !== (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('fnc - cls is not DecoratedMethods'));
			}
			return (typeof ($add39=(typeof ($add37='7')==typeof ($add38=f(cls, x)) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$p['op_add']($add37,$add38)))==typeof ($add40='8') && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40));
		};
		fnc.__name__ = 'fnc';

		fnc.__bind_type__ = 0;
		fnc.__args__ = [null,null,['cls'],['x']];
		return fnc;
	};
	$m['mdeco_class'].__name__ = 'mdeco_class';

	$m['mdeco_class'].__bind_type__ = 0;
	$m['mdeco_class'].__args__ = [null,null,['f']];
	$m['DecoratedMethods'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClassTest';
		$method = $pyjs__bind_method2('mtd1', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			return x;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['mtd1'] = $pyjs__decorated_method('mtd1', $m['mdeco1']($p['staticmethod']($method)), 1);
		$method = $pyjs__bind_method2('mtd2', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			return x;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['mtd2'] = $pyjs__decorated_method('mtd2', $pyjs__decorated_method('mtd2', $m['mdeco2']($m['mdeco1']($p['staticmethod']($method))), 1), 1);
		$method = $pyjs__bind_method2('mtd3', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			return x;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['mtd3'] = $pyjs__decorated_method('mtd3', $m['imports']['decors']['othermoduledeco1']($p['staticmethod']($method)), 1);
		$method = $pyjs__bind_method2('mtd4', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			return x;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['mtd4'] = $pyjs__decorated_method('mtd4', $pyjs__decorated_method('mtd4', $m['imports']['decors']['othermoduledeco1']($m['mdeco2']($p['staticmethod']($method))), 1), 1);
		$method = $pyjs__bind_method2('mtd5', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			return x;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['mtd5'] = $pyjs__decorated_method('mtd5', $m['mdeco_with_wrong_args']($p['staticmethod']($method)), 1);
		$method = $pyjs__bind_method2('mtd_static', function(x) {

			return x;
		}
	, 3, [null,null,['x']]);
		$cls_definition['mtd_static'] = $p['staticmethod']($m['mdeco_static']($p['staticmethod']($method)));
		$method = $pyjs__bind_method2('mtd_static2', function(x) {

			return x;
		}
	, 3, [null,null,['x']]);
		$cls_definition['mtd_static2'] = $p['staticmethod']($m['mdeco_static']($m['mdeco_static']($p['staticmethod']($method))));
		$method = $pyjs__bind_method2('mtd_class', function(x) {
    var cls = this.prototype;

			return x;
		}
	, 2, [null,null,['cls'],['x']]);
		$cls_definition['mtd_class'] = $m['mdeco_class']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('mtd_class2', function(x) {
    var cls = this.prototype;

			return x;
		}
	, 2, [null,null,['cls'],['x']]);
		$cls_definition['mtd_class2'] = $m['mdeco_class']($m['mdeco_class']($p['staticmethod']($method)));
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DecoratedMethods', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ClassTest */


/* end module: ClassTest */


/*
PYJS_DEPS: ['sys', 'UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_BROWSER', 'imports.circ1', 'imports', 'imports.exec_order', 'imports.imports', 'I18N', 'imports.classes.WithAttribute', 'imports.classes', 'imports.decors', 'imports.child', 'imports.enum.super', 'imports.enum', 'imports.enumerate', 'imports.enumerate.dict']
*/

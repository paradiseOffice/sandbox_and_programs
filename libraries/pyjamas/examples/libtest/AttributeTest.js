/* start module: AttributeTest */
$pyjs.loaded_modules['AttributeTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AttributeTest'].__was_initialized__) return $pyjs.loaded_modules['AttributeTest'];
	var $m = $pyjs.loaded_modules["AttributeTest"];
	$m.__repr__ = function() { return "<module: AttributeTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AttributeTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	$m['$$name'] = 'Name';
	$m['$$prototype'] = 'Prototype';
	$m['$$call'] = 'Call';
	$m['$$apply'] = 'Apply';
	$m['$$constructor'] = 'Constructor';
	$m['Foo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'AttributeTest';
		$cls_definition['a'] = 1;
		$cls_definition['b'] = $p['list']([1, 2]);
		$cls_definition['$$name'] = 'Foo';
		$cls_definition['$$label'] = 'label';
		$method = $pyjs__bind_method2('__init__', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}

			self.v = v;
			return null;
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getV', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'v');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getV'] = $method;
		$method = $pyjs__bind_method2('$$call', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var apply,prototype;
			name = name['upper']();
			prototype = $p['getattr'](self, '$$name');
			apply = self['$$name']['lower']();
			return $p['tuple']([name, prototype, apply, $p['getattr'](self, '$$name')]);
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['$$call'] = $method;
		$method = $pyjs__bind_method2('$$do', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'do';
		}
	, 1, [null,null,['self']]);
		$cls_definition['$$do'] = $method;
		$method = $pyjs__bind_method2('delete_me', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['delete_me'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Foo', $p['tuple']($bases), $data);
	})();
	$m['AttributeTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'AttributeTest';
		$method = $pyjs__bind_method2('testHasattr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['hasattr'](self, 'getName'), true, "AttrTest should have method 'getName'");
			self['assertEqual']($p['hasattr'](self, 'blah'), false, "AttrTest has no method 'getName'");
			self['assertEqual']($p['hasattr']('', 'find'), true, "str should have method 'find', bug #483");
			self['assertEqual']($p['hasattr'](1.0, 'real'), true, "float should have attribute 'real', bug #483");
			self['assertEqual']($p['hasattr'](1, 'real'), true, "int should have attribute 'real', bug #483");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testHasattr'] = $method;
		$method = $pyjs__bind_method2('testGetattr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var foo,e,$pyjs_try_err,func;
			func = $p['getattr'](self, 'getName');
			self['assertEqual'](func(), 'AttributeTest', "getattr does not return correct value'");
			self['assertEqual']($p['getattr']($m['Foo'], 'name'), 'Foo', 'attribute mapping, bug #521');
			self['assertEqual'](1, $p['getattr']($m['Foo'], 'notthere', 1));
			foo = $m['Foo'](1);
			self['assertEqual']($p['getattr'](foo, 'v'), $p['getattr'](foo, 'v'));
			self['assertEqual']($p['getattr'](foo, 'v'), $p['getattr'](foo, 'v'));
			self['assertEqual']($p['getattr'](1, 'x', 2), 2);
			self['assertEqual']($p['getattr'](null, 'x', 2), 2);
			try {
				self['assertEqual'](1, $p['getattr'](foo, 'vv'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['assertEqual']($p['getattr']($p['getattr'](e, '__class__'), '__name__'), 'AttributeError');
					return null;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['fail']('No AttributeError raised');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGetattr'] = $method;
		$method = $pyjs__bind_method2('testSetAttr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var f1,f3,f2;
			f1 = $m['Foo'](1);
			self['assertEqual'](f1['getV'](), 1);
			f2 = $m['Foo'](2);
			self['assertEqual'](f2['getV'](), 2);
			f3 = $m['Foo'](3);
			self['assertEqual'](f3['getV'](), 3);
			$p['setattr'](f1, 'getV', $p['getattr'](f2, 'getV'));
			self['assertEqual'](f1['getV'](), 2);
			$p['setattr'](f1, 'getV', $p['getattr'](f3, 'getV'));
			self['assertEqual'](f1['getV'](), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSetAttr'] = $method;
		$method = $pyjs__bind_method2('testDelAttr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,Foo1,$pyjs_try_err,foo,foo1;
			foo = $m['Foo'](1);
			self['assertEqual']($p['hasattr'](foo, 'v'), true);
			$p['delattr'](foo, 'v');
			self['assertEqual']($p['hasattr'](foo, 'v'), false);
			self['assertEqual']($p['hasattr'](foo, 'getV'), true);
			try {
				$p['delattr'](foo, 'getV');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['assertEqual']($p['str'](e), "Foo instance has no attribute 'getV'");
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			Foo1 = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'AttributeTest';
				var $bases = new Array($m['Foo']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('Foo1', $p['tuple']($bases), $data);
			})();
			foo1 = Foo1(1);
			try {
				$p['delattr'](foo, 'delete_me');
				self['fail']('Bug #697: No AttributeError raised');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertEqual']($p['hasattr'](foo, 'delete_me'), true);
			try {
				$p['delattr'](Foo1, 'delete_me');
				self['fail']('Bug #697: No AttributeError raised');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertEqual']($p['hasattr'](Foo1, 'delete_me'), true, "Bug #697: Foo1 should still have method 'delete_me'");
			$p['delattr']($m['Foo'], 'delete_me');
			self['assertEqual']($p['hasattr']($m['Foo'], 'delete_me'), false, "Foo shouldn't have method 'delete_me'");
			self['assertEqual']($p['hasattr'](Foo1, 'delete_me'), false, "Foo1 shouldn't have method 'delete_me'");
			self['assertEqual']($p['hasattr'](foo, 'delete_me'), false, "foo shouldn't have method 'delete_me'");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDelAttr'] = $method;
		$method = $pyjs__bind_method2('testAttrErr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var foo,$pyjs_try_err,v;
			foo = $m['Foo'](1);
			try {
				v = $p['getattr'](foo, 'bar');
				self['fail']('No Error raised on foo.bar');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['assertTrue'](true, 'Exception raised');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testAttrErr'] = $method;
		$method = $pyjs__bind_method2('testInstanceAttr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var foo_fn,$pyjs_try_err,t,foo,$2,$1;
			foo = $m['Foo'](1);
			foo_fn = $p['getattr'](foo, 'getV');
			try {
				t = foo_fn();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					t = null;
				}
			}
			self['assertEqual'](t, 1);
			foo.getV = 2;
			try {
				t = foo_fn();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					t = null;
				}
			}
			self['assertEqual'](t, 1);
			t = $p['getattr'](foo, 'a');
			foo.a = 2;
			self['assertEqual'](t, 1);
			t = $p['getattr'](foo, 'b');
			foo['b']['append'](3);
			self['assertEqual']((typeof ($1=t).__array != 'undefined'?
				((typeof $1.__array[$2=2]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testInstanceAttr'] = $method;
		$method = $pyjs__bind_method2('testAttributMapping', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,name,f,$pyjs_try_err,constructor,apply,prototype;
			f = $m['Foo'](1);
			self['assertEqual']($p['getattr']($m['Foo'], '$$name'), 'Foo');
			self['assertEqual']($p['getattr'](f, '$$name'), 'Foo');
			var $tupleassign1 = $p['__ass_unpack'](f['$$call']('bAr'), 4, null);
			name = $tupleassign1[0];
			prototype = $tupleassign1[1];
			apply = $tupleassign1[2];
			constructor = $tupleassign1[3];
			self['assertEqual'](name, 'BAR');
			self['assertEqual'](prototype, 'Foo');
			self['assertEqual'](apply, 'foo');
			self['assertEqual'](constructor, 'Foo');
			self['assertEqual']($p['getattr']($m['Foo'], '$$label'), 'label');
			self['assertEqual']($p['getattr'](f, '$$label'), 'label');
			self['assertEqual'](f['$$do'](), 'do');
			self['assertEqual']($p['getattr'](f, 'do')(), 'do');
			$p['setattr']($m['Foo'], 'typeof', 1);
			self['assertEqual']($p['getattr'](f, 'typeof'), 1);
			try {
				self['assertEqual']($p['getattr'](f, '$$typeof'), 1);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
					self['fail']('Bug #402 setattr error for keywords');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertTrue']($p['hasattr']($m['Foo'], 'typeof'));
			$p['delattr']($m['Foo'], 'typeof');
			self['assertFalse']($p['hasattr']($m['Foo'], 'typeof'));
			$p['setattr']($m['Foo'], 'typeof', 2);
			self['assertTrue']($p['hasattr']($m['Foo'], 'typeof'));
			$p['delattr']($m['Foo'], '$$typeof');
			self['assertFalse']($p['hasattr']($m['Foo'], 'typeof'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testAttributMapping'] = $method;
		$method = $pyjs__bind_method2('testTypeAttributes', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$lambda1,$cmp2,$pyjs_try_err,$bool1,x,e;
			try {
				x = $p['getattr']($p['list']([]), 'append');
				x = $p['getattr']($p['dict']([]), 'get');
				if ((($bool1=((((($cmp1=$p['getattr']($m['sys'], 'version_info'))===($cmp2=$p['tuple']([2, 6]))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					x = $p['getattr']($p['tuple']([1, 2, 3]), 'count');
				}
				var 				$lambda1 = function(x) {

					return (typeof z == "undefined"?$m.z:z);
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null,['x']];
				x = $p['getattr']($lambda1, '__name__');
				x = $p['getattr']($p['__getslice']($p['list']([1, 2, 3, 4]), 1, 2), 'append');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					e = $pyjs_try_err;
					self['fail']($p['sprintf']("Base type attribute, #594, '%s'", e));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				x = $p['getattr']('asdfgd', 'rjust');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					e = $pyjs_try_err;
					self['fail']($p['sprintf']("String attribute, #595, '%s'", e));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTypeAttributes'] = $method;
		$method = $pyjs__bind_method2('testExpressionAttributeCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s3,s2,l,$3,$add2,$add3,$add1,$add6,$add4,$add5,$4,s1;
			s1 = '    1234';
			s2 = '5678    ';
			s3 = function() {

				return ' 6 ';
			};
			s3.__name__ = 's3';

			s3.__bind_type__ = 0;
			s3.__args__ = [null,null];
			l = $p['list']([' 1 ', ' 2', '3 ']);
			self['assertEqual']((typeof ($add1=s1)==typeof ($add2=s2) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))['strip'](), '12345678');
			self['assertEqual']((typeof ($add3=s1)==typeof ($add4='') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))['strip'](), '1234');
			self['assertEqual']((typeof ($3=l).__array != 'undefined'?
				((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(0))['strip'](), '1');
			self['assertEqual'](''['join'](l)['strip'](), '1  23');
			self['assertEqual']((typeof ($add5=s3())==typeof ($add6=s2) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))['strip'](), '6 5678');
			self['assertEqual'](s3()['strip'](), '6');
			self['assertEqual'](' 6 '['strip'](), '6');
			self['assertEqual']($p['list']([1, 2, 3])['pop'](), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testExpressionAttributeCall'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AttributeTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end AttributeTest */


/* end module: AttributeTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'sys']
*/

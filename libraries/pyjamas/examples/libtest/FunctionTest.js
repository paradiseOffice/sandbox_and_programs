/* start module: FunctionTest */
$pyjs.loaded_modules['FunctionTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['FunctionTest'].__was_initialized__) return $pyjs.loaded_modules['FunctionTest'];
	var $m = $pyjs.loaded_modules["FunctionTest"];
	$m.__repr__ = function() { return "<module: FunctionTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'FunctionTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['PassMeAClass'] = $p['___import___']('ClassTest.PassMeAClass', null, null, false);
	$m['ExampleChildClass'] = $p['___import___']('ClassTest.ExampleChildClass', null, null, false);
	$m['ExampleMultiSuperclassParent1'] = $p['___import___']('ClassTest.ExampleMultiSuperclassParent1', null, null, false);
	$m['Factory2'] = $p['___import___']('Factory2', null);
	$m['imports'] = $p['___import___']('imports.decors', null);
	$m['imports'] = $p['___import___']('imports.enum.Late', null);
	$m['Handler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'FunctionTest';
		$method = $pyjs__bind_method2('__init__', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self._x = x;
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('handle', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}

			return ($p['getattr'](self, '_x') === y);
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['handle'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Handler', $p['tuple']($bases), $data);
	})();
	$m['Callable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'FunctionTest';
		$method = $pyjs__bind_method2('__call__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 5;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Callable', $p['tuple']($bases), $data);
	})();
	$m['aProcedure'] = function() {
		var x,$bool1;
		x = 1;
		if ((($bool1=(x === 2)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return 'something';
		}
		return null;
	};
	$m['aProcedure'].__name__ = 'aProcedure';

	$m['aProcedure'].__bind_type__ = 0;
	$m['aProcedure'].__args__ = [null,null];
	$m['aFunctionWithOnlyDoc'] = function() {

 		return null;
	};
	$m['aFunctionWithOnlyDoc'].__name__ = 'aFunctionWithOnlyDoc';

	$m['aFunctionWithOnlyDoc'].__bind_type__ = 0;
	$m['aFunctionWithOnlyDoc'].__args__ = [null,null];
	$m['aFunctionReturningNone'] = function() {

		return null;
	};
	$m['aFunctionReturningNone'].__name__ = 'aFunctionReturningNone';

	$m['aFunctionReturningNone'].__bind_type__ = 0;
	$m['aFunctionReturningNone'].__args__ = [null,null];
	$m['aFunctionReturningParam'] = function(param) {

		return param;
	};
	$m['aFunctionReturningParam'].__name__ = 'aFunctionReturningParam';

	$m['aFunctionReturningParam'].__bind_type__ = 0;
	$m['aFunctionReturningParam'].__args__ = [null,null,['param']];
	$m['aFunctionReturningFunction'] = function() {

		return $m['aFunctionReturningParam'];
	};
	$m['aFunctionReturningFunction'].__name__ = 'aFunctionReturningFunction';

	$m['aFunctionReturningFunction'].__bind_type__ = 0;
	$m['aFunctionReturningFunction'].__args__ = [null,null];
	$m['aFunctionReturningGlobalX1'] = function() {

		return (typeof x == "undefined"?$m.x:x);
	};
	$m['aFunctionReturningGlobalX1'].__name__ = 'aFunctionReturningGlobalX1';

	$m['aFunctionReturningGlobalX1'].__bind_type__ = 0;
	$m['aFunctionReturningGlobalX1'].__args__ = [null,null];
	$m['aFunctionReturningGlobalX2'] = function() {

		return (typeof x == "undefined"?$m.x:x);
	};
	$m['aFunctionReturningGlobalX2'].__name__ = 'aFunctionReturningGlobalX2';

	$m['aFunctionReturningGlobalX2'].__bind_type__ = 0;
	$m['aFunctionReturningGlobalX2'].__args__ = [null,null];
	$m['aFunctionReturningGlobalX3'] = function() {
		var a;
		a = (typeof x == "undefined"?$m.x:x);
		return a;
	};
	$m['aFunctionReturningGlobalX3'].__name__ = 'aFunctionReturningGlobalX3';

	$m['aFunctionReturningGlobalX3'].__bind_type__ = 0;
	$m['aFunctionReturningGlobalX3'].__args__ = [null,null];
	$m['aFunctionReturningLocalX'] = function() {
		var x;
		x = 'local test';
		return x;
	};
	$m['aFunctionReturningLocalX'].__name__ = 'aFunctionReturningLocalX';

	$m['aFunctionReturningLocalX'].__bind_type__ = 0;
	$m['aFunctionReturningLocalX'].__args__ = [null,null];
	$m['aFunctionReturningArgX'] = function(x) {

		return x;
	};
	$m['aFunctionReturningArgX'].__name__ = 'aFunctionReturningArgX';

	$m['aFunctionReturningArgX'].__bind_type__ = 0;
	$m['aFunctionReturningArgX'].__args__ = [null,null,['x']];
	$m['x'] = 'global test';
	$m['$$name'] = 'mapping-test';
	$m['$$call'] = function($$default, $$arguments, $$this, $$label) {
		if (typeof $$label == 'undefined') $$label=arguments.callee.__args__[5][1];
		var $$default,$$this,$$arguments,$$label;
		return $p['tuple']([$m['$$name'], $$default, $$arguments, $$this, $$label]);
	};
	$m['$$call'].__name__ = 'call';

	$m['$$call'].__bind_type__ = 0;
	$m['$$call'].__args__ = [null,null,['$$default'],['$$arguments'],['$$this'],['$$label', null]];
	$m['functionDefaults'] = function(s, l) {
		if (typeof s == 'undefined') s=arguments.callee.__args__[2][1];
		if (typeof l == 'undefined') l=arguments.callee.__args__[3][1];
		var n,$add2,$add1,$len1;
		n = (($len1=l) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1)))));
		s = (typeof ($add1=s)==typeof ($add2=$p['sprintf']('%d', n)) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		l['append'](n);
		return $p['tuple']([s, l]);
	};
	$m['functionDefaults'].__name__ = 'functionDefaults';

	$m['functionDefaults'].__bind_type__ = 0;
	$m['functionDefaults'].__args__ = [null,null,['s', ''],['l', $p['list']([])]];
	$m['FunctionTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'FunctionTest';
		$method = $pyjs__bind_method2('testLambda', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,ClassWithLambdas1,ClassWithLambdas2,$20,$pyjs_try_err,c,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$10,$11,$12,f,h,$13,$19,v;
			var 			$lambda1 = function(x) {

				return x;
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null,['x']];
			f = $lambda1;
			self['assertEqual'](f(1), 1);
			var 			$lambda2 = function(x) {
				if (typeof x == 'undefined') x=arguments.callee.__args__[2][1];

				return x;
			};
			$lambda2.__name__ = '$lambda2';

			$lambda2.__bind_type__ = 0;
			$lambda2.__args__ = [null,null,['x', 1]];
			f = $lambda2;
			self['assertEqual'](f(), 1);
			self['assertEqual'](f(2), 2);
			var 			$lambda3 = function(x, y) {
				var $mul2,$mul1;
				return (typeof ($mul1=x)==typeof ($mul2=y) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
			};
			$lambda3.__name__ = '$lambda3';

			$lambda3.__bind_type__ = 0;
			$lambda3.__args__ = [null,null,['x'],['y']];
			f = $lambda3;
			self['assertEqual'](f(2, 3), 6);
			var 			$lambda4 = function(x, y) {
				if (typeof y == 'undefined') y=arguments.callee.__args__[3][1];
				var $mul4,$mul3;
				return (typeof ($mul3=x)==typeof ($mul4=y) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
			};
			$lambda4.__name__ = '$lambda4';

			$lambda4.__bind_type__ = 0;
			$lambda4.__args__ = [null,null,['x'],['y', 4]];
			f = $lambda4;
			self['assertEqual'](f(2), 8);
			h = $m['Handler'](5);
			var 			$lambda5 = function(x) {

				return h['handle'](x);
			};
			$lambda5.__name__ = '$lambda5';

			$lambda5.__bind_type__ = 0;
			$lambda5.__args__ = [null,null,['x']];
			f = $lambda5;
			self['assertTrue'](f(5));
			self['assertFalse'](f(4));
			var 			$lambda6 = function(a, b) {
				var kw = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
					kw = arguments[arguments.length+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof b != 'undefined') {
						if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
							kw = b;
							b = arguments[2];
						}
					} else 					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kw = a;
							a = arguments[2];
						}
					} else {
					}
				}
				if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

				return $p['tuple']([a, b, kw]);
			};
			$lambda6.__name__ = '$lambda6';

			$lambda6.__bind_type__ = 0;
			$lambda6.__args__ = [null,['kw'],['a'],['b', 1]];
			f = $lambda6;
			v = $pyjs_kwargs_call(null, f, null, null, [{b:2, c:3, a:1}]);
			self['assertEqual']((typeof ($1=v).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), 1);
			self['assertEqual']((typeof ($3=v).__array != 'undefined'?
				((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(1)), 2);
			self['assertEqual']((typeof ($7=(typeof ($5=v).__array != 'undefined'?
				((typeof $5.__array[$6=2]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(2))).__array != 'undefined'?
				((typeof $7.__array[$8='c']) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__('c')), 3);
			var 			$lambda7 = function(a, b) {
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

				if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

				return $p['tuple']([a, b, args]);
			};
			$lambda7.__name__ = '$lambda7';

			$lambda7.__bind_type__ = 0;
			$lambda7.__args__ = ['args',null,['a'],['b', 1]];
			f = $lambda7;
			v = f(1, 2, 3, 4);
			self['assertEqual']((typeof ($11=(typeof ($9=v).__array != 'undefined'?
				((typeof $9.__array[$10=2]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(2))).__array != 'undefined'?
				((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(0)), 3);
			self['assertEqual']((typeof ($15=(typeof ($13=v).__array != 'undefined'?
				((typeof $13.__array[$14=2]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(2))).__array != 'undefined'?
				((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(1)), 4);
			try {
				ClassWithLambdas1 = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'FunctionTest';
					var 					$lambda8 = function() {
						var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

						var $17,$18;
						return (typeof ($17=args).__array != 'undefined'?
							((typeof $17.__array[$18=0]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__(0));
					};
					$lambda8.__name__ = '$lambda8';

					$lambda8.__bind_type__ = 0;
					$lambda8.__args__ = ['args',null];
					$cls_definition['f1'] = $p['list']([$lambda8]);
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('ClassWithLambdas1', $p['tuple']($bases), $data);
				})();
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					c = ClassWithLambdas1();
					self['assertEqual']((typeof ($19=$p['getattr'](c, 'f1')).__array != 'undefined'?
						((typeof $19.__array[$20=0]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__(0))(1), 1, 'issue #385 - lambda function called as bound method');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('issue #385 - lambda in class definition');
					}
				}
			}
			try {
				ClassWithLambdas2 = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'FunctionTest';
					var 					$lambda9 = function() {
						var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

						var $21,$22;
						return (typeof ($21=args).__array != 'undefined'?
							((typeof $21.__array[$22=0]) != 'undefined'?$21.__array[$22]:
								$21.__getitem__($22)):
								$21.__getitem__(0));
					};
					$lambda9.__name__ = '$lambda9';

					$lambda9.__bind_type__ = 0;
					$lambda9.__args__ = ['args',null];
					$cls_definition['f2'] = $lambda9;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('ClassWithLambdas2', $p['tuple']($bases), $data);
				})();
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					c = ClassWithLambdas2();
					self['assertEqual'](c['f2'](1), c, 'issue #385 - bound method lambda called as function');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('issue #385 - lambda in class definition');
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLambda'] = $method;
		$method = $pyjs__bind_method2('test_callable', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				self['assertEqual']($m['Callable']()(), 5);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #572 Callable()() __call__ not supported');
				}
			}
			self['assertTrue']($p['callable']($m['Callable']));
			self['assertTrue']($p['callable']($m['Callable']()), 'Bug #572 callable(Callable()) __call__ not supported');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_callable'] = $method;
		$method = $pyjs__bind_method2('testProcedure', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue'](($m['aFunctionReturningNone']() === null), 'Function should return None');
			self['assertTrue'](($m['aProcedure']() === null), 'Procedures should always return None');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testProcedure'] = $method;
		$method = $pyjs__bind_method2('testVariableFunction', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($m['aFunctionReturningParam']('foo'), 'foo');
			self['assertEqual']($m['aFunctionReturningFunction']()('foo'), 'foo');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVariableFunction'] = $method;
		$method = $pyjs__bind_method2('testLookup', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var expected_result1,expected_result2;
			expected_result1 = 'global test';
			expected_result2 = 'local test';
			self['assertEqual']($m['aFunctionReturningGlobalX1'](), expected_result1);
			self['assertEqual']($m['aFunctionReturningGlobalX2'](), expected_result1);
			self['assertEqual']($m['aFunctionReturningGlobalX3'](), expected_result1);
			self['assertEqual']($m['aFunctionReturningLocalX'](), expected_result2);
			self['assertEqual']($m['aFunctionReturningArgX']('test'), 'test');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLookup'] = $method;
		$method = $pyjs__bind_method2('testLookupLate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var late,local_lookup1,local_lookup3,local_lookup2,late_local;
			self['assertEqual']((typeof late_global == "undefined"?$m.late_global:late_global), 'late_global');
			local_lookup1 = function() {
				var $pyjs_try_err,e;
				self['assertEqual']((typeof late_local == "undefined"?$m.late_local:late_local), 'late_local');
				self['assertTrue']($p['callable']((typeof local_lookup2 == "undefined"?$m.local_lookup2:local_lookup2)));
				self['assertEqual']((typeof local_lookup2 == "undefined"?$m.local_lookup2:local_lookup2)(), 'late_local');
				try {
					(typeof local_lookup3 == "undefined"?$m.local_lookup3:local_lookup3)();
					self['fail']('lookup3');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['NotImplementedError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				return null;
			};
			local_lookup1.__name__ = 'local_lookup1';

			local_lookup1.__bind_type__ = 0;
			local_lookup1.__args__ = [null,null];
			local_lookup2 = function() {

				return (typeof late_local == "undefined"?$m.late_local:late_local);
			};
			local_lookup2.__name__ = 'local_lookup2';

			local_lookup2.__bind_type__ = 0;
			local_lookup2.__args__ = [null,null];
			local_lookup3 = function() {

				throw ($p['NotImplementedError']);
				return null;
			};
			local_lookup3.__name__ = 'local_lookup3';

			local_lookup3.__bind_type__ = 0;
			local_lookup3.__args__ = [null,null];
			late_local = 'late_local';
			local_lookup1();
			late = $m['imports']['$$enum']['Late']['getLate']();
			self['assertEqual']($p['getattr'](late, 'value'), 'late');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLookupLate'] = $method;
		$method = $pyjs__bind_method2('testNameMapping', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $29,$28,$pyjs_try_err,$32,$25,$24,$27,$26,r,$30,$31,$23;
			r = $pyjs_kwargs_call(null, $m['$$call'], null, null, [{$$this:3, $$label:4}, 1, 2]);
			self['assertEqual']((typeof ($23=r).__array != 'undefined'?
				((typeof $23.__array[$24=0]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(0)), 'mapping-test');
			self['assertEqual']((typeof ($25=r).__array != 'undefined'?
				((typeof $25.__array[$26=1]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(1)), 1);
			self['assertEqual']((typeof ($27=r).__array != 'undefined'?
				((typeof $27.__array[$28=2]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(2)), 2);
			self['assertEqual']((typeof ($29=r).__array != 'undefined'?
				((typeof $29.__array[$30=3]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__(3)), 3);
			self['assertEqual']((typeof ($31=r).__array != 'undefined'?
				((typeof $31.__array[$32=4]) != 'undefined'?$31.__array[$32]:
					$31.__getitem__($32)):
					$31.__getitem__(4)), 4);
			try {
				self['assertEqual']((typeof Text == "undefined"?$m.Text:Text)('foo'), 'Text: foo');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #574: javascript keywords');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNameMapping'] = $method;
		$method = $pyjs__bind_method2('testFactory', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,pmc;
			$m['Factory2']['gregister']('passme', $m['PassMeAClass']);
			$m['Factory2']['gregister']('exchild', $m['ExampleChildClass']);
			$m['Factory2']['gregister']('mscp1', $m['ExampleMultiSuperclassParent1']);
			pmc = $m['Factory2']['ggetObject']('passme');
			self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
			try {
				pmc = $m['Factory2']['ggetObject']('mscp1', 5);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['assertEqual']($p['getattr'](pmc, 'x'), 5);
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5'");
					}
				}
			}
			try {
				pmc = $m['Factory2']['ggetObject']('exchild', 5, 7);
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
		$cls_definition['testFactory'] = $method;
		$method = $pyjs__bind_method2('testSliceFunc', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s;
			s = '123 ';
			s = $p['__getslice'](s, 1, null)['rstrip']();
			self['assertEqual'](s, '23');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSliceFunc'] = $method;
		$method = $pyjs__bind_method2('testFunctionDefaults', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var f,$eq2,$eq3,$eq1,l,$eq4,s,inittest;
			var $tupleassign1 = $p['__ass_unpack']($m['functionDefaults'](), 2, null);
			s = $tupleassign1[0];
			l = $tupleassign1[1];
			self['assertEqual'](s, '0');
			self['assertTrue']((($eq1=l)===($eq2=$p['list']([0]))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), 'First mutable default mismatch');
			var $tupleassign2 = $p['__ass_unpack']($m['functionDefaults'](), 2, null);
			s = $tupleassign2[0];
			l = $tupleassign2[1];
			self['assertTrue']((($eq3=l)===($eq4=$p['list']([0, 1]))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))), 'Second mutable default mismatch bug #214');
			inittest = 1;
			f = function(inittest) {
				if (typeof inittest == 'undefined') inittest=arguments.callee.__args__[2][1];

				return inittest;
			};
			f.__name__ = 'f';

			f.__bind_type__ = 0;
			f.__args__ = [null,null,['inittest', inittest]];
			self['assertEqual'](f(), inittest);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testFunctionDefaults'] = $method;
		$method = $pyjs__bind_method2('testKwargs', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var f;
			f = function() {
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
{
					}
				}

				return kwargs;
			};
			f.__name__ = 'f';

			f.__bind_type__ = 0;
			f.__args__ = [null,['kwargs']];
			self['assertEqual'](f(), $p['dict']([]));
			self['assertEqual']($pyjs_kwargs_call(null, f, null, null, [{a:1}]), $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:1}]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargs'] = $method;
		$method = $pyjs__bind_method2('testFunctionDecorating', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var shiftdecorator,fn4,fn3,log,fn1,res,$49,$48,$43,$42,$41,$40,$47,$46,$45,$44,fn4d1,fn4d3,fn2,deco1,deco2,fn4d2,$38,$39,$36,$37,$34,$35,$33,$len2,$len3,$50,$51,$52;
			log = $p['list']([]);
			deco1 = function(f) {
				var fn;
				fn = function() {
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if (typeof kwargs == 'undefined') {
						kwargs = $p['__empty_dict']();
{
						}
					}
					var res;
					log['append']('deco1 begin');
					res = $pyjs_kwargs_call(null, f, args, kwargs, [{}]);
					log['append']('deco1 end');
					return res;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = ['args',['kwargs']];
				return fn;
			};
			deco1.__name__ = 'deco1';

			deco1.__bind_type__ = 0;
			deco1.__args__ = [null,null,['f']];
			deco2 = function(f) {
				var fn;
				fn = function() {
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if (typeof kwargs == 'undefined') {
						kwargs = $p['__empty_dict']();
{
						}
					}
					var res;
					log['append']('deco2 begin');
					res = $pyjs_kwargs_call(null, f, args, kwargs, [{}]);
					log['append']('deco2 end');
					return res;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = ['args',['kwargs']];
				return fn;
			};
			deco2.__name__ = 'deco2';

			deco2.__bind_type__ = 0;
			deco2.__args__ = [null,null,['f']];
			fn1 = function(a, b) {
				if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

				return $p['tuple']([a, b]);
			};
			fn1.__name__ = 'fn1';

			fn1.__bind_type__ = 0;
			fn1.__args__ = [null,null,['a'],['b', 0]];
			fn1 = deco1($p['staticmethod'](fn1));
			fn2 = function(a, b) {
				if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

				return $p['tuple']([a, b]);
			};
			fn2.__name__ = 'fn2';

			fn2.__bind_type__ = 0;
			fn2.__args__ = [null,null,['a'],['b', 0]];
			fn2 = deco1(deco2($p['staticmethod'](fn2)));
			res = fn1(1, 2);
			self['assertEqual']((typeof ($33=res).__array != 'undefined'?
				((typeof $33.__array[$34=0]) != 'undefined'?$33.__array[$34]:
					$33.__getitem__($34)):
					$33.__getitem__(0)), 1);
			self['assertEqual']((typeof ($35=res).__array != 'undefined'?
				((typeof $35.__array[$36=1]) != 'undefined'?$35.__array[$36]:
					$35.__getitem__($36)):
					$35.__getitem__(1)), 2);
			self['assertEqual']((($len2=log) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))), 2);
			self['assertEqual']((typeof ($37=log).__array != 'undefined'?
				((typeof $37.__array[$38=0]) != 'undefined'?$37.__array[$38]:
					$37.__getitem__($38)):
					$37.__getitem__(0)), 'deco1 begin');
			self['assertEqual']((typeof ($39=log).__array != 'undefined'?
				((typeof $39.__array[$40=1]) != 'undefined'?$39.__array[$40]:
					$39.__getitem__($40)):
					$39.__getitem__(1)), 'deco1 end');
			log = $p['list']([]);
			res = $pyjs_kwargs_call(null, fn2, null, null, [{a:3}]);
			self['assertEqual']((typeof ($41=res).__array != 'undefined'?
				((typeof $41.__array[$42=0]) != 'undefined'?$41.__array[$42]:
					$41.__getitem__($42)):
					$41.__getitem__(0)), 3);
			self['assertEqual']((typeof ($43=res).__array != 'undefined'?
				((typeof $43.__array[$44=1]) != 'undefined'?$43.__array[$44]:
					$43.__getitem__($44)):
					$43.__getitem__(1)), 0);
			self['assertEqual']((($len3=log) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))), 4);
			self['assertEqual']((typeof ($45=log).__array != 'undefined'?
				((typeof $45.__array[$46=0]) != 'undefined'?$45.__array[$46]:
					$45.__getitem__($46)):
					$45.__getitem__(0)), 'deco1 begin');
			self['assertEqual']((typeof ($47=log).__array != 'undefined'?
				((typeof $47.__array[$48=1]) != 'undefined'?$47.__array[$48]:
					$47.__getitem__($48)):
					$47.__getitem__(1)), 'deco2 begin');
			self['assertEqual']((typeof ($49=log).__array != 'undefined'?
				((typeof $49.__array[$50=2]) != 'undefined'?$49.__array[$50]:
					$49.__getitem__($50)):
					$49.__getitem__(2)), 'deco2 end');
			self['assertEqual']((typeof ($51=log).__array != 'undefined'?
				((typeof $51.__array[$52=3]) != 'undefined'?$51.__array[$52]:
					$51.__getitem__($52)):
					$51.__getitem__(3)), 'deco1 end');
			fn3 = function(x) {

				return 'b';
			};
			fn3.__name__ = 'fn3';

			fn3.__bind_type__ = 0;
			fn3.__args__ = [null,null,['x']];
			fn3 = $m['imports']['decors']['othermoduledeco1']($p['staticmethod'](fn3));
			self['assertEqual'](fn3('b'), 'abc');
			shiftdecorator = function(si) {
				var wrapper;
				wrapper = function(fn) {
					var decorated;
					decorated = function() {
						var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

						var kw = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
						if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
							if (typeof kw != 'undefined') args.__array.push(kw);
							kw = arguments[arguments.length+1];
						} else {
							delete kw['$pyjs_is_kwarg'];
						}
						if (typeof kw == 'undefined') {
							kw = $p['__empty_dict']();
{
							}
						}
						var $add3,$add4;
						return (typeof ($add3=$pyjs_kwargs_call(null, fn, args, kw, [{}]))==typeof ($add4=si) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					};
					decorated.__name__ = 'decorated';

					decorated.__bind_type__ = 0;
					decorated.__args__ = ['args',['kw']];
					return decorated;
				};
				wrapper.__name__ = 'wrapper';

				wrapper.__bind_type__ = 0;
				wrapper.__args__ = [null,null,['fn']];
				return wrapper;
			};
			shiftdecorator.__name__ = 'shiftdecorator';

			shiftdecorator.__bind_type__ = 0;
			shiftdecorator.__args__ = [null,null,['si']];
			fn4 = function(v) {

				return v;
			};
			fn4.__name__ = 'fn4';

			fn4.__bind_type__ = 0;
			fn4.__args__ = [null,null,['v']];
			fn4d1 = function(v) {

				return v;
			};
			fn4d1.__name__ = 'fn4d1';

			fn4d1.__bind_type__ = 0;
			fn4d1.__args__ = [null,null,['v']];
			fn4d1 = shiftdecorator(1)($p['staticmethod'](fn4d1));
			fn4d2 = function(v) {

				return v;
			};
			fn4d2.__name__ = 'fn4d2';

			fn4d2.__bind_type__ = 0;
			fn4d2.__args__ = [null,null,['v']];
			fn4d2 = shiftdecorator(2)($p['staticmethod'](fn4d2));
			fn4d3 = shiftdecorator(2)(fn4);
			self['assertEqual'](fn4d1(1), 2);
			self['assertEqual'](fn4d2(1), 3);
			self['assertEqual'](fn4d3(1), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testFunctionDecorating'] = $method;
		$method = $pyjs__bind_method2('testTopLevelContionalFunction', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($m['imports']['conditional_func'](), 'overridden');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTopLevelContionalFunction'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FunctionTest', $p['tuple']($bases), $data);
	})();
	$m['late_global'] = 'late_global';
	$m['Text'] = function(x) {

		return $p['str']($p['sprintf']('Text: %s', x));
	};
	$m['Text'].__name__ = 'Text';

	$m['Text'].__bind_type__ = 0;
	$m['Text'].__args__ = [null,null,['x']];
	return this;
}; /* end FunctionTest */


/* end module: FunctionTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'ClassTest.PassMeAClass', 'ClassTest', 'ClassTest.ExampleChildClass', 'ClassTest.ExampleMultiSuperclassParent1', 'Factory2', 'imports.decors', 'imports', 'imports.enum.Late', 'imports.enum']
*/

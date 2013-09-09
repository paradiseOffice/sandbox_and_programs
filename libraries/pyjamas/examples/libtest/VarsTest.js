/* start module: VarsTest */
$pyjs.loaded_modules['VarsTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['VarsTest'].__was_initialized__) return $pyjs.loaded_modules['VarsTest'];
	var $m = $pyjs.loaded_modules["VarsTest"];
	$m.__repr__ = function() { return "<module: VarsTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'VarsTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['foo'] = $p['___import___']('foo', null);
	$m['myfoo'] = $pyjs.loaded_modules['foo'];
	$m['myfoo_value'] = $p['___import___']('foo.foo_value', null, null, false);
	$m['myget_foo_value'] = $p['___import___']('foo.get_foo_value', null, null, false);
	$m['module_global_x'] = 1;
	$m['data'] = $p['list']([]);
	$m['data']['append'](5);
	$m['data']['append'](6);
	$m['data_test'] = $p['cmp']($m['data'], $p['list']([1, 2, 3]));
	$m['changeme'] = function(lst) {

		lst.__setitem__(0, 5);
		return null;
	};
	$m['changeme'].__name__ = 'changeme';

	$m['changeme'].__bind_type__ = 0;
	$m['changeme'].__args__ = [null,null,['lst']];
	$m['import_sys'] = function() {

		$m['sys'] = $p['___import___']('sys', null);
		return null;
	};
	$m['import_sys'].__name__ = 'import_sys';

	$m['import_sys'].__bind_type__ = 0;
	$m['import_sys'].__args__ = [null,null];
	$m['VarsTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'VarsTest';
		$method = $pyjs__bind_method2('testGlobalListData', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']($p['cmp']($m['data'], $p['list']([1, 2, 3])), 'global list should be [1,2,3]');
			self['assertTrue']($m['data_test'], 'global test of list should be True');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGlobalListData'] = $method;
		$method = $pyjs__bind_method2('testChangeUsingTopLevelFunction', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $2,l,$1;
			l = $p['list']([1, 2, 3]);
			$m['changeme'](l);
			self['assertEqual']((typeof ($1=l).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testChangeUsingTopLevelFunction'] = $method;
		$method = $pyjs__bind_method2('testChangeVarInInnerScope', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq3,$eq1,$eq4,$bool2,$bool1,x;
			x = 5;
			if ((($bool1=(($eq1=x)===($eq2=1)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				x = 2;
			}
			else if ((($bool2=(($eq3=x)===($eq4=5)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				x = 3;
			}
			self['assertEqual'](x, 3, 'the value of x should be 3');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testChangeVarInInnerScope'] = $method;
		$method = $pyjs__bind_method2('testGlobalVars', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($m['module_global_x'], 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGlobalVars'] = $method;
		$method = $pyjs__bind_method2('testImports', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['failUnless']($m['UnitTest']['UnitTest']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testImports'] = $method;
		$method = $pyjs__bind_method2('testLocalVar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var VarsTest;
			VarsTest = 1;
			self['assertEqual'](VarsTest, 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLocalVar'] = $method;
		$method = $pyjs__bind_method2('testUnpack', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,c,b,e,d,l,X,a1,a3,a2,b1,b2,c2,y,x,c1,d2,d1;
			l = $p['list']([1, 2]);
			var $tupleassign1 = $p['__ass_unpack'](l, 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			self['assertEqual'](x, 1);
			self['assertEqual'](y, 2);
			x = $p['tuple']([$p['tuple']([1, 2]), 3, $p['tuple']([4, 5])]);
			var $tupleassign2 = $p['__ass_unpack'](x, 3, null);
			var $tupleassign3 = $p['__ass_unpack']($tupleassign2[0], 2, null);
			a = $tupleassign3[0];
			b = $tupleassign3[1];
			c = $tupleassign2[1];
			var $tupleassign4 = $p['__ass_unpack']($tupleassign2[2], 2, null);
			d = $tupleassign4[0];
			e = $tupleassign4[1];
			self['assertEqual'](a, 1);
			self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([1, 2, 3, 4, 5]));
			x = $p['tuple']([1, $p['tuple']([2, $p['tuple']([3, $p['tuple']([4, 5]), 6]), 7]), 8, $p['tuple']([9, 10])]);
			var $tupleassign5 = $p['__ass_unpack'](x, 4, null);
			a1 = $tupleassign5[0];
			var $tupleassign6 = $p['__ass_unpack']($tupleassign5[1], 3, null);
			b1 = $tupleassign6[0];
			var $tupleassign7 = $p['__ass_unpack']($tupleassign6[1], 3, null);
			c1 = $tupleassign7[0];
			var $tupleassign8 = $p['__ass_unpack']($tupleassign7[1], 2, null);
			d1 = $tupleassign8[0];
			d2 = $tupleassign8[1];
			c2 = $tupleassign7[2];
			b2 = $tupleassign6[2];
			a2 = $tupleassign5[2];
			a3 = $tupleassign5[3];
			self['assertEqual'](d1, 4);
			self['assertEqual']($p['list']([a1, b1, c1, d1, d2, c2, b2, a2, a3]), $p['list']([1, 2, 3, 4, 5, 6, 7, 8, $p['tuple']([9, 10])]));
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'VarsTest';
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			x = X();
			x.a = 1;
			d = $p['dict']([]);
			l = $p['list']([1, 3, 4]);
			var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['tuple']([10, 11]), 20, 30]), 3, null);
			$p['__setslice'](l, 1, 2, $tupleassign9[0]);
			x.a = $tupleassign9[1];
			d.__setitem__('zz', $tupleassign9[2]);
			self['assertEqual'](l, $p['list']([1, 10, 11, 4]));
			self['assertEqual']($p['getattr'](x, 'a'), 20);
			self['assertEqual'](d, $p['dict']([['zz', 30]]));
			var $tupleassign10 = $p['__ass_unpack']($p['list']([1, 2, 3]), 3, null);
			a = $tupleassign10[0];
			b = $tupleassign10[1];
			c = $tupleassign10[2];
			self['assertEqual']($p['list']([a, b, c]), $p['list']([1, 2, 3]));
			var $tupleassign11 = $p['__ass_unpack']($p['tuple']([4, 5, 6]), 3, null);
			a = $tupleassign11[0];
			b = $tupleassign11[1];
			c = $tupleassign11[2];
			self['assertEqual']($p['list']([a, b, c]), $p['list']([4, 5, 6]));
			var $tupleassign12 = $p['__ass_unpack']($p['set']($p['list']([7, 8, 9])), 3, null);
			a = $tupleassign12[0];
			b = $tupleassign12[1];
			c = $tupleassign12[2];
			self['assertEqual']($p['set']($p['list']([a, b, c])), $p['set']($p['list']([7, 8, 9])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testUnpack'] = $method;
		$method = $pyjs__bind_method2('testUnpackInLoop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,xxx,yyy,l,$iter1_iter,$iter1_array,$iter1_idx;
			l = $p['list']([$p['list']([1, 2]), $p['list']([1, 2])]);
			$iter1_iter = l;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign13 = $p['__ass_unpack']($iter1_nextval, 2, null);
				xxx = $tupleassign13[0];
				yyy = $tupleassign13[1];
				self['assertEqual'](xxx, 1);
				self['assertEqual'](yyy, 2);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testUnpackInLoop'] = $method;
		$method = $pyjs__bind_method2('testImportedNamespace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var b;
			b = $m['foo']['Bar']();
			self['assertEqual']($p['getattr'](b, 'X'), 1);
			self['assertEqual']($p['getattr']($p['getattr']($m['foo'], 'Bar'), 'X'), 1);
			self['assertEqual']($p['getattr']($p['getattr']($m['foo'], 'bar'), 'X'), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testImportedNamespace'] = $method;
		$method = $pyjs__bind_method2('testImport', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a0,$pyjs_try_err,a1;
			a0 = $p['getattr']($m['foo'], 'foo_value');
			a1 = 2;
			self['assertEqual']($m['myfoo_value'], a0);
			self['assertEqual']($m['myget_foo_value'](), a0);
			$m['myfoo'].foo_value = a1;
			self['assertEqual']($m['myfoo_value'], a0);
			self['assertEqual']($m['myget_foo_value'](), a1);
			$m['import_sys']();
			try {
				self['assertEqual']($p['getattr']($m['sys'], '__name__'), 'sys');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Global module sys not available (bug #216)');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testImport'] = $method;
		$method = $pyjs__bind_method2('testGlobalsBltin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1,$4,globkeys2,$pyjs_try_err,$bool4,$6,globkeys,$5,globs,$3;
			globs = $p['_globals']($m);
			globkeys = globs['keys']();
			var 			$lambda1 = function(x) {
				var $bool3;
				return !(($bool3=x['startswith']('__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null,['x']];
			globkeys2 = $p['filter']($lambda1, globkeys);
			if ((($bool4=globkeys2.__contains__('sys')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				globkeys2['remove']('sys');
			}
			self['assertEqual']($p['set'](globkeys2), $p['set']($p['list'](['changeme', 'foo', 'myfoo_value', 'data', 'UnitTest', 'import_sys', 'VarsTest', 'data_test', 'module_global_x', 'myget_foo_value', 'myfoo'])));
			self['assertEqual']((typeof ($3=globs).__array != 'undefined'?
				((typeof $3.__array[$4='__name__']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('__name__')), (typeof __name__ == "undefined"?$m.__name__:__name__));
			try {
				$p['_globals']($m).__setitem__('new_global_via_dict', 1);
				self['assertEqual']((typeof ($5=$p['_globals']($m)).__array != 'undefined'?
					((typeof $5.__array[$6='new_global_via_dict']) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__('new_global_via_dict')), 1);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Assigning to globals() does not work, #590');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGlobalsBltin'] = $method;
		$method = $pyjs__bind_method2('testDiscardNames', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var X,$pyjs_try_err,x;
			try {
				(typeof someundefinedvariable1234 == "undefined"?$m.someundefinedvariable1234:someundefinedvariable1234);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['fail']('Discarded names should trigger NameError if undefined, bug #584');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['NameError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			X = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'VarsTest';
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('X', $p['tuple']($bases), $data);
			})();
			x = X();
			try {
				$p['getattr'](x, 'a');
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['fail']('Discarded getattr should trigger AttributeError if undefined, bug #584');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDiscardNames'] = $method;
		$method = $pyjs__bind_method2('testAugmentedAssignments', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,$pow2,$pow1,$add2,a0,$mod1,$add1,$assign1,$floordiv2,$floordiv1,$mod2,$div2,$sub2,$sub1,$div1,$mul2,$mul1;
			$assign1 = 100;
			a = $assign1;
			a0 = $assign1;
			self['assertTrue']((a === a0));
			a = (typeof ($add1=a)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			self['assertFalse']((a === a0));
			self['assertEqual'](a, 101);
			a = (typeof ($sub1=a)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			self['assertEqual'](a, 100);
			a = (typeof ($mul1=a)==typeof ($mul2=2) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			self['assertEqual'](a, 200);
			a = (typeof ($div1=a)==typeof ($div2=3) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			self['assertEqual'](a, 66);
			a = (typeof ($floordiv1=a)==typeof ($floordiv2=60) && typeof $floordiv1=='number' && $floordiv2 !== 0?
				Math.floor($floordiv1/$floordiv2):
				$p['op_floordiv']($floordiv1,$floordiv2));
			self['assertEqual'](a, 1);
			a = 15;
			a = (typeof ($mod1=a)==typeof ($mod2=10) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			self['assertEqual'](a, 5);
			a = (typeof ($pow1=a)==typeof ($pow2=2) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2));
			self['assertEqual'](a, 25);
			a >>= 2;
			self['assertEqual'](a, 6);
			a <<= 2;
			self['assertEqual'](a, 24);
			a &= 16;
			self['assertEqual'](a, 16);
			a ^= 8;
			self['assertEqual'](a, 24);
			a |= 32;
			self['assertEqual'](a, 56);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testAugmentedAssignments'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VarsTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end VarsTest */


/* end module: VarsTest */


/*
PYJS_DEPS: ['UnitTest', 'foo', 'foo.foo_value', 'foo.get_foo_value', 'sys']
*/

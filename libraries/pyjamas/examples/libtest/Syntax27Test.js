/* start module: Syntax27Test */
$pyjs.loaded_modules['Syntax27Test'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Syntax27Test'].__was_initialized__) return $pyjs.loaded_modules['Syntax27Test'];
	var $m = $pyjs.loaded_modules["Syntax27Test"];
	$m.__repr__ = function() { return "<module: Syntax27Test>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Syntax27Test';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	$m['Syntax27Test'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Syntax27Test';
		$method = $pyjs__bind_method2('testSetLiteral', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s;
			s = $p['set']([1, 2, 3, 1, 2, 3, 1, 2, 3]);
			self['assertEqual'](s, $p['set']($p['list']([1, 2, 3])));
			self['fail']('Bug #XXX - None not supported in sets');
			return null;
			s = $p['set']([1, 2, null, true, false, 2, 2, $p['tuple'](['a'])]);
			self['assertEqual'](s, $p['set']($p['list']([false, true, 2, $p['tuple'](['a']), null])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSetLiteral'] = $method;
		$method = $pyjs__bind_method2('testSetComprehensions', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var test_func,srange,$lambda1,i,items,l,grange,s,lrange,y;
			s = $p['sum'](function(){
				var $iter1_nextval,$iter1_type,i,$eq1,$collcomp1,$iter1_iter,$eq2,$bool1,$iter1_idx,$mul2,$mul1,$iter1_array;
	$collcomp1 = $p['set']();
			$iter1_iter = $p['range'](100);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				if ((($bool1=(($eq1=(i)&(1))===($eq2=1)&&$eq1===null?true:
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
					$collcomp1['add']((typeof ($mul1=i)==typeof ($mul2=i) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
				}
			}

	return $collcomp1;}());
			self['assertEqual'](s, 166650);
			self['fail']('Bug #XXX - Set equality fails');
			return null;
			s = function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter3_nextval,$iter3_array,$collcomp2,$add2,$add3,$iter2_idx,$iter3_idx,$iter3_iter,$add4,$iter3_type,y,x,$add1,$mul4,$mul3,$iter2_array;
	$collcomp2 = $p['set']();
			$iter2_iter = $p['tuple']([0]);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				x = $iter2_nextval;
				$iter3_iter = $p['tuple']([1]);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					y = $iter3_nextval;
					$collcomp2['add']((typeof ($add3=(typeof ($add1=(typeof ($mul3=2)==typeof ($mul4=y) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)))==typeof ($add2=x) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)))==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
				}
			}

	return $collcomp2;}();
			self['assertEqual'](s, $p['set']($p['list']([3])));
			l = $p['list']($p['sorted'](function(){
				var $iter5_nextval,$iter5_idx,i,$iter4_nextval,j,$collcomp3,$iter4_idx,$iter5_iter,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter4_iter;
	$collcomp3 = $p['set']();
			$iter4_iter = $p['range'](3);
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				$iter5_iter = $p['range'](4);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					j = $iter5_nextval;
					$collcomp3['add']($p['tuple']([i, j]));
				}
			}

	return $collcomp3;}()));
			self['assertEqual'](l, $p['list']([$p['tuple']([0, 0]), $p['tuple']([0, 1]), $p['tuple']([0, 2]), $p['tuple']([0, 3]), $p['tuple']([1, 0]), $p['tuple']([1, 1]), $p['tuple']([1, 2]), $p['tuple']([1, 3]), $p['tuple']([2, 0]), $p['tuple']([2, 1]), $p['tuple']([2, 2]), $p['tuple']([2, 3])]));
			l = $p['list']($p['sorted'](function(){
				var $iter7_array,$iter7_nextval,$iter6_idx,$iter6_type,$iter7_iter,$collcomp4,j,i,$iter6_array,$iter7_idx,$iter6_iter,$iter7_type,$iter6_nextval;
	$collcomp4 = $p['set']();
			$iter6_iter = $p['range'](4);
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				$iter7_iter = $p['range'](i);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					j = $iter7_nextval;
					$collcomp4['add']($p['tuple']([i, j]));
				}
			}

	return $collcomp4;}()));
			self['assertEqual'](l, $p['list']([$p['tuple']([1, 0]), $p['tuple']([2, 0]), $p['tuple']([2, 1]), $p['tuple']([3, 0]), $p['tuple']([3, 1]), $p['tuple']([3, 2])]));
			i = 20;
			s = $p['sum'](function(){
				var $iter8_idx,i,$collcomp5,$iter8_array,$iter8_iter,$iter8_nextval,$mul6,$mul5,$iter8_type;
	$collcomp5 = $p['set']();
			$iter8_iter = $p['range'](100);
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				i = $iter8_nextval;
				$collcomp5['add']((typeof ($mul5=i)==typeof ($mul6=i) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
			}

	return $collcomp5;}());
			self['assertEqual'](s, 328350);
			self['assertEqual'](i, 20);
			srange = function(n) {

				return function(){
					var $iter9_iter,i,$collcomp6,$iter9_nextval,$iter9_idx,$iter9_type,$iter9_array;
	$collcomp6 = $p['set']();
				$iter9_iter = $p['range'](n);
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					$collcomp6['add'](i);
				}

	return $collcomp6;}();
			};
			srange.__name__ = 'srange';

			srange.__bind_type__ = 0;
			srange.__args__ = [null,null,['n']];
			l = $p['list']($p['sorted'](srange(10)));
			self['assertEqual'](l, $p['list']([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
			var 			$lambda1 = function(n) {

				return function(){
					var $iter10_nextval,$collcomp7,$iter10_idx,$iter10_array,i,$iter10_type,$iter10_iter;
	$collcomp7 = $p['set']();
				$iter10_iter = $p['range'](n);
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					$collcomp7['add'](i);
				}

	return $collcomp7;}();
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null,['n']];
			lrange = $lambda1;
			l = $p['list']($p['sorted'](lrange(10)));
			self['assertEqual'](l, $p['list']([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
			grange = function(n) {
				var $iter13_nextval,$iter13_iter,$iter11_iter,$iter11_type,$iter13_array,$iter11_array,x,$iter11_nextval,$iter11_idx,$iter13_type,$iter13_idx;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter13_iter = function(){
							var $iter14_array,$iter14_type,$collcomp9,i,$iter14_iter,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['set']();
						$iter14_iter = $p['range'](n);
						if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
							$iter14_type = 0;
						} else {
							$iter14_iter = $iter14_iter.__iter__();
							$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter14_idx = 0;
						while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
							i = $iter14_nextval;
							$collcomp9['add'](i);
						}

	return $collcomp9;}();
						if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
							$iter13_type = 0;
						} else {
							$iter13_iter = $iter13_iter.__iter__();
							$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter13_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								x = $iter13_nextval;
								$yield_value = x;
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

					return;
				};
				return $generator;
			};
			grange.__name__ = 'grange';

			grange.__bind_type__ = 0;
			grange.__args__ = [null,null,['n']];
			l = $p['list']($p['sorted'](grange(5)));
			self['assertEqual'](l, $p['list']([0, 1, 2, 3, 4]));
			s = function(){
				var $iter15_iter,i,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,$collcomp10;
	$collcomp10 = $p['set']();
			$iter15_iter = $p['range'](10);
			if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter.__iter__();
				$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				i = $iter15_nextval;
				$collcomp10['add'](null);
			}

	return $collcomp10;}();
			self['assertEqual'](s, $p['set']($p['list']([null])));
			items = function(){
				var $iter16_array,$lambda2,$iter16_type,i,$iter16_idx,$collcomp11,$iter16_nextval,$iter16_iter;
	$collcomp11 = $p['set']();
			$iter16_iter = $p['range'](5);
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				i = $iter16_nextval;
				var 				$lambda2 = function(i) {
					if (typeof i == 'undefined') i=arguments.callee.__args__[2][1];

					return i;
				};
				$lambda2.__name__ = '$lambda2';

				$lambda2.__bind_type__ = 0;
				$lambda2.__args__ = [null,null,['i', i]];
				$collcomp11['add']($lambda2);
			}

	return $collcomp11;}();
			s = function(){
				var $iter17_nextval,x,$iter17_iter,$iter17_array,$collcomp12,$iter17_idx,$iter17_type;
	$collcomp12 = $p['set']();
			$iter17_iter = items;
			if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter.__iter__();
				$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				x = $iter17_nextval;
				$collcomp12['add'](x());
			}

	return $collcomp12;}();
			self['assertEqual'](s, $p['set']($p['range'](5)));
			items = function(){
				var $iter18_type,$iter18_iter,$lambda3,$iter18_array,i,$iter18_idx,$collcomp13,$iter18_nextval;
	$collcomp13 = $p['set']();
			$iter18_iter = $p['range'](5);
			if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
				$iter18_type = 0;
			} else {
				$iter18_iter = $iter18_iter.__iter__();
				$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter18_idx = 0;
			while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
				i = $iter18_nextval;
				var 				$lambda3 = function() {

					return i;
				};
				$lambda3.__name__ = '$lambda3';

				$lambda3.__bind_type__ = 0;
				$lambda3.__args__ = [null,null];
				$collcomp13['add']($lambda3);
			}

	return $collcomp13;}();
			s = function(){
				var $iter19_idx,$iter19_type,$iter19_array,$iter19_iter,$iter19_nextval,$collcomp14,x;
	$collcomp14 = $p['set']();
			$iter19_iter = items;
			if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
				$iter19_type = 0;
			} else {
				$iter19_iter = $iter19_iter.__iter__();
				$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter19_idx = 0;
			while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
				x = $iter19_nextval;
				$collcomp14['add'](x());
			}

	return $collcomp14;}();
			self['assertEqual'](s, $p['set']($p['list']([4])));
			items = function(){
				var $iter20_iter,$iter20_nextval,$iter20_type,i,$lambda4,$collcomp15,$iter20_idx,$iter20_array;
	$collcomp15 = $p['set']();
			$iter20_iter = $p['range'](5);
			if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
				$iter20_type = 0;
			} else {
				$iter20_iter = $iter20_iter.__iter__();
				$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter20_idx = 0;
			while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
				i = $iter20_nextval;
				var 				$lambda4 = function() {

					return (typeof y == "undefined"?$m.y:y);
				};
				$lambda4.__name__ = '$lambda4';

				$lambda4.__bind_type__ = 0;
				$lambda4.__args__ = [null,null];
				$collcomp15['add']($lambda4);
			}

	return $collcomp15;}();
			y = 2;
			s = function(){
				var $iter21_idx,$iter21_nextval,$iter21_type,$collcomp16,$iter21_iter,$iter21_array,x;
	$collcomp16 = $p['set']();
			$iter21_iter = items;
			if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
				$iter21_type = 0;
			} else {
				$iter21_iter = $iter21_iter.__iter__();
				$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter21_idx = 0;
			while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
				x = $iter21_nextval;
				$collcomp16['add'](x());
			}

	return $collcomp16;}();
			self['assertEqual'](s, $p['set']($p['list']([2])));
			test_func = function() {
				var items;
				items = function(){
					var $lambda5,$iter22_array,i,$iter22_nextval,$iter22_idx,$collcomp17,$iter22_type,$iter22_iter;
	$collcomp17 = $p['set']();
				$iter22_iter = $p['range'](5);
				if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter.__iter__();
					$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					i = $iter22_nextval;
					var 					$lambda5 = function(i) {
						if (typeof i == 'undefined') i=arguments.callee.__args__[2][1];

						return i;
					};
					$lambda5.__name__ = '$lambda5';

					$lambda5.__bind_type__ = 0;
					$lambda5.__args__ = [null,null,['i', i]];
					$collcomp17['add']($lambda5);
				}

	return $collcomp17;}();
				return function(){
					var $iter23_type,$iter23_nextval,$iter23_iter,$iter23_idx,x,$iter23_array,$collcomp18;
	$collcomp18 = $p['set']();
				$iter23_iter = items;
				if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
					$iter23_type = 0;
				} else {
					$iter23_iter = $iter23_iter.__iter__();
					$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter23_idx = 0;
				while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
					x = $iter23_nextval;
					$collcomp18['add'](x());
				}

	return $collcomp18;}();
			};
			test_func.__name__ = 'test_func';

			test_func.__bind_type__ = 0;
			test_func.__args__ = [null,null];
			self['assertEqual'](test_func(), $p['set']($p['range'](5)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSetComprehensions'] = $method;
		$method = $pyjs__bind_method2('testDictComprehensions', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var k,g,d;
			k = 'old value';
			d = function(){
				var $iter24_idx,k,$iter24_type,$iter24_array,$iter24_nextval,$iter24_iter,$collcomp19;
	$collcomp19 = $p['dict']();
			$iter24_iter = $p['range'](10);
			if (typeof ($iter24_array = $iter24_iter.__array) != 'undefined') {
				$iter24_type = 0;
			} else {
				$iter24_iter = $iter24_iter.__iter__();
				$iter24_type = typeof ($iter24_array = $iter24_iter.__array) != 'undefined'? 0 : (typeof $iter24_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter24_idx = 0;
			while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
				k = $iter24_nextval;
				$collcomp19.__setitem__(k, null);
			}

	return $collcomp19;}();
			self['assertEqual'](d, $p['dict']([[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null], [9, null]]));
			self['assertEqual'](k, 'old value');
			d = function(){
				var $iter25_nextval,$iter25_array,$iter25_iter,$add6,$collcomp20,$iter25_idx,$add5,$iter25_type,k;
	$collcomp20 = $p['dict']();
			$iter25_iter = $p['range'](10);
			if (typeof ($iter25_array = $iter25_iter.__array) != 'undefined') {
				$iter25_type = 0;
			} else {
				$iter25_iter = $iter25_iter.__iter__();
				$iter25_type = typeof ($iter25_array = $iter25_iter.__array) != 'undefined'? 0 : (typeof $iter25_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter25_idx = 0;
			while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
				k = $iter25_nextval;
				$collcomp20.__setitem__(k, (typeof ($add5=k)==typeof ($add6=10) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)));
			}

	return $collcomp20;}();
			self['assertEqual'](d, $p['dict']([[0, 10], [1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19]]));
			d = function(){
				var $iter27_nextval,$iter26_idx,$iter26_nextval,$eq3,k,$eq4,$collcomp21,$bool2,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,v,$iter26_array,$iter26_iter,$iter27_type;
	$collcomp21 = $p['dict']();
			$iter26_iter = $p['range'](10);
			if (typeof ($iter26_array = $iter26_iter.__array) != 'undefined') {
				$iter26_type = 0;
			} else {
				$iter26_iter = $iter26_iter.__iter__();
				$iter26_type = typeof ($iter26_array = $iter26_iter.__array) != 'undefined'? 0 : (typeof $iter26_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter26_idx = 0;
			while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
				k = $iter26_nextval;
				$iter27_iter = $p['range'](10);
				if (typeof ($iter27_array = $iter27_iter.__array) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter.__iter__();
					$iter27_type = typeof ($iter27_array = $iter27_iter.__array) != 'undefined'? 0 : (typeof $iter27_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					v = $iter27_nextval;
					if ((($bool2=(($eq3=k)===($eq4=v)&&$eq3===null?true:
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
						$collcomp21.__setitem__(k, v);
					}
				}
			}

	return $collcomp21;}();
			self['assertEqual'](d, $p['dict']([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]));
			d = function(){
				var $mul8,$iter28_array,$iter29_type,k,$iter28_nextval,$iter28_idx,$collcomp22,$iter29_nextval,$mul9,v,$mul7,$iter28_iter,$iter29_idx,$iter28_type,$iter29_iter,$iter29_array,$mul10;
	$collcomp22 = $p['dict']();
			$iter28_iter = $p['range'](10);
			if (typeof ($iter28_array = $iter28_iter.__array) != 'undefined') {
				$iter28_type = 0;
			} else {
				$iter28_iter = $iter28_iter.__iter__();
				$iter28_type = typeof ($iter28_array = $iter28_iter.__array) != 'undefined'? 0 : (typeof $iter28_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter28_idx = 0;
			while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
				v = $iter28_nextval;
				$iter29_iter = $p['range']((typeof ($mul7=v)==typeof ($mul8=9) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)), (typeof ($mul9=v)==typeof ($mul10=10) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
				if (typeof ($iter29_array = $iter29_iter.__array) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter.__iter__();
					$iter29_type = typeof ($iter29_array = $iter29_iter.__array) != 'undefined'? 0 : (typeof $iter29_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					k = $iter29_nextval;
					$collcomp22.__setitem__(k, v);
				}
			}

	return $collcomp22;}();
			self['assertEqual'](d, $p['dict']([[9, 1], [18, 2], [19, 2], [27, 3], [28, 3], [29, 3], [36, 4], [37, 4], [38, 4], [39, 4], [45, 5], [46, 5], [47, 5], [48, 5], [49, 5], [54, 6], [55, 6], [56, 6], [57, 6], [58, 6], [59, 6], [63, 7], [64, 7], [65, 7], [66, 7], [67, 7], [68, 7], [69, 7], [72, 8], [73, 8], [74, 8], [75, 8], [76, 8], [77, 8], [78, 8], [79, 8], [81, 9], [82, 9], [83, 9], [84, 9], [85, 9], [86, 9], [87, 9], [88, 9], [89, 9]]));
			g = 'outer';
			d = function(){
				var $iter30_type,$iter30_nextval,$iter30_iter,k,$collcomp23,$iter30_idx,$iter30_array;
	$collcomp23 = $p['dict']();
			$iter30_iter = $p['range'](3);
			if (typeof ($iter30_array = $iter30_iter.__array) != 'undefined') {
				$iter30_type = 0;
			} else {
				$iter30_iter = $iter30_iter.__iter__();
				$iter30_type = typeof ($iter30_array = $iter30_iter.__array) != 'undefined'? 0 : (typeof $iter30_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter30_idx = 0;
			while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
				k = $iter30_nextval;
				$collcomp23.__setitem__(k, g);
			}

	return $collcomp23;}();
			self['assertEqual'](d, $p['dict']([[0, 'outer'], [1, 'outer'], [2, 'outer']]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDictComprehensions'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Syntax27Test', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Syntax27Test */


/* end module: Syntax27Test */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'sys']
*/

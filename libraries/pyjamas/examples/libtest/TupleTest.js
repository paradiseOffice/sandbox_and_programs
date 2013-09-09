/* start module: TupleTest */
$pyjs.loaded_modules['TupleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TupleTest'].__was_initialized__) return $pyjs.loaded_modules['TupleTest'];
	var $m = $pyjs.loaded_modules["TupleTest"];
	$m.__repr__ = function() { return "<module: TupleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TupleTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['TupleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TupleTest';
		$method = $pyjs__bind_method2('testGetItem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var t,$4,$2,$3,$1;
			t = $p['tuple']([1, 2]);
			self['assertEqual']((typeof ($1=t).__array != 'undefined'?
				((typeof $1.__array[$2=true]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(true)), 2);
			self['assertEqual']((typeof ($3=t).__array != 'undefined'?
				((typeof $3.__array[$4=false]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(false)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGetItem'] = $method;
		$method = $pyjs__bind_method2('testContains', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var value;
			value = $p['tuple']([0, 1, 2, 3, 4]);
			self['assertTrue'](value.__contains__(1));
			self['assertFalse'](value.__contains__(10));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testContains'] = $method;
		$method = $pyjs__bind_method2('testTupleAdd', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var added,$eq2,$eq3,$eq1,t2,$eq4,t1,$add2,$add3,$add1,$add4;
			t1 = $p['tuple']([1, 2]);
			t2 = $p['tuple']([3, 4]);
			added = (typeof ($add1=t1)==typeof ($add2=t2) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			self['assertTrue']((($eq1=added)===($eq2=$p['tuple']([1, 2, 3, 4]))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), 't1 + t2');
			t1 = (typeof ($add3=t1)==typeof ($add4=t2) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			self['assertTrue']((($eq3=t1)===($eq4=$p['tuple']([1, 2, 3, 4]))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))), 't1 += t2');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTupleAdd'] = $method;
		$method = $pyjs__bind_method2('testIter2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,$iter1_iter,item,$iter2_idx,$add6,$iter1_array,$add7,$add5,$iter2_type,$add8,$iter2_array,$iter1_idx;
			i = 0;
			$iter1_iter = $p['tuple']([0, 1, 2, 3]);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				item = $iter1_nextval;
				self['assertEqual'](item, i);
				i = (typeof ($add5=i)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			i = 0;
			$iter2_iter = $p['__getslice']($p['tuple']([0, 1, 2, 3]), 1, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				item = $iter2_nextval;
				i = (typeof ($add7=i)==typeof ($add8=item) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
			self['assertEqual'](i, 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIter2'] = $method;
		$method = $pyjs__bind_method2('testIter', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add9,i,$pyjs_try_err,it,item,$bool1,$add10,t,$6,$5;
			t = $p['tuple']([0, 1, 2, 3]);
			i = 0;
			it = t['__iter__']();
			while ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				try {
					item = it['next']();
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						break;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['assertEqual'](item, (typeof ($5=t).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)));
				i = (typeof ($add9=i)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIter'] = $method;
		$method = $pyjs__bind_method2('testStr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['str']($p['tuple']([0, 1])), '(0, 1)');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStr'] = $method;
		$method = $pyjs__bind_method2('testRepr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['repr']($p['tuple']([0, 1])), '(0, 1)');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testRepr'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TupleTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end TupleTest */


/* end module: TupleTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/

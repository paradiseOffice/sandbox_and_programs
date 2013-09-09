/* start module: DictTest */
$pyjs.loaded_modules['DictTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DictTest'].__was_initialized__) return $pyjs.loaded_modules['DictTest'];
	var $m = $pyjs.loaded_modules["DictTest"];
	$m.__repr__ = function() { return "<module: DictTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DictTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['Foo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DictTest';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Foo', $p['tuple']($bases), $data);
	})();
	$m['DictTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DictTest';
		$method = $pyjs__bind_method2('testStringKeys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,d,$pyjs_try_err,$6,x,$4,$5,$2,$3,$1;
			d = $p['dict']([['a', 1], ['b', 2], ['3', 3], [3, 4]]);
			self['assertEqual']((typeof ($1=d).__array != 'undefined'?
				((typeof $1.__array[$2='a']) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__('a')), 1);
			self['assertEqual']((typeof ($3=d).__array != 'undefined'?
				((typeof $3.__array[$4='b']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('b')), 2);
			try {
				x = (typeof ($5=d).__array != 'undefined'?
					((typeof $5.__array[$6='notthere']) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__('notthere'));
				self['fail']('__getitem__ must raise KeyError');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					e = $pyjs_try_err;
					self['assertEqual']($p['getattr']($p['getattr'](e, '__class__'), '__name__'), 'KeyError');
					self['assertEqual']($p['str'](e), "'notthere'");
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			d = $p['dict']([]);
			self['assertEqual'](1, d['setdefault']('foo', 1));
			self['assertEqual'](1, d['setdefault']('foo', 2));
			self['assertEqual'](1, d['get']('foo', 2));
			self['assertEqual'](2, d['get']('bar', 2));
			self['assertEqual'](3, d['setdefault']('bar', 3));
			d = $p['dict']([]);
			d['update']($p['dict']([[1, 1]]));
			$pyjs_kwargs_call(d, 'update', null, null, [{a:'a'}, $p['dict']([[2, 2]])]);
			self['assertEqual'](d, $p['dict']([[1, 1], [2, 2], ['a', 'a']]));
			self['assertRaises']($p['TypeError'], $p['getattr'](d, 'update'), $p['dict']([]), $p['dict']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStringKeys'] = $method;
		$method = $pyjs__bind_method2('testTupleKeys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq1,d,v;
			d = $p['dict']([]);
			d.__setitem__(1, 1);
			d.__setitem__($p['tuple']([2]), 3);
			d.__setitem__($p['tuple']([1, 1]), 4);
			d.__setitem__($p['tuple']([1, 2]), 5);
			v = $p['dict']([[$p['tuple']([1, 2]), 5], [1, 1], [$p['tuple']([1, 1]), 4], [$p['tuple']([2]), 3]]);
			self['assertTrue']((($eq1=d)===($eq2=v)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), $p['sprintf']('%r == %r', $p['tuple']([d, v])));
			d = $p['dict']([]);
			d.__setitem__(1, 1);
			d.__setitem__($p['tuple']([1]), 2);
			v = $p['dict']([[1, 1], [$p['tuple']([1]), 2]]);
			self['assertEqual'](d, v, $p['sprintf']('%r == %r bug #273', $p['tuple']([d, v])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTupleKeys'] = $method;
		$method = $pyjs__bind_method2('testObjectKeys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $14,f1,f2,f3,$10,d,$12,$13,keys,$len1,values,$8,$9,expected,$7,dd,$11;
			f1 = $m['Foo']();
			f2 = $m['Foo']();
			f3 = $m['Foo']();
			d = $p['dict']([[f1, 1], [f2, 2]]);
			self['assertEqual']((typeof ($7=d).__array != 'undefined'?
				((typeof $7.__array[$8=f1]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(f1)), 1);
			self['assertEqual']((typeof ($9=d).__array != 'undefined'?
				((typeof $9.__array[$10=f2]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(f2)), 2);
			keys = d['keys']();
			keys['sort']();
			expected = $p['list']([f1, f2]);
			expected['sort']();
			self['assertEqual'](keys, expected);
			values = d['values']();
			values['sort']();
			expected = $p['list']([1, 2]);
			self['assertEqual'](values, expected);
			self['failUnless'](d.__contains__(f1));
			self['failUnless'](d.__contains__(f2));
			self['failIf'](d.__contains__(f3));
			self['assertEqual'](null, d['get'](f3));
			self['assertEqual'](1, d['get'](f3, 1));
			d['update']($p['dict']([[f3, 3]]));
			self['failUnless'](d.__contains__(f3));
			self['assertEqual']((typeof ($11=d).__array != 'undefined'?
				((typeof $11.__array[$12=f3]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(f3)), 3);
			self['assertEqual'](3, (($len1=d) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))));
			dd = d['copy']();
			self['assertEqual']((typeof ($13=dd).__array != 'undefined'?
				((typeof $13.__array[$14=f3]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(f3)), 3);
			self['failIf']((dd === d));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testObjectKeys'] = $method;
		$method = $pyjs__bind_method2('testConstructor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $29,$15,$16,$17,d,$28,$21,$20,$22,$18,$19,$27,$24,$26,$30,$25,$23;
			d = $p['dict']($p['tuple']([$p['list']([1, 1]), $p['list']([2, 2])]));
			self['assertEqual']((typeof ($15=d).__array != 'undefined'?
				((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(1)), 1);
			self['assertEqual']((typeof ($17=d).__array != 'undefined'?
				((typeof $17.__array[$18=2]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(2)), 2);
			d = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:1, b:2}]);
			self['assertEqual']((typeof ($19=d).__array != 'undefined'?
				((typeof $19.__array[$20='a']) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__('a')), 1);
			self['assertEqual']((typeof ($21=d).__array != 'undefined'?
				((typeof $21.__array[$22='b']) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__('b')), 2);
			d = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:1, b:2}, $p['list']([$p['tuple']([1, 1]), $p['tuple']([2, 2])])]);
			self['assertEqual']((typeof ($23=d).__array != 'undefined'?
				((typeof $23.__array[$24=1]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(1)), 1);
			self['assertEqual']((typeof ($25=d).__array != 'undefined'?
				((typeof $25.__array[$26=2]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(2)), 2);
			self['assertEqual']((typeof ($27=d).__array != 'undefined'?
				((typeof $27.__array[$28='a']) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__('a')), 1);
			self['assertEqual']((typeof ($29=d).__array != 'undefined'?
				((typeof $29.__array[$30='b']) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__('b')), 2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testConstructor'] = $method;
		$method = $pyjs__bind_method2('testIter', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $34,$iter3_array,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter4_idx,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,$add7,$40,$iter1_array,$iter1_nextval,$iter2_idx,$37,$iter3_type,d,a,$iter2_nextval,$iter1_type,$38,$39,$36,$iter4_nextval,k,$35,$32,$33,$31,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,$iter4_array,$add8,$iter2_array;
			d = $p['dict']([[1, $p['list']([1, 2, 3])], [2, $p['dict']([['a', 1], ['b', 2], ['c', 3]])]]);
			a = 0;
			$iter1_iter = d;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				a = (typeof ($add1=a)==typeof ($add2=k) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			self['assertEqual'](a, 3);
			a = 0;
			$iter2_iter = (typeof ($31=d).__array != 'undefined'?
				((typeof $31.__array[$32=1]) != 'undefined'?$31.__array[$32]:
					$31.__getitem__($32)):
					$31.__getitem__(1));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				k = $iter2_nextval;
				a = (typeof ($add3=a)==typeof ($add4=k) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
			self['assertEqual'](a, 6);
			a = 0;
			$iter3_iter = $p['__getslice']((typeof ($33=d).__array != 'undefined'?
				((typeof $33.__array[$34=1]) != 'undefined'?$33.__array[$34]:
					$33.__getitem__($34)):
					$33.__getitem__(1)), 1, null);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				k = $iter3_nextval;
				a = (typeof ($add5=a)==typeof ($add6=k) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			self['assertEqual'](a, 5);
			a = 0;
			$iter4_iter = (typeof ($35=d).__array != 'undefined'?
				((typeof $35.__array[$36=2]) != 'undefined'?$35.__array[$36]:
					$35.__getitem__($36)):
					$35.__getitem__(2));
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				k = $iter4_nextval;
				a = (typeof ($add7=a)==typeof ($add8=(typeof ($39=(typeof ($37=d).__array != 'undefined'?
					((typeof $37.__array[$38=2]) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__(2))).__array != 'undefined'?
					((typeof $39.__array[$40=k]) != 'undefined'?$39.__array[$40]:
						$39.__getitem__($40)):
						$39.__getitem__(k))) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
			self['assertEqual'](a, 6);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIter'] = $method;
		$method = $pyjs__bind_method2('testEnumerate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter6_type,$iter5_array,$iter5_iter,$iter5_type,$iter6_iter,$iter6_nextval,$iter5_idx,sum_i,sum_k,$iter6_idx,$add14,$add15,$iter6_array,$add10,$add11,$add12,$add13,a,d,i,k,$add16,$add9;
			d = $p['dict']([[1, $p['list']([1, 2, 3])], [2, $p['dict']([['a', 1], ['b', 2], ['c', 3]])]]);
			sum_i = 0;
			sum_k = 0;
			$iter5_iter = $p['enumerate'](d);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter5_nextval, 2, null);
				i = $tupleassign1[0];
				k = $tupleassign1[1];
				sum_i = (typeof ($add9=sum_i)==typeof ($add10=i) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				sum_k = (typeof ($add11=sum_k)==typeof ($add12=k) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
			}
			self['assertEqual'](sum_i, 1);
			self['assertEqual'](sum_k, 3);
			a = 0;
			$iter6_iter = $p['enumerate']($p['sorted'](d));
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 2, null);
				i = $tupleassign2[0];
				k = $tupleassign2[1];
				self['assertEqual']((typeof ($add13=i)==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)), k);
				a = (typeof ($add15=a)==typeof ($add16=k) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
			}
			self['assertEqual'](a, 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEnumerate'] = $method;
		$method = $pyjs__bind_method2('testPop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1,e,d,$or2,$eq3,$eq6,$eq4,$eq5,item,$pyjs_try_err,$43,$42,$41,$or1,$44;
			d = $p['dict']([['a', 1], ['b', 2], ['c', 3]]);
			item = d['pop']('d', 4);
			self['assertEqual'](item, 4);
			try {
				item = d['pop']('d');
				self['fail']("Failed to raise KeyError on d.pop('d')");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($41=e).__array != 'undefined'?
						((typeof $41.__array[$42=0]) != 'undefined'?$41.__array[$42]:
							$41.__getitem__($42)):
							$41.__getitem__(0)), 'd');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			item = d['pop']('b');
			self['assertEqual'](item, 2);
			item = d['popitem']();
			self['assertTrue'](((($bool1=$or1=(($eq3=item)===($eq4=$p['tuple'](['a', 1]))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:(($eq5=item)===($eq6=$p['tuple'](['c', 3]))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))), $p['sprintf']('popped invalid item %s', $p['str'](item)));
			item = d['popitem']();
			try {
				item = d['popitem']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($43=e).__array != 'undefined'?
						((typeof $43.__array[$44=0]) != 'undefined'?$43.__array[$44]:
							$43.__getitem__($44)):
							$43.__getitem__(0)), 'popitem(): dictionary is empty');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testPop'] = $method;
		$method = $pyjs__bind_method2('testCmp', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['cmp']($p['dict']([]), $p['dict']([])), 0);
			self['assertEqual']($p['cmp']($p['dict']([]), $p['dict']([['1', 1]])), (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			self['assertEqual']($p['cmp']($p['dict']([['1', 1]]), $p['dict']([['1', 1]])), 0);
			self['assertEqual']($p['cmp']($p['dict']([['1', 1]]), $p['dict']([['1', 2]])), (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			self['assertEqual']($p['cmp']($p['dict']([['1', 1]]), $p['dict']([['1', 0]])), 1);
			self['assertEqual']($p['cmp']($p['dict']([['1', 1], ['2', 2]]), $p['dict']([['1', 0]])), 1);
			self['assertEqual']($p['cmp']($p['dict']([['1', 1], ['2', 2]]), $p['dict']([['1', 2]])), 1);
			self['assertEqual']($p['cmp']($p['dict']([['1', 1], ['2', 2]]), $p['dict']([['2', 2], ['1', 1]])), 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testCmp'] = $method;
		$method = $pyjs__bind_method2('testEq', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,DICT;
			self['failUnlessEqual']($p['dict']([]), $p['dict']([]));
			self['failUnlessEqual']($p['dict']([['1', 1]]), $p['dict']([['1', 1]]));
			self['failIfEqual']($p['dict']([]), $p['dict']([['1', 1]]));
			self['failIfEqual']($p['dict']([['1', 1]]), $p['dict']([['1', 2]]));
			try {
				self['failIfEqual']($p['dict']([['1', 1]]), $p['list']([1, 2]), 'Test for Bug 362');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['fail']('Bug 362 - comparison between dict and non-dict');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			DICT = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'DictTest';
				var $bases = new Array($p['dict']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('DICT', $p['tuple']($bases), $data);
			})();
			self['failUnlessEqual'](DICT(), $p['dict']([]));
			self['failUnlessEqual']($p['dict']([]), DICT());
			self['failUnlessEqual']($pyjs_kwargs_call(null, DICT, null, null, [{a:1}]), $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:1}]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEq'] = $method;
		$method = $pyjs__bind_method2('testFromkeys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d2,d1;
			d1 = $p['dict']([['a', 1], ['b', 1]]);
			d2 = $p['dict']([['a', null], ['b', null]]);
			self['assertEqual']($p['dict']['fromkeys'](d1), d2);
			self['assertEqual']($p['dict']['fromkeys'](d1, null), d2);
			self['assertEqual']($p['dict']['fromkeys'](d1, 1), d1);
			self['assertEqual'](d1['fromkeys'](d1), d2);
			self['assertEqual'](d1['fromkeys'](d1, null), d2);
			self['assertEqual'](d1['fromkeys'](d1, 1), d1);
			self['assertEqual']($p['dict']['fromkeys']('ab'), d2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testFromkeys'] = $method;
		$method = $pyjs__bind_method2('testIteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add25,$iter9_idx,$iter8_iter,d2,d3,d1,$add28,$iter9_iter,$add21,$add20,$add22,$iter9_nextval,$add24,$add27,$add26,$iter7_type,$iter9_type,$iter8_idx,$iter7_iter,$iter8_type,$add17,$iter8_nextval,$iter7_idx,$add18,$add19,a,b,$iter7_nextval,$iter7_array,$iter8_array,$iter9_array,DICT,y,x,$add23;
			d1 = $p['dict']([[1, 2], [3, 4]]);
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([0, 0]), 2, null);
			a = $tupleassign3[0];
			b = $tupleassign3[1];
			$iter7_iter = d1['iteritems']();
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter7_nextval, 2, null);
				x = $tupleassign4[0];
				y = $tupleassign4[1];
				a = (typeof ($add17=a)==typeof ($add18=x) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				b = (typeof ($add19=b)==typeof ($add20=y) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20));
			}
			self['assertEqual']($p['tuple']([a, b]), $p['tuple']([4, 6]));
			DICT = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'DictTest';
				var $bases = new Array($p['dict']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('DICT', $p['tuple']($bases), $data);
			})();
			d2 = DICT($p['dict']([[1, 2], [3, 4]]));
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([0, 0]), 2, null);
			a = $tupleassign5[0];
			b = $tupleassign5[1];
			$iter8_iter = d2['iteritems']();
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				var $tupleassign6 = $p['__ass_unpack']($iter8_nextval, 2, null);
				x = $tupleassign6[0];
				y = $tupleassign6[1];
				a = (typeof ($add21=a)==typeof ($add22=x) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				b = (typeof ($add23=b)==typeof ($add24=y) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
			}
			self['assertEqual']($p['tuple']([a, b]), $p['tuple']([4, 6]));
			d3 = $p['dict']();
			var $tupleassign7 = $p['__ass_unpack']($p['tuple']([0, 0]), 2, null);
			a = $tupleassign7[0];
			b = $tupleassign7[1];
			$iter9_iter = d3['iteritems']();
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				var $tupleassign8 = $p['__ass_unpack']($iter9_nextval, 2, null);
				x = $tupleassign8[0];
				y = $tupleassign8[1];
				a = (typeof ($add25=a)==typeof ($add26=x) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				b = (typeof ($add27=b)==typeof ($add28=y) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
			}
			self['assertEqual']($p['tuple']([a, b]), $p['tuple']([0, 0]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIteritems'] = $method;
		$method = $pyjs__bind_method2('testUpdate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,$48,$47,$46,$45,d1;
			d1 = $p['dict']([[1, 2], [3, 4]]);
			d1['update']($p['dict']([[3, 5], [7, 9]]));
			self['assertEqual']((typeof ($45=d1).__array != 'undefined'?
				((typeof $45.__array[$46=3]) != 'undefined'?$45.__array[$46]:
					$45.__getitem__($46)):
					$45.__getitem__(3)), 5);
			try {
				d1['update']($p['tuple']([$p['tuple']([3, 6]), $p['tuple']([9, 12])]));
				self['assertEqual']((typeof ($47=d1).__array != 'undefined'?
					((typeof $47.__array[$48=3]) != 'undefined'?$47.__array[$48]:
						$47.__getitem__($48)):
						$47.__getitem__(3)), 6);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['fail']("Couldn't dict.update(...) with a tuple of pairs.");
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testUpdate'] = $method;
		$method = $pyjs__bind_method2('testOverrideDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var x,dict;
			dict = 1;
			self['assertEqual'](dict, 1);
			x = dict;
			self['assertEqual'](x, 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testOverrideDict'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DictTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end DictTest */


/* end module: DictTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/

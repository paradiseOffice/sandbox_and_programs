/* start module: ListTest */
$pyjs.loaded_modules['ListTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ListTest'].__was_initialized__) return $pyjs.loaded_modules['ListTest'];
	var $m = $pyjs.loaded_modules["ListTest"];
	$m.__repr__ = function() { return "<module: ListTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ListTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['IN_JS'] = $p['___import___']('UnitTest.IN_JS', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	$m['LetterNode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ListTest';
		$method = $pyjs__bind_method2('__init__', function(letter, childnodes) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				letter = arguments[1];
				childnodes = arguments[2];
			}
			if (typeof childnodes == 'undefined') childnodes=arguments.callee.__args__[4][1];
			var $bool1;
			self.letter = letter;
			if ((($bool1=(childnodes === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				childnodes = $p['list']([]);
			}
			$p['list']['__init__'](self, childnodes);
			return null;
		}
	, 1, [null,null,['self'],['letter'],['childnodes', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var $bool2;
			if ((($bool2=$p['isinstance'](l, $m['LetterNode'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return $p['cmp']($p['getattr'](self, 'letter'), $p['getattr'](l, 'letter'));
			}
			return $p['cmp']($p['getattr'](self, 'letter'), l);
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LetterNode', $p['tuple']($bases), $data);
	})();
	$m['words'] = 'golf fred frederick fried'['$$split'](' ');
	$m['get_test_letters'] = function() {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,ln,res,l,idx,$iter1_iter,p,$iter2_idx,$pyjs_try_err,$iter1_array,w,$iter2_type,$1,$2,$iter2_array,$iter1_idx;
		res = $p['list']([]);
		$iter1_iter = $m['words'];
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			w = $iter1_nextval;
			p = res;
			$iter2_iter = w;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				l = $iter2_nextval;
				try {
					idx = p['index'](l);
					p = (typeof ($1=p).__array != 'undefined'?
						((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(idx));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						ln = $m['LetterNode'](l);
						p['append'](ln);
						p = ln;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			p['append']($m['LetterNode']('.'));
		}
		return res;
	};
	$m['get_test_letters'].__name__ = 'get_test_letters';

	$m['get_test_letters'].__bind_type__ = 0;
	$m['get_test_letters'].__args__ = [null,null];
	$m['ListTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ListTest';
		$method = $pyjs__bind_method2('testSliceGet', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $14,$10,$11,$12,$13,l,value,$8,$9,$6,$7,$4,$5,$3;
			value = $p['list']([0, 1, 2, 3, 4]);
			self['assertTrue'](((typeof ($3=value).__array != 'undefined'?
				((typeof $3.__array[$4=(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))) === 4));
			self['assertTrue'](((typeof ($5=value).__array != 'undefined'?
				((typeof $5.__array[$6=1]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(1)) === 1));
			self['assertTrue'](((typeof ($7=value).__array != 'undefined'?
				((typeof $7.__array[$8=4]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(4)) === 4));
			self['assertTrue'](((typeof ($9=value).__array != 'undefined'?
				((typeof $9.__array[$10=(typeof ($usub2=3)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__((typeof ($usub2=3)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))) === 2));
			l = $p['list']([1, 2]);
			self['assertEqual']((typeof ($11=l).__array != 'undefined'?
				((typeof $11.__array[$12=true]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(true)), 2);
			self['assertEqual']((typeof ($13=l).__array != 'undefined'?
				((typeof $13.__array[$14=false]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(false)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSliceGet'] = $method;
		$method = $pyjs__bind_method2('testSliceRange', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $32,$33,$30,$29,$28,$21,$20,$22,$25,$24,$27,$26,$15,$16,$17,$34,$18,$19,value,$31,$len6,$len7,$len4,$len5,$len2,$len3,$len1,$23,$len8;
			value = $p['list']([0, 1, 2, 3, 4]);
			self['assertTrue'](((typeof ($15=$p['__getslice'](value, 1, 3)).__array != 'undefined'?
				((typeof $15.__array[$16=0]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(0)) === 1));
			self['assertTrue'](((typeof ($17=$p['__getslice'](value, 1, 3)).__array != 'undefined'?
				((typeof $17.__array[$18=1]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(1)) === 2));
			self['assertTrue'](((($len1=$p['__getslice'](value, 1, 2)) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))) === 1));
			self['assertTrue'](((($len2=$p['__getslice'](value, 1, 3)) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))) === 2));
			self['assertTrue'](((typeof ($19=$p['__getslice'](value, 0, 2)).__array != 'undefined'?
				((typeof $19.__array[$20=0]) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__(0)) === 0));
			self['assertTrue'](((typeof ($21=$p['__getslice'](value, 0, 2)).__array != 'undefined'?
				((typeof $21.__array[$22=1]) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__(1)) === 1));
			self['assertTrue'](((($len3=$p['__getslice'](value, 0, 2)) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))) === 2));
			self['assertTrue'](((($len4=$p['__getslice'](value, 0, 1)) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))) === 1));
			self['assertTrue'](((typeof ($23=$p['__getslice'](value, 0, (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))).__array != 'undefined'?
				((typeof $23.__array[$24=0]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(0)) === 0));
			self['assertTrue'](((typeof ($25=$p['__getslice'](value, 0, (typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4)))).__array != 'undefined'?
				((typeof $25.__array[$26=3]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(3)) === 3));
			self['assertTrue'](((($len5=$p['__getslice'](value, 0, (typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))) === null?0:
				(typeof $len5.__array != 'undefined' ? $len5.__array.length:
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'?$len5.length:
							$p['len']($len5))))) === 4));
			self['assertTrue'](((typeof ($27=$p['__getslice'](value, 0, null)).__array != 'undefined'?
				((typeof $27.__array[$28=3]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(3)) === 3));
			self['assertTrue'](((($len6=$p['__getslice'](value, 0, null)) === null?0:
				(typeof $len6.__array != 'undefined' ? $len6.__array.length:
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'?$len6.length:
							$p['len']($len6))))) === 5));
			self['assertTrue'](((typeof ($29=$p['__getslice'](value, 0, null)).__array != 'undefined'?
				((typeof $29.__array[$30=3]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__(3)) === 3));
			self['assertTrue'](((typeof ($31=$p['__getslice'](value, 1, null)).__array != 'undefined'?
				((typeof $31.__array[$32=0]) != 'undefined'?$31.__array[$32]:
					$31.__getitem__($32)):
					$31.__getitem__(0)) === 1));
			self['assertTrue'](((($len7=$p['__getslice'](value, 1, null)) === null?0:
				(typeof $len7.__array != 'undefined' ? $len7.__array.length:
					(typeof $len7.__len__ == 'function'?$len7.__len__():
						(typeof $len7.length != 'undefined'?$len7.length:
							$p['len']($len7))))) === 4));
			self['assertTrue'](((typeof ($33=$p['__getslice'](value, (typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)), null)).__array != 'undefined'?
				((typeof $33.__array[$34=0]) != 'undefined'?$33.__array[$34]:
					$33.__getitem__($34)):
					$33.__getitem__(0)) === 4));
			self['assertTrue'](((($len8=$p['__getslice'](value, (typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7)), 3)) === null?0:
				(typeof $len8.__array != 'undefined' ? $len8.__array.length:
					(typeof $len8.__len__ == 'function'?$len8.__len__():
						(typeof $len8.length != 'undefined'?$len8.length:
							$p['len']($len8))))) === 0));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSliceRange'] = $method;
		$method = $pyjs__bind_method2('testListAdd', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var added,$eq2,$eq3,$eq1,$eq4,$add2,$add3,$add1,l2,$add4,l1;
			l1 = $p['list']([1, 2]);
			l2 = $p['list']([3, 4]);
			added = (typeof ($add1=l1)==typeof ($add2=l2) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			self['assertTrue']((($eq1=added)===($eq2=$p['list']([1, 2, 3, 4]))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), $p['sprintf']('l1 + l2: actual result %s', $p['repr'](added)));
			l1 = (typeof ($add3=l1)==typeof ($add4=l2) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			self['assertTrue']((($eq3=l1)===($eq4=$p['list']([1, 2, 3, 4]))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))), $p['sprintf']('l1 += l2: result %s', $p['repr'](l1)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testListAdd'] = $method;
		$method = $pyjs__bind_method2('testSliceSet', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq8,$eq6,$eq7,value,$eq5;
			value = $p['list']([1, 2, 3]);
			$p['__setslice'](value, 1, 2, $p['list']([11, 12]));
			self['assertTrue']((($eq5=value)===($eq6=$p['list']([1, 11, 12, 3]))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))), $p['sprintf']('%s == [1, 11, 12, 3]', value));
			$p['__setslice'](value, 3, null, $p['list']([21, 22, 23]));
			self['assertTrue']((($eq7=value)===($eq8=$p['list']([1, 11, 12, 21, 22, 23]))&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))), $p['sprintf']('%s == [1, 11, 12, 21, 22, 23]', value));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSliceSet'] = $method;
		$method = $pyjs__bind_method2('testMultipleSliceSet', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq9,l2,l1,$eq10,$eq11,$eq12;
			l1 = $p['list']([1, 2, 3]);
			l2 = $p['list']([4, 5, 6]);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['list']([7, 8, 9]), $p['list']([10, 11, 12])]), 2, null);
			$p['__setslice'](l1, 0, null, $tupleassign1[0]);
			$p['__setslice'](l2, 0, null, $tupleassign1[1]);
			self['assertTrue']((($eq9=l1)===($eq10=$p['list']([7, 8, 9]))&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10))))), $p['sprintf']('%s == [7, 8, 9]', l1));
			self['assertTrue']((($eq11=l2)===($eq12=$p['list']([10, 11, 12]))&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12))))), $p['sprintf']('%s == [10, 11, 12]', l2));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMultipleSliceSet'] = $method;
		$method = $pyjs__bind_method2('testDelete', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len10,$eq17,$40,e,$38,$39,$36,$37,$35,value,$eq18,$pyjs_try_err,$42,$41,$eq13,$eq14,$eq15,$eq16,$len9;
			self['assertTrue']((($eq13=(typeof delete_value == "undefined"?$m.delete_value:delete_value))===($eq14=$p['list']([1, 2, 5]))&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14))))), $p['sprintf']('%s == [1, 2, 5]', $p['tuple']([(typeof delete_value == "undefined"?$m.delete_value:delete_value)])));
			value = $p['list']([0, 1, 2, 3, 4]);
			value.__delitem__(4);
			self['assertTrue'](((($len9=value) === null?0:
				(typeof $len9.__array != 'undefined' ? $len9.__array.length:
					(typeof $len9.__len__ == 'function'?$len9.__len__():
						(typeof $len9.length != 'undefined'?$len9.length:
							$p['len']($len9))))) === 4));
			self['assertTrue'](((typeof ($35=value).__array != 'undefined'?
				((typeof $35.__array[$36=3]) != 'undefined'?$35.__array[$36]:
					$35.__getitem__($36)):
					$35.__getitem__(3)) === 3));
			value.__delitem__((typeof ($usub8=1)=='number'?
				-$usub8:
				$p['op_usub']($usub8)));
			self['assertTrue'](((($len10=value) === null?0:
				(typeof $len10.__array != 'undefined' ? $len10.__array.length:
					(typeof $len10.__len__ == 'function'?$len10.__len__():
						(typeof $len10.length != 'undefined'?$len10.length:
							$p['len']($len10))))) === 3));
			self['assertTrue'](((typeof ($37=value).__array != 'undefined'?
				((typeof $37.__array[$38=2]) != 'undefined'?$37.__array[$38]:
					$37.__getitem__($38)):
					$37.__getitem__(2)) === 2));
			try {
				value.__delitem__(3);
				self['fail']("Failed to raise error on 'del value[3]'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($39=e).__array != 'undefined'?
						((typeof $39.__array[$40=0]) != 'undefined'?$39.__array[$40]:
							$39.__getitem__($40)):
							$39.__getitem__(0)), 'list assignment index out of range');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				value.__delitem__((typeof ($usub9=4)=='number'?
					-$usub9:
					$p['op_usub']($usub9)));
				self['fail']("Failed to raise error on 'del value[-4]'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($41=e).__array != 'undefined'?
						((typeof $41.__array[$42=0]) != 'undefined'?$41.__array[$42]:
							$41.__getitem__($42)):
							$41.__getitem__(0)), 'list assignment index out of range');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			value = $p['list']([0, 1, 2, 3, 4]);
			$p['__delslice'](value, 1, 3)
			self['assertTrue']((($eq15=value)===($eq16=$p['list']([0, 3, 4]))&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16))))), $p['sprintf']('%s == [0, 3, 4]', value));
			$p['__delslice'](value, 0, null)
			self['assertTrue']((($eq17=value)===($eq18=$p['list']([]))&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18))))), $p['sprintf']('%s = []', value));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDelete'] = $method;
		$method = $pyjs__bind_method2('testSortNoKwArgs', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $62,$eq46,$eq32,$eq19,$eq30,$eq31,$eq36,$eq37,$eq34,$eq35,$eq38,$eq39,toLower,$71,$eq50,$49,$48,$69,$68,$43,$64,$67,$65,$47,$46,$45,$44,$eq44,$eq49,$eq21,$eq20,$eq23,$eq22,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28,$eq48,$72,$73,$70,$66,$63,$74,$eq33,$eq43,$61,$eq41,$eq40,$eq47,$eq42,$eq45,$60,$58,$59,l4,l2,l3,l1,$50,$51,$52,$53,$54,$55,$56,$57;
			l1 = $p['list'](['c', 'd', 'a', 'b']);
			l1['sort']();
			self['assertTrue']((($eq19=(typeof ($43=l1).__array != 'undefined'?
				((typeof $43.__array[$44=0]) != 'undefined'?$43.__array[$44]:
					$43.__getitem__($44)):
					$43.__getitem__(0)))===($eq20='a')&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20))))));
			self['assertTrue']((($eq21=(typeof ($45=l1).__array != 'undefined'?
				((typeof $45.__array[$46=1]) != 'undefined'?$45.__array[$46]:
					$45.__getitem__($46)):
					$45.__getitem__(1)))===($eq22='b')&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22))))));
			self['assertTrue']((($eq23=(typeof ($47=l1).__array != 'undefined'?
				((typeof $47.__array[$48=2]) != 'undefined'?$47.__array[$48]:
					$47.__getitem__($48)):
					$47.__getitem__(2)))===($eq24='c')&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24))))));
			self['assertTrue']((($eq25=(typeof ($49=l1).__array != 'undefined'?
				((typeof $49.__array[$50=3]) != 'undefined'?$49.__array[$50]:
					$49.__getitem__($50)):
					$49.__getitem__(3)))===($eq26='d')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26))))));
			l2 = $p['list'](['C', 'd', 'A', 'b']);
			toLower = function(x) {

				return x['lower']();
			};
			toLower.__name__ = 'toLower';

			toLower.__bind_type__ = 0;
			toLower.__args__ = [null,null,['x']];
			l2['sort'](null, toLower);
			self['assertTrue']((($eq27=(typeof ($51=l2).__array != 'undefined'?
				((typeof $51.__array[$52=0]) != 'undefined'?$51.__array[$52]:
					$51.__getitem__($52)):
					$51.__getitem__(0)))===($eq28='A')&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28))))));
			self['assertTrue']((($eq29=(typeof ($53=l2).__array != 'undefined'?
				((typeof $53.__array[$54=1]) != 'undefined'?$53.__array[$54]:
					$53.__getitem__($54)):
					$53.__getitem__(1)))===($eq30='b')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30))))));
			self['assertTrue']((($eq31=(typeof ($55=l2).__array != 'undefined'?
				((typeof $55.__array[$56=2]) != 'undefined'?$55.__array[$56]:
					$55.__getitem__($56)):
					$55.__getitem__(2)))===($eq32='C')&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32))))));
			self['assertTrue']((($eq33=(typeof ($57=l2).__array != 'undefined'?
				((typeof $57.__array[$58=3]) != 'undefined'?$57.__array[$58]:
					$57.__getitem__($58)):
					$57.__getitem__(3)))===($eq34='d')&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34))))));
			l3 = $p['list'](['C', 'd', 'A', 'b']);
			l3['sort'](null, toLower, true);
			self['assertTrue']((($eq35=(typeof ($59=l3).__array != 'undefined'?
				((typeof $59.__array[$60=0]) != 'undefined'?$59.__array[$60]:
					$59.__getitem__($60)):
					$59.__getitem__(0)))===($eq36='d')&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36))))));
			self['assertTrue']((($eq37=(typeof ($61=l3).__array != 'undefined'?
				((typeof $61.__array[$62=1]) != 'undefined'?$61.__array[$62]:
					$61.__getitem__($62)):
					$61.__getitem__(1)))===($eq38='C')&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38))))));
			self['assertTrue']((($eq39=(typeof ($63=l3).__array != 'undefined'?
				((typeof $63.__array[$64=2]) != 'undefined'?$63.__array[$64]:
					$63.__getitem__($64)):
					$63.__getitem__(2)))===($eq40='b')&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40))))));
			self['assertTrue']((($eq41=(typeof ($65=l3).__array != 'undefined'?
				((typeof $65.__array[$66=3]) != 'undefined'?$65.__array[$66]:
					$65.__getitem__($66)):
					$65.__getitem__(3)))===($eq42='A')&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
							$eq41==$eq42))))));
			l4 = $p['list'](['c', 'd', 'a', 'b']);
			l4['sort'](null, null, true);
			self['assertTrue']((($eq43=(typeof ($67=l4).__array != 'undefined'?
				((typeof $67.__array[$68=0]) != 'undefined'?$67.__array[$68]:
					$67.__getitem__($68)):
					$67.__getitem__(0)))===($eq44='d')&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44))))));
			self['assertTrue']((($eq45=(typeof ($69=l4).__array != 'undefined'?
				((typeof $69.__array[$70=1]) != 'undefined'?$69.__array[$70]:
					$69.__getitem__($70)):
					$69.__getitem__(1)))===($eq46='c')&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46))))));
			self['assertTrue']((($eq47=(typeof ($71=l4).__array != 'undefined'?
				((typeof $71.__array[$72=2]) != 'undefined'?$71.__array[$72]:
					$71.__getitem__($72)):
					$71.__getitem__(2)))===($eq48='b')&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
							$eq47==$eq48))))));
			self['assertTrue']((($eq49=(typeof ($73=l4).__array != 'undefined'?
				((typeof $73.__array[$74=3]) != 'undefined'?$73.__array[$74]:
					$73.__getitem__($74)):
					$73.__getitem__(3)))===($eq50='a')&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
							$eq49==$eq50))))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSortNoKwArgs'] = $method;
		$method = $pyjs__bind_method2('testPop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq54,$eq55,$eq56,$eq57,$eq51,$eq52,$eq53,$eq58,$pyjs_try_err,$len14,$len12,$80,$len13,$76,$77,a,$len11,c,b,e,d,err,$75,$78,$79,value,x;
			a = $p['list'](['a']);
			b = $p['list'](['b']);
			c = $p['list'](['c']);
			d = $p['list'](['d']);
			e = $p['list'](['e']);
			value = $p['list']([a, b, c, d, e]);
			try {
				x = value['pop'](5);
				self['fail']("Failed to raise error on 'value.pop(5)'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					err = $pyjs_try_err;
					self['assertEqual']((typeof ($75=err).__array != 'undefined'?
						((typeof $75.__array[$76=0]) != 'undefined'?$75.__array[$76]:
							$75.__getitem__($76)):
							$75.__getitem__(0)), 'pop index out of range');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				x = value['pop']((typeof ($usub10=6)=='number'?
					-$usub10:
					$p['op_usub']($usub10)));
				self['fail']("Failed to raise error on 'value.pop(-6)'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					err = $pyjs_try_err;
					self['assertEqual']((typeof ($77=err).__array != 'undefined'?
						((typeof $77.__array[$78=0]) != 'undefined'?$77.__array[$78]:
							$77.__getitem__($78)):
							$77.__getitem__(0)), 'pop index out of range');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			x = value['pop'](4);
			self['assertTrue']((($eq51=x)===($eq52=e)&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
							$eq51==$eq52))))), 'x==e');
			self['assertTrue'](((($len11=value) === null?0:
				(typeof $len11.__array != 'undefined' ? $len11.__array.length:
					(typeof $len11.__len__ == 'function'?$len11.__len__():
						(typeof $len11.length != 'undefined'?$len11.length:
							$p['len']($len11))))) === 4), 'len(value) is 4');
			x = value['pop']((typeof ($usub11=1)=='number'?
				-$usub11:
				$p['op_usub']($usub11)));
			self['assertTrue']((($eq53=x)===($eq54=d)&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
							$eq53==$eq54))))), 'x==d');
			self['assertTrue'](((($len12=value) === null?0:
				(typeof $len12.__array != 'undefined' ? $len12.__array.length:
					(typeof $len12.__len__ == 'function'?$len12.__len__():
						(typeof $len12.length != 'undefined'?$len12.length:
							$p['len']($len12))))) === 3), 'len(value) is 3');
			x = value['pop']();
			self['assertTrue']((($eq55=x)===($eq56=c)&&$eq55===null?true:
				($eq55===null?false:($eq56===null?false:
					((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
						((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
							$eq55==$eq56))))), 'x==c');
			self['assertTrue'](((($len13=value) === null?0:
				(typeof $len13.__array != 'undefined' ? $len13.__array.length:
					(typeof $len13.__len__ == 'function'?$len13.__len__():
						(typeof $len13.length != 'undefined'?$len13.length:
							$p['len']($len13))))) === 2), 'len(value) is 2');
			x = value['pop'](0);
			self['assertTrue']((($eq57=x)===($eq58=a)&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
							$eq57==$eq58))))), 'x==a');
			self['assertTrue'](((($len14=value) === null?0:
				(typeof $len14.__array != 'undefined' ? $len14.__array.length:
					(typeof $len14.__len__ == 'function'?$len14.__len__():
						(typeof $len14.length != 'undefined'?$len14.length:
							$p['len']($len14))))) === 1), 'len(value) is 1');
			x = value['pop']();
			try {
				x = value['pop']();
				self['fail']("Failed to raise error on 'value.pop()'");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					err = $pyjs_try_err;
					self['assertEqual']((typeof ($79=err).__array != 'undefined'?
						((typeof $79.__array[$80=0]) != 'undefined'?$79.__array[$80]:
							$79.__getitem__($80)):
							$79.__getitem__(0)), 'pop from empty list');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testPop'] = $method;
		$method = $pyjs__bind_method2('testSort', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $98,$99,$110,$107,$94,$95,$96,$97,$90,$91,$92,$93,$111,$eq89,$112,$eq88,$eq59,$eq90,toLower,$eq78,$eq79,$eq76,$eq77,$eq75,$eq72,$eq73,$eq70,$eq71,$109,$eq83,$108,$101,$100,$103,$102,$105,$104,$89,$88,$87,$86,$85,$84,$83,$82,$81,$106,$eq82,$eq87,$eq86,$eq85,$eq84,$eq69,$eq68,$eq81,$eq80,$eq65,$eq64,$eq67,$eq66,$eq61,$eq60,$eq63,$eq62,l4,l2,l3,l1,$eq74;
			l1 = $p['list'](['c', 'd', 'a', 'b']);
			l1['sort']();
			self['assertTrue']((($eq59=(typeof ($81=l1).__array != 'undefined'?
				((typeof $81.__array[$82=0]) != 'undefined'?$81.__array[$82]:
					$81.__getitem__($82)):
					$81.__getitem__(0)))===($eq60='a')&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
							$eq59==$eq60))))));
			self['assertTrue']((($eq61=(typeof ($83=l1).__array != 'undefined'?
				((typeof $83.__array[$84=1]) != 'undefined'?$83.__array[$84]:
					$83.__getitem__($84)):
					$83.__getitem__(1)))===($eq62='b')&&$eq61===null?true:
				($eq61===null?false:($eq62===null?false:
					((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
						((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
							$eq61==$eq62))))));
			self['assertTrue']((($eq63=(typeof ($85=l1).__array != 'undefined'?
				((typeof $85.__array[$86=2]) != 'undefined'?$85.__array[$86]:
					$85.__getitem__($86)):
					$85.__getitem__(2)))===($eq64='c')&&$eq63===null?true:
				($eq63===null?false:($eq64===null?false:
					((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63.__cmp__=='function'?$eq63.__cmp__($eq64) === 0:
						((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64.__cmp__=='function'?$eq64.__cmp__($eq63) === 0:
							$eq63==$eq64))))));
			self['assertTrue']((($eq65=(typeof ($87=l1).__array != 'undefined'?
				((typeof $87.__array[$88=3]) != 'undefined'?$87.__array[$88]:
					$87.__getitem__($88)):
					$87.__getitem__(3)))===($eq66='d')&&$eq65===null?true:
				($eq65===null?false:($eq66===null?false:
					((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65.__cmp__=='function'?$eq65.__cmp__($eq66) === 0:
						((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66.__cmp__=='function'?$eq66.__cmp__($eq65) === 0:
							$eq65==$eq66))))));
			l2 = $p['list'](['C', 'd', 'A', 'b']);
			toLower = function(x) {

				return x['lower']();
			};
			toLower.__name__ = 'toLower';

			toLower.__bind_type__ = 0;
			toLower.__args__ = [null,null,['x']];
			$pyjs_kwargs_call(l2, 'sort', null, null, [{key:toLower}]);
			self['assertTrue']((($eq67=(typeof ($89=l2).__array != 'undefined'?
				((typeof $89.__array[$90=0]) != 'undefined'?$89.__array[$90]:
					$89.__getitem__($90)):
					$89.__getitem__(0)))===($eq68='A')&&$eq67===null?true:
				($eq67===null?false:($eq68===null?false:
					((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67.__cmp__=='function'?$eq67.__cmp__($eq68) === 0:
						((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68.__cmp__=='function'?$eq68.__cmp__($eq67) === 0:
							$eq67==$eq68))))));
			self['assertTrue']((($eq69=(typeof ($91=l2).__array != 'undefined'?
				((typeof $91.__array[$92=1]) != 'undefined'?$91.__array[$92]:
					$91.__getitem__($92)):
					$91.__getitem__(1)))===($eq70='b')&&$eq69===null?true:
				($eq69===null?false:($eq70===null?false:
					((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69.__cmp__=='function'?$eq69.__cmp__($eq70) === 0:
						((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70.__cmp__=='function'?$eq70.__cmp__($eq69) === 0:
							$eq69==$eq70))))));
			self['assertTrue']((($eq71=(typeof ($93=l2).__array != 'undefined'?
				((typeof $93.__array[$94=2]) != 'undefined'?$93.__array[$94]:
					$93.__getitem__($94)):
					$93.__getitem__(2)))===($eq72='C')&&$eq71===null?true:
				($eq71===null?false:($eq72===null?false:
					((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71.__cmp__=='function'?$eq71.__cmp__($eq72) === 0:
						((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72.__cmp__=='function'?$eq72.__cmp__($eq71) === 0:
							$eq71==$eq72))))));
			self['assertTrue']((($eq73=(typeof ($95=l2).__array != 'undefined'?
				((typeof $95.__array[$96=3]) != 'undefined'?$95.__array[$96]:
					$95.__getitem__($96)):
					$95.__getitem__(3)))===($eq74='d')&&$eq73===null?true:
				($eq73===null?false:($eq74===null?false:
					((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73.__cmp__=='function'?$eq73.__cmp__($eq74) === 0:
						((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74.__cmp__=='function'?$eq74.__cmp__($eq73) === 0:
							$eq73==$eq74))))));
			l3 = $p['list'](['C', 'd', 'A', 'b']);
			$pyjs_kwargs_call(l3, 'sort', null, null, [{key:toLower, reverse:true}]);
			self['assertTrue']((($eq75=(typeof ($97=l3).__array != 'undefined'?
				((typeof $97.__array[$98=0]) != 'undefined'?$97.__array[$98]:
					$97.__getitem__($98)):
					$97.__getitem__(0)))===($eq76='d')&&$eq75===null?true:
				($eq75===null?false:($eq76===null?false:
					((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75.__cmp__=='function'?$eq75.__cmp__($eq76) === 0:
						((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76.__cmp__=='function'?$eq76.__cmp__($eq75) === 0:
							$eq75==$eq76))))));
			self['assertTrue']((($eq77=(typeof ($99=l3).__array != 'undefined'?
				((typeof $99.__array[$100=1]) != 'undefined'?$99.__array[$100]:
					$99.__getitem__($100)):
					$99.__getitem__(1)))===($eq78='C')&&$eq77===null?true:
				($eq77===null?false:($eq78===null?false:
					((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77.__cmp__=='function'?$eq77.__cmp__($eq78) === 0:
						((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78.__cmp__=='function'?$eq78.__cmp__($eq77) === 0:
							$eq77==$eq78))))));
			self['assertTrue']((($eq79=(typeof ($101=l3).__array != 'undefined'?
				((typeof $101.__array[$102=2]) != 'undefined'?$101.__array[$102]:
					$101.__getitem__($102)):
					$101.__getitem__(2)))===($eq80='b')&&$eq79===null?true:
				($eq79===null?false:($eq80===null?false:
					((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79.__cmp__=='function'?$eq79.__cmp__($eq80) === 0:
						((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80.__cmp__=='function'?$eq80.__cmp__($eq79) === 0:
							$eq79==$eq80))))));
			self['assertTrue']((($eq81=(typeof ($103=l3).__array != 'undefined'?
				((typeof $103.__array[$104=3]) != 'undefined'?$103.__array[$104]:
					$103.__getitem__($104)):
					$103.__getitem__(3)))===($eq82='A')&&$eq81===null?true:
				($eq81===null?false:($eq82===null?false:
					((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81.__cmp__=='function'?$eq81.__cmp__($eq82) === 0:
						((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82.__cmp__=='function'?$eq82.__cmp__($eq81) === 0:
							$eq81==$eq82))))));
			l4 = $p['list'](['c', 'd', 'a', 'b']);
			$pyjs_kwargs_call(l4, 'sort', null, null, [{reverse:true}]);
			self['assertTrue']((($eq83=(typeof ($105=l4).__array != 'undefined'?
				((typeof $105.__array[$106=0]) != 'undefined'?$105.__array[$106]:
					$105.__getitem__($106)):
					$105.__getitem__(0)))===($eq84='d')&&$eq83===null?true:
				($eq83===null?false:($eq84===null?false:
					((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83.__cmp__=='function'?$eq83.__cmp__($eq84) === 0:
						((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84.__cmp__=='function'?$eq84.__cmp__($eq83) === 0:
							$eq83==$eq84))))));
			self['assertTrue']((($eq85=(typeof ($107=l4).__array != 'undefined'?
				((typeof $107.__array[$108=1]) != 'undefined'?$107.__array[$108]:
					$107.__getitem__($108)):
					$107.__getitem__(1)))===($eq86='c')&&$eq85===null?true:
				($eq85===null?false:($eq86===null?false:
					((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85.__cmp__=='function'?$eq85.__cmp__($eq86) === 0:
						((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86.__cmp__=='function'?$eq86.__cmp__($eq85) === 0:
							$eq85==$eq86))))));
			self['assertTrue']((($eq87=(typeof ($109=l4).__array != 'undefined'?
				((typeof $109.__array[$110=2]) != 'undefined'?$109.__array[$110]:
					$109.__getitem__($110)):
					$109.__getitem__(2)))===($eq88='b')&&$eq87===null?true:
				($eq87===null?false:($eq88===null?false:
					((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87.__cmp__=='function'?$eq87.__cmp__($eq88) === 0:
						((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88.__cmp__=='function'?$eq88.__cmp__($eq87) === 0:
							$eq87==$eq88))))));
			self['assertTrue']((($eq89=(typeof ($111=l4).__array != 'undefined'?
				((typeof $111.__array[$112=3]) != 'undefined'?$111.__array[$112]:
					$111.__getitem__($112)):
					$111.__getitem__(3)))===($eq90='a')&&$eq89===null?true:
				($eq89===null?false:($eq90===null?false:
					((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89.__cmp__=='function'?$eq89.__cmp__($eq90) === 0:
						((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90.__cmp__=='function'?$eq90.__cmp__($eq89) === 0:
							$eq89==$eq90))))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSort'] = $method;
		$method = $pyjs__bind_method2('testCmp', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var b1,b2,$eq101,$eq91,$eq92,$eq93,$eq94,$eq95,$eq96,$eq97,$eq98,$eq99,$eq100,$eq103,$eq102,$eq105,$eq104,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$eq106,$cmp8,t1,l4,l2,l3,l1;
			l1 = $p['list']([1, 2, 3]);
			l2 = $p['list']([1, 2]);
			l3 = $p['list']([1, 2, 3]);
			l4 = $p['list']([1, 2, 4]);
			t1 = $p['tuple']([1, 2, 3]);
			self['assertEquals']($p['cmp']($p['list']([]), $p['list']([])), 0, 'Empty lists are the same');
			self['assertTrue']((($eq91=$p['list']([]))===($eq92=$p['list']([]))&&$eq91===null?true:
				($eq91===null?false:($eq92===null?false:
					((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91.__cmp__=='function'?$eq91.__cmp__($eq92) === 0:
						((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92.__cmp__=='function'?$eq92.__cmp__($eq91) === 0:
							$eq91==$eq92))))));
			self['assertEquals'](!(($eq93=$p['list']([]))===($eq94=$p['list']([]))&&$eq93===null?true:
				($eq93===null?false:($eq94===null?false:
					((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93.__cmp__=='function'?$eq93.__cmp__($eq94) === 0:
						((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94.__cmp__=='function'?$eq94.__cmp__($eq93) === 0:
							$eq93==$eq94))))), false);
			self['assertTrue']((($eq95=$p['cmp'](l1, l2))===($eq96=1)&&$eq95===null?true:
				($eq95===null?false:($eq96===null?false:
					((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95.__cmp__=='function'?$eq95.__cmp__($eq96) === 0:
						((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96.__cmp__=='function'?$eq96.__cmp__($eq95) === 0:
							$eq95==$eq96))))));
			self['assertTrue']((($eq97=$p['cmp'](l2, l1))===($eq98=(typeof ($usub12=1)=='number'?
				-$usub12:
				$p['op_usub']($usub12)))&&$eq97===null?true:
				($eq97===null?false:($eq98===null?false:
					((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97.__cmp__=='function'?$eq97.__cmp__($eq98) === 0:
						((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98.__cmp__=='function'?$eq98.__cmp__($eq97) === 0:
							$eq97==$eq98))))));
			self['assertTrue']((($eq99=$p['cmp'](l3, l4))===($eq100=(typeof ($usub13=1)=='number'?
				-$usub13:
				$p['op_usub']($usub13)))&&$eq99===null?true:
				($eq99===null?false:($eq100===null?false:
					((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99.__cmp__=='function'?$eq99.__cmp__($eq100) === 0:
						((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100.__cmp__=='function'?$eq100.__cmp__($eq99) === 0:
							$eq99==$eq100))))));
			self['assertTrue']((($eq101=$p['cmp'](l4, l3))===($eq102=1)&&$eq101===null?true:
				($eq101===null?false:($eq102===null?false:
					((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101.__cmp__=='function'?$eq101.__cmp__($eq102) === 0:
						((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102.__cmp__=='function'?$eq102.__cmp__($eq101) === 0:
							$eq101==$eq102))))));
			self['assertTrue']((($eq103=l1)===($eq104=l3)&&$eq103===null?true:
				($eq103===null?false:($eq104===null?false:
					((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103.__cmp__=='function'?$eq103.__cmp__($eq104) === 0:
						((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104.__cmp__=='function'?$eq104.__cmp__($eq103) === 0:
							$eq103==$eq104))))), 'l1 == l3');
			self['assertTrue'](((($cmp1=l1)===($cmp2=l2)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1), 'l1 > l2');
			self['assertTrue'](((((($cmp3=l1)===($cmp4=l2)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1), 'l1 >= l2');
			self['assertTrue'](((($cmp5=l2)===($cmp6=l1)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1), 'l2 < l1');
			self['assertTrue'](((($cmp7=l2)===($cmp8=l1)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) < 1), 'l2 <= l1');
			b1 = (typeof B == "undefined"?$m.B:B)();
			b2 = (typeof B == "undefined"?$m.B:B)();
			l1 = $p['list']([b1, b2]);
			l2 = $p['list']([b2, b1]);
			self['assertFalse']((($eq105=l1)===($eq106=l2)&&$eq105===null?true:
				($eq105===null?false:($eq106===null?false:
					((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105.__cmp__=='function'?$eq105.__cmp__($eq106) === 0:
						((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106.__cmp__=='function'?$eq106.__cmp__($eq105) === 0:
							$eq105==$eq106))))), 'TODO: cmp() plain objects fails');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testCmp'] = $method;
		$method = $pyjs__bind_method2('testCmpListTuple', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq112,$eq113,$eq110,$eq111,$eq114,$eq107,$eq109,$eq108,t1,l1;
			t1 = $p['tuple']([1, 2, 3]);
			l1 = $p['list']([1, 2, 3]);
			self['assertFalse']((($eq107=l1)===($eq108=t1)&&$eq107===null?true:
				($eq107===null?false:($eq108===null?false:
					((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107.__cmp__=='function'?$eq107.__cmp__($eq108) === 0:
						((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108.__cmp__=='function'?$eq108.__cmp__($eq107) === 0:
							$eq107==$eq108))))));
			self['assertTrue']((($eq109=$p['cmp'](l1, t1))===($eq110=(typeof ($usub14=1)=='number'?
				-$usub14:
				$p['op_usub']($usub14)))&&$eq109===null?true:
				($eq109===null?false:($eq110===null?false:
					((typeof $eq109=='object'||typeof $eq109=='function')&&typeof $eq109.__cmp__=='function'?$eq109.__cmp__($eq110) === 0:
						((typeof $eq110=='object'||typeof $eq110=='function')&&typeof $eq110.__cmp__=='function'?$eq110.__cmp__($eq109) === 0:
							$eq109==$eq110))))));
			self['assertTrue']((($eq111=$p['cmp'](t1, l1))===($eq112=1)&&$eq111===null?true:
				($eq111===null?false:($eq112===null?false:
					((typeof $eq111=='object'||typeof $eq111=='function')&&typeof $eq111.__cmp__=='function'?$eq111.__cmp__($eq112) === 0:
						((typeof $eq112=='object'||typeof $eq112=='function')&&typeof $eq112.__cmp__=='function'?$eq112.__cmp__($eq111) === 0:
							$eq111==$eq112))))));
			self['assertTrue'](!(($eq113=l1)===($eq114=t1)&&$eq113===null?true:
				($eq113===null?false:($eq114===null?false:
					((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113.__cmp__=='function'?$eq113.__cmp__($eq114) === 0:
						((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114.__cmp__=='function'?$eq114.__cmp__($eq113) === 0:
							$eq113==$eq114))))), 'l1 != t1');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testCmpListTuple'] = $method;
		$method = $pyjs__bind_method2('testSortCmp', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,$116,$114,$115,$eq116,$113,$117,$eq115,$118,l2,l1;
			a = (typeof A == "undefined"?$m.A:A)();
			l1 = $p['list']([a, 1]);
			l1['sort']();
			l2 = $p['list']([1, a]);
			l2['sort']();
			self['assertTrue'](((typeof ($113=l1).__array != 'undefined'?
				((typeof $113.__array[$114=0]) != 'undefined'?$113.__array[$114]:
					$113.__getitem__($114)):
					$113.__getitem__(0)) === a));
			self['assertTrue'](((typeof ($115=l2).__array != 'undefined'?
				((typeof $115.__array[$116=0]) != 'undefined'?$115.__array[$116]:
					$115.__getitem__($116)):
					$115.__getitem__(0)) === a));
			self['assertFalse']((($eq115=(typeof ($117=l1).__array != 'undefined'?
				((typeof $117.__array[$118=0]) != 'undefined'?$117.__array[$118]:
					$117.__getitem__($118)):
					$117.__getitem__(0)))===($eq116=a)&&$eq115===null?true:
				($eq115===null?false:($eq116===null?false:
					((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115.__cmp__=='function'?$eq115.__cmp__($eq116) === 0:
						((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116.__cmp__=='function'?$eq116.__cmp__($eq115) === 0:
							$eq115==$eq116))))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSortCmp'] = $method;
		$method = $pyjs__bind_method2('testReverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var l,$119,$122,$121,$120;
			l = $p['list']([1, 2, 3]);
			l['reverse']();
			self['assertEqual']((typeof ($119=l).__array != 'undefined'?
				((typeof $119.__array[$120=0]) != 'undefined'?$119.__array[$120]:
					$119.__getitem__($120)):
					$119.__getitem__(0)), 3);
			self['assertEqual']((typeof ($121=l).__array != 'undefined'?
				((typeof $121.__array[$122=2]) != 'undefined'?$121.__array[$122]:
					$121.__getitem__($122)):
					$121.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testReverse'] = $method;
		$method = $pyjs__bind_method2('testConstructor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $130,$131,$132,$len20,$129,$128,$123,$127,$126,$125,$124,$len15,$len16,$len17,$len18,$len19,l6,l4,l5,l2,l3,l1;
			l1 = $p['list']();
			self['assertEqual']((($len15=l1) === null?0:
				(typeof $len15.__array != 'undefined' ? $len15.__array.length:
					(typeof $len15.__len__ == 'function'?$len15.__len__():
						(typeof $len15.length != 'undefined'?$len15.length:
							$p['len']($len15))))), 0);
			l2 = $p['list']();
			self['assertEqual']((($len16=l2) === null?0:
				(typeof $len16.__array != 'undefined' ? $len16.__array.length:
					(typeof $len16.__len__ == 'function'?$len16.__len__():
						(typeof $len16.length != 'undefined'?$len16.length:
							$p['len']($len16))))), 0);
			l3 = $p['list']($p['list']([]));
			self['assertEqual']((($len17=l3) === null?0:
				(typeof $len17.__array != 'undefined' ? $len17.__array.length:
					(typeof $len17.__len__ == 'function'?$len17.__len__():
						(typeof $len17.length != 'undefined'?$len17.length:
							$p['len']($len17))))), 0);
			l4 = $p['list']($p['list']([10]));
			self['assertEqual']((($len18=l4) === null?0:
				(typeof $len18.__array != 'undefined' ? $len18.__array.length:
					(typeof $len18.__len__ == 'function'?$len18.__len__():
						(typeof $len18.length != 'undefined'?$len18.length:
							$p['len']($len18))))), 1);
			self['assertEqual']((typeof ($123=l4).__array != 'undefined'?
				((typeof $123.__array[$124=0]) != 'undefined'?$123.__array[$124]:
					$123.__getitem__($124)):
					$123.__getitem__(0)), 10);
			l5 = $p['list']($p['range'](10, 40, 10));
			self['assertEqual']((($len19=l5) === null?0:
				(typeof $len19.__array != 'undefined' ? $len19.__array.length:
					(typeof $len19.__len__ == 'function'?$len19.__len__():
						(typeof $len19.length != 'undefined'?$len19.length:
							$p['len']($len19))))), 3);
			self['assertEqual']((typeof ($125=l5).__array != 'undefined'?
				((typeof $125.__array[$126=0]) != 'undefined'?$125.__array[$126]:
					$125.__getitem__($126)):
					$125.__getitem__(0)), 10);
			self['assertEqual']((typeof ($127=l5).__array != 'undefined'?
				((typeof $127.__array[$128=1]) != 'undefined'?$127.__array[$128]:
					$127.__getitem__($128)):
					$127.__getitem__(1)), 20);
			self['assertEqual']((typeof ($129=l5).__array != 'undefined'?
				((typeof $129.__array[$130=2]) != 'undefined'?$129.__array[$130]:
					$129.__getitem__($130)):
					$129.__getitem__(2)), 30);
			l6 = $p['list'](l4);
			self['assertEqual']((($len20=l6) === null?0:
				(typeof $len20.__array != 'undefined' ? $len20.__array.length:
					(typeof $len20.__len__ == 'function'?$len20.__len__():
						(typeof $len20.length != 'undefined'?$len20.length:
							$p['len']($len20))))), 1);
			self['assertEqual']((typeof ($131=l6).__array != 'undefined'?
				((typeof $131.__array[$132=0]) != 'undefined'?$131.__array[$132]:
					$131.__getitem__($132)):
					$131.__getitem__(0)), 10);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testConstructor'] = $method;
		$method = $pyjs__bind_method2('testRangeList', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq118,list1,$eq117,list2;
			list1 = $p['list']([0, 1, 2, 3]);
			list2 = $p['range'](0, 4);
			self['assertTrue']((($eq117=list1)===($eq118=list2)&&$eq117===null?true:
				($eq117===null?false:($eq118===null?false:
					((typeof $eq117=='object'||typeof $eq117=='function')&&typeof $eq117.__cmp__=='function'?$eq117.__cmp__($eq118) === 0:
						((typeof $eq118=='object'||typeof $eq118=='function')&&typeof $eq118.__cmp__=='function'?$eq118.__cmp__($eq117) === 0:
							$eq117==$eq118))))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testRangeList'] = $method;
		$method = $pyjs__bind_method2('testExtend', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len24,$len21,$len23,$len22,$141,l,$142,$140,$138,$139,l4,l2,l3,$143,$144,$133,$134,$135,$136,$137;
			l = $p['list']([10, 20]);
			l['extend']($p['list']([30, 40]));
			self['assertEqual']((($len21=l) === null?0:
				(typeof $len21.__array != 'undefined' ? $len21.__array.length:
					(typeof $len21.__len__ == 'function'?$len21.__len__():
						(typeof $len21.length != 'undefined'?$len21.length:
							$p['len']($len21))))), 4);
			self['assertEqual']((typeof ($133=l).__array != 'undefined'?
				((typeof $133.__array[$134=0]) != 'undefined'?$133.__array[$134]:
					$133.__getitem__($134)):
					$133.__getitem__(0)), 10);
			self['assertEqual']((typeof ($135=l).__array != 'undefined'?
				((typeof $135.__array[$136=1]) != 'undefined'?$135.__array[$136]:
					$135.__getitem__($136)):
					$135.__getitem__(1)), 20);
			self['assertEqual']((typeof ($137=l).__array != 'undefined'?
				((typeof $137.__array[$138=2]) != 'undefined'?$137.__array[$138]:
					$137.__getitem__($138)):
					$137.__getitem__(2)), 30);
			self['assertEqual']((typeof ($139=l).__array != 'undefined'?
				((typeof $139.__array[$140=3]) != 'undefined'?$139.__array[$140]:
					$139.__getitem__($140)):
					$139.__getitem__(3)), 40);
			l2 = $p['list']([10, 20]);
			l2['extend']($p['list']([]));
			self['assertEqual']((($len22=l2) === null?0:
				(typeof $len22.__array != 'undefined' ? $len22.__array.length:
					(typeof $len22.__len__ == 'function'?$len22.__len__():
						(typeof $len22.length != 'undefined'?$len22.length:
							$p['len']($len22))))), 2);
			l3 = $p['list']([]);
			l3['extend']($p['list']([10, 20]));
			self['assertEqual']((($len23=l3) === null?0:
				(typeof $len23.__array != 'undefined' ? $len23.__array.length:
					(typeof $len23.__len__ == 'function'?$len23.__len__():
						(typeof $len23.length != 'undefined'?$len23.length:
							$p['len']($len23))))), 2);
			self['assertEqual']((typeof ($141=l3).__array != 'undefined'?
				((typeof $141.__array[$142=0]) != 'undefined'?$141.__array[$142]:
					$141.__getitem__($142)):
					$141.__getitem__(0)), 10);
			self['assertEqual']((typeof ($143=l3).__array != 'undefined'?
				((typeof $143.__array[$144=1]) != 'undefined'?$143.__array[$144]:
					$143.__getitem__($144)):
					$143.__getitem__(1)), 20);
			l4 = $p['list']([]);
			l4['extend']($p['list']([]));
			self['assertEqual']((($len24=l4) === null?0:
				(typeof $len24.__array != 'undefined' ? $len24.__array.length:
					(typeof $len24.__len__ == 'function'?$len24.__len__():
						(typeof $len24.length != 'undefined'?$len24.length:
							$p['len']($len24))))), 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testExtend'] = $method;
		$method = $pyjs__bind_method2('testIter2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,i,$iter4_nextval,$iter3_type,$iter4_idx,item,$add5,$add6,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$add8,$iter4_iter,$iter3_nextval,$add7;
			i = 0;
			$iter3_iter = $p['list']([0, 1, 2, 3]);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				item = $iter3_nextval;
				self['assertEqual'](item, i);
				i = (typeof ($add5=i)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			i = 0;
			$iter4_iter = $p['__getslice']($p['list']([0, 1, 2, 3]), 1, (typeof ($usub15=1)=='number'?
				-$usub15:
				$p['op_usub']($usub15)));
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				item = $iter4_nextval;
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
			var $add9,item,i,l,it,$bool3,$pyjs_try_err,$add10,$145,$146;
			l = $p['list']([0, 1, 2, 3]);
			i = 0;
			it = l['__iter__']();
			while ((($bool3=true) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					item = it['next']();
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						break;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['assertEqual'](item, (typeof ($145=l).__array != 'undefined'?
					((typeof $145.__array[$146=i]) != 'undefined'?$145.__array[$146]:
						$145.__getitem__($146)):
						$145.__getitem__(i)));
				i = (typeof ($add9=i)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIter'] = $method;
		$method = $pyjs__bind_method2('testIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,e,l;
			l = $p['list']([2, 4, 6, 8]);
			try {
				self['assertEqual'](l['index'](2), 0);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['fail']('ValueError raised when not expected');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				l['index'](200000);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['fail']('ValueError not raised');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertIn']($p['str'](e), $p['list'](['list.index(x): x not in list', '200000 is not in list']), 'ValueError exception has incorrect message');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			l = $p['list']([$p['list']([1]), $p['list']([2]), $p['list']([3])]);
			self['assertEqual'](l['index']($p['list']([2])), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIndex'] = $method;
		$method = $pyjs__bind_method2('testIndexClass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$len25,$len27,$len26,$len29,$len28,$170,$167,$166,$165,$164,$149,$148,$161,$160,$147,$169,$168,l,$163,$162;
			l = $m['get_test_letters']();
			self['assertEqual']($p['getattr']((typeof ($147=l).__array != 'undefined'?
				((typeof $147.__array[$148=0]) != 'undefined'?$147.__array[$148]:
					$147.__getitem__($148)):
					$147.__getitem__(0)), 'letter'), 'g', '#413 index __cmp__ class issue');
			self['assertEqual']($p['getattr']((typeof ($149=l).__array != 'undefined'?
				((typeof $149.__array[$150=1]) != 'undefined'?$149.__array[$150]:
					$149.__getitem__($150)):
					$149.__getitem__(1)), 'letter'), 'f', '#413 index __cmp__ class issue');
			self['assertEqual']($p['getattr']((typeof ($153=(typeof ($151=l).__array != 'undefined'?
				((typeof $151.__array[$152=0]) != 'undefined'?$151.__array[$152]:
					$151.__getitem__($152)):
					$151.__getitem__(0))).__array != 'undefined'?
				((typeof $153.__array[$154=0]) != 'undefined'?$153.__array[$154]:
					$153.__getitem__($154)):
					$153.__getitem__(0)), 'letter'), 'o', '#413 index __cmp__ class issue');
			self['assertEqual']($p['getattr']((typeof ($157=(typeof ($155=l).__array != 'undefined'?
				((typeof $155.__array[$156=1]) != 'undefined'?$155.__array[$156]:
					$155.__getitem__($156)):
					$155.__getitem__(1))).__array != 'undefined'?
				((typeof $157.__array[$158=0]) != 'undefined'?$157.__array[$158]:
					$157.__getitem__($158)):
					$157.__getitem__(0)), 'letter'), 'r', '#413 index __cmp__ class issue');
			self['assertEqual']((($len25=l) === null?0:
				(typeof $len25.__array != 'undefined' ? $len25.__array.length:
					(typeof $len25.__len__ == 'function'?$len25.__len__():
						(typeof $len25.length != 'undefined'?$len25.length:
							$p['len']($len25))))), 2, '#413 index __cmp__ class issue');
			self['assertEqual']((($len26=(typeof ($159=l).__array != 'undefined'?
				((typeof $159.__array[$160=0]) != 'undefined'?$159.__array[$160]:
					$159.__getitem__($160)):
					$159.__getitem__(0))) === null?0:
				(typeof $len26.__array != 'undefined' ? $len26.__array.length:
					(typeof $len26.__len__ == 'function'?$len26.__len__():
						(typeof $len26.length != 'undefined'?$len26.length:
							$p['len']($len26))))), 1, '#413 index __cmp__ class issue');
			self['assertEqual']((($len27=(typeof ($161=l).__array != 'undefined'?
				((typeof $161.__array[$162=1]) != 'undefined'?$161.__array[$162]:
					$161.__getitem__($162)):
					$161.__getitem__(1))) === null?0:
				(typeof $len27.__array != 'undefined' ? $len27.__array.length:
					(typeof $len27.__len__ == 'function'?$len27.__len__():
						(typeof $len27.length != 'undefined'?$len27.length:
							$p['len']($len27))))), 1, '#413 index __cmp__ class issue');
			self['assertEqual']((($len28=(typeof ($165=(typeof ($163=l).__array != 'undefined'?
				((typeof $163.__array[$164=0]) != 'undefined'?$163.__array[$164]:
					$163.__getitem__($164)):
					$163.__getitem__(0))).__array != 'undefined'?
				((typeof $165.__array[$166=0]) != 'undefined'?$165.__array[$166]:
					$165.__getitem__($166)):
					$165.__getitem__(0))) === null?0:
				(typeof $len28.__array != 'undefined' ? $len28.__array.length:
					(typeof $len28.__len__ == 'function'?$len28.__len__():
						(typeof $len28.length != 'undefined'?$len28.length:
							$p['len']($len28))))), 1, '#413 index __cmp__ class issue');
			self['assertEqual']((($len29=(typeof ($169=(typeof ($167=l).__array != 'undefined'?
				((typeof $167.__array[$168=1]) != 'undefined'?$167.__array[$168]:
					$167.__getitem__($168)):
					$167.__getitem__(1))).__array != 'undefined'?
				((typeof $169.__array[$170=0]) != 'undefined'?$169.__array[$170]:
					$169.__getitem__($170)):
					$169.__getitem__(0))) === null?0:
				(typeof $len29.__array != 'undefined' ? $len29.__array.length:
					(typeof $len29.__len__ == 'function'?$len29.__len__():
						(typeof $len29.length != 'undefined'?$len29.length:
							$p['len']($len29))))), 2, '#413 index __cmp__ class issue');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIndexClass'] = $method;
		$method = $pyjs__bind_method2('testAugAssign', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var getlist,$174,$175,$176,$177,$mod1,$171,$172,$173,$178,$179,$mul2,$189,$188,$181,$180,$sub1,$182,$185,$184,$187,$186,$augexpr1,$augexpr2,$198,$202,$200,$201,$augsub2,$augsub1,$add14,$add15,$add16,$add17,$add11,$add12,$sub2,$div2,$div1,$add18,$183,$mul1,getidx,a,$mod2,l,$add13,$199,$196,$197,$194,$195,$192,$193,$190,$191;
			l = $p['list']([10, 10.0]);
			getidx = function(x) {

				return x;
			};
			getidx.__name__ = 'getidx';

			getidx.__bind_type__ = 0;
			getidx.__args__ = [null,null,['x']];
			getlist = function() {

				return l;
			};
			getlist.__name__ = 'getlist';

			getlist.__bind_type__ = 0;
			getlist.__args__ = [null,null];
			l.__setitem__(0, (typeof ($add11=(typeof ($171=l).__array != 'undefined'?
				((typeof $171.__array[$172=0]) != 'undefined'?$171.__array[$172]:
					$171.__getitem__($172)):
					$171.__getitem__(0)))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)));
			self['assertEqual']((typeof ($173=l).__array != 'undefined'?
				((typeof $173.__array[$174=0]) != 'undefined'?$173.__array[$174]:
					$173.__getitem__($174)):
					$173.__getitem__(0)), 11);
			l.__setitem__(0, (typeof ($sub1=(typeof ($175=l).__array != 'undefined'?
				((typeof $175.__array[$176=0]) != 'undefined'?$175.__array[$176]:
					$175.__getitem__($176)):
					$175.__getitem__(0)))==typeof ($sub2=2) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)));
			self['assertEqual']((typeof ($177=l).__array != 'undefined'?
				((typeof $177.__array[$178=0]) != 'undefined'?$177.__array[$178]:
					$177.__getitem__($178)):
					$177.__getitem__(0)), 9);
			l.__setitem__(0, (typeof ($div1=(typeof ($179=l).__array != 'undefined'?
				((typeof $179.__array[$180=0]) != 'undefined'?$179.__array[$180]:
					$179.__getitem__($180)):
					$179.__getitem__(0)))==typeof ($div2=3) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			self['assertEqual']((typeof ($181=l).__array != 'undefined'?
				((typeof $181.__array[$182=0]) != 'undefined'?$181.__array[$182]:
					$181.__getitem__($182)):
					$181.__getitem__(0)), 3);
			l.__setitem__(0, (typeof ($mul1=(typeof ($183=l).__array != 'undefined'?
				((typeof $183.__array[$184=0]) != 'undefined'?$183.__array[$184]:
					$183.__getitem__($184)):
					$183.__getitem__(0)))==typeof ($mul2=9) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
			self['assertEqual']((typeof ($185=l).__array != 'undefined'?
				((typeof $185.__array[$186=0]) != 'undefined'?$185.__array[$186]:
					$185.__getitem__($186)):
					$185.__getitem__(0)), 27);
			l.__setitem__(0, (typeof ($mod1=(typeof ($187=l).__array != 'undefined'?
				((typeof $187.__array[$188=0]) != 'undefined'?$187.__array[$188]:
					$187.__getitem__($188)):
					$187.__getitem__(0)))==typeof ($mod2=5) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)));
			self['assertEqual']((typeof ($189=l).__array != 'undefined'?
				((typeof $189.__array[$190=0]) != 'undefined'?$189.__array[$190]:
					$189.__getitem__($190)):
					$189.__getitem__(0)), 2);
			a = 0;
			l.__setitem__(a, (typeof ($add13=(typeof ($191=l).__array != 'undefined'?
				((typeof $191.__array[$192=a]) != 'undefined'?$191.__array[$192]:
					$191.__getitem__($192)):
					$191.__getitem__(a)))==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14)));
			self['assertEqual']((typeof ($193=l).__array != 'undefined'?
				((typeof $193.__array[$194=0]) != 'undefined'?$193.__array[$194]:
					$193.__getitem__($194)):
					$193.__getitem__(0)), 3);
			var $augsub1 = getidx(0);
			var $augexpr1 = l;
			$augexpr1.__setitem__($augsub1, (typeof ($add15=(typeof ($195=$augexpr1).__array != 'undefined'?
				((typeof $195.__array[$196=$augsub1]) != 'undefined'?$195.__array[$196]:
					$195.__getitem__($196)):
					$195.__getitem__($augsub1)))==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)));
			self['assertEqual']((typeof ($197=l).__array != 'undefined'?
				((typeof $197.__array[$198=0]) != 'undefined'?$197.__array[$198]:
					$197.__getitem__($198)):
					$197.__getitem__(0)), 4);
			var $augsub2 = getidx(0);
			var $augexpr2 = getlist();
			$augexpr2.__setitem__($augsub2, (typeof ($add17=(typeof ($199=$augexpr2).__array != 'undefined'?
				((typeof $199.__array[$200=$augsub2]) != 'undefined'?$199.__array[$200]:
					$199.__getitem__($200)):
					$199.__getitem__($augsub2)))==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)));
			self['assertEqual']((typeof ($201=l).__array != 'undefined'?
				((typeof $201.__array[$202=0]) != 'undefined'?$201.__array[$202]:
					$201.__getitem__($202)):
					$201.__getitem__(0)), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testAugAssign'] = $method;
		$method = $pyjs__bind_method2('testListComp', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq119,$eq126,$eq123,$eq122,$eq120,l,l1,$eq124,$cmp15,$cmp17,$cmp16,l2,$eq125,vec1,vec2,$cmp18,$eq121;
			l1 = $p['list'](['a', 'b', 'c']);
			l2 = function(){
				var $iter5_nextval,i,$iter5_idx,$collcomp1,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
			$iter5_iter = l1;
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				$collcomp1['append'](i);
			}

	return $collcomp1;}();
			self['assertTrue']((($eq119=l1)===($eq120=l2)&&$eq119===null?true:
				($eq119===null?false:($eq120===null?false:
					((typeof $eq119=='object'||typeof $eq119=='function')&&typeof $eq119.__cmp__=='function'?$eq119.__cmp__($eq120) === 0:
						((typeof $eq120=='object'||typeof $eq120=='function')&&typeof $eq120.__cmp__=='function'?$eq120.__cmp__($eq119) === 0:
							$eq119==$eq120))))), 'simple');
			vec1 = $p['list']([1, 3, 5]);
			vec2 = $p['list']([2, 4, 6]);
			l = function(){
				var $iter6_idx,$iter6_type,$cmp9,$collcomp2,$iter6_array,$cmp10,$bool4,x,$iter6_iter,$mul4,$mul3,$iter6_nextval;
	$collcomp2 = $p['list']();
			$iter6_iter = vec1;
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				x = $iter6_nextval;
				if ((($bool4=((((($cmp9=x)===($cmp10=3)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$collcomp2['append']((typeof ($mul3=3)==typeof ($mul4=x) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)));
				}
			}

	return $collcomp2;}();
			self['assertTrue']((($eq121=l)===($eq122=$p['list']([9, 15]))&&$eq121===null?true:
				($eq121===null?false:($eq122===null?false:
					((typeof $eq121=='object'||typeof $eq121=='function')&&typeof $eq121.__cmp__=='function'?$eq121.__cmp__($eq122) === 0:
						((typeof $eq122=='object'||typeof $eq122=='function')&&typeof $eq122.__cmp__=='function'?$eq122.__cmp__($eq121) === 0:
							$eq121==$eq122))))), 'conditional');
			l = function(){
				var $bool6,$cmp12,$iter8_idx,$iter8_array,$iter7_nextval,$iter7_iter,$iter8_type,$iter7_array,$collcomp3,$iter8_iter,$cmp14,$cmp11,$iter8_nextval,$cmp13,$iter7_idx,y,x,$bool5,$iter7_type;
	$collcomp3 = $p['list']();
			$iter7_iter = vec1;
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				x = $iter7_nextval;
				if ((($bool5=((((($cmp11=x)===($cmp12=3)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter8_iter = vec2;
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						y = $iter8_nextval;
						if ((($bool6=((($cmp13=y)===($cmp14=3)?0:
							(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
								($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
								$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
								false :
								(typeof $bool6=='object'?
									(typeof $bool6.__nonzero__=='function'?
										$bool6.__nonzero__() :
										(typeof $bool6.__len__=='function'?
											($bool6.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$collcomp3['append']($p['tuple']([x, y]));
						}
					}
				}
			}

	return $collcomp3;}();
			self['assertTrue']((($eq123=l)===($eq124=$p['list']([$p['tuple']([3, 4]), $p['tuple']([3, 6]), $p['tuple']([5, 4]), $p['tuple']([5, 6])]))&&$eq123===null?true:
				($eq123===null?false:($eq124===null?false:
					((typeof $eq123=='object'||typeof $eq123=='function')&&typeof $eq123.__cmp__=='function'?$eq123.__cmp__($eq124) === 0:
						((typeof $eq124=='object'||typeof $eq124=='function')&&typeof $eq124.__cmp__=='function'?$eq124.__cmp__($eq123) === 0:
							$eq123==$eq124))))), 'double');
			l = function(){
				var $iter9_iter,i,$collcomp4,$iter9_nextval,$iter9_idx,$iter9_type,$iter9_array;
	$collcomp4 = $p['list']();
			$iter9_iter = function(){
				var $iter10_nextval,$collcomp5,j,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx;
	$collcomp5 = $p['list']();
			$iter10_iter = $p['list']([1, 2, 3]);
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				j = $iter10_nextval;
				$collcomp5['append'](j);
			}

	return $collcomp5;}();
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				i = $iter9_nextval;
				$collcomp4['append'](i);
			}

	return $collcomp4;}();
			self['assertTrue']((($eq125=l)===($eq126=$p['list']([1, 2, 3]))&&$eq125===null?true:
				($eq125===null?false:($eq126===null?false:
					((typeof $eq125=='object'||typeof $eq125=='function')&&typeof $eq125.__cmp__=='function'?$eq125.__cmp__($eq126) === 0:
						((typeof $eq126=='object'||typeof $eq126=='function')&&typeof $eq126.__cmp__=='function'?$eq126.__cmp__($eq125) === 0:
							$eq125==$eq126))))));
			self['assertTrue'](((($cmp15=$p['list']([1]))===($cmp16=$p['list']([0, 1]))?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == 1), '[1] > [0,1]');
			self['assertTrue'](((($cmp17=$p['list']([0, 1]))===($cmp18=$p['list']([1]))?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1), '[0,1] < [1]');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testListComp'] = $method;
		$method = $pyjs__bind_method2('testListContains', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var l;
			l = $p['list']([$p['list'](['monkey']), $p['list'](['patch']), $p['list'](['fish']), $p['list'](['chips'])]);
			self['assertTrue'](l.__contains__($p['list'](['fish'])), "['fish'] in l");
			l = $p['list']([$p['dict']([['monkey', 1]]), $p['dict']([['patch', 1]]), $p['dict']([['fish', 1]]), $p['dict']([['chips', 1]])]);
			self['assertTrue'](l.__contains__($p['dict']([['fish', 1]])), "{'fish':1} in l");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testListContains'] = $method;
		$method = $pyjs__bind_method2('testExtendedSlicing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,c,b,$cmp20,$bool7,$mul8,$mul7,$mul6,$mul5,$cmp19;
			self['fail']('Bug #xxx - need better __setitem__ implementation for builtin lists');
			return null;
			a = $p['range'](20);
			a.__setitem__($p['slice'](2, 10, 3), $p['list']([1, 2, 3]));
			self['assertEqual'](a, $p['list']([0, 1, 1, 3, 4, 2, 6, 7, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
			a = $p['list']([0, 1, 2, 3, 4]);
			a.__delitem__($p['slice'](null, null, 2));
			self['assertEqual'](a, $p['list']([1, 3]));
			a = $p['range'](5);
			a.__delitem__($p['slice'](1, null, 2));
			self['assertEqual'](a, $p['list']([0, 2, 4]));
			a = $p['range'](5);
			a.__delitem__($p['slice'](1, null, (typeof ($usub16=2)=='number'?
				-$usub16:
				$p['op_usub']($usub16))));
			self['assertEqual'](a, $p['list']([0, 2, 3, 4]));
			a = $p['range'](10);
			a.__delitem__($p['slice'](null, null, 1000));
			self['assertEqual'](a, $p['list']([1, 2, 3, 4, 5, 6, 7, 8, 9]));
			a = $p['range'](10);
			a.__setitem__($p['slice'](null, null, 2), (typeof ($mul5=$p['list']([(typeof ($usub17=1)=='number'?
				-$usub17:
				$p['op_usub']($usub17))]))==typeof ($mul6=5) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
			self['assertEqual'](a, $p['list']($p['list']([(typeof ($usub18=1)=='number'?
				-$usub18:
				$p['op_usub']($usub18)), 1, (typeof ($usub19=1)=='number'?
				-$usub19:
				$p['op_usub']($usub19)), 3, (typeof ($usub20=1)=='number'?
				-$usub20:
				$p['op_usub']($usub20)), 5, (typeof ($usub21=1)=='number'?
				-$usub21:
				$p['op_usub']($usub21)), 7, (typeof ($usub22=1)=='number'?
				-$usub22:
				$p['op_usub']($usub22)), 9])));
			a = $p['list']($p['range'](10));
			a.__setitem__($p['slice'](null, null, (typeof ($usub23=4)=='number'?
				-$usub23:
				$p['op_usub']($usub23))), (typeof ($mul7=$p['list']([10]))==typeof ($mul8=3) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			self['assertEqual'](a, $p['list']($p['list']([0, 10, 2, 3, 4, 10, 6, 7, 8, 10])));
			a = $p['list']($p['range'](4));
			a.__setitem__($p['slice'](null, null, (typeof ($usub24=1)=='number'?
				-$usub24:
				$p['op_usub']($usub24))), a);
			self['assertEqual'](a, $p['list']($p['list']([3, 2, 1, 0])));
			a = $p['list']($p['range'](10));
			b = $p['__getslice'](a, 0, null);
			c = $p['__getslice'](a, 0, null);
			$p['__setslice'](a, 2, 3, $p['list']($p['list'](['two', 'elements'])));
			b.__setitem__($p['slice'](2, 3), $p['list']($p['list'](['two', 'elements'])));
			c.__setitem__($p['slice'](2, 3, null), $p['list']($p['list'](['two', 'elements'])));
			self['assertEqual'](a, b);
			self['assertEqual'](a, c);
			a = $p['list']($p['range'](10));
			a.__setitem__($p['slice'](null, null, 2), $p['tuple']($p['range'](5)));
			self['assertEqual'](a, $p['list']($p['list']([0, 1, 1, 3, 2, 5, 3, 7, 4, 9])));
			if ((($bool7=((($cmp19=$p['getattr']($m['sys'], 'version_info'))===($cmp20=$p['tuple']([2, 5, 5]))?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			a = $p['list']($p['range'](10));
			a.__delitem__($p['slice'](9, null, (1)<<(333)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testExtendedSlicing'] = $method;
		$method = $pyjs__bind_method2('testStr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['str']($p['list']([0, 1])), '[0, 1]');
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

			self['assertEqual']($p['repr']($p['list']([0, 1])), '[0, 1]');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testRepr'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ListTest', $p['tuple']($bases), $data);
	})();
	$m['A'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ListTest';
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return (typeof ($usub25=1)=='number'?
				-$usub25:
				$p['op_usub']($usub25));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('A', $p['tuple']($bases), $data);
	})();
	$m['B'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ListTest';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('B', $p['tuple']($bases), $data);
	})();
	$m['delete_value'] = $p['list']([1, 2, 3, 4, 5]);
	$m['delete_value'].__delitem__(3);
	$p['__delslice']($m['delete_value'], 2, 3)
	return this;
}; /* end ListTest */


/* end module: ListTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_JS', 'sys']
*/

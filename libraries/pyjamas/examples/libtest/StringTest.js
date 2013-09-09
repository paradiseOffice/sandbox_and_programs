/* start module: StringTest */
$pyjs.loaded_modules['StringTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['StringTest'].__was_initialized__) return $pyjs.loaded_modules['StringTest'];
	var $m = $pyjs.loaded_modules["StringTest"];
	$m.__repr__ = function() { return "<module: StringTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StringTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['write'] = $p['___import___']('write', null);
	$m['StringTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'StringTest';
		$method = $pyjs__bind_method2('testBasestring', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s;
			s = 'A string';
			self['assertTrue']($p['isinstance'](s, $p['str']), 'isinstance(s, str)');
			self['assertTrue']($p['isinstance'](s, $p['basestring']), 'isinstance(s, basestring)');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBasestring'] = $method;
		$method = $pyjs__bind_method2('testToString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,e,o;
			o = (typeof ClassWithOwnToString == "undefined"?$m.ClassWithOwnToString:ClassWithOwnToString)();
			self['assertEquals'](o['toString'](), 'ClassWithOwnToString as a String');
			o = (typeof ClassWithOwnToString2 == "undefined"?$m.ClassWithOwnToString2:ClassWithOwnToString2)();
			try {
				self['assertEquals'](o['toString'](), 'ClassWithOwnToString2 as a String');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					e = $pyjs_try_err;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testToString'] = $method;
		$method = $pyjs__bind_method2('testReplace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,result,expected_result1,expected_result2,expected_result3;
			text = 'this is a rather long string';
			expected_result1 = 'th--- --- a rather long string';
			expected_result2 = 'thi-- is a rather long string';
			expected_result3 = 'this_is_a_rather_long_string';
			result = text['$$replace']('is', '---');
			self['assertEquals'](result, expected_result1);
			result = text['$$replace']('s', '--', 1);
			self['assertEquals'](result, expected_result2);
			result = text['$$replace'](' ', '_');
			self['assertEquals'](result, expected_result3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testReplace'] = $method;
		$method = $pyjs__bind_method2('testRFind', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,result;
			text = 'this is a yes it is a rather long string';
			result = text['rfind']('not found');
			self['assertEquals'](result, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			result = text['rfind']('is');
			self['assertEquals'](result, 17);
			result = text['rfind']('is', 18);
			self['assertEquals'](result, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			result = text['rfind']('is', 17);
			self['assertEquals'](result, 17);
			result = text['rfind']('is', 16);
			self['assertEquals'](result, 17);
			result = text['rfind']('is', 2, 3);
			self['assertEquals'](result, (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testRFind'] = $method;
		$method = $pyjs__bind_method2('testFind', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,result;
			text = 'this is a rather long string';
			result = text['find']('not found');
			self['assertEquals'](result, (typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4)));
			result = text['find']('is');
			self['assertEquals'](result, 2);
			result = text['find']('is', 3);
			self['assertEquals'](result, 5);
			result = text['find']('is', 2, 3);
			self['assertEquals'](result, (typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testFind'] = $method;
		$method = $pyjs__bind_method2('testJoin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result,sep1,sep2,data,expected_result1,expected_result2;
			data = 'this is a rather long string';
			data = data['$$split'](' ');
			sep1 = ', ';
			sep2 = '';
			expected_result1 = 'this, is, a, rather, long, string';
			expected_result2 = 'thisisaratherlongstring';
			result = sep1['join'](data);
			self['assertEquals'](result, expected_result1);
			result = sep2['join'](data);
			self['assertEquals'](result, expected_result2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testJoin'] = $method;
		$method = $pyjs__bind_method2('testSplit', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result,$5,$10,$3,space,text,t,empty,$8,$9,$6,$7,$4,$1,$2,expected_result1,expected_result2,expected_result3;
			text = ' this is  a rather long string  ';
			space = ' ';
			empty = '';
			expected_result1 = ' this is  a rather long string  ';
			expected_result2 = 'thisis  a rather long string  ';
			expected_result3 = 'this is a rather long string';
			t = text['$$split'](space);
			self['assertEquals']((typeof ($1=t).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), '');
			self['assertEquals']((typeof ($3=t).__array != 'undefined'?
				((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(1)), 'this');
			self['assertEquals']((typeof ($5=t).__array != 'undefined'?
				((typeof $5.__array[$6=2]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(2)), 'is');
			self['assertEquals']((typeof ($7=t).__array != 'undefined'?
				((typeof $7.__array[$8=3]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(3)), '');
			self['assertEquals']((typeof ($9=t).__array != 'undefined'?
				((typeof $9.__array[$10=4]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(4)), 'a');
			result = space['join'](t);
			self['assertEquals'](result, expected_result1);
			result = empty['join'](text['$$split'](space, 2));
			self['assertEquals'](result, expected_result2);
			result = space['join'](text['$$split']());
			self['assertEquals'](result, expected_result3);
			result = empty['$$split']();
			self['assertEquals'](result, $p['list']([]));
			result = empty['$$split'](null);
			self['assertEquals'](result, $p['list']([]));
			result = empty['$$split'](' ');
			self['assertEquals'](result, $p['list'](['']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSplit'] = $method;
		$method = $pyjs__bind_method2('testStrip', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,expected_result1,expected_result2,result;
			text = ' this is  a rather long string  ';
			expected_result1 = 'this is  a rather long string';
			expected_result2 = 'a rather long string';
			result = text['strip']();
			self['assertEquals'](result, expected_result1);
			result = text['strip'](' sthi');
			self['assertEquals'](result, expected_result2);
			result = text['strip']('');
			self['assertEquals'](result, text);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrip'] = $method;
		$method = $pyjs__bind_method2('testUnicode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text;
			text = 'Liebe \'hallo\' "gr\xc3\xbcsse" Gr\xc3\xbcsse';
			self['assertEqual'](text, $p['__getslice'](text, 0, null));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testUnicode'] = $method;
		$method = $pyjs__bind_method2('testIsDigit', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']('123'['isdigit'](), true);
			self['assertEqual']('-123'['isdigit'](), false);
			self['assertEqual']('123.45'['isdigit'](), false);
			self['assertEqual']('1a'['isdigit'](), false);
			self['assertEqual']('   '['isdigit'](), false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsDigit'] = $method;
		$method = $pyjs__bind_method2('testStringIterate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,text,$iter1_iter,$add2,$add1,t,x,$iter1_array;
			text = ' this is  a rather long string  ';
			t = '';
			$iter1_iter = text;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				x = $iter1_nextval;
				t = (typeof ($add1=t)==typeof ($add2=x) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			self['assertEqual'](text, t);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStringIterate'] = $method;
		$method = $pyjs__bind_method2('testStrTuple', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['str']($p['tuple']([5, 6])), '(5, 6)');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrTuple'] = $method;
		$method = $pyjs__bind_method2('testStrList', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['str']($p['list']([5, 6])), '[5, 6]');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrList'] = $method;
		$method = $pyjs__bind_method2('testStrFloat', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var f1;
			f1 = 1.5;
			self['assertEqual']($p['str'](f1), '1.5');
			self['assertEqual'](f1['__str__'](), '1.5', 'float.__str__() returns type instead of value, bug #487');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrFloat'] = $method;
		$method = $pyjs__bind_method2('testStartsWith', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s;
			s = 'abcd';
			self['assertEqual'](s['startswith']('ab'), true);
			self['assertEqual'](s['startswith']('ab', 0), true);
			self['assertEqual'](s['startswith']('ab', 1), false);
			self['assertEqual'](s['startswith']('bc', 1), true);
			self['assertEqual'](s['startswith']('ab', 0, 8), true);
			self['assertEqual'](s['startswith']('ab', 0, 3), true);
			self['assertEqual'](s['startswith']('ab', 0, 2), true);
			self['assertEqual'](s['startswith']('ab', 0, 1), false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStartsWith'] = $method;
		$method = $pyjs__bind_method2('testEndsWith', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s;
			s = 'abcd';
			self['assertEqual'](s['endswith']('cd'), true);
			self['assertEqual'](s['endswith']('cd', 0), true);
			self['assertEqual'](s['endswith']('cd', 2), true);
			self['assertEqual'](s['endswith']('cd', 3), false);
			self['assertEqual'](s['endswith']('cd', 0, 3), false);
			self['assertEqual'](s['endswith']('bc', 0, 3), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEndsWith'] = $method;
		$method = $pyjs__bind_method2('testLjust', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']('a'['ljust'](0), 'a');
			self['assertEqual']('a'['ljust'](4), 'a   ');
			self['assertEqual']('a'['ljust'](4, 'b'), 'abbb');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLjust'] = $method;
		$method = $pyjs__bind_method2('testRjust', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']('a'['rjust'](4, 'b'), 'bbba');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testRjust'] = $method;
		$method = $pyjs__bind_method2('testCenter', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']('a'['center'](4, '1'), '1a11');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testCenter'] = $method;
		$method = $pyjs__bind_method2('testZfill', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']('a'['zfill'](4), '000a');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testZfill'] = $method;
		$method = $pyjs__bind_method2('testSprintfList', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,e,s;
			self['assertEqual']($p['sprintf']('%s', 'foo'), 'foo');
			self['assertEqual']($p['sprintf']('%% %s', ''), '% ');
			self['assertEqual']($p['sprintf']('[%% %s]', ''), '[% ]');
			self['assertEqual']($p['sprintf']('[%c]', 32), '[ ]');
			self['assertEqual']($p['sprintf']('[%r]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%s]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%d]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%i]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%u]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%e]', 11), '[1.100000e+01]');
			self['assertEqual']($p['sprintf']('[%E]', 11), '[1.100000E+01]');
			self['assertEqual']($p['sprintf']('[%f]', 11), '[11.000000]');
			self['assertEqual']($p['sprintf']('[%.2f]', 11), '[11.00]');
			self['assertEqual']($p['sprintf']('[%F]', 11), '[11.000000]');
			self['assertEqual']($p['sprintf']('[%g]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%G]', 11), '[11]');
			self['assertEqual']($p['sprintf']('[%o]', 11), '[13]');
			self['assertEqual']($p['sprintf']('[%x]', 11), '[b]');
			self['assertEqual']($p['sprintf']('[%X]', 11), '[B]');
			self['assertEqual']($p['sprintf']('%*g,%10f', $p['tuple']([6, 1.234, 1.234])), ' 1.234,  1.234000');
			self['assertEqual']($p['sprintf']('%0*g,%010f', $p['tuple']([6, 1.234, 1.234])), '01.234,001.234000');
			self['assertEqual']($p['sprintf']('[%04x]', 1234), '[04d2]');
			self['assertEqual']($p['sprintf']('[%3% %s]', 'a'), '[  % a]');
			try {
				s = $p['sprintf']('%*g,%10f', $p['tuple']([1, 2]));
				self['fail']('Failed to raise error for "%*g,%10f" % (1, 2)');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['assertEqual']($p['str'](e), 'not enough arguments for format string');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				s = $p['sprintf']('%*g,%10f', $p['tuple']([1, 2, 3, 4]));
				self['fail']('Failed to raise error for "%*g,%10f" % (1, 2, 3, 4)');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['assertEqual']($p['str'](e), 'not all arguments converted during string formatting');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertEqual']($p['sprintf']('\n%s\n%s\n', $p['tuple'](['s1', 's2'])), '\ns1\ns2\n');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSprintfList'] = $method;
		$method = $pyjs__bind_method2('testSprintfDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,$pyjs_try_err,testdict,s;
			testdict = $p['dict']([['s1', 'string'], ['s2', 'another string'], ['v0', 0], ['v1', 1], ['v2', 1.234]]);
			self['assertEqual']($p['sprintf']('[%(v1)12s|%(v1)-12s]', testdict), '[           1|1           ]');
			self['assertEqual']($p['sprintf']('[%(v1)012o|%(v1)-012o]', testdict), '[000000000001|1           ]');
			self['assertEqual']($p['sprintf']('[%(v1)#012o|%(v1)#-012o]', testdict), '[000000000001|01          ]');
			self['assertEqual']($p['sprintf']('[%(v0)#012o|%(v0)#-012o]', testdict), '[000000000000|0           ]');
			self['assertEqual']($p['sprintf']('[%(v1)#012x|%(v1)#-012x]', testdict), '[0x0000000001|0x1         ]');
			self['assertEqual']($p['sprintf']('%(s1)3% %(s1)s', testdict), '  % string');
			self['assertEqual']($p['sprintf']('%(v1)#g', testdict), '1.00000');
			try {
				s = $p['sprintf']('%(not-there)s', testdict);
				self['fail']('Failed to raise error for "%(not-there)s" % testdict');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					e = $pyjs_try_err;
					self['assertEqual']($p['str'](e), "'not-there'");
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertEqual']($p['sprintf']('\n%(s1)s\n%(s1)s\n', testdict), '\nstring\nstring\n');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSprintfDict'] = $method;
		$method = $pyjs__bind_method2('testSprintfVar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod2,$mod1,f;
			f = '%s';
			self['assertEqual']((typeof ($mod1=f)==typeof ($mod2='test') && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)), 'test');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSprintfVar'] = $method;
		$method = $pyjs__bind_method2('testIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $14,$15,$16,$17,e,$11,$12,$13,$21,$20,$22,$18,$19,s,$pyjs_try_err,a;
			s = '12345';
			self['assertEqual']((typeof ($11=s).__array != 'undefined'?
				((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(0)), '1');
			self['assertEqual']((typeof ($13=s).__array != 'undefined'?
				((typeof $13.__array[$14=(typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__((typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)))), '5');
			self['assertEqual']($p['__getslice'](s, 1, (typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7))), '234');
			try {
				a = (typeof ($15=s).__array != 'undefined'?
					((typeof $15.__array[$16=200]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(200));
				self['fail']('Failed to raise an IndexError');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($17=e).__array != 'undefined'?
						((typeof $17.__array[$18=0]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(0)), 'string index out of range');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				a = (typeof ($19=s).__array != 'undefined'?
					((typeof $19.__array[$20=(typeof ($usub8=200)=='number'?
					-$usub8:
					$p['op_usub']($usub8))]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__((typeof ($usub8=200)=='number'?
					-$usub8:
					$p['op_usub']($usub8))));
				self['fail']('Failed to raise an IndexError');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					e = $pyjs_try_err;
					self['assertEqual']((typeof ($21=e).__array != 'undefined'?
						((typeof $21.__array[$22=0]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__(0)), 'string index out of range');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIndex'] = $method;
		$method = $pyjs__bind_method2('testOperator', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul4,$mul3,$mul2,$mul1;
			self['assertEqual']('1'['__add__']('2'), '12');
			self['assertEqual']('1'['__mul__'](2), '11');
			self['assertEqual']('1'['__rmul__'](3), '111');
			self['assertEqual']((typeof ($mul1='2')==typeof ($mul2=3) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), '222');
			self['assertEqual']((typeof ($mul3=3)==typeof ($mul4='3') && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)), '333');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testOperator'] = $method;
		$method = $pyjs__bind_method2('testIsAlnum', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']('abc'['isalnum']());
			self['assertTrue']('0bc'['isalnum']());
			self['assertFalse']('.?abc'['isalnum']());
			self['assertFalse'](' 0bc'['isalnum']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsAlnum'] = $method;
		$method = $pyjs__bind_method2('testIsAlpha', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']('abc'['isalpha']());
			self['assertFalse']('0bc'['isalpha']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsAlpha'] = $method;
		$method = $pyjs__bind_method2('testIsUpper', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']('ABC'['isupper'](), 'ABC');
			self['assertFalse']('AbC'['isupper'](), 'AbC');
			self['assertTrue']('A0C'['isupper'](), 'A0C');
			self['assertFalse']('A0c'['isupper'](), 'A0c');
			self['assertTrue']('A C'['isupper'](), 'A C');
			self['assertFalse']('A c'['isupper'](), 'A c');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsUpper'] = $method;
		$method = $pyjs__bind_method2('testIsLower', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']('abc'['islower'](), 'abc');
			self['assertFalse']('AbC'['islower'](), 'AbC');
			self['assertTrue']('a0c'['islower'](), 'a0c');
			self['assertFalse']('A0c'['islower'](), 'A0c');
			self['assertTrue']('a c'['islower'](), 'a c');
			self['assertFalse']('A c'['islower'](), 'A c');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsLower'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StringTest', $p['tuple']($bases), $data);
	})();
	$m['ClassWithOwnToString'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'StringTest';
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'ClassWithOwnToString as a String';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ClassWithOwnToString', $p['tuple']($bases), $data);
	})();
	$m['ClassWithOwnToString2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'StringTest';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'ClassWithOwnToString2 as a String';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ClassWithOwnToString2', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end StringTest */


/* end module: StringTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write']
*/

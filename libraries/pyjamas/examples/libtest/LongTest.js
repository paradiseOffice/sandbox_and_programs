/* start module: LongTest */
$pyjs.loaded_modules['LongTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LongTest'].__was_initialized__) return $pyjs.loaded_modules['LongTest'];
	var $m = $pyjs.loaded_modules["LongTest"];
	$m.__repr__ = function() { return "<module: LongTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LongTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['LongTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LongTest';
		$method = $pyjs__bind_method2('testAdd', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq1,$add2,$add1,y,x;
			x = 0;
			y = 1;
			x = (typeof ($add1=x)==typeof ($add2=y) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			self['assertTrue']((($eq1=x)===($eq2=1)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testAdd'] = $method;
		$method = $pyjs__bind_method2('testType', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq10,$eq11,$eq12,$pow2,$pow1,$sub3,$sub2,$sub1,$sub4,$eq8,$eq9,$eq3,$eq6,$eq7,$eq4,$eq5,$bool1,$mul4,$mul3,$mul2,$mul1,$add3,$add6,$add4,$add5,x;
			x = (1)<<(64);
			self['assertTrue']((($eq3=x)===($eq4=18446744073709551616)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))), $p['sprintf']('#302 - %s != 18446744073709551616L', $p['repr'](x)));
			self['assertTrue']($p['isinstance'](x, $p['float_int']));
			x = (1)<<(64);
			self['assertTrue']((($eq5=x)===($eq6=18446744073709551616)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))), $p['sprintf']('%s != 18446744073709551616L', $p['repr'](x)));
			self['assertTrue']($p['isinstance'](x, $p['float_int']));
			x = (1)<<(20);
			self['assertTrue']((($eq7=x)===($eq8=1048576)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))), $p['sprintf']('%s != 1048576', $p['repr'](x)));
			self['assertTrue']($p['isinstance'](x, $p['float_int']));
			x = (1)<<(20);
			self['assertTrue']((($eq9=x)===($eq10=1048576)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10))))), $p['sprintf']('%s != 1048576L', $p['repr'](x)));
			self['assertTrue']($p['isinstance'](x, $p['float_int']));
			self['assertTrue'](($p['float_int'](18446744073709551616) === 18446744073709551616), 'No automatic int to long conversion');
			if ((($bool1=(($eq11=$p['float_int'](18446744073709551616))===($eq12=18446744073709551616)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				x = (1)<<(64);
				self['assertEqual'](x, 18446744073709551616);
				x = (typeof ($add3=2147483647)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['assertEqual'](x, 2147483648);
				x = (typeof ($add5=2147483647)==typeof ($add6=2147483647) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				self['assertEqual'](x, 4294967294);
				x = (typeof ($sub1=(typeof ($usub1=2147483647)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))==typeof ($sub2=2) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				self['assertEqual'](x, (typeof ($usub2=2147483649)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				x = (typeof ($sub3=(typeof ($usub3=2147483647)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))==typeof ($sub4=2147483647) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				self['assertEqual'](x, (typeof ($usub4=4294967294)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				x = (typeof ($mul1=2147483647)==typeof ($mul2=2) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				self['assertEqual'](x, 4294967294);
				x = (typeof ($mul3=2147483647)==typeof ($mul4=(typeof ($usub5=2)=='number'?
					-$usub5:
					$p['op_usub']($usub5))) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
				self['assertEqual'](x, (typeof ($usub6=4294967294)=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
				x = (typeof ($pow1=524287)==typeof ($pow2=2) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2));
				self['assertEqual'](x, 274876858369);
				self['assertEqual']((1)<<(2), 4);
				self['assertEqual']((6)>>(2), 1);
				x = 1;
				x <<= 3;
				self['assertEqual'](x, 8);
				x = 8;
				x >>= 1;
				self['assertEqual'](x, 4);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testType'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LongTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end LongTest */


/* end module: LongTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/

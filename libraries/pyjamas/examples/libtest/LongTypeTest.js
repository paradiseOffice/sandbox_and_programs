/* start module: LongTypeTest */
$pyjs.loaded_modules['LongTypeTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LongTypeTest'].__was_initialized__) return $pyjs.loaded_modules['LongTypeTest'];
	var $m = $pyjs.loaded_modules["LongTypeTest"];
	$m.__repr__ = function() { return "<module: LongTypeTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LongTypeTest';
	$m.__name__ = __mod_name__;
	var $lambda2,$lambda1,$iter1_iter,$pow2,$pow1,$iter1_array,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$mul2,$mul1,$iter1_type,$add2,$add3,$add1,$iter1_idx,$add4;

	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	$m['random'] = $p['___import___']('random', null);
	$m['do_minimal_checks'] = true;
	$m['do_all_checks'] = false;
	$m['test_support'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LongTypeTest';
		$cls_definition['have_unicode'] = false;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('test_support', $p['tuple']($bases), $data);
	})();
	$m['Frm'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LongTypeTest';
		$method = $pyjs__bind_method2('__init__', function(format) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				format = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $eq1,$eq2,$and1,$3,$bool2,$bool1,$len1,$4,$2,$and2,$1;
			self.format = format;
			if ((($bool2=((($bool1=$and1=(($eq1=(($len1=args) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq2=1)&&$eq1===null?true:
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
					 true ) )?$p['isinstance']((typeof ($1=args).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), $p['tuple']):$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self.args = (typeof ($3=args).__array != 'undefined'?
					((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(0));
			}
			else {
				self.args = args;
			}
			return null;
		}
	, 1, ['args',null,['self'],['format']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod1,$mod2;
			return (typeof ($mod1=$p['getattr'](self, 'format'))==typeof ($mod2=$p['getattr'](self, 'args')) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Frm', $p['tuple']($bases), $data);
	})();
	$m['SHIFT'] = 15;
	$m['BASE'] = (typeof ($pow1=2)==typeof ($pow2=$m['SHIFT']) && typeof $pow1=='number'?
		Math.pow($pow1,$pow2):
		$p['op_pow']($pow1,$pow2));
	$m['MASK'] = (typeof ($sub1=$m['BASE'])==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
		$sub1-$sub2:
		$p['op_sub']($sub1,$sub2));
	$m['KARATSUBA_CUTOFF'] = 70;
	$m['MAXDIGITS'] = 15;
	$m['special'] = $p['map']($p['float_int'], $p['list']([0, 1, 2, $m['BASE'], ($m['BASE'])>>(1)]));
	$m['special']['append'](6148914691236517205);
	$m['special']['append'](12297829382473034410);
	$m['p2'] = 4;
	$iter1_iter = $p['range']((typeof ($mul1=2)==typeof ($mul2=$m['SHIFT']) && typeof $mul1=='number'?
		$mul1*$mul2:
		$p['op_mul']($mul1,$mul2)));
	if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
		$iter1_type = 0;
	} else {
		$iter1_iter = $iter1_iter.__iter__();
		$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter1_idx = 0;
	while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
		$m['i'] = $iter1_nextval;
		$m['special']['append']((typeof ($sub3=$m['p2'])==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			$p['op_sub']($sub3,$sub4)));
		$m['p2'] = ($m['p2'])<<(1);
	}
	delete $m['p2'];
	var 	$lambda1 = function(x) {

		return ~(x);
	};
	$lambda1.__name__ = '$lambda1';

	$lambda1.__bind_type__ = 0;
	$lambda1.__args__ = [null,null,['x']];
	var 	$lambda2 = function(x) {

		return (typeof ($usub1=x)=='number'?
			-$usub1:
			$p['op_usub']($usub1));
	};
	$lambda2.__name__ = '$lambda2';

	$lambda2.__bind_type__ = 0;
	$lambda2.__args__ = [null,null,['x']];
	$m['special'] = (typeof ($add3=(typeof ($add1=$m['special'])==typeof ($add2=$p['map']($lambda1, $m['special'])) && (typeof $add1=='number'||typeof $add1=='string')?
		$add1+$add2:
		$p['op_add']($add1,$add2)))==typeof ($add4=$p['map']($lambda2, $m['special'])) && (typeof $add3=='number'||typeof $add3=='string')?
		$add3+$add4:
		$p['op_add']($add3,$add4));
	$m['L'] = $p['list']([$p['tuple'](['0', 0]), $p['tuple'](['1', 1]), $p['tuple'](['9', 9]), $p['tuple'](['10', 10]), $p['tuple'](['99', 99]), $p['tuple'](['100', 100]), $p['tuple'](['314', 314]), $p['tuple']([' 314', 314]), $p['tuple'](['314 ', 314]), $p['tuple'](['  \t\t  314  \t\t  ', 314]), $p['tuple']([$p['repr']($p['getattr']($m['sys'], 'maxint')), $p['getattr']($m['sys'], 'maxint')]), $p['tuple'](['  1x', $p['ValueError']]), $p['tuple'](['  1  ', 1]), $p['tuple'](['  1\x02  ', $p['ValueError']]), $p['tuple'](['', $p['ValueError']]), $p['tuple']([' ', $p['ValueError']]), $p['tuple'](['  \t\t  ', $p['ValueError']])]);
	$m['LongTypeTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LongTypeTest';
		$method = $pyjs__bind_method2('assert_', function(condition, msg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				condition = arguments[1];
				msg = arguments[2];
			}
			if (typeof msg == 'undefined') msg=arguments.callee.__args__[4][1];
			var $bool3,$bool6,$bool4,$bool5;
			if ((($bool4=!(($bool3=condition) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool6=!(($bool5=msg) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					msg = 'assert condition is false';
				}
				throw ($p['Exception'](msg));
			}
			return null;
		}
	, 1, [null,null,['self'],['condition'],['msg', null]]);
		$cls_definition['assert_'] = $method;
		$method = $pyjs__bind_method2('getran', function(ndigits) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ndigits = arguments[1];
			}
			var $cmp13,$cmp12,$bool8,nbits,nbits_lo,nbits_hi,$sub9,$sub8,answer,bits,$sub6,$sub5,$sub10,$cmp14,$add10,$bool7,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul12,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$mul11,$cmp3,$cmp2,$sub7,$mul10,$cmp9,$cmp8,$bool9,r,$add6,$add7,$add5,$cmp11,$add8,$add9,$cmp10;
			self['assertTrue'](((($cmp1=ndigits)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1));
			nbits_hi = (typeof ($mul3=ndigits)==typeof ($mul4=$m['SHIFT']) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4));
			nbits_lo = (typeof ($add5=(typeof ($sub5=nbits_hi)==typeof ($sub6=$m['SHIFT']) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6)))==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			answer = 0;
			nbits = 0;
			r = ($p['float_int']((typeof ($mul7=$m['random']['random']())==typeof ($mul8=(typeof ($mul5=$m['SHIFT'])==typeof ($mul6=2) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))))|(1);
			while ((($bool7=((($cmp3=nbits)===($cmp4=nbits_lo)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				bits = (typeof ($add7=(r)>>(1))==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				bits = $p['min'](bits, (typeof ($sub7=nbits_hi)==typeof ($sub8=nbits) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)));
				self['assertTrue']((((($cmp5=1)===($cmp6=($compare1 = bits))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) < 1)&&((($cmp7=$compare1)===($cmp8=($compare2 = $m['SHIFT']))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1)));
				nbits = (typeof ($add9=nbits)==typeof ($add10=bits) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				answer = (answer)<<(bits);
				if ((($bool8=(r)&(1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					answer = (answer)|((typeof ($sub9=(1)<<(bits))==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10)));
				}
				r = $p['float_int']((typeof ($mul11=$m['random']['random']())==typeof ($mul12=(typeof ($mul9=$m['SHIFT'])==typeof ($mul10=2) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
			}
			self['assert_']((((($cmp9=nbits_lo)===($cmp10=($compare3 = nbits))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) < 1)&&((($cmp11=$compare3)===($cmp12=($compare4 = nbits_hi))?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) < 1)));
			if ((($bool9=((($cmp13=$m['random']['random']())===($cmp14=0.5)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				answer = (typeof ($usub2=answer)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
			}
			return answer;
		}
	, 1, [null,null,['self'],['ndigits']]);
		$cls_definition['getran'] = $method;
		$method = $pyjs__bind_method2('getran2', function() {
			if (this.__is_instance__ === true) {
				var ndigits = this;
			} else {
				var ndigits = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$cmp16,$cmp15,$bool10,$iter2_idx,answer,$iter2_array;
			answer = 0;
			$iter2_iter = $p['xrange'](ndigits);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				answer = ((answer)<<($m['SHIFT']))|($m['random']['randint'](0, $m['MASK']));
			}
			if ((($bool10=((($cmp15=$m['random']['random']())===($cmp16=0.5)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				answer = (typeof ($usub3=answer)=='number'?
					-$usub3:
					$p['op_usub']($usub3));
			}
			return answer;
		}
	, 1, [null,null,['ndigits']]);
		$cls_definition['getran2'] = $method;
		$method = $pyjs__bind_method2('check_division', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $cmp26,$bool11,$cmp20,$mod4,$cmp22,$cmp23,$cmp24,$cmp25,$mod3,eq,q2,pab,$cmp17,$add11,$add12,$cmp19,$cmp18,$mul17,$mul16,$mul15,$mul14,$mul13,r2,$cmp21,$mul18,q,r,pba,$floordiv2,$floordiv1;
			eq = $p['getattr'](self, 'assertEqual');
			var $tupleassign1 = $p['__ass_unpack']($p['divmod'](x, y), 2, null);
			q = $tupleassign1[0];
			r = $tupleassign1[1];
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($floordiv1=x)==typeof ($floordiv2=y) && typeof $floordiv1=='number' && $floordiv2 !== 0?
				Math.floor($floordiv1/$floordiv2):
				$p['op_floordiv']($floordiv1,$floordiv2)), (typeof ($mod3=x)==typeof ($mod4=y) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))]), 2, null);
			q2 = $tupleassign2[0];
			r2 = $tupleassign2[1];
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($mul13=x)==typeof ($mul14=y) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)), (typeof ($mul15=y)==typeof ($mul16=x) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))]), 2, null);
			pab = $tupleassign3[0];
			pba = $tupleassign3[1];
			eq(pab, pba, $m['Frm']('multiplication does not commute for %r and %r', x, y));
			eq(q, q2, $m['Frm']('divmod returns different quotient than / for %r and %r', x, y));
			eq(r, r2, $m['Frm']('divmod returns different mod than %% for %r and %r', x, y));
			eq(x, (typeof ($add11=(typeof ($mul17=q)==typeof ($mul18=y) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)))==typeof ($add12=r) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)), $m['Frm']('x != q*y + r after divmod on x=%r, y=%r', x, y));
			if ((($bool11=((($cmp17=y)===($cmp18=0)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				self['assert_']((((($cmp19=0)===($cmp20=($compare5 = r))?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) < 1)&&((($cmp21=$compare5)===($cmp22=($compare6 = y))?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == -1)), $m['Frm']('bad mod from divmod on %r and %r', x, y));
			}
			else {
				self['assert_']((((($cmp23=y)===($cmp24=($compare7 = r))?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == -1)&&((($cmp25=$compare7)===($cmp26=($compare8 = 0))?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) < 1)), $m['Frm']('bad mod from divmod on %r and %r', x, y));
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['check_division'] = $method;
		$method = $pyjs__bind_method2('test_division', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_type,$bool12,$bool13,$bool14,$iter4_type,lenx,$iter3_idx,$iter3_array,$add21,$add20,$add22,$iter3_iter,$eq3,$mul22,$mul20,$mul21,y,$sub12,$sub11,$eq4,$add14,$add15,$add16,$add17,$iter4_iter,$add13,$div2,$div3,leny,$div1,$add18,$add19,$div4,digits,$iter4_nextval,$mul19,$iter4_idx,$iter4_array,x,$iter3_nextval;
			if ((($bool12=$m['do_minimal_checks']) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				return null;
			}
			if ((($bool13=$m['do_all_checks']) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				digits = (typeof ($add17=$p['range'](1, (typeof ($add13=$m['MAXDIGITS'])==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))))==typeof ($add18=$p['range']($m['KARATSUBA_CUTOFF'], (typeof ($add15=$m['KARATSUBA_CUTOFF'])==typeof ($add16=14) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
			}
			else {
				digits = $p['list']([1, 2, $p['float_int']((typeof ($div1=$m['MAXDIGITS'])==typeof ($div2=3) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))), (typeof ($mul19=2)==typeof ($mul20=$p['float_int']((typeof ($div3=$m['MAXDIGITS'])==typeof ($div4=3) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)), (typeof ($sub11=$m['MAXDIGITS'])==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12)), $m['MAXDIGITS'], (typeof ($add19=$m['MAXDIGITS'])==typeof ($add20=2) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)), $m['KARATSUBA_CUTOFF'], (typeof ($add21=$m['KARATSUBA_CUTOFF'])==typeof ($add22=14) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))]);
			}
			digits['append']((typeof ($mul21=$m['KARATSUBA_CUTOFF'])==typeof ($mul22=3) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22)));
			$iter3_iter = digits;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				lenx = $iter3_nextval;
				x = self['getran'](lenx);
				$iter4_iter = digits;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					leny = $iter4_nextval;
					y = self['getran'](leny);
					if ((($bool14=(($eq3=y)===($eq4=0)&&$eq3===null?true:
						($eq3===null?false:($eq4===null?false:
							((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
								((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
									$eq3==$eq4)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
							false :
							(typeof $bool14=='object'?
								(typeof $bool14.__nonzero__=='function'?
									$bool14.__nonzero__() :
									(typeof $bool14.__len__=='function'?
										($bool14.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						y = 1;
					}
					self['check_division'](x, y);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_division'] = $method;
		$method = $pyjs__bind_method2('test_karatsuba', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub20,$add31,$iter6_type,$bool15,$bool16,$bool17,$cmp27,$cmp28,$iter6_iter,$iter6_nextval,$add29,$add28,bbits,$add25,$add24,$add27,$add26,$pyjs_try_err,$mul29,$mul26,$mul24,$mul25,bits,$mul23,a,$sub19,$sub18,$iter6_idx,$sub13,$iter7_iter,$sub17,$sub16,$sub15,$sub14,$iter6_array,b,$iter7_idx,digits,$iter7_type,$iter7_nextval,abits,$add30,$iter7_array,$mul30,$add32,y,x,$add23;
			if ((($bool15=$m['do_minimal_checks']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool16=$m['do_all_checks']) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				digits = (typeof ($add25=$p['range'](1, 5))==typeof ($add26=$p['range']($m['KARATSUBA_CUTOFF'], (typeof ($add23=$m['KARATSUBA_CUTOFF'])==typeof ($add24=10) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)))) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
			}
			else {
				digits = $p['list']([1, 5, $m['KARATSUBA_CUTOFF'], (typeof ($add27=$m['KARATSUBA_CUTOFF'])==typeof ($add28=10) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28))]);
			}
			digits['extend']($p['list']([(typeof ($mul23=$m['KARATSUBA_CUTOFF'])==typeof ($mul24=10) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24)), (typeof ($mul25=$m['KARATSUBA_CUTOFF'])==typeof ($mul26=100) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26))]));
			bits = function(){
				var $iter5_nextval,digit,$mul27,$iter5_idx,$collcomp1,$iter5_iter,$mul28,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
			$iter5_iter = digits;
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				digit = $iter5_nextval;
				$collcomp1['append']((typeof ($mul27=digit)==typeof ($mul28=$m['SHIFT']) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)));
			}

	return $collcomp1;}();
			try {
				$iter6_iter = bits;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					abits = $iter6_nextval;
					a = (typeof ($sub13=(1)<<(abits))==typeof ($sub14=1) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14));
					$iter7_iter = bits;
					if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter.__iter__();
						$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						bbits = $iter7_nextval;
						if ((($bool17=((($cmp27=bbits)===($cmp28=abits)?0:
							(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
								($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
								$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
							continue;
						}
						b = (typeof ($sub15=(1)<<(bbits))==typeof ($sub16=1) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16));
						x = (typeof ($mul29=a)==typeof ($mul30=b) && typeof $mul29=='number'?
							$mul29*$mul30:
							$p['op_mul']($mul29,$mul30));
						y = (typeof ($add31=(typeof ($sub19=(typeof ($sub17=(1)<<((typeof ($add29=abits)==typeof ($add30=bbits) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30))))==typeof ($sub18=(1)<<(abits)) && (typeof $sub17=='number'||typeof $sub17=='string')?
							$sub17-$sub18:
							$p['op_sub']($sub17,$sub18)))==typeof ($sub20=(1)<<(bbits)) && (typeof $sub19=='number'||typeof $sub19=='string')?
							$sub19-$sub20:
							$p['op_sub']($sub19,$sub20)))==typeof ($add32=1) && (typeof $add31=='number'||typeof $add31=='string')?
							$add31+$add32:
							$p['op_add']($add31,$add32));
						self['assertEqual'](x, y, $m['Frm']('bad result for a*b: a=%r, b=%r, x=%r, y=%r', a, b, x, y));
					}
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_karatsuba'] = $method;
		$method = $pyjs__bind_method2('check_bitop_identities_1', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var $sub22,$bool18,$sub21,$sub24,$bool19,$iter8_iter,eq,$pow4,$pow3,$sub23,$iter8_idx,$iter8_type,$iter8_nextval,$mul34,p2,$add33,$iter8_array,$add34,n,$floordiv4,$floordiv3,$mul31,$mul33,$mul32;
			eq = $p['getattr'](self, 'assertEqual');
			eq((x)&(0), 0, $m['Frm']('x & 0 != 0 for x=%r', x));
			eq((x)|(0), x, $m['Frm']('x | 0 != x for x=%r', x));
			eq((x)^(0), x, $m['Frm']('x ^ 0 != x for x=%r', x));
			eq((x)&((typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))), x, $m['Frm']('x & -1 != x for x=%r', x));
			eq((x)|((typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5))), (typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)), $m['Frm']('x | -1 != -1 for x=%r', x));
			eq((x)^((typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7))), ~(x), $m['Frm']('x ^ -1 != ~x for x=%r', x));
			eq(x, ~(~(x)), $m['Frm']('x != ~~x for x=%r', x));
			eq((x)&(x), x, $m['Frm']('x & x != x for x=%r', x));
			eq((x)|(x), x, $m['Frm']('x | x != x for x=%r', x));
			eq((x)^(x), 0, $m['Frm']('x ^ x != 0 for x=%r', x));
			eq((x)&(~(x)), 0, $m['Frm']('x & ~x != 0 for x=%r', x));
			eq((x)|(~(x)), (typeof ($usub8=1)=='number'?
				-$usub8:
				$p['op_usub']($usub8)), $m['Frm']('x | ~x != -1 for x=%r', x));
			eq((x)^(~(x)), (typeof ($usub9=1)=='number'?
				-$usub9:
				$p['op_usub']($usub9)), $m['Frm']('x ^ ~x != -1 for x=%r', x));
			eq((typeof ($usub10=x)=='number'?
				-$usub10:
				$p['op_usub']($usub10)), (typeof ($add33=1)==typeof ($add34=~(x)) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34)), $m['Frm']('not -x == 1 + ~x for x=%r', x));
			eq((typeof ($usub11=x)=='number'?
				-$usub11:
				$p['op_usub']($usub11)), ~((typeof ($sub21=x)==typeof ($sub22=1) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22))), $m['Frm']('not -x == ~(x-1) for x=%r', x));
			if ((($bool19=!(($bool18=$m['do_all_checks']) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				return null;
			}
			$iter8_iter = $p['xrange']((typeof ($mul31=2)==typeof ($mul32=$m['SHIFT']) && typeof $mul31=='number'?
				$mul31*$mul32:
				$p['op_mul']($mul31,$mul32)));
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				n = $iter8_nextval;
				p2 = (typeof ($pow3=2)==typeof ($pow4=n) && typeof $pow3=='number'?
					Math.pow($pow3,$pow4):
					$p['op_pow']($pow3,$pow4));
				eq(((x)<<(n))>>(n), x, $m['Frm']('x << n >> n != x for x=%r, n=%r', $p['tuple']([x, n])));
				eq((typeof ($floordiv3=x)==typeof ($floordiv4=p2) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math.floor($floordiv3/$floordiv4):
					$p['op_floordiv']($floordiv3,$floordiv4)), (x)>>(n), $m['Frm']('x // p2 != x >> n for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
				eq((typeof ($mul33=x)==typeof ($mul34=p2) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)), (x)<<(n), $m['Frm']('x * p2 != x << n for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
				eq((x)&((typeof ($usub12=p2)=='number'?
					-$usub12:
					$p['op_usub']($usub12))), ((x)>>(n))<<(n), $m['Frm']('not x & -p2 == x >> n << n for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
				eq((x)&((typeof ($usub13=p2)=='number'?
					-$usub13:
					$p['op_usub']($usub13))), (x)&(~((typeof ($sub23=p2)==typeof ($sub24=1) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24)))), $m['Frm']('not x & -p2 == x & ~(p2 - 1) for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
			}
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['check_bitop_identities_1'] = $method;
		$method = $pyjs__bind_method2('check_bitop_identities_2', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var eq;
			eq = $p['getattr'](self, 'assertEqual');
			eq((x)&(y), (y)&(x), $m['Frm']('x & y != y & x for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)|(y), (y)|(x), $m['Frm']('x | y != y | x for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)^(y), (y)^(x), $m['Frm']('x ^ y != y ^ x for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)^(y)^(x), y, $m['Frm']('x ^ y ^ x != y for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)&(y), ~((~(x))|(~(y))), $m['Frm']('x & y != ~(~x | ~y) for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)|(y), ~((~(x))&(~(y))), $m['Frm']('x | y != ~(~x & ~y) for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)^(y), ((x)|(y))&(~((x)&(y))), $m['Frm']('x ^ y != (x | y) & ~(x & y) for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)^(y), ((x)&(~(y)))|((~(x))&(y)), $m['Frm']('x ^ y == (x & ~y) | (~x & y) for x=%r, y=%r', $p['tuple']([x, y])));
			eq((x)^(y), ((x)|(y))&((~(x))|(~(y))), $m['Frm']('x ^ y == (x | y) & (~x | ~y) for x=%r, y=%r', $p['tuple']([x, y])));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['check_bitop_identities_2'] = $method;
		$method = $pyjs__bind_method2('check_bitop_identities_3', function(x, y, z) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				z = arguments[3];
			}
			var eq;
			eq = $p['getattr'](self, 'assertEqual');
			eq(((x)&(y))&(z), (x)&((y)&(z)), $m['Frm']('(x & y) & z != x & (y & z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
			eq(((x)|(y))|(z), (x)|((y)|(z)), $m['Frm']('(x | y) | z != x | (y | z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
			eq(((x)^(y))^(z), (x)^((y)^(z)), $m['Frm']('(x ^ y) ^ z != x ^ (y ^ z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
			eq((x)&((y)|(z)), ((x)&(y))|((x)&(z)), $m['Frm']('x & (y | z) != (x & y) | (x & z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
			eq((x)|((y)&(z)), ((x)|(y))&((x)|(z)), $m['Frm']('x | (y & z) != (x | y) & (x | z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
		$cls_definition['check_bitop_identities_3'] = $method;
		$method = $pyjs__bind_method2('test_bitop_identities', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_iter,$add35,leny,$iter9_iter,$iter9_nextval,$iter9_idx,$bool21,$bool20,$bool22,$iter11_idx,$iter9_type,$iter11_iter,y,$iter11_array,$iter11_nextval,lenx,digits,$add38,$iter11_type,$add36,$add37,$iter10_array,$iter9_array,$floordiv6,$floordiv5,$iter10_type,x,$iter10_idx;
			if ((($bool20=$m['do_minimal_checks']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				return null;
			}
			$iter9_iter = $m['special'];
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				x = $iter9_nextval;
				self['check_bitop_identities_1'](x);
			}
			if ((($bool22=!(($bool21=$m['do_all_checks']) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			digits = $p['xrange'](1, (typeof ($add35=$m['MAXDIGITS'])==typeof ($add36=1) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36)));
			$iter10_iter = digits;
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				lenx = $iter10_nextval;
				x = self['getran'](lenx);
				self['check_bitop_identities_1'](x);
				$iter11_iter = digits;
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					leny = $iter11_nextval;
					y = self['getran'](leny);
					self['check_bitop_identities_2'](x, y);
					self['check_bitop_identities_3'](x, y, self['getran']((typeof ($floordiv5=(typeof ($add37=lenx)==typeof ($add38=leny) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($floordiv6=2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math.floor($floordiv5/$floordiv6):
						$p['op_floordiv']($floordiv5,$floordiv6))));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_bitop_identities'] = $method;
		$method = $pyjs__bind_method2('slow_format', function(x, base) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				base = arguments[2];
			}
			var $lambda3,sign,$cmp29,$add44,$add43,$add42,$add41,$add40,$bool25,$bool24,$bool27,$bool26,$bool23,$eq6,$eq5,$6,$5,$cmp30,digits,$add39,r;
			if ((($bool23=(($eq5=$p['tuple']([x, base]))===($eq6=$p['tuple']([0, 8]))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				return '0L';
			}
			digits = $p['list']([]);
			sign = 0;
			if ((($bool24=((($cmp29=x)===($cmp30=0)?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24.__nonzero__=='function'?
							$bool24.__nonzero__() :
							(typeof $bool24.__len__=='function'?
								($bool24.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([1, (typeof ($usub14=x)=='number'?
					-$usub14:
					$p['op_usub']($usub14))]), 2, null);
				sign = $tupleassign4[0];
				x = $tupleassign4[1];
			}
			while ((($bool25=x) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				var $tupleassign5 = $p['__ass_unpack']($p['divmod'](x, base), 2, null);
				x = $tupleassign5[0];
				r = $tupleassign5[1];
				digits['append']($p['float_int'](r));
			}
			digits['reverse']();
			if ((($bool27=!(($bool26=digits) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				digits = $p['list']([0]);
			}
			var 			$lambda3 = function(i) {
				var $7,$8;
				return (typeof ($7='0123456789abcdef').__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i));
			};
			$lambda3.__name__ = '$lambda3';

			$lambda3.__bind_type__ = 0;
			$lambda3.__args__ = [null,null,['i']];
			return (typeof ($add43=(typeof ($add41=(typeof ($add39=$p['__getslice']('-', 0, sign))==typeof ($add40=(typeof ($5=$p['dict']([[8, '0'], [10, ''], [16, '0x']])).__array != 'undefined'?
				((typeof $5.__array[$6=base]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(base))) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40)))==typeof ($add42=''['join']($p['map']($lambda3, digits))) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42)))==typeof ($add44='L') && (typeof $add43=='number'||typeof $add43=='string')?
				$add43+$add44:
				$p['op_add']($add43,$add44));
		}
	, 1, [null,null,['self'],['x'],['base']]);
		$cls_definition['slow_format'] = $method;
		$method = $pyjs__bind_method2('check_format_1', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var $iter12_type,mapper,$iter12_array,$iter12_iter,msg,base,got,expected,$iter12_idx,$iter12_nextval;
			$iter12_iter = $p['tuple']([$p['tuple']([8, $p['oct']]), $p['tuple']([10, $p['repr']]), $p['tuple']([16, $p['hex']])]);
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				var $tupleassign6 = $p['__ass_unpack']($iter12_nextval, 2, null);
				base = $tupleassign6[0];
				mapper = $tupleassign6[1];
				got = mapper(x);
				expected = self['slow_format'](x, base);
				msg = $m['Frm']('%s returned %r but expected %r for %r', $p['getattr'](mapper, '__name__'), got, expected, x);
				self['assertEqual'](got, expected, msg);
				self['assertEqual']($p['float_int'](got, 0), x, $m['Frm']('long("%s", 0) != %r', got, x));
			}
			got = $p['str'](x);
			expected = $p['__getslice'](self['slow_format'](x, 10), 0, (typeof ($usub15=1)=='number'?
				-$usub15:
				$p['op_usub']($usub15)));
			msg = $m['Frm']('%s returned %r but expected %r for %r', $p['getattr'](mapper, '__name__'), got, expected, x);
			self['assertEqual'](got, expected, msg);
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['check_format_1'] = $method;
		$method = $pyjs__bind_method2('test_format', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter13_idx,$iter15_idx,$iter13_array,$iter15_iter,$add46,$bool29,$bool28,$iter14_array,$iter14_type,$iter15_array,$iter14_iter,lenx,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,i,$iter13_type,$iter15_nextval,$iter15_type,x,$add45;
			$iter13_iter = $m['special'];
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				x = $iter13_nextval;
				self['check_format_1'](x);
			}
			if ((($bool29=!(($bool28=$m['do_all_checks']) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			$iter14_iter = $p['xrange'](10);
			if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter.__iter__();
				$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				i = $iter14_nextval;
				$iter15_iter = $p['xrange'](1, (typeof ($add45=$m['MAXDIGITS'])==typeof ($add46=1) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46)));
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					lenx = $iter15_nextval;
					x = self['getran'](lenx);
					self['check_format_1'](x);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_format'] = $method;
		$method = $pyjs__bind_method2('test_long', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter18_type,$eq8,sign,$iter16_idx,prefix,$mul42,vv,$iter17_type,$iter16_iter,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$iter17_iter,$add61,$add60,$add49,$add48,$add47,$bool33,$mul40,$mul41,$pow9,$pow8,$iter18_idx,$pyjs_try_err,$iter16_type,$iter16_nextval,$iter18_nextval,$iter17_nextval,$iter16_array,$iter18_iter,$bool34,s,$and3,$and4,$eq7,$iter17_array,L2,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add62,$bool32,ss,$bool30,$bool31,$mul39,$mul38,$iter18_array,v,$mul35,$iter17_idx,$mul37,$mul36,LL;
			self['assertEqual']($p['float_int'](314), 314);
			self['assertEqual']($p['float_int'](3.14), 3);
			self['assertEqual']($p['float_int'](314), 314);
			self['assertTrue']($p['isinstance']($p['float_int'](314), $p['float_int']));
			self['assertTrue']($p['isinstance']($p['float_int'](3.14), $p['float_int']));
			self['assertTrue']($p['isinstance']($p['float_int'](314), $p['float_int']));
			self['assertEqual']($p['float_int']((typeof ($usub16=3.14)=='number'?
				-$usub16:
				$p['op_usub']($usub16))), (typeof ($usub17=3)=='number'?
				-$usub17:
				$p['op_usub']($usub17)));
			self['assertEqual']($p['float_int'](3.9), 3);
			self['assertEqual']($p['float_int']((typeof ($usub18=3.9)=='number'?
				-$usub18:
				$p['op_usub']($usub18))), (typeof ($usub19=3)=='number'?
				-$usub19:
				$p['op_usub']($usub19)));
			self['assertEqual']($p['float_int'](3.5), 3);
			self['assertEqual']($p['float_int']((typeof ($usub20=3.5)=='number'?
				-$usub20:
				$p['op_usub']($usub20))), (typeof ($usub21=3)=='number'?
				-$usub21:
				$p['op_usub']($usub21)));
			self['assertEqual']($p['float_int']('-3'), (typeof ($usub22=3)=='number'?
				-$usub22:
				$p['op_usub']($usub22)));
			if ((($bool30=$p['getattr']($m['test_support'], 'have_unicode')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['assertEqual']($p['float_int']((typeof unicode == "undefined"?$m.unicode:unicode)('-3')), (typeof ($usub23=3)=='number'?
					-$usub23:
					$p['op_usub']($usub23)));
			}
			self['assertEqual']($p['float_int']('10', 16), 16);
			if ((($bool31=$p['getattr']($m['test_support'], 'have_unicode')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['assertEqual']($p['float_int']((typeof unicode == "undefined"?$m.unicode:unicode)('10'), 16), 16);
			}
			LL = $p['list']([$p['tuple']([(typeof ($add47='1')==typeof ($add48=(typeof ($mul35='0')==typeof ($mul36=20) && typeof $mul35=='number'?
				$mul35*$mul36:
				$p['op_mul']($mul35,$mul36))) && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				$p['op_add']($add47,$add48)), (typeof ($pow5=10)==typeof ($pow6=20) && typeof $pow5=='number'?
				Math.pow($pow5,$pow6):
				$p['op_pow']($pow5,$pow6))]), $p['tuple']([(typeof ($add49='1')==typeof ($add50=(typeof ($mul37='0')==typeof ($mul38=100) && typeof $mul37=='number'?
				$mul37*$mul38:
				$p['op_mul']($mul37,$mul38))) && (typeof $add49=='number'||typeof $add49=='string')?
				$add49+$add50:
				$p['op_add']($add49,$add50)), (typeof ($pow7=10)==typeof ($pow8=100) && typeof $pow7=='number'?
				Math.pow($pow7,$pow8):
				$p['op_pow']($pow7,$pow8))])]);
			L2 = $p['__getslice']($m['L'], 0, null);
			if ((($bool32=$p['getattr']($m['test_support'], 'have_unicode')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32.__nonzero__=='function'?
							$bool32.__nonzero__() :
							(typeof $bool32.__len__=='function'?
								($bool32.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				L2 = (typeof ($add55=L2)==typeof ($add56=$p['list']([$p['tuple']([(typeof ($add51=(typeof unicode == "undefined"?$m.unicode:unicode)('1'))==typeof ($add52=(typeof ($mul39=(typeof unicode == "undefined"?$m.unicode:unicode)('0'))==typeof ($mul40=20) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40))) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)), (typeof ($pow9=10)==typeof ($pow10=20) && typeof $pow9=='number'?
					Math.pow($pow9,$pow10):
					$p['op_pow']($pow9,$pow10))]), $p['tuple']([(typeof ($add53=(typeof unicode == "undefined"?$m.unicode:unicode)('1'))==typeof ($add54=(typeof ($mul41=(typeof unicode == "undefined"?$m.unicode:unicode)('0'))==typeof ($mul42=100) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42))) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)), (typeof ($pow11=10)==typeof ($pow12=100) && typeof $pow11=='number'?
					Math.pow($pow11,$pow12):
					$p['op_pow']($pow11,$pow12))])])) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56));
			}
			L2 = (typeof ($add57=L2)==typeof ($add58=LL) && (typeof $add57=='number'||typeof $add57=='string')?
				$add57+$add58:
				$p['op_add']($add57,$add58));
			$iter16_iter = L2;
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				var $tupleassign7 = $p['__ass_unpack']($iter16_nextval, 2, null);
				s = $tupleassign7[0];
				v = $tupleassign7[1];
				$iter17_iter = $p['tuple'](['', '+', '-']);
				if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter.__iter__();
					$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
					sign = $iter17_nextval;
					$iter18_iter = $p['tuple'](['', ' ', '\t', '  \t\t  ']);
					if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
						$iter18_type = 0;
					} else {
						$iter18_iter = $iter18_iter.__iter__();
						$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter18_idx = 0;
					while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
						prefix = $iter18_nextval;
						ss = (typeof ($add61=(typeof ($add59=prefix)==typeof ($add60=sign) && (typeof $add59=='number'||typeof $add59=='string')?
							$add59+$add60:
							$p['op_add']($add59,$add60)))==typeof ($add62=s) && (typeof $add61=='number'||typeof $add61=='string')?
							$add61+$add62:
							$p['op_add']($add61,$add62));
						vv = v;
						if ((($bool34=((($bool33=$and3=(($eq7=sign)===($eq8='-')&&$eq7===null?true:
							($eq7===null?false:($eq8===null?false:
								((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
									((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
										$eq7==$eq8)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
							false :
							(typeof $bool33=='object'?
								(typeof $bool33.__nonzero__=='function'?
									$bool33.__nonzero__() :
									(typeof $bool33.__len__=='function'?
										($bool33.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?(v !== $p['ValueError']):$and3)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
								false :
								(typeof $bool34=='object'?
									(typeof $bool34.__nonzero__=='function'?
										$bool34.__nonzero__() :
										(typeof $bool34.__len__=='function'?
											($bool34.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							vv = (typeof ($usub24=v)=='number'?
								-$usub24:
								$p['op_usub']($usub24));
						}
						try {
							self['assertEqual']($p['float_int'](ss), $p['float_int'](vv));
						} catch($pyjs_try_err) {
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == v.__name__)||$p['_isinstance']($pyjs_try_err,v)) {
							} else if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
				}
			}
			try {
				v = $p['float_int']('123\x00');
				self['fail']("long('123\\0')");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				v = $p['float_int']('53', 40);
				self['fail']("long('53', 40)");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				v = $p['float_int'](1, 12);
				self['fail']('long(1, 12)');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				v = $p['float_int']('123\x00', 10);
				self['fail']("long('123\\0', 10)");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			try {
				v = $p['float_int']('123\x00 245', 20);
				self['fail']("(long('123\\x00 245', 20)");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['assertTrue'](true);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertEqual']($p['float_int']('100000000000000000000000000000000', 2), 4294967296);
			self['assertEqual']($p['float_int']('102002022201221111211', 3), 4294967296);
			self['assertEqual']($p['float_int']('10000000000000000', 4), 4294967296);
			self['assertEqual']($p['float_int']('32244002423141', 5), 4294967296);
			self['assertEqual']($p['float_int']('1550104015504', 6), 4294967296);
			self['assertEqual']($p['float_int']('211301422354', 7), 4294967296);
			self['assertEqual']($p['float_int']('40000000000', 8), 4294967296);
			self['assertEqual']($p['float_int']('12068657454', 9), 4294967296);
			self['assertEqual']($p['float_int']('4294967296', 10), 4294967296);
			self['assertEqual']($p['float_int']('1904440554', 11), 4294967296);
			self['assertEqual']($p['float_int']('9ba461594', 12), 4294967296);
			self['assertEqual']($p['float_int']('535a79889', 13), 4294967296);
			self['assertEqual']($p['float_int']('2ca5b7464', 14), 4294967296);
			self['assertEqual']($p['float_int']('1a20dcd81', 15), 4294967296);
			self['assertEqual']($p['float_int']('100000000', 16), 4294967296);
			self['assertEqual']($p['float_int']('a7ffda91', 17), 4294967296);
			self['assertEqual']($p['float_int']('704he7g4', 18), 4294967296);
			self['assertEqual']($p['float_int']('4f5aff66', 19), 4294967296);
			self['assertEqual']($p['float_int']('3723ai4g', 20), 4294967296);
			self['assertEqual']($p['float_int']('281d55i4', 21), 4294967296);
			self['assertEqual']($p['float_int']('1fj8b184', 22), 4294967296);
			self['assertEqual']($p['float_int']('1606k7ic', 23), 4294967296);
			self['assertEqual']($p['float_int']('mb994ag', 24), 4294967296);
			self['assertEqual']($p['float_int']('hek2mgl', 25), 4294967296);
			self['assertEqual']($p['float_int']('dnchbnm', 26), 4294967296);
			self['assertEqual']($p['float_int']('b28jpdm', 27), 4294967296);
			self['assertEqual']($p['float_int']('8pfgih4', 28), 4294967296);
			self['assertEqual']($p['float_int']('76beigg', 29), 4294967296);
			self['assertEqual']($p['float_int']('5qmcpqg', 30), 4294967296);
			self['assertEqual']($p['float_int']('4q0jto4', 31), 4294967296);
			self['assertEqual']($p['float_int']('4000000', 32), 4294967296);
			self['assertEqual']($p['float_int']('3aokq94', 33), 4294967296);
			self['assertEqual']($p['float_int']('2qhxjli', 34), 4294967296);
			self['assertEqual']($p['float_int']('2br45qb', 35), 4294967296);
			self['assertEqual']($p['float_int']('1z141z4', 36), 4294967296);
			self['assertEqual']($p['float_int']('100000000000000000000000000000001', 2), 4294967297);
			self['assertEqual']($p['float_int']('102002022201221111212', 3), 4294967297);
			self['assertEqual']($p['float_int']('10000000000000001', 4), 4294967297);
			self['assertEqual']($p['float_int']('32244002423142', 5), 4294967297);
			self['assertEqual']($p['float_int']('1550104015505', 6), 4294967297);
			self['assertEqual']($p['float_int']('211301422355', 7), 4294967297);
			self['assertEqual']($p['float_int']('40000000001', 8), 4294967297);
			self['assertEqual']($p['float_int']('12068657455', 9), 4294967297);
			self['assertEqual']($p['float_int']('4294967297', 10), 4294967297);
			self['assertEqual']($p['float_int']('1904440555', 11), 4294967297);
			self['assertEqual']($p['float_int']('9ba461595', 12), 4294967297);
			self['assertEqual']($p['float_int']('535a7988a', 13), 4294967297);
			self['assertEqual']($p['float_int']('2ca5b7465', 14), 4294967297);
			self['assertEqual']($p['float_int']('1a20dcd82', 15), 4294967297);
			self['assertEqual']($p['float_int']('100000001', 16), 4294967297);
			self['assertEqual']($p['float_int']('a7ffda92', 17), 4294967297);
			self['assertEqual']($p['float_int']('704he7g5', 18), 4294967297);
			self['assertEqual']($p['float_int']('4f5aff67', 19), 4294967297);
			self['assertEqual']($p['float_int']('3723ai4h', 20), 4294967297);
			self['assertEqual']($p['float_int']('281d55i5', 21), 4294967297);
			self['assertEqual']($p['float_int']('1fj8b185', 22), 4294967297);
			self['assertEqual']($p['float_int']('1606k7id', 23), 4294967297);
			self['assertEqual']($p['float_int']('mb994ah', 24), 4294967297);
			self['assertEqual']($p['float_int']('hek2mgm', 25), 4294967297);
			self['assertEqual']($p['float_int']('dnchbnn', 26), 4294967297);
			self['assertEqual']($p['float_int']('b28jpdn', 27), 4294967297);
			self['assertEqual']($p['float_int']('8pfgih5', 28), 4294967297);
			self['assertEqual']($p['float_int']('76beigh', 29), 4294967297);
			self['assertEqual']($p['float_int']('5qmcpqh', 30), 4294967297);
			self['assertEqual']($p['float_int']('4q0jto5', 31), 4294967297);
			self['assertEqual']($p['float_int']('4000001', 32), 4294967297);
			self['assertEqual']($p['float_int']('3aokq95', 33), 4294967297);
			self['assertEqual']($p['float_int']('2qhxjlj', 34), 4294967297);
			self['assertEqual']($p['float_int']('2br45qc', 35), 4294967297);
			self['assertEqual']($p['float_int']('1z141z5', 36), 4294967297);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_long'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LongTypeTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end LongTypeTest */


/* end module: LongTypeTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'sys', 'random']
*/

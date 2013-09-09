/* start module: LoopTest */
$pyjs.loaded_modules['LoopTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LoopTest'].__was_initialized__) return $pyjs.loaded_modules['LoopTest'];
	var $m = $pyjs.loaded_modules["LoopTest"];
	$m.__repr__ = function() { return "<module: LoopTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LoopTest';
	$m.__name__ = __mod_name__;
	var $eq9,$eq10,$bool8;

	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['time'] = $p['___import___']('time', null);
	$m['write'] = $p['___import___']('write.write', null, null, false);
	$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
	$m['A'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LoopTest';
		$method = $pyjs__bind_method2('__init__', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self.x = x;
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getX', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getX'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('A', $p['tuple']($bases), $data);
	})();
	$m['fib'] = function(n) {
		var $cmp1,$cmp2,$add2,$bool1,$sub3,$sub2,$sub1,$add1,$sub4;
		if ((($bool1=((($cmp1=n)===($cmp2=3.0)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return 1.0;
		}
		return (typeof ($add1=$m['fib']((typeof ($sub1=n)==typeof ($sub2=2.0) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$p['op_sub']($sub1,$sub2))))==typeof ($add2=$m['fib']((typeof ($sub3=n)==typeof ($sub4=1.0) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			$p['op_sub']($sub3,$sub4)))) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
	};
	$m['fib'].__name__ = 'fib';

	$m['fib'].__bind_type__ = 0;
	$m['fib'].__args__ = [null,null,['n']];
	$m['int_fib'] = function(n) {
		var $cmp4,$cmp3,$bool2,$add3,$sub8,$add4,$sub7,$sub6,$sub5;
		if ((($bool2=((($cmp3=n)===($cmp4=3)?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return 1;
		}
		return (typeof ($add3=$m['int_fib']((typeof ($sub5=n)==typeof ($sub6=2) && (typeof $sub5=='number'||typeof $sub5=='string')?
			$sub5-$sub6:
			$p['op_sub']($sub5,$sub6))))==typeof ($add4=$m['int_fib']((typeof ($sub7=n)==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
			$sub7-$sub8:
			$p['op_sub']($sub7,$sub8)))) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4));
	};
	$m['int_fib'].__name__ = 'int_fib';

	$m['int_fib'].__bind_type__ = 0;
	$m['int_fib'].__args__ = [null,null,['n']];
	$m['long_fib'] = function(n) {
		var $cmp5,$cmp6,$sub12,$sub11,$sub10,$bool3,$sub9,$add6,$add5;
		if ((($bool3=((($cmp5=n)===($cmp6=3)?0:
			(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
				($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
				$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			return 1;
		}
		return (typeof ($add5=$m['long_fib']((typeof ($sub9=n)==typeof ($sub10=2) && (typeof $sub9=='number'||typeof $sub9=='string')?
			$sub9-$sub10:
			$p['op_sub']($sub9,$sub10))))==typeof ($add6=$m['long_fib']((typeof ($sub11=n)==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
			$sub11-$sub12:
			$p['op_sub']($sub11,$sub12)))) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6));
	};
	$m['long_fib'].__name__ = 'long_fib';

	$m['long_fib'].__bind_type__ = 0;
	$m['long_fib'].__args__ = [null,null,['n']];
	$m['LoopTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LoopTest';
		$method = $pyjs__bind_method2('testLoop1', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,t1,$eq2,$iter1_array,$add7,$iter1_nextval,$sub13,$eq1,$sub16,$sub15,$sub14,$bool4,$div2,dt,$div1,$mul2,$mul1,a,$iter1_type,i,m,t0,n,$assign1,$iter1_idx,x,$add8;
			$assign1 = $m['time']['time']();
			t1 = $assign1;
			t0 = $assign1;
			n = 1000;
			a = $m['A'](1);
			m = 0;
			while ((($bool4=(($eq1=(typeof ($sub13=t1)==typeof ($sub14=t0) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14)))===($eq2=0)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				m = (typeof ($add7=m)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				$iter1_iter = $p['range'](n);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					x = a['getX']();
				}
				t1 = $m['time']['time']();
			}
			dt = (typeof ($sub15=t1)==typeof ($sub16=t0) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16));
			$m['writebr']($p['sprintf']('Loop1: %.2f/sec', (typeof ($div1=(typeof ($mul1=n)==typeof ($mul2=m) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))==typeof ($div2=dt) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLoop1'] = $method;
		$method = $pyjs__bind_method2('testLoop2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub20,t1,$iter2_iter,$sub19,$sub18,$iter2_type,$eq3,$sub17,$eq4,$iter2_idx,$add10,$bool5,$div3,dt,$mul4,$mul3,$div4,$iter2_nextval,i,m,t0,n,$assign2,$add9,$iter2_array;
			$assign2 = $m['time']['time']();
			t1 = $assign2;
			t0 = $assign2;
			n = 100;
			m = 0.0;
			while ((($bool5=(($eq3=(typeof ($sub17=t1)==typeof ($sub18=t0) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18)))===($eq4=0)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				m = (typeof ($add9=m)==typeof ($add10=1.0) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				$iter2_iter = $p['range'](n);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$m['fib'](10.0);
				}
				t1 = $m['time']['time']();
			}
			dt = (typeof ($sub19=t1)==typeof ($sub20=t0) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20));
			$m['writebr']($p['sprintf']('Loop2 (float): %.2f/sec', (typeof ($div3=(typeof ($mul3=n)==typeof ($mul4=m) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($div4=dt) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLoop2'] = $method;
		$method = $pyjs__bind_method2('testLoop3', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub22,$sub23,$sub21,$sub24,$iter3_type,t1,$mul5,$iter3_idx,$iter3_iter,$eq6,$eq5,$bool6,$add11,$add12,$iter3_array,$mul6,dt,$div6,$div5,i,m,t0,n,$assign3,$iter3_nextval;
			$assign3 = $m['time']['time']();
			t1 = $assign3;
			t0 = $assign3;
			n = 100;
			m = 0.0;
			while ((($bool6=(($eq5=(typeof ($sub21=t1)==typeof ($sub22=t0) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22)))===($eq6=0)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				m = (typeof ($add11=m)==typeof ($add12=1.0) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				$iter3_iter = $p['range'](n);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					$m['int_fib'](10);
				}
				t1 = $m['time']['time']();
			}
			dt = (typeof ($sub23=t1)==typeof ($sub24=t0) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				$p['op_sub']($sub23,$sub24));
			$m['writebr']($p['sprintf']('Loop3 (int): %.2f/sec', (typeof ($div5=(typeof ($mul5=n)==typeof ($mul6=m) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($div6=dt) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLoop3'] = $method;
		$method = $pyjs__bind_method2('testLoop4', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub26,$sub27,$sub25,$sub28,$mul8,$iter4_type,t1,$iter4_iter,$eq8,$eq7,$add14,$div8,$bool7,$add13,$mul7,dt,$div7,i,$iter4_nextval,m,t0,n,$iter4_idx,$assign4,$iter4_array;
			$assign4 = $m['time']['time']();
			t1 = $assign4;
			t0 = $assign4;
			n = 100;
			m = 0.0;
			while ((($bool7=(($eq7=(typeof ($sub25=t1)==typeof ($sub26=t0) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				$p['op_sub']($sub25,$sub26)))===($eq8=0)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				m = (typeof ($add13=m)==typeof ($add14=1.0) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				$iter4_iter = $p['range'](n);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					$m['long_fib'](10);
				}
				t1 = $m['time']['time']();
			}
			dt = (typeof ($sub27=t1)==typeof ($sub28=t0) && (typeof $sub27=='number'||typeof $sub27=='string')?
				$sub27-$sub28:
				$p['op_sub']($sub27,$sub28));
			$m['writebr']($p['sprintf']('Loop4 (long): %.2f/sec', (typeof ($div7=(typeof ($mul7=n)==typeof ($mul8=m) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)))==typeof ($div8=dt) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLoop4'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LoopTest', $p['tuple']($bases), $data);
	})();
	if ((($bool8=(($eq9=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq10='__main__')&&$eq9===null?true:
		($eq9===null?false:($eq10===null?false:
			((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
				((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
					$eq9==$eq10)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
		$m['l'] = $m['LoopTest']();
		$m['l']['run']();
	}
	return this;
}; /* end LoopTest */


/* end module: LoopTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'time', 'write.write', 'write', 'write.writebr']
*/

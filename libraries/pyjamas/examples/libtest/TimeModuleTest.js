/* start module: TimeModuleTest */
$pyjs.loaded_modules['TimeModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TimeModuleTest'].__was_initialized__) return $pyjs.loaded_modules['TimeModuleTest'];
	var $m = $pyjs.loaded_modules["TimeModuleTest"];
	$m.__repr__ = function() { return "<module: TimeModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TimeModuleTest';
	$m.__name__ = __mod_name__;
	var $bool2,$eq6,$eq5;

	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['time'] = $p['___import___']('time', null);
	$m['TimeModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TimeModuleTest';
		$method = $pyjs__bind_method2('time_tuple', function(tm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tm = arguments[1];
			}

			return $p['tuple']([$p['getattr'](tm, 'tm_year'), $p['getattr'](tm, 'tm_mon'), $p['getattr'](tm, 'tm_mday'), $p['getattr'](tm, 'tm_hour'), $p['getattr'](tm, 'tm_min'), $p['getattr'](tm, 'tm_sec'), $p['getattr'](tm, 'tm_wday'), $p['getattr'](tm, 'tm_yday'), $p['getattr'](tm, 'tm_isdst')]);
		}
	, 1, [null,null,['self'],['tm']]);
		$cls_definition['time_tuple'] = $method;
		$method = $pyjs__bind_method2('testBasics', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ttuple1,$7,ttuple,ttuple2,$29,$28,$21,$20,$22,$25,$24,$27,$26,$eq2,$eq1,$8,$9,$6,$10,$4,$5,$2,$3,$1,$14,$15,$16,$17,$cmp1,$11,$12,$cmp2,$18,$13,t2,$19,$30,t1,$add2,$add1,t,$23;
			t = $m['time']['time']();
			self['assertTrue'](((($cmp1=t)===($cmp2=1246924800)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1), 'time.time() result invalid');
			ttuple1 = $m['time']['gmtime'](t);
			t1 = $m['time']['mktime'](ttuple1);
			ttuple2 = $m['time']['localtime']((typeof ($add1=t)==typeof ($add2=$p['getattr']($m['time'], 'timezone')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			t2 = $m['time']['mktime'](ttuple2);
			self['assertTrue']((($eq1=t1)===($eq2=t2)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), 't1 and t2 differ');
			self['assertEqual']((typeof ($1=ttuple1).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), (typeof ($3=ttuple2).__array != 'undefined'?
				((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(0)));
			self['assertEqual']((typeof ($5=ttuple1).__array != 'undefined'?
				((typeof $5.__array[$6=1]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(1)), (typeof ($7=ttuple2).__array != 'undefined'?
				((typeof $7.__array[$8=1]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(1)));
			self['assertEqual']((typeof ($9=ttuple1).__array != 'undefined'?
				((typeof $9.__array[$10=2]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(2)), (typeof ($11=ttuple2).__array != 'undefined'?
				((typeof $11.__array[$12=2]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(2)));
			t = 1246446123;
			ttuple = $m['time']['gmtime'](t);
			self['assertEqual']((typeof ($13=ttuple).__array != 'undefined'?
				((typeof $13.__array[$14=0]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(0)), 2009, 'Year mismatch');
			self['assertEqual']((typeof ($15=ttuple).__array != 'undefined'?
				((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(1)), 7, 'Month mismatch');
			self['assertEqual']((typeof ($17=ttuple).__array != 'undefined'?
				((typeof $17.__array[$18=2]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(2)), 1, 'Month day mismatch');
			self['assertEqual']((typeof ($19=ttuple).__array != 'undefined'?
				((typeof $19.__array[$20=3]) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__(3)), 11, 'Hour mismatch');
			self['assertEqual']((typeof ($21=ttuple).__array != 'undefined'?
				((typeof $21.__array[$22=4]) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__(4)), 2, 'Minute mismatch');
			self['assertEqual']((typeof ($23=ttuple).__array != 'undefined'?
				((typeof $23.__array[$24=5]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(5)), 3, 'Second mismatch');
			self['assertEqual']((typeof ($25=ttuple).__array != 'undefined'?
				((typeof $25.__array[$26=6]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(6)), 2, 'Week day mismatch');
			self['assertEqual']((typeof ($27=ttuple).__array != 'undefined'?
				((typeof $27.__array[$28=7]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(7)), 182, 'Year day mismatch');
			self['assertEqual']((typeof ($29=ttuple).__array != 'undefined'?
				((typeof $29.__array[$30=8]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__(8)), 0, 'DST mismatch');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBasics'] = $method;
		$method = $pyjs__bind_method2('testStrftime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ttuple,s,t,assertEqual;
			t = 1246446001;
			ttuple = $m['time']['gmtime'](t);
			s = $m['time']['strftime']('-%%-%d-%H-%I-%j-%m-%M-%p-%S-%w-%W-%y-%Y-', ttuple);
			self['assertEqual'](s, '-%-01-11-11-182-07-00-AM-01-3-26-09-2009-');
			assertEqual = function(s, expected) {

				self['assertEqual'](s, expected, $p['sprintf']('bug #640 : %r != %r', $p['tuple']([s, expected])));
				return null;
			};
			assertEqual.__name__ = 'assertEqual';

			assertEqual.__bind_type__ = 0;
			assertEqual.__args__ = [null,null,['s'],['expected']];
			assertEqual($m['time']['strftime']('%c', ttuple), 'Wed Jul  1 11:00:01 2009');
			assertEqual($m['time']['strftime']('%x', ttuple), '07/01/09');
			assertEqual($m['time']['strftime']('%X', ttuple), '11:00:01');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrftime'] = $method;
		$method = $pyjs__bind_method2('testStrptime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var tm;
			tm = $m['time']['strptime']('01012000 1234', '%d%m%Y %H%M');
			self['assertEqual']($p['tuple']($p['__getslice'](tm, 0, 9)), $p['tuple']([2000, 1, 1, 12, 34, 0, 5, 1, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]));
			tm = $m['time']['strptime']('01072000 1234', '%d%m%Y %H%M');
			self['assertEqual']($p['tuple']($p['__getslice'](tm, 0, 9)), $p['tuple']([2000, 7, 1, 12, 34, 0, 5, 183, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]));
			tm = $m['time']['strptime']('010100 1234', '%d%m%y %H%M');
			self['assertEqual']($p['tuple']($p['__getslice'](tm, 0, 9)), $p['tuple']([2000, 1, 1, 12, 34, 0, 5, 1, (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrptime'] = $method;
		$method = $pyjs__bind_method2('testAsctime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var t;
			t = $p['tuple']([2010, 5, 19, 9, 22, 44, 2, 139, 1]);
			self['assertEqual']($m['time']['asctime'](t), 'Wed May 19 09:22:44 2010');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testAsctime'] = $method;
		$method = $pyjs__bind_method2('testGmtime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add13,$iter1_iter,$mod1,$mod2,day,Oct2010utc,Apr2010utc,$iter1_array,Jul2010utc,$iter1_idx,$iter1_nextval,start2010utc,$add14,$add15,$add16,$add10,$add11,$add12,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter1_type,i,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
			day = 86400;
			start2010utc = 1262304000;
			Apr2010utc = (typeof ($add3=start2010utc)==typeof ($add4=(typeof ($mul1=90)==typeof ($mul2=day) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			Jul2010utc = (typeof ($add5=start2010utc)==typeof ($add6=(typeof ($mul3=181)==typeof ($mul4=day) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			Oct2010utc = (typeof ($add7=start2010utc)==typeof ($add8=(typeof ($mul5=273)==typeof ($mul6=day) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			$iter1_iter = $p['list']([0, 1, 2, 3, 29, 30]);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['assertEqual'](self['time_tuple']($m['time']['gmtime']((typeof ($add9=start2010utc)==typeof ($add10=(typeof ($mul7=i)==typeof ($mul8=day) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))), $p['tuple']([2010, 1, (typeof ($add11=i)==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)), 0, 0, 0, (typeof ($mod1=(typeof ($add13=4)==typeof ($add14=i) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($mod2=7) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), (typeof ($add15=i)==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)), 0]));
			}
			self['assertEqual'](self['time_tuple']($m['time']['gmtime'](Apr2010utc)), $p['tuple']([2010, 4, 1, 0, 0, 0, 3, 91, 0]));
			self['assertEqual'](self['time_tuple']($m['time']['gmtime'](Jul2010utc)), $p['tuple']([2010, 7, 1, 0, 0, 0, 3, 182, 0]));
			self['assertEqual'](self['time_tuple']($m['time']['gmtime'](Oct2010utc)), $p['tuple']([2010, 10, 1, 0, 0, 0, 4, 274, 0]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGmtime'] = $method;
		$method = $pyjs__bind_method2('testLocaltime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod4,$mod3,$add26,$add29,$add28,cmp_times,$iter2_iter,$add21,$add20,$add22,$add25,$add24,$add27,day,Oct2010utc,Apr2010utc,$iter2_type,start2010utc,$iter2_idx,$iter2_nextval,$mul9,$add18,$add19,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,i,$add30,$add17,Jul2010utc,$add23,$iter2_array;
			cmp_times = function(t) {
				var $32,t2,$eq4,$31,$bool1,$eq3,$sub3,$sub2,$sub1,t1,$sub4;
				t1 = $m['time']['gmtime']((typeof ($sub1=t)==typeof ($sub2=$p['getattr']($m['time'], 'timezone')) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)));
				t2 = $m['time']['localtime'](t);
				if ((($bool1=!(($eq3=(typeof ($31=t2).__array != 'undefined'?
					((typeof $31.__array[$32=(typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__((typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))))===($eq4=0)&&$eq3===null?true:
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
							 true ) )) {
					t1 = $m['time']['gmtime']((typeof ($sub3=t)==typeof ($sub4=$p['getattr']($m['time'], 'altzone')) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)));
				}
				self['assertEqual']($p['__getslice'](self['time_tuple'](t1), 0, (typeof ($usub5=1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))), $p['__getslice'](self['time_tuple'](t2), 0, (typeof ($usub6=1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))));
				return null;
			};
			cmp_times.__name__ = 'cmp_times';

			cmp_times.__bind_type__ = 0;
			cmp_times.__args__ = [null,null,['t']];
			day = 86400;
			start2010utc = 1262304000;
			Apr2010utc = (typeof ($add17=start2010utc)==typeof ($add18=(typeof ($mul9=90)==typeof ($mul10=day) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10))) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18));
			Jul2010utc = (typeof ($add19=start2010utc)==typeof ($add20=(typeof ($mul11=181)==typeof ($mul12=day) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12))) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20));
			Oct2010utc = (typeof ($add21=start2010utc)==typeof ($add22=(typeof ($mul13=273)==typeof ($mul14=day) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22));
			cmp_times(start2010utc);
			cmp_times(Apr2010utc);
			cmp_times(Jul2010utc);
			cmp_times(Oct2010utc);
			return null;
			$iter2_iter = $p['list']([0, 1, 2, 3, 29, 30]);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				self['assertEqual'](self['time_tuple']($m['time']['gmtime']((typeof ($add23=start2010utc)==typeof ($add24=(typeof ($mul15=i)==typeof ($mul16=day) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)))), $p['tuple']([2010, 1, (typeof ($add25=i)==typeof ($add26=1) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)), 0, 0, 0, (typeof ($mod3=(typeof ($add27=4)==typeof ($add28=i) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28)))==typeof ($mod4=7) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), (typeof ($add29=i)==typeof ($add30=1) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)), 0]));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLocaltime'] = $method;
		$method = $pyjs__bind_method2('testMktime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul17,cmp_times,$add32,start2010utc,$add31,$add36,$mul19,$mul18,Oct2010utc,Apr2010utc,Jul2010utc,$add34,$add33,$add35,$mul22,day,$mul20,$mul21;
			cmp_times = function(t) {
				var t2,t1;
				t1 = t;
				t2 = $m['time']['mktime']($m['time']['localtime'](t));
				self['assertEqual'](t1, t2);
				return null;
			};
			cmp_times.__name__ = 'cmp_times';

			cmp_times.__bind_type__ = 0;
			cmp_times.__args__ = [null,null,['t']];
			day = 86400;
			start2010utc = 1262304000;
			Apr2010utc = (typeof ($add31=start2010utc)==typeof ($add32=(typeof ($mul17=90)==typeof ($mul18=day) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18))) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32));
			Jul2010utc = (typeof ($add33=start2010utc)==typeof ($add34=(typeof ($mul19=181)==typeof ($mul20=day) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20))) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34));
			Oct2010utc = (typeof ($add35=start2010utc)==typeof ($add36=(typeof ($mul21=273)==typeof ($mul22=day) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22))) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36));
			cmp_times(start2010utc);
			cmp_times(Apr2010utc);
			cmp_times(Jul2010utc);
			cmp_times(Oct2010utc);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMktime'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimeModuleTest', $p['tuple']($bases), $data);
	})();
	if ((($bool2=(($eq5=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq6='__main__')&&$eq5===null?true:
		($eq5===null?false:($eq6===null?false:
			((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
				((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
					$eq5==$eq6)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
		$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
		$m['t'] = $m['RunTests']();
		$m['t']['add']($m['TimeModuleTest']);
		$m['t']['start_test']();
	}
	return this;
}; /* end TimeModuleTest */


/* end module: TimeModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'time', 'RunTests.RunTests', 'RunTests']
*/

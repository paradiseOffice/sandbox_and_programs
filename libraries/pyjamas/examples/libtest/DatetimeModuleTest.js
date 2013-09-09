/* start module: DatetimeModuleTest */
$pyjs.loaded_modules['DatetimeModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DatetimeModuleTest'].__was_initialized__) return $pyjs.loaded_modules['DatetimeModuleTest'];
	var $m = $pyjs.loaded_modules["DatetimeModuleTest"];
	$m.__repr__ = function() { return "<module: DatetimeModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DatetimeModuleTest';
	$m.__name__ = __mod_name__;
	var $eq3,$eq4,$bool1;

	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['datetime'] = $p['___import___']('datetime', null);
	$m['DatetimeModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DatetimeModuleTest';
		$method = $pyjs__bind_method2('testDate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d;
			d = $m['datetime']['date'](2010, 4, 9);
			self['assertEqual']($p['getattr'](d, 'year'), 2010);
			self['assertEqual']($p['getattr'](d, 'month'), 4);
			self['assertEqual']($p['getattr'](d, 'day'), 9);
			self['assertEqual'](d['weekday'](), 4);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDate'] = $method;
		$method = $pyjs__bind_method2('testTime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var t;
			t = $m['datetime']['time'](9, 45, 11, 95000);
			self['assertEqual']($p['getattr'](t, 'hour'), 9);
			self['assertEqual']($p['getattr'](t, 'minute'), 45);
			self['assertEqual']($p['getattr'](t, 'second'), 11);
			self['assertEqual']($p['getattr'](t, 'microsecond'), 95000);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTime'] = $method;
		$method = $pyjs__bind_method2('testTimestamp', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dt,d;
			d = $m['datetime']['date']['fromtimestamp'](1270804609);
			self['assertEqual']($p['str'](d), '2010-04-09');
			dt = $p['str']($m['datetime']['datetime']['fromtimestamp'](1270804609.95));
			self['assertEqual']($p['tuple']([$p['__getslice'](dt, 0, 11), $p['__getslice'](dt, 16, null)]), $p['tuple'](['2010-04-09 ', ':49.950000']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTimestamp'] = $method;
		$method = $pyjs__bind_method2('testCtime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dt,d;
			d = $m['datetime']['date'](2010, 4, 9);
			self['assertEqual'](d['ctime'](), 'Fri Apr  9 00:00:00 2010');
			dt = $m['datetime']['datetime'](2010, 4, 9, 10, 57, 32);
			self['assertEqual'](dt['ctime'](), 'Fri Apr  9 10:57:32 2010');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testCtime'] = $method;
		$method = $pyjs__bind_method2('testIsoCalendar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d,d1;
			d = $m['datetime']['date'](2010, 4, 9);
			self['assertEqual'](d['isocalendar'](), $p['tuple']([2010, 14, 5]));
			d1 = $m['datetime']['date'](2007, 12, 31);
			self['assertEqual'](d1['isocalendar'](), $p['tuple']([2008, 1, 1]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsoCalendar'] = $method;
		$method = $pyjs__bind_method2('testIsoFormat', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dt2,dt,d;
			d = $m['datetime']['date'](2010, 4, 9);
			self['assertEqual'](d['isoformat'](), '2010-04-09');
			dt = $m['datetime']['datetime'](2010, 4, 9, 10, 57, 32);
			self['assertEqual'](dt['isoformat'](), '2010-04-09T10:57:32');
			dt2 = $m['datetime']['datetime'](2010, 4, 9, 10, 57, 32, 95000);
			self['assertEqual'](dt2['isoformat'](), '2010-04-09T10:57:32.095000');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIsoFormat'] = $method;
		$method = $pyjs__bind_method2('testOrdinal', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d,d1;
			d = $m['datetime']['date']['fromordinal'](1);
			self['assertEqual']($p['str'](d), '0001-01-01');
			d1 = $m['datetime']['date']['fromordinal'](733871);
			self['assertEqual']($p['str'](d1), '2010-04-09');
			self['assertEqual'](d1['toordinal'](), 733871);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testOrdinal'] = $method;
		$method = $pyjs__bind_method2('testReplace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dt,d,t;
			d = $pyjs_kwargs_call($m['datetime']['date'](2010, 4, 9), '$$replace', null, null, [{month:6, day:13}]);
			self['assertEqual']($p['str'](d), '2010-06-13');
			t = $pyjs_kwargs_call($m['datetime']['time'](23, 59, 59), '$$replace', null, null, [{minute:45, microsecond:95000}]);
			self['assertEqual']($p['str'](t), '23:45:59.095000');
			dt = $pyjs_kwargs_call($m['datetime']['datetime'](2010, 4, 9, 10, 57, 32), '$$replace', null, null, [{month:6, day:13, hour:12, minute:0, second:0}]);
			self['assertEqual']($p['str'](dt), '2010-06-13 12:00:00');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testReplace'] = $method;
		$method = $pyjs__bind_method2('testTimetuple', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var tm;
			tm = $m['datetime']['date'](2010, 4, 9)['timetuple']();
			self['assertEqual']($p['getattr'](tm, 'tm_year'), 2010);
			self['assertEqual']($p['getattr'](tm, 'tm_mon'), 4);
			self['assertEqual']($p['getattr'](tm, 'tm_mday'), 9);
			self['assertEqual']($p['getattr'](tm, 'tm_hour'), 0);
			self['assertEqual']($p['getattr'](tm, 'tm_min'), 0);
			self['assertEqual']($p['getattr'](tm, 'tm_sec'), 0);
			self['assertEqual']($p['getattr'](tm, 'tm_wday'), 4);
			self['assertEqual']($p['getattr'](tm, 'tm_yday'), 99);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTimetuple'] = $method;
		$method = $pyjs__bind_method2('testStrftime', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d;
			d = $m['datetime']['date'](2010, 4, 9);
			self['assertEqual'](d['strftime']('%d/%m/%y'), '09/04/10');
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
			var d;
			d = $m['datetime']['datetime']['strptime']('010100 1234', '%d%m%y %H%M');
			self['assertEqual']($p['str'](d), '2000-01-01 12:34:00');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStrptime'] = $method;
		$method = $pyjs__bind_method2('testComparision', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp4,$cmp1,$cmp3,$cmp2,$eq2,$eq1,d2,d3,d1;
			d1 = $m['datetime']['date'](2010, 6, 8);
			d2 = $m['datetime']['date'](2010, 6, 8);
			d3 = $m['datetime']['date'](2010, 4, 9);
			self['assertTrue']((($eq1=d1)===($eq2=d2)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), 'd1 and d2 differ');
			self['assertTrue'](((($cmp1=d1)===($cmp2=d3)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1), 'd1 is not later than d3');
			self['assertTrue'](((($cmp3=d3)===($cmp4=d1)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1), 'd3 is not earlier than d1');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComparision'] = $method;
		$method = $pyjs__bind_method2('testOperations', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1,diff,$sub3,$sub2,$sub1,$sub4,d2,d1;
			d1 = $m['datetime']['date'](2010, 4, 9);
			d2 = $m['datetime']['date'](2010, 6, 13);
			diff = (typeof ($sub1=d2)==typeof ($sub2=d1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			self['assertEqual']($p['getattr'](diff, 'days'), 65);
			self['assertEqual']($p['str']((typeof ($add1=d1)==typeof ($add2=diff) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))), '2010-06-13');
			self['assertEqual']($p['str']((typeof ($sub3=d1)==typeof ($sub4=diff) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))), '2010-02-03');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testOperations'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DatetimeModuleTest', $p['tuple']($bases), $data);
	})();
	if ((($bool1=(($eq3=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq4='__main__')&&$eq3===null?true:
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
		$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
		$m['t'] = $m['RunTests']();
		$m['t']['add']($m['DatetimeModuleTest']);
		$m['t']['start_test']();
	}
	return this;
}; /* end DatetimeModuleTest */


/* end module: DatetimeModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'datetime', 'RunTests.RunTests', 'RunTests']
*/

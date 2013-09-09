/* start module: BoolTest */
$pyjs.loaded_modules['BoolTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['BoolTest'].__was_initialized__) return $pyjs.loaded_modules['BoolTest'];
	var $m = $pyjs.loaded_modules["BoolTest"];
	$m.__repr__ = function() { return "<module: BoolTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'BoolTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['Stupid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'BoolTest';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Stupid', $p['tuple']($bases), $data);
	})();
	$m['Foo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'BoolTest';
		$method = $pyjs__bind_method2('__init__', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}

			self._v = v;
			return null;
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$cmp2;
			return ((($cmp1=$p['getattr'](self, '_v'))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 1;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Foo', $p['tuple']($bases), $data);
	})();
	$m['Bar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'BoolTest';
		$method = $pyjs__bind_method2('__init__', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}

			self._v = v;
			return null;
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_v');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Bar', $p['tuple']($bases), $data);
	})();
	$m['BoolTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'BoolTest';
		$method = $pyjs__bind_method2('testBaseTypes', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq3,$eq1,$eq4;
			self['assertTrue'](true);
			self['assertFalse'](false);
			self['assertTrue']($p['bool'](true));
			self['assertFalse']($p['bool'](false));
			self['assertTrue']((($eq1=true)===($eq2=true)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))));
			self['assertFalse']((($eq3=false)===($eq4=true)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))));
			self['assertTrue']($p['bool'](1));
			self['assertFalse']($p['bool'](0));
			self['assertTrue'](1);
			self['assertFalse'](0);
			self['assertTrue']($p['bool']('a'));
			self['assertFalse']($p['bool'](''));
			self['assertTrue']('a');
			self['assertFalse']('');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBaseTypes'] = $method;
		$method = $pyjs__bind_method2('testObjects', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']($p['bool']($m['Stupid']()));
			self['assertTrue']($m['Stupid']());
			self['assertFalse']($p['bool']($m['Foo'](0)));
			self['assertTrue']($p['bool']($m['Foo'](1)));
			self['assertFalse']($m['Foo'](0));
			self['assertTrue']($m['Foo'](1));
			self['assertFalse']($p['bool']($m['Bar'](0)));
			self['assertTrue']($p['bool']($m['Bar'](1)));
			self['assertFalse']($m['Bar'](0));
			self['assertTrue']($m['Bar'](1));
			self['assertFalse']($p['bool']($p['list']([])));
			self['assertTrue']($p['bool']($p['list']([1])));
			self['assertFalse']($p['list']([]));
			self['assertTrue']($p['list']([1]));
			self['assertFalse']($p['bool']($p['dict']([])));
			self['assertTrue']($p['bool']($p['dict']([['x', 1]])));
			self['assertFalse']($p['dict']([]));
			self['assertTrue']($p['dict']([['x', 1]]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testObjects'] = $method;
		$method = $pyjs__bind_method2('testIfStatement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18,$cmp13,$cmp15,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$cmp12,$or1,$or2,$and1,$and2,$and3,$and4,$bool2,$bool3,$cmp17,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$cmp18,$cmp5,$cmp4,$cmp7,$cmp6,$cmp3,$cmp14,i,$cmp9,$cmp8,$cmp16,$cmp11,$cmp10;
			if ((($bool1=$p['dict']([])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['fail']('Empty dict should not evaluate to True in If');
			}
			else {
				self['assertTrue'](true);
			}
			if ((($bool2=$p['dict']([[1, 5]])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['assertTrue'](true);
			}
			else {
				self['fail']('Non-empty dict should evaluate to True in If');
			}
			if ((($bool3=$p['list']([])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['fail']('Empty dict should not evaluate to True in If');
			}
			else {
				self['assertTrue'](true);
			}
			if ((($bool4=$p['list']([1])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['assertTrue'](true);
			}
			else {
				self['fail']('Non-empty lists should evaluate to True in If');
			}
			if ((($bool6=!(($bool5=$p['list']([])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['assertTrue'](true);
			}
			else {
				self['fail']('Non empty lists should not evaluate to True in If');
			}
			if ((($bool8=((($bool7=$and1=$p['list']([1])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['dict']([]):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self['fail']("'[1] and {}' shoul evaluate to False");
			}
			else {
				self['assertTrue'](true);
			}
			if ((($bool11=((($bool9=$or1=$p['list']([])) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:!(($bool10=$p['dict']([])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				self['assertTrue'](true);
			}
			else {
				self['fail']("'[] or not {}' shoul evaluate to True");
			}
			if ((($bool14=((($bool12=$and3=$p['list']([])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12.__nonzero__=='function'?
						$bool12.__nonzero__() :
						(typeof $bool12.__len__=='function'?
							($bool12.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool13=$p['dict']([])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and3)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self['fail']("'[] and not {}' shoul evaluate to False");
			}
			else {
				self['assertTrue'](true);
			}
			if ((($bool15=(((($cmp3=0)===($cmp4=($compare1 = 1))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)&&((($cmp5=$compare1)===($cmp6=($compare2 = 2))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self['assertTrue'](true);
			}
			else {
				self['fail']('if 0 < 1 < 2');
			}
			i = $p['list']([0, 2, 4]);
			i = i['__iter__']();
			if ((($bool16=(((($cmp7=0)===($cmp8=($compare3 = i['next']()))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == -1)&&((($cmp9=$compare3)===($cmp10=($compare4 = 4))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == -1))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self['fail']('iter (0)');
			}
			else {
				self['assertTrue'](true);
			}
			if ((($bool17=(((($cmp11=0)===($cmp12=($compare5 = i['next']()))?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)&&((($cmp13=$compare5)===($cmp14=($compare6 = 4))?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['assertTrue'](true);
			}
			else {
				self['fail']('iter (2)');
			}
			if ((($bool18=(((($cmp15=0)===($cmp16=($compare7 = i['next']()))?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == -1)&&((($cmp17=$compare7)===($cmp18=($compare8 = 4))?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['fail']('iter (4)');
			}
			else {
				self['assertTrue'](true);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIfStatement'] = $method;
		$method = $pyjs__bind_method2('testWhileStatement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19,$bool20;
			while ((($bool19=$p['list']([])) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['fail']('Empty lists should not evaluate to True in While');
				break;
			}
			while ((($bool20=$p['list']([1])) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
			self['fail']('None-empty lists should evaluate to True in While');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testWhileStatement'] = $method;
		$method = $pyjs__bind_method2('testLogic', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,$bool50,$and9,$eq5,$bool46,$eq8,$bool49,$eq9,$or16,$eq10,$eq11,$eq12,$eq13,d2,$eq15,$eq16,$bool42,$or15,$bool41,$bool33,$bool45,$eq14,$or17,$bool48,$bool25,$bool24,$bool27,$bool26,$bool21,$bool23,$bool22,$bool36,$eq7,$bool29,$bool28,$or22,$bool37,$or5,$or4,$or7,$or6,$bool43,$bool34,$or3,$bool40,$eq6,$bool35,$or9,$and5,$and6,$or8,$and12,$and13,$and10,$and11,$and16,$and17,$and14,$and15,$and18,$and7,tst,d,$bool44,f,$or20,$bool47,$pyjs_try_err,$or21,$bool32,$or14,$bool30,$bool31,$or11,$or10,$or13,$or12,x,$bool38,$bool39,$or19,$or18;
			x = ((($bool21=$or3=0) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:null);
			self['assertEqual'](x, null, $p['sprintf']('0 or None should be None not %s', $p['repr'](x)));
			x = ((($bool22=$and5=null) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?null:$and5);
			self['assertEqual'](x, null, $p['sprintf']('None or None should be None not %s', $p['repr'](x)));
			x = ((($bool23=$or5=false) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23.__nonzero__=='function'?
						$bool23.__nonzero__() :
						(typeof $bool23.__len__=='function'?
							($bool23.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:null);
			self['assertEqual'](x, null, $p['sprintf']('False or None should be None not %s', $p['repr'](x)));
			self['assertTrue']((((($bool24=$or7=1) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:2) === 1), '(1 or 2) is 1');
			self['assertTrue']((((($bool25=$or9=0) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:2) === 2), '(0 or 2) is 2');
			self['assertTrue']((((($bool26=$or11=false) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or11:0) === 0), '(False or 0) is 0');
			self['assertTrue']((((($bool27=$or13=0) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27.__nonzero__=='function'?
						$bool27.__nonzero__() :
						(typeof $bool27.__len__=='function'?
							($bool27.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or13:false) === false), '(0 or False) is False');
			self['assertTrue']((((($bool28=$and7=0) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?2:$and7) === 0), '(0 and 2) is 0');
			self['assertTrue']((((($bool29=$and9=1) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
				false :
				(typeof $bool29=='object'?
					(typeof $bool29.__nonzero__=='function'?
						$bool29.__nonzero__() :
						(typeof $bool29.__len__=='function'?
							($bool29.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?2:$and9) === 2), '(1 and 2) is 2');
			self['assertTrue']((((($bool30=$and11=2) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30.__nonzero__=='function'?
						$bool30.__nonzero__() :
						(typeof $bool30.__len__=='function'?
							($bool30.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?1:$and11) === 1), '(2 and 1) is 1');
			self['assertTrue']((($eq5=((($bool31=$and13=$p['list']([])) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31.__nonzero__=='function'?
						$bool31.__nonzero__() :
						(typeof $bool31.__len__=='function'?
							($bool31.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?2:$and13))===($eq6=$p['list']([]))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))), '([] and 2) == []');
			try {
				self['assertTrue']((($eq7=((($bool32=$and15=$p['dict']([])) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32.__nonzero__=='function'?
							$bool32.__nonzero__() :
							(typeof $bool32.__len__=='function'?
								($bool32.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?2:$and15))===($eq8=$p['dict']([]))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8))))), '({} and 2) == {}');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']("Unexpected error on '({} and 2) == {}'");
				}
			}
			try {
				self['assertTrue']((($eq9=((($bool33=$or15=0) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33.__nonzero__=='function'?
							$bool33.__nonzero__() :
							(typeof $bool33.__len__=='function'?
								($bool33.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or15:((($bool34=$or16=false) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or16:((($bool35=$or17=$p['dict']([])) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or17:$p['list']([])))))===($eq10=$p['list']([]))&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10))))), '((0 or False or {} or []) == []');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']("Unexpected error on '(0 or False or {} or []) == []'");
				}
			}
			f = null;
			try {
				self['assertTrue']((($eq11=((($bool36=$and17=f) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?f['test']():$and17))===($eq12=null)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12))))), '(f and f.test()) == None');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']("Unexpected error on '(f and f.test()) == None'");
				}
			}
			self['assertTrue'](($p['bool'](null) === false), 'bool(None) is False');
			self['assertTrue'](($p['bool'](false) === false), 'bool(False) is False');
			self['assertTrue'](($p['bool'](0) === false), 'bool(0) is False');
			self['assertTrue'](($p['bool'](0.0) === false), 'bool(0.0) is False');
			self['assertTrue'](($p['bool']('') === false), "bool('') is False");
			self['assertTrue'](($p['bool']($p['list']([])) === false), "bool('') is False");
			self['assertTrue'](($p['bool']($p['dict']([])) === false), "bool('') is False");
			self['assertTrue'](!(($bool37=(null === true)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
				false :
				(typeof $bool37=='object'?
					(typeof $bool37.__nonzero__=='function'?
						$bool37.__nonzero__() :
						(typeof $bool37.__len__=='function'?
							($bool37.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), 'not None is True');
			self['assertTrue'](!(($bool38=(false === true)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
				false :
				(typeof $bool38=='object'?
					(typeof $bool38.__nonzero__=='function'?
						$bool38.__nonzero__() :
						(typeof $bool38.__len__=='function'?
							($bool38.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), 'not False is True');
			self['assertTrue'](!(($bool39=(0 === true)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39.__nonzero__=='function'?
						$bool39.__nonzero__() :
						(typeof $bool39.__len__=='function'?
							($bool39.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), 'not 0 is True');
			self['assertTrue'](!(($bool40=(0.0 === true)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
				false :
				(typeof $bool40=='object'?
					(typeof $bool40.__nonzero__=='function'?
						$bool40.__nonzero__() :
						(typeof $bool40.__len__=='function'?
							($bool40.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), 'not 0.0 is True');
			self['assertTrue'](!(($bool41=('' === true)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is True");
			self['assertTrue'](!(($bool42=($p['list']([]) === true)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
				false :
				(typeof $bool42=='object'?
					(typeof $bool42.__nonzero__=='function'?
						$bool42.__nonzero__() :
						(typeof $bool42.__len__=='function'?
							($bool42.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is True");
			self['assertTrue'](!(($bool43=($p['dict']([]) === true)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43.__nonzero__=='function'?
						$bool43.__nonzero__() :
						(typeof $bool43.__len__=='function'?
							($bool43.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is True");
			self['assertTrue'](($p['bool'](1) === true), "bool('') is True");
			self['assertTrue'](($p['bool'](1.0) === true), "bool('') is True");
			self['assertTrue'](($p['bool']('a') === true), "bool('') is True");
			self['assertTrue'](($p['bool']($p['list']([1])) === true), "bool('') is True");
			self['assertTrue'](($p['bool']($p['dict']([['a', 1]])) === true), "bool('') is True");
			self['assertTrue'](!(($bool44=(1 === false)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
				false :
				(typeof $bool44=='object'?
					(typeof $bool44.__nonzero__=='function'?
						$bool44.__nonzero__() :
						(typeof $bool44.__len__=='function'?
							($bool44.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is False");
			self['assertTrue'](!(($bool45=(1.0 === false)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
				false :
				(typeof $bool45=='object'?
					(typeof $bool45.__nonzero__=='function'?
						$bool45.__nonzero__() :
						(typeof $bool45.__len__=='function'?
							($bool45.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is False");
			self['assertTrue'](!(($bool46=('a' === false)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
				false :
				(typeof $bool46=='object'?
					(typeof $bool46.__nonzero__=='function'?
						$bool46.__nonzero__() :
						(typeof $bool46.__len__=='function'?
							($bool46.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is False");
			self['assertTrue'](!(($bool47=($p['list']([1]) === false)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
				false :
				(typeof $bool47=='object'?
					(typeof $bool47.__nonzero__=='function'?
						$bool47.__nonzero__() :
						(typeof $bool47.__len__=='function'?
							($bool47.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is False");
			self['assertTrue'](!(($bool48=($p['dict']([['a', 1]]) === false)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
				false :
				(typeof $bool48=='object'?
					(typeof $bool48.__nonzero__=='function'?
						$bool48.__nonzero__() :
						(typeof $bool48.__len__=='function'?
							($bool48.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ), "not '' is False");
			d = $p['dict']([['hello', 5]]);
			d2 = ((($bool49=$or19=d) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49.__nonzero__=='function'?
						$bool49.__nonzero__() :
						(typeof $bool49.__len__=='function'?
							($bool49.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or19:$p['dict']([]));
			try {
				tst = (($eq13=d)===($eq14=d2)&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))));
				self['assertTrue'](tst, '#297 -non-empty object or {} should return the object');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['fail']('#297 TypeError should not have been thrown');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			d = $p['dict']([]);
			d2 = ((($bool50=$or21=d) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
				false :
				(typeof $bool50=='object'?
					(typeof $bool50.__nonzero__=='function'?
						$bool50.__nonzero__() :
						(typeof $bool50.__len__=='function'?
							($bool50.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or21:5);
			try {
				tst = (($eq15=d2)===($eq16=5)&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16)))));
				self['assertTrue'](tst, "#297 'empty object or 5' should return 5");
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['fail']('#297 TypeError should not have been thrown');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLogic'] = $method;
		$method = $pyjs__bind_method2('testRepr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['repr'](true), 'True');
			self['assertEqual']($p['repr'](false), 'False');
			self['assertEqual']($p['repr'](null), 'None');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testRepr'] = $method;
		$method = $pyjs__bind_method2('testStr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['str'](true), 'True');
			self['assertEqual']($p['str'](false), 'False');
			self['assertEqual']($p['str'](null), 'None');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStr'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('BoolTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end BoolTest */


/* end module: BoolTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/

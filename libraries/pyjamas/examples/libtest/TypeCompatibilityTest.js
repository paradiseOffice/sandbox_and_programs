/* start module: TypeCompatibilityTest */
$pyjs.loaded_modules['TypeCompatibilityTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TypeCompatibilityTest'].__was_initialized__) return $pyjs.loaded_modules['TypeCompatibilityTest'];
	var $m = $pyjs.loaded_modules["TypeCompatibilityTest"];
	$m.__repr__ = function() { return "<module: TypeCompatibilityTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TypeCompatibilityTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['write'] = $p['___import___']('write.write', null, null, false);
	$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
	$m['add'] = function(arg1, arg2) {
		var $add2,$add1;
		return (typeof ($add1=arg1)==typeof ($add2=arg2) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
	};
	$m['add'].__name__ = 'add';

	$m['add'].__bind_type__ = 0;
	$m['add'].__args__ = [null,null,['arg1'],['arg2']];
	$m['TypeCompatibilityTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TypeCompatibilityTest';
		$method = $pyjs__bind_method2('test_string_plus_number', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				$m['add']('string', 1);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['fail']('adding "string" and 1 should fail');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			try {
				$m['add'](1, 'string');
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err.__name__ == 'TryElse') {
					self['fail']('adding 1 and "string" should fail');
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_string_plus_number'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TypeCompatibilityTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end TypeCompatibilityTest */


/* end module: TypeCompatibilityTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write.write', 'write', 'write.writebr']
*/

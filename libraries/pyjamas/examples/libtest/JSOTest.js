/* start module: JSOTest */
$pyjs.loaded_modules['JSOTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['JSOTest'].__was_initialized__) return $pyjs.loaded_modules['JSOTest'];
	var $m = $pyjs.loaded_modules["JSOTest"];
	$m.__repr__ = function() { return "<module: JSOTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'JSOTest';
	$m.__name__ = __mod_name__;
	var $pyjs_try_err;

	try {
		$m['pyjslib'] = $p['___import___']('pyjslib', null);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
		$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
		if (true) {
			$m['pyjslib'] = $p['___import___']('__builtin__', null, null, false);
		}
	}
	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['Foo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'JSOTest';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Foo', $p['tuple']($bases), $data);
	})();
	$m['JSOTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'JSOTest';
		$method = $pyjs__bind_method2('testJSObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var f1,dd,d,f2;
			f1 = $m['Foo']();
			d = $p['dict']([['f1key', f1]]);
			self['assertEqual']($p['getattr']($m['pyjslib']['toJSObjects'](d), 'f1key'), f1);
			f2 = $m['Foo']();
			d = $p['dict']([['x', 1], ['y', $p['list']([1, 2, 3])], ['z', $p['dict']([['a', 3]])], ['f', f1]]);
			dd = $p['dict']([['d', d]]);
			self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($m['pyjslib']['toJSObjects'](dd), 'd'), 'z'), 'a'), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testJSObject'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSOTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end JSOTest */


/* end module: JSOTest */


/*
PYJS_DEPS: ['pyjslib', '__builtin__', 'UnitTest.UnitTest', 'UnitTest']
*/

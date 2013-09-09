/* start module: HashableTest */
$pyjs.loaded_modules['HashableTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['HashableTest'].__was_initialized__) return $pyjs.loaded_modules['HashableTest'];
	var $m = $pyjs.loaded_modules["HashableTest"];
	$m.__repr__ = function() { return "<module: HashableTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'HashableTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['Foo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'HashableTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('bar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['bar'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Foo', $p['tuple']($bases), $data);
	})();
	$m['HashableTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'HashableTest';
		$method = $pyjs__bind_method2('testMethods', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len1,foo,dMethodToInt;
			foo = $m['Foo']();
			dMethodToInt = $p['dict']([]);
			dMethodToInt.__setitem__($p['getattr'](foo, 'bar'), 5);
			dMethodToInt.__setitem__($p['getattr'](foo, 'bar'), 6);
			dMethodToInt.__setitem__($p['getattr'](foo, 'bar'), 7);
			self['assertEquals'](1, (($len1=dMethodToInt['keys']()) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))), 'Bug #656 Hashing class methods is not supported');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMethods'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HashableTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end HashableTest */


/* end module: HashableTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/

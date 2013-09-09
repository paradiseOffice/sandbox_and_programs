/* start module: foo */
$pyjs.loaded_modules['foo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['foo'].__was_initialized__) return $pyjs.loaded_modules['foo'];
	var $m = $pyjs.loaded_modules["foo"];
	$m.__repr__ = function() { return "<module: foo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'foo';
	$m.__name__ = __mod_name__;


	$m['Bar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'foo';
		$cls_definition['X'] = 1;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Bar', $p['tuple']($bases), $data);
	})();
	$m['bar'] = $m['Bar']();
	$m['foo_value'] = 1;
	$m['get_foo_value'] = function() {

		return $m['foo_value'];
	};
	$m['get_foo_value'].__name__ = 'get_foo_value';

	$m['get_foo_value'].__bind_type__ = 0;
	$m['get_foo_value'].__args__ = [null,null];
	return this;
}; /* end foo */


/* end module: foo */



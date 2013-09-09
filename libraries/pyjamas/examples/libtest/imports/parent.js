/* start module: imports.parent */
$pyjs.loaded_modules['imports.parent'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.parent'].__was_initialized__) return $pyjs.loaded_modules['imports.parent'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.parent"];
	$m.__repr__ = function() { return "<module: imports.parent>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.parent';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['imports']['parent'] = $pyjs.loaded_modules['imports.parent'];


	$m['Parent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'imports.parent';
		$method = $pyjs__bind_method2('value', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}

			return v;
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['value'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Parent', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end imports.parent */


/* end module: imports.parent */



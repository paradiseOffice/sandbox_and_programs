/* start module: imports.enumerate */
$pyjs.loaded_modules['imports.enumerate'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.enumerate'].__was_initialized__) return $pyjs.loaded_modules['imports.enumerate'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.enumerate"];
	$m.__repr__ = function() { return "<module: imports.enumerate>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enumerate';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['imports']['enumerate'] = $pyjs.loaded_modules['imports.enumerate'];


	$m['list'] = 1;
	$m['dict'] = function() {
		var tuple;
		tuple = $p['tuple']([1, 2]);
		return tuple;
	};
	$m['dict'].__name__ = 'dict';

	$m['dict'].__bind_type__ = 0;
	$m['dict'].__args__ = [null,null];
	return this;
}; /* end imports.enumerate */


/* end module: imports.enumerate */



/* start module: imports.overrideme */
$pyjs.loaded_modules['imports.overrideme'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.overrideme'].__was_initialized__) return $pyjs.loaded_modules['imports.overrideme'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.overrideme"];
	$m.__repr__ = function() { return "<module: imports.overrideme>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.overrideme';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['imports']['overrideme'] = $pyjs.loaded_modules['imports.overrideme'];


	$m['overridden'] = true;
	return this;
}; /* end imports.overrideme */


/* end module: imports.overrideme */



/* start module: builtin */
$pyjs.loaded_modules['builtin'] = function (__mod_name__) {
	if($pyjs.loaded_modules['builtin'].__was_initialized__) return $pyjs.loaded_modules['builtin'];
	var $m = $pyjs.loaded_modules["builtin"];
	$m.__repr__ = function() { return "<module: builtin>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'builtin';
	$m.__name__ = __mod_name__;


	$m['value'] = 1;
	$m['get_value'] = function() {

		return $m['value'];
	};
	$m['get_value'].__name__ = 'get_value';

	$m['get_value'].__bind_type__ = 0;
	$m['get_value'].__args__ = [null,null];
	return this;
}; /* end builtin */


/* end module: builtin */



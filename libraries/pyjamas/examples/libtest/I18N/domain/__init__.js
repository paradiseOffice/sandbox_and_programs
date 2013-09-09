/* start module: I18N.domain */
$pyjs.loaded_modules['I18N.domain'] = function (__mod_name__) {
	if($pyjs.loaded_modules['I18N.domain'].__was_initialized__) return $pyjs.loaded_modules['I18N.domain'];
	if(typeof $pyjs.loaded_modules['I18N'] == 'undefined' || !$pyjs.loaded_modules['I18N'].__was_initialized__) $p['___import___']('I18N', null);
	var $m = $pyjs.loaded_modules["I18N.domain"];
	$m.__repr__ = function() { return "<module: I18N.domain>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'I18N.domain';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['I18N']['domain'] = $pyjs.loaded_modules['I18N.domain'];


	$m['I18N'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'I18N.domain';
		$method = $pyjs__bind_method2('example', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'This is a domain example';
		}
	, 1, [null,null,['self']]);
		$cls_definition['example'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('I18N', $p['tuple']($bases), $data);
	})();
	$m['parent'] = $p['___import___']('I18N', 'I18N.domain', null, false);
	$m['i18n'] = $p['type']('I18N', $p['tuple']([$m['I18N'], $p['getattr']($m['parent'], 'I18N')]), $p['dict']([]))();
	return this;
}; /* end I18N.domain */


/* end module: I18N.domain */


/*
PYJS_DEPS: ['I18N']
*/

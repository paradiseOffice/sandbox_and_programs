/* start module: UrllibModuleTest */
$pyjs.loaded_modules['UrllibModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['UrllibModuleTest'].__was_initialized__) return $pyjs.loaded_modules['UrllibModuleTest'];
	var $m = $pyjs.loaded_modules["UrllibModuleTest"];
	$m.__repr__ = function() { return "<module: UrllibModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'UrllibModuleTest';
	$m.__name__ = __mod_name__;


	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['urllib'] = $p['___import___']('urllib', null);
	$m['UrllibModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'UrllibModuleTest';
		$method = $pyjs__bind_method2('test_quote', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($m['urllib']['quote']('hey'), 'hey');
			self['assertEqual']($pyjs_kwargs_call($m['urllib'], 'quote', null, null, [{safe:''}, '$%&/?/+ s']), '%24%25%26%2F%3F%2F%2B%20s');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_quote'] = $method;
		$method = $pyjs__bind_method2('test_urlencode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($m['urllib']['urlencode']($p['dict']([['a', 34], ['bbb', 'ccc']])), 'a=34&bbb=ccc');
			self['assertEqual']($m['urllib']['urlencode']($p['dict']([['a', 34]])), 'a=34');
			self['assertEqual']($m['urllib']['urlencode']($p['dict']([])), '');
			self['assertEqual']($m['urllib']['urlencode']($p['dict']([['a', 34], ['bbb', '$%&s']])), 'a=34&bbb=%24%25%26s');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_urlencode'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UrllibModuleTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end UrllibModuleTest */


/* end module: UrllibModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'urllib']
*/

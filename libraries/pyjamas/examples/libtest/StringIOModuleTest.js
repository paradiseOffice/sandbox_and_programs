/* start module: StringIOModuleTest */
$pyjs.loaded_modules['StringIOModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['StringIOModuleTest'].__was_initialized__) return $pyjs.loaded_modules['StringIOModuleTest'];
	var $m = $pyjs.loaded_modules["StringIOModuleTest"];
	$m.__repr__ = function() { return "<module: StringIOModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StringIOModuleTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['StringIO'] = $p['___import___']('StringIO.StringIO', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	$m['StringIOModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'StringIOModuleTest';
		$method = $pyjs__bind_method2('test_write', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var data;
			data = $m['StringIO']();
			data['write']('straight');
			self['assertEqual'](data['getvalue'](), 'straight');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_write'] = $method;
		$method = $pyjs__bind_method2('test_print', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,orig_stdout;
			orig_stdout = $p['getattr']($m['sys'], 'stdout');
			try {
				$m['sys'].stdout = $m['StringIO']();
				self['assertEqual']($m['sys']['stdout']['getvalue'](), 'stdout\n');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			} finally {
				$m['sys'].stdout = orig_stdout;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_print'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StringIOModuleTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end StringIOModuleTest */


/* end module: StringIOModuleTest */


/*
PYJS_DEPS: ['UnitTest', 'StringIO.StringIO', 'StringIO', 'sys']
*/

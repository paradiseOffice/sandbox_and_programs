/* start module: NameTest */
$pyjs.loaded_modules['NameTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['NameTest'].__was_initialized__) return $pyjs.loaded_modules['NameTest'];
	var $m = $pyjs.loaded_modules["NameTest"];
	$m.__repr__ = function() { return "<module: NameTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'NameTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['Handler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'NameTest';
		$method = $pyjs__bind_method2('__init__', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self._x = x;
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_name', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__class__'), '__name__');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_name'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Handler', $p['tuple']($bases), $data);
	})();
	$m['aProcedure'] = function() {

		return $p['getattr']($m['aProcedure'], '__name__');
	};
	$m['aProcedure'].__name__ = 'aProcedure';

	$m['aProcedure'].__bind_type__ = 0;
	$m['aProcedure'].__args__ = [null,null];
	$m['NameTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'NameTest';
		$method = $pyjs__bind_method2('testClassName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var x;
			self['assertEqual']($p['getattr']($m['Handler'], '__name__'), 'Handler');
			self['assertEqual']($p['getattr']($p['getattr']($m['Handler'], 'get_name'), '__name__'), 'get_name');
			x = $m['Handler'](5);
			self['assertEqual']($p['getattr']($p['getattr'](x, '__class__'), '__name__'), 'Handler');
			self['assertEqual']($p['getattr']($p['getattr'](x, 'get_name'), '__name__'), 'get_name');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassName'] = $method;
		$method = $pyjs__bind_method2('testProcedureName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']($p['getattr']($m['aProcedure'], '__name__'), 'aProcedure');
			self['assertEqual']($m['aProcedure'](), 'aProcedure');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testProcedureName'] = $method;
		$method = $pyjs__bind_method2('testModuleName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEqual']((typeof __name__ == "undefined"?$m.__name__:__name__), 'NameTest');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testModuleName'] = $method;
		$method = $pyjs__bind_method2('testImportName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,foo;
			a = $p['___import___']('foo', null, null, false);
			self['assertEqual']($p['getattr'](a, '__name__'), 'foo');
			foo = $p['object']();
			foo = $p['___import___']('foo', null);
			self['assertEqual']($p['getattr'](foo, '__name__'), 'foo');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testImportName'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NameTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end NameTest */


/* end module: NameTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'foo']
*/

/* start module: Base64ModuleTest */
$pyjs.loaded_modules['Base64ModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Base64ModuleTest'].__was_initialized__) return $pyjs.loaded_modules['Base64ModuleTest'];
	var $m = $pyjs.loaded_modules["Base64ModuleTest"];
	$m.__repr__ = function() { return "<module: Base64ModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Base64ModuleTest';
	$m.__name__ = __mod_name__;


	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['base64'] = $p['___import___']('base64', null);
	$m['Base64ModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Base64ModuleTest';
		$method = $pyjs__bind_method2('testBase64', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,decodetext,encodetext;
			text = 'Pyjamas is fun';
			encodetext = $m['base64']['encodestring'](text);
			self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=\n');
			decodetext = $m['base64']['decodestring'](encodetext);
			self['assertEqual'](decodetext, text);
			encodetext = $m['base64']['b64encode'](text);
			self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=');
			decodetext = $m['base64']['b64decode'](encodetext);
			self['assertEqual'](decodetext, text);
			encodetext = $m['base64']['standard_b64encode'](text);
			self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=');
			decodetext = $m['base64']['standard_b64decode'](encodetext);
			self['assertEqual'](decodetext, text);
			encodetext = $m['base64']['urlsafe_b64encode'](text);
			self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=');
			decodetext = $m['base64']['urlsafe_b64decode'](encodetext);
			self['assertEqual'](decodetext, text);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBase64'] = $method;
		$method = $pyjs__bind_method2('testBase32', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,decodetext,encodetext;
			text = 'Pyjamas is fun';
			encodetext = $m['base64']['b32encode'](text);
			self['assertEqual'](encodetext, 'KB4WUYLNMFZSA2LTEBTHK3Q=');
			decodetext = $m['base64']['b32decode'](encodetext);
			self['assertEqual'](decodetext, text);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBase32'] = $method;
		$method = $pyjs__bind_method2('testBase16', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,decodetext,encodetext;
			text = 'Pyjamas is fun';
			encodetext = $m['base64']['b16encode'](text);
			self['assertEqual'](encodetext, '50796A616D61732069732066756E');
			decodetext = $m['base64']['b16decode'](encodetext);
			self['assertEqual'](decodetext, text);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBase16'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Base64ModuleTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Base64ModuleTest */


/* end module: Base64ModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'base64']
*/

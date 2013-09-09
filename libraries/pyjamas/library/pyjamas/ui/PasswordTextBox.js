/* start module: pyjamas.ui.PasswordTextBox */
$pyjs.loaded_modules['pyjamas.ui.PasswordTextBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.PasswordTextBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.PasswordTextBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.PasswordTextBox"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.PasswordTextBox>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.PasswordTextBox';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['PasswordTextBox'] = $pyjs.loaded_modules['pyjamas.ui.PasswordTextBox'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', null, false);
	$m['PasswordTextBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.PasswordTextBox';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var ka = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					var ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $bool1,$or1,$or2;
			ka.__setitem__('Element', ((($bool1=$or1=ka['get']('Element', null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createInputPassword']()));
			ka.__setitem__('StyleName', ka['get']('StyleName', 'gwt-PasswordTextBox'));
			$pyjs_kwargs_call($m['TextBox'], '__init__', null, ka, [{}, self]);
			return null;
		}
	, 1, [null,['ka'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TextBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PasswordTextBox', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.PasswordTextBox', 'PasswordTextBox', $m['PasswordTextBox']);
	return this;
}; /* end pyjamas.ui.PasswordTextBox */


/* end module: pyjamas.ui.PasswordTextBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', 'pyjamas.ui.TextBox']
*/

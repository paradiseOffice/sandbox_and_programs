/* start module: pyjamas.ui.VerticalSplitPanel */
$pyjs.loaded_modules['pyjamas.ui.VerticalSplitPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.VerticalSplitPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.VerticalSplitPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.VerticalSplitPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.VerticalSplitPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalSplitPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['VerticalSplitPanel'] = $pyjs.loaded_modules['pyjamas.ui.VerticalSplitPanel'];


	$m['SplitPanel'] = $p['___import___']('pyjamas.ui.SplitPanel.SplitPanel', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['VerticalSplitPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.VerticalSplitPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['SplitPanel'], '__init__', null, kwargs, [{vertical:true}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setTopWidget', function(topWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				topWidget = arguments[1];
			}

			self['setWidget'](0, topWidget);
			return null;
		}
	, 1, [null,null,['self'],['topWidget']]);
		$cls_definition['setTopWidget'] = $method;
		$method = $pyjs__bind_method2('getTopWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getWidget'](0);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTopWidget'] = $method;
		$method = $pyjs__bind_method2('setBottomWidget', function(botWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				botWidget = arguments[1];
			}

			self['setWidget'](1, botWidget);
			return null;
		}
	, 1, [null,null,['self'],['botWidget']]);
		$cls_definition['setBottomWidget'] = $method;
		$method = $pyjs__bind_method2('getBottomWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getWidget'](1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBottomWidget'] = $method;
		var $bases = new Array($m['SplitPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalSplitPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.VerticalSplitPanel', 'VerticalSplitPanel', $m['VerticalSplitPanel']);
	return this;
}; /* end pyjamas.ui.VerticalSplitPanel */


/* end module: pyjamas.ui.VerticalSplitPanel */


/*
PYJS_DEPS: ['pyjamas.ui.SplitPanel.SplitPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.SplitPanel', 'pyjamas.Factory']
*/

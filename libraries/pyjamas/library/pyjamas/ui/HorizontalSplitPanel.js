/* start module: pyjamas.ui.HorizontalSplitPanel */
$pyjs.loaded_modules['pyjamas.ui.HorizontalSplitPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HorizontalSplitPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HorizontalSplitPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HorizontalSplitPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HorizontalSplitPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HorizontalSplitPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['HorizontalSplitPanel'] = $pyjs.loaded_modules['pyjamas.ui.HorizontalSplitPanel'];


	$m['SplitPanel'] = $p['___import___']('pyjamas.ui.SplitPanel.SplitPanel', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['HorizontalSplitPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.HorizontalSplitPanel';
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

			$pyjs_kwargs_call($m['SplitPanel'], '__init__', null, kwargs, [{vertical:false}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setLeftWidget', function(leftWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				leftWidget = arguments[1];
			}

			self['setWidget'](0, leftWidget);
			return null;
		}
	, 1, [null,null,['self'],['leftWidget']]);
		$cls_definition['setLeftWidget'] = $method;
		$method = $pyjs__bind_method2('getLeftWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getWidget'](0);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLeftWidget'] = $method;
		$method = $pyjs__bind_method2('setRightWidget', function(rightWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rightWidget = arguments[1];
			}

			self['setWidget'](1, rightWidget);
			return null;
		}
	, 1, [null,null,['self'],['rightWidget']]);
		$cls_definition['setRightWidget'] = $method;
		$method = $pyjs__bind_method2('getRightWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getWidget'](1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRightWidget'] = $method;
		var $bases = new Array($m['SplitPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HorizontalSplitPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HorizontalSplitPanel', 'HorizontalSplitPanel', $m['HorizontalSplitPanel']);
	return this;
}; /* end pyjamas.ui.HorizontalSplitPanel */


/* end module: pyjamas.ui.HorizontalSplitPanel */


/*
PYJS_DEPS: ['pyjamas.ui.SplitPanel.SplitPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.SplitPanel', 'pyjamas.Factory']
*/

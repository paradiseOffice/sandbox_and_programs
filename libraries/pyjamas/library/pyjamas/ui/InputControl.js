/* start module: pyjamas.ui.InputControl */
$pyjs.loaded_modules['pyjamas.ui.InputControl'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.InputControl'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.InputControl'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.InputControl"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.InputControl>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InputControl';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['InputControl'] = $pyjs.loaded_modules['pyjamas.ui.InputControl'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', null, false);
	$m['Control'] = $p['___import___']('pyjamas.ui.Control.Control', 'pyjamas.ui', null, false);
	$m['InputControl'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.InputControl';
		$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value, step) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				min_value = arguments[1];
				max_value = arguments[2];
				start_value = arguments[3];
				step = arguments[4];
				var kwargs = arguments.length >= 6 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof step != 'undefined') {
					if (step !== null && typeof step['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = step;
						step = arguments[5];
					}
				} else 				if (typeof start_value != 'undefined') {
					if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = start_value;
						start_value = arguments[5];
					}
				} else 				if (typeof max_value != 'undefined') {
					if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = max_value;
						max_value = arguments[5];
					}
				} else 				if (typeof min_value != 'undefined') {
					if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = min_value;
						min_value = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof start_value == 'undefined') start_value=arguments.callee.__args__[5][1];
			if (typeof step == 'undefined') step=arguments.callee.__args__[6][1];
			var element,$bool2,$bool3,$bool1;
			if ((($bool2=!(($bool1=kwargs['has_key']('StyleName')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				kwargs.__setitem__('StyleName', 'gwt-InputControl');
			}
			self.input = $m['TextBox']();
			self['input']['addKeyboardListener'](self);
			if ((($bool3=kwargs['has_key']('Element')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				element = kwargs['pop']('Element');
			}
			else {
				element = self['input']['getElement']();
			}
			$pyjs_kwargs_call($m['Control'], '__init__', null, kwargs, [{}, self, element, min_value, max_value, start_value, step]);
			self['addClickListener'](self);
			self['addFocusListener'](self);
			self['addKeyboardListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null],['step', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['addStyleName']('gwt-InputControl-focussed');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method2('onLostFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['removeStyleName']('gwt-InputControl-focussed');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		$method = $pyjs__bind_method2('setControlPos', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['input']['setText'](value);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setControlPos'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $eq2,$eq1,$bool6,$bool4,$bool5,new_value,txt;
			if ((($bool4=(($eq1=keycode)===($eq2=$p['getattr']($m['KeyboardListener'], 'KEY_ENTER'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
				txt = self['input']['getText']();
				if ((($bool6=!(($bool5=txt) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				new_value = $p['float'](txt);
				new_value = self['processValue'](new_value);
				self['setControlPos'](new_value);
				self['setValue'](new_value);
			}
			else {
				$m['Control']['onKeyPress'](self, sender, keycode, modifiers);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		var $bases = new Array($m['Control']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InputControl', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.InputControl', 'InputControl', $m['InputControl']);
	return this;
}; /* end pyjamas.ui.InputControl */


/* end module: pyjamas.ui.InputControl */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Control.Control', 'pyjamas.ui.Control']
*/

/* start module: pyjamas.ui.Composite */
$pyjs.loaded_modules['pyjamas.ui.Composite'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Composite'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Composite'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Composite"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Composite>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Composite';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Composite'] = $pyjs.loaded_modules['pyjamas.ui.Composite'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['Composite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Composite';
		$method = $pyjs__bind_method2('__init__', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				widget = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof widget != 'undefined') {
					if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = widget;
						widget = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof widget == 'undefined') widget=arguments.callee.__args__[3][1];
			var $bool1;
			self.widget = null;
			self.attached = null;
			if ((($bool1=(widget !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['initWidget'](widget);
			}
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['widget', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('initWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $bool2;
			if ((($bool2=($p['getattr'](self, 'widget') !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return null;
			}
			widget['removeFromParent']();
			self['setElement'](widget['getElement']());
			self.widget = widget;
			widget['setParent'](self);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['initWidget'] = $method;
		$method = $pyjs__bind_method2('isAttached', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool3;
			if ((($bool3=($p['getattr'](self, 'widget') !== null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return self['widget']['isAttached']();
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAttached'] = $method;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['widget']['onAttach']();
			$m['DOM']['setEventListener'](self['getElement'](), self);
			self['onLoad']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['widget']['onDetach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['initWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['Widget']['onBrowserEvent'](self, event);
			self['widget']['onBrowserEvent'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Composite', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Composite', 'Composite', $m['Composite']);
	return this;
}; /* end pyjamas.ui.Composite */


/* end module: pyjamas.ui.Composite */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget']
*/

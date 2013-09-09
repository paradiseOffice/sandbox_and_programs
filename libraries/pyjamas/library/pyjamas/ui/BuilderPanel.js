/* start module: pyjamas.ui.BuilderPanel */
$pyjs.loaded_modules['pyjamas.ui.BuilderPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.BuilderPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.BuilderPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.BuilderPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.BuilderPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.BuilderPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['BuilderPanel'] = $pyjs.loaded_modules['pyjamas.ui.BuilderPanel'];


	$m['BuilderWidget'] = $p['___import___']('pyjamas.ui.BuilderWidget.BuilderWidget', 'pyjamas.ui', null, false);
	$m['BuilderPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.BuilderPanel';
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

			self.panel_instance_name = null;
			$pyjs_kwargs_call($m['BuilderWidget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(child_instance_name) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				child_instance_name = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof child_instance_name != 'undefined') {
					if (child_instance_name !== null && typeof child_instance_name['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = child_instance_name;
						child_instance_name = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var widget;
			widget = self['b']['createInstance'](child_instance_name, $p['getattr'](self, 'event_receiver'));
			$pyjs_kwargs_call(self['getPanel'](), 'add', args, kwargs, [{}, widget]);
			return widget;
		}
	, 1, ['args',['kwargs'],['self'],['child_instance_name']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('insert', function(child_instance_name) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				child_instance_name = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof child_instance_name != 'undefined') {
					if (child_instance_name !== null && typeof child_instance_name['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = child_instance_name;
						child_instance_name = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var widget;
			widget = self['b']['createInstance'](child_instance_name, $p['getattr'](self, 'event_receiver'));
			$pyjs_kwargs_call(self['getPanel'](), 'insert', args, kwargs, [{}, widget]);
			return widget;
		}
	, 1, ['args',['kwargs'],['self'],['child_instance_name']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				widget = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
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

			$pyjs_kwargs_call(self['getPanel'](), 'remove', args, kwargs, [{}, widget]);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['b']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('getChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['b']['getChildren']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChildren'] = $method;
		$method = $pyjs__bind_method2('setPanelInstanceName', function(panel_instance_name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel_instance_name = arguments[1];
			}

			self.panel_instance_name = panel_instance_name;
			return null;
		}
	, 1, [null,null,['self'],['panel_instance_name']]);
		$cls_definition['setPanelInstanceName'] = $method;
		$method = $pyjs__bind_method2('getPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1,wids,$4,$2,$3,$1;
			if ((($bool1=($p['getattr'](self, 'panel_instance_name') === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return $p['getattr'](self, 'widget');
			}
			wids = (typeof ($1=$p['getattr']($p['getattr'](self, 'b'), 'widget_instances')).__array != 'undefined'?
				((typeof $1.__array[$2=$p['getattr'](self, 'instance_name')]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($p['getattr'](self, 'instance_name')));
			return (typeof ($3=wids).__array != 'undefined'?
				((typeof $3.__array[$4=$p['getattr'](self, 'panel_instance_name')]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__($p['getattr'](self, 'panel_instance_name')));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPanel'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, instance_name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				instance_name = arguments[2];
			}
			var widget;
			widget = self['b']['createInstance']((typeof child_instance_name == "undefined"?$m.child_instance_name:child_instance_name), $p['getattr'](self, 'event_receiver'));
			self['getPanel']()['addIndexedItem'](index, widget);
			return null;
		}
	, 1, [null,null,['self'],['index'],['instance_name']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getPanel']()['getIndexedChild'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('getWidgetIndex', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			return self['getPanel']()['getWidgetIndex'](widget);
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method2('getWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			return $pyjs_kwargs_call(self['getPanel'](), 'getWidget', args, null, [{}]);
		}
	, 1, ['args',null,['self']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method2('getWidgetCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getPanel']()['getWidgetCount']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidgetCount'] = $method;
		$method = $pyjs__bind_method2('setWidgetPosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			return $pyjs_kwargs_call(self['getPanel'](), 'setWidgetPosition', args, null, [{}]);
		}
	, 1, ['args',null,['self']]);
		$cls_definition['setWidgetPosition'] = $method;
		var $bases = new Array($m['BuilderWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('BuilderPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.BuilderPanel */


/* end module: pyjamas.ui.BuilderPanel */


/*
PYJS_DEPS: ['pyjamas.ui.BuilderWidget.BuilderWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.BuilderWidget']
*/

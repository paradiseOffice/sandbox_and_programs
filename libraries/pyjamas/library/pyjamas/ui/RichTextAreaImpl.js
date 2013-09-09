/* start module: pyjamas.ui.RichTextAreaImpl */
$pyjs.loaded_modules['pyjamas.ui.RichTextAreaImpl'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.RichTextAreaImpl'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.RichTextAreaImpl'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.RichTextAreaImpl"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.RichTextAreaImpl>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RichTextAreaImpl';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['RichTextAreaImpl'] = $pyjs.loaded_modules['pyjamas.ui.RichTextAreaImpl'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	$m['RichTextAreaImpl'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.RichTextAreaImpl';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.elem = self['createElement']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'elem');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getElementProperty']($p['getattr'](self, 'elem'), 'value');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getElementProperty']($p['getattr'](self, 'elem'), 'value');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('initElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			(typeof onElementInitialized == "undefined"?$m.onElementInitialized:onElementInitialized)();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initElement'] = $method;
		$method = $pyjs__bind_method2('isBasicEditingSupported', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isBasicEditingSupported'] = $method;
		$method = $pyjs__bind_method2('isExtendedEditingSupported', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isExtendedEditingSupported'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			$m['DOM']['setElementProperty']($p['getattr'](self, 'elem'), 'value', html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setElementProperty']($p['getattr'](self, 'elem'), 'value', text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('uninitElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['uninitElement'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}
			var $bool1;
			if ((($bool1=focused) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$m['Focus']['focus'](self['getElement']());
			}
			else {
				$m['Focus']['blur'](self['getElement']());
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['createTextArea']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('hookEvents', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['sinkEvents']($p['getattr'](self, 'elem'), ($p['getattr']($m['Event'], 'MOUSEEVENTS'))|($p['getattr']($m['Event'], 'KEYEVENTS'))|($p['getattr']($m['Event'], 'ONCHANGE'))|($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'FOCUSEVENTS')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hookEvents'] = $method;
		$method = $pyjs__bind_method2('onElementInitialized', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['hookEvents']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onElementInitialized'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RichTextAreaImpl', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.RichTextAreaImpl */


/* end module: pyjamas.ui.RichTextAreaImpl */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Focus']
*/

/* start module: pyjamas.Canvas2D */
$pyjs.loaded_modules['pyjamas.Canvas2D'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas2D'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas2D'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas2D"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas2D>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas2D';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Canvas2D'] = $pyjs.loaded_modules['pyjamas.Canvas2D'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', 'pyjamas', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas', null, false);
	$m['FocusListener'] = $p['___import___']('pyjamas.ui.FocusListener', 'pyjamas', null, false);
	$m['Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.Canvas2D';
		$method = $pyjs__bind_method2('__init__', function(Width, Height) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				Width = arguments[1];
				Height = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Height != 'undefined') {
					if (Height !== null && typeof Height['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Height;
						Height = arguments[3];
					}
				} else 				if (typeof Width != 'undefined') {
					if (Width !== null && typeof Width['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Width;
						Width = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof Width == 'undefined') Width=arguments.callee.__args__[3][1];
			if (typeof Height == 'undefined') Height=arguments.callee.__args__[4][1];
			var focusable,$bool2,$bool1;
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
				kwargs.__setitem__('StyleName', 'gwt-Canvas');
			}
			kwargs.__setitem__('Width', Width);
			kwargs.__setitem__('Height', Height);
			self.context = null;
			focusable = $m['Focus']['createFocusable']();
			self.canvas = $m['DOM']['createElement']('canvas');
			$m['DOM']['appendChild'](focusable, $p['getattr'](self, 'canvas'));
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, focusable]);
			self['init']();
			$p['getattr'](self, 'context').fillStyle = 'black';
			$p['getattr'](self, 'context').strokeStyle = 'black';
			return null;
		}
	, 1, [null,['kwargs'],['self'],['Width', 0],['Height', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			$m['FocusWidget']['setWidth'](self, width);
			$p['getattr'](self, 'canvas').width = width;
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method2('setHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			$m['FocusWidget']['setHeight'](self, height);
			$p['getattr'](self, 'canvas').height = height;
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method2('getContext', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'context');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContext'] = $method;
		$method = $pyjs__bind_method2('isEmulation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmulation'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var el,ctx;
			el = $p['getattr'](self['getElement'](), 'firstChild');
			ctx = el['getContext']('2d');
			self.context = ctx;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		var $bases = new Array($m['FocusWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
	})();
	$m['CanvasImage'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.Canvas2D';
		$method = $pyjs__bind_method2('__init__', function(url, load_listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				load_listener = arguments[2];
			}
			if (typeof url == 'undefined') url=arguments.callee.__args__[3][1];
			if (typeof load_listener == 'undefined') load_listener=arguments.callee.__args__[4][1];
			var $bool3;
			$m['Image']['__init__'](self, url);
			if ((($bool3=load_listener) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['addLoadListener'](load_listener);
			}
			self['onAttach']();
			return null;
		}
	, 1, [null,null,['self'],['url', ''],['load_listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isLoaded', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'complete');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isLoaded'] = $method;
		var $bases = new Array($m['Image']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CanvasImage', $p['tuple']($bases), $data);
	})();
	$m['ImageLoadListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.Canvas2D';
		$method = $pyjs__bind_method2('__init__', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[3][1];
			var $bool4;
			self.wait_list = $p['list']([]);
			self.loadListeners = $p['list']([]);
			if ((($bool4=listener) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['addLoadListener'](listener);
			}
			return null;
		}
	, 1, [null,null,['self'],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['wait_list']['append'](sender);
			sender['addLoadListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addLoadListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addLoadListener'] = $method;
		$method = $pyjs__bind_method2('isLoaded', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool5,$len1;
			if ((($bool5=(($len1=$p['getattr'](self, 'wait_list')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isLoaded'] = $method;
		$method = $pyjs__bind_method2('onError', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,listener,$iter1_array;
			$iter1_iter = $p['getattr'](self, 'loadListeners');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				listener['onError'](sender);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onLoad', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$bool6,$iter2_array;
			self['wait_list']['remove'](sender);
			if ((($bool6=self['isLoaded']()) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$iter2_iter = $p['getattr'](self, 'loadListeners');
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					listener = $iter2_nextval;
					listener['onLoad'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageLoadListener', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas2D */


/* end module: pyjamas.Canvas2D */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Focus', 'pyjamas.ui.FocusListener']
*/

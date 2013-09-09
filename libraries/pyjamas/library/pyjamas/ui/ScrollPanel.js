/* start module: pyjamas.ui.ScrollPanel */
$pyjs.loaded_modules['pyjamas.ui.ScrollPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ScrollPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ScrollPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ScrollPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ScrollPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ScrollPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['ScrollPanel'] = $pyjs.loaded_modules['pyjamas.ui.ScrollPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['ScrollPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.ScrollPanel';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['always', 'Always show scroll bars', 'AlwaysShowScrollBars', null]), $p['tuple'](['position', 'Vertical Scroll Position', 'ScrollPosition', null]), $p['tuple'](['horizPos', 'Horizontal Scroll Position', 'HorizontalScrollPosition', null])]);
		$method = $pyjs__bind_method2('__init__', function(child) {
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
				child = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof child != 'undefined') {
					if (child !== null && typeof child['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = child;
						child = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof child == 'undefined') child=arguments.callee.__args__[3][1];
			var $bool2,$bool3,$bool1;
			self.scrollListeners = $p['list']([]);
			if ((($bool1=(child !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				kwargs.__setitem__('Widget', child);
			}
			if ((($bool3=!(($bool2=kwargs['has_key']('AlwaysShowScrollBars')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				kwargs.__setitem__('AlwaysShowScrollBars', false);
			}
			$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONSCROLL'));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['child', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1;
			return (typeof ($add1=$m['SimplePanel']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				item = arguments[2];
			}

			self['setWidget'](item);
			return null;
		}
	, 1, [null,null,['self'],['index'],['item']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('getWidgetIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getWidget']();
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('addScrollListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['scrollListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addScrollListener'] = $method;
		$method = $pyjs__bind_method2('ensureVisible', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var scroll,element;
			scroll = self['getElement']();
			element = item['getElement']();
			self['ensureVisibleImpl'](scroll, element);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['ensureVisible'] = $method;
		$method = $pyjs__bind_method2('getScrollPosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'scrollTop');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollPosition'] = $method;
		$method = $pyjs__bind_method2('getHorizontalScrollPosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'scrollLeft');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalScrollPosition'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$eq2,$eq1,$iter1_iter,listener,$iter1_array,$bool4,type,$iter1_idx;
			type = $m['DOM']['eventGetType'](event);
			if ((($bool4=(($eq1=type)===($eq2='scroll')&&$eq1===null?true:
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
				$iter1_iter = $p['getattr'](self, 'scrollListeners');
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					listener['onScroll'](self, self['getHorizontalScrollPosition'](), self['getScrollPosition']());
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('removeScrollListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['scrollListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeScrollListener'] = $method;
		$method = $pyjs__bind_method2('setAlwaysShowScrollBars', function(alwaysShow) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alwaysShow = arguments[1];
			}
			var style,$bool5;
			if ((($bool5=alwaysShow) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				style = 'scroll';
			}
			else {
				style = 'auto';
			}
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'overflow', style);
			return null;
		}
	, 1, [null,null,['self'],['alwaysShow']]);
		$cls_definition['setAlwaysShowScrollBars'] = $method;
		$method = $pyjs__bind_method2('setScrollPosition', function(position) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				position = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'scrollTop', position);
			return null;
		}
	, 1, [null,null,['self'],['position']]);
		$cls_definition['setScrollPosition'] = $method;
		$method = $pyjs__bind_method2('setHorizontalScrollPosition', function(position) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				position = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'scrollLeft', position);
			return null;
		}
	, 1, [null,null,['self'],['position']]);
		$cls_definition['setHorizontalScrollPosition'] = $method;
		$method = $pyjs__bind_method2('ensureVisibleImpl', function(scroll, e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				scroll = arguments[1];
				e = arguments[2];
			}
			var $and2,$div1,realOffset,$and1,$eq4,$sub1,item,$bool6,$bool7,$add4,$eq3,$div2,$sub2,$bool8,$bool9,$add3;
			if ((($bool7=!(($bool6=e) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			item = e;
			realOffset = 0;
			while ((($bool9=((($bool8=$and1=item) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($eq3=item)===($eq4=scroll)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				realOffset = (typeof ($add3=realOffset)==typeof ($add4=$p['getattr'](item, 'offsetTop')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				item = $p['getattr'](item, 'offsetParent');
			}
			scroll.scrollTop = (typeof ($sub1=realOffset)==typeof ($sub2=(typeof ($div1=$p['getattr'](scroll, 'offsetHeight'))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			return null;
		}
	, 1, [null,null,['self'],['scroll'],['e']]);
		$cls_definition['ensureVisibleImpl'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ScrollPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.ScrollPanel', 'ScrollPanel', $m['ScrollPanel']);
	return this;
}; /* end pyjamas.ui.ScrollPanel */


/* end module: pyjamas.ui.ScrollPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Event']
*/

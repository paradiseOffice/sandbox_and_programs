/* start module: pyjamas.ui.Tree */
$pyjs.loaded_modules['pyjamas.ui.Tree'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Tree'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Tree'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Tree"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Tree>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Tree';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Tree'] = $pyjs.loaded_modules['pyjamas.ui.Tree'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Set'] = $p['___import___']('sets.Set', 'pyjamas.ui', null, false);
	$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.ui');
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	$m['RootTreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.RootTreeItem', 'pyjamas.ui', null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui', null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', 'pyjamas.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	$m['FocusListener'] = $p['___import___']('pyjamas.ui.FocusListener', 'pyjamas.ui', null, false);
	$m['Tree'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Tree';
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
			var $or1,$or2,element,$bool1;
			ka.__setitem__('StyleName', ka['get']('StyleName', 'gwt-Tree'));
			self.root = null;
			self.childWidgets = $m['Set']();
			self.curSelection = null;
			self.focusable = null;
			self.focusListeners = $p['list']([]);
			self.mouseListeners = $p['list']([]);
			self.imageBase = $m['pygwt']['getModuleBaseURL']();
			self.keyboardListeners = $p['list']([]);
			self.listeners = $p['list']([]);
			self.lastEventType = '';
			element = ((($bool1=$or1=ka['pop']('Element', null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createDiv']());
			self['setElement'](element);
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'position', 'relative');
			self.focusable = $m['Focus']['createFocusable']();
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'focusable'), 'outline', '0px');
			$m['DOM']['setElemAttribute']($p['getattr'](self, 'focusable'), 'hideFocus', 'true');
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'focusable'), 'fontSize', '0');
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'focusable'), 'position', 'absolute');
			$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'focusable'), 'zIndex', (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'focusable'));
			self.root = $m['RootTreeItem']();
			self['root']['setTree'](self);
			$pyjs_kwargs_call($m['Widget'], '__init__', null, ka, [{}, self]);
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONMOUSEDOWN'))|($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'KEYEVENTS')));
			$m['DOM']['sinkEvents']($p['getattr'](self, 'focusable'), $p['getattr']($m['Event'], 'FOCUSEVENTS'));
			return null;
		}
	, 1, [null,['ka'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['addItem'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addFocusListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['focusListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addFocusListener'] = $method;
		$method = $pyjs__bind_method2('addItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			return self['insertItem'](item);
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['addItem'] = $method;
		$method = $pyjs__bind_method2('insertItem', function(item, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				index = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments.callee.__args__[4][1];
			var $bool3,ret,$bool2;
			if ((($bool2=$p['isinstance'](item, $p['basestring'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				item = $m['TreeItem'](item);
			}
			ret = self['root']['addItem'](item);
			if ((($bool3=(index === null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['DOM']['appendChild'](self['getElement'](), item['getElement']());
			}
			else {
				$m['DOM']['insertChild'](self['getElement'](), item['getElement'](), index);
			}
			return ret;
		}
	, 1, [null,null,['self'],['item'],['index', null]]);
		$cls_definition['insertItem'] = $method;
		$method = $pyjs__bind_method2('addKeyboardListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['keyboardListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addKeyboardListener'] = $method;
		$method = $pyjs__bind_method2('addMouseListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['mouseListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addMouseListener'] = $method;
		$method = $pyjs__bind_method2('addTreeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTreeListener'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$iter1_array,$sub2,$sub1,size;
			size = self['root']['getChildCount']();
			$iter1_iter = $p['range'](size, 0, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['root']['getChild']((typeof ($sub1=i)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))['remove']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('ensureSelectedItemVisible', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var parent,$bool4,$bool5;
			if ((($bool4=($p['getattr'](self, 'curSelection') === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return null;
			}
			parent = self['curSelection']['getParentItem']();
			while ((($bool5=(parent !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				parent['setState'](true);
				parent = parent['getParentItem']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['ensureSelectedItemVisible'] = $method;
		$method = $pyjs__bind_method2('getImageBase', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'imageBase');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageBase'] = $method;
		$method = $pyjs__bind_method2('getItem', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['root']['getChild'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getItem'] = $method;
		$method = $pyjs__bind_method2('getItemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['root']['getChildCount']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getItemCount'] = $method;
		$method = $pyjs__bind_method2('getSelectedItem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'curSelection');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedItem'] = $method;
		$method = $pyjs__bind_method2('getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['Focus']['getTabIndex']($p['getattr'](self, 'focusable'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['root']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool18,$bool19,chain,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$eq18,$eq19,$eq28,$eq10,$eq11,$eq12,$eq13,$eq14,$eq16,$eq17,$eq15,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$eq3,etype,$bool22,$bool28,$or4,$eq8,$eq9,$or3,$eq2,$and1,$and2,$eq1,$eq6,$eq7,$eq4,$eq5,$eq21,$eq20,$eq23,$eq22,$bool6,$bool7,$eq27,$eq26,$cmp1,$bool8,$bool9,keycode,e,$cmp2,item,$eq25,$eq24;
			etype = $m['DOM']['eventGetType'](event);
			if ((($bool6=(($eq1=etype)===($eq2='click')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				e = $m['DOM']['eventGetTarget'](event);
				if ((($bool9=((($bool8=$and1=!(($bool7=self['shouldTreeDelegateFocusToElement'](e)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?($p['getattr'](self, 'curSelection') !== null):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['setFocus'](true);
				}
			}
			else if ((($bool10=$p['getattr']($m['MouseListener'], 'MOUSE_EVENTS').__contains__(etype)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool11=(($eq3=etype)===($eq4='mousedown')&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['elementClicked']($p['getattr'](self, 'root'), $m['DOM']['eventGetTarget'](event));
				}
				$m['MouseListener']['fireMouseEvent']($p['getattr'](self, 'mouseListeners'), self, event);
			}
			else if ((($bool13=((($bool12=$or3=(($eq5=etype)===($eq6='blur')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12.__nonzero__=='function'?
						$bool12.__nonzero__() :
						(typeof $bool12.__len__=='function'?
							($bool12.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:(($eq7=etype)===($eq8='focus')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['FocusListener']['fireFocusEvent']($p['getattr'](self, 'focusListeners'), self, event);
			}
			else if ((($bool14=(($eq9=etype)===($eq10='keydown')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool15=($p['getattr'](self, 'curSelection') === null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool16=((($cmp1=self['root']['getChildCount']())===($cmp2=0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16.__nonzero__=='function'?
									$bool16.__nonzero__() :
									(typeof $bool16.__len__=='function'?
										($bool16.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['onSelection'](self['root']['getChild'](0), true);
					}
					$m['Widget']['onBrowserEvent'](self, event);
					return null;
				}
				if ((($bool17=(($eq11=$p['getattr'](self, 'lastEventType'))===($eq12='keydown')&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				keycode = $m['DOM']['eventGetKeyCode'](event);
				if ((($bool18=(($eq13=keycode)===($eq14=$p['getattr']($m['KeyboardListener'], 'KEY_UP'))&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['moveSelectionUp']($p['getattr'](self, 'curSelection'), true);
					$m['DOM']['eventPreventDefault'](event);
				}
				else if ((($bool19=(($eq15=keycode)===($eq16=$p['getattr']($m['KeyboardListener'], 'KEY_DOWN'))&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['moveSelectionDown']($p['getattr'](self, 'curSelection'), true);
					$m['DOM']['eventPreventDefault'](event);
				}
				else if ((($bool20=(($eq17=keycode)===($eq18=$p['getattr']($m['KeyboardListener'], 'KEY_LEFT'))&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool21=self['curSelection']['getState']()) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
							false :
							(typeof $bool21=='object'?
								(typeof $bool21.__nonzero__=='function'?
									$bool21.__nonzero__() :
									(typeof $bool21.__len__=='function'?
										($bool21.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['curSelection']['setState'](false);
					}
					$m['DOM']['eventPreventDefault'](event);
				}
				else if ((($bool22=(($eq19=keycode)===($eq20=$p['getattr']($m['KeyboardListener'], 'KEY_RIGHT'))&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool24=!(($bool23=self['curSelection']['getState']()) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
							false :
							(typeof $bool24=='object'?
								(typeof $bool24.__nonzero__=='function'?
									$bool24.__nonzero__() :
									(typeof $bool24.__len__=='function'?
										($bool24.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['curSelection']['setState'](true);
					}
					$m['DOM']['eventPreventDefault'](event);
				}
			}
			else if ((($bool25=(($eq21=etype)===($eq22='keyup')&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool26=(($eq23=$m['DOM']['eventGetKeyCode'](event))===($eq24=$p['getattr']($m['KeyboardListener'], 'KEY_TAB'))&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					chain = $p['list']([]);
					self['collectElementChain'](chain, self['getElement'](), $m['DOM']['eventGetTarget'](event));
					item = self['findItemByChain'](chain, 0, $p['getattr'](self, 'root'));
					if ((($bool27=!(($eq25=item)===($eq26=self['getSelectedItem']())&&$eq25===null?true:
						($eq25===null?false:($eq26===null?false:
							((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
								((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
									$eq25==$eq26)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
							false :
							(typeof $bool27=='object'?
								(typeof $bool27.__nonzero__=='function'?
									$bool27.__nonzero__() :
									(typeof $bool27.__len__=='function'?
										($bool27.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['setSelectedItem'](item, true);
					}
				}
			}
			else if ((($bool28=(($eq27=etype)===($eq28='keypress')&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['KeyboardListener']['fireKeyboardEvent']($p['getattr'](self, 'keyboardListeners'), self, event);
			}
			$m['Widget']['onBrowserEvent'](self, event);
			self.lastEventType = etype;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			throw ($p['Exception']('Widgets should never be directly removed from a tree'));
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeFocusListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['focusListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeFocusListener'] = $method;
		$method = $pyjs__bind_method2('removeItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			self['root']['removeItem'](item);
			$m['DOM']['removeChild'](self['getElement'](), item['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['removeItem'] = $method;
		$method = $pyjs__bind_method2('removeItems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp4,$bool29,$cmp3;
			while ((($bool29=((($cmp3=self['getItemCount']())===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['removeItem'](self['getItem'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeItems'] = $method;
		$method = $pyjs__bind_method2('removeKeyboardListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['keyboardListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeKeyboardListener'] = $method;
		$method = $pyjs__bind_method2('removeTreeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTreeListener'] = $method;
		$method = $pyjs__bind_method2('setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			$m['Focus']['setAccessKey']($p['getattr'](self, 'focusable'), key);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focus) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focus = arguments[1];
			}
			var $bool30;
			if ((($bool30=focus) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['Focus']['focus']($p['getattr'](self, 'focusable'));
			}
			else {
				$m['Focus']['blur']($p['getattr'](self, 'focusable'));
			}
			return null;
		}
	, 1, [null,null,['self'],['focus']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('setImageBase', function(baseUrl) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				baseUrl = arguments[1];
			}

			self.imageBase = baseUrl;
			self['root']['updateStateRecursive']();
			return null;
		}
	, 1, [null,null,['self'],['baseUrl']]);
		$cls_definition['setImageBase'] = $method;
		$method = $pyjs__bind_method2('setSelectedItem', function(item, fireEvents) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				fireEvents = arguments[2];
			}
			if (typeof fireEvents == 'undefined') fireEvents=arguments.callee.__args__[4][1];
			var $bool32,$bool31;
			if ((($bool31=(item === null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool32=($p['getattr'](self, 'curSelection') === null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				self['curSelection']['setSelected'](false);
				self.curSelection = null;
				return null;
			}
			self['onSelection'](item, fireEvents);
			return null;
		}
	, 1, [null,null,['self'],['item'],['fireEvents', true]]);
		$cls_definition['setSelectedItem'] = $method;
		$method = $pyjs__bind_method2('setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['Focus']['setTabIndex']($p['getattr'](self, 'focusable'), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method2('treeItemIterator', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var accum;
			accum = $p['list']([]);
			self['root']['addTreeItems'](accum);
			return accum['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['treeItemIterator'] = $method;
		$method = $pyjs__bind_method2('collectElementChain', function(chain, hRoot, hElem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chain = arguments[1];
				hRoot = arguments[2];
				hElem = arguments[3];
			}
			var $or5,$or6,$bool33,$bool34;
			if ((($bool34=((($bool33=$or5=(hElem === null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33.__nonzero__=='function'?
						$bool33.__nonzero__() :
						(typeof $bool33.__len__=='function'?
							($bool33.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:$m['DOM']['compare'](hElem, hRoot))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			self['collectElementChain'](chain, hRoot, $m['DOM']['getParent'](hElem));
			chain['append'](hElem);
			return null;
		}
	, 1, [null,null,['self'],['chain'],['hRoot'],['hElem']]);
		$cls_definition['collectElementChain'] = $method;
		$method = $pyjs__bind_method2('elementClicked', function(root, hElem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				root = arguments[1];
				hElem = arguments[2];
			}
			var chain,item,$bool37,$bool35,$bool36,$bool38;
			chain = $p['list']([]);
			self['collectElementChain'](chain, self['getElement'](), hElem);
			item = self['findItemByChain'](chain, 0, root);
			if ((($bool35=(item !== null)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool36=$m['DOM']['compare'](item['getImageElement'](), hElem)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					item['setState'](!(($bool37=item['getState']()) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ), true);
					return true;
				}
				else if ((($bool38=$m['DOM']['isOrHasChild'](item['getElement'](), hElem)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['onSelection'](item, true);
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['root'],['hElem']]);
		$cls_definition['elementClicked'] = $method;
		$method = $pyjs__bind_method2('findDeepestOpenChild', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $bool40,$sub3,$bool39,$sub4;
			if ((($bool40=!(($bool39=item['getState']()) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39.__nonzero__=='function'?
						$bool39.__nonzero__() :
						(typeof $bool39.__len__=='function'?
							($bool39.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return item;
			}
			return self['findDeepestOpenChild'](item['getChild']((typeof ($sub3=item['getChildCount']())==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))));
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['findDeepestOpenChild'] = $method;
		$method = $pyjs__bind_method2('findItemByChain', function(chain, idx, root) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chain = arguments[1];
				idx = arguments[2];
				root = arguments[3];
			}
			var child,$eq30,$bool43,$iter2_iter,$iter2_type,$bool42,$bool41,$iter2_idx,retItem,$eq29,$2,$1,$iter2_nextval,hCurElem,i,$add2,$add3,$add1,$add4,$len1,$iter2_array;
			if ((($bool41=(($eq29=idx)===($eq30=(($len1=chain) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41.__nonzero__=='function'?
							$bool41.__nonzero__() :
							(typeof $bool41.__len__=='function'?
								($bool41.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return root;
			}
			hCurElem = (typeof ($1=chain).__array != 'undefined'?
				((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(idx));
			$iter2_iter = $p['range'](root['getChildCount']());
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				child = root['getChild'](i);
				if ((($bool42=$m['DOM']['compare'](child['getElement'](), hCurElem)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
						false :
						(typeof $bool42=='object'?
							(typeof $bool42.__nonzero__=='function'?
								$bool42.__nonzero__() :
								(typeof $bool42.__len__=='function'?
									($bool42.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					retItem = self['findItemByChain'](chain, (typeof ($add1=idx)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)), root['getChild'](i));
					if ((($bool43=(retItem === null)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
							false :
							(typeof $bool43=='object'?
								(typeof $bool43.__nonzero__=='function'?
									$bool43.__nonzero__() :
									(typeof $bool43.__len__=='function'?
										($bool43.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return child;
					}
					return retItem;
				}
			}
			return self['findItemByChain'](chain, (typeof ($add3=idx)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)), root);
		}
	, 1, [null,null,['self'],['chain'],['idx'],['root']]);
		$cls_definition['findItemByChain'] = $method;
		$method = $pyjs__bind_method2('moveFocus', function(selection) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var containerLeft,$sub8,focusableWidget,height,top,width,$bool44,$sub5,selectedElem,$sub7,$sub6,containerTop,left;
			focusableWidget = selection['getFocusableWidget']();
			if ((($bool44=(focusableWidget !== null)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				focusableWidget['setFocus'](true);
				$m['DOM']['scrollIntoView'](focusableWidget['getElement']());
			}
			else {
				selectedElem = selection['getContentElem']();
				containerLeft = self['getAbsoluteLeft']();
				containerTop = self['getAbsoluteTop']();
				left = (typeof ($sub5=$m['DOM']['getAbsoluteLeft'](selectedElem))==typeof ($sub6=containerLeft) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				top = (typeof ($sub7=$m['DOM']['getAbsoluteTop'](selectedElem))==typeof ($sub8=containerTop) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				width = $m['DOM']['getIntAttribute'](selectedElem, 'offsetWidth');
				height = $m['DOM']['getIntAttribute'](selectedElem, 'offsetHeight');
				$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'focusable'), 'left', $p['sprintf']('%spx', left));
				$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'focusable'), 'top', $p['sprintf']('%spx', top));
				$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'focusable'), 'width', $p['sprintf']('%spx', width));
				$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'focusable'), 'height', $p['sprintf']('%spx', height));
				$m['DOM']['scrollIntoView']($p['getattr'](self, 'focusable'));
				$m['Focus']['focus']($p['getattr'](self, 'focusable'));
			}
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['moveFocus'] = $method;
		$method = $pyjs__bind_method2('moveSelectionDown', function(sel, dig) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sel = arguments[1];
				dig = arguments[2];
			}
			var $bool50,$bool51,$bool52,$or7,$eq32,$eq31,$sub9,$bool47,$bool46,$bool45,parent,$sub10,$or8,$bool49,$bool48,$cmp5,$cmp7,$cmp6,idx,$cmp8,$add6,$add5;
			if ((($bool45=(($eq31=sel)===($eq32=$p['getattr'](self, 'root'))&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			parent = sel['getParentItem']();
			if ((($bool46=(parent === null)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46.__nonzero__=='function'?
							$bool46.__nonzero__() :
							(typeof $bool46.__len__=='function'?
								($bool46.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				parent = $p['getattr'](self, 'root');
			}
			idx = parent['getChildIndex'](sel);
			if ((($bool50=((($bool48=$or7=!(($bool47=dig) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
				false :
				(typeof $bool47=='object'?
					(typeof $bool47.__nonzero__=='function'?
						$bool47.__nonzero__() :
						(typeof $bool47.__len__=='function'?
							($bool47.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
				false :
				(typeof $bool48=='object'?
					(typeof $bool48.__nonzero__=='function'?
						$bool48.__nonzero__() :
						(typeof $bool48.__len__=='function'?
							($bool48.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:!(($bool49=sel['getState']()) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49.__nonzero__=='function'?
						$bool49.__nonzero__() :
						(typeof $bool49.__len__=='function'?
							($bool49.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool51=((($cmp5=idx)===($cmp6=(typeof ($sub9=parent['getChildCount']())==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51.__nonzero__=='function'?
								$bool51.__nonzero__() :
								(typeof $bool51.__len__=='function'?
									($bool51.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['onSelection'](parent['getChild']((typeof ($add5=idx)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))), true);
				}
				else {
					self['moveSelectionDown'](parent, false);
				}
			}
			else if ((($bool52=((($cmp7=sel['getChildCount']())===($cmp8=0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['onSelection'](sel['getChild'](0), true);
			}
			return null;
		}
	, 1, [null,null,['self'],['sel'],['dig']]);
		$cls_definition['moveSelectionDown'] = $method;
		$method = $pyjs__bind_method2('moveSelectionUp', function(sel, climb) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sel = arguments[1];
				climb = arguments[2];
			}
			var $bool54,parent,idx,$bool53,$sub12,$cmp9,sibling,$cmp10,$sub11;
			parent = sel['getParentItem']();
			if ((($bool53=(parent === null)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				parent = $p['getattr'](self, 'root');
			}
			idx = parent['getChildIndex'](sel);
			if ((($bool54=((($cmp9=idx)===($cmp10=0)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
					false :
					(typeof $bool54=='object'?
						(typeof $bool54.__nonzero__=='function'?
							$bool54.__nonzero__() :
							(typeof $bool54.__len__=='function'?
								($bool54.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sibling = parent['getChild']((typeof ($sub11=idx)==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12)));
				self['onSelection'](self['findDeepestOpenChild'](sibling), true);
			}
			else {
				self['onSelection'](parent, true);
			}
			return null;
		}
	, 1, [null,null,['self'],['sel'],['climb']]);
		$cls_definition['moveSelectionUp'] = $method;
		$method = $pyjs__bind_method2('onSelection', function(item, fireEvents) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				fireEvents = arguments[2];
			}
			var $bool55,$bool56,$bool57,$iter3_type,$bool58,$bool59,onBefore,$eq33,$eq34,$iter4_iter,$iter3_idx,$iter3_iter,$bool61,$bool60,$bool63,$bool62,$bool64,$and3,$and4,$and5,$and6,listener,$iter3_array,$iter4_type,$iter4_nextval,$iter4_idx,$len2,$len3,$iter4_array,$iter3_nextval;
			if ((($bool55=(($eq33=item)===($eq34=$p['getattr'](self, 'root'))&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool57=((($bool56=$and3=fireEvents) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
				false :
				(typeof $bool56=='object'?
					(typeof $bool56.__nonzero__=='function'?
						$bool56.__nonzero__() :
						(typeof $bool56.__len__=='function'?
							($bool56.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($len2=$p['getattr'](self, 'listeners')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))):$and3)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter3_iter = $p['getattr'](self, 'listeners');
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					listener = $iter3_nextval;
					onBefore = $p['getattr'](listener, 'onBeforeTreeItemSelected', null);
					if ((($bool58=(onBefore !== null)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
							false :
							(typeof $bool58=='object'?
								(typeof $bool58.__nonzero__=='function'?
									$bool58.__nonzero__() :
									(typeof $bool58.__len__=='function'?
										($bool58.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool60=!(($bool59=onBefore(item)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
							false :
							(typeof $bool59=='object'?
								(typeof $bool59.__nonzero__=='function'?
									$bool59.__nonzero__() :
									(typeof $bool59.__len__=='function'?
										($bool59.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
								false :
								(typeof $bool60=='object'?
									(typeof $bool60.__nonzero__=='function'?
										$bool60.__nonzero__() :
										(typeof $bool60.__len__=='function'?
											($bool60.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							return null;
						}
					}
				}
			}
			if ((($bool61=($p['getattr'](self, 'curSelection') !== null)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['curSelection']['setSelected'](false);
			}
			self.curSelection = item;
			if ((($bool62=($p['getattr'](self, 'curSelection') !== null)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62.__nonzero__=='function'?
							$bool62.__nonzero__() :
							(typeof $bool62.__len__=='function'?
								($bool62.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['moveFocus']($p['getattr'](self, 'curSelection'));
				self['curSelection']['setSelected'](true);
				if ((($bool64=((($bool63=$and5=fireEvents) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
					false :
					(typeof $bool63=='object'?
						(typeof $bool63.__nonzero__=='function'?
							$bool63.__nonzero__() :
							(typeof $bool63.__len__=='function'?
								($bool63.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($len3=$p['getattr'](self, 'listeners')) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))):$and5)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
						false :
						(typeof $bool64=='object'?
							(typeof $bool64.__nonzero__=='function'?
								$bool64.__nonzero__() :
								(typeof $bool64.__len__=='function'?
									($bool64.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter4_iter = $p['getattr'](self, 'listeners');
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						listener = $iter4_nextval;
						listener['onTreeItemSelected'](item);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item'],['fireEvents']]);
		$cls_definition['onSelection'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_idx,child,$iter5_iter,$iter5_array,$iter5_type;
			$iter5_iter = self;
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				child = $iter5_nextval;
				child['onAttach']();
			}
			$m['DOM']['setEventListener']($p['getattr'](self, 'focusable'), self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_idx,$iter6_type,$iter6_array,child,$iter6_iter,$iter6_nextval;
			$iter6_iter = self;
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				child = $iter6_nextval;
				child['onDetach']();
			}
			$m['DOM']['setEventListener']($p['getattr'](self, 'focusable'), null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['root']['updateStateRecursive']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('adopt', function(content) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				content = arguments[1];
			}

			self['childWidgets']['add'](content);
			content['treeSetParent'](self);
			return null;
		}
	, 1, [null,null,['self'],['content']]);
		$cls_definition['adopt'] = $method;
		$method = $pyjs__bind_method2('disown', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			self['childWidgets']['remove'](item);
			item['treeSetParent'](null);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['disown'] = $method;
		$method = $pyjs__bind_method2('fireStateChanged', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $bool65,$iter7_nextval,$iter7_iter,$iter7_array,listener,$iter7_idx,$iter7_type;
			$iter7_iter = $p['getattr'](self, 'listeners');
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				listener = $iter7_nextval;
				if ((($bool65=$p['hasattr'](listener, 'onTreeItemStateChanged')) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65.__nonzero__=='function'?
								$bool65.__nonzero__() :
								(typeof $bool65.__len__=='function'?
									($bool65.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					listener['onTreeItemStateChanged'](item);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['fireStateChanged'] = $method;
		$method = $pyjs__bind_method2('getChildWidgets', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'childWidgets');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChildWidgets'] = $method;
		$method = $pyjs__bind_method2('shouldTreeDelegateFocusToElement', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var name,$bool67,$bool66,$eq40,$or9,$eq36,$eq37,$eq35,$or11,$eq38,$eq39,$or10;
			name = $p['str']($p['getattr'](elem, 'nodeName'));
			name = name['lower']();
			return ((($bool66=$or9=(($eq35=name)===($eq36='select')&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66.__nonzero__=='function'?
						$bool66.__nonzero__() :
						(typeof $bool66.__len__=='function'?
							($bool66.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:((($bool67=$or10=(($eq37=name)===($eq38='input')&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67.__nonzero__=='function'?
						$bool67.__nonzero__() :
						(typeof $bool67.__len__=='function'?
							($bool67.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or10:(($eq39=name)===($eq40='checkbox')&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))));
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['shouldTreeDelegateFocusToElement'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Tree', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Tree', 'Tree', $m['Tree']);
	return this;
}; /* end pyjamas.ui.Tree */


/* end module: pyjamas.ui.Tree */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'sets.Set', 'sets', 'pygwt', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.Focus', 'pyjamas.ui.TreeItem.RootTreeItem', 'pyjamas.ui.TreeItem', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.FocusListener']
*/

/* start module: pyjamas.ui.GlassWidget */
$pyjs.loaded_modules['pyjamas.ui.GlassWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.GlassWidget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.GlassWidget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.GlassWidget"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.GlassWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.GlassWidget';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['GlassWidget'] = $pyjs.loaded_modules['pyjamas.ui.GlassWidget'];


	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
	$m['mousecapturer'] = null;
	$m['getMouseCapturer'] = function() {
		var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}
		var $bool2,$bool3,$bool1;
		if ((($bool1=($m['mousecapturer'] === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['mousecapturer'] = $pyjs_kwargs_call(null, (typeof GlassWidget == "undefined"?$m.GlassWidget:GlassWidget), null, kwargs, [{}]);
		}
		else if ((($bool3=!(($bool2=$p['isinstance']($m['mousecapturer'], (typeof GlassWidget == "undefined"?$m.GlassWidget:GlassWidget))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return null;
		}
		return $m['mousecapturer'];
	};
	$m['getMouseCapturer'].__name__ = 'getMouseCapturer';

	$m['getMouseCapturer'].__bind_type__ = 0;
	$m['getMouseCapturer'].__args__ = [null,['kwargs']];
	$m['show'] = function(mousetarget) {
		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof mousetarget != 'undefined') {
				if (mousetarget !== null && typeof mousetarget['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = mousetarget;
					mousetarget = arguments[1];
				}
			} else {
			}
		}
		var $bool4,mc;
		mc = $pyjs_kwargs_call(null, $m['getMouseCapturer'], null, kwargs, [{}]);
		mc.mousetarget = mousetarget;
		if ((($bool4=$p['isinstance'](mousetarget, $m['MouseHandler'])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			mc.mousehandler = true;
		}
		mc['show']();
		return null;
	};
	$m['show'].__name__ = 'show';

	$m['show'].__bind_type__ = 0;
	$m['show'].__args__ = [null,['kwargs'],['mousetarget']];
	$m['hide'] = function() {

		$m['mousecapturer']['hide']();
		return null;
	};
	$m['hide'].__name__ = 'hide';

	$m['hide'].__bind_type__ = 0;
	$m['hide'].__args__ = [null,null];
	$m['GlassWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.GlassWidget';
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
			var element,$bool6,$bool7,$bool5;
			self.glassListeners = $p['list']([]);
			self.showing = false;
			self.mousehandler = false;
			if ((($bool6=!(($bool5=kwargs.__contains__('StyleName')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				kwargs.__setitem__('StyleName', 'gwt-GlassWidget');
			}
			if ((($bool7=kwargs.__contains__('Element')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createDiv']();
			}
			self['setElement'](element);
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['MouseHandler']['__init__'](self);
			self['setzIndex'](1000000);
			self['addMouseListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addGlassListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['glassListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addGlassListener'] = $method;
		$method = $pyjs__bind_method2('hide', function(autoClosed) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments.callee.__args__[3][1];
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$bool8,$iter1_idx;
			self.showing = false;
			self['hideGlass']();
			$m['DOM']['removeEventPreview'](self);
			$m['RootPanel']()['remove'](self);
			self['onHideImpl'](self['getElement']());
			$m['DOM']['releaseCapture'](self['getElement']());
			$iter1_iter = $p['getattr'](self, 'glassListeners');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				if ((($bool8=$p['hasattr'](listener, 'onGlassHide')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					listener['onGlassHide'](self, autoClosed);
				}
				else {
					listener(self, autoClosed);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method2('_event_targets_popup', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var target,$and1,$bool9,$and2;
			target = $m['DOM']['eventGetTarget'](event);
			return ((($bool9=$and1=target) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$m['DOM']['isOrHasChild'](self['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_popup'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$or6,$eq10,$eq11,$eq12,etype,$or5,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5;
			etype = $m['DOM']['eventGetType'](event);
			if ((($bool11=((($bool10=$or1=(($eq1=etype)===($eq2='mousedown')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:(($eq3=etype)===($eq4='blur')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				if ((($bool12=($m['DOM']['getCaptureElement']() !== null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			else if ((($bool16=((($bool13=$or3=(($eq5=etype)===($eq6='mouseup')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:((($bool14=$or4=(($eq7=etype)===($eq8='click')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or4:((($bool15=$or5=(($eq9=etype)===($eq10='mousemove')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:(($eq11=etype)===($eq12='dblclick')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12))))))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				if ((($bool17=($m['DOM']['getCaptureElement']() !== null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					return true;
				}
			}
			return self['_event_targets_popup'](event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		$method = $pyjs__bind_method2('onHideImpl', function(popup) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onHideImpl'] = $method;
		$method = $pyjs__bind_method2('onShowImpl', function(popup) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onShowImpl'] = $method;
		$method = $pyjs__bind_method2('removeGlassListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['glassListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeGlassListener'] = $method;
		$method = $pyjs__bind_method2('setGlassPosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18,el,$eq15,$bool19,$add3,height,$add2,width,$add1,$bool20,$add4,$eq13,$eq14,top,$eq16,left;
			top = $m['Window']['getScrollTop']();
			left = $m['Window']['getScrollLeft']();
			height = $m['Window']['getClientHeight']();
			width = $m['Window']['getClientWidth']();
			el = self['getElement']();
			$m['DOM']['setStyleAttribute'](el, 'position', 'absolute');
			$m['DOM']['setStyleAttribute'](el, 'left', ((($bool18=(($eq13=left)===($eq14=0)&&$eq13===null?true:
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
					 true ) )? ($p['sprintf']('%s', left)) : ($p['sprintf']('%spx', left))));
			$m['DOM']['setStyleAttribute'](el, 'top', ((($bool19=(($eq15=top)===($eq16=0)&&$eq15===null?true:
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
					 true ) )? ($p['sprintf']('%s', top)) : ($p['sprintf']('%spx', top))));
			$m['DOM']['setStyleAttribute'](el, 'height', $p['sprintf']('%spx', (typeof ($add1=top)==typeof ($add2=height) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))));
			$m['DOM']['setStyleAttribute'](el, 'width', $p['sprintf']('%spx', (typeof ($add3=left)==typeof ($add4=width) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))));
			if ((($bool20=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				$m['DOM']['setStyleAttribute'](el, 'filter', 'alpha(opacity=1)');
				$m['DOM']['setStyleAttribute'](el, 'background', 'rgba(255,255,255,0.1)');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setGlassPosition'] = $method;
		$method = $pyjs__bind_method2('showGlass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setGlassPosition']();
			$doc['body']['appendChild'](self['getElement']());
			$m['Window']['addWindowResizeListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showGlass'] = $method;
		$method = $pyjs__bind_method2('hideGlass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['removeWindowResizeListener'](self);
			$doc['body']['removeChild'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hideGlass'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setGlassPosition']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool21;
			if ((($bool21=$p['getattr'](self, 'showing')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				return null;
			}
			self.showing = true;
			self['showGlass']();
			$m['DOM']['addEventPreview'](self);
			$m['RootPanel']()['add'](self);
			self['onShowImpl'](self['getElement']());
			$m['DOM']['setCapture'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('adjustMousePos', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $sub2,$sub3,$add6,$add7,$add5,$sub1,$add8,$sub4;
			x = (typeof ($add5=x)==typeof ($add6=(typeof ($sub1=self['getAbsoluteLeft']())==typeof ($sub2=self['mousetarget']['getAbsoluteLeft']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			y = (typeof ($add7=y)==typeof ($add8=(typeof ($sub3=self['getAbsoluteTop']())==typeof ($sub4=self['mousetarget']['getAbsoluteTop']()) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			return $p['tuple']([x, y]);
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['adjustMousePos'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool22;
			var $tupleassign1 = $p['__ass_unpack'](self['adjustMousePos'](x, y), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			if ((($bool22=$p['getattr'](self, 'mousehandler')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				self['mousetarget']['onBrowserEvent']($m['DOM']['eventGetCurrentEvent']());
			}
			else {
				self['mousetarget']['onMouseDown'](sender, x, y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['mousetarget']['onMouseGlassEnter'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['mousetarget']['onMouseGlassLeave'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool23;
			var $tupleassign2 = $p['__ass_unpack'](self['adjustMousePos'](x, y), 2, null);
			x = $tupleassign2[0];
			y = $tupleassign2[1];
			if ((($bool23=$p['getattr'](self, 'mousehandler')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['mousetarget']['onBrowserEvent']($m['DOM']['eventGetCurrentEvent']());
			}
			else {
				self['mousetarget']['onMouseMove'](sender, x, y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool24;
			var $tupleassign3 = $p['__ass_unpack'](self['adjustMousePos'](x, y), 2, null);
			x = $tupleassign3[0];
			y = $tupleassign3[1];
			if ((($bool24=$p['getattr'](self, 'mousehandler')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				self['mousetarget']['onBrowserEvent']($m['DOM']['eventGetCurrentEvent']());
			}
			else {
				self['mousetarget']['onMouseUp'](sender, x, y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GlassWidget', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.GlassWidget', 'GlassWidget', $m['GlassWidget']);
	return this;
}; /* end pyjamas.ui.GlassWidget */


/* end module: pyjamas.ui.GlassWidget */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/

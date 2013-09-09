/* start module: pyjamas.ui.CustomButton */
$pyjs.loaded_modules['pyjamas.ui.CustomButton'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.CustomButton'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.CustomButton'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.CustomButton"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.CustomButton>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CustomButton';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['CustomButton'] = $pyjs.loaded_modules['pyjamas.ui.CustomButton'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['ButtonBase'] = $p['___import___']('ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	$m['UIObject'] = $p['___import___']('UIObject.UIObject', 'pyjamas.ui', null, false);
	$m['Face'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.CustomButton';
		$cls_definition['STYLENAME_HTML_FACE'] = 'html-face';
		$method = $pyjs__bind_method2('__init__', function(button, delegateTo) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				button = arguments[1];
				delegateTo = arguments[2];
			}
			if (typeof delegateTo == 'undefined') delegateTo=arguments.callee.__args__[4][1];

			self.button = button;
			self.delegateTo = delegateTo;
			self.face = null;
			self.id = null;
			self.$$name = 'fazom';
			return null;
		}
	, 1, [null,null,['self'],['button'],['delegateTo', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '$$name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getFaceID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'id');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFaceID'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setFaceID', function(face_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				face_id = arguments[1];
			}

			self.id = face_id;
			return null;
		}
	, 1, [null,null,['self'],['face_id']]);
		$cls_definition['setFaceID'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerHTML'](self['getFace']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerText'](self['getFace']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self.face = $m['DOM']['createDiv']();
			$m['UIObject']['setStyleName']($p['getattr'](self, 'button'), $p['getattr'](self, 'face'), $p['getattr'](self, 'STYLENAME_HTML_FACE'), true);
			$m['DOM']['setInnerHTML']($p['getattr'](self, 'face'), html);
			self['button']['updateButtonFace']();
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setImage', function(image) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}

			self.face = image['getElement']();
			self['button']['updateButtonFace']();
			return null;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['setImage'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self.face = $m['DOM']['createDiv']();
			$m['UIObject']['setStyleName']($p['getattr'](self, 'button'), $p['getattr'](self, 'face'), $p['getattr'](self, 'STYLENAME_HTML_FACE'), true);
			$m['DOM']['setInnerText']($p['getattr'](self, 'face'), text);
			self['button']['updateButtonFace']();
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getName']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('getFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1;
			if ((($bool1=($p['getattr'](self, 'face') !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return $p['getattr'](self, 'face');
			}
			if ((($bool2=($p['getattr'](self, 'delegateTo') !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return self['delegateTo']['getFace']();
			}
			self.face = $m['DOM']['createDiv']();
			return $p['getattr'](self, 'face');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFace'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Face', $p['tuple']($bases), $data);
	})();
	$m['CustomButton'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.CustomButton';
		$cls_definition['STYLENAME_DEFAULT'] = 'gwt-CustomButton';
		$cls_definition['DOWN_ATTRIBUTE'] = 1;
		$cls_definition['HOVERING_ATTRIBUTE'] = 2;
		$cls_definition['DISABLED_ATTRIBUTE'] = 4;
		$cls_definition['UP'] = 0;
		$cls_definition['DOWN'] = $cls_definition['DOWN_ATTRIBUTE'];
		$cls_definition['UP_HOVERING'] = $cls_definition['HOVERING_ATTRIBUTE'];
		$cls_definition['DOWN_HOVERING'] = ($cls_definition['DOWN_ATTRIBUTE'])|($cls_definition['HOVERING_ATTRIBUTE']);
		$cls_definition['UP_DISABLED'] = $cls_definition['DISABLED_ATTRIBUTE'];
		$cls_definition['DOWN_DISABLED'] = ($cls_definition['DOWN'])|($cls_definition['DISABLED_ATTRIBUTE']);
		$method = $pyjs__bind_method2('__init__', function(upImageText, downImageText, listener) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				upImageText = arguments[1];
				downImageText = arguments[2];
				listener = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[4];
					}
				} else 				if (typeof downImageText != 'undefined') {
					if (downImageText !== null && typeof downImageText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = downImageText;
						downImageText = arguments[4];
					}
				} else 				if (typeof upImageText != 'undefined') {
					if (upImageText !== null && typeof upImageText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = upImageText;
						upImageText = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof upImageText == 'undefined') upImageText=arguments.callee.__args__[3][1];
			if (typeof downImageText == 'undefined') downImageText=arguments.callee.__args__[4][1];
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[5][1];
			var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,upText,downText,upImage,$and1,$and2,$and3,$and4,$and5,$and6,$bool3,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,downImage,element;
			if ((($bool4=!(($bool3=kwargs['has_key']('StyleName')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				kwargs.__setitem__('StyleName', $p['getattr'](self, 'STYLENAME_DEFAULT'));
			}
			if ((($bool5=kwargs['has_key']('Element')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['Focus']['createFocusable']();
			}
			$pyjs_kwargs_call($m['ButtonBase'], '__init__', null, kwargs, [{}, self, element]);
			self.curFace = null;
			self.curFaceElement = null;
			self.up = null;
			self.down = null;
			self.downHovering = null;
			self.upHovering = null;
			self.upDisabled = null;
			self.downDisabled = null;
			self.isCapturing = false;
			self.isFocusing = false;
			self.allowClick = false;
			self['setUpFace'](self['createFace'](null, 'up', $p['getattr'](self, 'UP')));
			if ((($bool7=((($bool6=$and1=(downImageText === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(listener === null):$and1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				listener = upImageText;
				upImageText = null;
			}
			if ((($bool9=((($bool8=$and3=upImageText) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['isinstance'](upImageText, $p['basestring']):$and3)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				upText = upImageText;
				upImage = null;
			}
			else {
				upImage = upImageText;
				upText = null;
			}
			if ((($bool11=((($bool10=$and5=downImageText) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['isinstance'](downImageText, $p['basestring']):$and5)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				downText = downImageText;
				downImage = null;
			}
			else {
				downImage = downImageText;
				downText = null;
			}
			if ((($bool12=(upImage !== null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['getUpFace']()['setImage'](upImage);
			}
			if ((($bool13=(upText !== null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				self['getUpFace']()['setText'](upText);
			}
			if ((($bool14=(downImage !== null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self['getDownFace']()['setImage'](downImage);
			}
			if ((($bool15=(downText !== null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self['getDownFace']()['setText'](downText);
			}
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'MOUSEEVENTS'))|($p['getattr']($m['Event'], 'FOCUSEVENTS'))|($p['getattr']($m['Event'], 'KEYEVENTS')));
			if ((($bool16=(listener !== null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self['addClickListener'](listener);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['upImageText', null],['downImageText', null],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('updateButtonFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,$bool18,$eq2,$eq1,$bool17,$and7;
			if ((($bool18=((($bool17=$and7=($p['getattr'](self, 'curFace') !== null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq1=self['curFace']['getFace']())===($eq2=self['getFace']())&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))):$and7)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['setCurrentFaceElement']($p['getattr'](self, 'face'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateButtonFace'] = $method;
		$method = $pyjs__bind_method2('getDownDisabledFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19;
			if ((($bool19=($p['getattr'](self, 'downDisabled') === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['setDownDisabledFace'](self['createFace'](self['getDownFace'](), 'down-disabled', $p['getattr'](self, 'DOWN_DISABLED')));
			}
			return $p['getattr'](self, 'downDisabled');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDownDisabledFace'] = $method;
		$method = $pyjs__bind_method2('getDownFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool20;
			if ((($bool20=($p['getattr'](self, 'down') === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				self['setDownFace'](self['createFace'](self['getUpFace'](), 'down', $p['getattr'](self, 'DOWN')));
			}
			return $p['getattr'](self, 'down');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDownFace'] = $method;
		$method = $pyjs__bind_method2('getDownHoveringFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool21;
			if ((($bool21=($p['getattr'](self, 'downHovering') === null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				self['setDownHoveringFace'](self['createFace'](self['getDownFace'](), 'down-hovering', $p['getattr'](self, 'DOWN_HOVERING')));
			}
			return $p['getattr'](self, 'downHovering');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDownHoveringFace'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getCurrentFace']()['getHTML']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['Focus']['getTabIndex'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getCurrentFace']()['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('getUpDisabledFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool22;
			if ((($bool22=($p['getattr'](self, 'upDisabled') === null)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				self['setUpDisabledFace'](self['createFace'](self['getUpFace'](), 'up-disabled', $p['getattr'](self, 'UP_DISABLED')));
			}
			return $p['getattr'](self, 'upDisabled');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpDisabledFace'] = $method;
		$method = $pyjs__bind_method2('getUpFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'up');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpFace'] = $method;
		$method = $pyjs__bind_method2('getUpHoveringFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool23;
			if ((($bool23=($p['getattr'](self, 'upHovering') === null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				self['setUpHoveringFace'](self['createFace'](self['getUpFace'](), 'up-hovering', $p['getattr'](self, 'UP_HOVERING')));
			}
			return $p['getattr'](self, 'upHovering');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpHoveringFace'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var to,$and9,$eq21,$eq20,$eq23,$eq22,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28,keyCode,$eq32,$eq33,$eq30,$eq31,$eq36,$eq37,$eq34,$eq35,$eq38,$bool25,$bool24,$bool27,$bool26,$bool29,$bool28,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,$bool40,$bool49,$bool48,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$bool54,$bool55,$bool56,$bool57,$bool50,$bool51,$bool52,$bool53,$bool58,$eq18,$eq19,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,event_type,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq3,$eq6,$eq7,$eq4,$eq5,$and12,$and13,$and10,$and11,$and14;
			if ((($bool25=!(($bool24=self['isEnabled']()) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				return null;
			}
			event_type = $m['DOM']['eventGetType'](event);
			if ((($bool26=(($eq3=event_type)===($eq4='click')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				if ((($bool28=!(($bool27=$p['getattr'](self, 'allowClick')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					$m['DOM']['eventStopPropagation'](event);
					return null;
				}
			}
			else if ((($bool29=(($eq5=event_type)===($eq6='mousedown')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				if ((($bool30=(($eq7=$m['DOM']['eventGetButton'](event))===($eq8=$p['getattr']($m['Event'], 'BUTTON_LEFT'))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					self['setFocus'](true);
					self['onClickStart']();
					$m['DOM']['setCapture'](self['getElement']());
					self.isCapturing = true;
					$m['DOM']['eventPreventDefault'](event);
				}
			}
			else if ((($bool31=(($eq9=event_type)===($eq10='mouseup')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				if ((($bool32=$p['getattr'](self, 'isCapturing')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					self.isCapturing = false;
					$m['DOM']['releaseCapture'](self['getElement']());
					if ((($bool34=((($bool33=$and9=self['isHovering']()) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq11=$m['DOM']['eventGetButton'](event))===($eq12=$p['getattr']($m['Event'], 'BUTTON_LEFT'))&&$eq11===null?true:
						($eq11===null?false:($eq12===null?false:
							((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
								((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
									$eq11==$eq12))))):$and9)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
						self['onClick']();
					}
				}
			}
			else if ((($bool35=(($eq13=event_type)===($eq14='mousemove')&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				if ((($bool36=$p['getattr'](self, 'isCapturing')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					$m['DOM']['eventPreventDefault'](event);
				}
			}
			else if ((($bool37=(($eq15=event_type)===($eq16='mouseout')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37.__nonzero__=='function'?
							$bool37.__nonzero__() :
							(typeof $bool37.__len__=='function'?
								($bool37.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				to = $m['DOM']['eventGetToElement'](event);
				if ((($bool41=((($bool38=$and11=$m['DOM']['isOrHasChild'](self['getElement'](), $m['DOM']['eventGetTarget'](event))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool39=$or1=(to === null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!(($bool40=$m['DOM']['isOrHasChild'](self['getElement'](), to)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )):$and11)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					if ((($bool42=$p['getattr'](self, 'isCapturing')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
						self['onClickCancel']();
					}
					self['setHovering'](false);
				}
			}
			else if ((($bool43=(($eq17=event_type)===($eq18='mouseover')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				if ((($bool44=$m['DOM']['isOrHasChild'](self['getElement'](), $m['DOM']['eventGetTarget'](event))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					self['setHovering'](true);
					if ((($bool45=$p['getattr'](self, 'isCapturing')) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
						self['onClickStart']();
					}
				}
			}
			else if ((($bool46=(($eq19=event_type)===($eq20='blur')&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				if ((($bool47=$p['getattr'](self, 'isFocusing')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47.__nonzero__=='function'?
								$bool47.__nonzero__() :
								(typeof $bool47.__len__=='function'?
									($bool47.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.isFocusing = false;
					self['onClickCancel']();
				}
			}
			else if ((($bool48=(($eq21=event_type)===($eq22='losecapture')&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool49=$p['getattr'](self, 'isCapturing')) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.isCapturing = false;
					self['onClickCancel']();
				}
			}
			$m['ButtonBase']['onBrowserEvent'](self, event);
			if ((($bool50=(($eq23=($m['DOM']['eventGetTypeInt'](event))&($p['getattr']($m['Event'], 'KEYEVENTS')))===($eq24=0)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				return null;
			}
			keyCode = $m['DOM']['eventGetKeyCode'](event);
			if ((($bool51=(($eq25=event_type)===($eq26='keydown')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				if ((($bool52=(($eq27=keyCode)===($eq28=' ')&&$eq27===null?true:
					($eq27===null?false:($eq28===null?false:
						((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
							((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
								$eq27==$eq28)))))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
					self.isFocusing = true;
					self['onClickStart']();
				}
			}
			else if ((($bool53=(($eq29=event_type)===($eq30='keyup')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
				if ((($bool55=((($bool54=$and13=$p['getattr'](self, 'isFocusing')) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
					false :
					(typeof $bool54=='object'?
						(typeof $bool54.__nonzero__=='function'?
							$bool54.__nonzero__() :
							(typeof $bool54.__len__=='function'?
								($bool54.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq31=keyCode)===($eq32=' ')&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
								$eq31==$eq32))))):$and13)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
					self.isFocusing = false;
					self['onClick']();
				}
			}
			else if ((($bool56=(($eq33=event_type)===($eq34='keypress')&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool58=((($bool57=$or3=(($eq35=keyCode)===($eq36='\n')&&$eq35===null?true:
					($eq35===null?false:($eq36===null?false:
						((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
							((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
								$eq35==$eq36)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:(($eq37=keyCode)===($eq38='\r')&&$eq37===null?true:
					($eq37===null?false:($eq38===null?false:
						((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
							((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
								$eq37==$eq38))))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
					self['onClickStart']();
					self['onClick']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$method = $pyjs__bind_method2('setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}
			var $bool60,$eq40,$bool59,$eq39;
			if ((($bool59=(($eq39=self['isEnabled']())===($eq40=enabled)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			self['toggleDisabled']();
			$m['ButtonBase']['setEnabled'](self, enabled);
			if ((($bool60=enabled) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
				self['setAriaPressed'](self['getCurrentFace']());
			}
			else {
				self['cleanupCaptureState']();
			}
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}
			var $bool61;
			if ((($bool61=focused) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
				$m['Focus']['focus'](self['getElement']());
			}
			else {
				$m['Focus']['blur'](self['getElement']());
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self['getCurrentFace']()['setHTML'](html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['Focus']['setTabIndex'](self['getElement'](), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['getCurrentFace']()['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('isDown', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$cmp2;
			return ((($cmp1=($p['getattr'](self, 'DOWN_ATTRIBUTE'))&(self['getCurrentFace']()['getFaceID']()))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isDown'] = $method;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['finishSetup']();
			$m['ButtonBase']['onAttach'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
			var evt;
			self.allowClick = true;
			evt = null;
			$m['DOM']['buttonClick'](self['getElement']());
			self.allowClick = false;
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onClickCancel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onClickCancel'] = $method;
		$method = $pyjs__bind_method2('onClickStart', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onClickStart'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['ButtonBase']['onDetach'](self);
			self['cleanupCaptureState']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('setDown', function(down) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				down = arguments[1];
			}
			var $eq42,$bool62,$eq41;
			if ((($bool62=!(($eq41=down)===($eq42=self['isDown']())&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				self['toggleDown']();
			}
			return null;
		}
	, 1, [null,null,['self'],['down']]);
		$cls_definition['setDown'] = $method;
		$method = $pyjs__bind_method2('finishSetup', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool63;
			if ((($bool63=($p['getattr'](self, 'curFace') === null)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
					false :
					(typeof $bool63=='object'?
						(typeof $bool63.__nonzero__=='function'?
							$bool63.__nonzero__() :
							(typeof $bool63.__len__=='function'?
								($bool63.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setCurrentFace'](self['getUpFace']());
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['finishSetup'] = $method;
		$method = $pyjs__bind_method2('fireClickListeners', function(nativeEvent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				nativeEvent = arguments[1];
			}

			self['fireEvent']((typeof ClickEvent == "undefined"?$m.ClickEvent:ClickEvent)());
			return null;
		}
	, 1, [null,null,['self'],['nativeEvent']]);
		$cls_definition['fireClickListeners'] = $method;
		$method = $pyjs__bind_method2('fireEvent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fireEvent'] = $method;
		$method = $pyjs__bind_method2('getCurrentFace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['finishSetup']();
			return $p['getattr'](self, 'curFace');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentFace'] = $method;
		$method = $pyjs__bind_method2('isHovering', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp4,$cmp3;
			return ((($cmp3=($p['getattr'](self, 'HOVERING_ATTRIBUTE'))&(self['getCurrentFace']()['getFaceID']()))===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isHovering'] = $method;
		$method = $pyjs__bind_method2('setHovering', function(hovering) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hovering = arguments[1];
			}
			var $eq43,$bool64,$eq44;
			if ((($bool64=!(($eq43=hovering)===($eq44=self['isHovering']())&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				self['toggleHover']();
			}
			return null;
		}
	, 1, [null,null,['self'],['hovering']]);
		$cls_definition['setHovering'] = $method;
		$method = $pyjs__bind_method2('toggleDown', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newFaceID;
			newFaceID = (self['getCurrentFace']()['getFaceID']())^($p['getattr'](self, 'DOWN_ATTRIBUTE'));
			self['setCurrentFaceFromID'](newFaceID);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleDown'] = $method;
		$method = $pyjs__bind_method2('cleanupCaptureState', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool65,$bool67,$bool66,$bool68,$and16,$and15;
			if ((($bool68=((($bool66=$and15=!(($bool65=$p['getattr'](self, 'isCapturing')) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
				false :
				(typeof $bool65=='object'?
					(typeof $bool65.__nonzero__=='function'?
						$bool65.__nonzero__() :
						(typeof $bool65.__len__=='function'?
							($bool65.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66.__nonzero__=='function'?
						$bool66.__nonzero__() :
						(typeof $bool66.__len__=='function'?
							($bool66.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool67=$p['getattr'](self, 'isFocusing')) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67.__nonzero__=='function'?
						$bool67.__nonzero__() :
						(typeof $bool67.__len__=='function'?
							($bool67.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and15)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68.__nonzero__=='function'?
							$bool68.__nonzero__() :
							(typeof $bool68.__len__=='function'?
								($bool68.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			$m['DOM']['releaseCapture'](self['getElement']());
			self.isCapturing = false;
			self.isFocusing = false;
			self['onClickCancel']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cleanupCaptureState'] = $method;
		$method = $pyjs__bind_method2('createFace', function(delegateTo, name, faceID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delegateTo = arguments[1];
				name = arguments[2];
				faceID = arguments[3];
			}
			var face;
			face = $m['Face'](self, delegateTo);
			face['setName'](name);
			face['setFaceID'](faceID);
			return face;
		}
	, 1, [null,null,['self'],['delegateTo'],['name'],['faceID']]);
		$cls_definition['createFace'] = $method;
		$method = $pyjs__bind_method2('getFaceFromID', function(face_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				face_id = arguments[1];
			}
			var $eq49,$eq48,$bool69,$bool72,$eq47,$eq46,$eq45,$bool71,$eq54,$eq55,$eq56,$eq50,$bool70,$eq52,$eq53,$bool73,$bool74,$eq51;
			if ((($bool69=(($eq45=face_id)===($eq46=$p['getattr'](self, 'DOWN'))&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['getDownFace']();
			}
			else if ((($bool70=(($eq47=face_id)===($eq48=$p['getattr'](self, 'UP'))&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['getUpFace']();
			}
			else if ((($bool71=(($eq49=face_id)===($eq50=$p['getattr'](self, 'DOWN_HOVERING'))&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
							$eq49==$eq50)))))) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71.__nonzero__=='function'?
							$bool71.__nonzero__() :
							(typeof $bool71.__len__=='function'?
								($bool71.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['getDownHoveringFace']();
			}
			else if ((($bool72=(($eq51=face_id)===($eq52=$p['getattr'](self, 'UP_HOVERING'))&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
							$eq51==$eq52)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72.__nonzero__=='function'?
							$bool72.__nonzero__() :
							(typeof $bool72.__len__=='function'?
								($bool72.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['getUpHoveringFace']();
			}
			else if ((($bool73=(($eq53=face_id)===($eq54=$p['getattr'](self, 'UP_DISABLED'))&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
					false :
					(typeof $bool73=='object'?
						(typeof $bool73.__nonzero__=='function'?
							$bool73.__nonzero__() :
							(typeof $bool73.__len__=='function'?
								($bool73.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['getUpDisabledFace']();
			}
			else if ((($bool74=(($eq55=face_id)===($eq56=$p['getattr'](self, 'DOWN_DISABLED'))&&$eq55===null?true:
				($eq55===null?false:($eq56===null?false:
					((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
						((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
							$eq55==$eq56)))))) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['getDownDisabledFace']();
			}
			else {
				throw ($p['Exception']($p['sprintf']('%s is not a known face id.', $p['str'](face_id))));
			}
			return null;
		}
	, 1, [null,null,['self'],['face_id']]);
		$cls_definition['getFaceFromID'] = $method;
		$method = $pyjs__bind_method2('setAriaPressed', function(newFace) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newFace = arguments[1];
			}
			var $eq57,$eq58,pressed;
			pressed = (($eq57=(newFace['getFaceID']())&($p['getattr'](self, 'DOWN_ATTRIBUTE')))===($eq58=1)&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
							$eq57==$eq58)))));
			return null;
		}
	, 1, [null,null,['self'],['newFace']]);
		$cls_definition['setAriaPressed'] = $method;
		$method = $pyjs__bind_method2('setCurrentFace', function(newFace) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newFace = arguments[1];
			}
			var $bool76,$bool77,$bool75,$eq60,$eq59;
			if ((($bool75=(($eq59=$p['getattr'](self, 'curFace'))===($eq60=newFace)&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
							$eq59==$eq60)))))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75.__nonzero__=='function'?
							$bool75.__nonzero__() :
							(typeof $bool75.__len__=='function'?
								($bool75.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool76=($p['getattr'](self, 'curFace') !== null)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76.__nonzero__=='function'?
							$bool76.__nonzero__() :
							(typeof $bool76.__len__=='function'?
								($bool76.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['removeStyleDependentName'](self['curFace']['getName']());
			}
			self.curFace = newFace;
			self['setCurrentFaceElement'](newFace['getFace']());
			self['addStyleDependentName'](self['curFace']['getName']());
			if ((($bool77=$p['getattr'](self, 'isEnabled')) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setAriaPressed'](newFace);
			}
			self.style_name = self['getStyleName']();
			return null;
		}
	, 1, [null,null,['self'],['newFace']]);
		$cls_definition['setCurrentFace'] = $method;
		$method = $pyjs__bind_method2('setCurrentFaceFromID', function(faceID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				faceID = arguments[1];
			}
			var newFace;
			newFace = self['getFaceFromID'](faceID);
			self['setCurrentFace'](newFace);
			return null;
		}
	, 1, [null,null,['self'],['faceID']]);
		$cls_definition['setCurrentFaceFromID'] = $method;
		$method = $pyjs__bind_method2('setCurrentFaceElement', function(newFaceElement) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newFaceElement = arguments[1];
			}
			var $bool78,$bool79,$eq61,$eq62;
			if ((($bool78=(($eq61=$p['getattr'](self, 'curFaceElement'))===($eq62=newFaceElement)&&$eq61===null?true:
				($eq61===null?false:($eq62===null?false:
					((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
						((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
							$eq61==$eq62)))))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool79=($p['getattr'](self, 'curFaceElement') !== null)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
					false :
					(typeof $bool79=='object'?
						(typeof $bool79.__nonzero__=='function'?
							$bool79.__nonzero__() :
							(typeof $bool79.__len__=='function'?
								($bool79.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['DOM']['removeChild'](self['getElement'](), $p['getattr'](self, 'curFaceElement'));
			}
			self.curFaceElement = newFaceElement;
			$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'curFaceElement'));
			return null;
		}
	, 1, [null,null,['self'],['newFaceElement']]);
		$cls_definition['setCurrentFaceElement'] = $method;
		$method = $pyjs__bind_method2('setDownDisabledFace', function(downDisabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				downDisabled = arguments[1];
			}

			self.downDisabled = downDisabled;
			return null;
		}
	, 1, [null,null,['self'],['downDisabled']]);
		$cls_definition['setDownDisabledFace'] = $method;
		$method = $pyjs__bind_method2('setDownFace', function(down) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				down = arguments[1];
			}

			self.down = down;
			return null;
		}
	, 1, [null,null,['self'],['down']]);
		$cls_definition['setDownFace'] = $method;
		$method = $pyjs__bind_method2('setDownHoveringFace', function(downHovering) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				downHovering = arguments[1];
			}

			self.downHovering = downHovering;
			return null;
		}
	, 1, [null,null,['self'],['downHovering']]);
		$cls_definition['setDownHoveringFace'] = $method;
		$method = $pyjs__bind_method2('setUpDisabledFace', function(upDisabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				upDisabled = arguments[1];
			}

			self.upDisabled = upDisabled;
			return null;
		}
	, 1, [null,null,['self'],['upDisabled']]);
		$cls_definition['setUpDisabledFace'] = $method;
		$method = $pyjs__bind_method2('setUpFace', function(up) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				up = arguments[1];
			}

			self.up = up;
			return null;
		}
	, 1, [null,null,['self'],['up']]);
		$cls_definition['setUpFace'] = $method;
		$method = $pyjs__bind_method2('setUpHoveringFace', function(upHovering) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				upHovering = arguments[1];
			}

			self.upHovering = upHovering;
			return null;
		}
	, 1, [null,null,['self'],['upHovering']]);
		$cls_definition['setUpHoveringFace'] = $method;
		$method = $pyjs__bind_method2('toggleDisabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newFaceID;
			newFaceID = (self['getCurrentFace']()['getFaceID']())^($p['getattr'](self, 'DISABLED_ATTRIBUTE'));
			newFaceID &= ~($p['getattr'](self, 'HOVERING_ATTRIBUTE'));
			self['setCurrentFaceFromID'](newFaceID);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleDisabled'] = $method;
		$method = $pyjs__bind_method2('toggleHover', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newFaceID;
			newFaceID = (self['getCurrentFace']()['getFaceID']())^($p['getattr'](self, 'HOVERING_ATTRIBUTE'));
			newFaceID &= ~($p['getattr'](self, 'DISABLED_ATTRIBUTE'));
			self['setCurrentFaceFromID'](newFaceID);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleHover'] = $method;
		var $bases = new Array($m['ButtonBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CustomButton', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.CustomButton', 'CustomButton', $m['CustomButton']);
	return this;
}; /* end pyjamas.ui.CustomButton */


/* end module: pyjamas.ui.CustomButton */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Event', 'pyjamas.ui', 'ButtonBase.ButtonBase', 'ButtonBase', 'pyjamas.ui.Focus', 'UIObject.UIObject', 'UIObject']
*/

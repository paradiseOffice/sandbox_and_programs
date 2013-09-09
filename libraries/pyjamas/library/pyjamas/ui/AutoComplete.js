/* start module: pyjamas.ui.AutoComplete */
$pyjs.loaded_modules['pyjamas.ui.AutoComplete'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.AutoComplete'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.AutoComplete'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.AutoComplete"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.AutoComplete>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.AutoComplete';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['AutoComplete'] = $pyjs.loaded_modules['pyjamas.ui.AutoComplete'];


	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', 'pyjamas.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
	$m['AutoCompleteTextBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.AutoComplete';
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
			var $bool2,$bool1;
			self.choicesPopup = $m['PopupPanel'](true, false);
			self.choices = $m['ListBox']();
			self.items = (typeof SimpleAutoCompletionItems == "undefined"?$m.SimpleAutoCompletionItems:SimpleAutoCompletionItems)();
			self.popupAdded = false;
			self.visible = false;
			self['choices']['addClickListener'](self);
			self['choices']['addChangeListener'](self);
			self['choicesPopup']['add']($p['getattr'](self, 'choices'));
			self['choicesPopup']['addStyleName']('AutoCompleteChoices');
			self['choices']['setStyleName']('list');
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
				kwargs.__setitem__('StyleName', 'gwt-AutoCompleteTextBox');
			}
			$pyjs_kwargs_call($m['TextBox'], '__init__', null, kwargs, [{}, self]);
			self['addKeyboardListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setCompletionItems', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}
			var $bool4,$bool3;
			if ((($bool4=!(($bool3=$p['hasattr'](items, 'getCompletionItems')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				items = (typeof SimpleAutoCompletionItems == "undefined"?$m.SimpleAutoCompletionItems:SimpleAutoCompletionItems)(items);
			}
			self.items = items;
			return null;
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['setCompletionItems'] = $method;
		$method = $pyjs__bind_method2('getCompletionItems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'items');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCompletionItems'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(arg0, arg1, arg2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg0 = arguments[1];
				arg1 = arguments[2];
				arg2 = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['arg0'],['arg1'],['arg2']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(arg0, arg1, arg2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg0 = arguments[1];
				arg1 = arguments[2];
				arg2 = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['arg0'],['arg1'],['arg2']]);
		$cls_definition['onKeyPress'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(arg0, arg1, arg2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg0 = arguments[1];
				arg1 = arguments[2];
				arg2 = arguments[3];
			}
			var $add6,matches,$bool14,$bool15,$bool16,$iter1_iter,$add5,$eq9,$bool17,$and1,$eq11,$eq10,$len2,$eq12,$4,$bool10,$len5,$iter1_array,$bool11,$sub3,$sub2,$sub1,$bool12,$sub4,$eq8,$bool13,$iter1_nextval,$eq2,$eq3,$and2,$eq1,$eq6,$eq7,$eq4,$eq5,$bool6,$bool7,$bool5,selectedIndex,$bool8,$bool9,$2,$3,$1,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$iter1_type,$cmp3,$cmp2,i,$len3,$cmp8,$add2,$add3,$len4,$add1,text,$iter1_idx,$add4,$len1;
			if ((($bool5=(($eq1=arg1)===($eq2=$p['getattr']($m['KeyboardListener'], 'KEY_DOWN'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				selectedIndex = self['choices']['getSelectedIndex']();
				selectedIndex = (typeof ($add1=selectedIndex)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				if ((($bool6=((((($cmp1=selectedIndex)===($cmp2=self['choices']['getItemCount']())?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					selectedIndex = 0;
				}
				self['choices']['setSelectedIndex'](selectedIndex);
				return null;
			}
			if ((($bool7=(($eq3=arg1)===($eq4=$p['getattr']($m['KeyboardListener'], 'KEY_UP'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				selectedIndex = self['choices']['getSelectedIndex']();
				selectedIndex = (typeof ($sub1=selectedIndex)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				if ((($bool8=((($cmp3=selectedIndex)===($cmp4=0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					selectedIndex = (typeof ($sub3=self['choices']['getItemCount']())==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
				}
				self['choices']['setSelectedIndex'](selectedIndex);
				return null;
			}
			if ((($bool9=(($eq5=arg1)===($eq6=$p['getattr']($m['KeyboardListener'], 'KEY_ENTER'))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				if ((($bool10=$p['getattr'](self, 'visible')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					self['complete']();
				}
				return null;
			}
			if ((($bool11=(($eq7=arg1)===($eq8=$p['getattr']($m['KeyboardListener'], 'KEY_ESCAPE'))&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				self['choices']['clear']();
				self['choicesPopup']['hide']();
				self.visible = false;
				return null;
			}
			text = self['getText']();
			matches = $p['list']([]);
			if ((($bool12=((($cmp5=(($len1=text) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				matches = self['items']['getCompletionItems'](text);
			}
			if ((($bool13=((($cmp7=(($len2=matches) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))===($cmp8=0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				self['choices']['clear']();
				$iter1_iter = $p['range']((($len3=matches) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['choices']['addItem']((typeof ($1=matches).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i)));
				}
				if ((($bool15=((($bool14=$and1=(($eq9=(($len4=matches) === null?0:
					(typeof $len4.__array != 'undefined' ? $len4.__array.length:
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'?$len4.length:
								$p['len']($len4))))))===($eq10=1)&&$eq9===null?true:
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
						 true ) )?(($eq11=(typeof ($3=matches).__array != 'undefined'?
					((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(0)))===($eq12=text)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12))))):$and1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self['choicesPopup']['hide']();
				}
				else {
					self['choices']['setSelectedIndex'](0);
					self['choices']['setVisibleItemCount']((typeof ($add3=(($len5=matches) === null?0:
						(typeof $len5.__array != 'undefined' ? $len5.__array.length:
							(typeof $len5.__len__ == 'function'?$len5.__len__():
								(typeof $len5.length != 'undefined'?$len5.length:
									$p['len']($len5))))))==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
					if ((($bool17=!(($bool16=$p['getattr'](self, 'popupAdded')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						$m['RootPanel']()['add']($p['getattr'](self, 'choicesPopup'));
						self.popupAdded = true;
					}
					self['choicesPopup']['show']();
					self.visible = true;
					self['choicesPopup']['setPopupPosition'](self['getAbsoluteLeft'](), (typeof ($add5=self['getAbsoluteTop']())==typeof ($add6=self['getOffsetHeight']()) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)));
					self['choices']['setWidth']($p['sprintf']('%dpx', self['getOffsetWidth']()));
				}
			}
			else {
				self.visible = false;
				self['choicesPopup']['hide']();
			}
			return null;
		}
	, 1, [null,null,['self'],['arg0'],['arg1'],['arg2']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onChange', function(arg0) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg0 = arguments[1];
			}

			self['complete']();
			return null;
		}
	, 1, [null,null,['self'],['arg0']]);
		$cls_definition['onChange'] = $method;
		$method = $pyjs__bind_method2('onClick', function(arg0) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg0 = arguments[1];
			}

			self['complete']();
			return null;
		}
	, 1, [null,null,['self'],['arg0']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('complete', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18,$cmp9,$cmp10;
			if ((($bool18=((($cmp9=self['choices']['getItemCount']())===($cmp10=0)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['setText'](self['choices']['getItemText'](self['choices']['getSelectedIndex']()));
			}
			self['choices']['clear']();
			self['choicesPopup']['hide']();
			self['setFocus'](true);
			self.visible = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['complete'] = $method;
		var $bases = new Array($m['TextBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AutoCompleteTextBox', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.AutoComplete', 'AutoCompleteTextBox', $m['AutoCompleteTextBox']);
	$m['SimpleAutoCompletionItems'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.AutoComplete';
		$method = $pyjs__bind_method2('__init__', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}
			if (typeof items == 'undefined') items=arguments.callee.__args__[3][1];
			var $bool19;
			if ((($bool19=(items === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				items = $p['list']([]);
			}
			self.completions = items;
			return null;
		}
	, 1, [null,null,['self'],['items', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getCompletionItems', function(match) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				match = arguments[1];
			}
			var lower,$iter2_nextval,$iter2_type,$iter2_iter,matches,$len6,i,$iter2_idx,$iter2_array,$8,$6,$7,$5,$bool20;
			matches = $p['list']([]);
			match = match['lower']();
			$iter2_iter = $p['range']((($len6=$p['getattr'](self, 'completions')) === null?0:
				(typeof $len6.__array != 'undefined' ? $len6.__array.length:
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'?$len6.length:
							$p['len']($len6))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				lower = (typeof ($5=$p['getattr'](self, 'completions')).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i))['lower']();
				if ((($bool20=lower['startswith'](match)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					matches['append']((typeof ($7=$p['getattr'](self, 'completions')).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i)));
				}
			}
			return matches;
		}
	, 1, [null,null,['self'],['match']]);
		$cls_definition['getCompletionItems'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SimpleAutoCompletionItems', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.AutoComplete */


/* end module: pyjamas.ui.AutoComplete */


/*
PYJS_DEPS: ['pyjamas.ui.TextBox.TextBox', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.TextBox', 'pyjamas.Factory', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/

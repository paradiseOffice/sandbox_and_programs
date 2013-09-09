/* start module: pyjamas.ui.StackPanel */
$pyjs.loaded_modules['pyjamas.ui.StackPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.StackPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.StackPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.StackPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.StackPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.StackPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['StackPanel'] = $pyjs.loaded_modules['pyjamas.ui.StackPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['StackPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.StackPanel';
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

			self.visibleStack = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			self.indices = $p['dict']([]);
			self.stackListeners = $p['list']([]);
			kwargs.__setitem__('StyleName', kwargs['get']('StyleName', 'gwt-StackPanel'));
			$pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
			$m['DOM']['sinkEvents'](self['getElement'](), $p['getattr']($m['Event'], 'ONCLICK'));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addStackChangeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['stackListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addStackChangeListener'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, stackText, asHTML) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				stackText = arguments[2];
				asHTML = arguments[3];
			}
			if (typeof stackText == 'undefined') stackText=arguments.callee.__args__[4][1];
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
			var index,$eq2,$eq3,$eq1,tr,$eq4,$bool2,$bool1,$sub2,td,$sub1;
			widget['removeFromParent']();
			index = self['getWidgetCount']();
			tr = $m['DOM']['createTR']();
			td = $m['DOM']['createTD']();
			$m['DOM']['appendChild']($p['getattr'](self, 'body'), tr);
			$m['DOM']['appendChild'](tr, td);
			self['setStyleName'](td, 'gwt-StackPanelItem', true);
			self['_setIndex'](td, index);
			$m['DOM']['setAttribute'](td, 'height', '1px');
			tr = $m['DOM']['createTR']();
			td = $m['DOM']['createTD']();
			$m['DOM']['appendChild']($p['getattr'](self, 'body'), tr);
			$m['DOM']['appendChild'](tr, td);
			$m['DOM']['setAttribute'](td, 'height', '100%');
			$m['DOM']['setAttribute'](td, 'vAlign', 'top');
			$m['CellPanel']['add'](self, widget, td);
			self['setStackVisible'](index, false);
			if ((($bool1=(($eq1=$p['getattr'](self, 'visibleStack'))===($eq2=(typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['showStack'](0);
			}
			if ((($bool2=!(($eq3=stackText)===($eq4='')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['setStackText']((typeof ($sub1=self['getWidgetCount']())==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), stackText, asHTML);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['stackText', ''],['asHTML', false]]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var index,$eq8,$eq6,$eq7,$eq5,$bool3,$bool4;
			if ((($bool3=(($eq5=$m['DOM']['eventGetType'](event))===($eq6='click')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				index = self['getDividerIndex']($m['DOM']['eventGetTarget'](event));
				if ((($bool4=!(($eq7=index)===($eq8=(typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['showStack'](index);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('remove', function(child, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
				index = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments.callee.__args__[4][1];
			var $bool5,$iter1_iter,$eq10,$eq11,$eq12,curIndex,$bool9,rowIndex,tr,childTR,$iter1_array,$sub3,td,$sub4,$eq9,$iter1_nextval,rows,$bool6,$bool7,$bool8,$mul4,$mul3,$mul2,$mul1,$cmp1,$iter1_type,$cmp2,i,$add2,$add1,$iter1_idx;
			if ((($bool5=(index === null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				if ((($bool6=$p['isinstance'](child, $p['float_int'])) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					index = child;
					child = self['getWidget'](child);
				}
				else {
					index = self['getWidgetIndex'](child);
				}
			}
			if ((($bool7=!(($eq9=child['getParent']())===($eq10=self)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return false;
			}
			if ((($bool8=(($eq11=$p['getattr'](self, 'visibleStack'))===($eq12=index)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self.visibleStack = (typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4));
			}
			else if ((($bool9=((($cmp1=$p['getattr'](self, 'visibleStack'))===($cmp2=index)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self.visibleStack = (typeof ($sub3=$p['getattr'](self, 'visibleStack'))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
			}
			rowIndex = (typeof ($mul1=2)==typeof ($mul2=index) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			tr = $m['DOM']['getChild']($p['getattr'](self, 'body'), rowIndex);
			$m['DOM']['removeChild']($p['getattr'](self, 'body'), tr);
			tr = $m['DOM']['getChild']($p['getattr'](self, 'body'), rowIndex);
			$m['DOM']['removeChild']($p['getattr'](self, 'body'), tr);
			$m['CellPanel']['remove'](self, child);
			rows = (typeof ($mul3=self['getWidgetCount']())==typeof ($mul4=2) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4));
			$iter1_iter = $p['range'](rowIndex, rows, 2);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				childTR = $m['DOM']['getChild']($p['getattr'](self, 'body'), i);
				td = $m['DOM']['getFirstChild'](childTR);
				curIndex = self['_getIndex'](td);
				self['_setIndex'](td, index);
				index = (typeof ($add1=index)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			return true;
		}
	, 1, [null,null,['self'],['child'],['index', null]]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('_setIndex', function(td, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				td = arguments[1];
				index = arguments[2];
			}

			$p['getattr'](self, 'indices').__setitem__(td, index);
			return null;
		}
	, 1, [null,null,['self'],['td'],['index']]);
		$cls_definition['_setIndex'] = $method;
		$method = $pyjs__bind_method2('_getIndex', function(td) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				td = arguments[1];
			}

			return self['indices']['get'](td);
		}
	, 1, [null,null,['self'],['td']]);
		$cls_definition['_getIndex'] = $method;
		$method = $pyjs__bind_method2('setStackText', function(index, text, asHTML) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				text = arguments[2];
				asHTML = arguments[3];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
			var $cmp4,$cmp3,$bool10,$bool11,$mul6,$mul5,td;
			if ((($bool10=((((($cmp3=index)===($cmp4=self['getWidgetCount']())?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				return null;
			}
			td = $m['DOM']['getChild']($m['DOM']['getChild']($p['getattr'](self, 'body'), (typeof ($mul5=index)==typeof ($mul6=2) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))), 0);
			if ((($bool11=asHTML) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				$m['DOM']['setInnerHTML'](td, text);
			}
			else {
				$m['DOM']['setInnerText'](td, text);
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['text'],['asHTML', false]]);
		$cls_definition['setStackText'] = $method;
		$method = $pyjs__bind_method2('showStack', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $cmp5,$cmp7,$cmp6,$or1,$iter2_iter,$or2,$bool13,$bool14,$cmp8,listener,$iter2_idx,$iter2_nextval,$iter2_type,$eq13,$eq14,$bool12,$iter2_array;
			if ((($bool13=((($bool12=$or1=((((($cmp5=index)===($cmp6=self['getWidgetCount']())?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12.__nonzero__=='function'?
						$bool12.__nonzero__() :
						(typeof $bool12.__len__=='function'?
							($bool12.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:(($eq13=index)===($eq14=$p['getattr'](self, 'visibleStack'))&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14))))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				return null;
			}
			if ((($bool14=((((($cmp7=$p['getattr'](self, 'visibleStack'))===($cmp8=0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self['setStackVisible']($p['getattr'](self, 'visibleStack'), false);
			}
			self.visibleStack = index;
			self['setStackVisible']($p['getattr'](self, 'visibleStack'), true);
			$iter2_iter = $p['getattr'](self, 'stackListeners');
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				listener['onStackChanged'](self, index);
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['showStack'] = $method;
		$method = $pyjs__bind_method2('getDividerIndex', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var expando,$bool18,$and1,$bool16,$bool15,$bool17,$and2;
			while ((($bool17=((($bool15=$and1=(elem !== null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool16=$m['DOM']['compare'](elem, self['getElement']())) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				expando = self['_getIndex'](elem);
				if ((($bool18=(expando !== null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					return $p['float_int'](expando);
				}
				elem = $m['DOM']['getParent'](elem);
			}
			return (typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5));
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['getDividerIndex'] = $method;
		$method = $pyjs__bind_method2('setStackVisible', function(index, visible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				visible = arguments[2];
			}
			var $add4,$bool19,$mul10,tr,$mul9,$mul8,$mul7,td,$add3;
			tr = $m['DOM']['getChild']($p['getattr'](self, 'body'), (typeof ($mul7=index)==typeof ($mul8=2) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			if ((($bool19=(tr === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				return null;
			}
			td = $m['DOM']['getFirstChild'](tr);
			self['setStyleName'](td, 'gwt-StackPanelItem-selected', visible);
			tr = $m['DOM']['getChild']($p['getattr'](self, 'body'), (typeof ($add3=(typeof ($mul9=index)==typeof ($mul10=2) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)))==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			self['setVisible'](tr, visible);
			self['getWidget'](index)['setVisible'](visible);
			return null;
		}
	, 1, [null,null,['self'],['index'],['visible']]);
		$cls_definition['setStackVisible'] = $method;
		$method = $pyjs__bind_method2('getSelectedIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'visibleStack');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedIndex'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StackPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.StackPanel', 'StackPanel', $m['StackPanel']);
	return this;
}; /* end pyjamas.ui.StackPanel */


/* end module: pyjamas.ui.StackPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.Event']
*/

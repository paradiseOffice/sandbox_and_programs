/* start module: pyjamas.ui.FlowTabBar */
$pyjs.loaded_modules['pyjamas.ui.FlowTabBar'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FlowTabBar'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FlowTabBar'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.FlowTabBar"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.FlowTabBar>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlowTabBar';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['FlowTabBar'] = $pyjs.loaded_modules['pyjamas.ui.FlowTabBar'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui', null, false);
	$m['ClickDelegatePanel'] = $p['___import___']('pyjamas.ui.ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui', null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
	$m['FlowTabBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.FlowTabBar';
		$cls_definition['STYLENAME_DEFAULT'] = 'gwt-TabBarItem';
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
			var rest,element,$bool2,$bool3,$bool1,first;
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
				kwargs.__setitem__('StyleName', 'gwt-TabBar');
			}
			element = null;
			if ((($bool3=kwargs['has_key']('Element')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				element = kwargs['pop']('Element');
			}
			self.panel = $pyjs_kwargs_call(null, $m['FlowPanel'], null, null, [{Element:element}]);
			self.selectedTab = null;
			self.tabListeners = $p['list']([]);
			first = $m['HTML']('&nbsp;', true);
			rest = $m['HTML']('&nbsp;', true);
			first['setStyleName']('gwt-TabBarFirst');
			rest['setStyleName']('gwt-TabBarRest');
			first['setHeight']('100%');
			rest['setHeight']('100%');
			self['panel']['add'](first);
			self['panel']['add'](rest);
			first['setHeight']('100%');
			$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'panel')]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONCLICK'));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addTab', function(text, asHTML) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];

			self['insertTab'](text, asHTML, self['getTabCount']());
			return null;
		}
	, 1, [null,null,['self'],['text'],['asHTML', false]]);
		$cls_definition['addTab'] = $method;
		$method = $pyjs__bind_method2('addTabListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTabListener'] = $method;
		$method = $pyjs__bind_method2('getSelectedTab', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub2,$sub1,$bool4;
			if ((($bool4=($p['getattr'](self, 'selectedTab') === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
			}
			return (typeof ($sub1=self['panel']['getWidgetIndex']($p['getattr'](self, 'selectedTab')))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedTab'] = $method;
		$method = $pyjs__bind_method2('getTabCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub4;
			return (typeof ($sub3=self['panel']['getWidgetCount']())==typeof ($sub4=2) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabCount'] = $method;
		$method = $pyjs__bind_method2('getTabHTML', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var fpe,widget,$cmp1,$cmp2,delPanel,$add2,$add1,focusablePanel,$bool7,$bool5,$bool6;
			if ((($bool5=((((($cmp1=index)===($cmp2=self['getTabCount']())?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return null;
			}
			delPanel = self['panel']['getWidget']((typeof ($add1=index)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			focusablePanel = delPanel['getFocusablePanel']();
			widget = focusablePanel['getWidget']();
			if ((($bool6=$p['hasattr'](widget, 'getHTML')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				return widget['getHTML']();
			}
			else if ((($bool7=$p['hasattr'](widget, 'getText')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return widget['getText']();
			}
			else {
				fpe = $m['DOM']['getParent'](self['focusablePanel']['getElement']());
				return $m['DOM']['getInnerHTML'](fpe);
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getTabHTML'] = $method;
		$method = $pyjs__bind_method2('createTabTextWrapper', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createTabTextWrapper'] = $method;
		$method = $pyjs__bind_method2('insertTab', function(text, asHTML, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[5][1];
			var $cmp6,$or1,$cmp5,$cmp3,$cmp4,$bool10,$or2,item,$bool11,$bool8,$bool9,$bool12;
			if ((($bool8=(beforeIndex === null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				beforeIndex = asHTML;
				asHTML = false;
			}
			if ((($bool10=((($bool9=$or1=((($cmp3=beforeIndex)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($cmp5=beforeIndex)===($cmp6=self['getTabCount']())?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
			}
			if ((($bool11=$p['isinstance'](text, $p['basestring'])) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				if ((($bool12=asHTML) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					item = $m['HTML'](text);
				}
				else {
					item = $m['Label'](text);
				}
				item['setWordWrap'](false);
			}
			else {
				item = text;
			}
			self['insertTabWidget'](item, beforeIndex);
			return null;
		}
	, 1, [null,null,['self'],['text'],['asHTML'],['beforeIndex', null]]);
		$cls_definition['insertTab'] = $method;
		$method = $pyjs__bind_method2('insertTabWidget', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var parent,$add3,focusablePanel,$add4,$add5,$add6,delWidget;
			delWidget = $m['ClickDelegatePanel'](self, widget, self, self);
			delWidget['setStyleName']($p['getattr'](self, 'STYLENAME_DEFAULT'));
			focusablePanel = delWidget['getFocusablePanel']();
			self['panel']['insert'](delWidget, self['panel']['getElement'](), (typeof ($add3=beforeIndex)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			parent = $m['DOM']['getParent'](delWidget['getElement']());
			self['setStyleName'](parent, (typeof ($add5=$p['getattr'](self, 'STYLENAME_DEFAULT'))==typeof ($add6='-wrapper') && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)), true);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
		$cls_definition['insertTabWidget'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
			var $iter1_nextval,$iter1_type,$iter1_idx,i,$bool13,$iter1_iter,$sub8,$iter1_array,$sub7,$sub6,$sub5;
			$iter1_iter = $p['range'](1, (typeof ($sub5=self['panel']['getWidgetCount']())==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				if ((($bool13=$m['DOM']['isOrHasChild'](self['panel']['getWidget'](i)['getElement'](), sender['getElement']())) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					return self['selectTab']((typeof ($sub7=i)==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)));
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('removeTab', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $eq2,$eq1,$bool14,$add7,$add8,toRemove;
			self['checkTabIndex'](index);
			toRemove = self['panel']['getWidget']((typeof ($add7=index)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)));
			if ((($bool14=(($eq1=toRemove)===($eq2=$p['getattr'](self, 'selectedTab'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self.selectedTab = null;
			}
			self['panel']['remove'](toRemove);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['removeTab'] = $method;
		$method = $pyjs__bind_method2('removeTabListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTabListener'] = $method;
		$method = $pyjs__bind_method2('selectTab', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$eq3,$iter3_array,$bool15,$bool16,$bool17,listener,$iter2_idx,$iter3_idx,$add10,$eq4,$iter3_type,$add9,$iter3_nextval,$iter2_array,$iter3_iter;
			self['checkTabIndex'](index);
			$iter2_iter = $p['getattr'](self, 'tabListeners');
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				if ((($bool16=!(($bool15=listener['onBeforeTabSelected'](self, index)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					return false;
				}
			}
			self['setSelectionStyle']($p['getattr'](self, 'selectedTab'), false);
			if ((($bool17=(($eq3=index)===($eq4=(typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self.selectedTab = null;
				return true;
			}
			self.selectedTab = self['panel']['getWidget']((typeof ($add9=index)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)));
			self['setSelectionStyle']($p['getattr'](self, 'selectedTab'), true);
			$iter3_iter = $p['getattr'](self, 'tabListeners');
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				listener = $iter3_nextval;
				listener['onTabSelected'](self, index);
			}
			return true;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['selectTab'] = $method;
		$method = $pyjs__bind_method2('checkTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $bool18,$cmp7,$bool19,$or3,$or4,$cmp9,$cmp8,$cmp10;
			if ((($bool19=((($bool18=$or3=((($cmp7=index)===($cmp8=(typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:((((($cmp9=index)===($cmp10=self['getTabCount']())?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))))|1) == 1))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkTabIndex'] = $method;
		$method = $pyjs__bind_method2('setSelectionStyle', function(item, selected) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				selected = arguments[2];
			}
			var $bool21,$bool20;
			if ((($bool20=(item !== null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				if ((($bool21=selected) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					item['addStyleName']('gwt-TabBarItem-selected');
					self['setStyleName']($m['DOM']['getParent'](item['getElement']()), 'gwt-TabBarItem-wrapper-selected', true);
				}
				else {
					item['removeStyleName']('gwt-TabBarItem-selected');
					self['setStyleName']($m['DOM']['getParent'](item['getElement']()), 'gwt-TabBarItem-wrapper-selected', false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item'],['selected']]);
		$cls_definition['setSelectionStyle'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FlowTabBar', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.FlowTabBar', 'FlowTabBar', $m['FlowTabBar']);
	return this;
}; /* end pyjamas.ui.FlowTabBar */


/* end module: pyjamas.ui.FlowTabBar */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Event', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui.ClickDelegatePanel', 'pyjamas.ui.HasAlignment']
*/

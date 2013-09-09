/* start module: pyjamas.ui.ListBox */
$pyjs.loaded_modules['pyjamas.ui.ListBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ListBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ListBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ListBox"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ListBox>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ListBox';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['ListBox'] = $pyjs.loaded_modules['pyjamas.ui.ListBox'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['ListBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.ListBox';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['visible', 'Visible Count', 'VisibleItemCount', null]), $p['tuple'](['name', 'Name', 'Name', null]), $p['tuple'](['selectedIndex', 'Selected Index', 'SelectedIndex', null]), $p['tuple'](['multiple', 'Multiple Select', 'MultiplSelect', null])]);
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
			var $or1,$or2,element,$bool2,$bool3,$bool1;
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
				kwargs.__setitem__('StyleName', 'gwt-ListBox');
			}
			self.INSERT_AT_END = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			element = ((($bool3=$or1=kwargs['pop']('Element', null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createSelect']());
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			$m['ChangeHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1;
			return (typeof ($add1=$m['FocusWidget']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				props = arguments[1];
				builderstate = arguments[2];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,items,v,$iter1_iter,$iter2_idx,$iter1_array,$bool4,$iter2_type,$bool5,k,$iter2_array,$iter1_idx;
			items = $p['dict']([]);
			$iter1_iter = props['items']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				if ((($bool5=!(($bool4=$p['isinstance'](k, $p['float_int'])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					continue;
				}
				items.__setitem__($p['float_int'](k), v);
			}
			items = items['items']();
			items['sort']();
			$iter2_iter = items;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
				k = $tupleassign2[0];
				v = $tupleassign2[1];
				$pyjs_kwargs_call(self, 'addItem', v, null, [{}]);
			}
			return null;
		}
	, 1, [null,null,['self'],['props'],['builderstate']]);
		$cls_definition['_setWeirdProps'] = $method;
		$method = $pyjs__bind_method2('addItem', function(item, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments.callee.__args__[4][1];

			self['insertItem'](item, value, $p['getattr'](self, 'INSERT_AT_END'));
			return null;
		}
	, 1, [null,null,['self'],['item'],['value', null]]);
		$cls_definition['addItem'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool6,h,$cmp1,$cmp2;
			h = self['getElement']();
			while ((($bool6=((($cmp1=$m['DOM']['getChildCount'](h))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$m['DOM']['removeChild'](h, $m['DOM']['getChild'](h, 0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('getItemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getChildCount'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getItemCount'] = $method;
		$method = $pyjs__bind_method2('getItemText', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var child;
			child = $m['DOM']['getChild'](self['getElement'](), index);
			return $m['DOM']['getInnerText'](child);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getItemText'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getSelectedIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'selectedIndex');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedIndex'] = $method;
		$method = $pyjs__bind_method2('getValue', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var option;
			self['checkIndex'](index);
			option = $m['DOM']['getChild'](self['getElement'](), index);
			return $m['DOM']['getAttribute'](option, 'value');
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getValue'] = $method;
		$method = $pyjs__bind_method2('getVisibleItemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'size');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleItemCount'] = $method;
		$method = $pyjs__bind_method2('insertItem', function(item, value, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				value = arguments[2];
				index = arguments[3];
			}
			if (typeof index == 'undefined') index=arguments.callee.__args__[5][1];
			var $bool7;
			if ((($bool7=(index === null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				index = value;
				value = null;
			}
			$m['DOM']['insertListItem'](self['getElement'](), item, value, index);
			return null;
		}
	, 1, [null,null,['self'],['item'],['value'],['index', null]]);
		$cls_definition['insertItem'] = $method;
		$method = $pyjs__bind_method2('isItemSelected', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var option;
			self['checkIndex'](index);
			option = $m['DOM']['getChild'](self['getElement'](), index);
			return $m['DOM']['getBooleanAttribute'](option, 'selected');
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['isItemSelected'] = $method;
		$method = $pyjs__bind_method2('removeItem', function(idx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}
			var child;
			child = $m['DOM']['getChild'](self['getElement'](), idx);
			$m['DOM']['removeChild'](self['getElement'](), child);
			return null;
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['removeItem'] = $method;
		$method = $pyjs__bind_method2('setItemSelected', function(index, selected) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				selected = arguments[2];
			}
			var option,$or3,$or4,$and1,$bool8,$bool9,$and2;
			self['checkIndex'](index);
			option = $m['DOM']['getChild'](self['getElement'](), index);
			$m['DOM']['setIntAttribute'](option, 'selected', ((($bool9=$or3=((($bool8=$and1=selected) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?1:$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:0));
			return null;
		}
	, 1, [null,null,['self'],['index'],['selected']]);
		$cls_definition['setItemSelected'] = $method;
		$method = $pyjs__bind_method2('isMultipleSelect', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getMultipleSelect']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['isMultipleSelect'] = $method;
		$method = $pyjs__bind_method2('getMultipleSelect', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getBooleanAttribute'](self['getElement'](), 'multiple');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMultipleSelect'] = $method;
		$method = $pyjs__bind_method2('setMultipleSelect', function(multiple) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				multiple = arguments[1];
			}

			$m['DOM']['setBooleanAttribute'](self['getElement'](), 'multiple', multiple);
			return null;
		}
	, 1, [null,null,['self'],['multiple']]);
		$cls_definition['setMultipleSelect'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'name', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setSelectedIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'selectedIndex', index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setSelectedIndex'] = $method;
		$method = $pyjs__bind_method2('selectValue', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $iter3_idx,$eq2,$iter3_type,n,$bool10,$iter3_iter,$iter3_array,$iter3_nextval,$eq1;
			$iter3_iter = $p['range'](self['getItemCount']());
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				n = $iter3_nextval;
				if ((($bool10=(($eq1=self['getValue'](n))===($eq2=value)&&$eq1===null?true:
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
							 true ) )) {
					self['setSelectedIndex'](n);
					return n;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['selectValue'] = $method;
		$method = $pyjs__bind_method2('selectItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $iter4_nextval,$eq4,n,$iter4_idx,$bool11,$iter4_type,$eq3,$iter4_array,$iter4_iter;
			$iter4_iter = $p['range'](self['getItemCount']());
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				n = $iter4_nextval;
				if ((($bool11=(($eq3=self['getItemText'](n))===($eq4=item)&&$eq3===null?true:
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
					self['setSelectedIndex'](n);
					return n;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['selectItem'] = $method;
		$method = $pyjs__bind_method2('setItemText', function(index, text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				text = arguments[2];
			}
			var $bool12;
			self['checkIndex'](index);
			if ((($bool12=(text === null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				console['error']('Cannot set an option to have null text');
				return null;
			}
			$m['DOM']['setOptionText'](self['getElement'](), text, index);
			return null;
		}
	, 1, [null,null,['self'],['index'],['text']]);
		$cls_definition['setItemText'] = $method;
		$method = $pyjs__bind_method2('setValue', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var option;
			self['checkIndex'](index);
			option = $m['DOM']['getChild'](self['getElement'](), index);
			$m['DOM']['setAttribute'](option, 'value', value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setValue'] = $method;
		$method = $pyjs__bind_method2('setVisibleItemCount', function(visibleItems) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visibleItems = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'size', visibleItems);
			return null;
		}
	, 1, [null,null,['self'],['visibleItems']]);
		$cls_definition['setVisibleItemCount'] = $method;
		$method = $pyjs__bind_method2('checkIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $or5,$or6,$cmp5,$cmp3,$cmp4,$bool13,$bool14,elem,$cmp6;
			elem = self['getElement']();
			if ((($bool14=((($bool13=$or5=((($cmp3=index)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((((($cmp5=index)===($cmp6=$m['DOM']['getChildCount'](elem))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))))|1) == 1))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkIndex'] = $method;
		$method = $pyjs__bind_method2('getSelectedItemText', function(ignore_first_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ignore_first_value = arguments[1];
			}
			if (typeof ignore_first_value == 'undefined') ignore_first_value=arguments.callee.__args__[3][1];
			var $iter5_nextval,i,$iter5_array,selected,$bool16,$bool15,$iter5_iter,$iter5_idx,$iter5_type,start_idx;
			selected = $p['list']([]);
			if ((($bool15=ignore_first_value) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				start_idx = 1;
			}
			else {
				start_idx = 0;
			}
			$iter5_iter = $p['range'](start_idx, self['getItemCount']());
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				if ((($bool16=self['isItemSelected'](i)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					selected['append'](self['getItemText'](i));
				}
			}
			return selected;
		}
	, 1, [null,null,['self'],['ignore_first_value', false]]);
		$cls_definition['getSelectedItemText'] = $method;
		$method = $pyjs__bind_method2('getSelectedValues', function(ignore_first_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ignore_first_value = arguments[1];
			}
			if (typeof ignore_first_value == 'undefined') ignore_first_value=arguments.callee.__args__[3][1];
			var $bool18,$iter6_idx,$iter6_type,selected,$bool17,i,$iter6_array,$iter6_iter,start_idx,$iter6_nextval;
			selected = $p['list']([]);
			if ((($bool17=ignore_first_value) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				start_idx = 1;
			}
			else {
				start_idx = 0;
			}
			$iter6_iter = $p['range'](start_idx, self['getItemCount']());
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				if ((($bool18=self['isItemSelected'](i)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					selected['append'](self['getValue'](i));
				}
			}
			return selected;
		}
	, 1, [null,null,['self'],['ignore_first_value', false]]);
		$cls_definition['getSelectedValues'] = $method;
		$method = $pyjs__bind_method2('setItemTextSelection', function(values) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $bool19,$iter7_nextval,i,$iter7_iter,$iter7_array,$bool20,$iter7_idx,$bool21,$iter7_type;
			if ((($bool20=!(($bool19=values) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				values = $p['list']([]);
				self['setSelectedIndex'](0);
			}
			$iter7_iter = $p['range'](0, self['getItemCount']());
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				if ((($bool21=values.__contains__(self['getItemText'](i))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					self['setItemSelected'](i, 'selected');
				}
				else {
					self['setItemSelected'](i, '');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['setItemTextSelection'] = $method;
		$method = $pyjs__bind_method2('setValueSelection', function(values) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $iter8_idx,i,$iter8_array,$iter8_iter,$bool24,$iter8_nextval,$bool23,$bool22,$iter8_type;
			if ((($bool23=!(($bool22=values) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				values = $p['list']([]);
				self['setSelectedIndex'](0);
			}
			$iter8_iter = $p['range'](0, self['getItemCount']());
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				i = $iter8_nextval;
				if ((($bool24=values.__contains__(self['getValue'](i))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					self['setItemSelected'](i, 'selected');
				}
				else {
					self['setItemSelected'](i, '');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['setValueSelection'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['ChangeHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ListBox', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.ListBox', 'ListBox', $m['ListBox']);
	return this;
}; /* end pyjamas.ui.ListBox */


/* end module: pyjamas.ui.ListBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.Event']
*/

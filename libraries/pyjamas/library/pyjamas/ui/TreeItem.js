/* start module: pyjamas.ui.TreeItem */
$pyjs.loaded_modules['pyjamas.ui.TreeItem'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TreeItem'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TreeItem'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.TreeItem"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.TreeItem>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TreeItem';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['TreeItem'] = $pyjs.loaded_modules['pyjamas.ui.TreeItem'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
	$m['TreeContentPanel'] = $p['___import___']('pyjamas.ui.TreeContentPanel.TreeContentPanel', 'pyjamas.ui', null, false);
	$m['TreeItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.TreeItem';
		$method = $pyjs__bind_method2('__init__', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
				var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					var ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				var ka = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						ka = html;
						html = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			var $or1,tdContent,$or2,tdImg,tr,element,$bool2,$bool3,$bool1,$pyjs_try_err,$bool4,$bool5,tbody;
			self.children = $p['list']([]);
			self.attached = false;
			self.contentPanel = null;
			self.itemTable = null;
			self.contentElem = null;
			self.imgElem = null;
			self.childSpanElem = null;
			self.open = false;
			self.parent = null;
			self.selected = false;
			self.tree = null;
			self.userObject = null;
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
			self.itemTable = $m['DOM']['createTable']();
			self.contentElem = $m['DOM']['createSpan']();
			self.childSpanElem = $m['DOM']['createSpan']();
			self.imgElem = $m['DOM']['createImg']();
			tbody = $m['DOM']['createTBody']();
			tr = $m['DOM']['createTR']();
			tdImg = $m['DOM']['createTD']();
			tdContent = $m['DOM']['createTD']();
			$m['DOM']['appendChild']($p['getattr'](self, 'itemTable'), tbody);
			$m['DOM']['appendChild'](tbody, tr);
			$m['DOM']['appendChild'](tr, tdImg);
			$m['DOM']['appendChild'](tr, tdContent);
			$m['DOM']['setStyleAttribute'](tdImg, 'verticalAlign', 'middle');
			$m['DOM']['setStyleAttribute'](tdContent, 'verticalAlign', 'middle');
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'cursor', 'pointer');
			$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'itemTable'));
			$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'childSpanElem'));
			$m['DOM']['appendChild'](tdImg, $p['getattr'](self, 'imgElem'));
			$m['DOM']['appendChild'](tdContent, $p['getattr'](self, 'contentElem'));
			try {
				$m['DOM']['setAttribute'](self['getElement'](), 'position', 'relative');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'contentElem'), 'display', 'inline');
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'whiteSpace', 'nowrap');
			try {
				$m['DOM']['setAttribute']($p['getattr'](self, 'itemTable'), 'whiteSpace', 'nowrap');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'childSpanElem'), 'whiteSpace', 'nowrap');
			self['setStyleName']($p['getattr'](self, 'contentElem'), 'gwt-TreeItem', true);
			if ((($bool2=(html !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				try {
					if ((($bool3=$p['isinstance'](html, (typeof unicode == "undefined"?$m.unicode:unicode))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						ka.__setitem__('HTML', html);
					}
					else if ((($bool4=$p['isinstance'](html, $p['basestring'])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						ka.__setitem__('HTML', html);
					}
					else {
						ka.__setitem__('Widget', html);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						if ((($bool5=$p['isinstance'](html, $p['basestring'])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
							ka.__setitem__('HTML', html);
						}
						else {
							ka.__setitem__('Widget', html);
						}
					}
				}
			}
			$pyjs_kwargs_call($m['UIObject'], '__init__', null, ka, [{}, self]);
			return null;
		}
	, 1, [null,['ka'],['self'],['html', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['children']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
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
			var $eq2,$or3,$or4,$bool10,$bool11,$eq1,$bool6,$bool7,$len1,$bool8,$bool9,$bool12;
			if ((($bool7=!(($bool6=$p['hasattr'](item, 'getTree')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				item = $m['TreeItem'](item);
			}
			if ((($bool9=((($bool8=$or3=(item['getParentItem']() !== null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:(item['getTree']() !== null))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				item['remove']();
			}
			item['setTree']($p['getattr'](self, 'tree'));
			item['setParentItem'](self);
			if ((($bool10=(index === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				self['children']['append'](item);
			}
			else {
				self['children']['insert'](index, item);
			}
			$m['DOM']['setStyleAttribute'](item['getElement'](), 'marginLeft', '16px');
			if ((($bool11=(index === null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				$m['DOM']['appendChild']($p['getattr'](self, 'childSpanElem'), item['getElement']());
			}
			else {
				$m['DOM']['insertChild']($p['getattr'](self, 'childSpanElem'), item['getElement'](), index);
			}
			if ((($bool12=(($eq1=(($len1=$p['getattr'](self, 'children')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq2=1)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['updateState']();
			}
			return item;
		}
	, 1, [null,null,['self'],['item'],['index', null]]);
		$cls_definition['insertItem'] = $method;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$bool13,$bool14,$iter1_iter,item,$iter1_array,w,$iter1_idx;
			if ((($bool13=$p['getattr'](self, 'attached')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
			self.attached = true;
			$iter1_iter = $p['getattr'](self, 'children');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				item = $iter1_nextval;
				item['onAttach']();
			}
			w = self['getWidget']();
			if ((($bool14=w) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				w['onAttach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$bool15,item,$iter2_idx,w,$iter2_array;
			self.attached = false;
			$iter2_iter = $p['getattr'](self, 'children');
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				item = $iter2_nextval;
				item['onDetach']();
			}
			w = self['getWidget']();
			if ((($bool15=w) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				w['onDetach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('getChild', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $or5,$or6,$cmp1,$cmp3,$cmp2,$bool16,$bool17,$cmp4,$len2,$2,$1;
			if ((($bool17=((($bool16=$or5=((($cmp1=index)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((((($cmp3=index)===($cmp4=(($len2=$p['getattr'](self, 'children')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
			return (typeof ($1=$p['getattr'](self, 'children')).__array != 'undefined'?
				((typeof $1.__array[$2=index]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(index));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getChild'] = $method;
		$method = $pyjs__bind_method2('getChildCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len3;
			return (($len3=$p['getattr'](self, 'children')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChildCount'] = $method;
		$method = $pyjs__bind_method2('getChildIndex', function(child) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			return self['children']['index'](child);
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['getChildIndex'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerHTML']($p['getattr'](self, 'contentElem'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerText']($p['getattr'](self, 'contentElem'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('getParentItem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'parent');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getParentItem'] = $method;
		$method = $pyjs__bind_method2('getState', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'open');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getState'] = $method;
		$method = $pyjs__bind_method2('getTree', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tree');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTree'] = $method;
		$method = $pyjs__bind_method2('getUserObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'userObject');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUserObject'] = $method;
		$method = $pyjs__bind_method2('getWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18;
			if ((($bool18=($p['getattr'](self, 'contentPanel') === null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				return null;
			}
			return self['contentPanel']['getWidget']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method2('isSelected', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'selected');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isSelected'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19,$bool20;
			if ((($bool19=($p['getattr'](self, 'parent') !== null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['parent']['removeItem'](self);
			}
			else if ((($bool20=($p['getattr'](self, 'tree') !== null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				self['tree']['removeItem'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $eq3,$eq4,$len4,$bool21,$bool22;
			if ((($bool21=!$p['getattr'](self, 'children').__contains__(item)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
			item['setTree'](null);
			item['setParentItem'](null);
			self['children']['remove'](item);
			$m['DOM']['removeChild']($p['getattr'](self, 'childSpanElem'), item['getElement']());
			if ((($bool22=(($eq3=(($len4=$p['getattr'](self, 'children')) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))))===($eq4=0)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				self['updateState']();
			}
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
			var $cmp5,$cmp6,$bool23;
			while ((($bool23=((($cmp5=self['getChildCount']())===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				self['removeItem'](self['getChild'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeItems'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self['clearContentPanel']();
			$m['DOM']['setInnerHTML']($p['getattr'](self, 'contentElem'), html);
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

			self['clearContentPanel']();
			$m['DOM']['setInnerText']($p['getattr'](self, 'contentElem'), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('setSelected', function(selected) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selected = arguments[1];
			}
			var $bool24,$eq6,$eq5;
			if ((($bool24=(($eq5=$p['getattr'](self, 'selected'))===($eq6=selected)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				return null;
			}
			self.selected = selected;
			self['setStyleName']($p['getattr'](self, 'contentElem'), 'gwt-TreeItem-selected', selected);
			return null;
		}
	, 1, [null,null,['self'],['selected']]);
		$cls_definition['setSelected'] = $method;
		$method = $pyjs__bind_method2('setState', function(open, fireEvents) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				open = arguments[1];
				fireEvents = arguments[2];
			}
			if (typeof fireEvents == 'undefined') fireEvents=arguments.callee.__args__[4][1];
			var $or7,$eq8,$or8,$eq7,$bool25,$bool27,$bool26,$len5,$bool28;
			if ((($bool27=((($bool26=$or7=!(($bool25=open) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:!(($eq7=(($len5=$p['getattr'](self, 'children')) === null?0:
				(typeof $len5.__array != 'undefined' ? $len5.__array.length:
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'?$len5.length:
							$p['len']($len5))))))===($eq8=0)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				self.open = open;
				self['updateState']();
			}
			if ((($bool28=fireEvents) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				self['tree']['fireStateChanged'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['open'],['fireEvents', true]]);
		$cls_definition['setState'] = $method;
		$method = $pyjs__bind_method2('setUserObject', function(userObj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userObj = arguments[1];
			}

			self.userObject = userObj;
			return null;
		}
	, 1, [null,null,['self'],['userObj']]);
		$cls_definition['setUserObject'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['ensureContentPanel']();
			self['contentPanel']['setWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method2('clearContentPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool31,$bool29,$bool30,child;
			if ((($bool29=($p['getattr'](self, 'contentPanel') !== null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				child = self['contentPanel']['getWidget']();
				if ((($bool30=(child !== null)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					self['contentPanel']['remove'](child);
				}
				if ((($bool31=($p['getattr'](self, 'tree') !== null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					self['tree']['disown']($p['getattr'](self, 'contentPanel'));
					self.contentPanel = null;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearContentPanel'] = $method;
		$method = $pyjs__bind_method2('ensureContentPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool32,$bool33;
			if ((($bool32=($p['getattr'](self, 'contentPanel') === null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				$m['DOM']['setInnerHTML']($p['getattr'](self, 'contentElem'), '');
				self.contentPanel = $m['TreeContentPanel']($p['getattr'](self, 'contentElem'));
				self['contentPanel']['setTreeItem'](self);
				if ((($bool33=(self['getTree']() !== null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['tree']['adopt']($p['getattr'](self, 'contentPanel'));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['ensureContentPanel'] = $method;
		$method = $pyjs__bind_method2('addTreeItems', function(accum) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				accum = arguments[1];
			}
			var $iter3_idx,$iter3_type,item,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['getattr'](self, 'children');
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				item = $iter3_nextval;
				accum['append'](item);
				item['addTreeItems'](accum);
			}
			return null;
		}
	, 1, [null,null,['self'],['accum']]);
		$cls_definition['addTreeItems'] = $method;
		$method = $pyjs__bind_method2('getChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'children');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChildren'] = $method;
		$method = $pyjs__bind_method2('getContentElem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'contentElem');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContentElem'] = $method;
		$method = $pyjs__bind_method2('getContentHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'itemTable'), 'offsetHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContentHeight'] = $method;
		$method = $pyjs__bind_method2('getImageElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'imgElem');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageElement'] = $method;
		$method = $pyjs__bind_method2('getTreeTop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ret,$add2,item,$add1,$bool34;
			item = self;
			ret = 0;
			while ((($bool34=(item !== null)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				ret = (typeof ($add1=ret)==typeof ($add2=$m['DOM']['getIntAttribute'](item['getElement'](), 'offsetTop')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				item = item['getParentItem']();
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTreeTop'] = $method;
		$method = $pyjs__bind_method2('getFocusableWidget', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var widget,$bool35;
			widget = self['getWidget']();
			if ((($bool35=$p['hasattr'](widget, 'setFocus')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				return widget;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFocusableWidget'] = $method;
		$method = $pyjs__bind_method2('imgSrc', function(img) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img = arguments[1];
			}
			var src,$add3,$bool36,$add4;
			if ((($bool36=($p['getattr'](self, 'tree') === null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				return img;
			}
			src = (typeof ($add3=self['tree']['getImageBase']())==typeof ($add4=img) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			return src;
		}
	, 1, [null,null,['self'],['img']]);
		$cls_definition['imgSrc'] = $method;
		$method = $pyjs__bind_method2('setParentItem', function(parent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
			}

			self.parent = parent;
			return null;
		}
	, 1, [null,null,['self'],['parent']]);
		$cls_definition['setParentItem'] = $method;
		$method = $pyjs__bind_method2('setTree', function(tree) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tree = arguments[1];
			}
			var $eq9,$bool42,$bool41,$bool40,$iter4_nextval,$and1,$iter4_idx,$iter4_array,$and2,$bool37,$iter4_type,child,$eq10,$eq11,$bool38,$bool39,$iter4_iter,$eq12;
			if ((($bool37=(($eq9=$p['getattr'](self, 'tree'))===($eq10=tree)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				return null;
			}
			if ((($bool38=($p['getattr'](self, 'tree') !== null)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				if ((($bool39=(($eq11=self['tree']['getSelectedItem']())===($eq12=self)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['tree']['setSelectedItem'](null);
				}
				if ((($bool40=($p['getattr'](self, 'contentPanel') !== null)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					self['tree']['disown']($p['getattr'](self, 'contentPanel'));
				}
			}
			self.tree = tree;
			$iter4_iter = $p['getattr'](self, 'children');
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				child = $iter4_nextval;
				child['setTree'](tree);
			}
			self['updateState']();
			if ((($bool42=((($bool41=$and1=(tree !== null)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?($p['getattr'](self, 'contentPanel') !== null):$and1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				tree['adopt']($p['getattr'](self, 'contentPanel'));
			}
			return null;
		}
	, 1, [null,null,['self'],['tree']]);
		$cls_definition['setTree'] = $method;
		$method = $pyjs__bind_method2('updateState', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool44,$bool43,$len6,$eq13,$eq14;
			if ((($bool43=(($eq13=(($len6=$p['getattr'](self, 'children')) === null?0:
				(typeof $len6.__array != 'undefined' ? $len6.__array.length:
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'?$len6.length:
							$p['len']($len6))))))===($eq14=0)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				self['setVisible']($p['getattr'](self, 'childSpanElem'), false);
				$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', self['imgSrc']('tree_white.gif'));
				return null;
			}
			if ((($bool44=$p['getattr'](self, 'open')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				self['setVisible']($p['getattr'](self, 'childSpanElem'), true);
				$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', self['imgSrc']('tree_open.gif'));
			}
			else {
				self['setVisible']($p['getattr'](self, 'childSpanElem'), false);
				$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', self['imgSrc']('tree_closed.gif'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateState'] = $method;
		$method = $pyjs__bind_method2('updateStateRecursive', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,i,$iter5_idx,child,$len7,$iter5_iter,$iter5_array,$iter5_type,$4,$3;
			self['updateState']();
			$iter5_iter = $p['range']((($len7=$p['getattr'](self, 'children')) === null?0:
				(typeof $len7.__array != 'undefined' ? $len7.__array.length:
					(typeof $len7.__len__ == 'function'?$len7.__len__():
						(typeof $len7.length != 'undefined'?$len7.length:
							$p['len']($len7))))));
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				child = (typeof ($3=$p['getattr'](self, 'children')).__array != 'undefined'?
					((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(i));
				child['updateStateRecursive']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateStateRecursive'] = $method;
		var $bases = new Array($m['UIObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TreeItem', $p['tuple']($bases), $data);
	})();
	$m['RootTreeItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.TreeItem';
		$method = $pyjs__bind_method2('addItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			self['insertItem'](item);
			return null;
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
			var $bool47,$bool45,$bool46,$or9,$or10;
			if ((($bool46=((($bool45=$or9=(item['getParentItem']() !== null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
				false :
				(typeof $bool45=='object'?
					(typeof $bool45.__nonzero__=='function'?
						$bool45.__nonzero__() :
						(typeof $bool45.__len__=='function'?
							($bool45.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:(item['getTree']() !== null))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				item['remove']();
			}
			item['setTree'](self['getTree']());
			item['setParentItem'](null);
			if ((($bool47=(index === null)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				self['children']['append'](item);
			}
			else {
				self['children']['insert'](index, item);
			}
			$m['DOM']['setIntStyleAttribute'](item['getElement'](), 'marginLeft', 0);
			return null;
		}
	, 1, [null,null,['self'],['item'],['index', null]]);
		$cls_definition['insertItem'] = $method;
		$method = $pyjs__bind_method2('removeItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $bool48;
			if ((($bool48=!$p['getattr'](self, 'children').__contains__(item)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				return null;
			}
			item['setTree'](null);
			item['setParentItem'](null);
			self['children']['remove'](item);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['removeItem'] = $method;
		var $bases = new Array($m['TreeItem']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RootTreeItem', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.TreeItem', 'TreeItem', $m['TreeItem']);
	return this;
}; /* end pyjamas.ui.TreeItem */


/* end module: pyjamas.ui.TreeItem */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'pyjamas.ui.TreeContentPanel.TreeContentPanel', 'pyjamas.ui.TreeContentPanel']
*/

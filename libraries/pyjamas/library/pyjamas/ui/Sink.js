/* start module: pyjamas.ui.Sink */
$pyjs.loaded_modules['pyjamas.ui.Sink'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Sink'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Sink'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Sink"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Sink>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Sink';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Sink'] = $pyjs.loaded_modules['pyjamas.ui.Sink'];


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
	$m['SinkList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Sink';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Composite']['__init__'](self);
			self.vp_list = $m['VerticalPanel']();
			self.sinks = $p['list']([]);
			self.selectedSink = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			self['initWidget']($p['getattr'](self, 'vp_list'));
			self['setStyleName']('ks-List');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				info = arguments[1];
			}
			var link,name;
			name = info['getName']();
			link = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{TargetHistoryToken:name}, name, false]);
			link['setStyleName']('ks-SinkItem');
			self['vp_list']['add'](link);
			self['sinks']['append'](info);
			return null;
		}
	, 1, [null,null,['self'],['info']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('find', function(sinkName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sinkName = arguments[1];
			}
			var info,$iter1_nextval,$iter1_type,$eq2,$eq1,$iter1_iter,$bool1,$iter1_array,$iter1_idx;
			$iter1_iter = $p['getattr'](self, 'sinks');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				info = $iter1_nextval;
				if ((($bool1=(($eq1=info['getName']())===($eq2=sinkName)&&$eq1===null?true:
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
					return info;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sinkName']]);
		$cls_definition['find'] = $method;
		$method = $pyjs__bind_method2('setSinkSelection', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var info,widget,$iter2_nextval,$iter2_type,$iter2_iter,i,$eq3,$eq6,$eq4,$eq5,$bool2,$bool3,$iter2_idx,$len1,$2,$iter2_array,$1;
			if ((($bool2=!(($eq3=$p['getattr'](self, 'selectedSink'))===($eq4=(typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))&&$eq3===null?true:
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
				self['vp_list']['getWidget']($p['getattr'](self, 'selectedSink'))['removeStyleName']('ks-SinkItem-selected');
			}
			$iter2_iter = $p['range']((($len1=$p['getattr'](self, 'sinks')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				info = (typeof ($1=$p['getattr'](self, 'sinks')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i));
				if ((($bool3=(($eq5=info['getName']())===($eq6=name)&&$eq5===null?true:
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
					self.selectedSink = i;
					widget = self['vp_list']['getWidget']($p['getattr'](self, 'selectedSink'));
					widget['addStyleName']('ks-SinkItem-selected');
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setSinkSelection'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SinkList', $p['tuple']($bases), $data);
	})();
	$m['Sink'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Sink';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Composite']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onHide', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onHide'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		$method = $pyjs__bind_method2('baseURL', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '';
		}
	, 1, [null,null,['self']]);
		$cls_definition['baseURL'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Sink', $p['tuple']($bases), $data);
	})();
	$m['SinkInfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Sink';
		$method = $pyjs__bind_method2('__init__', function(name, desc, object_type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				desc = arguments[2];
				object_type = arguments[3];
			}

			self.$$name = name;
			self.description = desc;
			self.object_type = object_type;
			self.instance = null;
			return null;
		}
	, 1, [null,null,['self'],['name'],['desc'],['object_type']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj;
			obj = self['object_type']();
			obj.$$name = $p['getattr'](self, '$$name');
			return obj;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createInstance'] = $method;
		$method = $pyjs__bind_method2('getDescription', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'description');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDescription'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool4;
			if ((($bool4=($p['getattr'](self, 'instance') === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self.instance = self['createInstance']();
			}
			return $p['getattr'](self, 'instance');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getInstance'] = $method;
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
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SinkInfo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.Sink */


/* end module: pyjamas.ui.Sink */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink']
*/

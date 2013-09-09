/* start module: pyjamas.ui.Hidden */
$pyjs.loaded_modules['pyjamas.ui.Hidden'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Hidden'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Hidden'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Hidden"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Hidden>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Hidden';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Hidden'] = $pyjs.loaded_modules['pyjamas.ui.Hidden'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['Hidden'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Hidden';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['name', 'Name', 'Name', null]), $p['tuple'](['value', 'Value', 'Value', null]), $p['tuple'](['defaultValue', 'Default Value', 'DefaultValue', null])]);
		$method = $pyjs__bind_method2('__init__', function(name, value) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof value != 'undefined') {
					if (value !== null && typeof value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = value;
						value = arguments[3];
					}
				} else 				if (typeof name != 'undefined') {
					if (name !== null && typeof name['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = name;
						name = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof name == 'undefined') name=arguments.callee.__args__[3][1];
			if (typeof value == 'undefined') value=arguments.callee.__args__[4][1];
			var $or1,$or2,element,$bool2,$bool3,$bool1;
			name = kwargs['get']('Name', name);
			if ((($bool1=(name !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				kwargs.__setitem__('Name', name);
			}
			value = kwargs['get']('Value', value);
			if ((($bool2=(value !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				kwargs.__setitem__('Value', kwargs['get']('Value', value));
			}
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
					 true ) )?$or1:$m['DOM']['createElement']('input'));
			self['setElement'](element);
			$m['DOM']['setAttribute'](element, 'type', 'hidden');
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['name', null],['value', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1;
			return (typeof ($add1=$m['Widget']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getDefaultValue', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'defaultValue');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDefaultValue'] = $method;
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
		$method = $pyjs__bind_method2('getValue', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'value');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getValue'] = $method;
		$method = $pyjs__bind_method2('setDefaultValue', function(defaultValue) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				defaultValue = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'defaultValue', defaultValue);
			return null;
		}
	, 1, [null,null,['self'],['defaultValue']]);
		$cls_definition['setDefaultValue'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $eq2,$eq1,$bool4,$len1,$bool5;
			if ((($bool4=(name === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				throw ($p['ValueError']('Name cannot be null'));
				console['error']('Name cannot be null');
			}
			else if ((($bool5=(($eq1=(($len1=name) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq2=0)&&$eq1===null?true:
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
				throw ($p['ValueError']('Name cannot be an empty string.'));
				console['error']('Name cannot be an empty string.');
			}
			$m['DOM']['setAttribute'](self['getElement'](), 'name', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setValue', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'value', value);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setValue'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Hidden', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Hidden', 'Hidden', $m['Hidden']);
	return this;
}; /* end pyjamas.ui.Hidden */


/* end module: pyjamas.ui.Hidden */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget']
*/

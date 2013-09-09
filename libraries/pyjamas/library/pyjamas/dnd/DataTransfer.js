/* start module: pyjamas.dnd.DataTransfer */
$pyjs.loaded_modules['pyjamas.dnd.DataTransfer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.dnd.DataTransfer'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.dnd.DataTransfer'];
	if(typeof $pyjs.loaded_modules['pyjamas.dnd'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.dnd'].__was_initialized__) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs.loaded_modules["pyjamas.dnd.DataTransfer"];
	$m.__repr__ = function() { return "<module: pyjamas.dnd.DataTransfer>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.DataTransfer';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.dnd']['DataTransfer'] = $pyjs.loaded_modules['pyjamas.dnd.DataTransfer'];


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.dnd', null, false);
	$m['cloneElement'] = $p['___import___']('pyjamas.dnd.utils.cloneElement', 'pyjamas.dnd', null, false);
	$m['DOMStringList'] = $p['___import___']('pyjamas.dnd.utils.DOMStringList', 'pyjamas.dnd', null, false);
	$m['READ_ONLY'] = $p['___import___']('pyjamas.dnd.READ_ONLY', 'pyjamas.dnd', null, false);
	$m['READ_WRITE'] = $p['___import___']('pyjamas.dnd.READ_WRITE', 'pyjamas.dnd', null, false);
	$m['PROTECTED'] = $p['___import___']('pyjamas.dnd.PROTECTED', 'pyjamas.dnd', null, false);
	$m['DISABLED'] = $p['___import___']('pyjamas.dnd.DISABLED', 'pyjamas.dnd', null, false);
	$m['identity'] = function(obj) {

		return obj;
	};
	$m['identity'].__name__ = 'identity';

	$m['identity'].__bind_type__ = 0;
	$m['identity'].__args__ = [null,null,['obj']];
	$m['DataTransferItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.dnd.DataTransfer';
		$method = $pyjs__bind_method2('__init__', function(type, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				data = arguments[2];
			}

			self._type = type;
			self._data = data;
			return null;
		}
	, 1, [null,null,['self'],['type'],['data']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getType', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq1,$bool1;
			if ((($bool1=(($eq1=$p['getattr'](self, 'mode'))===($eq2=$m['DISABLED'])&&$eq1===null?true:
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
				return '';
			}
			return $p['getattr'](self, '_type');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getType'] = $method;
		$cls_definition['type'] = $p['property']($p['staticmethod']($cls_definition['getType']));
		$method = $pyjs__bind_method2('getKind', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$eq3,$eq4;
			if ((($bool2=(($eq3=$p['getattr'](self, 'mode'))===($eq4=$m['DISABLED'])&&$eq3===null?true:
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
				return '';
			}
			return 'string';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getKind'] = $method;
		$cls_definition['kind'] = $p['property']($p['staticmethod']($cls_definition['getKind']));
		$method = $pyjs__bind_method2('getMode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_mode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMode'] = $method;
		$method = $pyjs__bind_method2('setMode', function(mode) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}

			self._mode = mode;
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['setMode'] = $method;
		$cls_definition['mode'] = $p['property']($p['staticmethod']($cls_definition['getMode']), $p['staticmethod']($cls_definition['setMode']));
		$method = $pyjs__bind_method2('getAsString', function(callback) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}
			if (typeof callback == 'undefined') callback=arguments.callee.__args__[3][1];
			var $bool3,$and1,$eq6,$eq5,$bool4,$bool5,$and2;
			if ((($bool4=((($bool3=$and1=callback) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq5=$p['getattr'](self, 'kind'))===($eq6='string')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool5=$p['list']([$m['READ_WRITE'], $m['READ_ONLY']]).__contains__($p['getattr'](self, 'mode'))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					callback($p['getattr'](self, '_data'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['callback', null]]);
		$cls_definition['getAsString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_data');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTransferItem', $p['tuple']($bases), $data);
	})();
	$m['DataTransferItems'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.dnd.DataTransfer';
		$method = $pyjs__bind_method2('getMode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_mode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMode'] = $method;
		$method = $pyjs__bind_method2('setMode', function(mode) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,item,$iter1_array;
			self._mode = mode;
			$iter1_iter = self;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				item = $iter1_nextval;
				item.mode = mode;
			}
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['setMode'] = $method;
		$cls_definition['mode'] = $p['property']($p['staticmethod']($cls_definition['getMode']), $p['staticmethod']($cls_definition['setMode']));
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $eq8,$eq7,$bool6,$bool7;
			if ((($bool7=!(($bool6=(($eq7=$p['getattr'](self, 'mode'))===($eq8=$m['READ_WRITE'])&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				throw ($p['Exception']('Cannot delete item except in READ_WRITE mode.'));
			}
			else {
				$p['list']['__delitem__'](self, key);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq10,$eq9,$bool8;
			if ((($bool8=(($eq9=$p['getattr'](self, 'mode'))===($eq10=$m['DISABLED'])&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return 0;
			}
			return $p['list']['__len__'](self);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool10,$len1,$eq11,$eq12,$bool9;
			if ((($bool9=(($eq11=$p['getattr'](self, 'mode'))===($eq12=$m['READ_WRITE'])&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				while ((($bool10=(($len1=self) === null?0:
					(typeof $len1.__array != 'undefined' ? $len1.__array.length:
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'?$len1.length:
								$p['len']($len1)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					self.__delitem__((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('add', function(data, mime) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				mime = arguments[2];
			}
			var idx,$2,$eq14,item,$bool11,$eq13,$1;
			if ((($bool11=(($eq13=$p['getattr'](self, 'mode'))===($eq14=$m['READ_WRITE'])&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				item = $m['DataTransferItem'](mime['lower'](), data);
				self['append'](item);
				idx = self['index'](item);
				return (typeof ($1=self).__array != 'undefined'?
					((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(idx));
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['mime']]);
		$cls_definition['add'] = $method;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTransferItems', $p['tuple']($bases), $data);
	})();
	$m['DragDataStore'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.dnd.DataTransfer';
		$cls_definition['_mode'] = $m['PROTECTED'];
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.items = $m['DataTransferItems']();
			self.default_feedback = null;
			self.elements = $p['list']([]);
			self.bitmap = null;
			self.hotspot_coordinate = null;
			self.allowed_effects_state = 'uninitialized';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setMode', function(mode) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}
			var $bool12;
			if ((($bool12=$p['list']([$m['PROTECTED'], $m['READ_WRITE'], $m['READ_ONLY']]).__contains__(mode)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self._mode = mode;
				$p['getattr'](self, 'items').mode = mode;
			}
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['setMode'] = $method;
		$method = $pyjs__bind_method2('getMode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_mode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMode'] = $method;
		$cls_definition['mode'] = $p['property']($p['staticmethod']($cls_definition['getMode']), $p['staticmethod']($cls_definition['setMode']));
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DragDataStore', $p['tuple']($bases), $data);
	})();
	$m['DataTransfer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.dnd.DataTransfer';
		$method = $pyjs__bind_method2('__init__', function(dataStore) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dataStore = arguments[1];
			}

			self.dataStore = dataStore;
			self['setEffectAllowed']($p['getattr'](dataStore, 'allowed_effects_state'));
			self._dropEffect = 'none';
			self._value = null;
			return null;
		}
	, 1, [null,null,['self'],['dataStore']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('acquireData', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self._value = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['acquireData'] = $method;
		$method = $pyjs__bind_method2('setDropEffect', function(effect) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				effect = arguments[1];
			}
			var $bool13;
			if ((($bool13=$p['tuple'](['none', 'copy', 'link', 'move']).__contains__(effect)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				self._dropEffect = effect;
			}
			return null;
		}
	, 1, [null,null,['self'],['effect']]);
		$cls_definition['setDropEffect'] = $method;
		$method = $pyjs__bind_method2('getDropEffect', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_dropEffect');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDropEffect'] = $method;
		$cls_definition['dropEffect'] = $p['property']($p['staticmethod']($cls_definition['getDropEffect']), $p['staticmethod']($cls_definition['setDropEffect']));
		$method = $pyjs__bind_method2('setEffectAllowed', function(effect) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				effect = arguments[1];
			}
			var $bool14;
			if ((($bool14=$p['tuple'](['none', 'copy', 'copyLink', 'copyMove', 'link', 'linkMove', 'move', 'all', 'uninitialized']).__contains__(effect)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self._effectAllowed = effect;
			}
			return null;
		}
	, 1, [null,null,['self'],['effect']]);
		$cls_definition['setEffectAllowed'] = $method;
		$method = $pyjs__bind_method2('getEffectAllowed', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_effectAllowed');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEffectAllowed'] = $method;
		$cls_definition['effectAllowed'] = $p['property']($p['staticmethod']($cls_definition['getEffectAllowed']), $p['staticmethod']($cls_definition['setEffectAllowed']));
		$method = $pyjs__bind_method2('setData', function(format, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
				data = arguments[2];
			}
			var $eq20,items,$bool15,$bool16,$bool17,$eq18,$eq19,z,$eq15,$eq16,$eq17;
			if ((($bool15=(($eq15=$p['getattr']($p['getattr'](self, 'dataStore'), 'mode'))===($eq16=$m['READ_WRITE'])&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				format = format['strip']()['lower']();
				if ((($bool16=(($eq17=format)===($eq18='text')&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					format = 'text/plain';
				}
				else if ((($bool17=(($eq19=format)===($eq20='url')&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					format = 'text/uri-list';
				}
				self['clearData'](format);
				items = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
				z = items['add'](data, format);
				z.mode = $m['READ_WRITE'];
			}
			return null;
		}
	, 1, [null,null,['self'],['format'],['data']]);
		$cls_definition['setData'] = $method;
		$method = $pyjs__bind_method2('getTypes', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18,$iter2_nextval,$iter2_type,theList,$iter2_iter,items,item,$iter2_idx,$iter2_array;
			theList = $p['list']([]);
			if ((($bool18=($p['getattr'](self, 'dataStore') !== null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				items = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
				$iter2_iter = items;
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					item = $iter2_nextval;
					theList['append']($p['getattr'](item, 'type'));
				}
			}
			return $m['DOMStringList'](theList);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTypes'] = $method;
		$cls_definition['types'] = $p['property']($p['staticmethod']($cls_definition['getTypes']));
		$method = $pyjs__bind_method2('getData', function(format) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			var $bool19,$iter3_idx,theList,$iter3_array,$iter3_iter,$eq21,item,$eq23,$eq22,$eq25,$eq24,$iter3_type,$bool21,$eq26,$iter3_nextval,$bool20;
			format = format['strip']()['lower']();
			if ((($bool19=(($eq21=format)===($eq22='text')&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				format = 'text/plain';
			}
			else if ((($bool20=(($eq23=format)===($eq24='url')&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				format = 'text/uri-list';
			}
			theList = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
			$iter3_iter = theList;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				item = $iter3_nextval;
				if ((($bool21=(($eq25=$p['getattr'](item, 'type'))===($eq26=format)&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
								$eq25==$eq26)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					item['getAsString']($p['getattr'](self, 'acquireData'));
					return $p['getattr'](self, '_value');
				}
			}
			return '';
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['getData'] = $method;
		$method = $pyjs__bind_method2('clearData', function(format) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			if (typeof format == 'undefined') format=arguments.callee.__args__[3][1];
			var $iter5_nextval,$eq27,$iter5_type,$iter4_type,thelist,$bool24,$iter4_nextval,$iter5_idx,$iter5_array,$iter4_idx,idx,$iter5_iter,item,$bool23,$bool22,$iter4_array,$eq28,$iter4_iter,to_del;
			thelist = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
			if ((($bool22=($p['getattr'](self, 'dataStore') !== null)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				if ((($bool23=(format === null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					thelist['clear']();
				}
				else {
					format = format['lower']();
					to_del = $p['list']([]);
					$iter4_iter = $p['enumerate'](thelist);
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter4_nextval, 2, null);
						idx = $tupleassign1[0];
						item = $tupleassign1[1];
						if ((($bool24=(($eq27=$p['getattr'](item, 'type'))===($eq28=format)&&$eq27===null?true:
							($eq27===null?false:($eq28===null?false:
								((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
									((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
										$eq27==$eq28)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
							to_del['append'](idx);
						}
					}
					to_del['reverse']();
					$iter5_iter = to_del;
					if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter.__iter__();
						$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						idx = $iter5_nextval;
						thelist.__delitem__(idx);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['format', null]]);
		$cls_definition['clearData'] = $method;
		$method = $pyjs__bind_method2('addElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self['dataStore']['elements']['append']($m['cloneElement'](element));
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['addElement'] = $method;
		$method = $pyjs__bind_method2('setDragImage', function(element, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			if (typeof x == 'undefined') x=arguments.callee.__args__[4][1];
			if (typeof y == 'undefined') y=arguments.callee.__args__[5][1];

			$p['getattr'](self, 'dataStore').bitmap = element;
			$p['getattr'](self, 'dataStore').hotspot_coordinate = $p['tuple']([x, y]);
			return null;
		}
	, 1, [null,null,['self'],['element'],['x', 0],['y', 0]]);
		$cls_definition['setDragImage'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTransfer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.dnd.DataTransfer */


/* end module: pyjamas.dnd.DataTransfer */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'pyjamas.dnd.utils.cloneElement', 'pyjamas.dnd', 'pyjamas.dnd.utils', 'pyjamas.dnd.utils.DOMStringList', 'pyjamas.dnd.READ_ONLY', 'pyjamas.dnd.READ_WRITE', 'pyjamas.dnd.PROTECTED', 'pyjamas.dnd.DISABLED']
*/

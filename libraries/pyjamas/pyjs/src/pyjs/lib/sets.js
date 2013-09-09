/* start module: sets */
$pyjs.loaded_modules['sets'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sets'].__was_initialized__) return $pyjs.loaded_modules['sets'];
	var $m = $pyjs.loaded_modules["sets"];
	$m.__repr__ = function() { return "<module: sets>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sets';
	$m.__name__ = __mod_name__;


	$m['Set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'sets';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        self.__object = {};
        self.update(data);
        
		}
	, 1, [null,null,['self'],['data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

    self.__object[pyjslib.hash(value)] = value;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__object = {};
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

    return (self.__object[pyjslib.hash(value)]) ? true : false;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

    delete self.__object[pyjslib.hash(value)];
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('issubset', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}


        for (var i in self.__object) {
            if (!items.__contains__(i)) return false;
            }
        return true;
        
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}


        for (var i in items) {
            if (!self.__contains__(i)) return false;
            }
        return true;
        
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items=new pyjslib.list();
        for (var key in self.__object) items.append(self.__object[key]);
        return items.__iter__();
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var key in self.__object) {
            var value = self.__object[key];
            delete self.__object[key];
            return value;
            }
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['discard'](value);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (pyjslib.isArray(data)) {
            for (var i in data) {
                self.__object[pyjslib.hash(data[i])]=data[i];
            }
        }
        else if (pyjslib.isIteratable(data)) {
            var iter=data.__iter__();
            var i=0;
            try {
                while (true) {
                    var item=iter.next();
                    self.__object[pyjslib.hash(item)]=item;
                }
            }
            catch (e) {
                if (e != pyjslib.StopIteration) throw e;
            }
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Set', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end sets */


/* end module: sets */



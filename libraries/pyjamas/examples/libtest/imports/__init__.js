/* start module: imports */
$pyjs.loaded_modules['imports'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports'].__was_initialized__) return $pyjs.loaded_modules['imports'];
	var $m = $pyjs.loaded_modules["imports"];
	$m.__repr__ = function() { return "<module: imports>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports';
	$m.__name__ = __mod_name__;
	var $bool1;

	$m['exec_order'] = $p['list']([]);
	$m['Imports'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'imports';
		$cls_definition['exec_order'] = $m['exec_order'];
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.v = 1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Imports', $p['tuple']($bases), $data);
	})();
	$m['imports'] = $m['Imports']();
	$m['overrideme'] = 'not overridden';
	$m['loccls'] = $p['___import___']('imports.cls', null, null, false);
	$m['upcls'] = $m['loccls'];
	$m['conditional_func'] = function() {

		return 'not overridden';
	};
	$m['conditional_func'].__name__ = 'conditional_func';

	$m['conditional_func'].__bind_type__ = 0;
	$m['conditional_func'].__args__ = [null,null];
	if ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['conditional_func'] = function() {

			return 'overridden';
		};
		$m['conditional_func'].__name__ = 'conditional_func';

		$m['conditional_func'].__bind_type__ = 0;
		$m['conditional_func'].__args__ = [null,null];
	}
	$m['all_masked'] = false;
	$m['all_override'] = false;
	$p['__import_all__']('allwith__all__', 'imports', $m, null, false);
	$p['__import_all__']('allsimple', 'imports', $m, null, false);
	return this;
}; /* end imports */


/* end module: imports */


/*
PYJS_DEPS: ['imports.cls', 'imports', 'allwith__all__', 'allsimple']
*/

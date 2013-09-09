/* start module: pyjamas.chart.TouchedPointUpdateOption */
$pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.TouchedPointUpdateOption"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.TouchedPointUpdateOption>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.TouchedPointUpdateOption';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['TouchedPointUpdateOption'] = $pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'];


	$m['TouchedPointUpdateOption'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.TouchedPointUpdateOption';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TouchedPointUpdateOption', $p['tuple']($bases), $data);
	})();
	$m['TOUCHED_POINT_CLEARED'] = $m['TouchedPointUpdateOption']();
	$m['TOUCHED_POINT_LOCKED'] = $m['TouchedPointUpdateOption']();
	$m['TOUCHED_POINT_UPDATED'] = $m['TouchedPointUpdateOption']();
	return this;
}; /* end pyjamas.chart.TouchedPointUpdateOption */


/* end module: pyjamas.chart.TouchedPointUpdateOption */



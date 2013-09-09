/* start module: pyjamas.chart.DateTimeFormat */
$pyjs.loaded_modules['pyjamas.chart.DateTimeFormat'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.DateTimeFormat'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.DateTimeFormat'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.DateTimeFormat"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.DateTimeFormat>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.DateTimeFormat';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['DateTimeFormat'] = $pyjs.loaded_modules['pyjamas.chart.DateTimeFormat'];


	$m['DF'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.DateTimeFormat';
		$method = $pyjs__bind_method2('__init__', function(fmt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fmt = arguments[1];
			}

			self.fmt = fmt;
			return null;
		}
	, 1, [null,null,['self'],['fmt']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('format', function(date) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				date = arguments[1];
			}

			return $m.time['strftime']($p['getattr'](self, 'fmt'), date);
		}
	, 1, [null,null,['self'],['date']]);
		$cls_definition['format'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DF', $p['tuple']($bases), $data);
	})();
	$m['time'] = $p['___import___']('time', 'pyjamas.chart');
	$m['getShortDateTimeFormat'] = function() {

		return $m['DF']('%d/%m/%y');
	};
	$m['getShortDateTimeFormat'].__name__ = 'getShortDateTimeFormat';

	$m['getShortDateTimeFormat'].__bind_type__ = 0;
	$m['getShortDateTimeFormat'].__args__ = [null,null];
	return this;
}; /* end pyjamas.chart.DateTimeFormat */


/* end module: pyjamas.chart.DateTimeFormat */


/*
PYJS_DEPS: ['time']
*/

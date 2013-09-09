/* start module: pyjamas.chart.Double */
$pyjs.loaded_modules['pyjamas.chart.Double'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.Double'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.Double'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.Double"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.Double>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Double';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['Double'] = $pyjs.loaded_modules['pyjamas.chart.Double'];


	$m['NaN'] = 1.79769313486e+308;
	$m['MAX_VALUE'] = 1e+100;
	$m['MIN_VALUE'] = (typeof ($usub1=1e+100)=='number'?
		-$usub1:
		$p['op_usub']($usub1));
	$m['math'] = $p['___import___']('math', 'pyjamas.chart');
	$m['isNaN'] = function(num) {
		var $eq2,$eq1;
		return (($eq1=num)===($eq2=$m['NaN'])&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2)))));
	};
	$m['isNaN'].__name__ = 'isNaN';

	$m['isNaN'].__bind_type__ = 0;
	$m['isNaN'].__args__ = [null,null,['num']];
	return this;
}; /* end pyjamas.chart.Double */


/* end module: pyjamas.chart.Double */


/*
PYJS_DEPS: ['math']
*/

/* start module: WindowTest */
$pyjs.loaded_modules['WindowTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['WindowTest'].__was_initialized__) return $pyjs.loaded_modules['WindowTest'];
	var $m = $pyjs.loaded_modules["WindowTest"];
	$m.__repr__ = function() { return "<module: WindowTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'WindowTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['WindowTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'WindowTest';
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var nh,$eq2,$eq3,$eq1,$eq4,$bool2,$bool1,nw;
			if ((($bool2=!(($bool1=$p['getattr'](self, 'resize_test')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['fail']('onWindowResized called after WindowListener removed');
				return null;
			}
			nh = $m['Window']['getClientHeight']();
			nw = $m['Window']['getClientWidth']();
			self['assertTrue'](!(($eq1=nw)===($eq2=$p['getattr'](self, 'w'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))));
			self['assertTrue'](!(($eq3=nh)===($eq4=$p['getattr'](self, 'h'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))));
			self['assertTrue']($p['isinstance'](nw, $p['float_int']));
			self['assertTrue']($p['isinstance'](nh, $p['float_int']));
			self.resize_test = false;
			$m['Window']['removeWindowResizeListener'](self);
			$m['Window']['resize']($p['getattr'](self, 'w'), $p['getattr'](self, 'h'));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('testResize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool3;
			if ((($bool3=$m['IN_BROWSER']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return null;
			}
			self.resize_test = true;
			$m['Window']['addWindowResizeListener'](self);
			self.h = $m['Window']['getClientHeight']();
			self.w = $m['Window']['getClientWidth']();
			$m['Window']['resize'](800, 600);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testResize'] = $method;
		$method = $pyjs__bind_method2('testClientDimensions', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var h,w;
			h = $m['Window']['getClientHeight']();
			w = $m['Window']['getClientWidth']();
			self['assertTrue']($p['isinstance'](w, $p['float_int']));
			self['assertTrue']($p['isinstance'](h, $p['float_int']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClientDimensions'] = $method;
		$method = $pyjs__bind_method2('testLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']($m['Window']['getLocation']()['getHref']()['endswith']('LibTest.html'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLocation'] = $method;
		$method = $pyjs__bind_method2('testTitle', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertEquals']($m['Window']['getTitle'](), 'LibTest');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testTitle'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('WindowTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end WindowTest */


/* end module: WindowTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_BROWSER', 'pyjamas.Window', 'pyjamas']
*/

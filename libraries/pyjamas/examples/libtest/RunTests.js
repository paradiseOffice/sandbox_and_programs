/* start module: RunTests */
$pyjs.loaded_modules['RunTests'] = function (__mod_name__) {
	if($pyjs.loaded_modules['RunTests'].__was_initialized__) return $pyjs.loaded_modules['RunTests'];
	var $m = $pyjs.loaded_modules["RunTests"];
	$m.__repr__ = function() { return "<module: RunTests>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'RunTests';
	$m.__name__ = __mod_name__;


	$m['RunTests'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'RunTests';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.testlist = $p['dict']([]);
			self.test_idx = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(test) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				test = arguments[1];
			}
			var $len1;
			$p['getattr'](self, 'testlist').__setitem__((($len1=$p['getattr'](self, 'testlist')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))), test);
			return null;
		}
	, 1, [null,null,['self'],['test']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('start_test', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,idx,$cmp2,test_kls,$add2,$bool1,$len2,t,$add1,$2,$1;
			if ((($bool1=((((($cmp1=$p['getattr'](self, 'test_idx'))===($cmp2=(($len2=$p['getattr'](self, 'testlist')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return null;
			}
			idx = $p['getattr'](self, 'test_idx');
			self.test_idx = (typeof ($add1=$p['getattr'](self, 'test_idx'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			test_kls = (typeof ($1=$p['getattr'](self, 'testlist')).__array != 'undefined'?
				((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(idx));
			t = test_kls();
			t.start_next_test = $p['getattr'](self, 'start_test');
			t['run']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start_test'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RunTests', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end RunTests */


/* end module: RunTests */



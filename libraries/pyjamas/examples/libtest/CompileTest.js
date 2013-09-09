/* start module: CompileTest */
$pyjs.loaded_modules['CompileTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['CompileTest'].__was_initialized__) return $pyjs.loaded_modules['CompileTest'];
	var $m = $pyjs.loaded_modules["CompileTest"];
	$m.__repr__ = function() { return "<module: CompileTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CompileTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['gl'] = null;
	$m['CompileTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'CompileTest';
		$method = $pyjs__bind_method2('test_issue_432', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var y,x;
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([1, 2]), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			$p['_del'](x);
			$p['_del'](y);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_issue_432'] = $method;
		$method = $pyjs__bind_method2('test_issue_433', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$add2,$add1,$iter1_array,x,$iter1_idx;
			$iter1_iter = (typeof ($add1=$p['list']([1, 2]))==typeof ($add2=$p['list']([3, 4])) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				x = $iter1_nextval;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_issue_433'] = $method;
		$method = $pyjs__bind_method2('test_discard_expressions', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var x;
			$p['tuple']([1, 2]);
			x = 10;
			x;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_discard_expressions'] = $method;
		$method = $pyjs__bind_method2('test_callfunc_expressions', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,s,$add6,$add4,$add5,x;
			s = '123';
			x = (typeof ($add3='a')==typeof ($add4='b') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))['strip']();
			(typeof ($add5='    ')==typeof ($add6=s) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))['rstrip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_callfunc_expressions'] = $method;
		$method = $pyjs__bind_method2('test_function_deep_args_unpacking', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['fail']('Bug #527, Function deep args unpacking fails to compile');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_function_deep_args_unpacking'] = $method;
		$method = $pyjs__bind_method2('test_subscript_tuple', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var x,$2,d,$1;
			d = $p['dict']([]);
			d.__setitem__($p['tuple']([1, 2]), 3);
			x = (typeof ($1=d).__array != 'undefined'?
				((typeof $1.__array[$2=$p['tuple']([1, 2])]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($p['tuple']([1, 2])));
			d.__setitem__($p['tuple']([3, 4]), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_subscript_tuple'] = $method;
		$method = $pyjs__bind_method2('test_bad_import', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var _importtimeerror,$pyjs_try_err,_nonexistentmodule;
			try {
				_nonexistentmodule = $p['___import___']('_nonexistentmodule', null);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			try {
				_importtimeerror = $p['___import___']('_importtimeerror', null);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			self['fail']('try: import badcode/except does not catch SyntaxError, #592');
			self['fail']('try: import badcode/except does not catch TranslationError, #592');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_bad_import'] = $method;
		$method = $pyjs__bind_method2('testClassScopeExceptions', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['fail']('try/catch in class definition scope, issue #593');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testClassScopeExceptions'] = $method;
		$method = $pyjs__bind_method2('testWithFlowControl', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['fail']('Flow control statements inside with, issue #625');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testWithFlowControl'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CompileTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end CompileTest */


/* end module: CompileTest */


/*
PYJS_DEPS: ['UnitTest', '_nonexistentmodule', '_importtimeerror']
*/

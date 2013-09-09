/* start module: CsvModuleTest */
$pyjs.loaded_modules['CsvModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['CsvModuleTest'].__was_initialized__) return $pyjs.loaded_modules['CsvModuleTest'];
	var $m = $pyjs.loaded_modules["CsvModuleTest"];
	$m.__repr__ = function() { return "<module: CsvModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CsvModuleTest';
	$m.__name__ = __mod_name__;


	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['csv'] = $p['___import___']('csv', null);
	$m['CsvModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'CsvModuleTest';
		$method = $pyjs__bind_method2('test_reader', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,$iter2_type,row,rows,$iter2_iter,$iter1_array,reader,expected,$iter1_nextval,$iter2_idx,$8,$6,$7,$4,$5,$2,$3,$1,$iter2_nextval,$iter1_type,idx,lines,$add2,$add3,$add1,$iter1_idx,$add4,$iter2_array;
			lines = $p['list'](['1, 2,"3"\n', ' "s","a","as,2"\n', ' "s,"a" ,"as,2"\n', '""s, "a" ,"as,\n2"\n', ' ""s, "a" ,"as,2"\n', '\n', '\n\n', '1, 2,"3"', '""s, "a" ,"as,\n2"', '']);
			expected = $p['list']([$p['list'](['1', ' 2', '3']), $p['list']([' "s"', 'a', 'as,2']), $p['list']([' "s', 'a ', 'as,2']), $p['list'](['s', ' "a" ', 'as,\n2']), $p['list']([' ""s', ' "a" ', 'as,2']), $p['list']([]), $p['list']([]), $p['list'](['1', ' 2', '3']), $p['list'](['s', ' "a" ', 'as,\n2']), $p['list']([])]);
			reader = $m['csv']['reader'](lines);
			rows = $p['list']([]);
			idx = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			$iter1_iter = reader;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				row = $iter1_nextval;
				idx = (typeof ($add1=idx)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				self['assertEqual'](row, (typeof ($1=expected).__array != 'undefined'?
					((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(idx)), $p['sprintf']('%d : %r != %r', $p['tuple']([idx, row, (typeof ($3=expected).__array != 'undefined'?
					((typeof $3.__array[$4=idx]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(idx))])));
				rows['append'](row);
			}
			lines = $p['list'](['1,2,3\n']);
			expected = $p['list']([$p['list'](['1', '2', '3'])]);
			reader = $m['csv']['reader'](lines);
			rows = $p['list']([]);
			idx = (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2));
			$iter2_iter = reader;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				row = $iter2_nextval;
				idx = (typeof ($add3=idx)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['assertEqual'](row, (typeof ($5=expected).__array != 'undefined'?
					((typeof $5.__array[$6=idx]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(idx)), $p['sprintf']('%d : %r != %r', $p['tuple']([idx, row, (typeof ($7=expected).__array != 'undefined'?
					((typeof $7.__array[$8=idx]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(idx))])));
				rows['append'](row);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test_reader'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CsvModuleTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end CsvModuleTest */


/* end module: CsvModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'csv']
*/

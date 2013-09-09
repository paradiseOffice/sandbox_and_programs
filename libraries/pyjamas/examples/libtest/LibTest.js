/* start module: LibTest */
$pyjs.loaded_modules['LibTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LibTest'].__was_initialized__) return $pyjs.loaded_modules['LibTest'];
	var $m = $pyjs.loaded_modules["LibTest"];
	$m.__repr__ = function() { return "<module: LibTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LibTest';
	$m.__name__ = __mod_name__;
	var $and1,$and2,$bool2,$bool3,$bool1,$bool4,$bool8,$eq5,$cmp2,$eq2,$eq3,$eq1,$eq6,$eq4,$cmp1;

	$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
	$m['IN_JS'] = $p['___import___']('UnitTest.IN_JS', null, null, false);
	$m['LoopTest'] = $p['___import___']('LoopTest.LoopTest', null, null, false);
	$m['NoInlineCodeTest'] = $p['___import___']('NoInlineCodeTest.NoInlineCodeTest', null, null, false);
	$m['StringTest'] = $p['___import___']('StringTest.StringTest', null, null, false);
	$m['ListTest'] = $p['___import___']('ListTest.ListTest', null, null, false);
	$m['TupleTest'] = $p['___import___']('TupleTest.TupleTest', null, null, false);
	$m['ClassTest'] = $p['___import___']('ClassTest.ClassTest', null, null, false);
	$m['SetTest'] = $p['___import___']('SetTest.SetTest', null, null, false);
	$m['FrozenSetTest'] = $p['___import___']('SetTest.FrozenSetTest', null, null, false);
	$m['ArgsTest'] = $p['___import___']('ArgsTest.ArgsTest', null, null, false);
	$m['VarsTest'] = $p['___import___']('VarsTest.VarsTest', null, null, false);
	$m['AttributeTest'] = $p['___import___']('AttributeTest.AttributeTest', null, null, false);
	$m['ExceptionTest'] = $p['___import___']('ExceptionTest.ExceptionTest', null, null, false);
	$m['BoolTest'] = $p['___import___']('BoolTest.BoolTest', null, null, false);
	$m['FunctionTest'] = $p['___import___']('FunctionTest.FunctionTest', null, null, false);
	$m['NameTest'] = $p['___import___']('NameTest.NameTest', null, null, false);
	$m['DictTest'] = $p['___import___']('DictTest.DictTest', null, null, false);
	$m['BuiltinTest'] = $p['___import___']('BuiltinTest.BuiltinTest', null, null, false);
	$m['GeneratorTest'] = $p['___import___']('GeneratorTest.GeneratorTest', null, null, false);
	$m['LongTest'] = $p['___import___']('LongTest.LongTest', null, null, false);
	$m['CompileTest'] = $p['___import___']('CompileTest.CompileTest', null, null, false);
	$m['TemplateStringTest'] = $p['___import___']('TemplateStringTest.TemplateStringTest', null, null, false);
	if ((($bool1=((($cmp1=(1)<<(31))===($cmp2=0)?0:
		(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
			($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
			$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['has_long_type'] = true;
		$m['LongTypeTest'] = $p['___import___']('LongTypeTest.LongTypeTest', null, null, false);
	}
	else {
		$m['has_long_type'] = false;
	}
	if ((($bool2=$m['IN_JS']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
		$m['JSOTest'] = $p['___import___']('JSOTest.JSOTest', null, null, false);
	}
	else {
		$m['os'] = $p['___import___']('os', null);
		$m['sys'] = $p['___import___']('sys', null);
		$m['here'] = $m['os']['path']['abspath']($m['os']['path']['dirname']('/home/hazel/Documents/new_linux_paradise/libraries/pyjamas/examples/libtest/LibTest.py'));
		$m['library'] = $m['os']['path']['join']($m['os']['path']['dirname']($m['os']['path']['dirname']($m['here'])), 'library');
		$m['sys']['path']['append']($m['library']);
	}
	$m['sys'] = $p['___import___']('sys', null);
	if ((($bool4=((($bool3=$and1=!(($eq1=$p['getattr']($m['sys'], 'platform'))===($eq2='spidermonkey')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
		false :
		(typeof $bool3=='object'?
			(typeof $bool3.__nonzero__=='function'?
				$bool3.__nonzero__() :
				(typeof $bool3.__len__=='function'?
					($bool3.__len__()>0 ?
						true :
						false) :
					true ) ) :
			 true ) )?!(($eq3=$p['getattr']($m['sys'], 'platform'))===($eq4='pyv8')&&$eq3===null?true:
		($eq3===null?false:($eq4===null?false:
			((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
				((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
					$eq3==$eq4))))):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
		$m['WindowTest'] = $p['___import___']('WindowTest.WindowTest', null, null, false);
	}
	$m['MD5Test'] = $p['___import___']('MD5Test.MD5Test', null, null, false);
	$m['TimeModuleTest'] = $p['___import___']('TimeModuleTest.TimeModuleTest', null, null, false);
	$m['DatetimeModuleTest'] = $p['___import___']('DatetimeModuleTest.DatetimeModuleTest', null, null, false);
	$m['TypeCompatibilityTest'] = $p['___import___']('TypeCompatibilityTest.TypeCompatibilityTest', null, null, false);
	$m['UrllibModuleTest'] = $p['___import___']('UrllibModuleTest.UrllibModuleTest', null, null, false);
	$m['Base64ModuleTest'] = $p['___import___']('Base64ModuleTest.Base64ModuleTest', null, null, false);
	$m['MathModuleTest'] = $p['___import___']('MathModuleTest.MathModuleTest', null, null, false);
	$m['RandomModuleTest'] = $p['___import___']('RandomModuleTest.RandomModuleTest', null, null, false);
	$m['ReModuleTest'] = $p['___import___']('ReModuleTest.ReModuleTest', null, null, false);
	$m['CsvModuleTest'] = $p['___import___']('CsvModuleTest.CsvModuleTest', null, null, false);
	$m['StringIOModuleTest'] = $p['___import___']('StringIOModuleTest.StringIOModuleTest', null, null, false);
	$m['HashableTest'] = $p['___import___']('HashableTest.HashableTest', null, null, false);
	$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
	$m['main'] = function() {
		var $cmp4,$cmp3,WithTest,$bool6,$bool7,$bool5,Syntax27Test,t;
		t = $m['RunTests']();
		t['add']($m['CompileTest']);
		t['add']($m['LoopTest']);
		t['add']($m['NoInlineCodeTest']);
		t['add']($m['BoolTest']);
		t['add']($m['ListTest']);
		t['add']($m['TupleTest']);
		t['add']($m['FunctionTest']);
		t['add']($m['ExceptionTest']);
		t['add']($m['ClassTest']);
		t['add']($m['StringTest']);
		t['add']($m['TemplateStringTest']);
		t['add']($m['SetTest']);
		t['add']($m['FrozenSetTest']);
		t['add']($m['ArgsTest']);
		t['add']($m['VarsTest']);
		t['add']($m['AttributeTest']);
		t['add']($m['NameTest']);
		t['add']($m['DictTest']);
		t['add']($m['BuiltinTest']);
		t['add']($m['GeneratorTest']);
		t['add']($m['LongTest']);
		if ((($bool5=$m['has_long_type']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			t['add']($m['LongTypeTest']);
		}
		t['add']($m['TypeCompatibilityTest']);
		t['add']($m['MD5Test']);
		t['add']($m['TimeModuleTest']);
		t['add']($m['DatetimeModuleTest']);
		t['add']($m['StringIOModuleTest']);
		t['add']($m['UrllibModuleTest']);
		t['add']($m['Base64ModuleTest']);
		t['add']($m['MathModuleTest']);
		t['add']($m['ReModuleTest']);
		t['add']($m['RandomModuleTest']);
		t['add']($m['CsvModuleTest']);
		t['add']($m['HashableTest']);
		if ((($bool6=$m['IN_BROWSER']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			t['add']($m['JSOTest']);
			t['add']($m['WindowTest']);
		}
		if ((($bool7=((((($cmp3=$p['getattr']($m['sys'], 'version_info'))===($cmp4=$p['tuple']([2, 7]))?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			Syntax27Test = $p['___import___']('Syntax27Test.Syntax27Test', null, null, false);
			t['add'](Syntax27Test);
			WithTest = $p['___import___']('WithTest.WithTest', null, null, false);
			t['add'](WithTest);
		}
		t['start_test']();
		return null;
	};
	$m['main'].__name__ = 'main';

	$m['main'].__bind_type__ = 0;
	$m['main'].__args__ = [null,null];
	if ((($bool8=(($eq5=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq6='__main__')&&$eq5===null?true:
		($eq5===null?false:($eq6===null?false:
			((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
				((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
					$eq5==$eq6)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
		$m['main']();
	}
	return this;
}; /* end LibTest */


/* end module: LibTest */


/*
PYJS_DEPS: ['UnitTest.IN_BROWSER', 'UnitTest', 'UnitTest.IN_JS', 'LoopTest.LoopTest', 'LoopTest', 'NoInlineCodeTest.NoInlineCodeTest', 'NoInlineCodeTest', 'StringTest.StringTest', 'StringTest', 'ListTest.ListTest', 'ListTest', 'TupleTest.TupleTest', 'TupleTest', 'ClassTest.ClassTest', 'ClassTest', 'SetTest.SetTest', 'SetTest', 'SetTest.FrozenSetTest', 'ArgsTest.ArgsTest', 'ArgsTest', 'VarsTest.VarsTest', 'VarsTest', 'AttributeTest.AttributeTest', 'AttributeTest', 'ExceptionTest.ExceptionTest', 'ExceptionTest', 'BoolTest.BoolTest', 'BoolTest', 'FunctionTest.FunctionTest', 'FunctionTest', 'NameTest.NameTest', 'NameTest', 'DictTest.DictTest', 'DictTest', 'BuiltinTest.BuiltinTest', 'BuiltinTest', 'GeneratorTest.GeneratorTest', 'GeneratorTest', 'LongTest.LongTest', 'LongTest', 'CompileTest.CompileTest', 'CompileTest', 'TemplateStringTest.TemplateStringTest', 'TemplateStringTest', 'LongTypeTest.LongTypeTest', 'LongTypeTest', 'JSOTest.JSOTest', 'JSOTest', 'os', 'sys', 'WindowTest.WindowTest', 'WindowTest', 'MD5Test.MD5Test', 'MD5Test', 'TimeModuleTest.TimeModuleTest', 'TimeModuleTest', 'DatetimeModuleTest.DatetimeModuleTest', 'DatetimeModuleTest', 'TypeCompatibilityTest.TypeCompatibilityTest', 'TypeCompatibilityTest', 'UrllibModuleTest.UrllibModuleTest', 'UrllibModuleTest', 'Base64ModuleTest.Base64ModuleTest', 'Base64ModuleTest', 'MathModuleTest.MathModuleTest', 'MathModuleTest', 'RandomModuleTest.RandomModuleTest', 'RandomModuleTest', 'ReModuleTest.ReModuleTest', 'ReModuleTest', 'CsvModuleTest.CsvModuleTest', 'CsvModuleTest', 'StringIOModuleTest.StringIOModuleTest', 'StringIOModuleTest', 'HashableTest.HashableTest', 'HashableTest', 'RunTests.RunTests', 'RunTests', 'Syntax27Test.Syntax27Test', 'Syntax27Test', 'WithTest.WithTest', 'WithTest']
*/

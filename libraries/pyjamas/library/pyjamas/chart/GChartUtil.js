/* start module: pyjamas.chart.GChartUtil */
$pyjs.loaded_modules['pyjamas.chart.GChartUtil'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.GChartUtil'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.GChartUtil'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.GChartUtil"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.GChartUtil>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.GChartUtil';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['GChartUtil'] = $pyjs.loaded_modules['pyjamas.chart.GChartUtil'];
	var $pow2,$pow1;

	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.chart', null, false);
	$m['NAI'] = (typeof ($pow1=2)==typeof ($pow2=31) && typeof $pow1=='number'?
		Math.pow($pow1,$pow2):
		$p['op_pow']($pow1,$pow2));
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
	$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
	$m['setBackgroundColor'] = function(uio, cssColor) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'backgroundColor', cssColor);
		return null;
	};
	$m['setBackgroundColor'].__name__ = 'setBackgroundColor';

	$m['setBackgroundColor'].__bind_type__ = 0;
	$m['setBackgroundColor'].__args__ = [null,null,['uio'],['cssColor']];
	$m['setBorderColor'] = function(uio, cssColor) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'borderColor', cssColor);
		return null;
	};
	$m['setBorderColor'].__name__ = 'setBorderColor';

	$m['setBorderColor'].__bind_type__ = 0;
	$m['setBorderColor'].__args__ = [null,null,['uio'],['cssColor']];
	$m['setBorderStyle'] = function(uio, cssBorderStyle) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'borderStyle', cssBorderStyle);
		return null;
	};
	$m['setBorderStyle'].__name__ = 'setBorderStyle';

	$m['setBorderStyle'].__bind_type__ = 0;
	$m['setBorderStyle'].__args__ = [null,null,['uio'],['cssBorderStyle']];
	$m['setBorderWidth'] = function(uio, borderWidth) {
		var $add2,cssBorderWidth,$eq2,$and1,$and2,$eq1,$bool2,$bool1,$add1;
		if ((($bool2=((($bool1=$and1=!(($eq1=borderWidth)===($eq2=$m['NAI'])&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?borderWidth:$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			cssBorderWidth = (typeof ($add1=$p['str'](borderWidth))==typeof ($add2='px') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
		else {
			cssBorderWidth = '';
		}
		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'borderWidth', cssBorderWidth);
		return null;
	};
	$m['setBorderWidth'].__name__ = 'setBorderWidth';

	$m['setBorderWidth'].__bind_type__ = 0;
	$m['setBorderWidth'].__args__ = [null,null,['uio'],['borderWidth']];
	$m['setFontFamily'] = function(uio, cssFontFamily) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'fontFamily', cssFontFamily);
		return null;
	};
	$m['setFontFamily'].__name__ = 'setFontFamily';

	$m['setFontFamily'].__bind_type__ = 0;
	$m['setFontFamily'].__args__ = [null,null,['uio'],['cssFontFamily']];
	$m['setFontSize'] = function(uio, fontSize) {

		$m['DOM']['setIntStyleAttribute'](uio['getElement'](), 'fontSize', fontSize);
		return null;
	};
	$m['setFontSize'].__name__ = 'setFontSize';

	$m['setFontSize'].__bind_type__ = 0;
	$m['setFontSize'].__args__ = [null,null,['uio'],['fontSize']];
	$m['setFontStyle'] = function(uio, fontStyle) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'fontStyle', fontStyle);
		return null;
	};
	$m['setFontStyle'].__name__ = 'setFontStyle';

	$m['setFontStyle'].__bind_type__ = 0;
	$m['setFontStyle'].__args__ = [null,null,['uio'],['fontStyle']];
	$m['setFontWeight'] = function(uio, fontWeight) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'fontWeight', fontWeight);
		return null;
	};
	$m['setFontWeight'].__name__ = 'setFontWeight';

	$m['setFontWeight'].__bind_type__ = 0;
	$m['setFontWeight'].__args__ = [null,null,['uio'],['fontWeight']];
	$m['setColor'] = function(uio, cssColor) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'color', cssColor);
		return null;
	};
	$m['setColor'].__name__ = 'setColor';

	$m['setColor'].__bind_type__ = 0;
	$m['setColor'].__args__ = [null,null,['uio'],['cssColor']];
	$m['setPadding'] = function(uio, cssPadding) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'padding', cssPadding);
		return null;
	};
	$m['setPadding'].__name__ = 'setPadding';

	$m['setPadding'].__bind_type__ = 0;
	$m['setPadding'].__args__ = [null,null,['uio'],['cssPadding']];
	$m['setOverflow'] = function(uio, cssOverflow) {

		$m['DOM']['setStyleAttribute'](uio['getElement'](), 'overflow', cssOverflow);
		return null;
	};
	$m['setOverflow'].__name__ = 'setOverflow';

	$m['setOverflow'].__bind_type__ = 0;
	$m['setOverflow'].__args__ = [null,null,['uio'],['cssOverflow']];
	$m['sign'] = function(x) {
		var $cmp1,$cmp2,$and3,$and4,$bool3,result,$bool4,$or1,$or2;
		result = ((($bool4=$or1=((($bool3=$and3=((($cmp1=x)===($cmp2=0)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3.__nonzero__=='function'?
					$bool3.__nonzero__() :
					(typeof $bool3.__len__=='function'?
						($bool3.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)):$and3)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4.__nonzero__=='function'?
					$bool4.__nonzero__() :
					(typeof $bool4.__len__=='function'?
						($bool4.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:1);
		return result;
	};
	$m['sign'].__name__ = 'sign';

	$m['sign'].__bind_type__ = 0;
	$m['sign'].__args__ = [null,null,['x']];
	$m['indexOfBr'] = function(s, iStart) {
		if (typeof iStart == 'undefined') iStart=arguments.callee.__args__[3][1];
		var $bool10,BR6,BR5,BR4,BR3,BR2,BR1,$eq18,$eq19,result,$bool13,$eq10,$eq11,$eq12,$eq13,$eq6,$eq15,$eq16,$eq17,$bool12,$bool9,$eq14,$bool14,$bool11,iBr6,iBr5,iBr4,iBr3,iBr2,iBr1,$eq8,$eq9,$eq3,result2,result3,$eq4,result1,$eq21,$eq20,$eq22,$bool6,$bool7,$bool5,$bool8,$eq5,$eq7;
		BR1 = '<br>';
		BR2 = '<BR>';
		BR3 = '<li>';
		BR4 = '<LI>';
		BR5 = '<tr>';
		BR6 = '<TR>';
		iBr1 = s['find'](BR1, iStart);
		iBr2 = s['find'](BR2, iStart);
		iBr3 = s['find'](BR3, iStart);
		iBr4 = s['find'](BR4, iStart);
		iBr5 = s['find'](BR5, iStart);
		iBr6 = s['find'](BR6, iStart);
		result1 = 0;
		result2 = 0;
		result3 = 0;
		result = 0;
		if ((($bool5=(($eq3=(typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)))===($eq4=iBr1)&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			result1 = iBr2;
		}
		else if ((($bool6=(($eq5=(typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3)))===($eq6=iBr2)&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			result1 = iBr1;
		}
		else {
			result1 = $p['min'](iBr1, iBr2);
		}
		if ((($bool7=(($eq7=(typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4)))===($eq8=iBr3)&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
						$eq7==$eq8)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			result2 = iBr4;
		}
		else if ((($bool8=(($eq9=(typeof ($usub5=1)=='number'?
			-$usub5:
			$p['op_usub']($usub5)))===($eq10=iBr4)&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
						$eq9==$eq10)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			result2 = iBr3;
		}
		else {
			result2 = $p['min'](iBr3, iBr4);
		}
		if ((($bool9=(($eq11=(typeof ($usub6=1)=='number'?
			-$usub6:
			$p['op_usub']($usub6)))===($eq12=iBr5)&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result3 = iBr6;
		}
		else if ((($bool10=(($eq13=(typeof ($usub7=1)=='number'?
			-$usub7:
			$p['op_usub']($usub7)))===($eq14=iBr6)&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result3 = iBr5;
		}
		else {
			result3 = $p['min'](iBr5, iBr6);
		}
		if ((($bool11=(($eq15=(typeof ($usub8=1)=='number'?
			-$usub8:
			$p['op_usub']($usub8)))===($eq16=result1)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result = result2;
		}
		else if ((($bool12=(($eq17=(typeof ($usub9=1)=='number'?
			-$usub9:
			$p['op_usub']($usub9)))===($eq18=result2)&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
						$eq17==$eq18)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12.__nonzero__=='function'?
						$bool12.__nonzero__() :
						(typeof $bool12.__len__=='function'?
							($bool12.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result = result1;
		}
		else {
			result = $p['min'](result1, result2);
		}
		if ((($bool13=(($eq19=(typeof ($usub10=1)=='number'?
			-$usub10:
			$p['op_usub']($usub10)))===($eq20=result)&&$eq19===null?true:
			($eq19===null?false:($eq20===null?false:
				((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
					((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
						$eq19==$eq20)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result = result3;
		}
		else if ((($bool14=!(($eq21=(typeof ($usub11=1)=='number'?
			-$usub11:
			$p['op_usub']($usub11)))===($eq22=result3)&&$eq21===null?true:
			($eq21===null?false:($eq22===null?false:
				((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
					((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
						$eq21==$eq22)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result = $p['min'](result, result3);
		}
		return result;
	};
	$m['indexOfBr'].__name__ = 'indexOfBr';

	$m['indexOfBr'].__bind_type__ = 0;
	$m['indexOfBr'].__args__ = [null,null,['s'],['iStart', 0]];
	$m['htmlWidth'] = function(sIn) {
		var $eq23,LITERAL_PAT,$bool15,TAG_PAT,s,$eq24,$len1,iBr;
		iBr = $m['indexOfBr'](sIn);
		if ((($bool15=(($eq23=(typeof ($usub12=1)=='number'?
			-$usub12:
			$p['op_usub']($usub12)))===($eq24=iBr)&&$eq23===null?true:
			($eq23===null?false:($eq24===null?false:
				((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
					((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
						$eq23==$eq24)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			s = sIn;
		}
		else {
			s = $p['__getslice'](sIn, 0, iBr);
		}
		return (($len1=s) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1)))));
		LITERAL_PAT = '[&][#a-zA-Z]+[;]';
		s = s['replaceAll'](LITERAL_PAT, 'X');
		TAG_PAT = '[<][^>]+[>]';
		s = s['replaceAll'](TAG_PAT, '');
		return s['length']();
	};
	$m['htmlWidth'].__name__ = 'htmlWidth';

	$m['htmlWidth'].__bind_type__ = 0;
	$m['htmlWidth'].__args__ = [null,null,['sIn']];
	$m['htmlHeight'] = function(s) {
		var $add4,$eq27,$add5,$add6,$bool16,$bool17,$add3,$eq25,result,BR_LEN,$eq26,$len2,iBr,$eq28;
		BR_LEN = (($len2='<br>') === null?0:
			(typeof $len2.__array != 'undefined' ? $len2.__array.length:
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'?$len2.length:
						$p['len']($len2)))));
		iBr = 0;
		result = 1;
		if ((($bool16=!(($eq25=null)===($eq26=s)&&$eq25===null?true:
			($eq25===null?false:($eq26===null?false:
				((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
					((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
						$eq25==$eq26)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			iBr = $m['indexOfBr'](s);
			while ((($bool17=!(($eq27=iBr)===($eq28=(typeof ($usub13=1)=='number'?
				-$usub13:
				$p['op_usub']($usub13)))&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add3=result)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				iBr = $m['indexOfBr'](s, (typeof ($add5=iBr)==typeof ($add6=BR_LEN) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)));
			}
		}
		return result;
	};
	$m['htmlHeight'].__name__ = 'htmlHeight';

	$m['htmlHeight'].__bind_type__ = 0;
	$m['htmlHeight'].__args__ = [null,null,['s']];
	$m['withinRange'] = function(x, minLim, maxLim) {
		var $bool18,$bool19,$cmp4,$cmp3,$or3,$or4,$and8,$and5,$and6,$and7,$eq30,$cmp6,$bool20,$eq29,$cmp5,result;
		result = ((($bool19=$or3=((($bool18=$and5=(($eq29=$p['getattr']($m['Double'], 'NaN'))===($eq30=x)&&$eq29===null?true:
			($eq29===null?false:($eq30===null?false:
				((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
					((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
						$eq29==$eq30)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
			false :
			(typeof $bool18=='object'?
				(typeof $bool18.__nonzero__=='function'?
					$bool18.__nonzero__() :
					(typeof $bool18.__len__=='function'?
						($bool18.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?true:$and5)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
			false :
			(typeof $bool19=='object'?
				(typeof $bool19.__nonzero__=='function'?
					$bool19.__nonzero__() :
					(typeof $bool19.__len__=='function'?
						($bool19.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or3:((($bool20=$and7=((((($cmp3=x)===($cmp4=minLim)?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
			false :
			(typeof $bool20=='object'?
				(typeof $bool20.__nonzero__=='function'?
					$bool20.__nonzero__() :
					(typeof $bool20.__len__=='function'?
						($bool20.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($cmp5=x)===($cmp6=maxLim)?0:
			(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
				($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
				$p['cmp']($cmp5, $cmp6))) < 1):$and7));
		return result;
	};
	$m['withinRange'].__name__ = 'withinRange';

	$m['withinRange'].__bind_type__ = 0;
	$m['withinRange'].__args__ = [null,null,['x'],['minLim'],['maxLim']];
	return this;
}; /* end pyjamas.chart.GChartUtil */


/* end module: pyjamas.chart.GChartUtil */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart', 'pyjamas.chart.Double']
*/

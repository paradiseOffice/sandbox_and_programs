/* start module: pyjamas.chart.HovertextChunk */
$pyjs.loaded_modules['pyjamas.chart.HovertextChunk'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.HovertextChunk'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.HovertextChunk'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.HovertextChunk"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.HovertextChunk>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.HovertextChunk';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['HovertextChunk'] = $pyjs.loaded_modules['pyjamas.chart.HovertextChunk'];


	$m['re'] = $p['___import___']('re', 'pyjamas.chart');
	$m['userpattern'] = $m['re']['compile']('[a-zA-Z][a-zA-Z0-9_]*}.*');
	$m['HOVERTEXT_PARAM_NONE'] = 0;
	$m['HOVERTEXT_PARAM_X'] = 1;
	$m['HOVERTEXT_PARAM_Y'] = 2;
	$m['HOVERTEXT_PARAM_PIESLICESIZE'] = 3;
	$m['HOVERTEXT_PARAM_USERDEFINED'] = 4;
	$m['HovertextChunk'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.HovertextChunk';
		$method = $pyjs__bind_method2('__init__', function(pid, name, text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pid = arguments[1];
				name = arguments[2];
				text = arguments[3];
			}

			self.paramId = pid;
			self.paramName = name;
			self.chunkText = text;
			return null;
		}
	, 1, [null,null,['self'],['pid'],['name'],['text']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HovertextChunk', $p['tuple']($bases), $data);
	})();
	$m['parseHovertextTemplate'] = function(htTemplate) {
		var $iter1_iter,result,closeCurlyIndex,sChunk,$iter1_array,$len3,$iter1_nextval,$eq2,$eq3,$eq1,$eq4,$bool2,$bool3,$bool1,$bool6,$bool4,$bool5,sC,$2,$1,$iter1_type,i,$add2,$add3,$len4,$add1,$len2,$iter1_idx,$add4,$len1;
		if ((($bool1=(($eq1=htTemplate)===($eq2='')&&$eq1===null?true:
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
					 true ) )) {
			return $p['list']([]);
		}
		sChunk = htTemplate['$$split']('${');
		result = $p['list']([]);
		$iter1_iter = $p['range']((($len1=sChunk) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1))))));
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			i = $iter1_nextval;
			sC = (typeof ($1=sChunk).__array != 'undefined'?
				((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(i));
			if ((($bool2=(($eq3=0)===($eq4=i)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				result['append']($m['HovertextChunk']($m['HOVERTEXT_PARAM_NONE'], null, sC));
			}
			else if ((($bool3=sC['startswith']('x}')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				result['append']($m['HovertextChunk']($m['HOVERTEXT_PARAM_X'], 'x', $p['__getslice'](sC, (($len2='x}') === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2))))), null)));
			}
			else if ((($bool4=sC['startswith']('y}')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				result['append']($m['HovertextChunk']($m['HOVERTEXT_PARAM_Y'], 'y', $p['__getslice'](sC, (($len3='y}') === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))), null)));
			}
			else if ((($bool5=sC['startswith']('pieSliceSize}')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				result['append']($m['HovertextChunk']($m['HOVERTEXT_PARAM_PIESLICESIZE'], 'pieSliceSize', $p['__getslice'](sC, (($len4='pieSliceSize}') === null?0:
					(typeof $len4.__array != 'undefined' ? $len4.__array.length:
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'?$len4.length:
								$p['len']($len4))))), null)));
			}
			else if ((($bool6=$m['userpattern']['match'](sC)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				closeCurlyIndex = sC['find']('}');
				result['append']($m['HovertextChunk']($m['HOVERTEXT_PARAM_USERDEFINED'], $p['__getslice'](sC, 0, closeCurlyIndex), $p['__getslice'](sC, (typeof ($add1=closeCurlyIndex)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)), null)));
			}
			else {
				result['append']($m['HovertextChunk']($m['HOVERTEXT_PARAM_NONE'], null, (typeof ($add3='${')==typeof ($add4=sC) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))));
			}
		}
		return result;
	};
	$m['parseHovertextTemplate'].__name__ = 'parseHovertextTemplate';

	$m['parseHovertextTemplate'].__bind_type__ = 0;
	$m['parseHovertextTemplate'].__args__ = [null,null,['htTemplate']];
	$m['getHovertext'] = function(htc, p) {
		var $bool18,$bool19,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$mul2,$iter2_type,$eq21,$eq20,$eq23,$eq22,$eq25,$bool7,$eq27,$eq26,$eq29,$eq28,$bool8,$bool9,yS,hoverParam,$eq32,$eq30,$eq31,result,$iter2_iter,$bool24,$bool21,$bool20,$bool23,$bool22,$17,$iter2_array,$eq18,$eq19,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,xS,$iter2_idx,$8,$9,$6,$7,$4,$5,$3,$mul1,$14,$15,$16,$iter2_nextval,$10,$11,$12,$13,$18,$len5,$add6,$add7,$add5,$add8,$add9,pieSlicePercentS,pid,pieSliceSize,axis,$add21,$add20,$add23,$add22,$add25,$add24,$add26,hpi,$eq8,$eq9,$eq6,$eq7,$eq5,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,i,$eq24;
		result = '';
		xS = null;
		yS = null;
		pieSlicePercentS = null;
		hpi = p['getParent']()['getParent']()['getHoverParameterInterpreter']();
		$iter2_iter = $p['range']((($len5=htc) === null?0:
			(typeof $len5.__array != 'undefined' ? $len5.__array.length:
				(typeof $len5.__len__ == 'function'?$len5.__len__():
					(typeof $len5.length != 'undefined'?$len5.length:
						$p['len']($len5))))));
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			i = $iter2_nextval;
			pid = $p['getattr']((typeof ($3=htc).__array != 'undefined'?
				((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(i)), 'paramId');
			if ((($bool7=(($eq5=pid)===($eq6=$m['HOVERTEXT_PARAM_NONE'])&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			}
			else if ((($bool8=(($eq7=pid)===($eq8=$m['HOVERTEXT_PARAM_X'])&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				if ((($bool9=(($eq9=null)===($eq10=xS)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					hoverParam = null;
					if ((($bool10=!(($eq11=null)===($eq12=hpi)&&$eq11===null?true:
						($eq11===null?false:($eq12===null?false:
							((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
								((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
									$eq11==$eq12)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						hoverParam = hpi['getHoverParameter']($p['getattr']((typeof ($5=htc).__array != 'undefined'?
							((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__(i)), 'paramName'), p);
					}
					if ((($bool11=(hoverParam !== null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						xS = hoverParam;
					}
					else {
						axis = p['getParent']()['getParent']()['getXAxis']();
						xS = axis['formatAsTickLabel'](p['getX']());
					}
				}
				if ((($bool12=!(($eq13=null)===($eq14=xS)&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					result = (typeof ($add5=result)==typeof ($add6=xS) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
			}
			else if ((($bool13=(($eq15=pid)===($eq16=$m['HOVERTEXT_PARAM_Y'])&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				if ((($bool14=(($eq17=null)===($eq18=yS)&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					hoverParam = null;
					if ((($bool15=!(($eq19=null)===($eq20=hpi)&&$eq19===null?true:
						($eq19===null?false:($eq20===null?false:
							((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
								((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
									$eq19==$eq20)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						hoverParam = hpi['getHoverParameter']($p['getattr']((typeof ($7=htc).__array != 'undefined'?
							((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__(i)), 'paramName'), p);
					}
					if ((($bool16=(hoverParam !== null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
						yS = hoverParam;
					}
					else {
						if ((($bool17=p['getParent']()['onY2']()) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
							axis = p['getParent']()['getParent']()['getY2Axis']();
						}
						else {
							axis = p['getParent']()['getParent']()['getYAxis']();
						}
						yS = axis['formatAsTickLabel'](p['getY']());
					}
				}
				if ((($bool18=!(($eq21=null)===($eq22=yS)&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add7=result)==typeof ($add8=yS) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
			}
			else if ((($bool19=(($eq23=pid)===($eq24=$m['HOVERTEXT_PARAM_PIESLICESIZE'])&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool20=(($eq25=null)===($eq26=pieSlicePercentS)&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
								$eq25==$eq26)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool21=!(($eq27=null)===($eq28=hpi)&&$eq27===null?true:
						($eq27===null?false:($eq28===null?false:
							((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
								((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
									$eq27==$eq28)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
							false :
							(typeof $bool21=='object'?
								(typeof $bool21.__nonzero__=='function'?
									$bool21.__nonzero__() :
									(typeof $bool21.__len__=='function'?
										($bool21.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						pieSlicePercentS = hpi['getHoverParameter']($p['getattr']((typeof ($9=htc).__array != 'undefined'?
							((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__(i)), 'paramName'), p);
					}
					else {
						pieSliceSize = p['getParent']()['getSymbol']()['getPieSliceSize']();
						if ((($bool22=p['getParent']()['onY2']()) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
								false :
								(typeof $bool22=='object'?
									(typeof $bool22.__nonzero__=='function'?
										$bool22.__nonzero__() :
										(typeof $bool22.__len__=='function'?
											($bool22.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							axis = p['getParent']()['getParent']()['getY2Axis']();
						}
						else {
							axis = p['getParent']()['getParent']()['getYAxis']();
						}
						pieSlicePercentS = (typeof ($add9=axis['formatAsTickLabel']((typeof ($mul1=100)==typeof ($mul2=pieSliceSize) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))))==typeof ($add10='%') && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10));
					}
				}
				result = (typeof ($add11=result)==typeof ($add12=pieSlicePercentS) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
			}
			else if ((($bool23=(($eq29=pid)===($eq30=$m['HOVERTEXT_PARAM_USERDEFINED'])&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool24=(($eq31=null)===($eq32=hpi)&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add17=result)==typeof ($add18=(typeof ($add15=(typeof ($add13='${')==typeof ($add14=$p['getattr']((typeof ($11=htc).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i)), 'paramName')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($add16='}') && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				else {
					result = (typeof ($add19=result)==typeof ($add20=hpi['getHoverParameter']($p['getattr']((typeof ($13=htc).__array != 'undefined'?
						((typeof $13.__array[$14=i]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(i)), 'paramName'), p)) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
				}
			}
			else {
				throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)((typeof ($add23=(typeof ($add21='An illegal HOVERTEXT_PARAM_* id: ')==typeof ($add22=$p['getattr']((typeof ($15=htc).__array != 'undefined'?
					((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(i)), 'paramId')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)))==typeof ($add24=' was encountered. A GChart bug is likely to blame.') && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24))));
			}
			result = (typeof ($add25=result)==typeof ($add26=$p['getattr']((typeof ($17=htc).__array != 'undefined'?
				((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(i)), 'chunkText')) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26));
		}
		return result;
	};
	$m['getHovertext'].__name__ = 'getHovertext';

	$m['getHovertext'].__bind_type__ = 0;
	$m['getHovertext'].__args__ = [null,null,['htc'],['p']];
	$m['formatAsHovertext'] = function(plainTextLabel) {
		var $add29,$add28,$add30,$add27,result;
		result = (typeof ($add29=(typeof ($add27="<html><div style='background-color:#FFFFF0; border-color:black; border-style:solid; border-width:1px 1px 1px 1px; padding:2px; text-align:left'>")==typeof ($add28=$p['str'](plainTextLabel)) && (typeof $add27=='number'||typeof $add27=='string')?
			$add27+$add28:
			$p['op_add']($add27,$add28)))==typeof ($add30='</div>') && (typeof $add29=='number'||typeof $add29=='string')?
			$add29+$add30:
			$p['op_add']($add29,$add30));
		return result;
	};
	$m['formatAsHovertext'].__name__ = 'formatAsHovertext';

	$m['formatAsHovertext'].__bind_type__ = 0;
	$m['formatAsHovertext'].__args__ = [null,null,['plainTextLabel']];
	return this;
}; /* end pyjamas.chart.HovertextChunk */


/* end module: pyjamas.chart.HovertextChunk */


/*
PYJS_DEPS: ['re']
*/

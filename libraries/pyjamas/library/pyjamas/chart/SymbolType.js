/* start module: pyjamas.chart.SymbolType */
$pyjs.loaded_modules['pyjamas.chart.SymbolType'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.SymbolType'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.SymbolType'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.SymbolType"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.SymbolType>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.SymbolType';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['SymbolType'] = $pyjs.loaded_modules['pyjamas.chart.SymbolType'];


	$m['math'] = $p['___import___']('math', 'pyjamas.chart');
	$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.chart', null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
	$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', 'pyjamas.chart', null, false);
	$m['GChartConsts'] = $p['___import___']('pyjamas.chart.GChartConsts', 'pyjamas.chart', null, false);
	$m['MIN_BAND_SIZE'] = 1;
	$m['SymbolType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('isHorizontallyBanded', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'horizontallyBanded');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isHorizontallyBanded'] = $method;
		$method = $pyjs__bind_method2('getBandThickness', function(pp, sym, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				sym = arguments[2];
				onY2 = arguments[3];
			}
			var $bool1,result;
			if ((($bool1=sym['isHorizontallyBanded']()) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				result = $p['max']($m['MIN_BAND_SIZE'], sym['getHeight'](pp, onY2));
			}
			else {
				result = $p['max']($m['MIN_BAND_SIZE'], sym['getWidth'](pp));
			}
			return result;
		}
	, 1, [null,null,['self'],['pp'],['sym'],['onY2']]);
		$cls_definition['getBandThickness'] = $method;
		$method = $pyjs__bind_method2('getBrushHeight', function(sym) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sym = arguments[1];
			}
			var result;
			result = sym['getBrushHeight']();
			return result;
		}
	, 1, [null,null,['self'],['sym']]);
		$cls_definition['getBrushHeight'] = $method;
		$method = $pyjs__bind_method2('getBrushLocation', function(sym) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sym = arguments[1];
			}
			var result;
			result = sym['getBrushLocation']();
			return result;
		}
	, 1, [null,null,['self'],['sym']]);
		$cls_definition['getBrushLocation'] = $method;
		$method = $pyjs__bind_method2('getBrushWidth', function(sym) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sym = arguments[1];
			}
			var result;
			result = sym['getBrushWidth']();
			return result;
		}
	, 1, [null,null,['self'],['sym']]);
		$cls_definition['getBrushWidth'] = $method;
		$method = $pyjs__bind_method2('__init__', function(widthMultiplier, heightMultiplier, pixelPadLeft, pixelPadRight, pixelPadTop, pixelPadBottom, isHorizontallyBanded) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widthMultiplier = arguments[1];
				heightMultiplier = arguments[2];
				pixelPadLeft = arguments[3];
				pixelPadRight = arguments[4];
				pixelPadTop = arguments[5];
				pixelPadBottom = arguments[6];
				isHorizontallyBanded = arguments[7];
			}
			if (typeof isHorizontallyBanded == 'undefined') isHorizontallyBanded=arguments.callee.__args__[9][1];

			$m['AnnotationLocation']['validateMultipliers'](widthMultiplier, heightMultiplier);
			self.widthMultiplier = widthMultiplier;
			self.heightMultiplier = heightMultiplier;
			self.pixelPadLeft = pixelPadLeft;
			self.pixelPadRight = pixelPadRight;
			self.pixelPadTop = pixelPadTop;
			self.pixelPadBottom = pixelPadBottom;
			self.horizontallyBanded = isHorizontallyBanded;
			self.oppositeEdge = $p['getattr']($m['Double'], 'NaN');
			return null;
		}
	, 1, [null,null,['self'],['widthMultiplier'],['heightMultiplier'],['pixelPadLeft'],['pixelPadRight'],['pixelPadTop'],['pixelPadBottom'],['isHorizontallyBanded', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}

			return height;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}

			return width;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getCenterX_2', function(pp, symbol, prevX, x, nextX) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				prevX = arguments[3];
				x = arguments[4];
				nextX = arguments[5];
			}
			var xLeft,xMax,xMidPx,xCenter,nextXPx,width,xMid,xMin,prevXPx,$eq6,$eq2,$eq3,$eq1,xMaxPx,$eq4,$eq5,$bool2,$bool3,xMinPx,xPx,$bool4,$div2,$div3,$div1,$div4,symWidth,$add2,$add3,$add1,$add4;
			xMin = pp['getXMin']();
			xMax = pp['getXMax']();
			xMid = symbol['getBaseline']();
			if ((($bool2=(($eq1=$p['getattr']($m['Double'], 'NaN'))===($eq2=xMid)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				xMid = (typeof ($div1=(typeof ($add1=xMin)==typeof ($add2=xMax) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($div2=2.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
			}
			xMinPx = pp['xToPixel'](xMin);
			xMaxPx = pp['xToPixel'](xMax);
			xMidPx = pp['xToPixel'](xMid);
			xPx = pp['xToPixel'](x);
			prevXPx = pp['xToPixel'](prevX);
			nextXPx = pp['xToPixel'](nextX);
			width = symbol['getWidth'](pp);
			symWidth = self['getAdjustedWidth'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx);
			if ((($bool3=(($eq3=$p['getattr']($m['Double'], 'NaN'))===($eq4=symWidth)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			xLeft = self['getUpperLeftX'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx, pp['getXMousePlotArea']());
			if ((($bool4=(($eq5=$p['getattr']($m['Double'], 'NaN'))===($eq6=xLeft)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			xCenter = (typeof ($add3=xLeft)==typeof ($add4=(typeof ($div3=symWidth)==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			return xCenter;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['prevX'],['x'],['nextX']]);
		$cls_definition['getCenterX_2'] = $method;
		$method = $pyjs__bind_method2('getCenterX', function(pp, symbol, iPoint) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				iPoint = arguments[3];
			}
			var result,nextX,prevX,$sub2,$sub1,$bool6,$bool5,$cmp4,c,$cmp1,$cmp3,$cmp2,p,$add6,$add7,$add5,x,$add8;
			c = symbol['getParent']();
			p = c['getPoint'](iPoint);
			prevX = $p['getattr']($m['Double'], 'NaN');
			x = p['getX']();
			nextX = $p['getattr']($m['Double'], 'NaN');
			if ((($bool5=((($cmp1=iPoint)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				prevX = c['getPoint']((typeof ($sub1=iPoint)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))['getX']();
			}
			if ((($bool6=((($cmp3=(typeof ($add5=iPoint)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))===($cmp4=c['getNPoints']())?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				nextX = c['getPoint']((typeof ($add7=iPoint)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))['getX']();
			}
			result = self['getCenterX_2'](pp, symbol, prevX, x, nextX);
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['iPoint']]);
		$cls_definition['getCenterX'] = $method;
		$method = $pyjs__bind_method2('getCenterY_2', function(pp, symbol, prevY, y, nextY, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				prevY = arguments[3];
				y = arguments[4];
				nextY = arguments[5];
				onY2 = arguments[6];
			}
			var yTop,$bool10,height,yMidPx,$eq10,$eq11,$eq12,yCenter,yMid,nextYPx,yMinPx,yMin,symHeight,$eq8,$eq9,yMax,yMaxPx,yPx,prevYPx,$eq7,$div8,$add10,$bool7,$add12,$bool8,$bool9,$div6,$div7,$div5,$add9,$add11;
			if ((($bool7=onY2) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				yMin = pp['getY2Max']();
				yMax = pp['getY2Min']();
			}
			else {
				yMin = pp['getYMax']();
				yMax = pp['getYMin']();
			}
			yMid = symbol['getBaseline']();
			if ((($bool8=(($eq7=$p['getattr']($m['Double'], 'NaN'))===($eq8=yMid)&&$eq7===null?true:
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
				yMid = (typeof ($div5=(typeof ($add9=yMin)==typeof ($add10=yMax) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($div6=2.0) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
			}
			yMinPx = pp['yToPixel'](yMin, onY2);
			yMaxPx = pp['yToPixel'](yMax, onY2);
			yMidPx = pp['yToPixel'](yMid, onY2);
			yPx = pp['yToPixel'](y, onY2);
			prevYPx = pp['yToPixel'](prevY, onY2);
			nextYPx = pp['yToPixel'](nextY, onY2);
			height = symbol['getHeight'](pp, onY2);
			symHeight = self['getAdjustedHeight'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx);
			if ((($bool9=(($eq9=$p['getattr']($m['Double'], 'NaN'))===($eq10=symHeight)&&$eq9===null?true:
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			yTop = self['getUpperLeftY'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx, pp['getYMousePlotArea']());
			if ((($bool10=(($eq11=$p['getattr']($m['Double'], 'NaN'))===($eq12=yTop)&&$eq11===null?true:
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			yCenter = (typeof ($add11=yTop)==typeof ($add12=(typeof ($div7=symHeight)==typeof ($div8=2.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			return yCenter;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['prevY'],['y'],['nextY'],['onY2']]);
		$cls_definition['getCenterY_2'] = $method;
		$method = $pyjs__bind_method2('getCenterY', function(pp, symbol, iPoint, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				iPoint = arguments[3];
				onY2 = arguments[4];
			}
			var $bool11,$bool12,result,nextY,prevY,$sub3,$sub4,$cmp7,$add14,$add15,$add16,$add13,$cmp5,c,$cmp6,$cmp8,p,y;
			c = symbol['getParent']();
			p = c['getPoint'](iPoint);
			prevY = $p['getattr']($m['Double'], 'NaN');
			y = p['getY']();
			nextY = $p['getattr']($m['Double'], 'NaN');
			if ((($bool11=((($cmp5=iPoint)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				prevY = c['getPoint']((typeof ($sub3=iPoint)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))['getY']();
			}
			if ((($bool12=((($cmp7=(typeof ($add13=iPoint)==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14)))===($cmp8=c['getNPoints']())?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				nextY = c['getPoint']((typeof ($add15=iPoint)==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))['getY']();
			}
			result = self['getCenterY_2'](pp, symbol, prevY, y, nextY, onY2);
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['iPoint'],['onY2']]);
		$cls_definition['getCenterY'] = $method;
		$method = $pyjs__bind_method2('getEdgeLeft', function(pp, symbol, x, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				x = arguments[3];
				onY2 = arguments[4];
			}
			var xLeft,$bool13,$bool14,$bool15,$eq18,result,xMax,$eq13,$eq14,$eq15,$eq16,$eq17,xMidPx,$div10,nextXPx,width,xMid,xMin,xPx,prevXPx,xMaxPx,xMinPx,$div9,$add18,symWidth,$add17;
			xMin = pp['getXMin']();
			xMax = pp['getXMax']();
			xMid = symbol['getBaseline']();
			if ((($bool13=(($eq13=$p['getattr']($m['Double'], 'NaN'))===($eq14=xMid)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				xMid = (typeof ($div9=(typeof ($add17=xMin)==typeof ($add18=xMax) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($div10=2.0) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
			}
			xMinPx = pp['xToPixel'](xMin);
			xMaxPx = pp['xToPixel'](xMax);
			xMidPx = pp['xToPixel'](xMid);
			xPx = pp['xToPixel'](x);
			prevXPx = $p['getattr']($m['Double'], 'NaN');
			nextXPx = $p['getattr']($m['Double'], 'NaN');
			width = symbol['getWidth'](pp);
			symWidth = self['getAdjustedWidth'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx);
			if ((($bool14=(($eq15=$p['getattr']($m['Double'], 'NaN'))===($eq16=symWidth)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			xLeft = self['getUpperLeftX'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx, pp['getXMousePlotArea']());
			if ((($bool15=(($eq17=$p['getattr']($m['Double'], 'NaN'))===($eq18=xLeft)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			result = xLeft;
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['x'],['onY2']]);
		$cls_definition['getEdgeLeft'] = $method;
		$method = $pyjs__bind_method2('getEdgeRight', function(pp, symbol, x, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				x = arguments[3];
				onY2 = arguments[4];
			}
			var $bool18,xLeft,$bool16,$bool17,$eq19,$div12,xMax,xMidPx,$add20,$add22,$div11,nextXPx,width,xMid,xMin,prevXPx,xMaxPx,$eq21,$eq20,xMinPx,xPx,$eq24,$add19,symWidth,$eq23,$add21,$eq22,result;
			xMin = pp['getXMin']();
			xMax = pp['getXMax']();
			xMid = symbol['getBaseline']();
			if ((($bool16=(($eq19=$p['getattr']($m['Double'], 'NaN'))===($eq20=xMid)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				xMid = (typeof ($div11=(typeof ($add19=xMin)==typeof ($add20=xMax) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))==typeof ($div12=2.0) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12));
			}
			xMinPx = pp['xToPixel'](xMin);
			xMaxPx = pp['xToPixel'](xMax);
			xMidPx = pp['xToPixel'](xMid);
			xPx = pp['xToPixel'](x);
			prevXPx = $p['getattr']($m['Double'], 'NaN');
			nextXPx = $p['getattr']($m['Double'], 'NaN');
			width = symbol['getWidth'](pp);
			symWidth = self['getAdjustedWidth'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx);
			if ((($bool17=(($eq21=$p['getattr']($m['Double'], 'NaN'))===($eq22=symWidth)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			xLeft = self['getUpperLeftX'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx, pp['getXMousePlotArea']());
			if ((($bool18=(($eq23=$p['getattr']($m['Double'], 'NaN'))===($eq24=xLeft)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			result = (typeof ($add21=xLeft)==typeof ($add22=symWidth) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['x'],['onY2']]);
		$cls_definition['getEdgeRight'] = $method;
		$method = $pyjs__bind_method2('getEdgeTop', function(pp, symbol, y, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				y = arguments[3];
				onY2 = arguments[4];
			}
			var $bool19,yTop,height,$eq30,yMidPx,result,$div14,$add24,$div13,yMid,$bool21,$bool20,nextYPx,yMinPx,yMin,symHeight,yMax,yMaxPx,yPx,prevYPx,$bool22,$eq25,$eq27,$eq26,$eq29,$eq28,$add23;
			if ((($bool19=onY2) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				yMin = pp['getY2Max']();
				yMax = pp['getY2Min']();
			}
			else {
				yMin = pp['getYMax']();
				yMax = pp['getYMin']();
			}
			yMid = symbol['getBaseline']();
			if ((($bool20=(($eq25=$p['getattr']($m['Double'], 'NaN'))===($eq26=yMid)&&$eq25===null?true:
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
				yMid = (typeof ($div13=(typeof ($add23=yMin)==typeof ($add24=yMax) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)))==typeof ($div14=2.0) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14));
			}
			yMinPx = pp['yToPixel'](yMin, onY2);
			yMaxPx = pp['yToPixel'](yMax, onY2);
			yMidPx = pp['yToPixel'](yMid, onY2);
			yPx = pp['yToPixel'](y, onY2);
			prevYPx = $p['getattr']($m['Double'], 'NaN');
			nextYPx = $p['getattr']($m['Double'], 'NaN');
			height = symbol['getHeight'](pp, onY2);
			symHeight = self['getAdjustedHeight'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx);
			if ((($bool21=(($eq27=$p['getattr']($m['Double'], 'NaN'))===($eq28=symHeight)&&$eq27===null?true:
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			yTop = self['getUpperLeftY'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx, pp['getYMousePlotArea']());
			if ((($bool22=(($eq29=$p['getattr']($m['Double'], 'NaN'))===($eq30=yTop)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			result = yTop;
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['y'],['onY2']]);
		$cls_definition['getEdgeTop'] = $method;
		$method = $pyjs__bind_method2('getEdgeBottom', function(pp, symbol, y, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				y = arguments[3];
				onY2 = arguments[4];
			}
			var yTop,height,$eq32,$eq33,yMidPx,$eq36,result,$eq34,$eq35,$add28,yMid,$div15,$div16,$add25,$add27,$add26,$bool25,$bool24,$bool26,$bool23,nextYPx,yMinPx,yMin,yPx,symHeight,yMax,yMaxPx,prevYPx,$eq31;
			if ((($bool23=onY2) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				yMin = pp['getY2Max']();
				yMax = pp['getY2Min']();
			}
			else {
				yMin = pp['getYMax']();
				yMax = pp['getYMin']();
			}
			yMid = symbol['getBaseline']();
			if ((($bool24=(($eq31=$p['getattr']($m['Double'], 'NaN'))===($eq32=yMid)&&$eq31===null?true:
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
				yMid = (typeof ($div15=(typeof ($add25=yMin)==typeof ($add26=yMax) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)))==typeof ($div16=2.0) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16));
			}
			yMinPx = pp['yToPixel'](yMin, onY2);
			yMaxPx = pp['yToPixel'](yMax, onY2);
			yMidPx = pp['yToPixel'](yMid, onY2);
			yPx = pp['yToPixel'](y, onY2);
			prevYPx = $p['getattr']($m['Double'], 'NaN');
			nextYPx = $p['getattr']($m['Double'], 'NaN');
			height = symbol['getHeight'](pp, onY2);
			symHeight = self['getAdjustedHeight'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx);
			if ((($bool25=(($eq33=$p['getattr']($m['Double'], 'NaN'))===($eq34=symHeight)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			yTop = self['getUpperLeftY'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx, pp['getYMousePlotArea']());
			if ((($bool26=(($eq35=$p['getattr']($m['Double'], 'NaN'))===($eq36=yTop)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			result = (typeof ($add27=yTop)==typeof ($add28=symHeight) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['y'],['onY2']]);
		$cls_definition['getEdgeBottom'] = $method;
		$method = $pyjs__bind_method2('getEdgeOppositeHorizontally', function(pp, symbol, x, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				x = arguments[3];
				onY2 = arguments[4];
			}
			var $eq40,xLeft,$sub7,$eq37,xMax,$eq38,$eq39,$add29,$div18,xMidPx,$div17,xMid,nextXPx,width,$bool27,$sub8,xMin,$bool29,$bool28,$sub5,prevXPx,xMaxPx,xMinPx,xPx,$cmp10,$add31,$add32,$eq42,$add30,symWidth,$cmp9,$sub6,$bool30,$eq41,result;
			xMin = pp['getXMin']();
			xMax = pp['getXMax']();
			xMid = symbol['getBaseline']();
			if ((($bool27=(($eq37=$p['getattr']($m['Double'], 'NaN'))===($eq38=xMid)&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				xMid = (typeof ($div17=(typeof ($add29=xMin)==typeof ($add30=xMax) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)))==typeof ($div18=2.0) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18));
			}
			xMinPx = pp['xToPixel'](xMin);
			xMaxPx = pp['xToPixel'](xMax);
			xMidPx = pp['xToPixel'](xMid);
			xPx = pp['xToPixel'](x);
			prevXPx = $p['getattr']($m['Double'], 'NaN');
			nextXPx = $p['getattr']($m['Double'], 'NaN');
			width = symbol['getWidth'](pp);
			symWidth = self['getAdjustedWidth'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx);
			if ((($bool28=(($eq39=$p['getattr']($m['Double'], 'NaN'))===($eq40=symWidth)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			xLeft = self['getUpperLeftX'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx, pp['getXMousePlotArea']());
			if ((($bool29=(($eq41=$p['getattr']($m['Double'], 'NaN'))===($eq42=xLeft)&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			result = (typeof ($add31=xLeft)==typeof ($add32=symWidth) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32));
			if ((($bool30=((($cmp9=$p['abs']((typeof ($sub5=xLeft)==typeof ($sub6=xPx) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))))===($cmp10=$p['abs']((typeof ($sub7=result)==typeof ($sub8=xPx) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = xLeft;
			}
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['x'],['onY2']]);
		$cls_definition['getEdgeOppositeHorizontally'] = $method;
		$method = $pyjs__bind_method2('getEdgeOppositeVertically', function(pp, symbol, y, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				y = arguments[3];
				onY2 = arguments[4];
			}
			var yTop,$add36,height,yMidPx,$eq45,$add35,$div19,yMid,$sub9,nextYPx,yMinPx,yMin,yPx,symHeight,$sub10,yMax,yMaxPx,$sub12,prevYPx,$sub11,$cmp11,$cmp12,$div20,$eq48,$eq43,$add33,$eq47,$eq46,$add34,$eq44,$bool32,$bool33,$bool31,$bool34,$bool35,result;
			if ((($bool31=onY2) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yMin = pp['getY2Max']();
				yMax = pp['getY2Min']();
			}
			else {
				yMin = pp['getYMax']();
				yMax = pp['getYMin']();
			}
			yMid = symbol['getBaseline']();
			if ((($bool32=(($eq43=$p['getattr']($m['Double'], 'NaN'))===($eq44=yMid)&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32.__nonzero__=='function'?
							$bool32.__nonzero__() :
							(typeof $bool32.__len__=='function'?
								($bool32.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yMid = (typeof ($div19=(typeof ($add33=yMin)==typeof ($add34=yMax) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($div20=2.0) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20));
			}
			yMinPx = pp['yToPixel'](yMin, onY2);
			yMaxPx = pp['yToPixel'](yMax, onY2);
			yMidPx = pp['yToPixel'](yMid, onY2);
			yPx = pp['yToPixel'](y, onY2);
			prevYPx = $p['getattr']($m['Double'], 'NaN');
			nextYPx = $p['getattr']($m['Double'], 'NaN');
			height = symbol['getHeight'](pp, onY2);
			symHeight = self['getAdjustedHeight'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx);
			if ((($bool33=(($eq45=$p['getattr']($m['Double'], 'NaN'))===($eq46=symHeight)&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33.__nonzero__=='function'?
							$bool33.__nonzero__() :
							(typeof $bool33.__len__=='function'?
								($bool33.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			yTop = self['getUpperLeftY'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx, pp['getYMousePlotArea']());
			if ((($bool34=(($eq47=$p['getattr']($m['Double'], 'NaN'))===($eq48=yTop)&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			result = (typeof ($add35=yTop)==typeof ($add36=symHeight) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36));
			if ((($bool35=((($cmp11=$p['abs']((typeof ($sub9=yTop)==typeof ($sub10=yPx) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10))))===($cmp12=$p['abs']((typeof ($sub11=result)==typeof ($sub12=yPx) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12))))?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = yTop;
			}
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['y'],['onY2']]);
		$cls_definition['getEdgeOppositeVertically'] = $method;
		$method = $pyjs__bind_method2('isIntersecting13', function(pp, symbol, prevX, x, nextX, prevY, y, nextY, onY2, top, right, bottom, left) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				prevX = arguments[3];
				x = arguments[4];
				nextX = arguments[5];
				prevY = arguments[6];
				y = arguments[7];
				nextY = arguments[8];
				onY2 = arguments[9];
				top = arguments[10];
				right = arguments[11];
				bottom = arguments[12];
				left = arguments[13];
			}
			var yTop,$eq52,xLeft,$bool46,yMin,$bool45,height,$eq54,$eq55,$eq56,yMidPx,$eq50,$eq51,xMax,$eq53,$cmp17,$div23,$eq58,$bool42,xMidPx,$eq57,$add44,$add43,$add42,nextXPx,$add40,width,xMid,$add48,nextYPx,xMin,yMinPx,$add39,$eq59,yPx,symHeight,prevXPx,$bool44,$bool43,yMax,$bool41,$bool40,yMaxPx,prevYPx,xMaxPx,$add38,$cmp15,$cmp14,xMinPx,xPx,$cmp13,$cmp18,$cmp19,yMid,$div21,$cmp16,$eq49,$div22,$div24,$cmp20,$eq60,symWidth,$add37,$add47,$add41,$bool36,$bool37,$add45,$add46,$bool38,$bool39;
			xMin = pp['getXMin']();
			xMax = pp['getXMax']();
			xMid = symbol['getBaseline']();
			if ((($bool36=(($eq49=$p['getattr']($m['Double'], 'NaN'))===($eq50=xMid)&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
							$eq49==$eq50)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				xMid = (typeof ($div21=(typeof ($add37=xMin)==typeof ($add38=xMax) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)))==typeof ($div22=2.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22));
			}
			xMinPx = pp['xToPixel'](xMin);
			xMaxPx = pp['xToPixel'](xMax);
			xMidPx = pp['xToPixel'](xMid);
			xPx = pp['xToPixel'](x);
			prevXPx = pp['xToPixel'](prevX);
			nextXPx = pp['xToPixel'](nextX);
			width = symbol['getWidth'](pp);
			symWidth = self['getAdjustedWidth'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx);
			if ((($bool37=(($eq51=$p['getattr']($m['Double'], 'NaN'))===($eq52=symWidth)&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
							$eq51==$eq52)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37.__nonzero__=='function'?
							$bool37.__nonzero__() :
							(typeof $bool37.__len__=='function'?
								($bool37.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			xLeft = self['getUpperLeftX'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx, pp['getXMousePlotArea']());
			if ((($bool38=(($eq53=$p['getattr']($m['Double'], 'NaN'))===($eq54=xLeft)&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			if ((($bool39=((($cmp13=$p['max'](xLeft, (typeof ($add39=xLeft)==typeof ($add40=symWidth) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40))))===($cmp14=left)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			else if ((($bool40=((($cmp15=$p['min'](xLeft, (typeof ($add41=xLeft)==typeof ($add42=symWidth) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42))))===($cmp16=right)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			if ((($bool41=onY2) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41.__nonzero__=='function'?
							$bool41.__nonzero__() :
							(typeof $bool41.__len__=='function'?
								($bool41.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yMin = pp['getY2Max']();
				yMax = pp['getY2Min']();
			}
			else {
				yMin = pp['getYMax']();
				yMax = pp['getYMin']();
			}
			yMid = symbol['getBaseline']();
			if ((($bool42=(($eq55=$p['getattr']($m['Double'], 'NaN'))===($eq56=yMid)&&$eq55===null?true:
				($eq55===null?false:($eq56===null?false:
					((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
						((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
							$eq55==$eq56)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yMid = (typeof ($div23=(typeof ($add43=yMin)==typeof ($add44=yMax) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44)))==typeof ($div24=2.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24));
			}
			yMinPx = pp['yToPixel'](yMin, onY2);
			yMaxPx = pp['yToPixel'](yMax, onY2);
			yMidPx = pp['yToPixel'](yMid, onY2);
			yPx = pp['yToPixel'](y, onY2);
			prevYPx = pp['yToPixel'](prevY, onY2);
			nextYPx = pp['yToPixel'](nextY, onY2);
			height = symbol['getHeight'](pp, onY2);
			symHeight = self['getAdjustedHeight'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx);
			if ((($bool43=(($eq57=$p['getattr']($m['Double'], 'NaN'))===($eq58=symHeight)&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
							$eq57==$eq58)))))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			yTop = self['getUpperLeftY'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx, pp['getYMousePlotArea']());
			if ((($bool44=(($eq59=$p['getattr']($m['Double'], 'NaN'))===($eq60=yTop)&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
							$eq59==$eq60)))))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			if ((($bool45=((($cmp17=$p['max'](yTop, (typeof ($add45=yTop)==typeof ($add46=symHeight) && (typeof $add45=='number'||typeof $add45=='string')?
				$add45+$add46:
				$p['op_add']($add45,$add46))))===($cmp18=top)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			else if ((($bool46=((($cmp19=$p['min'](yTop, (typeof ($add47=yTop)==typeof ($add48=symHeight) && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				$p['op_add']($add47,$add48))))===($cmp20=bottom)?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46.__nonzero__=='function'?
							$bool46.__nonzero__() :
							(typeof $bool46.__len__=='function'?
								($bool46.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['prevX'],['x'],['nextX'],['prevY'],['y'],['nextY'],['onY2'],['top'],['right'],['bottom'],['left']]);
		$cls_definition['isIntersecting13'] = $method;
		$method = $pyjs__bind_method2('isIntersecting', function(pp, symbol, iPoint, onY2, xBrush, yBrush, brushWidth, brushHeight) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				iPoint = arguments[3];
				onY2 = arguments[4];
				xBrush = arguments[5];
				yBrush = arguments[6];
				brushWidth = arguments[7];
				brushHeight = arguments[8];
			}
			var right,$cmp21,$cmp22,$cmp23,$cmp24,result,$add52,nextX,nextY,prevX,prevY,$bool47,$sub13,$sub16,$sub14,$sub15,$bool48,$add55,$add50,$add51,c,$add53,$add54,$add49,$add56,$add57,$add58,bottom,p,y,x,top,left;
			c = symbol['getParent']();
			p = c['getPoint'](iPoint);
			prevX = $p['getattr']($m['Double'], 'NaN');
			x = p['getX']();
			nextX = $p['getattr']($m['Double'], 'NaN');
			prevY = $p['getattr']($m['Double'], 'NaN');
			y = p['getY']();
			nextY = $p['getattr']($m['Double'], 'NaN');
			if ((($bool47=((($cmp21=iPoint)===($cmp22=0)?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == 1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47.__nonzero__=='function'?
							$bool47.__nonzero__() :
							(typeof $bool47.__len__=='function'?
								($bool47.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				prevX = c['getPoint']((typeof ($sub13=iPoint)==typeof ($sub14=1) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)))['getX']();
				prevY = c['getPoint']((typeof ($sub15=iPoint)==typeof ($sub16=1) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))['getY']();
			}
			if ((($bool48=((($cmp23=(typeof ($add49=iPoint)==typeof ($add50=1) && (typeof $add49=='number'||typeof $add49=='string')?
				$add49+$add50:
				$p['op_add']($add49,$add50)))===($cmp24=c['getNPoints']())?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				nextX = c['getPoint']((typeof ($add51=iPoint)==typeof ($add52=1) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)))['getX']();
				nextY = c['getPoint']((typeof ($add53=iPoint)==typeof ($add54=1) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)))['getY']();
			}
			top = symbol['getBrushLocation']()['getUpperLeftY'](yBrush, brushHeight, 0);
			bottom = (typeof ($add55=top)==typeof ($add56=brushHeight) && (typeof $add55=='number'||typeof $add55=='string')?
				$add55+$add56:
				$p['op_add']($add55,$add56));
			left = symbol['getBrushLocation']()['getUpperLeftX'](xBrush, brushWidth, 0);
			right = (typeof ($add57=left)==typeof ($add58=brushWidth) && (typeof $add57=='number'||typeof $add57=='string')?
				$add57+$add58:
				$p['op_add']($add57,$add58));
			result = self['isIntersecting13'](pp, symbol, prevX, x, nextX, prevY, y, nextY, onY2, top, right, bottom, left);
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['iPoint'],['onY2'],['xBrush'],['yBrush'],['brushWidth'],['brushHeight']]);
		$cls_definition['isIntersecting'] = $method;
		$method = $pyjs__bind_method2('getIconBorderWidth', function(legendFontSize, symBorderFraction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
				symBorderFraction = arguments[2];
			}
			var $bool49,result,$cmp26,$mul2,$mul1,$cmp25;
			result = 0;
			if ((($bool49=((($cmp25=symBorderFraction)===($cmp26=0)?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = $p['float_int']($p['max'](1.0, $m['math']['floor']((typeof ($mul1=symBorderFraction)==typeof ($mul2=$p['min'](self['getIconWidth'](legendFontSize), self['getIconHeight'](legendFontSize))) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))));
			}
			return result;
		}
	, 1, [null,null,['self'],['legendFontSize'],['symBorderFraction']]);
		$cls_definition['getIconBorderWidth'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $mul4,$mul3;
			return $p['float_int']($p['round']((typeof ($mul3=0.75)==typeof ($mul4=legendFontSize) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $mul5,$mul6;
			return $p['float_int']($p['round']((typeof ($mul5=0.75)==typeof ($mul6=legendFontSize) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftX', function(width, x, xPrev, xNext, xMin, xMax, xMid, xMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
				xMouse = arguments[8];
			}
			var $mul7,$sub18,$mul9,adjWidth,$add59,$mul10,$sub17,result,$mul8,$add60;
			adjWidth = self['getAdjustedWidth'](width, x, xPrev, xNext, xMin, xMax, xMid);
			result = (typeof ($add59=x)==typeof ($add60=(typeof ($mul9=(typeof ($mul7=0.5)==typeof ($mul8=(typeof ($sub17=$p['getattr'](self, 'widthMultiplier'))==typeof ($sub18=1) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18))) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)))==typeof ($mul10=adjWidth) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10))) && (typeof $add59=='number'||typeof $add59=='string')?
				$add59+$add60:
				$p['op_add']($add59,$add60));
			return result;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid'],['xMouse']]);
		$cls_definition['getUpperLeftX'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftY', function(height, y, yPrev, yNext, yMin, yMax, yMid, yMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
				yMouse = arguments[8];
			}
			var $sub19,$mul13,$mul11,adjHeight,$add62,$sub20,$mul14,result,$add61,$mul12;
			adjHeight = self['getAdjustedHeight'](height, y, yPrev, yNext, yMin, yMax, yMid);
			result = (typeof ($add61=y)==typeof ($add62=(typeof ($mul13=(typeof ($mul11=0.5)==typeof ($mul12=(typeof ($sub19=$p['getattr'](self, 'heightMultiplier'))==typeof ($sub20=1) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20))) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)))==typeof ($mul14=adjHeight) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				$p['op_add']($add61,$add62));
			return result;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid'],['yMouse']]);
		$cls_definition['getUpperLeftY'] = $method;
		$method = $pyjs__bind_method2('defaultAnnotationLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result;
			result = self['defaultHoverLocation']();
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultAnnotationLocation'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultFillThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_FILL_THICKNESS');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillThickness'] = $method;
		$method = $pyjs__bind_method2('defaultHovertextTemplate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_HOVERTEXT_TEMPLATE');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHovertextTemplate'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('createImage', function(symbol, width, height, borderWidth, url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				symbol = arguments[1];
				width = arguments[2];
				height = arguments[3];
				borderWidth = arguments[4];
				url = arguments[5];
			}
			var $bool54,$sub22,$bool56,$sub21,$bool50,$bool51,$bool52,$bool53,$sub28,$sub26,result,$cmp27,$cmp28,$cmp29,$mul18,$bool55,$sub27,borderColor,$sub24,$sub25,cappedBW,$sub23,backgroundColor,$mul24,$mul22,$mul23,$mul20,$mul21,wh,$eq65,$cmp34,$cmp33,$cmp32,$cmp31,$cmp30,$mul17,$mul16,$mul15,$div25,$div26,$eq64,$eq66,$eq61,$eq63,$eq62,$mul19;
			result = $m['Image'](url);
			if ((($bool50=((($cmp27=width)===($cmp28=height)?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				wh = width;
			}
			else {
				wh = height;
			}
			if ((($bool51=((($cmp29=(typeof ($mul15=2)==typeof ($mul16=borderWidth) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)))===($cmp30=wh)?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) < 1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
					false :
					(typeof $bool51=='object'?
						(typeof $bool51.__nonzero__=='function'?
							$bool51.__nonzero__() :
							(typeof $bool51.__len__=='function'?
								($bool51.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cappedBW = borderWidth;
			}
			else {
				cappedBW = $p['float_int']((typeof ($div25=wh)==typeof ($div26=2) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)));
			}
			borderColor = symbol['getBorderColorCSS']();
			if ((($bool52=(($eq61=cappedBW)===($eq62=borderWidth)&&$eq61===null?true:
				($eq61===null?false:($eq62===null?false:
					((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
						((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
							$eq61==$eq62)))))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				backgroundColor = symbol['getBackgroundColorCSS']();
			}
			else {
				backgroundColor = borderColor;
			}
			if ((($bool53=(($eq63=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq64=borderColor)&&$eq63===null?true:
				($eq63===null?false:($eq64===null?false:
					((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63.__cmp__=='function'?$eq63.__cmp__($eq64) === 0:
						((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64.__cmp__=='function'?$eq64.__cmp__($eq63) === 0:
							$eq63==$eq64)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool54=((($cmp31=cappedBW)===($cmp32=0)?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))) == 1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54.__nonzero__=='function'?
								$bool54.__nonzero__() :
								(typeof $bool54.__len__=='function'?
									($bool54.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					height = (typeof ($sub21=height)==typeof ($sub22=(typeof ($mul17=2)==typeof ($mul18=cappedBW) && typeof $mul17=='number'?
						$mul17*$mul18:
						$p['op_mul']($mul17,$mul18))) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22));
					width = (typeof ($sub23=width)==typeof ($sub24=(typeof ($mul19=2)==typeof ($mul20=cappedBW) && typeof $mul19=='number'?
						$mul19*$mul20:
						$p['op_mul']($mul19,$mul20))) && (typeof $sub23=='number'||typeof $sub23=='string')?
						$sub23-$sub24:
						$p['op_sub']($sub23,$sub24));
				}
				cappedBW = 0;
				borderColor = 'transparent';
				if ((($bool55=(($eq65=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq66=backgroundColor)&&$eq65===null?true:
					($eq65===null?false:($eq66===null?false:
						((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65.__cmp__=='function'?$eq65.__cmp__($eq66) === 0:
							((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66.__cmp__=='function'?$eq66.__cmp__($eq65) === 0:
								$eq65==$eq66)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55.__nonzero__=='function'?
								$bool55.__nonzero__() :
								(typeof $bool55.__len__=='function'?
									($bool55.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					backgroundColor = 'transparent';
				}
			}
			else if ((($bool56=((($cmp33=cappedBW)===($cmp34=0)?0:
				(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
					($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
					$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				height = (typeof ($sub25=height)==typeof ($sub26=(typeof ($mul21=2)==typeof ($mul22=cappedBW) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22))) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26));
				width = (typeof ($sub27=width)==typeof ($sub28=(typeof ($mul23=2)==typeof ($mul24=cappedBW) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28));
			}
			$m['GChartUtil']['setBackgroundColor'](result, backgroundColor);
			$m['GChartUtil']['setBorderColor'](result, borderColor);
			$m['GChartUtil']['setBorderStyle'](result, symbol['getBorderStyle']());
			$m['GChartUtil']['setBorderWidth'](result, $p['abs'](cappedBW));
			result['setPixelSize']($p['float_int']($p['round'](width)), $p['float_int']($p['round'](height)));
			return result;
		}
	, 1, [null,null,['self'],['symbol'],['width'],['height'],['borderWidth'],['url']]);
		$cls_definition['createImage'] = $method;
		$method = $pyjs__bind_method2('createIconImage', function(symbol, legendFontSize, symBorderFraction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				symbol = arguments[1];
				legendFontSize = arguments[2];
				symBorderFraction = arguments[3];
			}
			var result;
			result = self['createImage'](symbol, self['getIconWidth'](legendFontSize), self['getIconHeight'](legendFontSize), self['getIconBorderWidth'](legendFontSize, symBorderFraction), symbol['getImageURL']());
			return result;
		}
	, 1, [null,null,['self'],['symbol'],['legendFontSize'],['symBorderFraction']]);
		$cls_definition['createIconImage'] = $method;
		$method = $pyjs__bind_method2('areDisjointRanges', function(x1, x2, y1, y2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x1 = arguments[1];
				x2 = arguments[2];
				y1 = arguments[3];
				y2 = arguments[4];
			}
			var $and8,$bool57,$bool58,$bool59,$cmp48,$cmp49,result,$cmp50,$cmp43,$cmp40,$cmp46,$cmp47,$cmp44,$cmp45,$cmp41,$bool61,$bool60,$bool63,$bool62,$or1,$bool64,$or2,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$cmp39,$cmp38,$cmp37,$cmp36,$cmp35,$cmp42;
			result = false;
			if ((($bool64=((($bool60=$or1=((($bool57=$and1=((($cmp35=x1)===($cmp36=y1)?0:
				(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
					($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
					$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57.__nonzero__=='function'?
						$bool57.__nonzero__() :
						(typeof $bool57.__len__=='function'?
							($bool57.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool58=$and2=((($cmp37=x2)===($cmp38=y1)?0:
				(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
					($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
					$p['cmp']($cmp37, $cmp38))) == -1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
				false :
				(typeof $bool58=='object'?
					(typeof $bool58.__nonzero__=='function'?
						$bool58.__nonzero__() :
						(typeof $bool58.__len__=='function'?
							($bool58.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool59=$and3=((($cmp39=x1)===($cmp40=y2)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == -1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
				false :
				(typeof $bool59=='object'?
					(typeof $bool59.__nonzero__=='function'?
						$bool59.__nonzero__() :
						(typeof $bool59.__len__=='function'?
							($bool59.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp41=x2)===($cmp42=y2)?0:
				(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
					($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
					$p['cmp']($cmp41, $cmp42))) == -1):$and3):$and2):$and1)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
				false :
				(typeof $bool60=='object'?
					(typeof $bool60.__nonzero__=='function'?
						$bool60.__nonzero__() :
						(typeof $bool60.__len__=='function'?
							($bool60.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($bool61=$and5=((($cmp43=y1)===($cmp44=x1)?0:
				(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
					($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
					$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
				false :
				(typeof $bool61=='object'?
					(typeof $bool61.__nonzero__=='function'?
						$bool61.__nonzero__() :
						(typeof $bool61.__len__=='function'?
							($bool61.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool62=$and6=((($cmp45=y2)===($cmp46=x1)?0:
				(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
					($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
					$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
				false :
				(typeof $bool62=='object'?
					(typeof $bool62.__nonzero__=='function'?
						$bool62.__nonzero__() :
						(typeof $bool62.__len__=='function'?
							($bool62.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool63=$and7=((($cmp47=y1)===($cmp48=x2)?0:
				(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
					($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
					$p['cmp']($cmp47, $cmp48))) == -1)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
				false :
				(typeof $bool63=='object'?
					(typeof $bool63.__nonzero__=='function'?
						$bool63.__nonzero__() :
						(typeof $bool63.__len__=='function'?
							($bool63.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp49=y2)===($cmp50=x2)?0:
				(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
					($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
					$p['cmp']($cmp49, $cmp50))) == -1):$and7):$and6):$and5))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
					false :
					(typeof $bool64=='object'?
						(typeof $bool64.__nonzero__=='function'?
							$bool64.__nonzero__() :
							(typeof $bool64.__len__=='function'?
								($bool64.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = true;
			}
			return result;
		}
	, 1, [null,null,['self'],['x1'],['x2'],['y1'],['y2']]);
		$cls_definition['areDisjointRanges'] = $method;
		$method = $pyjs__bind_method2('intersects', function(left1, top1, right1, bottom1, left2, top2, right2, bottom2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left1 = arguments[1];
				top1 = arguments[2];
				right1 = arguments[3];
				bottom1 = arguments[4];
				left2 = arguments[5];
				top2 = arguments[6];
				right2 = arguments[7];
				bottom2 = arguments[8];
			}
			var result,$or4,$bool65,$bool66,$or3;
			result = true;
			if ((($bool66=((($bool65=$or3=self['areDisjointRanges'](left1, right1, left2, right2)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
				false :
				(typeof $bool65=='object'?
					(typeof $bool65.__nonzero__=='function'?
						$bool65.__nonzero__() :
						(typeof $bool65.__len__=='function'?
							($bool65.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:self['areDisjointRanges'](top1, bottom1, top2, bottom2))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
					false :
					(typeof $bool66=='object'?
						(typeof $bool66.__nonzero__=='function'?
							$bool66.__nonzero__() :
							(typeof $bool66.__len__=='function'?
								($bool66.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = false;
			}
			return result;
		}
	, 1, [null,null,['self'],['left1'],['top1'],['right1'],['bottom1'],['left2'],['top2'],['right2'],['bottom2']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('realizeOneImageOfSymbol', function(pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, xPx, yPx, prevXPx, prevYPx, nextXPx, nextYPx, width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				grp = arguments[2];
				arp = arguments[3];
				symbol = arguments[4];
				annotation = arguments[5];
				onY2 = arguments[6];
				clipPlotArea = arguments[7];
				clipDecoratedChart = arguments[8];
				xPx = arguments[9];
				yPx = arguments[10];
				prevXPx = arguments[11];
				prevYPx = arguments[12];
				nextXPx = arguments[13];
				nextYPx = arguments[14];
				width = arguments[15];
				height = arguments[16];
			}
			var yTop,$add88,$add83,$add82,$add81,$sub29,$add87,$add86,$add85,$add84,$add89,$bool83,$bool82,$bool81,$bool80,$bool87,$bool86,$bool85,$bool84,$bool89,$bool88,$add80,$mul28,$mul26,$mul27,$mul25,yAxisWidth,$sub31,symHeight,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,signHeight,$sub38,xMinPx,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$eq81,borderWidth,$mul31,$mul30,titleThickness,$mul32,$bool90,yCenter,$and11,$add65,$add64,$div30,$add66,$add63,$add69,$add68,$bool91,yMinPx,$add90,$or8,$cmp59,$cmp58,$cmp51,$cmp53,$cmp52,$cmp55,$cmp54,$cmp57,$cmp56,$and12,$eq85,$eq84,$eq83,$eq82,$div27,$eq80,$div29,$div33,$cmp60,yMidPx,loc,$bool78,$and9,xMidPx,$bool79,xCenter,yMid,yMin,yMax,$bool67,$eq86,$bool69,$bool68,$mul29,$eq69,$eq68,$eq67,symWidth,$div28,$div34,xLeft,$sub30,$bool76,$bool77,$bool74,$bool75,$bool72,$bool73,$bool70,$bool71,xMax,$sub40,$sub41,$sub42,$eq78,$eq79,$eq76,$eq77,$eq75,$eq72,$eq73,$eq70,$eq71,$sub39,xMid,xMin,$or5,$div32,$or7,$or6,yMaxPx,xMaxPx,$add67,$add92,signWidth,$and13,$and10,$div31,$and14,$and15,$add91,$eq74;
			xMin = pp['getXMin']();
			xMax = pp['getXMax']();
			xMid = symbol['getBaseline']();
			if ((($bool67=(($eq67=$p['getattr']($m['Double'], 'NaN'))===($eq68=xMid)&&$eq67===null?true:
				($eq67===null?false:($eq68===null?false:
					((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67.__cmp__=='function'?$eq67.__cmp__($eq68) === 0:
						((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68.__cmp__=='function'?$eq68.__cmp__($eq67) === 0:
							$eq67==$eq68)))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
					false :
					(typeof $bool67=='object'?
						(typeof $bool67.__nonzero__=='function'?
							$bool67.__nonzero__() :
							(typeof $bool67.__len__=='function'?
								($bool67.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				xMid = (typeof ($div27=(typeof ($add63=xMin)==typeof ($add64=xMax) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64)))==typeof ($div28=2.0) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28));
			}
			xMinPx = pp['xToPixel'](xMin);
			xMaxPx = pp['xToPixel'](xMax);
			xMidPx = pp['xToPixel'](xMid);
			symWidth = self['getAdjustedWidth'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx);
			if ((($bool68=(($eq69=$p['getattr']($m['Double'], 'NaN'))===($eq70=symWidth)&&$eq69===null?true:
				($eq69===null?false:($eq70===null?false:
					((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69.__cmp__=='function'?$eq69.__cmp__($eq70) === 0:
						((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70.__cmp__=='function'?$eq70.__cmp__($eq69) === 0:
							$eq69==$eq70)))))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68.__nonzero__=='function'?
							$bool68.__nonzero__() :
							(typeof $bool68.__len__=='function'?
								($bool68.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			xLeft = self['getUpperLeftX'](width, xPx, prevXPx, nextXPx, xMinPx, xMaxPx, xMidPx, pp['getXMousePlotArea']());
			if ((($bool69=(($eq71=$p['getattr']($m['Double'], 'NaN'))===($eq72=xLeft)&&$eq71===null?true:
				($eq71===null?false:($eq72===null?false:
					((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71.__cmp__=='function'?$eq71.__cmp__($eq72) === 0:
						((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72.__cmp__=='function'?$eq72.__cmp__($eq71) === 0:
							$eq71==$eq72)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			xCenter = (typeof ($add65=xLeft)==typeof ($add66=(typeof ($div29=symWidth)==typeof ($div30=2.0) && typeof $div29=='number' && $div30 !== 0?
				$div29/$div30:
				$p['op_div']($div29,$div30))) && (typeof $add65=='number'||typeof $add65=='string')?
				$add65+$add66:
				$p['op_add']($add65,$add66));
			if ((($bool70=onY2) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yMin = pp['getY2Max']();
				yMax = pp['getY2Min']();
			}
			else {
				yMin = pp['getYMax']();
				yMax = pp['getYMin']();
			}
			yMid = symbol['getBaseline']();
			if ((($bool71=(($eq73=$p['getattr']($m['Double'], 'NaN'))===($eq74=yMid)&&$eq73===null?true:
				($eq73===null?false:($eq74===null?false:
					((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73.__cmp__=='function'?$eq73.__cmp__($eq74) === 0:
						((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74.__cmp__=='function'?$eq74.__cmp__($eq73) === 0:
							$eq73==$eq74)))))) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71.__nonzero__=='function'?
							$bool71.__nonzero__() :
							(typeof $bool71.__len__=='function'?
								($bool71.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yMid = (typeof ($div31=(typeof ($add67=yMin)==typeof ($add68=yMax) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$p['op_add']($add67,$add68)))==typeof ($div32=2.0) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32));
			}
			yMinPx = pp['yToPixel'](yMin, onY2);
			yMaxPx = pp['yToPixel'](yMax, onY2);
			yMidPx = pp['yToPixel'](yMid, onY2);
			symHeight = self['getAdjustedHeight'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx);
			if ((($bool72=(($eq75=$p['getattr']($m['Double'], 'NaN'))===($eq76=symHeight)&&$eq75===null?true:
				($eq75===null?false:($eq76===null?false:
					((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75.__cmp__=='function'?$eq75.__cmp__($eq76) === 0:
						((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76.__cmp__=='function'?$eq76.__cmp__($eq75) === 0:
							$eq75==$eq76)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72.__nonzero__=='function'?
							$bool72.__nonzero__() :
							(typeof $bool72.__len__=='function'?
								($bool72.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			yTop = self['getUpperLeftY'](height, yPx, prevYPx, nextYPx, yMinPx, yMaxPx, yMidPx, pp['getYMousePlotArea']());
			if ((($bool73=(($eq77=$p['getattr']($m['Double'], 'NaN'))===($eq78=yTop)&&$eq77===null?true:
				($eq77===null?false:($eq78===null?false:
					((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77.__cmp__=='function'?$eq77.__cmp__($eq78) === 0:
						((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78.__cmp__=='function'?$eq78.__cmp__($eq77) === 0:
							$eq77==$eq78)))))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
					false :
					(typeof $bool73=='object'?
						(typeof $bool73.__nonzero__=='function'?
							$bool73.__nonzero__() :
							(typeof $bool73.__len__=='function'?
								($bool73.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			yCenter = (typeof ($add69=yTop)==typeof ($add70=(typeof ($div33=symHeight)==typeof ($div34=2.0) && typeof $div33=='number' && $div34 !== 0?
				$div33/$div34:
				$p['op_div']($div33,$div34))) && (typeof $add69=='number'||typeof $add69=='string')?
				$add69+$add70:
				$p['op_add']($add69,$add70));
			if ((($bool76=((($bool74=$and9=clipPlotArea) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
				false :
				(typeof $bool74=='object'?
					(typeof $bool74.__nonzero__=='function'?
						$bool74.__nonzero__() :
						(typeof $bool74.__len__=='function'?
							($bool74.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool75=self['intersects'](xMinPx, yMinPx, xMaxPx, yMaxPx, xLeft, yTop, (typeof ($add71=xLeft)==typeof ($add72=symWidth) && (typeof $add71=='number'||typeof $add71=='string')?
				$add71+$add72:
				$p['op_add']($add71,$add72)), (typeof ($add73=yTop)==typeof ($add74=symHeight) && (typeof $add73=='number'||typeof $add73=='string')?
				$add73+$add74:
				$p['op_add']($add73,$add74)))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
				false :
				(typeof $bool75=='object'?
					(typeof $bool75.__nonzero__=='function'?
						$bool75.__nonzero__() :
						(typeof $bool75.__len__=='function'?
							($bool75.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and9)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76.__nonzero__=='function'?
							$bool76.__nonzero__() :
							(typeof $bool76.__len__=='function'?
								($bool76.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			else if ((($bool77=clipDecoratedChart) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yAxisWidth = pp['getYAxisEnsembleWidth']();
				titleThickness = pp['chartTitleThickness']();
				if ((($bool79=!(($bool78=self['intersects']((typeof ($sub29=xMinPx)==typeof ($sub30=yAxisWidth) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)), (typeof ($sub31=yMinPx)==typeof ($sub32=titleThickness) && (typeof $sub31=='number'||typeof $sub31=='string')?
					$sub31-$sub32:
					$p['op_sub']($sub31,$sub32)), (typeof ($sub33=pp['getXChartSizeDecoratedQuickly']())==typeof ($sub34=yAxisWidth) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					$p['op_sub']($sub33,$sub34)), (typeof ($sub35=pp['getYChartSizeDecoratedQuickly']())==typeof ($sub36=titleThickness) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36)), xLeft, yTop, (typeof ($add75=xLeft)==typeof ($add76=symWidth) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76)), (typeof ($add77=yTop)==typeof ($add78=symHeight) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78)))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79.__nonzero__=='function'?
								$bool79.__nonzero__() :
								(typeof $bool79.__len__=='function'?
									($bool79.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
			}
			signWidth = 1;
			if ((($bool80=((($cmp51=symWidth)===($cmp52=0)?0:
				(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
					($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
					$p['cmp']($cmp51, $cmp52))) == -1)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80.__nonzero__=='function'?
							$bool80.__nonzero__() :
							(typeof $bool80.__len__=='function'?
								($bool80.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				xLeft = (typeof ($add79=xLeft)==typeof ($add80=symWidth) && (typeof $add79=='number'||typeof $add79=='string')?
					$add79+$add80:
					$p['op_add']($add79,$add80));
				symWidth = (typeof ($mul25=symWidth)==typeof ($mul26=(typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26));
				signWidth = (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
			}
			signHeight = 1;
			if ((($bool81=((($cmp53=symHeight)===($cmp54=0)?0:
				(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
					($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
					$p['cmp']($cmp53, $cmp54))) == -1)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81.__nonzero__=='function'?
							$bool81.__nonzero__() :
							(typeof $bool81.__len__=='function'?
								($bool81.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yTop = (typeof ($add81=yTop)==typeof ($add82=symHeight) && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82));
				symHeight = (typeof ($mul27=symHeight)==typeof ($mul28=(typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28));
				signHeight = (typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4));
			}
			if ((($bool82=!(($eq79=symWidth)===($eq80=0)&&$eq79===null?true:
				($eq79===null?false:($eq80===null?false:
					((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79.__cmp__=='function'?$eq79.__cmp__($eq80) === 0:
						((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80.__cmp__=='function'?$eq80.__cmp__($eq79) === 0:
							$eq79==$eq80)))))) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82.__nonzero__=='function'?
							$bool82.__nonzero__() :
							(typeof $bool82.__len__=='function'?
								($bool82.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				xLeft = (typeof ($sub37=xLeft)==typeof ($sub38=$p['getattr'](self, 'pixelPadLeft')) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38));
				symWidth = (typeof ($add85=symWidth)==typeof ($add86=(typeof ($add83=$p['getattr'](self, 'pixelPadLeft'))==typeof ($add84=$p['getattr'](self, 'pixelPadRight')) && (typeof $add83=='number'||typeof $add83=='string')?
					$add83+$add84:
					$p['op_add']($add83,$add84))) && (typeof $add85=='number'||typeof $add85=='string')?
					$add85+$add86:
					$p['op_add']($add85,$add86));
			}
			if ((($bool83=!(($eq81=symHeight)===($eq82=0)&&$eq81===null?true:
				($eq81===null?false:($eq82===null?false:
					((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81.__cmp__=='function'?$eq81.__cmp__($eq82) === 0:
						((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82.__cmp__=='function'?$eq82.__cmp__($eq81) === 0:
							$eq81==$eq82)))))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
					false :
					(typeof $bool83=='object'?
						(typeof $bool83.__nonzero__=='function'?
							$bool83.__nonzero__() :
							(typeof $bool83.__len__=='function'?
								($bool83.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yTop = (typeof ($sub39=yTop)==typeof ($sub40=$p['getattr'](self, 'pixelPadTop')) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40));
				symHeight = (typeof ($add89=symHeight)==typeof ($add90=(typeof ($add87=$p['getattr'](self, 'pixelPadTop'))==typeof ($add88=$p['getattr'](self, 'pixelPadBottom')) && (typeof $add87=='number'||typeof $add87=='string')?
					$add87+$add88:
					$p['op_add']($add87,$add88))) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90));
			}
			borderWidth = symbol['getBorderWidth']();
			if ((($bool86=((($bool85=$or5=((($bool84=$and11=((($cmp55=symWidth)===($cmp56=0)?0:
				(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
					($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
					$p['cmp']($cmp55, $cmp56))) == 1)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
				false :
				(typeof $bool84=='object'?
					(typeof $bool84.__nonzero__=='function'?
						$bool84.__nonzero__() :
						(typeof $bool84.__len__=='function'?
							($bool84.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp57=symHeight)===($cmp58=0)?0:
				(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
					($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
					$p['cmp']($cmp57, $cmp58))) == 1):$and11)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85.__nonzero__=='function'?
						$bool85.__nonzero__() :
						(typeof $bool85.__len__=='function'?
							($bool85.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((($cmp59=borderWidth)===($cmp60=0)?0:
				(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
					($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
					$p['cmp']($cmp59, $cmp60))) == -1))) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86.__nonzero__=='function'?
							$bool86.__nonzero__() :
							(typeof $bool86.__len__=='function'?
								($bool86.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				grp['renderBorderedImage'](symbol['getBackgroundColorCSS'](), symbol['getBorderColorCSS'](), symbol['getBorderStyle'](), borderWidth, symWidth, symHeight, xLeft, yTop, symbol['getImageURL']());
			}
			if ((($bool90=((($bool88=$and13=!(($eq83=annotation)===($eq84=null)&&$eq83===null?true:
				($eq83===null?false:($eq84===null?false:
					((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83.__cmp__=='function'?$eq83.__cmp__($eq84) === 0:
						((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84.__cmp__=='function'?$eq84.__cmp__($eq83) === 0:
							$eq83==$eq84)))))) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
				false :
				(typeof $bool88=='object'?
					(typeof $bool88.__nonzero__=='function'?
						$bool88.__nonzero__() :
						(typeof $bool88.__len__=='function'?
							($bool88.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool89=$and14=((($bool87=$or7=(annotation['getText']() !== null)) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
				false :
				(typeof $bool87=='object'?
					(typeof $bool87.__nonzero__=='function'?
						$bool87.__nonzero__() :
						(typeof $bool87.__len__=='function'?
							($bool87.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:(annotation['getWidget']() !== null))) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
				false :
				(typeof $bool89=='object'?
					(typeof $bool89.__nonzero__=='function'?
						$bool89.__nonzero__() :
						(typeof $bool89.__len__=='function'?
							($bool89.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?annotation['getVisible']():$and14):$and13)) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90.__nonzero__=='function'?
							$bool90.__nonzero__() :
							(typeof $bool90.__len__=='function'?
								($bool90.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				loc = annotation['getLocation']();
				if ((($bool91=(($eq85=null)===($eq86=loc)&&$eq85===null?true:
					($eq85===null?false:($eq86===null?false:
						((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85.__cmp__=='function'?$eq85.__cmp__($eq86) === 0:
							((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86.__cmp__=='function'?$eq86.__cmp__($eq85) === 0:
								$eq85==$eq86)))))) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
						false :
						(typeof $bool91=='object'?
							(typeof $bool91.__nonzero__=='function'?
								$bool91.__nonzero__() :
								(typeof $bool91.__len__=='function'?
									($bool91.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					loc = self['defaultAnnotationLocation']();
				}
				loc = $m['AnnotationLocation']['transform'](loc, signWidth, signHeight);
				arp['renderAnnotation'](annotation, loc, (typeof ($add91=xCenter)==typeof ($add92=(typeof ($mul29=signWidth)==typeof ($mul30=annotation['getXShift']()) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30))) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92)), (typeof ($sub41=yCenter)==typeof ($sub42=(typeof ($mul31=signHeight)==typeof ($mul32=annotation['getYShift']()) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))) && (typeof $sub41=='number'||typeof $sub41=='string')?
					$sub41-$sub42:
					$p['op_sub']($sub41,$sub42)), symWidth, symHeight, symbol);
			}
			return null;
		}
	, 1, [null,null,['self'],['pp'],['grp'],['arp'],['symbol'],['annotation'],['onY2'],['clipPlotArea'],['clipDecoratedChart'],['xPx'],['yPx'],['prevXPx'],['prevYPx'],['nextXPx'],['nextYPx'],['width'],['height']]);
		$cls_definition['realizeOneImageOfSymbol'] = $method;
		$method = $pyjs__bind_method2('distance', function(x1, y1, x2, y2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x1 = arguments[1];
				y1 = arguments[2];
				x2 = arguments[3];
				y2 = arguments[4];
			}
			var result,$sub43,$sub49,$add94,$sub50,$mul35,$add93,$sub48,$mul36,$mul33,$mul34,$sub44,$sub45,$sub46,$sub47;
			result = $m['math']['sqrt']((typeof ($add93=(typeof ($mul33=(typeof ($sub43=x2)==typeof ($sub44=x1) && (typeof $sub43=='number'||typeof $sub43=='string')?
				$sub43-$sub44:
				$p['op_sub']($sub43,$sub44)))==typeof ($mul34=(typeof ($sub45=x2)==typeof ($sub46=x1) && (typeof $sub45=='number'||typeof $sub45=='string')?
				$sub45-$sub46:
				$p['op_sub']($sub45,$sub46))) && typeof $mul33=='number'?
				$mul33*$mul34:
				$p['op_mul']($mul33,$mul34)))==typeof ($add94=(typeof ($mul35=(typeof ($sub47=y2)==typeof ($sub48=y1) && (typeof $sub47=='number'||typeof $sub47=='string')?
				$sub47-$sub48:
				$p['op_sub']($sub47,$sub48)))==typeof ($mul36=(typeof ($sub49=y2)==typeof ($sub50=y1) && (typeof $sub49=='number'||typeof $sub49=='string')?
				$sub49-$sub50:
				$p['op_sub']($sub49,$sub50))) && typeof $mul35=='number'?
				$mul35*$mul36:
				$p['op_mul']($mul35,$mul36))) && (typeof $add93=='number'||typeof $add93=='string')?
				$add93+$add94:
				$p['op_add']($add93,$add94)));
			return result;
		}
	, 1, [null,null,['self'],['x1'],['y1'],['x2'],['y2']]);
		$cls_definition['distance'] = $method;
		$method = $pyjs__bind_method2('realizeSymbol', function(pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, drawMainSymbol, x, y, prevX, prevY, nextX, nextY) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				grp = arguments[2];
				arp = arguments[3];
				symbol = arguments[4];
				annotation = arguments[5];
				onY2 = arguments[6];
				clipPlotArea = arguments[7];
				clipDecoratedChart = arguments[8];
				drawMainSymbol = arguments[9];
				x = arguments[10];
				y = arguments[11];
				prevX = arguments[12];
				prevY = arguments[13];
				nextX = arguments[14];
				nextY = arguments[15];
			}
			var $and38,$and39,$and34,$and35,$and36,$and37,$and30,$and31,$and32,$and33,$eq112,$eq113,$eq110,$eq111,$eq116,$eq117,$eq114,$eq115,$eq118,$eq119,dXIsLonger,$div36,$div37,$div35,$div38,$div39,thickness,backgroundColor,$iter1_nextval,spacing,$bool148,$bool141,$bool140,$bool143,$bool142,$bool145,$bool144,$bool147,$bool146,$cmp64,$cmp65,$cmp66,$cmp67,$cmp61,$cmp62,$cmp63,$cmp68,$cmp69,$sub68,$sub69,$sub66,$sub67,$sub64,$sub65,$sub62,$sub63,$sub60,$sub61,$eq91,$eq92,$eq93,$eq94,$eq95,$eq96,$eq97,$eq98,$eq99,$eq149,$eq148,$eq145,$eq144,$eq147,$eq146,$eq141,$eq140,$eq143,$eq142,$add98,$add99,$add95,$add96,nChunks,$bool105,$bool104,$bool107,$bool106,$bool101,$bool100,$bool103,$bool102,$bool109,$bool108,closeStrokeAndFill,$mul53,$mul52,$mul51,$mul50,$mul54,internalLineWidth,$or24,$or25,$or26,$or20,$or21,$or22,$or23,yi,$bool92,$bool93,$bool94,$bool95,$bool96,$bool97,$bool98,$bool99,$and29,$and28,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$eq101,$eq100,canvas,$eq102,$eq105,$eq104,$eq107,$eq106,$eq109,$eq108,borderWidth,prevXPx,$add97,xi,$bool138,$bool139,$bool134,$bool135,$bool136,$bool137,$bool130,$bool131,$bool132,$bool133,borderColor,nextXPx,$cmp73,$cmp72,$cmp71,$cmp70,$cmp77,$cmp76,$cmp75,$cmp74,$cmp79,$cmp78,$sub79,$sub78,$sub75,$sub74,$sub77,$sub76,$sub71,$sub70,$sub73,$sub72,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,externalLineWidth,prevYPx,$or9,$and16,$and17,$and18,$and19,$iter1_iter,nextYPx,yPx,$mul39,$mul38,$mul37,$sub84,$sub85,$sub86,$sub87,$sub80,$sub81,$sub82,$sub83,$sub88,$sub89,$eq138,$eq139,$eq134,$eq135,$eq136,$eq137,$eq130,$eq131,$eq132,$eq133,$and45,$and44,$and41,$and40,$and43,$and42,$iter1_array,$bool129,$bool128,$bool127,$bool126,$bool125,$bool124,$bool123,$bool122,$bool121,$bool120,$bool112,$iter1_idx,$cmp88,$cmp86,$cmp87,$cmp84,$cmp85,$cmp82,$cmp83,$cmp80,$cmp81,i,$eq162,$eq161,$eq160,deltaX,deltaY,d,$div44,$div43,$div42,$div41,$div40,$sub57,$sub56,$sub55,$sub54,$sub52,$eq90,$sub93,$sub92,$sub91,$sub90,$sub97,$sub96,$sub95,$sub94,$sub99,$sub98,$eq87,$eq89,$eq88,lineWidth,$eq129,$eq128,$eq123,$eq122,$eq121,$eq120,$eq127,$eq126,$eq125,$eq124,$eq158,$eq159,$eq156,$eq157,$eq154,$eq155,$eq152,$eq153,$eq150,$eq151,$sub100,$bool113,$bool110,$bool111,$bool116,$bool117,$bool114,$bool115,$bool118,$bool119,$mul48,$mul49,$mul44,$mul45,$mul46,$mul47,$mul40,$mul41,$mul42,$mul43,$add101,$add100,$add103,$add102,$sub53,$add104,$sub51,$eq103,$sub59,$sub58,xPx,$iter1_type;
			if ((($bool93=((($bool92=$or9=(($eq87=$p['getattr']($m['Double'], 'NaN'))===($eq88=x)&&$eq87===null?true:
				($eq87===null?false:($eq88===null?false:
					((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87.__cmp__=='function'?$eq87.__cmp__($eq88) === 0:
						((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88.__cmp__=='function'?$eq88.__cmp__($eq87) === 0:
							$eq87==$eq88)))))) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
				false :
				(typeof $bool92=='object'?
					(typeof $bool92.__nonzero__=='function'?
						$bool92.__nonzero__() :
						(typeof $bool92.__len__=='function'?
							($bool92.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:(($eq89=$p['getattr']($m['Double'], 'NaN'))===($eq90=y)&&$eq89===null?true:
				($eq89===null?false:($eq90===null?false:
					((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89.__cmp__=='function'?$eq89.__cmp__($eq90) === 0:
						((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90.__cmp__=='function'?$eq90.__cmp__($eq89) === 0:
							$eq89==$eq90))))))) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
					false :
					(typeof $bool93=='object'?
						(typeof $bool93.__nonzero__=='function'?
							$bool93.__nonzero__() :
							(typeof $bool93.__len__=='function'?
								($bool93.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			xPx = pp['xToPixel'](x);
			yPx = pp['yToPixel'](y, onY2);
			prevXPx = pp['xToPixel'](prevX);
			prevYPx = pp['yToPixel'](prevY, onY2);
			nextXPx = pp['xToPixel'](nextX);
			nextYPx = pp['yToPixel'](nextY, onY2);
			spacing = symbol['getFillSpacing']();
			thickness = symbol['getFillThickness']();
			canvas = grp['getCanvas']();
			if ((($bool96=((($bool94=$and16=(($eq91=0)===($eq92=spacing)&&$eq91===null?true:
				($eq91===null?false:($eq92===null?false:
					((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91.__cmp__=='function'?$eq91.__cmp__($eq92) === 0:
						((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92.__cmp__=='function'?$eq92.__cmp__($eq91) === 0:
							$eq91==$eq92)))))) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
				false :
				(typeof $bool94=='object'?
					(typeof $bool94.__nonzero__=='function'?
						$bool94.__nonzero__() :
						(typeof $bool94.__len__=='function'?
							($bool94.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool95=$and17=!(($eq93=null)===($eq94=canvas)&&$eq93===null?true:
				($eq93===null?false:($eq94===null?false:
					((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93.__cmp__=='function'?$eq93.__cmp__($eq94) === 0:
						((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94.__cmp__=='function'?$eq94.__cmp__($eq93) === 0:
							$eq93==$eq94)))))) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
				false :
				(typeof $bool95=='object'?
					(typeof $bool95.__nonzero__=='function'?
						$bool95.__nonzero__() :
						(typeof $bool95.__len__=='function'?
							($bool95.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp61=thickness)===($cmp62=0)?0:
				(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
					($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
					$p['cmp']($cmp61, $cmp62))) == 1):$and17):$and16)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96.__nonzero__=='function'?
							$bool96.__nonzero__() :
							(typeof $bool96.__len__=='function'?
								($bool96.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool97=(($eq95=null)===($eq96=$p['getattr'](self, 'horizontallyBanded'))&&$eq95===null?true:
					($eq95===null?false:($eq96===null?false:
						((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95.__cmp__=='function'?$eq95.__cmp__($eq96) === 0:
							((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96.__cmp__=='function'?$eq96.__cmp__($eq95) === 0:
								$eq95==$eq96)))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
						false :
						(typeof $bool97=='object'?
							(typeof $bool97.__nonzero__=='function'?
								$bool97.__nonzero__() :
								(typeof $bool97.__len__=='function'?
									($bool97.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					borderWidth = symbol['getBorderWidth']();
					if ((($bool98=((((($cmp63=borderWidth)===($cmp64=0)?0:
						(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
							($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
							$p['cmp']($cmp63, $cmp64))))|1) == 1)) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
							false :
							(typeof $bool98=='object'?
								(typeof $bool98.__nonzero__=='function'?
									$bool98.__nonzero__() :
									(typeof $bool98.__len__=='function'?
										($bool98.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						externalLineWidth = thickness;
					}
					else {
						externalLineWidth = (typeof ($add95=thickness)==typeof ($add96=(typeof ($mul37=2)==typeof ($mul38=$p['abs'](borderWidth)) && typeof $mul37=='number'?
							$mul37*$mul38:
							$p['op_mul']($mul37,$mul38))) && (typeof $add95=='number'||typeof $add95=='string')?
							$add95+$add96:
							$p['op_add']($add95,$add96));
					}
					if ((($bool99=((((($cmp65=borderWidth)===($cmp66=0)?0:
						(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
							($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
							$p['cmp']($cmp65, $cmp66))))|1) == 1)) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
							false :
							(typeof $bool99=='object'?
								(typeof $bool99.__nonzero__=='function'?
									$bool99.__nonzero__() :
									(typeof $bool99.__len__=='function'?
										($bool99.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						internalLineWidth = $p['max']((typeof ($sub51=thickness)==typeof ($sub52=(typeof ($mul39=2)==typeof ($mul40=borderWidth) && typeof $mul39=='number'?
							$mul39*$mul40:
							$p['op_mul']($mul39,$mul40))) && (typeof $sub51=='number'||typeof $sub51=='string')?
							$sub51-$sub52:
							$p['op_sub']($sub51,$sub52)), 0);
					}
					else {
						internalLineWidth = thickness;
					}
					borderColor = symbol['getBorderColor']();
					backgroundColor = symbol['getBackgroundColor']();
					if ((($bool104=((($bool100=$and19=((($cmp67=externalLineWidth)===($cmp68=0)?0:
						(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
							($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
							$p['cmp']($cmp67, $cmp68))) == 1)) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
						false :
						(typeof $bool100=='object'?
							(typeof $bool100.__nonzero__=='function'?
								$bool100.__nonzero__() :
								(typeof $bool100.__len__=='function'?
									($bool100.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool102=$or11=((($bool101=$and21=!(($eq97=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq98=borderColor)&&$eq97===null?true:
						($eq97===null?false:($eq98===null?false:
							((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97.__cmp__=='function'?$eq97.__cmp__($eq98) === 0:
								((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98.__cmp__=='function'?$eq98.__cmp__($eq97) === 0:
									$eq97==$eq98)))))) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
						false :
						(typeof $bool101=='object'?
							(typeof $bool101.__nonzero__=='function'?
								$bool101.__nonzero__() :
								(typeof $bool101.__len__=='function'?
									($bool101.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($eq99='transparent')===($eq100=borderColor)&&$eq99===null?true:
						($eq99===null?false:($eq100===null?false:
							((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99.__cmp__=='function'?$eq99.__cmp__($eq100) === 0:
								((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100.__cmp__=='function'?$eq100.__cmp__($eq99) === 0:
									$eq99==$eq100))))):$and21)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
						false :
						(typeof $bool102=='object'?
							(typeof $bool102.__nonzero__=='function'?
								$bool102.__nonzero__() :
								(typeof $bool102.__len__=='function'?
									($bool102.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or11:((($bool103=$and23=!(($eq101=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq102=backgroundColor)&&$eq101===null?true:
						($eq101===null?false:($eq102===null?false:
							((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101.__cmp__=='function'?$eq101.__cmp__($eq102) === 0:
								((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102.__cmp__=='function'?$eq102.__cmp__($eq101) === 0:
									$eq101==$eq102)))))) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
						false :
						(typeof $bool103=='object'?
							(typeof $bool103.__nonzero__=='function'?
								$bool103.__nonzero__() :
								(typeof $bool103.__len__=='function'?
									($bool103.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($eq103='transparent')===($eq104=backgroundColor)&&$eq103===null?true:
						($eq103===null?false:($eq104===null?false:
							((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103.__cmp__=='function'?$eq103.__cmp__($eq104) === 0:
								((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104.__cmp__=='function'?$eq104.__cmp__($eq103) === 0:
									$eq103==$eq104))))):$and23)):$and19)) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
							false :
							(typeof $bool104=='object'?
								(typeof $bool104.__nonzero__=='function'?
									$bool104.__nonzero__() :
									(typeof $bool104.__len__=='function'?
										($bool104.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool106=((($bool105=$or13=(($eq105=$p['getattr']($m['Double'], 'NaN'))===($eq106=prevX)&&$eq105===null?true:
							($eq105===null?false:($eq106===null?false:
								((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105.__cmp__=='function'?$eq105.__cmp__($eq106) === 0:
									((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106.__cmp__=='function'?$eq106.__cmp__($eq105) === 0:
										$eq105==$eq106)))))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
							false :
							(typeof $bool105=='object'?
								(typeof $bool105.__nonzero__=='function'?
									$bool105.__nonzero__() :
									(typeof $bool105.__len__=='function'?
										($bool105.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or13:(($eq107=$p['getattr']($m['Double'], 'NaN'))===($eq108=prevY)&&$eq107===null?true:
							($eq107===null?false:($eq108===null?false:
								((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107.__cmp__=='function'?$eq107.__cmp__($eq108) === 0:
									((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108.__cmp__=='function'?$eq108.__cmp__($eq107) === 0:
										$eq107==$eq108))))))) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
								false :
								(typeof $bool106=='object'?
									(typeof $bool106.__nonzero__=='function'?
										$bool106.__nonzero__() :
										(typeof $bool106.__len__=='function'?
											($bool106.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							canvas['beginPath']();
							canvas['moveTo']((typeof ($sub53=xPx)==typeof ($sub54=$p['getattr'](grp, 'x0')) && (typeof $sub53=='number'||typeof $sub53=='string')?
								$sub53-$sub54:
								$p['op_sub']($sub53,$sub54)), (typeof ($sub55=yPx)==typeof ($sub56=$p['getattr'](grp, 'y0')) && (typeof $sub55=='number'||typeof $sub55=='string')?
								$sub55-$sub56:
								$p['op_sub']($sub55,$sub56)));
						}
						if ((($bool108=((($bool107=$or15=(($eq109=$p['getattr']($m['Double'], 'NaN'))===($eq110=nextX)&&$eq109===null?true:
							($eq109===null?false:($eq110===null?false:
								((typeof $eq109=='object'||typeof $eq109=='function')&&typeof $eq109.__cmp__=='function'?$eq109.__cmp__($eq110) === 0:
									((typeof $eq110=='object'||typeof $eq110=='function')&&typeof $eq110.__cmp__=='function'?$eq110.__cmp__($eq109) === 0:
										$eq109==$eq110)))))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
							false :
							(typeof $bool107=='object'?
								(typeof $bool107.__nonzero__=='function'?
									$bool107.__nonzero__() :
									(typeof $bool107.__len__=='function'?
										($bool107.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or15:(($eq111=$p['getattr']($m['Double'], 'NaN'))===($eq112=nextY)&&$eq111===null?true:
							($eq111===null?false:($eq112===null?false:
								((typeof $eq111=='object'||typeof $eq111=='function')&&typeof $eq111.__cmp__=='function'?$eq111.__cmp__($eq112) === 0:
									((typeof $eq112=='object'||typeof $eq112=='function')&&typeof $eq112.__cmp__=='function'?$eq112.__cmp__($eq111) === 0:
										$eq111==$eq112))))))) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
								false :
								(typeof $bool108=='object'?
									(typeof $bool108.__nonzero__=='function'?
										$bool108.__nonzero__() :
										(typeof $bool108.__len__=='function'?
											($bool108.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool111=((($bool109=$and25=!(($eq113=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq114=borderColor)&&$eq113===null?true:
								($eq113===null?false:($eq114===null?false:
									((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113.__cmp__=='function'?$eq113.__cmp__($eq114) === 0:
										((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114.__cmp__=='function'?$eq114.__cmp__($eq113) === 0:
											$eq113==$eq114)))))) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
								false :
								(typeof $bool109=='object'?
									(typeof $bool109.__nonzero__=='function'?
										$bool109.__nonzero__() :
										(typeof $bool109.__len__=='function'?
											($bool109.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool110=$and26=!(($eq115='transparent')===($eq116=borderColor)&&$eq115===null?true:
								($eq115===null?false:($eq116===null?false:
									((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115.__cmp__=='function'?$eq115.__cmp__($eq116) === 0:
										((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116.__cmp__=='function'?$eq116.__cmp__($eq115) === 0:
											$eq115==$eq116)))))) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
								false :
								(typeof $bool110=='object'?
									(typeof $bool110.__nonzero__=='function'?
										$bool110.__nonzero__() :
										(typeof $bool110.__len__=='function'?
											($bool110.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($cmp69=externalLineWidth)===($cmp70=0)?0:
								(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
									($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
									$p['cmp']($cmp69, $cmp70))) == 1):$and26):$and25)) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
									false :
									(typeof $bool111=='object'?
										(typeof $bool111.__nonzero__=='function'?
											$bool111.__nonzero__() :
											(typeof $bool111.__len__=='function'?
												($bool111.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								canvas['setStrokeStyle'](borderColor);
								canvas['setLineWidth'](externalLineWidth);
								canvas['stroke']();
							}
							if ((($bool114=((($bool112=$and28=!(($eq117=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq118=backgroundColor)&&$eq117===null?true:
								($eq117===null?false:($eq118===null?false:
									((typeof $eq117=='object'||typeof $eq117=='function')&&typeof $eq117.__cmp__=='function'?$eq117.__cmp__($eq118) === 0:
										((typeof $eq118=='object'||typeof $eq118=='function')&&typeof $eq118.__cmp__=='function'?$eq118.__cmp__($eq117) === 0:
											$eq117==$eq118)))))) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
								false :
								(typeof $bool112=='object'?
									(typeof $bool112.__nonzero__=='function'?
										$bool112.__nonzero__() :
										(typeof $bool112.__len__=='function'?
											($bool112.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool113=$and29=!(($eq119='transparent')===($eq120=backgroundColor)&&$eq119===null?true:
								($eq119===null?false:($eq120===null?false:
									((typeof $eq119=='object'||typeof $eq119=='function')&&typeof $eq119.__cmp__=='function'?$eq119.__cmp__($eq120) === 0:
										((typeof $eq120=='object'||typeof $eq120=='function')&&typeof $eq120.__cmp__=='function'?$eq120.__cmp__($eq119) === 0:
											$eq119==$eq120)))))) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
								false :
								(typeof $bool113=='object'?
									(typeof $bool113.__nonzero__=='function'?
										$bool113.__nonzero__() :
										(typeof $bool113.__len__=='function'?
											($bool113.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($cmp71=internalLineWidth)===($cmp72=0)?0:
								(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
									($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
									$p['cmp']($cmp71, $cmp72))) == 1):$and29):$and28)) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
									false :
									(typeof $bool114=='object'?
										(typeof $bool114.__nonzero__=='function'?
											$bool114.__nonzero__() :
											(typeof $bool114.__len__=='function'?
												($bool114.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								canvas['setLineWidth'](internalLineWidth);
								canvas['setStrokeStyle'](backgroundColor);
								canvas['stroke']();
							}
						}
						else {
							canvas['lineTo']((typeof ($sub57=nextXPx)==typeof ($sub58=$p['getattr'](grp, 'x0')) && (typeof $sub57=='number'||typeof $sub57=='string')?
								$sub57-$sub58:
								$p['op_sub']($sub57,$sub58)), (typeof ($sub59=nextYPx)==typeof ($sub60=$p['getattr'](grp, 'y0')) && (typeof $sub59=='number'||typeof $sub59=='string')?
								$sub59-$sub60:
								$p['op_sub']($sub59,$sub60)));
						}
					}
				}
				else {
					closeStrokeAndFill = false;
					if ((($bool115=(($eq121=false)===($eq122=$p['getattr'](self, 'horizontallyBanded'))&&$eq121===null?true:
						($eq121===null?false:($eq122===null?false:
							((typeof $eq121=='object'||typeof $eq121=='function')&&typeof $eq121.__cmp__=='function'?$eq121.__cmp__($eq122) === 0:
								((typeof $eq122=='object'||typeof $eq122=='function')&&typeof $eq122.__cmp__=='function'?$eq122.__cmp__($eq121) === 0:
									$eq121==$eq122)))))) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
							false :
							(typeof $bool115=='object'?
								(typeof $bool115.__nonzero__=='function'?
									$bool115.__nonzero__() :
									(typeof $bool115.__len__=='function'?
										($bool115.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool117=((($bool116=$or17=(($eq123=$p['getattr']($m['Double'], 'NaN'))===($eq124=prevX)&&$eq123===null?true:
							($eq123===null?false:($eq124===null?false:
								((typeof $eq123=='object'||typeof $eq123=='function')&&typeof $eq123.__cmp__=='function'?$eq123.__cmp__($eq124) === 0:
									((typeof $eq124=='object'||typeof $eq124=='function')&&typeof $eq124.__cmp__=='function'?$eq124.__cmp__($eq123) === 0:
										$eq123==$eq124)))))) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
							false :
							(typeof $bool116=='object'?
								(typeof $bool116.__nonzero__=='function'?
									$bool116.__nonzero__() :
									(typeof $bool116.__len__=='function'?
										($bool116.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or17:(($eq125=$p['getattr']($m['Double'], 'NaN'))===($eq126=prevY)&&$eq125===null?true:
							($eq125===null?false:($eq126===null?false:
								((typeof $eq125=='object'||typeof $eq125=='function')&&typeof $eq125.__cmp__=='function'?$eq125.__cmp__($eq126) === 0:
									((typeof $eq126=='object'||typeof $eq126=='function')&&typeof $eq126.__cmp__=='function'?$eq126.__cmp__($eq125) === 0:
										$eq125==$eq126))))))) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
								false :
								(typeof $bool117=='object'?
									(typeof $bool117.__nonzero__=='function'?
										$bool117.__nonzero__() :
										(typeof $bool117.__len__=='function'?
											($bool117.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self.oppositeEdge = self['getEdgeOppositeVertically'](pp, symbol, y, onY2);
							canvas['beginPath']();
							canvas['moveTo']((typeof ($sub61=xPx)==typeof ($sub62=$p['getattr'](grp, 'x0')) && (typeof $sub61=='number'||typeof $sub61=='string')?
								$sub61-$sub62:
								$p['op_sub']($sub61,$sub62)), (typeof ($sub63=$p['getattr'](self, 'oppositeEdge'))==typeof ($sub64=$p['getattr'](grp, 'y0')) && (typeof $sub63=='number'||typeof $sub63=='string')?
								$sub63-$sub64:
								$p['op_sub']($sub63,$sub64)));
							canvas['lineTo']((typeof ($sub65=xPx)==typeof ($sub66=$p['getattr'](grp, 'x0')) && (typeof $sub65=='number'||typeof $sub65=='string')?
								$sub65-$sub66:
								$p['op_sub']($sub65,$sub66)), (typeof ($sub67=yPx)==typeof ($sub68=$p['getattr'](grp, 'y0')) && (typeof $sub67=='number'||typeof $sub67=='string')?
								$sub67-$sub68:
								$p['op_sub']($sub67,$sub68)));
						}
						if ((($bool119=((($bool118=$or19=(($eq127=$p['getattr']($m['Double'], 'NaN'))===($eq128=nextX)&&$eq127===null?true:
							($eq127===null?false:($eq128===null?false:
								((typeof $eq127=='object'||typeof $eq127=='function')&&typeof $eq127.__cmp__=='function'?$eq127.__cmp__($eq128) === 0:
									((typeof $eq128=='object'||typeof $eq128=='function')&&typeof $eq128.__cmp__=='function'?$eq128.__cmp__($eq127) === 0:
										$eq127==$eq128)))))) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
							false :
							(typeof $bool118=='object'?
								(typeof $bool118.__nonzero__=='function'?
									$bool118.__nonzero__() :
									(typeof $bool118.__len__=='function'?
										($bool118.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or19:(($eq129=$p['getattr']($m['Double'], 'NaN'))===($eq130=nextY)&&$eq129===null?true:
							($eq129===null?false:($eq130===null?false:
								((typeof $eq129=='object'||typeof $eq129=='function')&&typeof $eq129.__cmp__=='function'?$eq129.__cmp__($eq130) === 0:
									((typeof $eq130=='object'||typeof $eq130=='function')&&typeof $eq130.__cmp__=='function'?$eq130.__cmp__($eq129) === 0:
										$eq129==$eq130))))))) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
								false :
								(typeof $bool119=='object'?
									(typeof $bool119.__nonzero__=='function'?
										$bool119.__nonzero__() :
										(typeof $bool119.__len__=='function'?
											($bool119.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							canvas['lineTo']((typeof ($sub69=xPx)==typeof ($sub70=$p['getattr'](grp, 'x0')) && (typeof $sub69=='number'||typeof $sub69=='string')?
								$sub69-$sub70:
								$p['op_sub']($sub69,$sub70)), (typeof ($sub71=$p['getattr'](self, 'oppositeEdge'))==typeof ($sub72=$p['getattr'](grp, 'y0')) && (typeof $sub71=='number'||typeof $sub71=='string')?
								$sub71-$sub72:
								$p['op_sub']($sub71,$sub72)));
							closeStrokeAndFill = true;
						}
						else {
							canvas['lineTo']((typeof ($sub73=nextXPx)==typeof ($sub74=$p['getattr'](grp, 'x0')) && (typeof $sub73=='number'||typeof $sub73=='string')?
								$sub73-$sub74:
								$p['op_sub']($sub73,$sub74)), (typeof ($sub75=nextYPx)==typeof ($sub76=$p['getattr'](grp, 'y0')) && (typeof $sub75=='number'||typeof $sub75=='string')?
								$sub75-$sub76:
								$p['op_sub']($sub75,$sub76)));
						}
					}
					else {
						if ((($bool121=((($bool120=$or21=(($eq131=$p['getattr']($m['Double'], 'NaN'))===($eq132=prevX)&&$eq131===null?true:
							($eq131===null?false:($eq132===null?false:
								((typeof $eq131=='object'||typeof $eq131=='function')&&typeof $eq131.__cmp__=='function'?$eq131.__cmp__($eq132) === 0:
									((typeof $eq132=='object'||typeof $eq132=='function')&&typeof $eq132.__cmp__=='function'?$eq132.__cmp__($eq131) === 0:
										$eq131==$eq132)))))) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
							false :
							(typeof $bool120=='object'?
								(typeof $bool120.__nonzero__=='function'?
									$bool120.__nonzero__() :
									(typeof $bool120.__len__=='function'?
										($bool120.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or21:(($eq133=$p['getattr']($m['Double'], 'NaN'))===($eq134=prevY)&&$eq133===null?true:
							($eq133===null?false:($eq134===null?false:
								((typeof $eq133=='object'||typeof $eq133=='function')&&typeof $eq133.__cmp__=='function'?$eq133.__cmp__($eq134) === 0:
									((typeof $eq134=='object'||typeof $eq134=='function')&&typeof $eq134.__cmp__=='function'?$eq134.__cmp__($eq133) === 0:
										$eq133==$eq134))))))) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
								false :
								(typeof $bool121=='object'?
									(typeof $bool121.__nonzero__=='function'?
										$bool121.__nonzero__() :
										(typeof $bool121.__len__=='function'?
											($bool121.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self.oppositeEdge = self['getEdgeOppositeHorizontally'](pp, symbol, x, onY2);
							canvas['beginPath']();
							canvas['moveTo']((typeof ($sub77=$p['getattr'](self, 'oppositeEdge'))==typeof ($sub78=$p['getattr'](grp, 'x0')) && (typeof $sub77=='number'||typeof $sub77=='string')?
								$sub77-$sub78:
								$p['op_sub']($sub77,$sub78)), (typeof ($sub79=yPx)==typeof ($sub80=$p['getattr'](grp, 'y0')) && (typeof $sub79=='number'||typeof $sub79=='string')?
								$sub79-$sub80:
								$p['op_sub']($sub79,$sub80)));
							canvas['lineTo']((typeof ($sub81=xPx)==typeof ($sub82=$p['getattr'](grp, 'x0')) && (typeof $sub81=='number'||typeof $sub81=='string')?
								$sub81-$sub82:
								$p['op_sub']($sub81,$sub82)), (typeof ($sub83=yPx)==typeof ($sub84=$p['getattr'](grp, 'y0')) && (typeof $sub83=='number'||typeof $sub83=='string')?
								$sub83-$sub84:
								$p['op_sub']($sub83,$sub84)));
						}
						if ((($bool123=((($bool122=$or23=(($eq135=$p['getattr']($m['Double'], 'NaN'))===($eq136=nextX)&&$eq135===null?true:
							($eq135===null?false:($eq136===null?false:
								((typeof $eq135=='object'||typeof $eq135=='function')&&typeof $eq135.__cmp__=='function'?$eq135.__cmp__($eq136) === 0:
									((typeof $eq136=='object'||typeof $eq136=='function')&&typeof $eq136.__cmp__=='function'?$eq136.__cmp__($eq135) === 0:
										$eq135==$eq136)))))) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
							false :
							(typeof $bool122=='object'?
								(typeof $bool122.__nonzero__=='function'?
									$bool122.__nonzero__() :
									(typeof $bool122.__len__=='function'?
										($bool122.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or23:(($eq137=$p['getattr']($m['Double'], 'NaN'))===($eq138=nextY)&&$eq137===null?true:
							($eq137===null?false:($eq138===null?false:
								((typeof $eq137=='object'||typeof $eq137=='function')&&typeof $eq137.__cmp__=='function'?$eq137.__cmp__($eq138) === 0:
									((typeof $eq138=='object'||typeof $eq138=='function')&&typeof $eq138.__cmp__=='function'?$eq138.__cmp__($eq137) === 0:
										$eq137==$eq138))))))) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
								false :
								(typeof $bool123=='object'?
									(typeof $bool123.__nonzero__=='function'?
										$bool123.__nonzero__() :
										(typeof $bool123.__len__=='function'?
											($bool123.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							canvas['lineTo']((typeof ($sub85=$p['getattr'](self, 'oppositeEdge'))==typeof ($sub86=$p['getattr'](grp, 'x0')) && (typeof $sub85=='number'||typeof $sub85=='string')?
								$sub85-$sub86:
								$p['op_sub']($sub85,$sub86)), (typeof ($sub87=yPx)==typeof ($sub88=$p['getattr'](grp, 'y0')) && (typeof $sub87=='number'||typeof $sub87=='string')?
								$sub87-$sub88:
								$p['op_sub']($sub87,$sub88)));
							closeStrokeAndFill = true;
						}
						else {
							canvas['lineTo']((typeof ($sub89=nextXPx)==typeof ($sub90=$p['getattr'](grp, 'x0')) && (typeof $sub89=='number'||typeof $sub89=='string')?
								$sub89-$sub90:
								$p['op_sub']($sub89,$sub90)), (typeof ($sub91=nextYPx)==typeof ($sub92=$p['getattr'](grp, 'y0')) && (typeof $sub91=='number'||typeof $sub91=='string')?
								$sub91-$sub92:
								$p['op_sub']($sub91,$sub92)));
						}
					}
					if ((($bool124=closeStrokeAndFill) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
							false :
							(typeof $bool124=='object'?
								(typeof $bool124.__nonzero__=='function'?
									$bool124.__nonzero__() :
									(typeof $bool124.__len__=='function'?
										($bool124.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						canvas['closePath']();
						borderWidth = symbol['getBorderWidth']();
						if ((($bool125=((((($cmp73=borderWidth)===($cmp74=0)?0:
							(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
								($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
								$p['cmp']($cmp73, $cmp74))))|1) == 1)) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
								false :
								(typeof $bool125=='object'?
									(typeof $bool125.__nonzero__=='function'?
										$bool125.__nonzero__() :
										(typeof $bool125.__len__=='function'?
											($bool125.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							lineWidth = borderWidth;
						}
						else {
							lineWidth = (typeof ($mul41=2)==typeof ($mul42=$p['abs'](borderWidth)) && typeof $mul41=='number'?
								$mul41*$mul42:
								$p['op_mul']($mul41,$mul42));
						}
						borderColor = symbol['getBorderColor']();
						backgroundColor = symbol['getBackgroundColor']();
						if ((($bool129=((($bool126=$and31=((((($cmp75=borderWidth)===($cmp76=0)?0:
							(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
								($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
								$p['cmp']($cmp75, $cmp76))))|1) == 1)) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
							false :
							(typeof $bool126=='object'?
								(typeof $bool126.__nonzero__=='function'?
									$bool126.__nonzero__() :
									(typeof $bool126.__len__=='function'?
										($bool126.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool127=$and32=((($cmp77=thickness)===($cmp78=0)?0:
							(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
								($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
								$p['cmp']($cmp77, $cmp78))) == 1)) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
							false :
							(typeof $bool127=='object'?
								(typeof $bool127.__nonzero__=='function'?
									$bool127.__nonzero__() :
									(typeof $bool127.__len__=='function'?
										($bool127.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool128=$and33=!(($eq139=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq140=backgroundColor)&&$eq139===null?true:
							($eq139===null?false:($eq140===null?false:
								((typeof $eq139=='object'||typeof $eq139=='function')&&typeof $eq139.__cmp__=='function'?$eq139.__cmp__($eq140) === 0:
									((typeof $eq140=='object'||typeof $eq140=='function')&&typeof $eq140.__cmp__=='function'?$eq140.__cmp__($eq139) === 0:
										$eq139==$eq140)))))) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
							false :
							(typeof $bool128=='object'?
								(typeof $bool128.__nonzero__=='function'?
									$bool128.__nonzero__() :
									(typeof $bool128.__len__=='function'?
										($bool128.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?!(($eq141='transparent')===($eq142=backgroundColor)&&$eq141===null?true:
							($eq141===null?false:($eq142===null?false:
								((typeof $eq141=='object'||typeof $eq141=='function')&&typeof $eq141.__cmp__=='function'?$eq141.__cmp__($eq142) === 0:
									((typeof $eq142=='object'||typeof $eq142=='function')&&typeof $eq142.__cmp__=='function'?$eq142.__cmp__($eq141) === 0:
										$eq141==$eq142))))):$and33):$and32):$and31)) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
								false :
								(typeof $bool129=='object'?
									(typeof $bool129.__nonzero__=='function'?
										$bool129.__nonzero__() :
										(typeof $bool129.__len__=='function'?
											($bool129.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							canvas['setFillStyle'](backgroundColor);
							canvas['fill']();
						}
						if ((($bool132=((($bool130=$and35=!(($eq143=borderWidth)===($eq144=0)&&$eq143===null?true:
							($eq143===null?false:($eq144===null?false:
								((typeof $eq143=='object'||typeof $eq143=='function')&&typeof $eq143.__cmp__=='function'?$eq143.__cmp__($eq144) === 0:
									((typeof $eq144=='object'||typeof $eq144=='function')&&typeof $eq144.__cmp__=='function'?$eq144.__cmp__($eq143) === 0:
										$eq143==$eq144)))))) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
							false :
							(typeof $bool130=='object'?
								(typeof $bool130.__nonzero__=='function'?
									$bool130.__nonzero__() :
									(typeof $bool130.__len__=='function'?
										($bool130.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool131=$and36=!(($eq145=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq146=borderColor)&&$eq145===null?true:
							($eq145===null?false:($eq146===null?false:
								((typeof $eq145=='object'||typeof $eq145=='function')&&typeof $eq145.__cmp__=='function'?$eq145.__cmp__($eq146) === 0:
									((typeof $eq146=='object'||typeof $eq146=='function')&&typeof $eq146.__cmp__=='function'?$eq146.__cmp__($eq145) === 0:
										$eq145==$eq146)))))) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
							false :
							(typeof $bool131=='object'?
								(typeof $bool131.__nonzero__=='function'?
									$bool131.__nonzero__() :
									(typeof $bool131.__len__=='function'?
										($bool131.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?!(($eq147='transparent')===($eq148=borderColor)&&$eq147===null?true:
							($eq147===null?false:($eq148===null?false:
								((typeof $eq147=='object'||typeof $eq147=='function')&&typeof $eq147.__cmp__=='function'?$eq147.__cmp__($eq148) === 0:
									((typeof $eq148=='object'||typeof $eq148=='function')&&typeof $eq148.__cmp__=='function'?$eq148.__cmp__($eq147) === 0:
										$eq147==$eq148))))):$and36):$and35)) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
								false :
								(typeof $bool132=='object'?
									(typeof $bool132.__nonzero__=='function'?
										$bool132.__nonzero__() :
										(typeof $bool132.__len__=='function'?
											($bool132.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							canvas['setStrokeStyle'](borderColor);
							canvas['setLineWidth'](lineWidth);
							canvas['stroke']();
						}
						if ((($bool136=((($bool133=$and38=((($cmp79=borderWidth)===($cmp80=0)?0:
							(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
								($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
								$p['cmp']($cmp79, $cmp80))) == -1)) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
							false :
							(typeof $bool133=='object'?
								(typeof $bool133.__nonzero__=='function'?
									$bool133.__nonzero__() :
									(typeof $bool133.__len__=='function'?
										($bool133.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool134=$and39=((($cmp81=thickness)===($cmp82=0)?0:
							(typeof $cmp81==typeof $cmp82 && ((typeof $cmp81 == 'number')||(typeof $cmp81 == 'string')||(typeof $cmp81 == 'boolean'))?
								($cmp81 == $cmp82 ? 0 : ($cmp81 < $cmp82 ? -1 : 1)):
								$p['cmp']($cmp81, $cmp82))) == 1)) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
							false :
							(typeof $bool134=='object'?
								(typeof $bool134.__nonzero__=='function'?
									$bool134.__nonzero__() :
									(typeof $bool134.__len__=='function'?
										($bool134.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool135=$and40=!(($eq149=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq150=backgroundColor)&&$eq149===null?true:
							($eq149===null?false:($eq150===null?false:
								((typeof $eq149=='object'||typeof $eq149=='function')&&typeof $eq149.__cmp__=='function'?$eq149.__cmp__($eq150) === 0:
									((typeof $eq150=='object'||typeof $eq150=='function')&&typeof $eq150.__cmp__=='function'?$eq150.__cmp__($eq149) === 0:
										$eq149==$eq150)))))) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
							false :
							(typeof $bool135=='object'?
								(typeof $bool135.__nonzero__=='function'?
									$bool135.__nonzero__() :
									(typeof $bool135.__len__=='function'?
										($bool135.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?!(($eq151='transparent')===($eq152=backgroundColor)&&$eq151===null?true:
							($eq151===null?false:($eq152===null?false:
								((typeof $eq151=='object'||typeof $eq151=='function')&&typeof $eq151.__cmp__=='function'?$eq151.__cmp__($eq152) === 0:
									((typeof $eq152=='object'||typeof $eq152=='function')&&typeof $eq152.__cmp__=='function'?$eq152.__cmp__($eq151) === 0:
										$eq151==$eq152))))):$and40):$and39):$and38)) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
								false :
								(typeof $bool136=='object'?
									(typeof $bool136.__nonzero__=='function'?
										$bool136.__nonzero__() :
										(typeof $bool136.__len__=='function'?
											($bool136.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							canvas['setFillStyle'](backgroundColor);
							canvas['fill']();
						}
					}
				}
			}
			else if ((($bool143=((($bool139=$and42=!(($bool137=(($eq153=$p['getattr']($m['Double'], 'NaN'))===($eq154=nextX)&&$eq153===null?true:
				($eq153===null?false:($eq154===null?false:
					((typeof $eq153=='object'||typeof $eq153=='function')&&typeof $eq153.__cmp__=='function'?$eq153.__cmp__($eq154) === 0:
						((typeof $eq154=='object'||typeof $eq154=='function')&&typeof $eq154.__cmp__=='function'?$eq154.__cmp__($eq153) === 0:
							$eq153==$eq154)))))) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
				false :
				(typeof $bool137=='object'?
					(typeof $bool137.__nonzero__=='function'?
						$bool137.__nonzero__() :
						(typeof $bool137.__len__=='function'?
							($bool137.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
				false :
				(typeof $bool139=='object'?
					(typeof $bool139.__nonzero__=='function'?
						$bool139.__nonzero__() :
						(typeof $bool139.__len__=='function'?
							($bool139.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool140=$and43=!(($bool138=(($eq155=$p['getattr']($m['Double'], 'NaN'))===($eq156=nextY)&&$eq155===null?true:
				($eq155===null?false:($eq156===null?false:
					((typeof $eq155=='object'||typeof $eq155=='function')&&typeof $eq155.__cmp__=='function'?$eq155.__cmp__($eq156) === 0:
						((typeof $eq156=='object'||typeof $eq156=='function')&&typeof $eq156.__cmp__=='function'?$eq156.__cmp__($eq155) === 0:
							$eq155==$eq156)))))) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
				false :
				(typeof $bool138=='object'?
					(typeof $bool138.__nonzero__=='function'?
						$bool138.__nonzero__() :
						(typeof $bool138.__len__=='function'?
							($bool138.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
				false :
				(typeof $bool140=='object'?
					(typeof $bool140.__nonzero__=='function'?
						$bool140.__nonzero__() :
						(typeof $bool140.__len__=='function'?
							($bool140.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool141=$and44=((($cmp83=thickness)===($cmp84=0)?0:
				(typeof $cmp83==typeof $cmp84 && ((typeof $cmp83 == 'number')||(typeof $cmp83 == 'string')||(typeof $cmp83 == 'boolean'))?
					($cmp83 == $cmp84 ? 0 : ($cmp83 < $cmp84 ? -1 : 1)):
					$p['cmp']($cmp83, $cmp84))) == 1)) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
				false :
				(typeof $bool141=='object'?
					(typeof $bool141.__nonzero__=='function'?
						$bool141.__nonzero__() :
						(typeof $bool141.__len__=='function'?
							($bool141.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool142=$or25=!(($eq157=x)===($eq158=nextX)&&$eq157===null?true:
				($eq157===null?false:($eq158===null?false:
					((typeof $eq157=='object'||typeof $eq157=='function')&&typeof $eq157.__cmp__=='function'?$eq157.__cmp__($eq158) === 0:
						((typeof $eq158=='object'||typeof $eq158=='function')&&typeof $eq158.__cmp__=='function'?$eq158.__cmp__($eq157) === 0:
							$eq157==$eq158)))))) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
				false :
				(typeof $bool142=='object'?
					(typeof $bool142.__nonzero__=='function'?
						$bool142.__nonzero__() :
						(typeof $bool142.__len__=='function'?
							($bool142.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or25:!(($eq159=y)===($eq160=nextY)&&$eq159===null?true:
				($eq159===null?false:($eq160===null?false:
					((typeof $eq159=='object'||typeof $eq159=='function')&&typeof $eq159.__cmp__=='function'?$eq159.__cmp__($eq160) === 0:
						((typeof $eq160=='object'||typeof $eq160=='function')&&typeof $eq160.__cmp__=='function'?$eq160.__cmp__($eq159) === 0:
							$eq159==$eq160)))))):$and44):$and43):$and42)) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
					false :
					(typeof $bool143=='object'?
						(typeof $bool143.__nonzero__=='function'?
							$bool143.__nonzero__() :
							(typeof $bool143.__len__=='function'?
								($bool143.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool144=(($eq161=0)===($eq162=spacing)&&$eq161===null?true:
					($eq161===null?false:($eq162===null?false:
						((typeof $eq161=='object'||typeof $eq161=='function')&&typeof $eq161.__cmp__=='function'?$eq161.__cmp__($eq162) === 0:
							((typeof $eq162=='object'||typeof $eq162=='function')&&typeof $eq162.__cmp__=='function'?$eq162.__cmp__($eq161) === 0:
								$eq161==$eq162)))))) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
						false :
						(typeof $bool144=='object'?
							(typeof $bool144.__nonzero__=='function'?
								$bool144.__nonzero__() :
								(typeof $bool144.__len__=='function'?
									($bool144.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spacing = 1;
				}
				d = self['distance'](xPx, yPx, nextXPx, nextYPx);
				nChunks = $p['float_int']($p['round']((typeof ($div35=d)==typeof ($div36=spacing) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36))));
				if ((($bool145=((($cmp85=nChunks)===($cmp86=1)?0:
					(typeof $cmp85==typeof $cmp86 && ((typeof $cmp85 == 'number')||(typeof $cmp85 == 'string')||(typeof $cmp85 == 'boolean'))?
						($cmp85 == $cmp86 ? 0 : ($cmp85 < $cmp86 ? -1 : 1)):
						$p['cmp']($cmp85, $cmp86))) == 1)) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
						false :
						(typeof $bool145=='object'?
							(typeof $bool145.__nonzero__=='function'?
								$bool145.__nonzero__() :
								(typeof $bool145.__len__=='function'?
									($bool145.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					deltaX = (typeof ($sub93=nextXPx)==typeof ($sub94=xPx) && (typeof $sub93=='number'||typeof $sub93=='string')?
						$sub93-$sub94:
						$p['op_sub']($sub93,$sub94));
					deltaY = (typeof ($sub95=nextYPx)==typeof ($sub96=yPx) && (typeof $sub95=='number'||typeof $sub95=='string')?
						$sub95-$sub96:
						$p['op_sub']($sub95,$sub96));
					dXIsLonger = ((($cmp87=(typeof ($mul43=deltaX)==typeof ($mul44=deltaX) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44)))===($cmp88=(typeof ($mul45=deltaY)==typeof ($mul46=deltaY) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46)))?0:
						(typeof $cmp87==typeof $cmp88 && ((typeof $cmp87 == 'number')||(typeof $cmp87 == 'string')||(typeof $cmp87 == 'boolean'))?
							($cmp87 == $cmp88 ? 0 : ($cmp87 < $cmp88 ? -1 : 1)):
							$p['cmp']($cmp87, $cmp88))) == 1);
					if ((($bool146=dXIsLonger) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
							false :
							(typeof $bool146=='object'?
								(typeof $bool146.__nonzero__=='function'?
									$bool146.__nonzero__() :
									(typeof $bool146.__len__=='function'?
										($bool146.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						deltaY = (typeof ($div37=deltaY)==typeof ($div38=deltaX) && typeof $div37=='number' && $div38 !== 0?
							$div37/$div38:
							$p['op_div']($div37,$div38));
						deltaX = (typeof ($div39=deltaX)==typeof ($div40=nChunks) && typeof $div39=='number' && $div40 !== 0?
							$div39/$div40:
							$p['op_div']($div39,$div40));
					}
					else {
						deltaX = (typeof ($div41=deltaX)==typeof ($div42=deltaY) && typeof $div41=='number' && $div42 !== 0?
							$div41/$div42:
							$p['op_div']($div41,$div42));
						deltaY = (typeof ($div43=deltaY)==typeof ($div44=nChunks) && typeof $div43=='number' && $div44 !== 0?
							$div43/$div44:
							$p['op_div']($div43,$div44));
					}
					$iter1_iter = $p['range'](1, nChunks);
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						i = $iter1_nextval;
						if ((($bool147=dXIsLonger) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
								false :
								(typeof $bool147=='object'?
									(typeof $bool147.__nonzero__=='function'?
										$bool147.__nonzero__() :
										(typeof $bool147.__len__=='function'?
											($bool147.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							xi = $p['round']((typeof ($add97=xPx)==typeof ($add98=(typeof ($mul47=deltaX)==typeof ($mul48=i) && typeof $mul47=='number'?
								$mul47*$mul48:
								$p['op_mul']($mul47,$mul48))) && (typeof $add97=='number'||typeof $add97=='string')?
								$add97+$add98:
								$p['op_add']($add97,$add98)));
							yi = $p['round']((typeof ($add99=yPx)==typeof ($add100=(typeof ($mul49=deltaY)==typeof ($mul50=(typeof ($sub97=xi)==typeof ($sub98=xPx) && (typeof $sub97=='number'||typeof $sub97=='string')?
								$sub97-$sub98:
								$p['op_sub']($sub97,$sub98))) && typeof $mul49=='number'?
								$mul49*$mul50:
								$p['op_mul']($mul49,$mul50))) && (typeof $add99=='number'||typeof $add99=='string')?
								$add99+$add100:
								$p['op_add']($add99,$add100)));
						}
						else {
							yi = $p['round']((typeof ($add101=yPx)==typeof ($add102=(typeof ($mul51=deltaY)==typeof ($mul52=i) && typeof $mul51=='number'?
								$mul51*$mul52:
								$p['op_mul']($mul51,$mul52))) && (typeof $add101=='number'||typeof $add101=='string')?
								$add101+$add102:
								$p['op_add']($add101,$add102)));
							xi = $p['round']((typeof ($add103=xPx)==typeof ($add104=(typeof ($mul53=deltaX)==typeof ($mul54=(typeof ($sub99=yi)==typeof ($sub100=yPx) && (typeof $sub99=='number'||typeof $sub99=='string')?
								$sub99-$sub100:
								$p['op_sub']($sub99,$sub100))) && typeof $mul53=='number'?
								$mul53*$mul54:
								$p['op_mul']($mul53,$mul54))) && (typeof $add103=='number'||typeof $add103=='string')?
								$add103+$add104:
								$p['op_add']($add103,$add104)));
						}
						self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, xi, yi, prevXPx, prevYPx, nextXPx, nextYPx, thickness, thickness);
					}
				}
			}
			if ((($bool148=drawMainSymbol) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
					false :
					(typeof $bool148=='object'?
						(typeof $bool148.__nonzero__=='function'?
							$bool148.__nonzero__() :
							(typeof $bool148.__len__=='function'?
								($bool148.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, xPx, yPx, prevXPx, prevYPx, nextXPx, nextYPx, symbol['getWidth'](pp), symbol['getHeight'](pp, onY2));
			}
			return null;
		}
	, 1, [null,null,['self'],['pp'],['grp'],['arp'],['symbol'],['annotation'],['onY2'],['clipPlotArea'],['clipDecoratedChart'],['drawMainSymbol'],['x'],['y'],['prevX'],['prevY'],['nextX'],['nextY']]);
		$cls_definition['realizeSymbol'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SymbolType', $p['tuple']($bases), $data);
	})();
	$m['HBarBaseline'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(wm, hm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wm = arguments[1];
				hm = arguments[2];
			}

			$m['SymbolType']['__init__'](self, wm, hm, 0.5, 0.5, 0, 0, true);
			return null;
		}
	, 1, [null,null,['self'],['wm'],['hm']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_BAR_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_HBAR_BASELINE_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}
			var $sub101,$sub102;
			return (typeof ($sub101=x)==typeof ($sub102=xMid) && (typeof $sub101=='number'||typeof $sub101=='string')?
				$sub101-$sub102:
				$p['op_sub']($sub101,$sub102));
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftX', function(width, x, xPrev, xNext, xMin, xMax, xMid, xMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
				xMouse = arguments[8];
			}

			return xMid;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid'],['xMouse']]);
		$cls_definition['getUpperLeftX'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $div45,$div46;
			return $p['float_int']($p['round']((typeof ($div45=legendFontSize)==typeof ($div46=2.0) && typeof $div45=='number' && $div46 !== 0?
				$div45/$div46:
				$p['op_div']($div45,$div46))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HBarBaseline', $p['tuple']($bases), $data);
	})();
	$m['HBarLeft'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(wm, hm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wm = arguments[1];
				hm = arguments[2];
			}

			$m['SymbolType']['__init__'](self, wm, hm, 0.5, 0.5, 0.5, 0.5, true);
			return null;
		}
	, 1, [null,null,['self'],['wm'],['hm']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_BAR_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_HBARLEFT_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}
			var $sub103,$sub104;
			return (typeof ($sub103=x)==typeof ($sub104=xMin) && (typeof $sub103=='number'||typeof $sub103=='string')?
				$sub103-$sub104:
				$p['op_sub']($sub103,$sub104));
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $div47,$div48;
			return $p['float_int']($p['round']((typeof ($div47=legendFontSize)==typeof ($div48=2.0) && typeof $div47=='number' && $div48 !== 0?
				$div47/$div48:
				$p['op_div']($div47,$div48))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HBarLeft', $p['tuple']($bases), $data);
	})();
	$m['HBarRight'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(wm, hm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wm = arguments[1];
				hm = arguments[2];
			}

			$m['SymbolType']['__init__'](self, wm, hm, 0.5, 0.5, 0.5, 0.5, true);
			return null;
		}
	, 1, [null,null,['self'],['wm'],['hm']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_BAR_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_HBARRIGHT_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}
			var $sub106,$sub105;
			return (typeof ($sub105=xMax)==typeof ($sub106=x) && (typeof $sub105=='number'||typeof $sub105=='string')?
				$sub105-$sub106:
				$p['op_sub']($sub105,$sub106));
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $div50,$div49;
			return $p['float_int']($p['round']((typeof ($div49=legendFontSize)==typeof ($div50=2.0) && typeof $div49=='number' && $div50 !== 0?
				$div49/$div50:
				$p['op_div']($div49,$div50))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HBarRight', $p['tuple']($bases), $data);
	})();
	$m['LineSymbolType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SymbolType']['__init__'](self, 0, 0, 0, 0, 0, 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_LINE_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultFillThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_LINE_FILL_THICKNESS');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillThickness'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return 3;
			return null;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return $p['max'](3, legendFontSize);
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		$method = $pyjs__bind_method2('realizeSymbol', function(pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, drawMainSymbol, x, y, prevX, prevY, nextX, nextY) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				grp = arguments[2];
				arp = arguments[3];
				symbol = arguments[4];
				annotation = arguments[5];
				onY2 = arguments[6];
				clipPlotArea = arguments[7];
				clipDecoratedChart = arguments[8];
				drawMainSymbol = arguments[9];
				x = arguments[10];
				y = arguments[11];
				prevX = arguments[12];
				prevY = arguments[13];
				nextX = arguments[14];
				nextY = arguments[15];
			}
			var $add118,$add119,$add116,$add117,$add114,$sub114,$add112,EPS,$add110,$add111,$sub121,$sub128,$sub129,$sub122,$sub123,$sub120,$bool159,$sub124,$sub125,$eq167,$eq166,$eq165,$eq164,$eq163,deltaX,deltaY,$eq169,$eq168,$div58,$div59,$or28,$or29,nextYPx,$div51,$div52,$or27,$div54,$div55,$div56,$div57,yi,$add115,$iter2_type,$eq181,$eq180,yPx,$eq182,$sub127,$eq184,$add113,$iter2_nextval,dx,dy,$iter3_nextval,$bool163,$bool162,$bool161,$bool160,$bool165,$bool164,h,xiPrev,$div66,$bool156,$bool157,$bool154,$bool155,$bool152,$bool153,$bool150,$bool151,$sub126,$bool158,thickness,$add108,$mul62,$mul63,dXIsShorter,spacing,$mul60,$bool149,$mul66,$mul67,$div65,$and52,$and50,$and51,w,$mul68,$iter2_array,xi,$iter3_array,$mul61,$and49,$and48,$mul64,$mul65,$mul69,$and47,$and46,nextXPx,$sub130,yMin,$iter3_iter,$add127,$add126,$add125,$add124,$add122,$add121,$add120,yAtXMax,$add129,N,$sub113,$sub112,$sub111,$sub110,$sub117,$sub116,$sub115,canvas,$add123,$sub119,$sub118,$div61,$div64,$mul71,$mul70,$mul73,$div53,$mul75,$mul74,$mul77,$mul76,$mul78,$iter2_idx,xAtYMax,yAtXMin,$div60,$add130,$add131,$add132,$cmp89,xMax,$sub107,$sub108,$sub109,yiPrev,yMax,$iter3_idx,xAtYMin,$div62,xMin,$eq183,$add105,$add107,$add106,$add109,$cmp94,$mul72,$cmp91,$cmp90,$cmp93,$cmp92,xPx,$iter3_type,$add128,$mul59,$mul58,i,$mul57,$mul56,$mul55,$iter2_iter,$eq178,$eq179,$or30,$div63,$eq170,$eq171,$eq172,$eq173,$eq174,$eq175,$eq176,$eq177;
			if ((($bool150=((($bool149=$or27=(($eq163=$p['getattr']($m['Double'], 'NaN'))===($eq164=x)&&$eq163===null?true:
				($eq163===null?false:($eq164===null?false:
					((typeof $eq163=='object'||typeof $eq163=='function')&&typeof $eq163.__cmp__=='function'?$eq163.__cmp__($eq164) === 0:
						((typeof $eq164=='object'||typeof $eq164=='function')&&typeof $eq164.__cmp__=='function'?$eq164.__cmp__($eq163) === 0:
							$eq163==$eq164)))))) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
				false :
				(typeof $bool149=='object'?
					(typeof $bool149.__nonzero__=='function'?
						$bool149.__nonzero__() :
						(typeof $bool149.__len__=='function'?
							($bool149.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or27:(($eq165=$p['getattr']($m['Double'], 'NaN'))===($eq166=y)&&$eq165===null?true:
				($eq165===null?false:($eq166===null?false:
					((typeof $eq165=='object'||typeof $eq165=='function')&&typeof $eq165.__cmp__=='function'?$eq165.__cmp__($eq166) === 0:
						((typeof $eq166=='object'||typeof $eq166=='function')&&typeof $eq166.__cmp__=='function'?$eq166.__cmp__($eq165) === 0:
							$eq165==$eq166))))))) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
					false :
					(typeof $bool150=='object'?
						(typeof $bool150.__nonzero__=='function'?
							$bool150.__nonzero__() :
							(typeof $bool150.__len__=='function'?
								($bool150.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			spacing = symbol['getFillSpacing']();
			thickness = symbol['getFillThickness']();
			canvas = grp['getCanvas']();
			if ((($bool153=((($bool151=$and46=(($eq167=0)===($eq168=spacing)&&$eq167===null?true:
				($eq167===null?false:($eq168===null?false:
					((typeof $eq167=='object'||typeof $eq167=='function')&&typeof $eq167.__cmp__=='function'?$eq167.__cmp__($eq168) === 0:
						((typeof $eq168=='object'||typeof $eq168=='function')&&typeof $eq168.__cmp__=='function'?$eq168.__cmp__($eq167) === 0:
							$eq167==$eq168)))))) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
				false :
				(typeof $bool151=='object'?
					(typeof $bool151.__nonzero__=='function'?
						$bool151.__nonzero__() :
						(typeof $bool151.__len__=='function'?
							($bool151.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool152=$and47=!(($eq169=null)===($eq170=canvas)&&$eq169===null?true:
				($eq169===null?false:($eq170===null?false:
					((typeof $eq169=='object'||typeof $eq169=='function')&&typeof $eq169.__cmp__=='function'?$eq169.__cmp__($eq170) === 0:
						((typeof $eq170=='object'||typeof $eq170=='function')&&typeof $eq170.__cmp__=='function'?$eq170.__cmp__($eq169) === 0:
							$eq169==$eq170)))))) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
				false :
				(typeof $bool152=='object'?
					(typeof $bool152.__nonzero__=='function'?
						$bool152.__nonzero__() :
						(typeof $bool152.__len__=='function'?
							($bool152.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp89=thickness)===($cmp90=0)?0:
				(typeof $cmp89==typeof $cmp90 && ((typeof $cmp89 == 'number')||(typeof $cmp89 == 'string')||(typeof $cmp89 == 'boolean'))?
					($cmp89 == $cmp90 ? 0 : ($cmp89 < $cmp90 ? -1 : 1)):
					$p['cmp']($cmp89, $cmp90))) == 1):$and47):$and46)) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
					false :
					(typeof $bool153=='object'?
						(typeof $bool153.__nonzero__=='function'?
							$bool153.__nonzero__() :
							(typeof $bool153.__len__=='function'?
								($bool153.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m.BOX_CENTER['realizeSymbol'](pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, drawMainSymbol, x, y, prevX, prevY, nextX, nextY);
				return null;
			}
			xPx = pp['xToPixel'](x);
			yPx = pp['yToPixel'](y, onY2);
			nextXPx = pp['xToPixel'](nextX);
			nextYPx = pp['yToPixel'](nextY, onY2);
			if ((($bool160=((($bool156=$and49=!(($bool154=(($eq171=$p['getattr']($m['Double'], 'NaN'))===($eq172=nextX)&&$eq171===null?true:
				($eq171===null?false:($eq172===null?false:
					((typeof $eq171=='object'||typeof $eq171=='function')&&typeof $eq171.__cmp__=='function'?$eq171.__cmp__($eq172) === 0:
						((typeof $eq172=='object'||typeof $eq172=='function')&&typeof $eq172.__cmp__=='function'?$eq172.__cmp__($eq171) === 0:
							$eq171==$eq172)))))) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
				false :
				(typeof $bool154=='object'?
					(typeof $bool154.__nonzero__=='function'?
						$bool154.__nonzero__() :
						(typeof $bool154.__len__=='function'?
							($bool154.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
				false :
				(typeof $bool156=='object'?
					(typeof $bool156.__nonzero__=='function'?
						$bool156.__nonzero__() :
						(typeof $bool156.__len__=='function'?
							($bool156.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool157=$and50=!(($bool155=(($eq173=$p['getattr']($m['Double'], 'NaN'))===($eq174=nextY)&&$eq173===null?true:
				($eq173===null?false:($eq174===null?false:
					((typeof $eq173=='object'||typeof $eq173=='function')&&typeof $eq173.__cmp__=='function'?$eq173.__cmp__($eq174) === 0:
						((typeof $eq174=='object'||typeof $eq174=='function')&&typeof $eq174.__cmp__=='function'?$eq174.__cmp__($eq173) === 0:
							$eq173==$eq174)))))) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
				false :
				(typeof $bool155=='object'?
					(typeof $bool155.__nonzero__=='function'?
						$bool155.__nonzero__() :
						(typeof $bool155.__len__=='function'?
							($bool155.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
				false :
				(typeof $bool157=='object'?
					(typeof $bool157.__nonzero__=='function'?
						$bool157.__nonzero__() :
						(typeof $bool157.__len__=='function'?
							($bool157.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool158=$and51=((($cmp91=thickness)===($cmp92=0)?0:
				(typeof $cmp91==typeof $cmp92 && ((typeof $cmp91 == 'number')||(typeof $cmp91 == 'string')||(typeof $cmp91 == 'boolean'))?
					($cmp91 == $cmp92 ? 0 : ($cmp91 < $cmp92 ? -1 : 1)):
					$p['cmp']($cmp91, $cmp92))) == 1)) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
				false :
				(typeof $bool158=='object'?
					(typeof $bool158.__nonzero__=='function'?
						$bool158.__nonzero__() :
						(typeof $bool158.__len__=='function'?
							($bool158.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool159=$or29=!(($eq175=x)===($eq176=nextX)&&$eq175===null?true:
				($eq175===null?false:($eq176===null?false:
					((typeof $eq175=='object'||typeof $eq175=='function')&&typeof $eq175.__cmp__=='function'?$eq175.__cmp__($eq176) === 0:
						((typeof $eq176=='object'||typeof $eq176=='function')&&typeof $eq176.__cmp__=='function'?$eq176.__cmp__($eq175) === 0:
							$eq175==$eq176)))))) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
				false :
				(typeof $bool159=='object'?
					(typeof $bool159.__nonzero__=='function'?
						$bool159.__nonzero__() :
						(typeof $bool159.__len__=='function'?
							($bool159.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or29:!(($eq177=y)===($eq178=nextY)&&$eq177===null?true:
				($eq177===null?false:($eq178===null?false:
					((typeof $eq177=='object'||typeof $eq177=='function')&&typeof $eq177.__cmp__=='function'?$eq177.__cmp__($eq178) === 0:
						((typeof $eq178=='object'||typeof $eq178=='function')&&typeof $eq178.__cmp__=='function'?$eq178.__cmp__($eq177) === 0:
							$eq177==$eq178)))))):$and51):$and50):$and49)) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
					false :
					(typeof $bool160=='object'?
						(typeof $bool160.__nonzero__=='function'?
							$bool160.__nonzero__() :
							(typeof $bool160.__len__=='function'?
								($bool160.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool161=(($eq179=0)===($eq180=spacing)&&$eq179===null?true:
					($eq179===null?false:($eq180===null?false:
						((typeof $eq179=='object'||typeof $eq179=='function')&&typeof $eq179.__cmp__=='function'?$eq179.__cmp__($eq180) === 0:
							((typeof $eq180=='object'||typeof $eq180=='function')&&typeof $eq180.__cmp__=='function'?$eq180.__cmp__($eq179) === 0:
								$eq179==$eq180)))))) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
						false :
						(typeof $bool161=='object'?
							(typeof $bool161.__nonzero__=='function'?
								$bool161.__nonzero__() :
								(typeof $bool161.__len__=='function'?
									($bool161.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spacing = 1;
				}
				deltaX = (typeof ($sub107=nextXPx)==typeof ($sub108=xPx) && (typeof $sub107=='number'||typeof $sub107=='string')?
					$sub107-$sub108:
					$p['op_sub']($sub107,$sub108));
				deltaY = (typeof ($sub109=nextYPx)==typeof ($sub110=yPx) && (typeof $sub109=='number'||typeof $sub109=='string')?
					$sub109-$sub110:
					$p['op_sub']($sub109,$sub110));
				dXIsShorter = ((($cmp93=(typeof ($mul55=deltaX)==typeof ($mul56=deltaX) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)))===($cmp94=(typeof ($mul57=deltaY)==typeof ($mul58=deltaY) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)))?0:
					(typeof $cmp93==typeof $cmp94 && ((typeof $cmp93 == 'number')||(typeof $cmp93 == 'string')||(typeof $cmp93 == 'boolean'))?
						($cmp93 == $cmp94 ? 0 : ($cmp93 < $cmp94 ? -1 : 1)):
						$p['cmp']($cmp93, $cmp94))) == -1);
				EPS = 1;
				if ((($bool162=(($eq181=deltaX)===($eq182=0)&&$eq181===null?true:
					($eq181===null?false:($eq182===null?false:
						((typeof $eq181=='object'||typeof $eq181=='function')&&typeof $eq181.__cmp__=='function'?$eq181.__cmp__($eq182) === 0:
							((typeof $eq182=='object'||typeof $eq182=='function')&&typeof $eq182.__cmp__=='function'?$eq182.__cmp__($eq181) === 0:
								$eq181==$eq182)))))) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
						false :
						(typeof $bool162=='object'?
							(typeof $bool162.__nonzero__=='function'?
								$bool162.__nonzero__() :
								(typeof $bool162.__len__=='function'?
									($bool162.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, xPx, (typeof ($mul59=0.5)==typeof ($mul60=(typeof ($add105=yPx)==typeof ($add106=nextYPx) && (typeof $add105=='number'||typeof $add105=='string')?
						$add105+$add106:
						$p['op_add']($add105,$add106))) && typeof $mul59=='number'?
						$mul59*$mul60:
						$p['op_mul']($mul59,$mul60)), $p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'), nextXPx, nextYPx, thickness, (typeof ($add107=$p['abs']((typeof ($sub111=nextYPx)==typeof ($sub112=yPx) && (typeof $sub111=='number'||typeof $sub111=='string')?
						$sub111-$sub112:
						$p['op_sub']($sub111,$sub112))))==typeof ($add108=EPS) && (typeof $add107=='number'||typeof $add107=='string')?
						$add107+$add108:
						$p['op_add']($add107,$add108)));
				}
				else if ((($bool163=(($eq183=deltaY)===($eq184=0)&&$eq183===null?true:
					($eq183===null?false:($eq184===null?false:
						((typeof $eq183=='object'||typeof $eq183=='function')&&typeof $eq183.__cmp__=='function'?$eq183.__cmp__($eq184) === 0:
							((typeof $eq184=='object'||typeof $eq184=='function')&&typeof $eq184.__cmp__=='function'?$eq184.__cmp__($eq183) === 0:
								$eq183==$eq184)))))) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
						false :
						(typeof $bool163=='object'?
							(typeof $bool163.__nonzero__=='function'?
								$bool163.__nonzero__() :
								(typeof $bool163.__len__=='function'?
									($bool163.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, (typeof ($mul61=0.5)==typeof ($mul62=(typeof ($add109=xPx)==typeof ($add110=nextXPx) && (typeof $add109=='number'||typeof $add109=='string')?
						$add109+$add110:
						$p['op_add']($add109,$add110))) && typeof $mul61=='number'?
						$mul61*$mul62:
						$p['op_mul']($mul61,$mul62)), yPx, $p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'), nextXPx, nextYPx, (typeof ($add111=$p['abs']((typeof ($sub113=nextXPx)==typeof ($sub114=xPx) && (typeof $sub113=='number'||typeof $sub113=='string')?
						$sub113-$sub114:
						$p['op_sub']($sub113,$sub114))))==typeof ($add112=EPS) && (typeof $add111=='number'||typeof $add111=='string')?
						$add111+$add112:
						$p['op_add']($add111,$add112)), thickness);
				}
				else if ((($bool164=dXIsShorter) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
						false :
						(typeof $bool164=='object'?
							(typeof $bool164.__nonzero__=='function'?
								$bool164.__nonzero__() :
								(typeof $bool164.__len__=='function'?
									($bool164.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					xMin = $p['min'](xPx, nextXPx);
					xMax = $p['max'](xPx, nextXPx);
					yAtXMin = $p['min'](xPx, nextXPx);
					yAtXMax = $p['max'](xPx, nextXPx);
					xiPrev = xMin;
					yiPrev = yAtXMin;
					xi = xiPrev;
					yi = yiPrev;
					N = $p['float_int']($m['math']['ceil']((typeof ($div51=(typeof ($sub115=xMax)==typeof ($sub116=xMin) && (typeof $sub115=='number'||typeof $sub115=='string')?
						$sub115-$sub116:
						$p['op_sub']($sub115,$sub116)))==typeof ($div52=spacing) && typeof $div51=='number' && $div52 !== 0?
						$div51/$div52:
						$p['op_div']($div51,$div52))));
					dy = (typeof ($add113=$p['abs']((typeof ($div53=(typeof ($sub117=yAtXMax)==typeof ($sub118=yAtXMin) && (typeof $sub117=='number'||typeof $sub117=='string')?
						$sub117-$sub118:
						$p['op_sub']($sub117,$sub118)))==typeof ($div54=N) && typeof $div53=='number' && $div54 !== 0?
						$div53/$div54:
						$p['op_div']($div53,$div54))))==typeof ($add114=EPS) && (typeof $add113=='number'||typeof $add113=='string')?
						$add113+$add114:
						$p['op_add']($add113,$add114));
					$iter2_iter = $p['range'](1, N);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						xi = (typeof ($add115=xMin)==typeof ($add116=(typeof ($div55=(typeof ($mul63=i)==typeof ($mul64=(typeof ($sub119=xMax)==typeof ($sub120=xMin) && (typeof $sub119=='number'||typeof $sub119=='string')?
							$sub119-$sub120:
							$p['op_sub']($sub119,$sub120))) && typeof $mul63=='number'?
							$mul63*$mul64:
							$p['op_mul']($mul63,$mul64)))==typeof ($div56=N) && typeof $div55=='number' && $div56 !== 0?
							$div55/$div56:
							$p['op_div']($div55,$div56))) && (typeof $add115=='number'||typeof $add115=='string')?
							$add115+$add116:
							$p['op_add']($add115,$add116));
						yi = (typeof ($add117=yAtXMin)==typeof ($add118=(typeof ($div57=(typeof ($mul65=i)==typeof ($mul66=(typeof ($sub121=yAtXMax)==typeof ($sub122=yAtXMin) && (typeof $sub121=='number'||typeof $sub121=='string')?
							$sub121-$sub122:
							$p['op_sub']($sub121,$sub122))) && typeof $mul65=='number'?
							$mul65*$mul66:
							$p['op_mul']($mul65,$mul66)))==typeof ($div58=N) && typeof $div57=='number' && $div58 !== 0?
							$div57/$div58:
							$p['op_div']($div57,$div58))) && (typeof $add117=='number'||typeof $add117=='string')?
							$add117+$add118:
							$p['op_add']($add117,$add118));
						self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, (typeof ($mul67=0.5)==typeof ($mul68=(typeof ($add119=xiPrev)==typeof ($add120=xi) && (typeof $add119=='number'||typeof $add119=='string')?
							$add119+$add120:
							$p['op_add']($add119,$add120))) && typeof $mul67=='number'?
							$mul67*$mul68:
							$p['op_mul']($mul67,$mul68)), (typeof ($mul69=0.5)==typeof ($mul70=(typeof ($add121=yiPrev)==typeof ($add122=yi) && (typeof $add121=='number'||typeof $add121=='string')?
							$add121+$add122:
							$p['op_add']($add121,$add122))) && typeof $mul69=='number'?
							$mul69*$mul70:
							$p['op_mul']($mul69,$mul70)), $p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'), nextXPx, nextYPx, thickness, dy);
						xiPrev = xi;
						yiPrev = yi;
					}
				}
				else {
					yMin = $p['min'](yPx, nextYPx);
					yMax = $p['max'](yPx, nextYPx);
					xAtYMin = $p['min'](yPx, nextYPx);
					xAtYMax = $p['max'](yPx, nextYPx);
					xiPrev = xAtYMin;
					yiPrev = yMin;
					xi = xiPrev;
					yi = yiPrev;
					N = $p['float_int']($m['math']['ceil']((typeof ($div59=(typeof ($sub123=yMax)==typeof ($sub124=yMin) && (typeof $sub123=='number'||typeof $sub123=='string')?
						$sub123-$sub124:
						$p['op_sub']($sub123,$sub124)))==typeof ($div60=spacing) && typeof $div59=='number' && $div60 !== 0?
						$div59/$div60:
						$p['op_div']($div59,$div60))));
					dx = (typeof ($add123=$p['abs']((typeof ($div61=(typeof ($sub125=xAtYMax)==typeof ($sub126=xAtYMin) && (typeof $sub125=='number'||typeof $sub125=='string')?
						$sub125-$sub126:
						$p['op_sub']($sub125,$sub126)))==typeof ($div62=N) && typeof $div61=='number' && $div62 !== 0?
						$div61/$div62:
						$p['op_div']($div61,$div62))))==typeof ($add124=EPS) && (typeof $add123=='number'||typeof $add123=='string')?
						$add123+$add124:
						$p['op_add']($add123,$add124));
					$iter3_iter = $p['range'](1, N);
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						i = $iter3_nextval;
						yi = (typeof ($add125=yMin)==typeof ($add126=(typeof ($div63=(typeof ($mul71=i)==typeof ($mul72=(typeof ($sub127=yMax)==typeof ($sub128=yMin) && (typeof $sub127=='number'||typeof $sub127=='string')?
							$sub127-$sub128:
							$p['op_sub']($sub127,$sub128))) && typeof $mul71=='number'?
							$mul71*$mul72:
							$p['op_mul']($mul71,$mul72)))==typeof ($div64=N) && typeof $div63=='number' && $div64 !== 0?
							$div63/$div64:
							$p['op_div']($div63,$div64))) && (typeof $add125=='number'||typeof $add125=='string')?
							$add125+$add126:
							$p['op_add']($add125,$add126));
						xi = (typeof ($add127=xAtYMin)==typeof ($add128=(typeof ($div65=(typeof ($mul73=i)==typeof ($mul74=(typeof ($sub129=xAtYMax)==typeof ($sub130=xAtYMin) && (typeof $sub129=='number'||typeof $sub129=='string')?
							$sub129-$sub130:
							$p['op_sub']($sub129,$sub130))) && typeof $mul73=='number'?
							$mul73*$mul74:
							$p['op_mul']($mul73,$mul74)))==typeof ($div66=N) && typeof $div65=='number' && $div66 !== 0?
							$div65/$div66:
							$p['op_div']($div65,$div66))) && (typeof $add127=='number'||typeof $add127=='string')?
							$add127+$add128:
							$p['op_add']($add127,$add128));
						self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, (typeof ($mul75=0.5)==typeof ($mul76=(typeof ($add129=xiPrev)==typeof ($add130=xi) && (typeof $add129=='number'||typeof $add129=='string')?
							$add129+$add130:
							$p['op_add']($add129,$add130))) && typeof $mul75=='number'?
							$mul75*$mul76:
							$p['op_mul']($mul75,$mul76)), (typeof ($mul77=0.5)==typeof ($mul78=(typeof ($add131=yiPrev)==typeof ($add132=yi) && (typeof $add131=='number'||typeof $add131=='string')?
							$add131+$add132:
							$p['op_add']($add131,$add132))) && typeof $mul77=='number'?
							$mul77*$mul78:
							$p['op_mul']($mul77,$mul78)), $p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'), nextXPx, nextYPx, dx, thickness);
						xiPrev = xi;
						yiPrev = yi;
					}
				}
			}
			if ((($bool165=drawMainSymbol) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
					false :
					(typeof $bool165=='object'?
						(typeof $bool165.__nonzero__=='function'?
							$bool165.__nonzero__() :
							(typeof $bool165.__len__=='function'?
								($bool165.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				w = symbol['getWidth'](pp);
				h = symbol['getHeight'](pp, onY2);
				self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, xPx, yPx, $p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'), nextXPx, nextYPx, w, h);
			}
			return null;
		}
	, 1, [null,null,['self'],['pp'],['grp'],['arp'],['symbol'],['annotation'],['onY2'],['clipPlotArea'],['clipDecoratedChart'],['drawMainSymbol'],['x'],['y'],['prevX'],['prevY'],['nextX'],['nextY']]);
		$cls_definition['realizeSymbol'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LineSymbolType', $p['tuple']($bases), $data);
	})();
	$m['SliceLimits'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SliceLimits', $p['tuple']($bases), $data);
	})();
	$m['PieSliceSymbolType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(horizontallyShaded, verticallyShaded, optimallyShaded, pixelPadLeft, pixelPadRight, pixelPadTop, pixelPadBottom) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				horizontallyShaded = arguments[1];
				verticallyShaded = arguments[2];
				optimallyShaded = arguments[3];
				pixelPadLeft = arguments[4];
				pixelPadRight = arguments[5];
				pixelPadTop = arguments[6];
				pixelPadBottom = arguments[7];
			}

			$m['SymbolType']['__init__'](self, 1, 1, pixelPadLeft, pixelPadRight, pixelPadTop, pixelPadBottom);
			self.horizontallyShaded = horizontallyShaded;
			self.verticallyShaded = verticallyShaded;
			self.optimallyShaded = optimallyShaded;
			return null;
		}
	, 1, [null,null,['self'],['horizontallyShaded'],['verticallyShaded'],['optimallyShaded'],['pixelPadLeft'],['pixelPadRight'],['pixelPadTop'],['pixelPadBottom']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_PIE_SLICE_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getBandThickness', function(pp, sym, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				sym = arguments[2];
				onY2 = arguments[3];
			}
			var $mul80,$mul79,result;
			result = $p['max']($m['MIN_BAND_SIZE'], (typeof ($mul79=2)==typeof ($mul80=sym['getPieSliceRadius'](pp, onY2)) && typeof $mul79=='number'?
				$mul79*$mul80:
				$p['op_mul']($mul79,$mul80)));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['sym'],['onY2']]);
		$cls_definition['getBandThickness'] = $method;
		$method = $pyjs__bind_method2('getBrushHeight', function(sym) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sym = arguments[1];
			}
			var result;
			result = $p['max'](sym['getBrushHeight'](), sym['getBrushWidth']());
			return result;
		}
	, 1, [null,null,['self'],['sym']]);
		$cls_definition['getBrushHeight'] = $method;
		$method = $pyjs__bind_method2('getBrushLocation', function(sym) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sym = arguments[1];
			}
			var result;
			result = $p['getattr']($m['AnnotationLocation'], 'CENTER');
			return result;
		}
	, 1, [null,null,['self'],['sym']]);
		$cls_definition['getBrushLocation'] = $method;
		$method = $pyjs__bind_method2('getBrushWidth', function(sym) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sym = arguments[1];
			}
			var result;
			result = $p['max'](sym['getBrushHeight'](), sym['getBrushWidth']());
			return result;
		}
	, 1, [null,null,['self'],['sym']]);
		$cls_definition['getBrushWidth'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_PIE_SLICE_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultFillThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_PIE_SLICE_FILL_THICKNESS');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillThickness'] = $method;
		$method = $pyjs__bind_method2('defaultHovertextTemplate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_PIE_SLICE_HOVERTEXT_TEMPLATE');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHovertextTemplate'] = $method;
		$method = $pyjs__bind_method2('getSliceLimits', function(tMin, tMax) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tMin = arguments[1];
				tMax = arguments[2];
			}
			var $add134,$add133,halfPi,result,xMax,tmp,xMin,yMin,$div70,t,$mul81,$mul82,$mul83,$mul84,yMax,$cmp95,$cmp96,$bool166,i,$div69,$div68,$div67;
			result = $m['SliceLimits']();
			xMin = 0;
			xMax = 0;
			yMin = 0;
			yMax = 0;
			tmp = 0;
			tmp = $m['math']['cos'](tMin);
			xMin = $p['min'](xMin, tmp);
			xMax = $p['max'](xMax, tmp);
			tmp = $m['math']['sin'](tMin);
			yMin = $p['min'](yMin, tmp);
			yMax = $p['max'](yMax, tmp);
			tmp = $m['math']['cos'](tMax);
			xMin = $p['min'](xMin, tmp);
			xMax = $p['max'](xMax, tmp);
			tmp = $m['math']['sin'](tMax);
			yMin = $p['min'](yMin, tmp);
			yMax = $p['max'](yMax, tmp);
			halfPi = (typeof ($div67=$p['getattr']($m['math'], 'pi'))==typeof ($div68=2.0) && typeof $div67=='number' && $div68 !== 0?
				$div67/$div68:
				$p['op_div']($div67,$div68));
			i = $p['float_int']($m['math']['ceil']((typeof ($div69=tMin)==typeof ($div70=halfPi) && typeof $div69=='number' && $div70 !== 0?
				$div69/$div70:
				$p['op_div']($div69,$div70))));
			while ((($bool166=((($cmp95=(typeof ($mul81=i)==typeof ($mul82=halfPi) && typeof $mul81=='number'?
				$mul81*$mul82:
				$p['op_mul']($mul81,$mul82)))===($cmp96=tMax)?0:
				(typeof $cmp95==typeof $cmp96 && ((typeof $cmp95 == 'number')||(typeof $cmp95 == 'string')||(typeof $cmp95 == 'boolean'))?
					($cmp95 == $cmp96 ? 0 : ($cmp95 < $cmp96 ? -1 : 1)):
					$p['cmp']($cmp95, $cmp96))) == -1)) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
					false :
					(typeof $bool166=='object'?
						(typeof $bool166.__nonzero__=='function'?
							$bool166.__nonzero__() :
							(typeof $bool166.__len__=='function'?
								($bool166.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				t = (typeof ($mul83=i)==typeof ($mul84=halfPi) && typeof $mul83=='number'?
					$mul83*$mul84:
					$p['op_mul']($mul83,$mul84));
				tmp = $m['math']['cos'](t);
				xMin = $p['min'](xMin, tmp);
				xMax = $p['max'](xMax, tmp);
				tmp = $m['math']['sin'](t);
				yMin = $p['min'](yMin, tmp);
				yMax = $p['max'](yMax, tmp);
				i = (typeof ($add133=i)==typeof ($add134=1) && (typeof $add133=='number'||typeof $add133=='string')?
					$add133+$add134:
					$p['op_add']($add133,$add134));
			}
			result.xMin = xMin;
			result.xMax = xMax;
			result.yMin = yMin;
			result.yMax = yMax;
			return result;
		}
	, 1, [null,null,['self'],['tMin'],['tMax']]);
		$cls_definition['getSliceLimits'] = $method;
		$method = $pyjs__bind_method2('getEdgeLeft', function(pp, symbol, x, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				x = arguments[3];
				onY2 = arguments[4];
			}
			var $add135,theta1,$mul85,theta0,$add136,r,result,sl,$mul86,xPx;
			r = symbol['getPieSliceRadius'](pp, onY2);
			theta0 = symbol['getPieSliceTheta0']();
			theta1 = symbol['getPieSliceTheta1']();
			sl = self['getSliceLimits'](theta1, theta0);
			xPx = pp['xToPixel'](x);
			result = (typeof ($add135=xPx)==typeof ($add136=(typeof ($mul85=$p['getattr'](sl, 'xMin'))==typeof ($mul86=r) && typeof $mul85=='number'?
				$mul85*$mul86:
				$p['op_mul']($mul85,$mul86))) && (typeof $add135=='number'||typeof $add135=='string')?
				$add135+$add136:
				$p['op_add']($add135,$add136));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['x'],['onY2']]);
		$cls_definition['getEdgeLeft'] = $method;
		$method = $pyjs__bind_method2('getEdgeRight', function(pp, symbol, x, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				x = arguments[3];
				onY2 = arguments[4];
			}
			var theta1,$mul87,$mul88,$add138,$add137,theta0,r,result,sl,xPx;
			r = symbol['getPieSliceRadius'](pp, onY2);
			theta0 = symbol['getPieSliceTheta0']();
			theta1 = symbol['getPieSliceTheta1']();
			sl = self['getSliceLimits'](theta1, theta0);
			xPx = pp['xToPixel'](x);
			result = (typeof ($add137=xPx)==typeof ($add138=(typeof ($mul87=$p['getattr'](sl, 'xMax'))==typeof ($mul88=r) && typeof $mul87=='number'?
				$mul87*$mul88:
				$p['op_mul']($mul87,$mul88))) && (typeof $add137=='number'||typeof $add137=='string')?
				$add137+$add138:
				$p['op_add']($add137,$add138));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['x'],['onY2']]);
		$cls_definition['getEdgeRight'] = $method;
		$method = $pyjs__bind_method2('getEdgeTop', function(pp, symbol, y, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				y = arguments[3];
				onY2 = arguments[4];
			}
			var theta1,$mul89,theta0,$mul90,r,yPx,result,sl,$sub131,$sub132;
			r = symbol['getPieSliceRadius'](pp, onY2);
			theta0 = symbol['getPieSliceTheta0']();
			theta1 = symbol['getPieSliceTheta1']();
			sl = self['getSliceLimits'](theta1, theta0);
			yPx = pp['yToPixel'](y, onY2);
			result = (typeof ($sub131=yPx)==typeof ($sub132=(typeof ($mul89=$p['getattr'](sl, 'yMax'))==typeof ($mul90=r) && typeof $mul89=='number'?
				$mul89*$mul90:
				$p['op_mul']($mul89,$mul90))) && (typeof $sub131=='number'||typeof $sub131=='string')?
				$sub131-$sub132:
				$p['op_sub']($sub131,$sub132));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['y'],['onY2']]);
		$cls_definition['getEdgeTop'] = $method;
		$method = $pyjs__bind_method2('getEdgeBottom', function(pp, symbol, y, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				y = arguments[3];
				onY2 = arguments[4];
			}
			var theta1,theta0,$mul91,$mul92,r,yPx,result,sl,$sub134,$sub133;
			r = symbol['getPieSliceRadius'](pp, onY2);
			theta0 = symbol['getPieSliceTheta0']();
			theta1 = symbol['getPieSliceTheta1']();
			sl = self['getSliceLimits'](theta1, theta0);
			yPx = pp['yToPixel'](y, onY2);
			result = (typeof ($sub133=yPx)==typeof ($sub134=(typeof ($mul91=$p['getattr'](sl, 'yMin'))==typeof ($mul92=r) && typeof $mul91=='number'?
				$mul91*$mul92:
				$p['op_mul']($mul91,$mul92))) && (typeof $sub133=='number'||typeof $sub133=='string')?
				$sub133-$sub134:
				$p['op_sub']($sub133,$sub134));
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['y'],['onY2']]);
		$cls_definition['getEdgeBottom'] = $method;
		$method = $pyjs__bind_method2('yWherePieEdgeIntersectsVerticalLine', function(xOfVerticalLine, xPieCenter, yPieCenter, pieRadius, pieEdgeAngle) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xOfVerticalLine = arguments[1];
				xPieCenter = arguments[2];
				yPieCenter = arguments[3];
				pieRadius = arguments[4];
				pieEdgeAngle = arguments[5];
			}
			var $mul97,$mul96,$mul95,$mul94,$mul93,result,$mul98,$div72,$div71,$eq185,$eq186,$sub138,$sub135,$sub137,$sub136,dxToArc,$bool167,$bool168,t;
			result = $p['getattr']($m['Double'], 'NaN');
			dxToArc = (typeof ($mul93=pieRadius)==typeof ($mul94=$m['math']['cos'](pieEdgeAngle)) && typeof $mul93=='number'?
				$mul93*$mul94:
				$p['op_mul']($mul93,$mul94));
			if ((($bool167=!(($eq185=dxToArc)===($eq186=0)&&$eq185===null?true:
				($eq185===null?false:($eq186===null?false:
					((typeof $eq185=='object'||typeof $eq185=='function')&&typeof $eq185.__cmp__=='function'?$eq185.__cmp__($eq186) === 0:
						((typeof $eq186=='object'||typeof $eq186=='function')&&typeof $eq186.__cmp__=='function'?$eq186.__cmp__($eq185) === 0:
							$eq185==$eq186)))))) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
					false :
					(typeof $bool167=='object'?
						(typeof $bool167.__nonzero__=='function'?
							$bool167.__nonzero__() :
							(typeof $bool167.__len__=='function'?
								($bool167.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				t = (typeof ($div71=(typeof ($sub135=xOfVerticalLine)==typeof ($sub136=xPieCenter) && (typeof $sub135=='number'||typeof $sub135=='string')?
					$sub135-$sub136:
					$p['op_sub']($sub135,$sub136)))==typeof ($div72=dxToArc) && typeof $div71=='number' && $div72 !== 0?
					$div71/$div72:
					$p['op_div']($div71,$div72));
				if ((($bool168=$m['GChartUtil']['withinRange'](t, 0, 1)) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
						false :
						(typeof $bool168=='object'?
							(typeof $bool168.__nonzero__=='function'?
								$bool168.__nonzero__() :
								(typeof $bool168.__len__=='function'?
									($bool168.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($sub137=yPieCenter)==typeof ($sub138=(typeof ($mul97=(typeof ($mul95=t)==typeof ($mul96=pieRadius) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96)))==typeof ($mul98=$m['math']['sin'](pieEdgeAngle)) && typeof $mul97=='number'?
						$mul97*$mul98:
						$p['op_mul']($mul97,$mul98))) && (typeof $sub137=='number'||typeof $sub137=='string')?
						$sub137-$sub138:
						$p['op_sub']($sub137,$sub138));
				}
			}
			return result;
		}
	, 1, [null,null,['self'],['xOfVerticalLine'],['xPieCenter'],['yPieCenter'],['pieRadius'],['pieEdgeAngle']]);
		$cls_definition['yWherePieEdgeIntersectsVerticalLine'] = $method;
		$method = $pyjs__bind_method2('xWherePieEdgeIntersectsHorizontalLine', function(yOfHorizontalLine, xPieCenter, yPieCenter, pieRadius, pieEdgeAngle) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yOfHorizontalLine = arguments[1];
				xPieCenter = arguments[2];
				yPieCenter = arguments[3];
				pieRadius = arguments[4];
				pieEdgeAngle = arguments[5];
			}
			var $mul99,$add139,result,dyToArc,$bool170,$sub140,$add140,$div74,$div73,$eq188,$eq187,$mul104,$sub139,$mul101,$mul102,$mul103,$bool169,t,$mul100;
			result = $p['getattr']($m['Double'], 'NaN');
			dyToArc = (typeof ($mul99=pieRadius)==typeof ($mul100=$m['math']['sin'](pieEdgeAngle)) && typeof $mul99=='number'?
				$mul99*$mul100:
				$p['op_mul']($mul99,$mul100));
			if ((($bool169=!(($eq187=dyToArc)===($eq188=0)&&$eq187===null?true:
				($eq187===null?false:($eq188===null?false:
					((typeof $eq187=='object'||typeof $eq187=='function')&&typeof $eq187.__cmp__=='function'?$eq187.__cmp__($eq188) === 0:
						((typeof $eq188=='object'||typeof $eq188=='function')&&typeof $eq188.__cmp__=='function'?$eq188.__cmp__($eq187) === 0:
							$eq187==$eq188)))))) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
					false :
					(typeof $bool169=='object'?
						(typeof $bool169.__nonzero__=='function'?
							$bool169.__nonzero__() :
							(typeof $bool169.__len__=='function'?
								($bool169.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				t = (typeof ($div73=(typeof ($sub139=yPieCenter)==typeof ($sub140=yOfHorizontalLine) && (typeof $sub139=='number'||typeof $sub139=='string')?
					$sub139-$sub140:
					$p['op_sub']($sub139,$sub140)))==typeof ($div74=dyToArc) && typeof $div73=='number' && $div74 !== 0?
					$div73/$div74:
					$p['op_div']($div73,$div74));
				if ((($bool170=$m['GChartUtil']['withinRange'](t, 0, 1)) === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
						false :
						(typeof $bool170=='object'?
							(typeof $bool170.__nonzero__=='function'?
								$bool170.__nonzero__() :
								(typeof $bool170.__len__=='function'?
									($bool170.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add139=xPieCenter)==typeof ($add140=(typeof ($mul103=(typeof ($mul101=t)==typeof ($mul102=pieRadius) && typeof $mul101=='number'?
						$mul101*$mul102:
						$p['op_mul']($mul101,$mul102)))==typeof ($mul104=$m['math']['cos'](pieEdgeAngle)) && typeof $mul103=='number'?
						$mul103*$mul104:
						$p['op_mul']($mul103,$mul104))) && (typeof $add139=='number'||typeof $add139=='string')?
						$add139+$add140:
						$p['op_add']($add139,$add140));
				}
			}
			return result;
		}
	, 1, [null,null,['self'],['yOfHorizontalLine'],['xPieCenter'],['yPieCenter'],['pieRadius'],['pieEdgeAngle']]);
		$cls_definition['xWherePieEdgeIntersectsHorizontalLine'] = $method;
		$method = $pyjs__bind_method2('angle', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $cmp111,$cmp108,$cmp109,$cmp106,$cmp107,$eq190,$cmp105,$cmp102,$cmp103,$cmp100,$cmp101,result,$and60,$cmp115,$bool180,$cmp114,$bool171,$bool172,$bool173,$bool174,$bool175,$bool176,$bool177,$bool178,$bool179,$sub144,$sub141,$sub142,$sub143,$add141,$div78,$div79,$div76,$div77,$div75,$cmp104,$eq189,$cmp110,$cmp113,$cmp112,$cmp99,$cmp98,$cmp116,$cmp97,$add142,$mul105,$mul106,$mul107,$mul108,$and58,$and59,$and56,$and57,$and54,$and55,$bool181,$and53,$div83,$div82,$div81,$div80,$div86,$div85,$div84;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool171=(($eq189=x)===($eq190=0)&&$eq189===null?true:
				($eq189===null?false:($eq190===null?false:
					((typeof $eq189=='object'||typeof $eq189=='function')&&typeof $eq189.__cmp__=='function'?$eq189.__cmp__($eq190) === 0:
						((typeof $eq190=='object'||typeof $eq190=='function')&&typeof $eq190.__cmp__=='function'?$eq190.__cmp__($eq189) === 0:
							$eq189==$eq190)))))) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
					false :
					(typeof $bool171=='object'?
						(typeof $bool171.__nonzero__=='function'?
							$bool171.__nonzero__() :
							(typeof $bool171.__len__=='function'?
								($bool171.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool172=((($cmp97=y)===($cmp98=0)?0:
					(typeof $cmp97==typeof $cmp98 && ((typeof $cmp97 == 'number')||(typeof $cmp97 == 'string')||(typeof $cmp97 == 'boolean'))?
						($cmp97 == $cmp98 ? 0 : ($cmp97 < $cmp98 ? -1 : 1)):
						$p['cmp']($cmp97, $cmp98))) == 1)) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
						false :
						(typeof $bool172=='object'?
							(typeof $bool172.__nonzero__=='function'?
								$bool172.__nonzero__() :
								(typeof $bool172.__len__=='function'?
									($bool172.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($div75=$p['getattr']($m['math'], 'pi'))==typeof ($div76=2.0) && typeof $div75=='number' && $div76 !== 0?
						$div75/$div76:
						$p['op_div']($div75,$div76));
				}
				else if ((($bool173=((($cmp99=y)===($cmp100=0)?0:
					(typeof $cmp99==typeof $cmp100 && ((typeof $cmp99 == 'number')||(typeof $cmp99 == 'string')||(typeof $cmp99 == 'boolean'))?
						($cmp99 == $cmp100 ? 0 : ($cmp99 < $cmp100 ? -1 : 1)):
						$p['cmp']($cmp99, $cmp100))) == -1)) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
						false :
						(typeof $bool173=='object'?
							(typeof $bool173.__nonzero__=='function'?
								$bool173.__nonzero__() :
								(typeof $bool173.__len__=='function'?
									($bool173.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($div77=(typeof ($mul105=3)==typeof ($mul106=$p['getattr']($m['math'], 'pi')) && typeof $mul105=='number'?
						$mul105*$mul106:
						$p['op_mul']($mul105,$mul106)))==typeof ($div78=2.0) && typeof $div77=='number' && $div78 !== 0?
						$div77/$div78:
						$p['op_div']($div77,$div78));
				}
			}
			else if ((($bool175=((($bool174=$and53=((($cmp101=x)===($cmp102=0)?0:
				(typeof $cmp101==typeof $cmp102 && ((typeof $cmp101 == 'number')||(typeof $cmp101 == 'string')||(typeof $cmp101 == 'boolean'))?
					($cmp101 == $cmp102 ? 0 : ($cmp101 < $cmp102 ? -1 : 1)):
					$p['cmp']($cmp101, $cmp102))) == 1)) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
				false :
				(typeof $bool174=='object'?
					(typeof $bool174.__nonzero__=='function'?
						$bool174.__nonzero__() :
						(typeof $bool174.__len__=='function'?
							($bool174.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp103=y)===($cmp104=0)?0:
				(typeof $cmp103==typeof $cmp104 && ((typeof $cmp103 == 'number')||(typeof $cmp103 == 'string')||(typeof $cmp103 == 'boolean'))?
					($cmp103 == $cmp104 ? 0 : ($cmp103 < $cmp104 ? -1 : 1)):
					$p['cmp']($cmp103, $cmp104))))|1) == 1):$and53)) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
					false :
					(typeof $bool175=='object'?
						(typeof $bool175.__nonzero__=='function'?
							$bool175.__nonzero__() :
							(typeof $bool175.__len__=='function'?
								($bool175.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = $m['math']['atan']((typeof ($div79=y)==typeof ($div80=x) && typeof $div79=='number' && $div80 !== 0?
					$div79/$div80:
					$p['op_div']($div79,$div80)));
			}
			else if ((($bool177=((($bool176=$and55=((($cmp105=x)===($cmp106=0)?0:
				(typeof $cmp105==typeof $cmp106 && ((typeof $cmp105 == 'number')||(typeof $cmp105 == 'string')||(typeof $cmp105 == 'boolean'))?
					($cmp105 == $cmp106 ? 0 : ($cmp105 < $cmp106 ? -1 : 1)):
					$p['cmp']($cmp105, $cmp106))) == -1)) === null || $bool176 === false || $bool176 === 0 || $bool176 === '' ?
				false :
				(typeof $bool176=='object'?
					(typeof $bool176.__nonzero__=='function'?
						$bool176.__nonzero__() :
						(typeof $bool176.__len__=='function'?
							($bool176.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp107=y)===($cmp108=0)?0:
				(typeof $cmp107==typeof $cmp108 && ((typeof $cmp107 == 'number')||(typeof $cmp107 == 'string')||(typeof $cmp107 == 'boolean'))?
					($cmp107 == $cmp108 ? 0 : ($cmp107 < $cmp108 ? -1 : 1)):
					$p['cmp']($cmp107, $cmp108))))|1) == 1):$and55)) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
					false :
					(typeof $bool177=='object'?
						(typeof $bool177.__nonzero__=='function'?
							$bool177.__nonzero__() :
							(typeof $bool177.__len__=='function'?
								($bool177.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($sub141=$p['getattr']($m['math'], 'pi'))==typeof ($sub142=$m['math']['atan']((typeof ($div81=(typeof ($usub5=y)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))==typeof ($div82=x) && typeof $div81=='number' && $div82 !== 0?
					$div81/$div82:
					$p['op_div']($div81,$div82)))) && (typeof $sub141=='number'||typeof $sub141=='string')?
					$sub141-$sub142:
					$p['op_sub']($sub141,$sub142));
			}
			else if ((($bool179=((($bool178=$and57=((($cmp109=x)===($cmp110=0)?0:
				(typeof $cmp109==typeof $cmp110 && ((typeof $cmp109 == 'number')||(typeof $cmp109 == 'string')||(typeof $cmp109 == 'boolean'))?
					($cmp109 == $cmp110 ? 0 : ($cmp109 < $cmp110 ? -1 : 1)):
					$p['cmp']($cmp109, $cmp110))) == -1)) === null || $bool178 === false || $bool178 === 0 || $bool178 === '' ?
				false :
				(typeof $bool178=='object'?
					(typeof $bool178.__nonzero__=='function'?
						$bool178.__nonzero__() :
						(typeof $bool178.__len__=='function'?
							($bool178.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp111=y)===($cmp112=0)?0:
				(typeof $cmp111==typeof $cmp112 && ((typeof $cmp111 == 'number')||(typeof $cmp111 == 'string')||(typeof $cmp111 == 'boolean'))?
					($cmp111 == $cmp112 ? 0 : ($cmp111 < $cmp112 ? -1 : 1)):
					$p['cmp']($cmp111, $cmp112))) == -1):$and57)) === null || $bool179 === false || $bool179 === 0 || $bool179 === '' ?
					false :
					(typeof $bool179=='object'?
						(typeof $bool179.__nonzero__=='function'?
							$bool179.__nonzero__() :
							(typeof $bool179.__len__=='function'?
								($bool179.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add141=$p['getattr']($m['math'], 'pi'))==typeof ($add142=$m['math']['atan']((typeof ($div83=y)==typeof ($div84=x) && typeof $div83=='number' && $div84 !== 0?
					$div83/$div84:
					$p['op_div']($div83,$div84)))) && (typeof $add141=='number'||typeof $add141=='string')?
					$add141+$add142:
					$p['op_add']($add141,$add142));
			}
			else if ((($bool181=((($bool180=$and59=((($cmp113=x)===($cmp114=0)?0:
				(typeof $cmp113==typeof $cmp114 && ((typeof $cmp113 == 'number')||(typeof $cmp113 == 'string')||(typeof $cmp113 == 'boolean'))?
					($cmp113 == $cmp114 ? 0 : ($cmp113 < $cmp114 ? -1 : 1)):
					$p['cmp']($cmp113, $cmp114))) == 1)) === null || $bool180 === false || $bool180 === 0 || $bool180 === '' ?
				false :
				(typeof $bool180=='object'?
					(typeof $bool180.__nonzero__=='function'?
						$bool180.__nonzero__() :
						(typeof $bool180.__len__=='function'?
							($bool180.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp115=y)===($cmp116=0)?0:
				(typeof $cmp115==typeof $cmp116 && ((typeof $cmp115 == 'number')||(typeof $cmp115 == 'string')||(typeof $cmp115 == 'boolean'))?
					($cmp115 == $cmp116 ? 0 : ($cmp115 < $cmp116 ? -1 : 1)):
					$p['cmp']($cmp115, $cmp116))) == -1):$and59)) === null || $bool181 === false || $bool181 === 0 || $bool181 === '' ?
					false :
					(typeof $bool181=='object'?
						(typeof $bool181.__nonzero__=='function'?
							$bool181.__nonzero__() :
							(typeof $bool181.__len__=='function'?
								($bool181.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($sub143=(typeof ($mul107=2)==typeof ($mul108=$p['getattr']($m['math'], 'pi')) && typeof $mul107=='number'?
					$mul107*$mul108:
					$p['op_mul']($mul107,$mul108)))==typeof ($sub144=$m['math']['atan']((typeof ($div85=(typeof ($usub6=y)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))==typeof ($div86=x) && typeof $div85=='number' && $div86 !== 0?
					$div85/$div86:
					$p['op_div']($div85,$div86)))) && (typeof $sub143=='number'||typeof $sub143=='string')?
					$sub143-$sub144:
					$p['op_sub']($sub143,$sub144));
			}
			return result;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['angle'] = $method;
		$method = $pyjs__bind_method2('angleInRange', function(angle, theta0, theta1) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
				theta0 = arguments[2];
				theta1 = arguments[3];
			}
			var $cmp117,$sub146,$cmp119,$cmp118,$bool183,$bool182,$sub145,result,$mul110,$cmp120,$mul109;
			if ((($bool182=((($cmp117=theta0)===($cmp118=theta1)?0:
				(typeof $cmp117==typeof $cmp118 && ((typeof $cmp117 == 'number')||(typeof $cmp117 == 'string')||(typeof $cmp117 == 'boolean'))?
					($cmp117 == $cmp118 ? 0 : ($cmp117 < $cmp118 ? -1 : 1)):
					$p['cmp']($cmp117, $cmp118))) == 1)) === null || $bool182 === false || $bool182 === 0 || $bool182 === '' ?
					false :
					(typeof $bool182=='object'?
						(typeof $bool182.__nonzero__=='function'?
							$bool182.__nonzero__() :
							(typeof $bool182.__len__=='function'?
								($bool182.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['angleInRange'](angle, theta1, theta0);
			}
			while ((($bool183=((($cmp119=angle)===($cmp120=theta1)?0:
				(typeof $cmp119==typeof $cmp120 && ((typeof $cmp119 == 'number')||(typeof $cmp119 == 'string')||(typeof $cmp119 == 'boolean'))?
					($cmp119 == $cmp120 ? 0 : ($cmp119 < $cmp120 ? -1 : 1)):
					$p['cmp']($cmp119, $cmp120))) == 1)) === null || $bool183 === false || $bool183 === 0 || $bool183 === '' ?
					false :
					(typeof $bool183=='object'?
						(typeof $bool183.__nonzero__=='function'?
							$bool183.__nonzero__() :
							(typeof $bool183.__len__=='function'?
								($bool183.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				angle = (typeof ($sub145=angle)==typeof ($sub146=(typeof ($mul109=2)==typeof ($mul110=$p['getattr']($m['math'], 'pi')) && typeof $mul109=='number'?
					$mul109*$mul110:
					$p['op_mul']($mul109,$mul110))) && (typeof $sub145=='number'||typeof $sub145=='string')?
					$sub145-$sub146:
					$p['op_sub']($sub145,$sub146));
			}
			result = $m['GChartUtil']['withinRange'](angle, theta0, theta1);
			return result;
		}
	, 1, [null,null,['self'],['angle'],['theta0'],['theta1']]);
		$cls_definition['angleInRange'] = $method;
		$method = $pyjs__bind_method2('getCenterX', function(pp, symbol, iPoint) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				iPoint = arguments[3];
			}
			var p,result;
			p = symbol['getParent']()['getPoint'](iPoint);
			result = pp['xToPixel'](p['getX']());
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['iPoint']]);
		$cls_definition['getCenterX'] = $method;
		$method = $pyjs__bind_method2('getCenterY', function(pp, symbol, iPoint, onY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				iPoint = arguments[3];
				onY2 = arguments[4];
			}
			var p,result;
			p = symbol['getParent']()['getPoint'](iPoint);
			result = pp['yToPixel'](p['getY'](), onY2);
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['iPoint'],['onY2']]);
		$cls_definition['getCenterY'] = $method;
		$method = $pyjs__bind_method2('isIntersecting', function(pp, symbol, iPoint, onY2, xBrush, yBrush, brushWidth, brushHeight) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				symbol = arguments[2];
				iPoint = arguments[3];
				onY2 = arguments[4];
				xBrush = arguments[5];
				yBrush = arguments[6];
				brushWidth = arguments[7];
				brushHeight = arguments[8];
			}
			var $cmp124,$cmp125,$cmp126,$sub154,$cmp121,$cmp122,$cmp123,thetaMax,$mul117,$mul116,$mul115,$mul114,$mul113,result,$mul111,angle,$mul119,$mul118,thetaMin,$and63,$sub148,$sub149,$mul122,$sub147,minDTheta,$add145,$add144,$add147,$add146,$add143,$add149,yPx,$or32,$and62,$add150,xPx,dx,dy,rSquared,rPiePlus,$mul120,$mul121,$bool188,$and61,$bool185,$bool184,$bool187,$bool186,$sub153,$sub152,$sub151,$sub150,p,$or31,$and64,$div87,$add148,y,x,$div88,thetaMid,$mul112;
			result = false;
			p = symbol['getParent']()['getPoint'](iPoint);
			x = p['getX']();
			y = p['getY']();
			xPx = pp['xToPixel'](x);
			yPx = pp['yToPixel'](y, onY2);
			dx = (typeof ($sub147=xBrush)==typeof ($sub148=xPx) && (typeof $sub147=='number'||typeof $sub147=='string')?
				$sub147-$sub148:
				$p['op_sub']($sub147,$sub148));
			dy = (typeof ($usub7=(typeof ($sub149=yBrush)==typeof ($sub150=yPx) && (typeof $sub149=='number'||typeof $sub149=='string')?
				$sub149-$sub150:
				$p['op_sub']($sub149,$sub150)))=='number'?
				-$usub7:
				$p['op_usub']($usub7));
			rSquared = (typeof ($add143=(typeof ($mul111=dx)==typeof ($mul112=dx) && typeof $mul111=='number'?
				$mul111*$mul112:
				$p['op_mul']($mul111,$mul112)))==typeof ($add144=(typeof ($mul113=dy)==typeof ($mul114=dy) && typeof $mul113=='number'?
				$mul113*$mul114:
				$p['op_mul']($mul113,$mul114))) && (typeof $add143=='number'||typeof $add143=='string')?
				$add143+$add144:
				$p['op_add']($add143,$add144));
			angle = self['angle'](dx, dy);
			thetaMax = symbol['getPieSliceTheta0']();
			thetaMin = symbol['getPieSliceTheta1']();
			rPiePlus = (typeof ($add145=symbol['getPieSliceRadius'](pp, onY2))==typeof ($add146=(typeof ($mul115=0.5)==typeof ($mul116=$p['max'](brushWidth, brushHeight)) && typeof $mul115=='number'?
				$mul115*$mul116:
				$p['op_mul']($mul115,$mul116))) && (typeof $add145=='number'||typeof $add145=='string')?
				$add145+$add146:
				$p['op_add']($add145,$add146));
			minDTheta = ((($bool185=$or31=((($bool184=$and61=((($cmp121=rPiePlus)===($cmp122=1)?0:
				(typeof $cmp121==typeof $cmp122 && ((typeof $cmp121 == 'number')||(typeof $cmp121 == 'string')||(typeof $cmp121 == 'boolean'))?
					($cmp121 == $cmp122 ? 0 : ($cmp121 < $cmp122 ? -1 : 1)):
					$p['cmp']($cmp121, $cmp122))) == -1)) === null || $bool184 === false || $bool184 === 0 || $bool184 === '' ?
				false :
				(typeof $bool184=='object'?
					(typeof $bool184.__nonzero__=='function'?
						$bool184.__nonzero__() :
						(typeof $bool184.__len__=='function'?
							($bool184.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?1.0:$and61)) === null || $bool185 === false || $bool185 === 0 || $bool185 === '' ?
				false :
				(typeof $bool185=='object'?
					(typeof $bool185.__nonzero__=='function'?
						$bool185.__nonzero__() :
						(typeof $bool185.__len__=='function'?
							($bool185.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or31:(typeof ($div87=1.0)==typeof ($div88=rPiePlus) && typeof $div87=='number' && $div88 !== 0?
				$div87/$div88:
				$p['op_div']($div87,$div88)));
			if ((($bool186=((($cmp123=(typeof ($sub151=thetaMax)==typeof ($sub152=thetaMin) && (typeof $sub151=='number'||typeof $sub151=='string')?
				$sub151-$sub152:
				$p['op_sub']($sub151,$sub152)))===($cmp124=(typeof ($mul117=2)==typeof ($mul118=minDTheta) && typeof $mul117=='number'?
				$mul117*$mul118:
				$p['op_mul']($mul117,$mul118)))?0:
				(typeof $cmp123==typeof $cmp124 && ((typeof $cmp123 == 'number')||(typeof $cmp123 == 'string')||(typeof $cmp123 == 'boolean'))?
					($cmp123 == $cmp124 ? 0 : ($cmp123 < $cmp124 ? -1 : 1)):
					$p['cmp']($cmp123, $cmp124))) == -1)) === null || $bool186 === false || $bool186 === 0 || $bool186 === '' ?
					false :
					(typeof $bool186=='object'?
						(typeof $bool186.__nonzero__=='function'?
							$bool186.__nonzero__() :
							(typeof $bool186.__len__=='function'?
								($bool186.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thetaMid = (typeof ($mul119=0.5)==typeof ($mul120=(typeof ($add147=thetaMax)==typeof ($add148=thetaMin) && (typeof $add147=='number'||typeof $add147=='string')?
					$add147+$add148:
					$p['op_add']($add147,$add148))) && typeof $mul119=='number'?
					$mul119*$mul120:
					$p['op_mul']($mul119,$mul120));
				thetaMin = (typeof ($sub153=thetaMid)==typeof ($sub154=minDTheta) && (typeof $sub153=='number'||typeof $sub153=='string')?
					$sub153-$sub154:
					$p['op_sub']($sub153,$sub154));
				thetaMax = (typeof ($add149=thetaMid)==typeof ($add150=minDTheta) && (typeof $add149=='number'||typeof $add149=='string')?
					$add149+$add150:
					$p['op_add']($add149,$add150));
			}
			if ((($bool188=((($bool187=$and63=((($cmp125=rSquared)===($cmp126=(typeof ($mul121=rPiePlus)==typeof ($mul122=rPiePlus) && typeof $mul121=='number'?
				$mul121*$mul122:
				$p['op_mul']($mul121,$mul122)))?0:
				(typeof $cmp125==typeof $cmp126 && ((typeof $cmp125 == 'number')||(typeof $cmp125 == 'string')||(typeof $cmp125 == 'boolean'))?
					($cmp125 == $cmp126 ? 0 : ($cmp125 < $cmp126 ? -1 : 1)):
					$p['cmp']($cmp125, $cmp126))) < 1)) === null || $bool187 === false || $bool187 === 0 || $bool187 === '' ?
				false :
				(typeof $bool187=='object'?
					(typeof $bool187.__nonzero__=='function'?
						$bool187.__nonzero__() :
						(typeof $bool187.__len__=='function'?
							($bool187.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['angleInRange'](angle, thetaMin, thetaMax):$and63)) === null || $bool188 === false || $bool188 === 0 || $bool188 === '' ?
					false :
					(typeof $bool188=='object'?
						(typeof $bool188.__nonzero__=='function'?
							$bool188.__nonzero__() :
							(typeof $bool188.__len__=='function'?
								($bool188.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = true;
			}
			return result;
		}
	, 1, [null,null,['self'],['pp'],['symbol'],['iPoint'],['onY2'],['xBrush'],['yBrush'],['brushWidth'],['brushHeight']]);
		$cls_definition['isIntersecting'] = $method;
		$method = $pyjs__bind_method2('realizeSymbol', function(pp, grp, arp, symbol, annotation, onY2, clipPlotArea, clipDecoratedChart, drawMainSymbol, x, y, prevX, prevY, nextX, nextY) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pp = arguments[1];
				grp = arguments[2];
				arp = arguments[3];
				symbol = arguments[4];
				annotation = arguments[5];
				onY2 = arguments[6];
				clipPlotArea = arguments[7];
				clipDecoratedChart = arguments[8];
				drawMainSymbol = arguments[9];
				x = arguments[10];
				y = arguments[11];
				prevX = arguments[12];
				prevY = arguments[13];
				nextX = arguments[14];
				nextY = arguments[15];
			}
			var $mul171,$mul170,$mul172,$iter4_type,$iter7_type,yAxisWidth,$iter7_nextval,$or46,$sub254,p,$sub250,$sub251,$sub252,$sub253,dxPx,$bool208,$bool209,$bool206,$bool207,$bool204,$bool205,$bool202,$bool203,$bool200,thickness,backgroundColor,$add211,optimalIsVertical,cosTheta,MAX_DTHETA,spacing,$div89,$sub179,$sub178,$sub171,$sub170,$sub173,$sub172,$sub175,$sub174,$sub177,$sub176,$eq233,$eq232,$eq231,$eq230,$eq236,$eq235,$eq234,angleEnd,$iter4_iter,$20,$iter7_iter,nextYPx,$mul128,$mul129,$mul126,$mul127,$mul124,$mul125,$mul123,$bool248,$sub218,$sub219,nBands,$sub210,$sub211,$sub212,$sub213,$sub214,$sub215,$sub216,$sub217,$and67,$and66,$and65,$bool249,$bool242,$bool243,$bool240,$sub198,$bool246,$bool247,$and69,$and68,$bool241,$bool244,$bool245,$add161,$eq208,$eq209,$eq202,$eq203,$eq200,$eq201,$eq206,$eq207,$eq204,$eq205,$add164,$iter7_array,sl,$and90,$and91,angleStart,$add189,$add188,$add181,$add180,$add183,$add182,$add185,$add184,$add187,$add186,yi,$mul163,$mul160,$mul161,$mul166,$mul167,$mul164,$mul165,$mul168,$mul169,$add190,$add191,dTheta,canvas,prevXPx,$div97,e1,e2,$bool211,$bool210,$bool213,$bool212,$bool215,$bool214,$bool217,$bool216,$bool219,$bool218,$add210,$add208,$add209,$add202,$add203,$add200,$add201,$add206,$add207,$add204,$add205,xi,MAX_PIE_SLICE_PERIMETER_INTERSECTIONS,$sub166,$sub167,$sub164,$sub165,$sub162,$sub163,$sub160,$sub161,$sub168,$sub169,borderColor,$cmp155,$div95,$cmp157,nextXPx,$div94,$cmp154,$div96,$cmp156,$cmp151,$cmp150,$cmp153,$div93,$div90,$div98,$cmp158,$div91,$div92,$cmp152,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,$add152,$add153,$sub199,r,$add156,$add157,$add154,$add155,$sub193,$sub192,$sub191,$sub190,$sub197,$sub196,$sub195,$sub194,$mul159,$mul158,$mul153,$mul152,$mul151,$mul150,$mul157,$mul156,$mul155,$mul154,$sub225,$sub224,$sub227,$sub226,$sub221,$sub220,$sub223,$sub222,$sub229,$sub228,prevYPx,$bool259,$bool258,$iter7_idx,$bool255,$bool254,$bool257,$bool256,$bool251,$bool250,$bool253,$bool252,$iter4_idx,$eq219,$eq218,$eq211,$eq210,$eq213,$eq212,$eq215,$eq214,$eq217,$eq216,$bool201,$bool228,$bool229,$bool220,$bool221,$bool222,$bool223,$bool224,$bool225,$bool226,$bool227,$and89,$and88,$iter5_idx,$and81,$and80,$and83,$and82,$and85,$and84,$and87,$and86,$add169,$add168,$add163,$add162,yPx,$add160,$add167,$add166,$add165,EPS,$iter6_array,$add196,$add197,$add194,$add195,$add192,$add193,$sub159,$sub158,$sub157,$sub156,$sub155,$add198,$add199,borderWidth,dX,dY,$add212,$iter5_nextval,j,$iter6_iter,adjustedBorderWidth,$add151,$iter6_idx,$add158,$add159,theta0,theta1,$iter5_type,$bool260,$iter4_nextval,$cmp137,$cmp136,$cmp135,$cmp134,$cmp133,$cmp132,$cmp131,$cmp130,$cmp139,$cmp138,c2,c1,$cmp142,$cmp143,$cmp140,$cmp141,$cmp146,$cmp147,$cmp144,$cmp145,$cmp148,$cmp149,$mul162,$bool198,$bool199,$bool192,$bool193,$bool190,$bool191,$bool196,$bool197,$bool194,$bool195,$sub188,$sub189,sinTheta,isFullPie,$sub180,$sub181,$sub182,$sub183,$sub184,$sub185,$sub186,$sub187,$mul148,$mul149,$mul140,$mul141,$mul142,$mul143,$mul144,$mul145,$mul146,$mul147,$sub232,$sub233,$sub230,$sub231,$sub236,$sub237,$sub234,$sub235,i,$sub238,$sub239,$eq198,$eq199,$eq192,$eq193,$eq191,$eq196,$eq197,$eq194,$eq195,$sub247,$sub246,$sub245,$sub244,$sub243,$sub242,$sub241,$sub240,$sub249,$sub248,$bool239,$bool238,$bool233,$bool232,$bool231,$bool230,$bool237,$bool236,$bool235,$bool234,titleThickness,$add178,$add179,$add170,$add171,$add172,$add173,$add174,$add175,$add176,$add177,thetaMid,$eq224,$eq225,$eq226,$eq227,$eq220,$eq221,$eq222,$eq223,$or42,$or43,$or40,$or41,$eq228,$eq229,$or44,$or45,$iter6_type,$mul131,$mul130,$mul133,$mul132,$mul135,$mul134,$mul137,$mul136,$mul139,$mul138,loc,$sub209,$sub208,$iter5_array,$sub203,$sub202,$sub201,$sub200,$sub207,$sub206,$sub205,$sub204,$and78,$and79,$and70,$and71,$and72,$and73,$and74,$and75,$and76,$and77,dyPx,$iter4_array,MIN_DTHETA,$cmp127,$cmp128,$cmp129,$iter5_iter,nP,$iter6_nextval,xPx,$bool189,$or33,$or37,$or36,$or35,$or34,$or39,$or38;
			if ((($bool190=!(($bool189=drawMainSymbol) === null || $bool189 === false || $bool189 === 0 || $bool189 === '' ?
				false :
				(typeof $bool189=='object'?
					(typeof $bool189.__nonzero__=='function'?
						$bool189.__nonzero__() :
						(typeof $bool189.__len__=='function'?
							($bool189.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool190 === false || $bool190 === 0 || $bool190 === '' ?
					false :
					(typeof $bool190=='object'?
						(typeof $bool190.__nonzero__=='function'?
							$bool190.__nonzero__() :
							(typeof $bool190.__len__=='function'?
								($bool190.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			xPx = pp['xToPixel'](x);
			yPx = pp['yToPixel'](y, onY2);
			spacing = symbol['getFillSpacing']();
			thickness = symbol['getFillThickness']();
			r = symbol['getPieSliceRadius'](pp, onY2);
			theta0 = symbol['getPieSliceTheta0']();
			theta1 = symbol['getPieSliceTheta1']();
			canvas = grp['getCanvas']();
			if ((($bool192=((($bool191=$or33=(($eq191=$p['getattr']($m['Double'], 'NaN'))===($eq192=xPx)&&$eq191===null?true:
				($eq191===null?false:($eq192===null?false:
					((typeof $eq191=='object'||typeof $eq191=='function')&&typeof $eq191.__cmp__=='function'?$eq191.__cmp__($eq192) === 0:
						((typeof $eq192=='object'||typeof $eq192=='function')&&typeof $eq192.__cmp__=='function'?$eq192.__cmp__($eq191) === 0:
							$eq191==$eq192)))))) === null || $bool191 === false || $bool191 === 0 || $bool191 === '' ?
				false :
				(typeof $bool191=='object'?
					(typeof $bool191.__nonzero__=='function'?
						$bool191.__nonzero__() :
						(typeof $bool191.__len__=='function'?
							($bool191.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or33:(($eq193=$p['getattr']($m['Double'], 'NaN'))===($eq194=yPx)&&$eq193===null?true:
				($eq193===null?false:($eq194===null?false:
					((typeof $eq193=='object'||typeof $eq193=='function')&&typeof $eq193.__cmp__=='function'?$eq193.__cmp__($eq194) === 0:
						((typeof $eq194=='object'||typeof $eq194=='function')&&typeof $eq194.__cmp__=='function'?$eq194.__cmp__($eq193) === 0:
							$eq193==$eq194))))))) === null || $bool192 === false || $bool192 === 0 || $bool192 === '' ?
					false :
					(typeof $bool192=='object'?
						(typeof $bool192.__nonzero__=='function'?
							$bool192.__nonzero__() :
							(typeof $bool192.__len__=='function'?
								($bool192.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			else if ((($bool195=((($bool193=$and65=clipPlotArea) === null || $bool193 === false || $bool193 === 0 || $bool193 === '' ?
				false :
				(typeof $bool193=='object'?
					(typeof $bool193.__nonzero__=='function'?
						$bool193.__nonzero__() :
						(typeof $bool193.__len__=='function'?
							($bool193.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool194=self['intersects']((typeof ($sub155=xPx)==typeof ($sub156=r) && (typeof $sub155=='number'||typeof $sub155=='string')?
				$sub155-$sub156:
				$p['op_sub']($sub155,$sub156)), (typeof ($sub157=yPx)==typeof ($sub158=r) && (typeof $sub157=='number'||typeof $sub157=='string')?
				$sub157-$sub158:
				$p['op_sub']($sub157,$sub158)), (typeof ($add151=xPx)==typeof ($add152=r) && (typeof $add151=='number'||typeof $add151=='string')?
				$add151+$add152:
				$p['op_add']($add151,$add152)), (typeof ($add153=yPx)==typeof ($add154=r) && (typeof $add153=='number'||typeof $add153=='string')?
				$add153+$add154:
				$p['op_add']($add153,$add154)), 0, 0, pp['getXChartSize'](), pp['getYChartSize']())) === null || $bool194 === false || $bool194 === 0 || $bool194 === '' ?
				false :
				(typeof $bool194=='object'?
					(typeof $bool194.__nonzero__=='function'?
						$bool194.__nonzero__() :
						(typeof $bool194.__len__=='function'?
							($bool194.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and65)) === null || $bool195 === false || $bool195 === 0 || $bool195 === '' ?
					false :
					(typeof $bool195=='object'?
						(typeof $bool195.__nonzero__=='function'?
							$bool195.__nonzero__() :
							(typeof $bool195.__len__=='function'?
								($bool195.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			else if ((($bool196=clipDecoratedChart) === null || $bool196 === false || $bool196 === 0 || $bool196 === '' ?
					false :
					(typeof $bool196=='object'?
						(typeof $bool196.__nonzero__=='function'?
							$bool196.__nonzero__() :
							(typeof $bool196.__len__=='function'?
								($bool196.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				yAxisWidth = pp['getYAxisEnsembleWidth']();
				titleThickness = pp['chartTitleThickness']();
				if ((($bool198=!(($bool197=$m['SymbolType']['intersects'](self, (typeof ($sub159=0.0)==typeof ($sub160=yAxisWidth) && (typeof $sub159=='number'||typeof $sub159=='string')?
					$sub159-$sub160:
					$p['op_sub']($sub159,$sub160)), (typeof ($sub161=0.0)==typeof ($sub162=titleThickness) && (typeof $sub161=='number'||typeof $sub161=='string')?
					$sub161-$sub162:
					$p['op_sub']($sub161,$sub162)), (typeof ($sub163=pp['getXChartSizeDecoratedQuickly']())==typeof ($sub164=yAxisWidth) && (typeof $sub163=='number'||typeof $sub163=='string')?
					$sub163-$sub164:
					$p['op_sub']($sub163,$sub164)), (typeof ($sub165=pp['getYChartSizeDecoratedQuickly']())==typeof ($sub166=titleThickness) && (typeof $sub165=='number'||typeof $sub165=='string')?
					$sub165-$sub166:
					$p['op_sub']($sub165,$sub166)), (typeof ($sub167=xPx)==typeof ($sub168=r) && (typeof $sub167=='number'||typeof $sub167=='string')?
					$sub167-$sub168:
					$p['op_sub']($sub167,$sub168)), (typeof ($sub169=yPx)==typeof ($sub170=r) && (typeof $sub169=='number'||typeof $sub169=='string')?
					$sub169-$sub170:
					$p['op_sub']($sub169,$sub170)), (typeof ($add155=xPx)==typeof ($add156=r) && (typeof $add155=='number'||typeof $add155=='string')?
					$add155+$add156:
					$p['op_add']($add155,$add156)), (typeof ($add157=yPx)==typeof ($add158=r) && (typeof $add157=='number'||typeof $add157=='string')?
					$add157+$add158:
					$p['op_add']($add157,$add158)))) === null || $bool197 === false || $bool197 === 0 || $bool197 === '' ?
					false :
					(typeof $bool197=='object'?
						(typeof $bool197.__nonzero__=='function'?
							$bool197.__nonzero__() :
							(typeof $bool197.__len__=='function'?
								($bool197.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool198 === false || $bool198 === 0 || $bool198 === '' ?
						false :
						(typeof $bool198=='object'?
							(typeof $bool198.__nonzero__=='function'?
								$bool198.__nonzero__() :
								(typeof $bool198.__len__=='function'?
									($bool198.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
			}
			if ((($bool201=((($bool199=$and67=(($eq195=0)===($eq196=spacing)&&$eq195===null?true:
				($eq195===null?false:($eq196===null?false:
					((typeof $eq195=='object'||typeof $eq195=='function')&&typeof $eq195.__cmp__=='function'?$eq195.__cmp__($eq196) === 0:
						((typeof $eq196=='object'||typeof $eq196=='function')&&typeof $eq196.__cmp__=='function'?$eq196.__cmp__($eq195) === 0:
							$eq195==$eq196)))))) === null || $bool199 === false || $bool199 === 0 || $bool199 === '' ?
				false :
				(typeof $bool199=='object'?
					(typeof $bool199.__nonzero__=='function'?
						$bool199.__nonzero__() :
						(typeof $bool199.__len__=='function'?
							($bool199.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool200=$and68=!(($eq197=null)===($eq198=canvas)&&$eq197===null?true:
				($eq197===null?false:($eq198===null?false:
					((typeof $eq197=='object'||typeof $eq197=='function')&&typeof $eq197.__cmp__=='function'?$eq197.__cmp__($eq198) === 0:
						((typeof $eq198=='object'||typeof $eq198=='function')&&typeof $eq198.__cmp__=='function'?$eq198.__cmp__($eq197) === 0:
							$eq197==$eq198)))))) === null || $bool200 === false || $bool200 === 0 || $bool200 === '' ?
				false :
				(typeof $bool200=='object'?
					(typeof $bool200.__nonzero__=='function'?
						$bool200.__nonzero__() :
						(typeof $bool200.__len__=='function'?
							($bool200.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp127=thickness)===($cmp128=0)?0:
				(typeof $cmp127==typeof $cmp128 && ((typeof $cmp127 == 'number')||(typeof $cmp127 == 'string')||(typeof $cmp127 == 'boolean'))?
					($cmp127 == $cmp128 ? 0 : ($cmp127 < $cmp128 ? -1 : 1)):
					$p['cmp']($cmp127, $cmp128))) == 1):$and68):$and67)) === null || $bool201 === false || $bool201 === 0 || $bool201 === '' ?
					false :
					(typeof $bool201=='object'?
						(typeof $bool201.__nonzero__=='function'?
							$bool201.__nonzero__() :
							(typeof $bool201.__len__=='function'?
								($bool201.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				borderWidth = symbol['getBorderWidth']();
				if ((($bool202=((((($cmp129=borderWidth)===($cmp130=0)?0:
					(typeof $cmp129==typeof $cmp130 && ((typeof $cmp129 == 'number')||(typeof $cmp129 == 'string')||(typeof $cmp129 == 'boolean'))?
						($cmp129 == $cmp130 ? 0 : ($cmp129 < $cmp130 ? -1 : 1)):
						$p['cmp']($cmp129, $cmp130))))|1) == 1)) === null || $bool202 === false || $bool202 === 0 || $bool202 === '' ?
						false :
						(typeof $bool202=='object'?
							(typeof $bool202.__nonzero__=='function'?
								$bool202.__nonzero__() :
								(typeof $bool202.__len__=='function'?
									($bool202.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					adjustedBorderWidth = borderWidth;
				}
				else {
					adjustedBorderWidth = (typeof ($mul123=2)==typeof ($mul124=$p['abs'](borderWidth)) && typeof $mul123=='number'?
						$mul123*$mul124:
						$p['op_mul']($mul123,$mul124));
				}
				MIN_DTHETA = (typeof ($div89=1.0)==typeof ($div90=1000) && typeof $div89=='number' && $div90 !== 0?
					$div89/$div90:
					$p['op_div']($div89,$div90));
				MAX_DTHETA = (typeof ($sub171=(typeof ($mul125=2)==typeof ($mul126=$p['getattr']($m['math'], 'pi')) && typeof $mul125=='number'?
					$mul125*$mul126:
					$p['op_mul']($mul125,$mul126)))==typeof ($sub172=MIN_DTHETA) && (typeof $sub171=='number'||typeof $sub171=='string')?
					$sub171-$sub172:
					$p['op_sub']($sub171,$sub172));
				dTheta = (typeof ($sub173=theta0)==typeof ($sub174=theta1) && (typeof $sub173=='number'||typeof $sub173=='string')?
					$sub173-$sub174:
					$p['op_sub']($sub173,$sub174));
				angleStart = (typeof ($sub175=(typeof ($mul127=2)==typeof ($mul128=$p['getattr']($m['math'], 'pi')) && typeof $mul127=='number'?
					$mul127*$mul128:
					$p['op_mul']($mul127,$mul128)))==typeof ($sub176=theta0) && (typeof $sub175=='number'||typeof $sub175=='string')?
					$sub175-$sub176:
					$p['op_sub']($sub175,$sub176));
				angleEnd = (typeof ($add159=angleStart)==typeof ($add160=$p['max'](MIN_DTHETA, $p['min'](dTheta, MAX_DTHETA))) && (typeof $add159=='number'||typeof $add159=='string')?
					$add159+$add160:
					$p['op_add']($add159,$add160));
				if ((($bool204=((($bool203=$or35=((((($cmp131=dTheta)===($cmp132=MIN_DTHETA)?0:
					(typeof $cmp131==typeof $cmp132 && ((typeof $cmp131 == 'number')||(typeof $cmp131 == 'string')||(typeof $cmp131 == 'boolean'))?
						($cmp131 == $cmp132 ? 0 : ($cmp131 < $cmp132 ? -1 : 1)):
						$p['cmp']($cmp131, $cmp132))))|1) == 1)) === null || $bool203 === false || $bool203 === 0 || $bool203 === '' ?
					false :
					(typeof $bool203=='object'?
						(typeof $bool203.__nonzero__=='function'?
							$bool203.__nonzero__() :
							(typeof $bool203.__len__=='function'?
								($bool203.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or35:((($cmp133=borderWidth)===($cmp134=0)?0:
					(typeof $cmp133==typeof $cmp134 && ((typeof $cmp133 == 'number')||(typeof $cmp133 == 'string')||(typeof $cmp133 == 'boolean'))?
						($cmp133 == $cmp134 ? 0 : ($cmp133 < $cmp134 ? -1 : 1)):
						$p['cmp']($cmp133, $cmp134))) == -1))) === null || $bool204 === false || $bool204 === 0 || $bool204 === '' ?
						false :
						(typeof $bool204=='object'?
							(typeof $bool204.__nonzero__=='function'?
								$bool204.__nonzero__() :
								(typeof $bool204.__len__=='function'?
									($bool204.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					canvas['beginPath']();
					canvas['setLineWidth'](adjustedBorderWidth);
					canvas['arc']((typeof ($sub177=xPx)==typeof ($sub178=$p['getattr'](grp, 'x0')) && (typeof $sub177=='number'||typeof $sub177=='string')?
						$sub177-$sub178:
						$p['op_sub']($sub177,$sub178)), (typeof ($sub179=yPx)==typeof ($sub180=$p['getattr'](grp, 'y0')) && (typeof $sub179=='number'||typeof $sub179=='string')?
						$sub179-$sub180:
						$p['op_sub']($sub179,$sub180)), r, angleStart, angleEnd, false);
					if ((($bool205=((($cmp135=dTheta)===($cmp136=MAX_DTHETA)?0:
						(typeof $cmp135==typeof $cmp136 && ((typeof $cmp135 == 'number')||(typeof $cmp135 == 'string')||(typeof $cmp135 == 'boolean'))?
							($cmp135 == $cmp136 ? 0 : ($cmp135 < $cmp136 ? -1 : 1)):
							$p['cmp']($cmp135, $cmp136))) < 1)) === null || $bool205 === false || $bool205 === 0 || $bool205 === '' ?
							false :
							(typeof $bool205=='object'?
								(typeof $bool205.__nonzero__=='function'?
									$bool205.__nonzero__() :
									(typeof $bool205.__len__=='function'?
										($bool205.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						canvas['lineTo']((typeof ($sub181=xPx)==typeof ($sub182=$p['getattr'](grp, 'x0')) && (typeof $sub181=='number'||typeof $sub181=='string')?
							$sub181-$sub182:
							$p['op_sub']($sub181,$sub182)), (typeof ($sub183=yPx)==typeof ($sub184=$p['getattr'](grp, 'y0')) && (typeof $sub183=='number'||typeof $sub183=='string')?
							$sub183-$sub184:
							$p['op_sub']($sub183,$sub184)));
					}
					canvas['closePath']();
					borderColor = symbol['getBorderColor']();
					backgroundColor = symbol['getBackgroundColor']();
					if ((($bool209=((($bool206=$and70=((((($cmp137=borderWidth)===($cmp138=0)?0:
						(typeof $cmp137==typeof $cmp138 && ((typeof $cmp137 == 'number')||(typeof $cmp137 == 'string')||(typeof $cmp137 == 'boolean'))?
							($cmp137 == $cmp138 ? 0 : ($cmp137 < $cmp138 ? -1 : 1)):
							$p['cmp']($cmp137, $cmp138))))|1) == 1)) === null || $bool206 === false || $bool206 === 0 || $bool206 === '' ?
						false :
						(typeof $bool206=='object'?
							(typeof $bool206.__nonzero__=='function'?
								$bool206.__nonzero__() :
								(typeof $bool206.__len__=='function'?
									($bool206.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool207=$and71=((($cmp139=thickness)===($cmp140=0)?0:
						(typeof $cmp139==typeof $cmp140 && ((typeof $cmp139 == 'number')||(typeof $cmp139 == 'string')||(typeof $cmp139 == 'boolean'))?
							($cmp139 == $cmp140 ? 0 : ($cmp139 < $cmp140 ? -1 : 1)):
							$p['cmp']($cmp139, $cmp140))) == 1)) === null || $bool207 === false || $bool207 === 0 || $bool207 === '' ?
						false :
						(typeof $bool207=='object'?
							(typeof $bool207.__nonzero__=='function'?
								$bool207.__nonzero__() :
								(typeof $bool207.__len__=='function'?
									($bool207.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool208=$and72=!(($eq199=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq200=backgroundColor)&&$eq199===null?true:
						($eq199===null?false:($eq200===null?false:
							((typeof $eq199=='object'||typeof $eq199=='function')&&typeof $eq199.__cmp__=='function'?$eq199.__cmp__($eq200) === 0:
								((typeof $eq200=='object'||typeof $eq200=='function')&&typeof $eq200.__cmp__=='function'?$eq200.__cmp__($eq199) === 0:
									$eq199==$eq200)))))) === null || $bool208 === false || $bool208 === 0 || $bool208 === '' ?
						false :
						(typeof $bool208=='object'?
							(typeof $bool208.__nonzero__=='function'?
								$bool208.__nonzero__() :
								(typeof $bool208.__len__=='function'?
									($bool208.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($eq201='transparent')===($eq202=backgroundColor)&&$eq201===null?true:
						($eq201===null?false:($eq202===null?false:
							((typeof $eq201=='object'||typeof $eq201=='function')&&typeof $eq201.__cmp__=='function'?$eq201.__cmp__($eq202) === 0:
								((typeof $eq202=='object'||typeof $eq202=='function')&&typeof $eq202.__cmp__=='function'?$eq202.__cmp__($eq201) === 0:
									$eq201==$eq202))))):$and72):$and71):$and70)) === null || $bool209 === false || $bool209 === 0 || $bool209 === '' ?
							false :
							(typeof $bool209=='object'?
								(typeof $bool209.__nonzero__=='function'?
									$bool209.__nonzero__() :
									(typeof $bool209.__len__=='function'?
										($bool209.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						canvas['setFillStyle'](backgroundColor);
						canvas['fill']();
					}
					if ((($bool212=((($bool210=$and74=!(($eq203=borderWidth)===($eq204=0)&&$eq203===null?true:
						($eq203===null?false:($eq204===null?false:
							((typeof $eq203=='object'||typeof $eq203=='function')&&typeof $eq203.__cmp__=='function'?$eq203.__cmp__($eq204) === 0:
								((typeof $eq204=='object'||typeof $eq204=='function')&&typeof $eq204.__cmp__=='function'?$eq204.__cmp__($eq203) === 0:
									$eq203==$eq204)))))) === null || $bool210 === false || $bool210 === 0 || $bool210 === '' ?
						false :
						(typeof $bool210=='object'?
							(typeof $bool210.__nonzero__=='function'?
								$bool210.__nonzero__() :
								(typeof $bool210.__len__=='function'?
									($bool210.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool211=$and75=!(($eq205=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq206=borderColor)&&$eq205===null?true:
						($eq205===null?false:($eq206===null?false:
							((typeof $eq205=='object'||typeof $eq205=='function')&&typeof $eq205.__cmp__=='function'?$eq205.__cmp__($eq206) === 0:
								((typeof $eq206=='object'||typeof $eq206=='function')&&typeof $eq206.__cmp__=='function'?$eq206.__cmp__($eq205) === 0:
									$eq205==$eq206)))))) === null || $bool211 === false || $bool211 === 0 || $bool211 === '' ?
						false :
						(typeof $bool211=='object'?
							(typeof $bool211.__nonzero__=='function'?
								$bool211.__nonzero__() :
								(typeof $bool211.__len__=='function'?
									($bool211.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($eq207='transparent')===($eq208=borderColor)&&$eq207===null?true:
						($eq207===null?false:($eq208===null?false:
							((typeof $eq207=='object'||typeof $eq207=='function')&&typeof $eq207.__cmp__=='function'?$eq207.__cmp__($eq208) === 0:
								((typeof $eq208=='object'||typeof $eq208=='function')&&typeof $eq208.__cmp__=='function'?$eq208.__cmp__($eq207) === 0:
									$eq207==$eq208))))):$and75):$and74)) === null || $bool212 === false || $bool212 === 0 || $bool212 === '' ?
							false :
							(typeof $bool212=='object'?
								(typeof $bool212.__nonzero__=='function'?
									$bool212.__nonzero__() :
									(typeof $bool212.__len__=='function'?
										($bool212.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						canvas['setStrokeStyle'](borderColor);
						canvas['stroke']();
					}
					if ((($bool216=((($bool213=$and77=((($cmp141=borderWidth)===($cmp142=0)?0:
						(typeof $cmp141==typeof $cmp142 && ((typeof $cmp141 == 'number')||(typeof $cmp141 == 'string')||(typeof $cmp141 == 'boolean'))?
							($cmp141 == $cmp142 ? 0 : ($cmp141 < $cmp142 ? -1 : 1)):
							$p['cmp']($cmp141, $cmp142))) == -1)) === null || $bool213 === false || $bool213 === 0 || $bool213 === '' ?
						false :
						(typeof $bool213=='object'?
							(typeof $bool213.__nonzero__=='function'?
								$bool213.__nonzero__() :
								(typeof $bool213.__len__=='function'?
									($bool213.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool214=$and78=((($cmp143=thickness)===($cmp144=0)?0:
						(typeof $cmp143==typeof $cmp144 && ((typeof $cmp143 == 'number')||(typeof $cmp143 == 'string')||(typeof $cmp143 == 'boolean'))?
							($cmp143 == $cmp144 ? 0 : ($cmp143 < $cmp144 ? -1 : 1)):
							$p['cmp']($cmp143, $cmp144))) == 1)) === null || $bool214 === false || $bool214 === 0 || $bool214 === '' ?
						false :
						(typeof $bool214=='object'?
							(typeof $bool214.__nonzero__=='function'?
								$bool214.__nonzero__() :
								(typeof $bool214.__len__=='function'?
									($bool214.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool215=$and79=!(($eq209=$p['getattr']($m['GChartConsts'], 'TRANSPARENT_BORDER_COLOR'))===($eq210=backgroundColor)&&$eq209===null?true:
						($eq209===null?false:($eq210===null?false:
							((typeof $eq209=='object'||typeof $eq209=='function')&&typeof $eq209.__cmp__=='function'?$eq209.__cmp__($eq210) === 0:
								((typeof $eq210=='object'||typeof $eq210=='function')&&typeof $eq210.__cmp__=='function'?$eq210.__cmp__($eq209) === 0:
									$eq209==$eq210)))))) === null || $bool215 === false || $bool215 === 0 || $bool215 === '' ?
						false :
						(typeof $bool215=='object'?
							(typeof $bool215.__nonzero__=='function'?
								$bool215.__nonzero__() :
								(typeof $bool215.__len__=='function'?
									($bool215.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($eq211='transparent')===($eq212=backgroundColor)&&$eq211===null?true:
						($eq211===null?false:($eq212===null?false:
							((typeof $eq211=='object'||typeof $eq211=='function')&&typeof $eq211.__cmp__=='function'?$eq211.__cmp__($eq212) === 0:
								((typeof $eq212=='object'||typeof $eq212=='function')&&typeof $eq212.__cmp__=='function'?$eq212.__cmp__($eq211) === 0:
									$eq211==$eq212))))):$and79):$and78):$and77)) === null || $bool216 === false || $bool216 === 0 || $bool216 === '' ?
							false :
							(typeof $bool216=='object'?
								(typeof $bool216.__nonzero__=='function'?
									$bool216.__nonzero__() :
									(typeof $bool216.__len__=='function'?
										($bool216.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						canvas['setFillStyle'](backgroundColor);
						canvas['fill']();
					}
				}
			}
			else {
				if ((($bool217=(($eq213=0)===($eq214=spacing)&&$eq213===null?true:
					($eq213===null?false:($eq214===null?false:
						((typeof $eq213=='object'||typeof $eq213=='function')&&typeof $eq213.__cmp__=='function'?$eq213.__cmp__($eq214) === 0:
							((typeof $eq214=='object'||typeof $eq214=='function')&&typeof $eq214.__cmp__=='function'?$eq214.__cmp__($eq213) === 0:
								$eq213==$eq214)))))) === null || $bool217 === false || $bool217 === 0 || $bool217 === '' ?
						false :
						(typeof $bool217=='object'?
							(typeof $bool217.__nonzero__=='function'?
								$bool217.__nonzero__() :
								(typeof $bool217.__len__=='function'?
									($bool217.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spacing = 1;
				}
				prevXPx = pp['xToPixel'](prevX);
				prevYPx = pp['yToPixel'](prevY, onY2);
				nextXPx = pp['xToPixel'](nextX);
				nextYPx = pp['yToPixel'](nextY, onY2);
				nBands = $p['float_int']($p['round']((typeof ($div91=r)==typeof ($div92=spacing) && typeof $div91=='number' && $div92 !== 0?
					$div91/$div92:
					$p['op_div']($div91,$div92))));
				MAX_PIE_SLICE_PERIMETER_INTERSECTIONS = 4;
				p = $p['list']([0.0, 0.0, 0.0, 0.0]);
				EPS = 0.5;
				sl = self['getSliceLimits'](theta1, theta0);
				optimalIsVertical = ((($cmp145=(typeof ($sub185=$p['getattr'](sl, 'yMax'))==typeof ($sub186=$p['getattr'](sl, 'yMin')) && (typeof $sub185=='number'||typeof $sub185=='string')?
					$sub185-$sub186:
					$p['op_sub']($sub185,$sub186)))===($cmp146=(typeof ($sub187=$p['getattr'](sl, 'xMax'))==typeof ($sub188=$p['getattr'](sl, 'xMin')) && (typeof $sub187=='number'||typeof $sub187=='string')?
					$sub187-$sub188:
					$p['op_sub']($sub187,$sub188)))?0:
					(typeof $cmp145==typeof $cmp146 && ((typeof $cmp145 == 'number')||(typeof $cmp145 == 'string')||(typeof $cmp145 == 'boolean'))?
						($cmp145 == $cmp146 ? 0 : ($cmp145 < $cmp146 ? -1 : 1)):
						$p['cmp']($cmp145, $cmp146))) == 1);
				isFullPie = (($eq215=symbol['getPieSliceSize']())===($eq216=1.0)&&$eq215===null?true:
					($eq215===null?false:($eq216===null?false:
						((typeof $eq215=='object'||typeof $eq215=='function')&&typeof $eq215.__cmp__=='function'?$eq215.__cmp__($eq216) === 0:
							((typeof $eq216=='object'||typeof $eq216=='function')&&typeof $eq216.__cmp__=='function'?$eq216.__cmp__($eq215) === 0:
								$eq215==$eq216)))));
				if ((($bool221=((($bool218=$and81=((($cmp147=nBands)===($cmp148=0)?0:
					(typeof $cmp147==typeof $cmp148 && ((typeof $cmp147 == 'number')||(typeof $cmp147 == 'string')||(typeof $cmp147 == 'boolean'))?
						($cmp147 == $cmp148 ? 0 : ($cmp147 < $cmp148 ? -1 : 1)):
						$p['cmp']($cmp147, $cmp148))) == 1)) === null || $bool218 === false || $bool218 === 0 || $bool218 === '' ?
					false :
					(typeof $bool218=='object'?
						(typeof $bool218.__nonzero__=='function'?
							$bool218.__nonzero__() :
							(typeof $bool218.__len__=='function'?
								($bool218.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool219=$or37=$p['getattr'](self, 'verticallyShaded')) === null || $bool219 === false || $bool219 === 0 || $bool219 === '' ?
					false :
					(typeof $bool219=='object'?
						(typeof $bool219.__nonzero__=='function'?
							$bool219.__nonzero__() :
							(typeof $bool219.__len__=='function'?
								($bool219.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or37:((($bool220=$and83=$p['getattr'](self, 'optimallyShaded')) === null || $bool220 === false || $bool220 === 0 || $bool220 === '' ?
					false :
					(typeof $bool220=='object'?
						(typeof $bool220.__nonzero__=='function'?
							$bool220.__nonzero__() :
							(typeof $bool220.__len__=='function'?
								($bool220.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?optimalIsVertical:$and83)):$and81)) === null || $bool221 === false || $bool221 === 0 || $bool221 === '' ?
						false :
						(typeof $bool221=='object'?
							(typeof $bool221.__nonzero__=='function'?
								$bool221.__nonzero__() :
								(typeof $bool221.__len__=='function'?
									($bool221.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter4_iter = $p['range']($p['float_int']($p['round']((typeof ($mul129=nBands)==typeof ($mul130=$p['getattr'](sl, 'xMin')) && typeof $mul129=='number'?
						$mul129*$mul130:
						$p['op_mul']($mul129,$mul130)))), $p['float_int']((typeof ($mul131=$p['getattr'](sl, 'xMax'))==typeof ($mul132=nBands) && typeof $mul131=='number'?
						$mul131*$mul132:
						$p['op_mul']($mul131,$mul132))));
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						i = $iter4_nextval;
						nP = 0;
						dxPx = (typeof ($div93=(typeof ($mul133=r)==typeof ($mul134=(typeof ($add161=i)==typeof ($add162=0.5) && (typeof $add161=='number'||typeof $add161=='string')?
							$add161+$add162:
							$p['op_add']($add161,$add162))) && typeof $mul133=='number'?
							$mul133*$mul134:
							$p['op_mul']($mul133,$mul134)))==typeof ($div94=nBands) && typeof $div93=='number' && $div94 !== 0?
							$div93/$div94:
							$p['op_div']($div93,$div94));
						dyPx = $m['math']['sqrt']((typeof ($sub189=(typeof ($mul135=r)==typeof ($mul136=r) && typeof $mul135=='number'?
							$mul135*$mul136:
							$p['op_mul']($mul135,$mul136)))==typeof ($sub190=(typeof ($mul137=dxPx)==typeof ($mul138=dxPx) && typeof $mul137=='number'?
							$mul137*$mul138:
							$p['op_mul']($mul137,$mul138))) && (typeof $sub189=='number'||typeof $sub189=='string')?
							$sub189-$sub190:
							$p['op_sub']($sub189,$sub190)));
						xi = (typeof ($add163=xPx)==typeof ($add164=dxPx) && (typeof $add163=='number'||typeof $add163=='string')?
							$add163+$add164:
							$p['op_add']($add163,$add164));
						c1 = (typeof ($sub191=yPx)==typeof ($sub192=dyPx) && (typeof $sub191=='number'||typeof $sub191=='string')?
							$sub191-$sub192:
							$p['op_sub']($sub191,$sub192));
						c2 = (typeof ($add165=yPx)==typeof ($add166=dyPx) && (typeof $add165=='number'||typeof $add165=='string')?
							$add165+$add166:
							$p['op_add']($add165,$add166));
						if ((($bool222=isFullPie) === null || $bool222 === false || $bool222 === 0 || $bool222 === '' ?
								false :
								(typeof $bool222=='object'?
									(typeof $bool222.__nonzero__=='function'?
										$bool222.__nonzero__() :
										(typeof $bool222.__len__=='function'?
											($bool222.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							e1 = $p['getattr']($m['Double'], 'NaN');
						}
						else {
							e1 = self['yWherePieEdgeIntersectsVerticalLine'](xi, xPx, yPx, r, theta0);
						}
						if ((($bool223=isFullPie) === null || $bool223 === false || $bool223 === 0 || $bool223 === '' ?
								false :
								(typeof $bool223=='object'?
									(typeof $bool223.__nonzero__=='function'?
										$bool223.__nonzero__() :
										(typeof $bool223.__len__=='function'?
											($bool223.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							e2 = $p['getattr']($m['Double'], 'NaN');
						}
						else {
							e2 = self['yWherePieEdgeIntersectsVerticalLine'](xi, xPx, yPx, r, theta1);
						}
						if ((($bool224=self['angleInRange'](self['angle']((typeof ($sub193=xi)==typeof ($sub194=xPx) && (typeof $sub193=='number'||typeof $sub193=='string')?
							$sub193-$sub194:
							$p['op_sub']($sub193,$sub194)), (typeof ($sub195=yPx)==typeof ($sub196=c1) && (typeof $sub195=='number'||typeof $sub195=='string')?
							$sub195-$sub196:
							$p['op_sub']($sub195,$sub196))), theta0, theta1)) === null || $bool224 === false || $bool224 === 0 || $bool224 === '' ?
								false :
								(typeof $bool224=='object'?
									(typeof $bool224.__nonzero__=='function'?
										$bool224.__nonzero__() :
										(typeof $bool224.__len__=='function'?
											($bool224.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							p.__setitem__(nP, c1);
							nP = (typeof ($add167=nP)==typeof ($add168=1) && (typeof $add167=='number'||typeof $add167=='string')?
								$add167+$add168:
								$p['op_add']($add167,$add168));
						}
						if ((($bool225=((($cmp149=e1)===($cmp150=e2)?0:
							(typeof $cmp149==typeof $cmp150 && ((typeof $cmp149 == 'number')||(typeof $cmp149 == 'string')||(typeof $cmp149 == 'boolean'))?
								($cmp149 == $cmp150 ? 0 : ($cmp149 < $cmp150 ? -1 : 1)):
								$p['cmp']($cmp149, $cmp150))) == -1)) === null || $bool225 === false || $bool225 === 0 || $bool225 === '' ?
								false :
								(typeof $bool225=='object'?
									(typeof $bool225.__nonzero__=='function'?
										$bool225.__nonzero__() :
										(typeof $bool225.__len__=='function'?
											($bool225.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool227=!(($bool226=(($eq217=$p['getattr']($m['Double'], 'NaN'))===($eq218=e1)&&$eq217===null?true:
								($eq217===null?false:($eq218===null?false:
									((typeof $eq217=='object'||typeof $eq217=='function')&&typeof $eq217.__cmp__=='function'?$eq217.__cmp__($eq218) === 0:
										((typeof $eq218=='object'||typeof $eq218=='function')&&typeof $eq218.__cmp__=='function'?$eq218.__cmp__($eq217) === 0:
											$eq217==$eq218)))))) === null || $bool226 === false || $bool226 === 0 || $bool226 === '' ?
								false :
								(typeof $bool226=='object'?
									(typeof $bool226.__nonzero__=='function'?
										$bool226.__nonzero__() :
										(typeof $bool226.__len__=='function'?
											($bool226.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool227 === false || $bool227 === 0 || $bool227 === '' ?
									false :
									(typeof $bool227=='object'?
										(typeof $bool227.__nonzero__=='function'?
											$bool227.__nonzero__() :
											(typeof $bool227.__len__=='function'?
												($bool227.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e1);
								nP = (typeof ($add169=nP)==typeof ($add170=1) && (typeof $add169=='number'||typeof $add169=='string')?
									$add169+$add170:
									$p['op_add']($add169,$add170));
							}
							if ((($bool229=!(($bool228=(($eq219=$p['getattr']($m['Double'], 'NaN'))===($eq220=e2)&&$eq219===null?true:
								($eq219===null?false:($eq220===null?false:
									((typeof $eq219=='object'||typeof $eq219=='function')&&typeof $eq219.__cmp__=='function'?$eq219.__cmp__($eq220) === 0:
										((typeof $eq220=='object'||typeof $eq220=='function')&&typeof $eq220.__cmp__=='function'?$eq220.__cmp__($eq219) === 0:
											$eq219==$eq220)))))) === null || $bool228 === false || $bool228 === 0 || $bool228 === '' ?
								false :
								(typeof $bool228=='object'?
									(typeof $bool228.__nonzero__=='function'?
										$bool228.__nonzero__() :
										(typeof $bool228.__len__=='function'?
											($bool228.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool229 === false || $bool229 === 0 || $bool229 === '' ?
									false :
									(typeof $bool229=='object'?
										(typeof $bool229.__nonzero__=='function'?
											$bool229.__nonzero__() :
											(typeof $bool229.__len__=='function'?
												($bool229.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e2);
								nP = (typeof ($add171=nP)==typeof ($add172=1) && (typeof $add171=='number'||typeof $add171=='string')?
									$add171+$add172:
									$p['op_add']($add171,$add172));
							}
						}
						else {
							if ((($bool231=!(($bool230=(($eq221=$p['getattr']($m['Double'], 'NaN'))===($eq222=e2)&&$eq221===null?true:
								($eq221===null?false:($eq222===null?false:
									((typeof $eq221=='object'||typeof $eq221=='function')&&typeof $eq221.__cmp__=='function'?$eq221.__cmp__($eq222) === 0:
										((typeof $eq222=='object'||typeof $eq222=='function')&&typeof $eq222.__cmp__=='function'?$eq222.__cmp__($eq221) === 0:
											$eq221==$eq222)))))) === null || $bool230 === false || $bool230 === 0 || $bool230 === '' ?
								false :
								(typeof $bool230=='object'?
									(typeof $bool230.__nonzero__=='function'?
										$bool230.__nonzero__() :
										(typeof $bool230.__len__=='function'?
											($bool230.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool231 === false || $bool231 === 0 || $bool231 === '' ?
									false :
									(typeof $bool231=='object'?
										(typeof $bool231.__nonzero__=='function'?
											$bool231.__nonzero__() :
											(typeof $bool231.__len__=='function'?
												($bool231.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e2);
								nP = (typeof ($add173=nP)==typeof ($add174=1) && (typeof $add173=='number'||typeof $add173=='string')?
									$add173+$add174:
									$p['op_add']($add173,$add174));
							}
							if ((($bool233=!(($bool232=(($eq223=$p['getattr']($m['Double'], 'NaN'))===($eq224=e1)&&$eq223===null?true:
								($eq223===null?false:($eq224===null?false:
									((typeof $eq223=='object'||typeof $eq223=='function')&&typeof $eq223.__cmp__=='function'?$eq223.__cmp__($eq224) === 0:
										((typeof $eq224=='object'||typeof $eq224=='function')&&typeof $eq224.__cmp__=='function'?$eq224.__cmp__($eq223) === 0:
											$eq223==$eq224)))))) === null || $bool232 === false || $bool232 === 0 || $bool232 === '' ?
								false :
								(typeof $bool232=='object'?
									(typeof $bool232.__nonzero__=='function'?
										$bool232.__nonzero__() :
										(typeof $bool232.__len__=='function'?
											($bool232.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool233 === false || $bool233 === 0 || $bool233 === '' ?
									false :
									(typeof $bool233=='object'?
										(typeof $bool233.__nonzero__=='function'?
											$bool233.__nonzero__() :
											(typeof $bool233.__len__=='function'?
												($bool233.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e1);
								nP = (typeof ($add175=nP)==typeof ($add176=1) && (typeof $add175=='number'||typeof $add175=='string')?
									$add175+$add176:
									$p['op_add']($add175,$add176));
							}
						}
						if ((($bool234=self['angleInRange'](self['angle']((typeof ($sub197=xi)==typeof ($sub198=xPx) && (typeof $sub197=='number'||typeof $sub197=='string')?
							$sub197-$sub198:
							$p['op_sub']($sub197,$sub198)), (typeof ($sub199=yPx)==typeof ($sub200=c2) && (typeof $sub199=='number'||typeof $sub199=='string')?
							$sub199-$sub200:
							$p['op_sub']($sub199,$sub200))), theta0, theta1)) === null || $bool234 === false || $bool234 === 0 || $bool234 === '' ?
								false :
								(typeof $bool234=='object'?
									(typeof $bool234.__nonzero__=='function'?
										$bool234.__nonzero__() :
										(typeof $bool234.__len__=='function'?
											($bool234.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							p.__setitem__(nP, c2);
							nP = (typeof ($add177=nP)==typeof ($add178=1) && (typeof $add177=='number'||typeof $add177=='string')?
								$add177+$add178:
								$p['op_add']($add177,$add178));
						}
						$iter5_iter = $p['range'](1, nP);
						if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
							$iter5_type = 0;
						} else {
							$iter5_iter = $iter5_iter.__iter__();
							$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter5_idx = 0;
						while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
							j = $iter5_nextval;
							if ((($bool236=((($bool235=$or39=((($cmp151=$p['abs']((typeof ($sub201=theta0)==typeof ($sub202=theta1) && (typeof $sub201=='number'||typeof $sub201=='string')?
								$sub201-$sub202:
								$p['op_sub']($sub201,$sub202))))===($cmp152=$p['getattr']($m['math'], 'pi'))?0:
								(typeof $cmp151==typeof $cmp152 && ((typeof $cmp151 == 'number')||(typeof $cmp151 == 'string')||(typeof $cmp151 == 'boolean'))?
									($cmp151 == $cmp152 ? 0 : ($cmp151 < $cmp152 ? -1 : 1)):
									$p['cmp']($cmp151, $cmp152))) < 1)) === null || $bool235 === false || $bool235 === 0 || $bool235 === '' ?
								false :
								(typeof $bool235=='object'?
									(typeof $bool235.__nonzero__=='function'?
										$bool235.__nonzero__() :
										(typeof $bool235.__len__=='function'?
											($bool235.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or39:self['angleInRange'](self['angle']((typeof ($sub203=xi)==typeof ($sub204=xPx) && (typeof $sub203=='number'||typeof $sub203=='string')?
								$sub203-$sub204:
								$p['op_sub']($sub203,$sub204)), (typeof ($sub207=yPx)==typeof ($sub208=(typeof ($add179=(typeof ($mul139=0.3)==typeof ($mul140=(typeof ($1=p).__array != 'undefined'?
								((typeof $1.__array[$2=j]) != 'undefined'?$1.__array[$2]:
									$1.__getitem__($2)):
									$1.__getitem__(j))) && typeof $mul139=='number'?
								$mul139*$mul140:
								$p['op_mul']($mul139,$mul140)))==typeof ($add180=(typeof ($mul141=0.7)==typeof ($mul142=(typeof ($3=p).__array != 'undefined'?
								((typeof $3.__array[$4=(typeof ($sub205=j)==typeof ($sub206=1) && (typeof $sub205=='number'||typeof $sub205=='string')?
								$sub205-$sub206:
								$p['op_sub']($sub205,$sub206))]) != 'undefined'?$3.__array[$4]:
									$3.__getitem__($4)):
									$3.__getitem__((typeof ($sub205=j)==typeof ($sub206=1) && (typeof $sub205=='number'||typeof $sub205=='string')?
								$sub205-$sub206:
								$p['op_sub']($sub205,$sub206))))) && typeof $mul141=='number'?
								$mul141*$mul142:
								$p['op_mul']($mul141,$mul142))) && (typeof $add179=='number'||typeof $add179=='string')?
								$add179+$add180:
								$p['op_add']($add179,$add180))) && (typeof $sub207=='number'||typeof $sub207=='string')?
								$sub207-$sub208:
								$p['op_sub']($sub207,$sub208))), theta0, theta1))) === null || $bool236 === false || $bool236 === 0 || $bool236 === '' ?
									false :
									(typeof $bool236=='object'?
										(typeof $bool236.__nonzero__=='function'?
											$bool236.__nonzero__() :
											(typeof $bool236.__len__=='function'?
												($bool236.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, (typeof ($sub209=xi)==typeof ($sub210=(typeof ($mul143=0.5)==typeof ($mul144=thickness) && typeof $mul143=='number'?
									$mul143*$mul144:
									$p['op_mul']($mul143,$mul144))) && (typeof $sub209=='number'||typeof $sub209=='string')?
									$sub209-$sub210:
									$p['op_sub']($sub209,$sub210)), (typeof ($sub213=(typeof ($5=p).__array != 'undefined'?
									((typeof $5.__array[$6=(typeof ($sub211=j)==typeof ($sub212=1) && (typeof $sub211=='number'||typeof $sub211=='string')?
									$sub211-$sub212:
									$p['op_sub']($sub211,$sub212))]) != 'undefined'?$5.__array[$6]:
										$5.__getitem__($6)):
										$5.__getitem__((typeof ($sub211=j)==typeof ($sub212=1) && (typeof $sub211=='number'||typeof $sub211=='string')?
									$sub211-$sub212:
									$p['op_sub']($sub211,$sub212)))))==typeof ($sub214=EPS) && (typeof $sub213=='number'||typeof $sub213=='string')?
									$sub213-$sub214:
									$p['op_sub']($sub213,$sub214)), prevXPx, prevYPx, nextXPx, nextYPx, thickness, (typeof ($add181=(typeof ($sub217=(typeof ($7=p).__array != 'undefined'?
									((typeof $7.__array[$8=j]) != 'undefined'?$7.__array[$8]:
										$7.__getitem__($8)):
										$7.__getitem__(j)))==typeof ($sub218=(typeof ($9=p).__array != 'undefined'?
									((typeof $9.__array[$10=(typeof ($sub215=j)==typeof ($sub216=1) && (typeof $sub215=='number'||typeof $sub215=='string')?
									$sub215-$sub216:
									$p['op_sub']($sub215,$sub216))]) != 'undefined'?$9.__array[$10]:
										$9.__getitem__($10)):
										$9.__getitem__((typeof ($sub215=j)==typeof ($sub216=1) && (typeof $sub215=='number'||typeof $sub215=='string')?
									$sub215-$sub216:
									$p['op_sub']($sub215,$sub216))))) && (typeof $sub217=='number'||typeof $sub217=='string')?
									$sub217-$sub218:
									$p['op_sub']($sub217,$sub218)))==typeof ($add182=(typeof ($mul145=2)==typeof ($mul146=EPS) && typeof $mul145=='number'?
									$mul145*$mul146:
									$p['op_mul']($mul145,$mul146))) && (typeof $add181=='number'||typeof $add181=='string')?
									$add181+$add182:
									$p['op_add']($add181,$add182)));
							}
						}
					}
				}
				if ((($bool241=((($bool237=$and85=((($cmp153=nBands)===($cmp154=0)?0:
					(typeof $cmp153==typeof $cmp154 && ((typeof $cmp153 == 'number')||(typeof $cmp153 == 'string')||(typeof $cmp153 == 'boolean'))?
						($cmp153 == $cmp154 ? 0 : ($cmp153 < $cmp154 ? -1 : 1)):
						$p['cmp']($cmp153, $cmp154))) == 1)) === null || $bool237 === false || $bool237 === 0 || $bool237 === '' ?
					false :
					(typeof $bool237=='object'?
						(typeof $bool237.__nonzero__=='function'?
							$bool237.__nonzero__() :
							(typeof $bool237.__len__=='function'?
								($bool237.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool238=$or41=$p['getattr'](self, 'horizontallyShaded')) === null || $bool238 === false || $bool238 === 0 || $bool238 === '' ?
					false :
					(typeof $bool238=='object'?
						(typeof $bool238.__nonzero__=='function'?
							$bool238.__nonzero__() :
							(typeof $bool238.__len__=='function'?
								($bool238.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or41:((($bool239=$and87=$p['getattr'](self, 'optimallyShaded')) === null || $bool239 === false || $bool239 === 0 || $bool239 === '' ?
					false :
					(typeof $bool239=='object'?
						(typeof $bool239.__nonzero__=='function'?
							$bool239.__nonzero__() :
							(typeof $bool239.__len__=='function'?
								($bool239.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool240=optimalIsVertical) === null || $bool240 === false || $bool240 === 0 || $bool240 === '' ?
					false :
					(typeof $bool240=='object'?
						(typeof $bool240.__nonzero__=='function'?
							$bool240.__nonzero__() :
							(typeof $bool240.__len__=='function'?
								($bool240.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and87)):$and85)) === null || $bool241 === false || $bool241 === 0 || $bool241 === '' ?
						false :
						(typeof $bool241=='object'?
							(typeof $bool241.__nonzero__=='function'?
								$bool241.__nonzero__() :
								(typeof $bool241.__len__=='function'?
									($bool241.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter6_iter = $p['range']($p['float_int']($p['round']((typeof ($mul147=(typeof ($usub8=nBands)=='number'?
						-$usub8:
						$p['op_usub']($usub8)))==typeof ($mul148=$p['getattr'](sl, 'yMax')) && typeof $mul147=='number'?
						$mul147*$mul148:
						$p['op_mul']($mul147,$mul148)))), $p['float_int']((typeof ($mul149=(typeof ($usub9=nBands)=='number'?
						-$usub9:
						$p['op_usub']($usub9)))==typeof ($mul150=$p['getattr'](sl, 'yMin')) && typeof $mul149=='number'?
						$mul149*$mul150:
						$p['op_mul']($mul149,$mul150))));
					if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter.__iter__();
						$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						nP = 0;
						dyPx = (typeof ($div95=(typeof ($mul151=r)==typeof ($mul152=(typeof ($add183=i)==typeof ($add184=0.5) && (typeof $add183=='number'||typeof $add183=='string')?
							$add183+$add184:
							$p['op_add']($add183,$add184))) && typeof $mul151=='number'?
							$mul151*$mul152:
							$p['op_mul']($mul151,$mul152)))==typeof ($div96=nBands) && typeof $div95=='number' && $div96 !== 0?
							$div95/$div96:
							$p['op_div']($div95,$div96));
						dxPx = $m['math']['sqrt']((typeof ($sub219=(typeof ($mul153=r)==typeof ($mul154=r) && typeof $mul153=='number'?
							$mul153*$mul154:
							$p['op_mul']($mul153,$mul154)))==typeof ($sub220=(typeof ($mul155=dyPx)==typeof ($mul156=dyPx) && typeof $mul155=='number'?
							$mul155*$mul156:
							$p['op_mul']($mul155,$mul156))) && (typeof $sub219=='number'||typeof $sub219=='string')?
							$sub219-$sub220:
							$p['op_sub']($sub219,$sub220)));
						yi = (typeof ($add185=yPx)==typeof ($add186=dyPx) && (typeof $add185=='number'||typeof $add185=='string')?
							$add185+$add186:
							$p['op_add']($add185,$add186));
						c1 = (typeof ($sub221=xPx)==typeof ($sub222=dxPx) && (typeof $sub221=='number'||typeof $sub221=='string')?
							$sub221-$sub222:
							$p['op_sub']($sub221,$sub222));
						c2 = (typeof ($add187=xPx)==typeof ($add188=dxPx) && (typeof $add187=='number'||typeof $add187=='string')?
							$add187+$add188:
							$p['op_add']($add187,$add188));
						if ((($bool242=isFullPie) === null || $bool242 === false || $bool242 === 0 || $bool242 === '' ?
								false :
								(typeof $bool242=='object'?
									(typeof $bool242.__nonzero__=='function'?
										$bool242.__nonzero__() :
										(typeof $bool242.__len__=='function'?
											($bool242.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							e1 = $p['getattr']($m['Double'], 'NaN');
							e2 = $p['getattr']($m['Double'], 'NaN');
						}
						else {
							e1 = self['xWherePieEdgeIntersectsHorizontalLine'](yi, xPx, yPx, r, theta0);
							e2 = self['xWherePieEdgeIntersectsHorizontalLine'](yi, xPx, yPx, r, theta1);
						}
						if ((($bool243=self['angleInRange'](self['angle']((typeof ($sub223=c1)==typeof ($sub224=xPx) && (typeof $sub223=='number'||typeof $sub223=='string')?
							$sub223-$sub224:
							$p['op_sub']($sub223,$sub224)), (typeof ($sub225=yPx)==typeof ($sub226=yi) && (typeof $sub225=='number'||typeof $sub225=='string')?
							$sub225-$sub226:
							$p['op_sub']($sub225,$sub226))), theta0, theta1)) === null || $bool243 === false || $bool243 === 0 || $bool243 === '' ?
								false :
								(typeof $bool243=='object'?
									(typeof $bool243.__nonzero__=='function'?
										$bool243.__nonzero__() :
										(typeof $bool243.__len__=='function'?
											($bool243.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							p.__setitem__(nP, c1);
							nP = (typeof ($add189=nP)==typeof ($add190=1) && (typeof $add189=='number'||typeof $add189=='string')?
								$add189+$add190:
								$p['op_add']($add189,$add190));
						}
						if ((($bool244=((($cmp155=e1)===($cmp156=e2)?0:
							(typeof $cmp155==typeof $cmp156 && ((typeof $cmp155 == 'number')||(typeof $cmp155 == 'string')||(typeof $cmp155 == 'boolean'))?
								($cmp155 == $cmp156 ? 0 : ($cmp155 < $cmp156 ? -1 : 1)):
								$p['cmp']($cmp155, $cmp156))) == -1)) === null || $bool244 === false || $bool244 === 0 || $bool244 === '' ?
								false :
								(typeof $bool244=='object'?
									(typeof $bool244.__nonzero__=='function'?
										$bool244.__nonzero__() :
										(typeof $bool244.__len__=='function'?
											($bool244.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool246=!(($bool245=(($eq225=$p['getattr']($m['Double'], 'NaN'))===($eq226=e1)&&$eq225===null?true:
								($eq225===null?false:($eq226===null?false:
									((typeof $eq225=='object'||typeof $eq225=='function')&&typeof $eq225.__cmp__=='function'?$eq225.__cmp__($eq226) === 0:
										((typeof $eq226=='object'||typeof $eq226=='function')&&typeof $eq226.__cmp__=='function'?$eq226.__cmp__($eq225) === 0:
											$eq225==$eq226)))))) === null || $bool245 === false || $bool245 === 0 || $bool245 === '' ?
								false :
								(typeof $bool245=='object'?
									(typeof $bool245.__nonzero__=='function'?
										$bool245.__nonzero__() :
										(typeof $bool245.__len__=='function'?
											($bool245.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool246 === false || $bool246 === 0 || $bool246 === '' ?
									false :
									(typeof $bool246=='object'?
										(typeof $bool246.__nonzero__=='function'?
											$bool246.__nonzero__() :
											(typeof $bool246.__len__=='function'?
												($bool246.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e1);
								nP = (typeof ($add191=nP)==typeof ($add192=1) && (typeof $add191=='number'||typeof $add191=='string')?
									$add191+$add192:
									$p['op_add']($add191,$add192));
							}
							if ((($bool248=!(($bool247=(($eq227=$p['getattr']($m['Double'], 'NaN'))===($eq228=e2)&&$eq227===null?true:
								($eq227===null?false:($eq228===null?false:
									((typeof $eq227=='object'||typeof $eq227=='function')&&typeof $eq227.__cmp__=='function'?$eq227.__cmp__($eq228) === 0:
										((typeof $eq228=='object'||typeof $eq228=='function')&&typeof $eq228.__cmp__=='function'?$eq228.__cmp__($eq227) === 0:
											$eq227==$eq228)))))) === null || $bool247 === false || $bool247 === 0 || $bool247 === '' ?
								false :
								(typeof $bool247=='object'?
									(typeof $bool247.__nonzero__=='function'?
										$bool247.__nonzero__() :
										(typeof $bool247.__len__=='function'?
											($bool247.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool248 === false || $bool248 === 0 || $bool248 === '' ?
									false :
									(typeof $bool248=='object'?
										(typeof $bool248.__nonzero__=='function'?
											$bool248.__nonzero__() :
											(typeof $bool248.__len__=='function'?
												($bool248.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e2);
								nP = (typeof ($add193=nP)==typeof ($add194=1) && (typeof $add193=='number'||typeof $add193=='string')?
									$add193+$add194:
									$p['op_add']($add193,$add194));
							}
						}
						else {
							if ((($bool250=!(($bool249=(($eq229=$p['getattr']($m['Double'], 'NaN'))===($eq230=e2)&&$eq229===null?true:
								($eq229===null?false:($eq230===null?false:
									((typeof $eq229=='object'||typeof $eq229=='function')&&typeof $eq229.__cmp__=='function'?$eq229.__cmp__($eq230) === 0:
										((typeof $eq230=='object'||typeof $eq230=='function')&&typeof $eq230.__cmp__=='function'?$eq230.__cmp__($eq229) === 0:
											$eq229==$eq230)))))) === null || $bool249 === false || $bool249 === 0 || $bool249 === '' ?
								false :
								(typeof $bool249=='object'?
									(typeof $bool249.__nonzero__=='function'?
										$bool249.__nonzero__() :
										(typeof $bool249.__len__=='function'?
											($bool249.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool250 === false || $bool250 === 0 || $bool250 === '' ?
									false :
									(typeof $bool250=='object'?
										(typeof $bool250.__nonzero__=='function'?
											$bool250.__nonzero__() :
											(typeof $bool250.__len__=='function'?
												($bool250.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e2);
								nP = (typeof ($add195=nP)==typeof ($add196=1) && (typeof $add195=='number'||typeof $add195=='string')?
									$add195+$add196:
									$p['op_add']($add195,$add196));
							}
							if ((($bool252=!(($bool251=(($eq231=$p['getattr']($m['Double'], 'NaN'))===($eq232=e1)&&$eq231===null?true:
								($eq231===null?false:($eq232===null?false:
									((typeof $eq231=='object'||typeof $eq231=='function')&&typeof $eq231.__cmp__=='function'?$eq231.__cmp__($eq232) === 0:
										((typeof $eq232=='object'||typeof $eq232=='function')&&typeof $eq232.__cmp__=='function'?$eq232.__cmp__($eq231) === 0:
											$eq231==$eq232)))))) === null || $bool251 === false || $bool251 === 0 || $bool251 === '' ?
								false :
								(typeof $bool251=='object'?
									(typeof $bool251.__nonzero__=='function'?
										$bool251.__nonzero__() :
										(typeof $bool251.__len__=='function'?
											($bool251.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool252 === false || $bool252 === 0 || $bool252 === '' ?
									false :
									(typeof $bool252=='object'?
										(typeof $bool252.__nonzero__=='function'?
											$bool252.__nonzero__() :
											(typeof $bool252.__len__=='function'?
												($bool252.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								p.__setitem__(nP, e1);
								nP = (typeof ($add197=nP)==typeof ($add198=1) && (typeof $add197=='number'||typeof $add197=='string')?
									$add197+$add198:
									$p['op_add']($add197,$add198));
							}
						}
						if ((($bool253=self['angleInRange'](self['angle']((typeof ($sub227=c2)==typeof ($sub228=xPx) && (typeof $sub227=='number'||typeof $sub227=='string')?
							$sub227-$sub228:
							$p['op_sub']($sub227,$sub228)), (typeof ($sub229=yPx)==typeof ($sub230=yi) && (typeof $sub229=='number'||typeof $sub229=='string')?
							$sub229-$sub230:
							$p['op_sub']($sub229,$sub230))), theta0, theta1)) === null || $bool253 === false || $bool253 === 0 || $bool253 === '' ?
								false :
								(typeof $bool253=='object'?
									(typeof $bool253.__nonzero__=='function'?
										$bool253.__nonzero__() :
										(typeof $bool253.__len__=='function'?
											($bool253.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							p.__setitem__(nP, c2);
							nP = (typeof ($add199=nP)==typeof ($add200=1) && (typeof $add199=='number'||typeof $add199=='string')?
								$add199+$add200:
								$p['op_add']($add199,$add200));
						}
						$iter7_iter = $p['range'](1, nP);
						if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
							$iter7_type = 0;
						} else {
							$iter7_iter = $iter7_iter.__iter__();
							$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter7_idx = 0;
						while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
							j = $iter7_nextval;
							if ((($bool255=((($bool254=$or43=((($cmp157=$p['abs']((typeof ($sub231=theta0)==typeof ($sub232=theta1) && (typeof $sub231=='number'||typeof $sub231=='string')?
								$sub231-$sub232:
								$p['op_sub']($sub231,$sub232))))===($cmp158=$p['getattr']($m['math'], 'pi'))?0:
								(typeof $cmp157==typeof $cmp158 && ((typeof $cmp157 == 'number')||(typeof $cmp157 == 'string')||(typeof $cmp157 == 'boolean'))?
									($cmp157 == $cmp158 ? 0 : ($cmp157 < $cmp158 ? -1 : 1)):
									$p['cmp']($cmp157, $cmp158))) < 1)) === null || $bool254 === false || $bool254 === 0 || $bool254 === '' ?
								false :
								(typeof $bool254=='object'?
									(typeof $bool254.__nonzero__=='function'?
										$bool254.__nonzero__() :
										(typeof $bool254.__len__=='function'?
											($bool254.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or43:self['angleInRange'](self['angle']((typeof ($sub235=(typeof ($add201=(typeof ($mul157=0.3)==typeof ($mul158=(typeof ($11=p).__array != 'undefined'?
								((typeof $11.__array[$12=j]) != 'undefined'?$11.__array[$12]:
									$11.__getitem__($12)):
									$11.__getitem__(j))) && typeof $mul157=='number'?
								$mul157*$mul158:
								$p['op_mul']($mul157,$mul158)))==typeof ($add202=(typeof ($mul159=0.7)==typeof ($mul160=(typeof ($13=p).__array != 'undefined'?
								((typeof $13.__array[$14=(typeof ($sub233=j)==typeof ($sub234=1) && (typeof $sub233=='number'||typeof $sub233=='string')?
								$sub233-$sub234:
								$p['op_sub']($sub233,$sub234))]) != 'undefined'?$13.__array[$14]:
									$13.__getitem__($14)):
									$13.__getitem__((typeof ($sub233=j)==typeof ($sub234=1) && (typeof $sub233=='number'||typeof $sub233=='string')?
								$sub233-$sub234:
								$p['op_sub']($sub233,$sub234))))) && typeof $mul159=='number'?
								$mul159*$mul160:
								$p['op_mul']($mul159,$mul160))) && (typeof $add201=='number'||typeof $add201=='string')?
								$add201+$add202:
								$p['op_add']($add201,$add202)))==typeof ($sub236=xPx) && (typeof $sub235=='number'||typeof $sub235=='string')?
								$sub235-$sub236:
								$p['op_sub']($sub235,$sub236)), (typeof ($sub237=yPx)==typeof ($sub238=yi) && (typeof $sub237=='number'||typeof $sub237=='string')?
								$sub237-$sub238:
								$p['op_sub']($sub237,$sub238))), theta0, theta1))) === null || $bool255 === false || $bool255 === 0 || $bool255 === '' ?
									false :
									(typeof $bool255=='object'?
										(typeof $bool255.__nonzero__=='function'?
											$bool255.__nonzero__() :
											(typeof $bool255.__len__=='function'?
												($bool255.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['realizeOneImageOfSymbol'](pp, grp, arp, symbol, null, onY2, clipPlotArea, clipDecoratedChart, (typeof ($sub241=(typeof ($15=p).__array != 'undefined'?
									((typeof $15.__array[$16=(typeof ($sub239=j)==typeof ($sub240=1) && (typeof $sub239=='number'||typeof $sub239=='string')?
									$sub239-$sub240:
									$p['op_sub']($sub239,$sub240))]) != 'undefined'?$15.__array[$16]:
										$15.__getitem__($16)):
										$15.__getitem__((typeof ($sub239=j)==typeof ($sub240=1) && (typeof $sub239=='number'||typeof $sub239=='string')?
									$sub239-$sub240:
									$p['op_sub']($sub239,$sub240)))))==typeof ($sub242=EPS) && (typeof $sub241=='number'||typeof $sub241=='string')?
									$sub241-$sub242:
									$p['op_sub']($sub241,$sub242)), (typeof ($sub243=yi)==typeof ($sub244=(typeof ($mul161=0.5)==typeof ($mul162=thickness) && typeof $mul161=='number'?
									$mul161*$mul162:
									$p['op_mul']($mul161,$mul162))) && (typeof $sub243=='number'||typeof $sub243=='string')?
									$sub243-$sub244:
									$p['op_sub']($sub243,$sub244)), prevXPx, prevYPx, nextXPx, nextYPx, (typeof ($add203=(typeof ($sub247=(typeof ($17=p).__array != 'undefined'?
									((typeof $17.__array[$18=j]) != 'undefined'?$17.__array[$18]:
										$17.__getitem__($18)):
										$17.__getitem__(j)))==typeof ($sub248=(typeof ($19=p).__array != 'undefined'?
									((typeof $19.__array[$20=(typeof ($sub245=j)==typeof ($sub246=1) && (typeof $sub245=='number'||typeof $sub245=='string')?
									$sub245-$sub246:
									$p['op_sub']($sub245,$sub246))]) != 'undefined'?$19.__array[$20]:
										$19.__getitem__($20)):
										$19.__getitem__((typeof ($sub245=j)==typeof ($sub246=1) && (typeof $sub245=='number'||typeof $sub245=='string')?
									$sub245-$sub246:
									$p['op_sub']($sub245,$sub246))))) && (typeof $sub247=='number'||typeof $sub247=='string')?
									$sub247-$sub248:
									$p['op_sub']($sub247,$sub248)))==typeof ($add204=(typeof ($mul163=2)==typeof ($mul164=EPS) && typeof $mul163=='number'?
									$mul163*$mul164:
									$p['op_mul']($mul163,$mul164))) && (typeof $add203=='number'||typeof $add203=='string')?
									$add203+$add204:
									$p['op_add']($add203,$add204)), thickness);
							}
						}
					}
				}
			}
			if ((($bool259=((($bool257=$and89=!(($eq233=annotation)===($eq234=null)&&$eq233===null?true:
				($eq233===null?false:($eq234===null?false:
					((typeof $eq233=='object'||typeof $eq233=='function')&&typeof $eq233.__cmp__=='function'?$eq233.__cmp__($eq234) === 0:
						((typeof $eq234=='object'||typeof $eq234=='function')&&typeof $eq234.__cmp__=='function'?$eq234.__cmp__($eq233) === 0:
							$eq233==$eq234)))))) === null || $bool257 === false || $bool257 === 0 || $bool257 === '' ?
				false :
				(typeof $bool257=='object'?
					(typeof $bool257.__nonzero__=='function'?
						$bool257.__nonzero__() :
						(typeof $bool257.__len__=='function'?
							($bool257.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool258=$and90=((($bool256=$or45=(annotation['getText']() !== null)) === null || $bool256 === false || $bool256 === 0 || $bool256 === '' ?
				false :
				(typeof $bool256=='object'?
					(typeof $bool256.__nonzero__=='function'?
						$bool256.__nonzero__() :
						(typeof $bool256.__len__=='function'?
							($bool256.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or45:(annotation['getWidget']() !== null))) === null || $bool258 === false || $bool258 === 0 || $bool258 === '' ?
				false :
				(typeof $bool258=='object'?
					(typeof $bool258.__nonzero__=='function'?
						$bool258.__nonzero__() :
						(typeof $bool258.__len__=='function'?
							($bool258.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?annotation['getVisible']():$and90):$and89)) === null || $bool259 === false || $bool259 === 0 || $bool259 === '' ?
					false :
					(typeof $bool259=='object'?
						(typeof $bool259.__nonzero__=='function'?
							$bool259.__nonzero__() :
							(typeof $bool259.__len__=='function'?
								($bool259.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thetaMid = (typeof ($div97=(typeof ($add205=theta0)==typeof ($add206=theta1) && (typeof $add205=='number'||typeof $add205=='string')?
					$add205+$add206:
					$p['op_add']($add205,$add206)))==typeof ($div98=2.0) && typeof $div97=='number' && $div98 !== 0?
					$div97/$div98:
					$p['op_div']($div97,$div98));
				dX = annotation['getXShift']();
				dY = annotation['getYShift']();
				sinTheta = $m['math']['sin'](thetaMid);
				cosTheta = $m['math']['cos'](thetaMid);
				loc = annotation['getLocation']();
				if ((($bool260=(($eq235=null)===($eq236=loc)&&$eq235===null?true:
					($eq235===null?false:($eq236===null?false:
						((typeof $eq235=='object'||typeof $eq235=='function')&&typeof $eq235.__cmp__=='function'?$eq235.__cmp__($eq236) === 0:
							((typeof $eq236=='object'||typeof $eq236=='function')&&typeof $eq236.__cmp__=='function'?$eq236.__cmp__($eq235) === 0:
								$eq235==$eq236)))))) === null || $bool260 === false || $bool260 === 0 || $bool260 === '' ?
						false :
						(typeof $bool260=='object'?
							(typeof $bool260.__nonzero__=='function'?
								$bool260.__nonzero__() :
								(typeof $bool260.__len__=='function'?
									($bool260.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					loc = self['defaultAnnotationLocation']();
				}
				arp['renderAnnotation'](annotation, loc['decodePieLocation'](thetaMid), (typeof ($sub249=(typeof ($add209=xPx)==typeof ($add210=(typeof ($mul165=(typeof ($add207=r)==typeof ($add208=dX) && (typeof $add207=='number'||typeof $add207=='string')?
					$add207+$add208:
					$p['op_add']($add207,$add208)))==typeof ($mul166=cosTheta) && typeof $mul165=='number'?
					$mul165*$mul166:
					$p['op_mul']($mul165,$mul166))) && (typeof $add209=='number'||typeof $add209=='string')?
					$add209+$add210:
					$p['op_add']($add209,$add210)))==typeof ($sub250=(typeof ($mul167=dY)==typeof ($mul168=sinTheta) && typeof $mul167=='number'?
					$mul167*$mul168:
					$p['op_mul']($mul167,$mul168))) && (typeof $sub249=='number'||typeof $sub249=='string')?
					$sub249-$sub250:
					$p['op_sub']($sub249,$sub250)), (typeof ($sub253=(typeof ($sub251=yPx)==typeof ($sub252=(typeof ($mul169=(typeof ($add211=r)==typeof ($add212=dX) && (typeof $add211=='number'||typeof $add211=='string')?
					$add211+$add212:
					$p['op_add']($add211,$add212)))==typeof ($mul170=sinTheta) && typeof $mul169=='number'?
					$mul169*$mul170:
					$p['op_mul']($mul169,$mul170))) && (typeof $sub251=='number'||typeof $sub251=='string')?
					$sub251-$sub252:
					$p['op_sub']($sub251,$sub252)))==typeof ($sub254=(typeof ($mul171=dY)==typeof ($mul172=cosTheta) && typeof $mul171=='number'?
					$mul171*$mul172:
					$p['op_mul']($mul171,$mul172))) && (typeof $sub253=='number'||typeof $sub253=='string')?
					$sub253-$sub254:
					$p['op_sub']($sub253,$sub254)), 0, 0, symbol);
			}
			return null;
		}
	, 1, [null,null,['self'],['pp'],['grp'],['arp'],['symbol'],['annotation'],['onY2'],['clipPlotArea'],['clipDecoratedChart'],['drawMainSymbol'],['x'],['y'],['prevX'],['prevY'],['nextX'],['nextY']]);
		$cls_definition['realizeSymbol'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PieSliceSymbolType', $p['tuple']($bases), $data);
	})();
	$m['VBarBottom'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(wm, hm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wm = arguments[1];
				hm = arguments[2];
			}

			$m['SymbolType']['__init__'](self, wm, hm, 0.5, 0.5, 0.5, 0.5, false);
			return null;
		}
	, 1, [null,null,['self'],['wm'],['hm']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_BAR_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_VBARBOTTOM_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}
			var $sub255,$sub256;
			return (typeof ($sub255=yMax)==typeof ($sub256=y) && (typeof $sub255=='number'||typeof $sub255=='string')?
				$sub255-$sub256:
				$p['op_sub']($sub255,$sub256));
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $div99,$div100;
			return $p['float_int']($p['round']((typeof ($div99=legendFontSize)==typeof ($div100=2.0) && typeof $div99=='number' && $div100 !== 0?
				$div99/$div100:
				$p['op_div']($div99,$div100))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VBarBottom', $p['tuple']($bases), $data);
	})();
	$m['VBarBaseline'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(wm, hm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wm = arguments[1];
				hm = arguments[2];
			}

			$m['SymbolType']['__init__'](self, wm, hm, 0, 0, 0.5, 0.5, false);
			return null;
		}
	, 1, [null,null,['self'],['wm'],['hm']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_BAR_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_VBAR_BASELINE_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}
			var $sub257,$sub258;
			return (typeof ($sub257=y)==typeof ($sub258=yMid) && (typeof $sub257=='number'||typeof $sub257=='string')?
				$sub257-$sub258:
				$p['op_sub']($sub257,$sub258));
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftY', function(height, y, yPrev, yNext, yMin, yMax, yMid, yMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
				yMouse = arguments[8];
			}

			return yMid;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid'],['yMouse']]);
		$cls_definition['getUpperLeftY'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $div101,$div102;
			return $p['float_int']($p['round']((typeof ($div101=legendFontSize)==typeof ($div102=2.0) && typeof $div101=='number' && $div102 !== 0?
				$div101/$div102:
				$p['op_div']($div101,$div102))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VBarBaseline', $p['tuple']($bases), $data);
	})();
	$m['VBarTop'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(wm, hm) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wm = arguments[1];
				hm = arguments[2];
			}

			$m['SymbolType']['__init__'](self, wm, hm, 0.5, 0.5, 0.5, 0.5, false);
			return null;
		}
	, 1, [null,null,['self'],['wm'],['hm']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('defaultFillSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_BAR_FILL_SPACING');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultFillSpacing'] = $method;
		$method = $pyjs__bind_method2('defaultHoverLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['GChartConsts'], 'DEFAULT_VBARTOP_HOVER_LOCATION');
		}
	, 1, [null,null,['self']]);
		$cls_definition['defaultHoverLocation'] = $method;
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}
			var $sub260,$sub259;
			return (typeof ($sub259=y)==typeof ($sub260=yMin) && (typeof $sub259=='number'||typeof $sub259=='string')?
				$sub259-$sub260:
				$p['op_sub']($sub259,$sub260));
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}
			var $div103,$div104;
			return $p['float_int']($p['round']((typeof ($div103=legendFontSize)==typeof ($div104=2.0) && typeof $div103=='number' && $div104 !== 0?
				$div103/$div104:
				$p['op_div']($div103,$div104))));
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VBarTop', $p['tuple']($bases), $data);
	})();
	$m['AnnotationAnchor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('__init__', function(location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			$m['SymbolType']['__init__'](self, 0, 0, 0, 0, 0, 0);
			self.location = location;
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}

			return 0;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}

			return 0;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftX', function(width, x, xPrev, xNext, xMin, xMax, xMid, xMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
				xMouse = arguments[8];
			}
			var $eq255,$eq254,$eq257,$eq256,$eq251,$eq250,$eq253,$eq252,$eq259,$eq258,$bool269,result,$eq243,$bool264,$bool265,$bool266,$bool267,$bool261,$bool262,$bool263,$bool268,$or48,$or49,$add214,$or47,$add213,$eq246,$eq247,$eq244,$eq245,$eq242,$eq240,$eq241,$div105,$eq248,$eq249,$or50,$div106,$or52,$bool272,$bool271,$bool270,$eq260,$eq237,$or51,$eq239,$eq238;
			if ((($bool261=(($eq237=$p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE'))===($eq238=$p['getattr'](self, 'location'))&&$eq237===null?true:
				($eq237===null?false:($eq238===null?false:
					((typeof $eq237=='object'||typeof $eq237=='function')&&typeof $eq237.__cmp__=='function'?$eq237.__cmp__($eq238) === 0:
						((typeof $eq238=='object'||typeof $eq238=='function')&&typeof $eq238.__cmp__=='function'?$eq238.__cmp__($eq237) === 0:
							$eq237==$eq238)))))) === null || $bool261 === false || $bool261 === 0 || $bool261 === '' ?
					false :
					(typeof $bool261=='object'?
						(typeof $bool261.__nonzero__=='function'?
							$bool261.__nonzero__() :
							(typeof $bool261.__len__=='function'?
								($bool261.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool262=(($eq239=$p['getattr']($m['GChartConsts'], 'NAI'))===($eq240=xMouse)&&$eq239===null?true:
					($eq239===null?false:($eq240===null?false:
						((typeof $eq239=='object'||typeof $eq239=='function')&&typeof $eq239.__cmp__=='function'?$eq239.__cmp__($eq240) === 0:
							((typeof $eq240=='object'||typeof $eq240=='function')&&typeof $eq240.__cmp__=='function'?$eq240.__cmp__($eq239) === 0:
								$eq239==$eq240)))))) === null || $bool262 === false || $bool262 === 0 || $bool262 === '' ?
						false :
						(typeof $bool262=='object'?
							(typeof $bool262.__nonzero__=='function'?
								$bool262.__nonzero__() :
								(typeof $bool262.__len__=='function'?
									($bool262.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr']($m['Double'], 'NaN');
				}
				else {
					result = xMouse;
				}
			}
			else if ((($bool263=(($eq241=$p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE_SNAP_TO_X'))===($eq242=$p['getattr'](self, 'location'))&&$eq241===null?true:
				($eq241===null?false:($eq242===null?false:
					((typeof $eq241=='object'||typeof $eq241=='function')&&typeof $eq241.__cmp__=='function'?$eq241.__cmp__($eq242) === 0:
						((typeof $eq242=='object'||typeof $eq242=='function')&&typeof $eq242.__cmp__=='function'?$eq242.__cmp__($eq241) === 0:
							$eq241==$eq242)))))) === null || $bool263 === false || $bool263 === 0 || $bool263 === '' ?
					false :
					(typeof $bool263=='object'?
						(typeof $bool263.__nonzero__=='function'?
							$bool263.__nonzero__() :
							(typeof $bool263.__len__=='function'?
								($bool263.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool264=(($eq243=$p['getattr']($m['GChartConsts'], 'NAI'))===($eq244=xMouse)&&$eq243===null?true:
					($eq243===null?false:($eq244===null?false:
						((typeof $eq243=='object'||typeof $eq243=='function')&&typeof $eq243.__cmp__=='function'?$eq243.__cmp__($eq244) === 0:
							((typeof $eq244=='object'||typeof $eq244=='function')&&typeof $eq244.__cmp__=='function'?$eq244.__cmp__($eq243) === 0:
								$eq243==$eq244)))))) === null || $bool264 === false || $bool264 === 0 || $bool264 === '' ?
						false :
						(typeof $bool264=='object'?
							(typeof $bool264.__nonzero__=='function'?
								$bool264.__nonzero__() :
								(typeof $bool264.__len__=='function'?
									($bool264.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr']($m['Double'], 'NaN');
				}
				else {
					result = x;
				}
			}
			else if ((($bool265=(($eq245=$p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE_SNAP_TO_Y'))===($eq246=$p['getattr'](self, 'location'))&&$eq245===null?true:
				($eq245===null?false:($eq246===null?false:
					((typeof $eq245=='object'||typeof $eq245=='function')&&typeof $eq245.__cmp__=='function'?$eq245.__cmp__($eq246) === 0:
						((typeof $eq246=='object'||typeof $eq246=='function')&&typeof $eq246.__cmp__=='function'?$eq246.__cmp__($eq245) === 0:
							$eq245==$eq246)))))) === null || $bool265 === false || $bool265 === 0 || $bool265 === '' ?
					false :
					(typeof $bool265=='object'?
						(typeof $bool265.__nonzero__=='function'?
							$bool265.__nonzero__() :
							(typeof $bool265.__len__=='function'?
								($bool265.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool266=(($eq247=$p['getattr']($m['GChartConsts'], 'NAI'))===($eq248=xMouse)&&$eq247===null?true:
					($eq247===null?false:($eq248===null?false:
						((typeof $eq247=='object'||typeof $eq247=='function')&&typeof $eq247.__cmp__=='function'?$eq247.__cmp__($eq248) === 0:
							((typeof $eq248=='object'||typeof $eq248=='function')&&typeof $eq248.__cmp__=='function'?$eq248.__cmp__($eq247) === 0:
								$eq247==$eq248)))))) === null || $bool266 === false || $bool266 === 0 || $bool266 === '' ?
						false :
						(typeof $bool266=='object'?
							(typeof $bool266.__nonzero__=='function'?
								$bool266.__nonzero__() :
								(typeof $bool266.__len__=='function'?
									($bool266.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr']($m['Double'], 'NaN');
				}
				else {
					result = xMouse;
				}
			}
			else if ((($bool269=((($bool267=$or47=(($eq249=$p['getattr']($m['AnnotationLocation'], 'NORTHWEST'))===($eq250=$p['getattr'](self, 'location'))&&$eq249===null?true:
				($eq249===null?false:($eq250===null?false:
					((typeof $eq249=='object'||typeof $eq249=='function')&&typeof $eq249.__cmp__=='function'?$eq249.__cmp__($eq250) === 0:
						((typeof $eq250=='object'||typeof $eq250=='function')&&typeof $eq250.__cmp__=='function'?$eq250.__cmp__($eq249) === 0:
							$eq249==$eq250)))))) === null || $bool267 === false || $bool267 === 0 || $bool267 === '' ?
				false :
				(typeof $bool267=='object'?
					(typeof $bool267.__nonzero__=='function'?
						$bool267.__nonzero__() :
						(typeof $bool267.__len__=='function'?
							($bool267.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or47:((($bool268=$or48=(($eq251=$p['getattr']($m['AnnotationLocation'], 'WEST'))===($eq252=$p['getattr'](self, 'location'))&&$eq251===null?true:
				($eq251===null?false:($eq252===null?false:
					((typeof $eq251=='object'||typeof $eq251=='function')&&typeof $eq251.__cmp__=='function'?$eq251.__cmp__($eq252) === 0:
						((typeof $eq252=='object'||typeof $eq252=='function')&&typeof $eq252.__cmp__=='function'?$eq252.__cmp__($eq251) === 0:
							$eq251==$eq252)))))) === null || $bool268 === false || $bool268 === 0 || $bool268 === '' ?
				false :
				(typeof $bool268=='object'?
					(typeof $bool268.__nonzero__=='function'?
						$bool268.__nonzero__() :
						(typeof $bool268.__len__=='function'?
							($bool268.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or48:(($eq253=$p['getattr']($m['AnnotationLocation'], 'SOUTHWEST'))===($eq254=$p['getattr'](self, 'location'))&&$eq253===null?true:
				($eq253===null?false:($eq254===null?false:
					((typeof $eq253=='object'||typeof $eq253=='function')&&typeof $eq253.__cmp__=='function'?$eq253.__cmp__($eq254) === 0:
						((typeof $eq254=='object'||typeof $eq254=='function')&&typeof $eq254.__cmp__=='function'?$eq254.__cmp__($eq253) === 0:
							$eq253==$eq254)))))))) === null || $bool269 === false || $bool269 === 0 || $bool269 === '' ?
					false :
					(typeof $bool269=='object'?
						(typeof $bool269.__nonzero__=='function'?
							$bool269.__nonzero__() :
							(typeof $bool269.__len__=='function'?
								($bool269.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = xMin;
			}
			else if ((($bool272=((($bool270=$or50=(($eq255=$p['getattr']($m['AnnotationLocation'], 'NORTHEAST'))===($eq256=$p['getattr'](self, 'location'))&&$eq255===null?true:
				($eq255===null?false:($eq256===null?false:
					((typeof $eq255=='object'||typeof $eq255=='function')&&typeof $eq255.__cmp__=='function'?$eq255.__cmp__($eq256) === 0:
						((typeof $eq256=='object'||typeof $eq256=='function')&&typeof $eq256.__cmp__=='function'?$eq256.__cmp__($eq255) === 0:
							$eq255==$eq256)))))) === null || $bool270 === false || $bool270 === 0 || $bool270 === '' ?
				false :
				(typeof $bool270=='object'?
					(typeof $bool270.__nonzero__=='function'?
						$bool270.__nonzero__() :
						(typeof $bool270.__len__=='function'?
							($bool270.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or50:((($bool271=$or51=(($eq257=$p['getattr']($m['AnnotationLocation'], 'EAST'))===($eq258=$p['getattr'](self, 'location'))&&$eq257===null?true:
				($eq257===null?false:($eq258===null?false:
					((typeof $eq257=='object'||typeof $eq257=='function')&&typeof $eq257.__cmp__=='function'?$eq257.__cmp__($eq258) === 0:
						((typeof $eq258=='object'||typeof $eq258=='function')&&typeof $eq258.__cmp__=='function'?$eq258.__cmp__($eq257) === 0:
							$eq257==$eq258)))))) === null || $bool271 === false || $bool271 === 0 || $bool271 === '' ?
				false :
				(typeof $bool271=='object'?
					(typeof $bool271.__nonzero__=='function'?
						$bool271.__nonzero__() :
						(typeof $bool271.__len__=='function'?
							($bool271.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or51:(($eq259=$p['getattr']($m['AnnotationLocation'], 'SOUTHEAST'))===($eq260=$p['getattr'](self, 'location'))&&$eq259===null?true:
				($eq259===null?false:($eq260===null?false:
					((typeof $eq259=='object'||typeof $eq259=='function')&&typeof $eq259.__cmp__=='function'?$eq259.__cmp__($eq260) === 0:
						((typeof $eq260=='object'||typeof $eq260=='function')&&typeof $eq260.__cmp__=='function'?$eq260.__cmp__($eq259) === 0:
							$eq259==$eq260)))))))) === null || $bool272 === false || $bool272 === 0 || $bool272 === '' ?
					false :
					(typeof $bool272=='object'?
						(typeof $bool272.__nonzero__=='function'?
							$bool272.__nonzero__() :
							(typeof $bool272.__len__=='function'?
								($bool272.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = xMax;
			}
			else {
				result = (typeof ($div105=(typeof ($add213=xMin)==typeof ($add214=xMax) && (typeof $add213=='number'||typeof $add213=='string')?
					$add213+$add214:
					$p['op_add']($add213,$add214)))==typeof ($div106=2) && typeof $div105=='number' && $div106 !== 0?
					$div105/$div106:
					$p['op_div']($div105,$div106));
			}
			return result;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid'],['xMouse']]);
		$cls_definition['getUpperLeftX'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftY', function(height, y, yPrev, yNext, yMin, yMax, yMid, yMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
				yMouse = arguments[8];
			}
			var $eq279,$eq278,$eq277,$eq276,$eq275,$eq274,$eq273,$eq272,$eq271,$bool283,$bool284,$eq263,$bool282,result,$bool280,$bool281,$eq265,$eq282,$eq283,$eq280,$eq281,$eq284,$add216,$add215,$eq261,$eq262,$eq264,$eq266,$eq267,$eq268,$eq269,$div107,$eq270,$bool277,$bool276,$bool275,$bool274,$bool273,$div108,$bool279,$bool278,$or58,$or53,$or55,$or54,$or57,$or56;
			if ((($bool273=(($eq261=$p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE'))===($eq262=$p['getattr'](self, 'location'))&&$eq261===null?true:
				($eq261===null?false:($eq262===null?false:
					((typeof $eq261=='object'||typeof $eq261=='function')&&typeof $eq261.__cmp__=='function'?$eq261.__cmp__($eq262) === 0:
						((typeof $eq262=='object'||typeof $eq262=='function')&&typeof $eq262.__cmp__=='function'?$eq262.__cmp__($eq261) === 0:
							$eq261==$eq262)))))) === null || $bool273 === false || $bool273 === 0 || $bool273 === '' ?
					false :
					(typeof $bool273=='object'?
						(typeof $bool273.__nonzero__=='function'?
							$bool273.__nonzero__() :
							(typeof $bool273.__len__=='function'?
								($bool273.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool274=(($eq263=$p['getattr']($m['GChartConsts'], 'NAI'))===($eq264=yMouse)&&$eq263===null?true:
					($eq263===null?false:($eq264===null?false:
						((typeof $eq263=='object'||typeof $eq263=='function')&&typeof $eq263.__cmp__=='function'?$eq263.__cmp__($eq264) === 0:
							((typeof $eq264=='object'||typeof $eq264=='function')&&typeof $eq264.__cmp__=='function'?$eq264.__cmp__($eq263) === 0:
								$eq263==$eq264)))))) === null || $bool274 === false || $bool274 === 0 || $bool274 === '' ?
						false :
						(typeof $bool274=='object'?
							(typeof $bool274.__nonzero__=='function'?
								$bool274.__nonzero__() :
								(typeof $bool274.__len__=='function'?
									($bool274.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr']($m['Double'], 'NaN');
				}
				else {
					result = yMouse;
				}
			}
			else if ((($bool275=(($eq265=$p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE_SNAP_TO_X'))===($eq266=$p['getattr'](self, 'location'))&&$eq265===null?true:
				($eq265===null?false:($eq266===null?false:
					((typeof $eq265=='object'||typeof $eq265=='function')&&typeof $eq265.__cmp__=='function'?$eq265.__cmp__($eq266) === 0:
						((typeof $eq266=='object'||typeof $eq266=='function')&&typeof $eq266.__cmp__=='function'?$eq266.__cmp__($eq265) === 0:
							$eq265==$eq266)))))) === null || $bool275 === false || $bool275 === 0 || $bool275 === '' ?
					false :
					(typeof $bool275=='object'?
						(typeof $bool275.__nonzero__=='function'?
							$bool275.__nonzero__() :
							(typeof $bool275.__len__=='function'?
								($bool275.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool276=(($eq267=$p['getattr']($m['GChartConsts'], 'NAI'))===($eq268=yMouse)&&$eq267===null?true:
					($eq267===null?false:($eq268===null?false:
						((typeof $eq267=='object'||typeof $eq267=='function')&&typeof $eq267.__cmp__=='function'?$eq267.__cmp__($eq268) === 0:
							((typeof $eq268=='object'||typeof $eq268=='function')&&typeof $eq268.__cmp__=='function'?$eq268.__cmp__($eq267) === 0:
								$eq267==$eq268)))))) === null || $bool276 === false || $bool276 === 0 || $bool276 === '' ?
						false :
						(typeof $bool276=='object'?
							(typeof $bool276.__nonzero__=='function'?
								$bool276.__nonzero__() :
								(typeof $bool276.__len__=='function'?
									($bool276.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr']($m['Double'], 'NaN');
				}
				else {
					result = yMouse;
				}
			}
			else if ((($bool277=(($eq269=$p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE_SNAP_TO_Y'))===($eq270=$p['getattr'](self, 'location'))&&$eq269===null?true:
				($eq269===null?false:($eq270===null?false:
					((typeof $eq269=='object'||typeof $eq269=='function')&&typeof $eq269.__cmp__=='function'?$eq269.__cmp__($eq270) === 0:
						((typeof $eq270=='object'||typeof $eq270=='function')&&typeof $eq270.__cmp__=='function'?$eq270.__cmp__($eq269) === 0:
							$eq269==$eq270)))))) === null || $bool277 === false || $bool277 === 0 || $bool277 === '' ?
					false :
					(typeof $bool277=='object'?
						(typeof $bool277.__nonzero__=='function'?
							$bool277.__nonzero__() :
							(typeof $bool277.__len__=='function'?
								($bool277.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool278=(($eq271=$p['getattr']($m['GChartConsts'], 'NAI'))===($eq272=yMouse)&&$eq271===null?true:
					($eq271===null?false:($eq272===null?false:
						((typeof $eq271=='object'||typeof $eq271=='function')&&typeof $eq271.__cmp__=='function'?$eq271.__cmp__($eq272) === 0:
							((typeof $eq272=='object'||typeof $eq272=='function')&&typeof $eq272.__cmp__=='function'?$eq272.__cmp__($eq271) === 0:
								$eq271==$eq272)))))) === null || $bool278 === false || $bool278 === 0 || $bool278 === '' ?
						false :
						(typeof $bool278=='object'?
							(typeof $bool278.__nonzero__=='function'?
								$bool278.__nonzero__() :
								(typeof $bool278.__len__=='function'?
									($bool278.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr']($m['Double'], 'NaN');
				}
				else {
					result = y;
				}
			}
			else if ((($bool281=((($bool279=$or53=(($eq273=$p['getattr']($m['AnnotationLocation'], 'NORTHWEST'))===($eq274=$p['getattr'](self, 'location'))&&$eq273===null?true:
				($eq273===null?false:($eq274===null?false:
					((typeof $eq273=='object'||typeof $eq273=='function')&&typeof $eq273.__cmp__=='function'?$eq273.__cmp__($eq274) === 0:
						((typeof $eq274=='object'||typeof $eq274=='function')&&typeof $eq274.__cmp__=='function'?$eq274.__cmp__($eq273) === 0:
							$eq273==$eq274)))))) === null || $bool279 === false || $bool279 === 0 || $bool279 === '' ?
				false :
				(typeof $bool279=='object'?
					(typeof $bool279.__nonzero__=='function'?
						$bool279.__nonzero__() :
						(typeof $bool279.__len__=='function'?
							($bool279.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or53:((($bool280=$or54=(($eq275=$p['getattr']($m['AnnotationLocation'], 'NORTH'))===($eq276=$p['getattr'](self, 'location'))&&$eq275===null?true:
				($eq275===null?false:($eq276===null?false:
					((typeof $eq275=='object'||typeof $eq275=='function')&&typeof $eq275.__cmp__=='function'?$eq275.__cmp__($eq276) === 0:
						((typeof $eq276=='object'||typeof $eq276=='function')&&typeof $eq276.__cmp__=='function'?$eq276.__cmp__($eq275) === 0:
							$eq275==$eq276)))))) === null || $bool280 === false || $bool280 === 0 || $bool280 === '' ?
				false :
				(typeof $bool280=='object'?
					(typeof $bool280.__nonzero__=='function'?
						$bool280.__nonzero__() :
						(typeof $bool280.__len__=='function'?
							($bool280.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or54:(($eq277=$p['getattr']($m['AnnotationLocation'], 'NORTHEAST'))===($eq278=$p['getattr'](self, 'location'))&&$eq277===null?true:
				($eq277===null?false:($eq278===null?false:
					((typeof $eq277=='object'||typeof $eq277=='function')&&typeof $eq277.__cmp__=='function'?$eq277.__cmp__($eq278) === 0:
						((typeof $eq278=='object'||typeof $eq278=='function')&&typeof $eq278.__cmp__=='function'?$eq278.__cmp__($eq277) === 0:
							$eq277==$eq278)))))))) === null || $bool281 === false || $bool281 === 0 || $bool281 === '' ?
					false :
					(typeof $bool281=='object'?
						(typeof $bool281.__nonzero__=='function'?
							$bool281.__nonzero__() :
							(typeof $bool281.__len__=='function'?
								($bool281.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = yMin;
			}
			else if ((($bool284=((($bool282=$or56=(($eq279=$p['getattr']($m['AnnotationLocation'], 'SOUTHWEST'))===($eq280=$p['getattr'](self, 'location'))&&$eq279===null?true:
				($eq279===null?false:($eq280===null?false:
					((typeof $eq279=='object'||typeof $eq279=='function')&&typeof $eq279.__cmp__=='function'?$eq279.__cmp__($eq280) === 0:
						((typeof $eq280=='object'||typeof $eq280=='function')&&typeof $eq280.__cmp__=='function'?$eq280.__cmp__($eq279) === 0:
							$eq279==$eq280)))))) === null || $bool282 === false || $bool282 === 0 || $bool282 === '' ?
				false :
				(typeof $bool282=='object'?
					(typeof $bool282.__nonzero__=='function'?
						$bool282.__nonzero__() :
						(typeof $bool282.__len__=='function'?
							($bool282.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or56:((($bool283=$or57=(($eq281=$p['getattr']($m['AnnotationLocation'], 'SOUTH'))===($eq282=$p['getattr'](self, 'location'))&&$eq281===null?true:
				($eq281===null?false:($eq282===null?false:
					((typeof $eq281=='object'||typeof $eq281=='function')&&typeof $eq281.__cmp__=='function'?$eq281.__cmp__($eq282) === 0:
						((typeof $eq282=='object'||typeof $eq282=='function')&&typeof $eq282.__cmp__=='function'?$eq282.__cmp__($eq281) === 0:
							$eq281==$eq282)))))) === null || $bool283 === false || $bool283 === 0 || $bool283 === '' ?
				false :
				(typeof $bool283=='object'?
					(typeof $bool283.__nonzero__=='function'?
						$bool283.__nonzero__() :
						(typeof $bool283.__len__=='function'?
							($bool283.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or57:(($eq283=$p['getattr']($m['AnnotationLocation'], 'SOUTHEAST'))===($eq284=$p['getattr'](self, 'location'))&&$eq283===null?true:
				($eq283===null?false:($eq284===null?false:
					((typeof $eq283=='object'||typeof $eq283=='function')&&typeof $eq283.__cmp__=='function'?$eq283.__cmp__($eq284) === 0:
						((typeof $eq284=='object'||typeof $eq284=='function')&&typeof $eq284.__cmp__=='function'?$eq284.__cmp__($eq283) === 0:
							$eq283==$eq284)))))))) === null || $bool284 === false || $bool284 === 0 || $bool284 === '' ?
					false :
					(typeof $bool284=='object'?
						(typeof $bool284.__nonzero__=='function'?
							$bool284.__nonzero__() :
							(typeof $bool284.__len__=='function'?
								($bool284.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = yMax;
			}
			else {
				result = (typeof ($div107=(typeof ($add215=yMin)==typeof ($add216=yMax) && (typeof $add215=='number'||typeof $add215=='string')?
					$add215+$add216:
					$p['op_add']($add215,$add216)))==typeof ($div108=2) && typeof $div107=='number' && $div108 !== 0?
					$div107/$div108:
					$p['op_div']($div107,$div108));
			}
			return result;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid'],['yMouse']]);
		$cls_definition['getUpperLeftY'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AnnotationAnchor', $p['tuple']($bases), $data);
	})();
	$m['ANCHOR_CENTER'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
	$m['ANCHOR_EAST'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'EAST'));
	$m['ANCHOR_MOUSE'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE'));
	$m['ANCHOR_MOUSE_SNAP_TO_X'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE_SNAP_TO_X'));
	$m['ANCHOR_MOUSE_SNAP_TO_Y'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'AT_THE_MOUSE_SNAP_TO_Y'));
	$m['ANCHOR_NORTH'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'NORTH'));
	$m['ANCHOR_NORTHEAST'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'NORTHEAST'));
	$m['ANCHOR_NORTHWEST'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'NORTHWEST'));
	$m['ANCHOR_SOUTH'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'SOUTH'));
	$m['ANCHOR_SOUTHEAST'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'SOUTHEAST'));
	$m['ANCHOR_SOUTHWEST'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'SOUTHWEST'));
	$m['ANCHOR_WEST'] = $m['AnnotationAnchor']($p['getattr']($m['AnnotationLocation'], 'WEST'));
	$m['BOX_CENTER'] = $m['SymbolType'](0, 0, 0, 0, 0, 0);
	$m['BOX_EAST'] = $m['SymbolType'](1, 0, 0.5, (typeof ($usub10=0.5)=='number'?
		-$usub10:
		$p['op_usub']($usub10)), 0, 0);
	$m['BOX_NORTH'] = $m['SymbolType'](0, (typeof ($usub11=1)=='number'?
		-$usub11:
		$p['op_usub']($usub11)), 0, 0, (typeof ($usub12=0.5)=='number'?
		-$usub12:
		$p['op_usub']($usub12)), 0.5);
	$m['BOX_NORTHEAST'] = $m['SymbolType'](1, (typeof ($usub13=1)=='number'?
		-$usub13:
		$p['op_usub']($usub13)), 0.5, (typeof ($usub14=0.5)=='number'?
		-$usub14:
		$p['op_usub']($usub14)), (typeof ($usub15=0.5)=='number'?
		-$usub15:
		$p['op_usub']($usub15)), 0.5);
	$m['BOX_NORTHWEST'] = $m['SymbolType']((typeof ($usub16=1)=='number'?
		-$usub16:
		$p['op_usub']($usub16)), (typeof ($usub17=1)=='number'?
		-$usub17:
		$p['op_usub']($usub17)), (typeof ($usub18=0.5)=='number'?
		-$usub18:
		$p['op_usub']($usub18)), 0.5, (typeof ($usub19=0.5)=='number'?
		-$usub19:
		$p['op_usub']($usub19)), 0.5);
	$m['BOX_SOUTH'] = $m['SymbolType'](0, 1, 0, 0, 0.5, (typeof ($usub20=0.5)=='number'?
		-$usub20:
		$p['op_usub']($usub20)));
	$m['BOX_SOUTHEAST'] = $m['SymbolType'](1, 1, 0.5, (typeof ($usub21=0.5)=='number'?
		-$usub21:
		$p['op_usub']($usub21)), 0.5, (typeof ($usub22=0.5)=='number'?
		-$usub22:
		$p['op_usub']($usub22)));
	$m['BOX_SOUTHWEST'] = $m['SymbolType']((typeof ($usub23=1)=='number'?
		-$usub23:
		$p['op_usub']($usub23)), 1, (typeof ($usub24=0.5)=='number'?
		-$usub24:
		$p['op_usub']($usub24)), 0.5, 0.5, (typeof ($usub25=0.5)=='number'?
		-$usub25:
		$p['op_usub']($usub25)));
	$m['BOX_WEST'] = $m['SymbolType']((typeof ($usub26=1)=='number'?
		-$usub26:
		$p['op_usub']($usub26)), 0, (typeof ($usub27=0.5)=='number'?
		-$usub27:
		$p['op_usub']($usub27)), 0.5, 0, 0);
	$m['HBAR_BASELINE_CENTER'] = $m['HBarBaseline'](0, 0);
	$m['HBAR_BASELINE_NORTH'] = $m['HBarBaseline'](0, (typeof ($usub28=1)=='number'?
		-$usub28:
		$p['op_usub']($usub28)));
	$m['HBAR_BASELINE_SOUTH'] = $m['HBarBaseline'](0, 1);
	$m['HBAR_EAST'] = $m['HBarRight'](1, 0);
	$m['line'] = $m['LineSymbolType']();
	$m['HBAR_NEXT'] = $m['line'];
	$m['HBAR_NORTHEAST'] = $m['HBarRight'](1, (typeof ($usub29=1)=='number'?
		-$usub29:
		$p['op_usub']($usub29)));
	$m['HBAR_NORTHWEST'] = $m['HBarLeft']((typeof ($usub30=1)=='number'?
		-$usub30:
		$p['op_usub']($usub30)), (typeof ($usub31=1)=='number'?
		-$usub31:
		$p['op_usub']($usub31)));
	$m['HBAR_PREV'] = $m['line'];
	$m['HBAR_SOUTHEAST'] = $m['HBarRight'](1, 1);
	$m['HBAR_SOUTHWEST'] = $m['HBarLeft']((typeof ($usub32=1)=='number'?
		-$usub32:
		$p['op_usub']($usub32)), 1);
	$m['HBAR_WEST'] = $m['HBarLeft']((typeof ($usub33=1)=='number'?
		-$usub33:
		$p['op_usub']($usub33)), 0);
	$m['LINE'] = $m['line'];
	$m['LINE_CANVAS'] = $m['line'];
	$m['SymbolTypeNone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}

			return 0;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}

			return 0;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SymbolTypeNone', $p['tuple']($bases), $data);
	})();
	$m['NONE'] = $m['SymbolTypeNone'](0, 0, 0, 0, 0, 0);
	$m['PIE_SLICE_HORIZONTAL_SHADING'] = $m['PieSliceSymbolType'](true, false, false, 0, 0, 0, 0);
	$m['PIE_SLICE_VERTICAL_SHADING'] = $m['PieSliceSymbolType'](false, true, false, 0, 0, 0, 0);
	$m['PIE_SLICE_HATCHED_SHADING'] = $m['PieSliceSymbolType'](true, true, false, 0, 0, 0, 0);
	$m['PIE_SLICE_OPTIMAL_SHADING'] = $m['PieSliceSymbolType'](false, false, true, 0, 0, 0, 0);
	$m['VBAR_BASELINE_CENTER'] = $m['VBarBaseline'](0, 0);
	$m['VBAR_BASELINE_WEST'] = $m['VBarBaseline']((typeof ($usub34=1)=='number'?
		-$usub34:
		$p['op_usub']($usub34)), 0);
	$m['VBAR_BASELINE_EAST'] = $m['VBarBaseline'](1, 0);
	$m['VBAR_NEXT'] = $m['line'];
	$m['VBAR_NORTH'] = $m['VBarTop'](0, (typeof ($usub35=1)=='number'?
		-$usub35:
		$p['op_usub']($usub35)));
	$m['VBAR_NORTHEAST'] = $m['VBarTop'](1, (typeof ($usub36=1)=='number'?
		-$usub36:
		$p['op_usub']($usub36)));
	$m['VBAR_NORTHWEST'] = $m['VBarTop']((typeof ($usub37=1)=='number'?
		-$usub37:
		$p['op_usub']($usub37)), (typeof ($usub38=1)=='number'?
		-$usub38:
		$p['op_usub']($usub38)));
	$m['VBAR_PREV'] = $m['line'];
	$m['VBAR_SOUTH'] = $m['VBarBottom'](0, 1);
	$m['VBAR_SOUTHEAST'] = $m['VBarBottom'](1, 1);
	$m['VBAR_SOUTHWEST'] = $m['VBarBottom']((typeof ($usub39=1)=='number'?
		-$usub39:
		$p['op_usub']($usub39)), 1);
	$m['SymbolTypeXGrid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('getAdjustedHeight', function(height, y, yPrev, yNext, yMin, yMax, yMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
			}
			var $sub261,$sub262;
			return (typeof ($sub261=yMax)==typeof ($sub262=yMin) && (typeof $sub261=='number'||typeof $sub261=='string')?
				$sub261-$sub262:
				$p['op_sub']($sub261,$sub262));
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid']]);
		$cls_definition['getAdjustedHeight'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftY', function(height, y, yPrev, yNext, yMin, yMax, yMid, yMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
				y = arguments[2];
				yPrev = arguments[3];
				yNext = arguments[4];
				yMin = arguments[5];
				yMax = arguments[6];
				yMid = arguments[7];
				yMouse = arguments[8];
			}

			return yMin;
		}
	, 1, [null,null,['self'],['height'],['y'],['yPrev'],['yNext'],['yMin'],['yMax'],['yMid'],['yMouse']]);
		$cls_definition['getUpperLeftY'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return 1;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SymbolTypeXGrid', $p['tuple']($bases), $data);
	})();
	$m['XGRIDLINE'] = $m['SymbolTypeXGrid'](0, 0, 0, 0, 0.5, 0.5, false);
	$m['SymbolTypeYGrid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.SymbolType';
		$method = $pyjs__bind_method2('getAdjustedWidth', function(width, x, xPrev, xNext, xMin, xMax, xMid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
			}
			var $sub264,$sub263;
			return (typeof ($sub263=xMax)==typeof ($sub264=xMin) && (typeof $sub263=='number'||typeof $sub263=='string')?
				$sub263-$sub264:
				$p['op_sub']($sub263,$sub264));
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid']]);
		$cls_definition['getAdjustedWidth'] = $method;
		$method = $pyjs__bind_method2('getUpperLeftX', function(width, x, xPrev, xNext, xMin, xMax, xMid, xMouse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				x = arguments[2];
				xPrev = arguments[3];
				xNext = arguments[4];
				xMin = arguments[5];
				xMax = arguments[6];
				xMid = arguments[7];
				xMouse = arguments[8];
			}

			return xMin;
		}
	, 1, [null,null,['self'],['width'],['x'],['xPrev'],['xNext'],['xMin'],['xMax'],['xMid'],['xMouse']]);
		$cls_definition['getUpperLeftX'] = $method;
		$method = $pyjs__bind_method2('getIconHeight', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return 1;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconHeight'] = $method;
		$method = $pyjs__bind_method2('getIconWidth', function(legendFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				legendFontSize = arguments[1];
			}

			return legendFontSize;
		}
	, 1, [null,null,['self'],['legendFontSize']]);
		$cls_definition['getIconWidth'] = $method;
		var $bases = new Array($m['SymbolType']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SymbolTypeYGrid', $p['tuple']($bases), $data);
	})();
	$m['YGRIDLINE'] = $m['SymbolTypeYGrid'](0, 0, 0.5, 0.5, 0, 0, true);
	$m['Y2GRIDLINE'] = $m['YGRIDLINE'];
	$m['DEFAULT_SYMBOL_TYPE'] = $m['BOX_CENTER'];
	return this;
}; /* end pyjamas.chart.SymbolType */


/* end module: pyjamas.chart.SymbolType */


/*
PYJS_DEPS: ['math', 'pyjamas.chart.Double', 'pyjamas', 'pyjamas.chart', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.GChartUtil', 'pyjamas.chart.GChartConsts']
*/

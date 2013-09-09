/* start module: pyjamas.chart.Axis */
$pyjs.loaded_modules['pyjamas.chart.Axis'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.Axis'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.Axis'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.Axis"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.Axis>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Axis';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['Axis'] = $pyjs.loaded_modules['pyjamas.chart.Axis'];


	$m['time'] = $p['___import___']('time', 'pyjamas.chart');
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.chart', null, false);
	$m['NumberFormat'] = $p['___import___']('pyjamas.chart.NumberFormat', 'pyjamas.chart', null, false);
	$m['DateTimeFormat'] = $p['___import___']('pyjamas.chart.DateTimeFormat', 'pyjamas.chart', null, false);
	$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
	$m['TickLocation'] = $p['___import___']('pyjamas.chart.TickLocation', 'pyjamas.chart', null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
	$m['Annotation'] = $p['___import___']('pyjamas.chart.Annotation', 'pyjamas.chart', null, false);
	$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_COUNT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_COUNT', 'pyjamas.chart', null, false);
	$m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart', null, false);
	$m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_LABEL_FONT_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_COLOR', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_LABEL_FONTSIZE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONTSIZE', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_LABEL_FONT_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_STYLE', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_LABEL_FONT_WEIGHT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_WEIGHT', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_LABEL_FORMAT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FORMAT', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_LENGTH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LENGTH', 'pyjamas.chart', null, false);
	$m['DEFAULT_TICK_THICKNESS'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_THICKNESS', 'pyjamas.chart', null, false);
	$m['Y2TICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2TICKS_ID', 'pyjamas.chart', null, false);
	$m['Y2GRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2GRIDLINES_ID', 'pyjamas.chart', null, false);
	$m['Y2AXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2AXIS_ID', 'pyjamas.chart', null, false);
	$m['YTICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YTICKS_ID', 'pyjamas.chart', null, false);
	$m['YGRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YGRIDLINES_ID', 'pyjamas.chart', null, false);
	$m['YAXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YAXIS_ID', 'pyjamas.chart', null, false);
	$m['XTICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XTICKS_ID', 'pyjamas.chart', null, false);
	$m['XGRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XGRIDLINES_ID', 'pyjamas.chart', null, false);
	$m['XAXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XAXIS_ID', 'pyjamas.chart', null, false);
	$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart', null, false);
	$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart', null, false);
	$m['Y_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart', null, false);
	$m['Y2_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart', null, false);
	$m['htmlHeight'] = $p['___import___']('pyjamas.chart.GChartUtil.htmlHeight', 'pyjamas.chart', null, false);
	$m['htmlWidth'] = $p['___import___']('pyjamas.chart.GChartUtil.htmlWidth', 'pyjamas.chart', null, false);
	$m['NUMBER_FORMAT_TYPE'] = 0;
	$m['DATE_FORMAT_TYPE'] = 1;
	$m['LOG10INVERSE_FORMAT_TYPE'] = 2;
	$m['LOG2INVERSE_FORMAT_TYPE'] = 3;
	$m['AxisLimits'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.Axis';
		$method = $pyjs__bind_method2('__init__', function(min, max) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				min = arguments[1];
				max = arguments[2];
			}

			self.min = min;
			self.max = max;
			return null;
		}
	, 1, [null,null,['self'],['min'],['max']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('equals', function(al) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				al = arguments[1];
			}
			var $eq2,$and1,$eq1,$eq4,$bool1,$eq3,$and2;
			return ((($bool1=$and1=(($eq1=$p['getattr'](al, 'min'))===($eq2=$p['min'])&&$eq1===null?true:
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
					 true ) )?(($eq3=$p['getattr'](al, 'max'))===($eq4=$p['max'])&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))):$and1);
		}
	, 1, [null,null,['self'],['al']]);
		$cls_definition['equals'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AxisLimits', $p['tuple']($bases), $data);
	})();
	$m['Axis'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.Axis';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}

			self.chart = chart;
			self.tickLocation = $p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION');
			self.numberFormat = $m['NumberFormat']['getFormat']($m['DEFAULT_TICK_LABEL_FORMAT']);
			self.dateFormat = $m['DateTimeFormat']['getShortDateTimeFormat']();
			self.tickLabelFormatType = $m['NUMBER_FORMAT_TYPE'];
			self.nCurvesVisibleOnAxis = 0;
			self.currentLimits = $m['AxisLimits']($p['getattr']($m['Double'], 'MAX_VALUE'), (typeof ($usub1=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			self.previousLimits = $m['AxisLimits']((typeof ($usub2=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub2:
				$p['op_usub']($usub2)), $p['getattr']($m['Double'], 'MAX_VALUE'));
			self.axisLabel = null;
			self.axisLabelThickness = $m['NAI'];
			self.hasGridlines = false;
			self.tickCount = $m['DEFAULT_TICK_COUNT'];
			self.axisMax = $p['getattr']($m['Double'], 'NaN');
			self.axisMin = $p['getattr']($m['Double'], 'NaN');
			self.tickLabelFontColor = $m['DEFAULT_TICK_LABEL_FONT_COLOR'];
			self.tickLabelFontSize = $m['DEFAULT_TICK_LABEL_FONTSIZE'];
			self.tickLabelFontStyle = $m['DEFAULT_TICK_LABEL_FONT_STYLE'];
			self.tickLabelFontWeight = $m['DEFAULT_TICK_LABEL_FONT_WEIGHT'];
			self.tickLabelFormat = $m['DEFAULT_TICK_LABEL_FORMAT'];
			self.tickLabelThickness = $m['NAI'];
			self.tickLabelPadding = 0;
			self.ticksPerLabel = 1;
			self.ticksPerGridline = 1;
			self.tickLength = $m['DEFAULT_TICK_LENGTH'];
			self.tickThickness = $m['DEFAULT_TICK_THICKNESS'];
			self.axisVisible = true;
			return null;
		}
	, 1, [null,null,['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getChart', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'chart');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChart'] = $method;
		$method = $pyjs__bind_method2('getSystemCurve', function(idx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}

			return self['chart']['getSystemCurve'](idx);
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['getSystemCurve'] = $method;
		$method = $pyjs__bind_method2('incrementCurves', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			self.nCurvesVisibleOnAxis = (typeof ($add1=$p['getattr'](self, 'nCurvesVisibleOnAxis'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['incrementCurves'] = $method;
		$method = $pyjs__bind_method2('decrementCurves', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub2,$sub1;
			self.nCurvesVisibleOnAxis = (typeof ($sub1=$p['getattr'](self, 'nCurvesVisibleOnAxis'))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['decrementCurves'] = $method;
		$method = $pyjs__bind_method2('addTickAsPoint', function(tickPosition, tickLabel, tickWidget, widthUpperBound, heightUpperBound) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickPosition = arguments[1];
				tickLabel = arguments[2];
				tickWidget = arguments[3];
				widthUpperBound = arguments[4];
				heightUpperBound = arguments[5];
			}
			var $bool10,$bool11,$bool12,$mul8,$and5,$bool13,$eq10,$eq11,$eq12,$eq13,$eq14,$mul5,$eq16,$bool9,$eq15,$and8,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq6,$and7,$and3,$and4,$eq7,$and6,$eq5,$bool2,$bool3,$bool6,$bool7,$bool4,$bool5,$mul7,$mul6,$bool8,$mul4,$mul3,$mul2,$mul1,$cmp4,c,$cmp1,$cmp3,$cmp2,p;
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			if ((($bool2=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				c['addPoint'](tickPosition, (typeof ($mul1=$p['getattr'](self, 'axisPosition'))==typeof ($mul2=$p['getattr']($m['Double'], 'MAX_VALUE')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
			}
			else {
				c['addPoint']((typeof ($mul3=$p['getattr'](self, 'axisPosition'))==typeof ($mul4=$p['getattr']($m['Double'], 'MAX_VALUE')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)), tickPosition);
			}
			if ((($bool4=((($bool3=$and3=(($eq5=null)===($eq6=tickLabel)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq7=null)===($eq8=tickWidget)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))):$and3)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return null;
			}
			p = c['getPoint']();
			if ((($bool5=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				p['setAnnotationLocation'](((($bool7=$or1=((($bool6=$and5=((($cmp1=$p['getattr'](self, 'axisPosition'))===($cmp2=0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr']($m['AnnotationLocation'], 'SOUTH'):$and5)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['getattr']($m['AnnotationLocation'], 'NORTH')));
				if ((($bool8=!(($eq9=$p['getattr'](self, 'tickLabelPadding'))===($eq10=0)&&$eq9===null?true:
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
					p['setAnnotationYShift']((typeof ($mul5=$p['getattr'](self, 'axisPosition'))==typeof ($mul6=(typeof tickLabelPadding == "undefined"?$m.tickLabelPadding:tickLabelPadding)) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)));
				}
			}
			else {
				p['setAnnotationLocation'](((($bool10=$or3=((($bool9=$and7=((($cmp3=$p['getattr'](self, 'axisPosition'))===($cmp4=0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr']($m['AnnotationLocation'], 'WEST'):$and7)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:$p['getattr']($m['AnnotationLocation'], 'EAST')));
				if ((($bool11=!(($eq11=$p['getattr'](self, 'tickLabelPadding'))===($eq12=0)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					p['setAnnotationXShift']((typeof ($mul7=$p['getattr'](self, 'axisPosition'))==typeof ($mul8=$p['getattr'](self, 'tickLabelPadding')) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)));
				}
			}
			if ((($bool12=!(($eq13=null)===($eq14=tickLabel)&&$eq13===null?true:
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
				p['setAnnotationText'](tickLabel, widthUpperBound, heightUpperBound);
			}
			else if ((($bool13=!(($eq15=null)===($eq16=tickWidget)&&$eq15===null?true:
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
				p['setAnnotationWidget'](tickWidget, widthUpperBound, heightUpperBound);
			}
			p['setAnnotationFontSize'](self['getTickLabelFontSize']());
			p['setAnnotationFontStyle'](self['getTickLabelFontStyle']());
			p['setAnnotationFontColor'](self['getTickLabelFontColor']());
			p['setAnnotationFontWeight'](self['getTickLabelFontWeight']());
			return null;
		}
	, 1, [null,null,['self'],['tickPosition'],['tickLabel'],['tickWidget'],['widthUpperBound'],['heightUpperBound']]);
		$cls_definition['addTickAsPoint'] = $method;
		$method = $pyjs__bind_method2('_addTickLabel', function(tickPosition, tickLabel, widthUpperBound, heightUpperBound) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickPosition = arguments[1];
				tickLabel = arguments[2];
				widthUpperBound = arguments[3];
				heightUpperBound = arguments[4];
			}
			var $bool14,$eq18,cTicks,$eq17;
			self.chartDecorationsChanged = true;
			if ((($bool14=!(($eq17=$m['NAI'])===($eq18=$p['getattr'](self, 'tickCount'))&&$eq17===null?true:
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
				cTicks = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				cTicks['clearPoints']();
				self.tickCount = $m['NAI'];
			}
			self['addTickAsPoint'](tickPosition, tickLabel, null, widthUpperBound, heightUpperBound);
			return null;
		}
	, 1, [null,null,['self'],['tickPosition'],['tickLabel'],['widthUpperBound'],['heightUpperBound']]);
		$cls_definition['_addTickLabel'] = $method;
		$method = $pyjs__bind_method2('addTick', function(tickPosition, tickWidget, widthUpperBound, heightUpperBound) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickPosition = arguments[1];
				tickWidget = arguments[2];
				widthUpperBound = arguments[3];
				heightUpperBound = arguments[4];
			}
			if (typeof tickWidget == 'undefined') tickWidget=arguments.callee.__args__[4][1];
			if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments.callee.__args__[5][1];
			if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments.callee.__args__[6][1];
			var $bool18,$and9,$eq20,$bool19,tiickWidget,$bool15,$bool16,$bool17,$and12,$and10,$and11,$bool21,$bool20,$eq19,cTicks;
			if ((($bool15=(tickWidget === null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				tiickWidget = self['formatAsTickLabel'](tickPosition);
			}
			if ((($bool16=$p['isinstance'](tickWidget, $p['basestring'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				if ((($bool18=((($bool17=$and9=(widthUpperBound === null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(heightUpperBound === null):$and9)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					widthUpperBound = $m['NAI'];
					heightUpperBound = $m['NAI'];
				}
				self['_addTickLabel'](tickPosition, tickWidget, widthUpperBound, heightUpperBound);
				return null;
			}
			if ((($bool20=((($bool19=$and11=(widthUpperBound === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(heightUpperBound === null):$and11)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				widthUpperBound = $m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'];
				heightUpperBound = $m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'];
			}
			self.chartDecorationsChanged = true;
			if ((($bool21=!(($eq19=$m['NAI'])===($eq20=$p['getattr'](self, 'tickCount'))&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				cTicks = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				cTicks['clearPoints']();
				self.tickCount = $m['NAI'];
			}
			self['addTickAsPoint'](tickPosition, null, tickWidget, widthUpperBound, heightUpperBound);
			return null;
		}
	, 1, [null,null,['self'],['tickPosition'],['tickWidget', null],['widthUpperBound', null],['heightUpperBound', null]]);
		$cls_definition['addTick'] = $method;
		$method = $pyjs__bind_method2('clearTicks', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c;
			self.chartDecorationsChanged = true;
			self.tickCount = $m['NAI'];
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			c['clearPoints']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearTicks'] = $method;
		$method = $pyjs__bind_method2('clientToModel', function(clientCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				clientCoordinate = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['clientCoordinate']]);
		$cls_definition['clientToModel'] = $method;
		$method = $pyjs__bind_method2('formatAsTickLabel', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var transDate,$eq26,$eq21,$bool24,$eq23,$eq22,$eq25,result,$bool23,$bool22,$eq24;
			result = null;
			if ((($bool22=(($eq21=$p['getattr'](self, 'tickLabelFormatType'))===($eq22=$m['DATE_FORMAT_TYPE'])&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				transDate = $m['time']['gmtime'](value);
				result = self['dateFormat']['format'](transDate);
			}
			else if ((($bool23=(($eq23=$p['getattr'](self, 'tickLabelFormatType'))===($eq24=$m['LOG10INVERSE_FORMAT_TYPE'])&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				value = $p['pow'](10.0, value);
				result = self['numberFormat']['format'](value);
			}
			else if ((($bool24=(($eq25=$p['getattr'](self, 'tickLabelFormatType'))===($eq26=$m['LOG2INVERSE_FORMAT_TYPE'])&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				value = $p['pow'](2.0, value);
				result = self['numberFormat']['format'](value);
			}
			else {
				result = self['numberFormat']['format'](value);
			}
			return result;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['formatAsTickLabel'] = $method;
		$method = $pyjs__bind_method2('formatNumberAsTickLabel', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return self['formatAsTickLabel'](value);
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['formatNumberAsTickLabel'] = $method;
		$method = $pyjs__bind_method2('getAxisLabel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'axisLabel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisLabel'] = $method;
		$method = $pyjs__bind_method2('getAxisLabelThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq27,text,$eq30,result,$bool25,$bool27,$bool26,$bool29,$bool28,$mul20,$or5,charWidth,$or6,$add5,$and13,$mul9,$eq29,$eq28,DEF_CHARWIDTH,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,EXTRA_CHARWIDTH,$mul19,$mul18,$add3,$bool30,$add6,$add7,$add4,$len1,$and14,$add8;
			result = 0;
			EXTRA_CHARWIDTH = 2;
			DEF_CHARWIDTH = 1;
			if ((($bool25=(($eq27=null)===($eq28=self['getAxisLabel']())&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				result = 0;
			}
			else if ((($bool26=!(($eq29=$m['NAI'])===($eq30=$p['getattr'](self, 'axisLabelThickness'))&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				result = $p['getattr'](self, 'axisLabelThickness');
			}
			else if ((($bool27=$p['hasattr'](self['getAxisLabel'](), 'getHTML')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				charWidth = $m['htmlWidth'](self['getAxisLabel']()['getHTML']());
				result = $p['float_int']($p['round']((typeof ($mul11=(typeof ($mul9=(typeof ($add3=charWidth)==typeof ($add4=EXTRA_CHARWIDTH) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($mul10=self['getTickLabelFontSize']()) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($mul12=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))));
			}
			else if ((($bool28=$p['hasattr'](self['getAxisLabel'](), 'getText')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				text = self['getAxisLabel']()['getText']();
				result = $p['float_int']($p['round']((typeof ($mul15=(typeof ($mul13=(typeof ($add5=EXTRA_CHARWIDTH)==typeof ($add6=((($bool30=$or5=((($bool29=$and13=text) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($len1=text) === null?0:
					(typeof $len1.__array != 'undefined' ? $len1.__array.length:
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'?$len1.length:
								$p['len']($len1))))):$and13)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:0)) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($mul14=self['getTickLabelFontSize']()) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($mul16=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))));
			}
			else {
				result = $p['float_int']($p['round']((typeof ($mul19=(typeof ($mul17=(typeof ($add7=DEF_CHARWIDTH)==typeof ($add8=EXTRA_CHARWIDTH) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($mul18=self['getTickLabelFontSize']()) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($mul20=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))));
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisLabelThickness'] = $method;
		$method = $pyjs__bind_method2('getAxisMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool32,$bool31,$bool33,$eq32,$eq33,$eq31,$eq34;
			if ((($bool32=!(($bool31=(($eq31=$p['getattr']($m['Double'], 'NaN'))===($eq32=$p['getattr'](self, 'axisMax'))&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31.__nonzero__=='function'?
						$bool31.__nonzero__() :
						(typeof $bool31.__len__=='function'?
							($bool31.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				return $p['getattr'](self, 'axisMax');
			}
			else if ((($bool33=!(($eq33=$m['NAI'])===($eq34=$p['getattr'](self, 'tickCount'))&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				return self['getDataMax']();
			}
			else {
				return $p['max'](self['getDataMax'](), self['getTickMax']());
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisMax'] = $method;
		$method = $pyjs__bind_method2('getAxisMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq35,$eq36,$eq37,$bool34,$bool35,$bool36,$eq38;
			if ((($bool35=!(($bool34=(($eq35=$p['getattr']($m['Double'], 'NaN'))===($eq36=$p['getattr'](self, 'axisMin'))&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34.__nonzero__=='function'?
						$bool34.__nonzero__() :
						(typeof $bool34.__len__=='function'?
							($bool34.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				return $p['getattr'](self, 'axisMin');
			}
			else if ((($bool36=!(($eq37=$m['NAI'])===($eq38=$p['getattr'](self, 'tickCount'))&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				return self['getDataMin']();
			}
			else {
				return $p['min'](self['getDataMin'](), self['getTickMin']());
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisMin'] = $method;
		$method = $pyjs__bind_method2('getAxisVisible', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'axisVisible');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisVisible'] = $method;
		$method = $pyjs__bind_method2('getDataMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMax'] = $method;
		$method = $pyjs__bind_method2('getDataMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMin'] = $method;
		$method = $pyjs__bind_method2('getHasGridlines', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (typeof hasGridlines == "undefined"?$m.hasGridlines:hasGridlines);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHasGridlines'] = $method;
		$method = $pyjs__bind_method2('getMouseCoordinate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMouseCoordinate'] = $method;
		$method = $pyjs__bind_method2('getNCurvesVisibleOnAxis', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'nCurvesVisibleOnAxis');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getNCurvesVisibleOnAxis'] = $method;
		$method = $pyjs__bind_method2('getTickCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$eq40,$bool37,$eq39,result;
			result = $p['getattr'](self, 'tickCount');
			if ((($bool37=(($eq39=$m['NAI'])===($eq40=$p['getattr'](self, 'tickCount'))&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				result = c['getNPoints']();
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickCount'] = $method;
		$method = $pyjs__bind_method2('getTickLabelFontWeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLabelFontWeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLabelFontWeight'] = $method;
		$method = $pyjs__bind_method2('getTickLabelFontColor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLabelFontColor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLabelFontColor'] = $method;
		$method = $pyjs__bind_method2('getTickLabelFontStyle', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLabelFontStyle');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLabelFontStyle'] = $method;
		$method = $pyjs__bind_method2('getTickLabelFontSize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLabelFontSize');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLabelFontSize'] = $method;
		$method = $pyjs__bind_method2('getTickLabelFormat', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLabelFormat');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLabelFormat'] = $method;
		$method = $pyjs__bind_method2('getTickLabelPadding', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLabelPadding');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLabelPadding'] = $method;
		$method = $pyjs__bind_method2('getTickLabelThickness', function(needsPopulation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				needsPopulation = arguments[1];
			}
			if (typeof needsPopulation == 'undefined') needsPopulation=arguments.callee.__args__[3][1];
			var $iter1_iter,result,$iter1_array,$mul24,$mul22,$mul23,$mul21,$iter1_nextval,$bool40,maxLength,$bool38,c,$iter1_type,i,$eq42,$eq41,$eq44,$eq43,$iter1_idx,nTicks,$bool39,tt;
			maxLength = 0;
			if ((($bool38=!(($eq41=$p['getattr'](self, 'tickLabelThickness'))===($eq42=$m['NAI'])&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				result = $p['getattr'](self, 'tickLabelThickness');
			}
			else {
				if ((($bool39=needsPopulation) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					self['maybePopulateTicks']();
				}
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nTicks = c['getNPoints']();
				$iter1_iter = $p['range'](nTicks);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					tt = c['getPoint'](i)['getAnnotationText']();
					if ((($bool40=!(($eq43=null)===($eq44=tt)&&$eq43===null?true:
						($eq43===null?false:($eq44===null?false:
							((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
								((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
									$eq43==$eq44)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
						maxLength = $p['max'](maxLength, $m['Annotation']['getNumberOfCharsWide'](tt));
					}
				}
				result = $p['float_int']($p['round']((typeof ($mul23=(typeof ($mul21=maxLength)==typeof ($mul22=$p['getattr'](self, 'tickLabelFontSize')) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)))==typeof ($mul24=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))));
			}
			return result;
		}
	, 1, [null,null,['self'],['needsPopulation', true]]);
		$cls_definition['getTickLabelThickness'] = $method;
		$method = $pyjs__bind_method2('getTicksPerGridline', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'ticksPerGridline');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTicksPerGridline'] = $method;
		$method = $pyjs__bind_method2('getTicksPerLabel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'ticksPerLabel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTicksPerLabel'] = $method;
		$method = $pyjs__bind_method2('getTickLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLength');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLength'] = $method;
		$method = $pyjs__bind_method2('getActualTickLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp5,$eq48,$bool43,$bool42,$bool41,$and15,$eq47,$eq46,$eq45,$cmp6,$mod1,result,$mod2,$and16,$add9,$add10,$and17;
			result = $p['getattr'](self, 'tickLength');
			if ((($bool43=((($bool41=$and15=(($eq45=$p['getattr']($m['TickLocation'], 'CENTERED'))===($eq46=$p['getattr'](self, 'tickLocation'))&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool42=$and16=(($eq47=0)===($eq48=(typeof ($mod1=$p['getattr'](self, 'tickLength'))==typeof ($mod2=2) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)))&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
				false :
				(typeof $bool42=='object'?
					(typeof $bool42.__nonzero__=='function'?
						$bool42.__nonzero__() :
						(typeof $bool42.__len__=='function'?
							($bool42.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp5=$p['getattr'](self, 'tickLength'))===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1):$and16):$and15)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				result = (typeof ($add9=result)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getActualTickLength'] = $method;
		$method = $pyjs__bind_method2('getTickLocation', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tickLocation');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickLocation'] = $method;
		$method = $pyjs__bind_method2('getTickSpace', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq49,$bool44,$eq52,$eq51,$bool45,$eq50,$add11,$add12,$div2,$div1,result;
			if ((($bool44=(($eq49=$p['getattr']($m['TickLocation'], 'CENTERED'))===($eq50=$p['getattr'](self, 'tickLocation'))&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
							$eq49==$eq50)))))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				result = (typeof ($div1=(typeof ($add11=$p['getattr'](self, 'tickLength'))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
			}
			else if ((($bool45=(($eq51=$p['getattr']($m['TickLocation'], 'OUTSIDE'))===($eq52=$p['getattr'](self, 'tickLocation'))&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
							$eq51==$eq52)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				result = $p['getattr'](self, 'tickLength');
			}
			else {
				result = 0;
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickSpace'] = $method;
		$method = $pyjs__bind_method2('getTickThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (typeof tickThickness == "undefined"?$m.tickThickness:tickThickness);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickThickness'] = $method;
		$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToClient'] = $method;
		$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPixel'] = $method;
		$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPlotAreaPixel'] = $method;
		$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['pixelToModel'] = $method;
		$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['plotAreaPixelToModel'] = $method;
		$method = $pyjs__bind_method2('setAxisLabel', function(axisLabel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				axisLabel = arguments[1];
			}
			var $bool46;
			if ((($bool46=$p['isinstance'](axisLabel, $p['basestring'])) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				axisLabel = $m['HTML'](axisLabel);
			}
			self.axisLabel = axisLabel;
			self.chartDecorationsChanged = true;
			return null;
		}
	, 1, [null,null,['self'],['axisLabel']]);
		$cls_definition['setAxisLabel'] = $method;
		$method = $pyjs__bind_method2('setAxisLabelThickness', function(thickness) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				thickness = arguments[1];
			}
			var axisLabelThickness;
			axisLabelThickness = thickness;
			self.chartDecorationsChanged = true;
			return null;
		}
	, 1, [null,null,['self'],['thickness']]);
		$cls_definition['setAxisLabelThickness'] = $method;
		$method = $pyjs__bind_method2('setAxisMax', function(max) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				max = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.axisMax = max;
			return null;
		}
	, 1, [null,null,['self'],['max']]);
		$cls_definition['setAxisMax'] = $method;
		$method = $pyjs__bind_method2('setAxisMin', function(min) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				min = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.axisMin = min;
			return null;
		}
	, 1, [null,null,['self'],['min']]);
		$cls_definition['setAxisMin'] = $method;
		$method = $pyjs__bind_method2('setAxisVisible', function(axisVisible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				axisVisible = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.axisVisible = axisVisible;
			return null;
		}
	, 1, [null,null,['self'],['axisVisible']]);
		$cls_definition['setAxisVisible'] = $method;
		$method = $pyjs__bind_method2('setHasGridlines', function(hasGridlines) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hasGridlines = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.hasGridlines = hasGridlines;
			return null;
		}
	, 1, [null,null,['self'],['hasGridlines']]);
		$cls_definition['setHasGridlines'] = $method;
		$method = $pyjs__bind_method2('setTickCount', function(tickCount) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickCount = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['clearPoints']();
			self.tickCount = tickCount;
			return null;
		}
	, 1, [null,null,['self'],['tickCount']]);
		$cls_definition['setTickCount'] = $method;
		$method = $pyjs__bind_method2('setTickLabelFontWeight', function(cssWeight) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cssWeight = arguments[1];
			}
			var c,$iter2_nextval,$iter2_type,$iter2_iter,i,nPoints,$iter2_idx,$iter2_array;
			self.chartDecorationsChanged = true;
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			nPoints = c['getNPoints']();
			$iter2_iter = $p['range'](nPoints);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				c['getPoint'](i)['setAnnotationFontWeight'](cssWeight);
			}
			self.tickLabelFontWeight = cssWeight;
			return null;
		}
	, 1, [null,null,['self'],['cssWeight']]);
		$cls_definition['setTickLabelFontWeight'] = $method;
		$method = $pyjs__bind_method2('setTickLabelFontColor', function(cssColor) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cssColor = arguments[1];
			}
			var c,$iter3_idx,i,$iter3_array,$iter3_iter,$iter3_type,nPoints,$iter3_nextval;
			self.chartDecorationsChanged = true;
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			nPoints = c['getNPoints']();
			$iter3_iter = $p['range'](nPoints);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				c['getPoint'](i)['setAnnotationFontColor'](cssColor);
			}
			self.tickLabelFontColor = cssColor;
			return null;
		}
	, 1, [null,null,['self'],['cssColor']]);
		$cls_definition['setTickLabelFontColor'] = $method;
		$method = $pyjs__bind_method2('setTickLabelFontStyle', function(cssStyle) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cssStyle = arguments[1];
			}
			var $iter4_idx,c,i,$iter4_nextval,$iter4_array,$iter4_type,nPoints,$iter4_iter;
			self.chartDecorationsChanged = true;
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			nPoints = c['getNPoints']();
			$iter4_iter = $p['range'](nPoints);
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				c['getPoint'](i)['setAnnotationFontStyle'](cssStyle);
			}
			self.tickLabelFontStyle = cssStyle;
			return null;
		}
	, 1, [null,null,['self'],['cssStyle']]);
		$cls_definition['setTickLabelFontStyle'] = $method;
		$method = $pyjs__bind_method2('setTickLabelFontSize', function(tickLabelFontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLabelFontSize = arguments[1];
			}
			var $iter5_nextval,c,i,$iter5_array,$iter5_iter,$iter5_idx,nPoints,$iter5_type;
			self.chartDecorationsChanged = true;
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			nPoints = c['getNPoints']();
			$iter5_iter = $p['range'](nPoints);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				c['getPoint'](i)['setAnnotationFontSize'](tickLabelFontSize);
			}
			self.tickLabelFontSize = tickLabelFontSize;
			return null;
		}
	, 1, [null,null,['self'],['tickLabelFontSize']]);
		$cls_definition['setTickLabelFontSize'] = $method;
		$method = $pyjs__bind_method2('setTickLabelFormat', function(format) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			var $bool47,$bool50,$bool51,$bool49,$bool48,$eq54,$len4,$len2,$len3,$eq53,transFormat;
			if ((($bool47=(($eq53=$p['getattr'](self, 'tickLabelFormat'))===($eq54=format)&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				return null;
			}
			self.chartDecorationsChanged = true;
			if ((($bool48=format['startswith']('=(Date)')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				transFormat = $p['__getslice'](format, (($len2='=(Date)') === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2))))), null);
				if ((($bool49=transFormat['equals']('')) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
					self.dateFormat = $m['DateTimeFormat']['getShortDateTimeFormat']();
				}
				else {
					self.dateFormat = $m['DateTimeFormat']['getFormat'](transFormat);
				}
				self.tickLabelFormatType = $m['DATE_FORMAT_TYPE'];
			}
			else if ((($bool50=format['startswith']('=10^')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				transFormat = $p['__getslice'](format, (($len3='=10^') === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))), null);
				self.numberFormat = $m['NumberFormat']['getFormat'](transFormat);
				self.tickLabelFormatType = $m['LOG10INVERSE_FORMAT_TYPE'];
			}
			else if ((($bool51=format['startswith']('=2^')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				transFormat = $p['__getslice'](format, (($len4='=2^') === null?0:
					(typeof $len4.__array != 'undefined' ? $len4.__array.length:
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'?$len4.length:
								$p['len']($len4))))), null);
				self.numberFormat = $m['NumberFormat']['getFormat'](transFormat);
				self.tickLabelFormatType = $m['LOG2INVERSE_FORMAT_TYPE'];
			}
			else {
				self.numberFormat = $m['NumberFormat']['getFormat'](format);
				self.tickLabelFormatType = $m['NUMBER_FORMAT_TYPE'];
			}
			self.tickLabelFormat = format;
			return null;
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['setTickLabelFormat'] = $method;
		$method = $pyjs__bind_method2('setTickLabelPadding', function(tickLabelPadding) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLabelPadding = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.tickLabelPadding = tickLabelPadding;
			return null;
		}
	, 1, [null,null,['self'],['tickLabelPadding']]);
		$cls_definition['setTickLabelPadding'] = $method;
		$method = $pyjs__bind_method2('setTickLabelThickness', function(tickLabelThickness) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLabelThickness = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.tickLabelThickness = tickLabelThickness;
			return null;
		}
	, 1, [null,null,['self'],['tickLabelThickness']]);
		$cls_definition['setTickLabelThickness'] = $method;
		$method = $pyjs__bind_method2('setTicksPerGridline', function(ticksPerGridline) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ticksPerGridline = arguments[1];
			}
			var $cmp7,$bool52,$cmp8,$add14,$add15,$add16,$add13;
			if ((($bool52=((($cmp7=ticksPerGridline)===($cmp8=0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) < 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add15=(typeof ($add13='ticksPerGridline=')==typeof ($add14=ticksPerGridline) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($add16='; ticksPerGridline must be > 0') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))));
			}
			self.chartDecorationsChanged = true;
			self.ticksPerGridline = ticksPerGridline;
			return null;
		}
	, 1, [null,null,['self'],['ticksPerGridline']]);
		$cls_definition['setTicksPerGridline'] = $method;
		$method = $pyjs__bind_method2('setTicksPerLabel', function(ticksPerLabel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ticksPerLabel = arguments[1];
			}
			var $bool53,$add20,$cmp9,$add17,$cmp10,$add18,$add19;
			self.chartDecorationsChanged = true;
			if ((($bool53=((($cmp9=ticksPerLabel)===($cmp10=0)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
				throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add19=(typeof ($add17='ticksPerLabel=')==typeof ($add18=ticksPerLabel) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20='; ticksPerLabel must be > 0') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))));
			}
			self.ticksPerLabel = ticksPerLabel;
			return null;
		}
	, 1, [null,null,['self'],['ticksPerLabel']]);
		$cls_definition['setTicksPerLabel'] = $method;
		$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLength = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['tickLength']]);
		$cls_definition['setTickLength'] = $method;
		$method = $pyjs__bind_method2('setTickLocation', function(tickLocation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLocation = arguments[1];
			}
			var $bool54,sym;
			self.tickLocation = tickLocation;
			self.chartDecorationsChanged = true;
			sym = self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']();
			if ((($bool54=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				sym['setSymbolType'](tickLocation['getXAxisSymbolType']($p['getattr'](self, 'axisPosition')));
				sym['setHeight'](self['getActualTickLength']());
			}
			else {
				sym['setSymbolType'](tickLocation['getYAxisSymbolType']($p['getattr'](self, 'axisPosition')));
				sym['setWidth'](self['getActualTickLength']());
			}
			return null;
		}
	, 1, [null,null,['self'],['tickLocation']]);
		$cls_definition['setTickLocation'] = $method;
		$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickThickness = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['tickThickness']]);
		$cls_definition['setTickThickness'] = $method;
		$method = $pyjs__bind_method2('maybePopulateTicks', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq55,$eq56,$bool55;
			if ((($bool55=!(($eq55=$p['getattr'](self, 'tickCount'))===($eq56=$m['NAI'])&&$eq55===null?true:
				($eq55===null?false:($eq56===null?false:
					((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
						((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
							$eq55==$eq56)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				self['populateTicks']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['maybePopulateTicks'] = $method;
		$method = $pyjs__bind_method2('populateTicks', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool56,$bool57,$iter6_type,$bool58,$bool59,l,$mod4,$eq57,$mod3,$iter6_iter,$eq58,$eq59,$iter6_nextval,$add21,$add22,$sub8,$mul28,$sub3,$mul27,$mul25,$sub7,$sub6,$sub5,$sub4,$bool61,$bool60,$or7,$iter6_idx,$or9,$or8,$mul26,$iter6_array,$cmp11,$cmp12,$div3,$and18,$and19,$div4,i,$eq64,$eq61,$eq60,$eq63,$eq62,$or11,$or10,position;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['clearPoints']();
			if ((($bool58=((($bool56=$or7=(($eq57=$m['XTICKS_ID'])===($eq58=$p['getattr'](self, 'ticksId'))&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
							$eq57==$eq58)))))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
				false :
				(typeof $bool56=='object'?
					(typeof $bool56.__nonzero__=='function'?
						$bool56.__nonzero__() :
						(typeof $bool56.__len__=='function'?
							($bool56.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:((($bool57=$or8=(($eq59=$m['YTICKS_ID'])===($eq60=$p['getattr'](self, 'ticksId'))&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
							$eq59==$eq60)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57.__nonzero__=='function'?
						$bool57.__nonzero__() :
						(typeof $bool57.__len__=='function'?
							($bool57.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or8:((($cmp11=0)===($cmp12=self['getNCurvesVisibleOnAxis']())?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				l = self['getAxisLimits']();
				$iter6_iter = $p['range']($p['getattr'](self, 'tickCount'));
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					if ((($bool59=(($eq61=$p['getattr'](self, 'tickCount'))===($eq62=1)&&$eq61===null?true:
						($eq61===null?false:($eq62===null?false:
							((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
								((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
									$eq61==$eq62)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
							false :
							(typeof $bool59=='object'?
								(typeof $bool59.__nonzero__=='function'?
									$bool59.__nonzero__() :
									(typeof $bool59.__len__=='function'?
										($bool59.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						position = $p['getattr'](l, 'max');
					}
					else {
						position = (typeof ($div3=(typeof ($add21=(typeof ($mul25=$p['getattr'](l, 'min'))==typeof ($mul26=(typeof ($sub5=(typeof ($sub3=$p['getattr'](self, 'tickCount'))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4)))==typeof ($sub6=i) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6))) && typeof $mul25=='number'?
							$mul25*$mul26:
							$p['op_mul']($mul25,$mul26)))==typeof ($add22=(typeof ($mul27=i)==typeof ($mul28=$p['getattr'](l, 'max')) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28))) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)))==typeof ($div4=(typeof ($sub7=$p['getattr'](self, 'tickCount'))==typeof ($sub8=1.0) && (typeof $sub7=='number'||typeof $sub7=='string')?
							$sub7-$sub8:
							$p['op_sub']($sub7,$sub8))) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4));
					}
					self['addTickAsPoint'](position, ((($bool61=$or10=((($bool60=$and18=(($eq63=0)===($eq64=(typeof ($mod3=i)==typeof ($mod4=$p['getattr'](self, 'ticksPerLabel')) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)))&&$eq63===null?true:
						($eq63===null?false:($eq64===null?false:
							((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63.__cmp__=='function'?$eq63.__cmp__($eq64) === 0:
								((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64.__cmp__=='function'?$eq64.__cmp__($eq63) === 0:
									$eq63==$eq64)))))) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?self['formatAsTickLabel'](position):$and18)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
						false :
						(typeof $bool61=='object'?
							(typeof $bool61.__nonzero__=='function'?
								$bool61.__nonzero__() :
								(typeof $bool61.__len__=='function'?
									($bool61.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or10:null), null, $m['NAI'], $m['NAI']);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['populateTicks'] = $method;
		$method = $pyjs__bind_method2('populateGridlines', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool63,iTick,$and20,$iter7_nextval,$eq65,$iter7_iter,$iter7_array,$eq66,cGridlines,$mod5,p,$bool62,$mod6,cTicks,$iter7_idx,nTicks,$iter7_type,$and21;
			cTicks = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			cGridlines = self['getSystemCurve']($p['getattr'](self, 'gridlinesId'));
			cGridlines['clearPoints']();
			nTicks = cTicks['getNPoints']();
			$iter7_iter = $p['range'](nTicks);
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				iTick = $iter7_nextval;
				if ((($bool63=((($bool62=$and20=$p['getattr'](self, 'hasGridlines')) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62.__nonzero__=='function'?
							$bool62.__nonzero__() :
							(typeof $bool62.__len__=='function'?
								($bool62.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq65=(typeof ($mod5=iTick)==typeof ($mod6=$p['getattr'](self, 'ticksPerGridline')) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)))===($eq66=0)&&$eq65===null?true:
					($eq65===null?false:($eq66===null?false:
						((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65.__cmp__=='function'?$eq65.__cmp__($eq66) === 0:
							((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66.__cmp__=='function'?$eq66.__cmp__($eq65) === 0:
								$eq65==$eq66))))):$and20)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					p = cTicks['getPoint'](iTick);
					cGridlines['addPoint'](p['getX'](), p['getY']());
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['populateGridlines'] = $method;
		$method = $pyjs__bind_method2('_getAxisLimits', function(result) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				result = arguments[1];
			}
			var $add25,$bool72,$bool70,$eq73,DEFAULT_AXIS_RANGE,$and23,$and22,$add26,$and27,$and26,$and25,$and24,$add28,$add27,$eq78,min,$eq76,$eq77,$eq75,$eq72,$add24,$eq70,$eq71,$sub9,$bool68,$bool65,$bool64,$bool67,$bool66,$bool69,max,$sub11,$sub10,$eq74,$sub12,$bool71,$eq69,$eq68,$eq80,$eq67,$eq79,$add23;
			DEFAULT_AXIS_RANGE = (typeof ($sub9=$m['DEFAULT_TICK_COUNT'])==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10));
			min = self['getAxisMin']();
			max = self['getAxisMax']();
			if ((($bool65=((($bool64=$and22=(($eq67=$p['getattr']($m['Double'], 'NaN'))===($eq68=min)&&$eq67===null?true:
				($eq67===null?false:($eq68===null?false:
					((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67.__cmp__=='function'?$eq67.__cmp__($eq68) === 0:
						((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68.__cmp__=='function'?$eq68.__cmp__($eq67) === 0:
							$eq67==$eq68)))))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64.__nonzero__=='function'?
						$bool64.__nonzero__() :
						(typeof $bool64.__len__=='function'?
							($bool64.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq69=$p['getattr']($m['Double'], 'NaN'))===($eq70=max)&&$eq69===null?true:
				($eq69===null?false:($eq70===null?false:
					((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69.__cmp__=='function'?$eq69.__cmp__($eq70) === 0:
						((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70.__cmp__=='function'?$eq70.__cmp__($eq69) === 0:
							$eq69==$eq70))))):$and22)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65.__nonzero__=='function'?
							$bool65.__nonzero__() :
							(typeof $bool65.__len__=='function'?
								($bool65.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				min = 0;
				max = (typeof ($add23=min)==typeof ($add24=DEFAULT_AXIS_RANGE) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
			}
			else if ((($bool68=((($bool66=$and24=(($eq71=$p['getattr']($m['Double'], 'NaN'))===($eq72=min)&&$eq71===null?true:
				($eq71===null?false:($eq72===null?false:
					((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71.__cmp__=='function'?$eq71.__cmp__($eq72) === 0:
						((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72.__cmp__=='function'?$eq72.__cmp__($eq71) === 0:
							$eq71==$eq72)))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66.__nonzero__=='function'?
						$bool66.__nonzero__() :
						(typeof $bool66.__len__=='function'?
							($bool66.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool67=(($eq73=$p['getattr']($m['Double'], 'NaN'))===($eq74=max)&&$eq73===null?true:
				($eq73===null?false:($eq74===null?false:
					((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73.__cmp__=='function'?$eq73.__cmp__($eq74) === 0:
						((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74.__cmp__=='function'?$eq74.__cmp__($eq73) === 0:
							$eq73==$eq74)))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67.__nonzero__=='function'?
						$bool67.__nonzero__() :
						(typeof $bool67.__len__=='function'?
							($bool67.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and24)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
				min = (typeof ($sub11=max)==typeof ($sub12=DEFAULT_AXIS_RANGE) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
			}
			else if ((($bool71=((($bool70=$and26=!(($bool69=(($eq75=$p['getattr']($m['Double'], 'NaN'))===($eq76=min)&&$eq75===null?true:
				($eq75===null?false:($eq76===null?false:
					((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75.__cmp__=='function'?$eq75.__cmp__($eq76) === 0:
						((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76.__cmp__=='function'?$eq76.__cmp__($eq75) === 0:
							$eq75==$eq76)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
				false :
				(typeof $bool69=='object'?
					(typeof $bool69.__nonzero__=='function'?
						$bool69.__nonzero__() :
						(typeof $bool69.__len__=='function'?
							($bool69.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70.__nonzero__=='function'?
						$bool70.__nonzero__() :
						(typeof $bool70.__len__=='function'?
							($bool70.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq77=$p['getattr']($m['Double'], 'NaN'))===($eq78=max)&&$eq77===null?true:
				($eq77===null?false:($eq78===null?false:
					((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77.__cmp__=='function'?$eq77.__cmp__($eq78) === 0:
						((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78.__cmp__=='function'?$eq78.__cmp__($eq77) === 0:
							$eq77==$eq78))))):$and26)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
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
				max = (typeof ($add25=min)==typeof ($add26=DEFAULT_AXIS_RANGE) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
			}
			else if ((($bool72=(($eq79=min)===($eq80=max)&&$eq79===null?true:
				($eq79===null?false:($eq80===null?false:
					((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79.__cmp__=='function'?$eq79.__cmp__($eq80) === 0:
						((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80.__cmp__=='function'?$eq80.__cmp__($eq79) === 0:
							$eq79==$eq80)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
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
				max = (typeof ($add27=min)==typeof ($add28=DEFAULT_AXIS_RANGE) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
			}
			result.min = min;
			result.max = max;
			return null;
		}
	, 1, [null,null,['self'],['result']]);
		$cls_definition['_getAxisLimits'] = $method;
		$method = $pyjs__bind_method2('getAxisLimits', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_getAxisLimits']($p['getattr'](self, 'currentLimits'));
			return $p['getattr'](self, 'currentLimits');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisLimits'] = $method;
		$method = $pyjs__bind_method2('rememberLimits', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_getAxisLimits']($p['getattr'](self, 'previousLimits'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rememberLimits'] = $method;
		$method = $pyjs__bind_method2('limitsChanged', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool73;
			return !(($bool73=self['getAxisLimits']()['equals']($p['getattr'](self, 'previousLimits'))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
				false :
				(typeof $bool73=='object'?
					(typeof $bool73.__nonzero__=='function'?
						$bool73.__nonzero__() :
						(typeof $bool73.__len__=='function'?
							($bool73.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) );
		}
	, 1, [null,null,['self']]);
		$cls_definition['limitsChanged'] = $method;
		$method = $pyjs__bind_method2('getTickPosition', function(c, iTick) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
				iTick = arguments[2];
			}
			var $bool74,result;
			if ((($bool74=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = c['getPoint'](iTick)['getX']();
			}
			else {
				result = c['getPoint'](iTick)['getY']();
			}
			return result;
		}
	, 1, [null,null,['self'],['c'],['iTick']]);
		$cls_definition['getTickPosition'] = $method;
		$method = $pyjs__bind_method2('getTickMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$iter8_idx,i,$iter8_array,$iter8_iter,result,nTicks,$iter8_type,$iter8_nextval;
			result = (typeof ($usub3=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub3:
				$p['op_usub']($usub3));
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			nTicks = c['getNPoints']();
			$iter8_iter = $p['range'](nTicks);
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				i = $iter8_nextval;
				result = $p['max'](result, self['getTickPosition'](c, i));
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickMax'] = $method;
		$method = $pyjs__bind_method2('getTickMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$iter9_iter,i,$iter9_nextval,$iter9_idx,$iter9_array,result,nTicks,$iter9_type;
			result = $p['getattr']($m['Double'], 'MAX_VALUE');
			c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
			nTicks = c['getNPoints']();
			$iter9_iter = $p['range'](nTicks);
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				i = $iter9_nextval;
				result = $p['min'](result, self['getTickPosition'](c, i));
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTickMin'] = $method;
		$method = $pyjs__bind_method2('maxIgnoreNaNAndMaxValue', function(x1, x2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x1 = arguments[1];
				x2 = arguments[2];
			}
			var $bool78,$bool79,$bool76,$bool77,$bool75,result,$eq90,$eq91,$eq92,$bool80,$eq87,$eq86,$eq85,$eq84,$eq83,$eq82,$eq81,$eq89,$eq88,$or15,$or14,$or17,$or16,$or13,$or12;
			if ((($bool77=((($bool75=$or12=(($eq81=$p['getattr']($m['Double'], 'NaN'))===($eq82=x1)&&$eq81===null?true:
				($eq81===null?false:($eq82===null?false:
					((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81.__cmp__=='function'?$eq81.__cmp__($eq82) === 0:
						((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82.__cmp__=='function'?$eq82.__cmp__($eq81) === 0:
							$eq81==$eq82)))))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
				false :
				(typeof $bool75=='object'?
					(typeof $bool75.__nonzero__=='function'?
						$bool75.__nonzero__() :
						(typeof $bool75.__len__=='function'?
							($bool75.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or12:((($bool76=$or13=(($eq83=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq84=x1)&&$eq83===null?true:
				($eq83===null?false:($eq84===null?false:
					((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83.__cmp__=='function'?$eq83.__cmp__($eq84) === 0:
						((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84.__cmp__=='function'?$eq84.__cmp__($eq83) === 0:
							$eq83==$eq84)))))) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
				false :
				(typeof $bool76=='object'?
					(typeof $bool76.__nonzero__=='function'?
						$bool76.__nonzero__() :
						(typeof $bool76.__len__=='function'?
							($bool76.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or13:(($eq85=(typeof ($usub4=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub4:
				$p['op_usub']($usub4)))===($eq86=x1)&&$eq85===null?true:
				($eq85===null?false:($eq86===null?false:
					((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85.__cmp__=='function'?$eq85.__cmp__($eq86) === 0:
						((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86.__cmp__=='function'?$eq86.__cmp__($eq85) === 0:
							$eq85==$eq86)))))))) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
				result = x2;
			}
			else if ((($bool80=((($bool78=$or15=(($eq87=$p['getattr']($m['Double'], 'NaN'))===($eq88=x2)&&$eq87===null?true:
				($eq87===null?false:($eq88===null?false:
					((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87.__cmp__=='function'?$eq87.__cmp__($eq88) === 0:
						((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88.__cmp__=='function'?$eq88.__cmp__($eq87) === 0:
							$eq87==$eq88)))))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
				false :
				(typeof $bool78=='object'?
					(typeof $bool78.__nonzero__=='function'?
						$bool78.__nonzero__() :
						(typeof $bool78.__len__=='function'?
							($bool78.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or15:((($bool79=$or16=(($eq89=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq90=x2)&&$eq89===null?true:
				($eq89===null?false:($eq90===null?false:
					((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89.__cmp__=='function'?$eq89.__cmp__($eq90) === 0:
						((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90.__cmp__=='function'?$eq90.__cmp__($eq89) === 0:
							$eq89==$eq90)))))) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
				false :
				(typeof $bool79=='object'?
					(typeof $bool79.__nonzero__=='function'?
						$bool79.__nonzero__() :
						(typeof $bool79.__len__=='function'?
							($bool79.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or16:(($eq91=(typeof ($usub5=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub5:
				$p['op_usub']($usub5)))===($eq92=x2)&&$eq91===null?true:
				($eq91===null?false:($eq92===null?false:
					((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91.__cmp__=='function'?$eq91.__cmp__($eq92) === 0:
						((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92.__cmp__=='function'?$eq92.__cmp__($eq91) === 0:
							$eq91==$eq92)))))))) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
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
				result = x1;
			}
			else {
				result = $p['max'](x1, x2);
			}
			return result;
		}
	, 1, [null,null,['self'],['x1'],['x2']]);
		$cls_definition['maxIgnoreNaNAndMaxValue'] = $method;
		$method = $pyjs__bind_method2('minIgnoreNaNAndMaxValue', function(x1, x2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x1 = arguments[1];
				x2 = arguments[2];
			}
			var result,$bool86,$bool83,$bool82,$bool81,$eq93,$eq94,$eq95,$eq96,$eq97,$eq98,$eq99,$or20,$or21,$or22,$or23,$eq101,$eq100,$eq103,$eq102,$eq104,$bool85,$bool84,$or19,$or18;
			if ((($bool83=((($bool81=$or18=(($eq93=$p['getattr']($m['Double'], 'NaN'))===($eq94=x1)&&$eq93===null?true:
				($eq93===null?false:($eq94===null?false:
					((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93.__cmp__=='function'?$eq93.__cmp__($eq94) === 0:
						((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94.__cmp__=='function'?$eq94.__cmp__($eq93) === 0:
							$eq93==$eq94)))))) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
				false :
				(typeof $bool81=='object'?
					(typeof $bool81.__nonzero__=='function'?
						$bool81.__nonzero__() :
						(typeof $bool81.__len__=='function'?
							($bool81.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or18:((($bool82=$or19=(($eq95=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq96=x1)&&$eq95===null?true:
				($eq95===null?false:($eq96===null?false:
					((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95.__cmp__=='function'?$eq95.__cmp__($eq96) === 0:
						((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96.__cmp__=='function'?$eq96.__cmp__($eq95) === 0:
							$eq95==$eq96)))))) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
				false :
				(typeof $bool82=='object'?
					(typeof $bool82.__nonzero__=='function'?
						$bool82.__nonzero__() :
						(typeof $bool82.__len__=='function'?
							($bool82.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or19:(($eq97=(typeof ($usub6=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub6:
				$p['op_usub']($usub6)))===($eq98=x1)&&$eq97===null?true:
				($eq97===null?false:($eq98===null?false:
					((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97.__cmp__=='function'?$eq97.__cmp__($eq98) === 0:
						((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98.__cmp__=='function'?$eq98.__cmp__($eq97) === 0:
							$eq97==$eq98)))))))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
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
				result = x2;
			}
			else if ((($bool86=((($bool84=$or21=(($eq99=$p['getattr']($m['Double'], 'NaN'))===($eq100=x2)&&$eq99===null?true:
				($eq99===null?false:($eq100===null?false:
					((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99.__cmp__=='function'?$eq99.__cmp__($eq100) === 0:
						((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100.__cmp__=='function'?$eq100.__cmp__($eq99) === 0:
							$eq99==$eq100)))))) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
				false :
				(typeof $bool84=='object'?
					(typeof $bool84.__nonzero__=='function'?
						$bool84.__nonzero__() :
						(typeof $bool84.__len__=='function'?
							($bool84.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or21:((($bool85=$or22=(($eq101=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq102=x2)&&$eq101===null?true:
				($eq101===null?false:($eq102===null?false:
					((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101.__cmp__=='function'?$eq101.__cmp__($eq102) === 0:
						((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102.__cmp__=='function'?$eq102.__cmp__($eq101) === 0:
							$eq101==$eq102)))))) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85.__nonzero__=='function'?
						$bool85.__nonzero__() :
						(typeof $bool85.__len__=='function'?
							($bool85.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or22:(($eq103=(typeof ($usub7=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub7:
				$p['op_usub']($usub7)))===($eq104=x2)&&$eq103===null?true:
				($eq103===null?false:($eq104===null?false:
					((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103.__cmp__=='function'?$eq103.__cmp__($eq104) === 0:
						((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104.__cmp__=='function'?$eq104.__cmp__($eq103) === 0:
							$eq103==$eq104)))))))) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
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
				result = x1;
			}
			else {
				result = $p['min'](x1, x2);
			}
			return result;
		}
	, 1, [null,null,['self'],['x1'],['x2']]);
		$cls_definition['minIgnoreNaNAndMaxValue'] = $method;
		$method = $pyjs__bind_method2('invalidateDynamicAxisLimits', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool87,$eq107,$eq106,$eq108,$bool88,$eq105;
			if ((($bool87=(($eq105=$p['getattr']($m['Double'], 'NaN'))===($eq106=(typeof axisMin == "undefined"?$m.axisMin:axisMin))&&$eq105===null?true:
				($eq105===null?false:($eq106===null?false:
					((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105.__cmp__=='function'?$eq105.__cmp__($eq106) === 0:
						((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106.__cmp__=='function'?$eq106.__cmp__($eq105) === 0:
							$eq105==$eq106)))))) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87.__nonzero__=='function'?
							$bool87.__nonzero__() :
							(typeof $bool87.__len__=='function'?
								($bool87.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setAxisMin']((typeof axisMin == "undefined"?$m.axisMin:axisMin));
			}
			if ((($bool88=(($eq107=$p['getattr']($m['Double'], 'NaN'))===($eq108=(typeof axisMax == "undefined"?$m.axisMax:axisMax))&&$eq107===null?true:
				($eq107===null?false:($eq108===null?false:
					((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107.__cmp__=='function'?$eq107.__cmp__($eq108) === 0:
						((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108.__cmp__=='function'?$eq108.__cmp__($eq107) === 0:
							$eq107==$eq108)))))) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
					false :
					(typeof $bool88=='object'?
						(typeof $bool88.__nonzero__=='function'?
							$bool88.__nonzero__() :
							(typeof $bool88.__len__=='function'?
								($bool88.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setAxisMax']((typeof axisMax == "undefined"?$m.axisMax:axisMax));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['invalidateDynamicAxisLimits'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Axis', $p['tuple']($bases), $data);
	})();
	$m['XAxis'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.Axis';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}

			$m['Axis']['__init__'](self, chart);
			self.isHorizontalAxis = true;
			self.ticksId = $m['XTICKS_ID'];
			self.gridlinesId = $m['XGRIDLINES_ID'];
			self.axisId = $m['XAXIS_ID'];
			self.axisPosition = (typeof ($usub8=1)=='number'?
				-$usub8:
				$p['op_usub']($usub8));
			self.tickLabelFormatType = null;
			self['setTickLocation']($p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION'));
			self['setTickThickness']($m['DEFAULT_TICK_THICKNESS']);
			self['setTickLength']($m['DEFAULT_TICK_LENGTH']);
			return null;
		}
	, 1, [null,null,['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clientToModel', function() {
			if (this.__is_instance__ === true) {
				var clientCoordinate = this;
			} else {
				var clientCoordinate = arguments[0];
			}
			var $add29,$sub13,$add30,$sub14,result,xPixel;
			xPixel = (typeof ($sub13=(typeof ($add29=$m.Window['getScrollLeft']())==typeof ($add30=clientCoordinate) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30)))==typeof ($sub14=$m.self['chart']['plotPanel']['getAbsoluteLeft']()) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14));
			result = $m.self['chart']['plotPanel']['xChartPixelToX'](xPixel);
			return result;
		}
	, 1, [null,null,['clientCoordinate']]);
		$cls_definition['clientToModel'] = $method;
		$method = $pyjs__bind_method2('getAxisLabelThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result,charHeight,$eq109,$bool89,EXTRA_CHARHEIGHT,$mul29,$bool90,DEF_CHARHEIGHT,$eq112,$bool91,$eq110,$eq111,$add32,$add33,$add31,$add34,$mul35,$mul34,$mul36,$mul31,$mul30,$mul33,$mul32;
			EXTRA_CHARHEIGHT = 2;
			DEF_CHARHEIGHT = 1;
			result = 0;
			if ((($bool89=(($eq109=null)===($eq110=self['getAxisLabel']())&&$eq109===null?true:
				($eq109===null?false:($eq110===null?false:
					((typeof $eq109=='object'||typeof $eq109=='function')&&typeof $eq109.__cmp__=='function'?$eq109.__cmp__($eq110) === 0:
						((typeof $eq110=='object'||typeof $eq110=='function')&&typeof $eq110.__cmp__=='function'?$eq110.__cmp__($eq109) === 0:
							$eq109==$eq110)))))) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
					false :
					(typeof $bool89=='object'?
						(typeof $bool89.__nonzero__=='function'?
							$bool89.__nonzero__() :
							(typeof $bool89.__len__=='function'?
								($bool89.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = 0;
			}
			else if ((($bool90=!(($eq111=$m['NAI'])===($eq112=$p['getattr'](self, 'axisLabelThickness'))&&$eq111===null?true:
				($eq111===null?false:($eq112===null?false:
					((typeof $eq111=='object'||typeof $eq111=='function')&&typeof $eq111.__cmp__=='function'?$eq111.__cmp__($eq112) === 0:
						((typeof $eq112=='object'||typeof $eq112=='function')&&typeof $eq112.__cmp__=='function'?$eq112.__cmp__($eq111) === 0:
							$eq111==$eq112)))))) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
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
				result = $p['getattr'](self, 'axisLabelThickness');
			}
			else if ((($bool91=$p['hasattr'](self['getAxisLabel'](), 'getHTML')) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
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
				charHeight = $m['htmlHeight'](self['getAxisLabel']()['getHTML']());
				result = $p['float_int']($p['round']((typeof ($mul31=(typeof ($mul29=(typeof ($add31=EXTRA_CHARHEIGHT)==typeof ($add32=charHeight) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))==typeof ($mul30=self['getTickLabelFontSize']()) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)))==typeof ($mul32=$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND']) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))));
			}
			else {
				result = $p['float_int']($p['round']((typeof ($mul35=(typeof ($mul33=(typeof ($add33=EXTRA_CHARHEIGHT)==typeof ($add34=DEF_CHARHEIGHT) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($mul34=self['getTickLabelFontSize']()) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)))==typeof ($mul36=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36))));
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAxisLabelThickness'] = $method;
		$method = $pyjs__bind_method2('getDataMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,nCurves,j,result,$iter10_iter,$iter11_idx,$iter11_iter,$bool92,$iter11_array,nPoints,$iter11_nextval,$eq113,c,$bool93,$bool94,$eq114,i,$iter11_type,$iter10_array,$iter10_type,$iter10_idx;
			result = (typeof ($usub9=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub9:
				$p['op_usub']($usub9));
			nCurves = self['chart']['getNCurves']();
			$iter10_iter = $p['range'](nCurves);
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				i = $iter10_nextval;
				c = self['getSystemCurve'](i);
				if ((($bool93=!(($bool92=c['isVisible']()) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92.__nonzero__=='function'?
							$bool92.__nonzero__() :
							(typeof $bool92.__len__=='function'?
								($bool92.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
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
					continue;
				}
				nPoints = c['getNPoints']();
				$iter11_iter = $p['range'](nPoints);
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					j = $iter11_nextval;
					result = self['maxIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getX']());
				}
			}
			if ((($bool94=(($eq113=result)===($eq114=(typeof ($usub10=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub10:
				$p['op_usub']($usub10)))&&$eq113===null?true:
				($eq113===null?false:($eq114===null?false:
					((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113.__cmp__=='function'?$eq113.__cmp__($eq114) === 0:
						((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114.__cmp__=='function'?$eq114.__cmp__($eq113) === 0:
							$eq113==$eq114)))))) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94.__nonzero__=='function'?
							$bool94.__nonzero__() :
							(typeof $bool94.__len__=='function'?
								($bool94.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMax'] = $method;
		$method = $pyjs__bind_method2('getDataMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool97,nCurves,result,$iter13_array,$iter12_array,nPoints,$eq116,$eq115,c,$iter13_nextval,$bool95,$bool96,$iter13_iter,i,$iter12_type,j,$iter13_type,$iter12_iter,$iter12_idx,$iter12_nextval,$iter13_idx;
			result = $p['getattr']($m['Double'], 'MAX_VALUE');
			nCurves = self['chart']['getNCurves']();
			$iter12_iter = $p['range'](nCurves);
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				i = $iter12_nextval;
				c = self['getSystemCurve'](i);
				if ((($bool96=!(($bool95=c['isVisible']()) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95.__nonzero__=='function'?
							$bool95.__nonzero__() :
							(typeof $bool95.__len__=='function'?
								($bool95.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
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
					continue;
				}
				nPoints = c['getNPoints']();
				$iter13_iter = $p['range'](nPoints);
				if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter.__iter__();
					$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					j = $iter13_nextval;
					result = self['minIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getX']());
				}
			}
			if ((($bool97=(($eq115=result)===($eq116=$p['getattr']($m['Double'], 'MAX_VALUE'))&&$eq115===null?true:
				($eq115===null?false:($eq116===null?false:
					((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115.__cmp__=='function'?$eq115.__cmp__($eq116) === 0:
						((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116.__cmp__=='function'?$eq116.__cmp__($eq115) === 0:
							$eq115==$eq116)))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMin'] = $method;
		$method = $pyjs__bind_method2('getMouseCoordinate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result;
			result = self['chart']['plotPanel']['xChartPixelToX'](self['chart']['plotPanel']['getXMouse']());
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMouseCoordinate'] = $method;
		$method = $pyjs__bind_method2('getTickLabelThickness', function(needsPopulation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				needsPopulation = arguments[1];
			}
			if (typeof needsPopulation == 'undefined') needsPopulation=arguments.callee.__args__[3][1];
			var $eq120,$eq117,$bool98,$bool99,$eq119,result,$mul37,$eq118,$mul38;
			if ((($bool98=!(($eq117=$p['getattr'](self, 'tickLabelThickness'))===($eq118=$m['NAI'])&&$eq117===null?true:
				($eq117===null?false:($eq118===null?false:
					((typeof $eq117=='object'||typeof $eq117=='function')&&typeof $eq117.__cmp__=='function'?$eq117.__cmp__($eq118) === 0:
						((typeof $eq118=='object'||typeof $eq118=='function')&&typeof $eq118.__cmp__=='function'?$eq118.__cmp__($eq117) === 0:
							$eq117==$eq118)))))) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
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
				result = $p['getattr'](self, 'tickLabelThickness');
			}
			else if ((($bool99=(($eq119=self['getTickCount']())===($eq120=0)&&$eq119===null?true:
				($eq119===null?false:($eq120===null?false:
					((typeof $eq119=='object'||typeof $eq119=='function')&&typeof $eq119.__cmp__=='function'?$eq119.__cmp__($eq120) === 0:
						((typeof $eq120=='object'||typeof $eq120=='function')&&typeof $eq120.__cmp__=='function'?$eq120.__cmp__($eq119) === 0:
							$eq119==$eq120)))))) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
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
				result = 0;
			}
			else {
				result = $p['float_int']($p['round']((typeof ($mul37=$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND'])==typeof ($mul38=$p['getattr'](self, 'tickLabelFontSize')) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38))));
			}
			return result;
		}
	, 1, [null,null,['self'],['needsPopulation', true]]);
		$cls_definition['getTickLabelThickness'] = $method;
		$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var $add36,$sub16,$sub15,$add35,xPixel,result;
			xPixel = self['chart']['plotPanel']['xToChartPixel'](modelCoordinate);
			result = (typeof ($add35=(typeof ($sub15=self['chart']['plotPanel']['getAbsoluteLeft']())==typeof ($sub16=$m.Window['getScrollLeft']()) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16)))==typeof ($add36=xPixel) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36));
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToClient'] = $method;
		$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['xToChartPixel'](modelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPixel'] = $method;
		$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['xToPixel'](modelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPlotAreaPixel'] = $method;
		$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['xChartPixelToX'](pixelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['pixelToModel'] = $method;
		$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['xPixelToX'](pixelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['plotAreaPixelToModel'] = $method;
		$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLength = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.tickLength = tickLength;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setHeight'](self['getActualTickLength']());
			return null;
		}
	, 1, [null,null,['self'],['tickLength']]);
		$cls_definition['setTickLength'] = $method;
		$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickThickness = arguments[1];
			}

			self.tickThickness = tickThickness;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setWidth'](tickThickness);
			return null;
		}
	, 1, [null,null,['self'],['tickThickness']]);
		$cls_definition['setTickThickness'] = $method;
		var $bases = new Array($m['Axis']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('XAxis', $p['tuple']($bases), $data);
	})();
	$m['Y2Axis'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.Axis';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}

			$m['Axis']['__init__'](self, chart);
			self.isHorizontalAxis = false;
			self.ticksId = $m['Y2TICKS_ID'];
			self.gridlinesId = $m['Y2GRIDLINES_ID'];
			self.axisId = $m['Y2AXIS_ID'];
			self.axisPosition = 1;
			self['setTickLocation']($p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION'));
			self['setTickThickness']($m['DEFAULT_TICK_THICKNESS']);
			self['setTickLength']($m['DEFAULT_TICK_LENGTH']);
			return null;
		}
	, 1, [null,null,['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clientToModel', function() {
			if (this.__is_instance__ === true) {
				var clientCoordinate = this;
			} else {
				var clientCoordinate = arguments[0];
			}
			var $add38,$sub18,$sub17,$add37,yPixel,result;
			yPixel = (typeof ($sub17=(typeof ($add37=$m.Window['getScrollTop']())==typeof ($add38=clientCoordinate) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$p['op_add']($add37,$add38)))==typeof ($sub18=$m.self['chart']['plotPanel']['getAbsoluteTop']()) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18));
			result = $m.self['chart']['plotPanel']['yChartPixelToY2'](yPixel);
			return result;
		}
	, 1, [null,null,['clientCoordinate']]);
		$cls_definition['clientToModel'] = $method;
		$method = $pyjs__bind_method2('getDataMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool103,nCurves,result,$iter15_iter,$eq123,$eq122,$eq124,$iter14_array,$iter14_type,$iter15_array,$bool101,$bool100,$iter14_iter,$bool102,nPoints,$iter14_idx,$iter14_nextval,c,i,j,$iter15_idx,$iter15_nextval,$iter15_type,$eq121;
			result = (typeof ($usub11=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub11:
				$p['op_usub']($usub11));
			nCurves = self['chart']['getNCurves']();
			$iter14_iter = $p['range'](nCurves);
			if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter.__iter__();
				$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				i = $iter14_nextval;
				c = self['getSystemCurve'](i);
				if ((($bool101=!(($bool100=c['isVisible']()) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
						false :
						(typeof $bool101=='object'?
							(typeof $bool101.__nonzero__=='function'?
								$bool101.__nonzero__() :
								(typeof $bool101.__len__=='function'?
									($bool101.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					continue;
				}
				if ((($bool102=(($eq121=c['getYAxis']())===($eq122=$m['Y2_AXIS'])&&$eq121===null?true:
					($eq121===null?false:($eq122===null?false:
						((typeof $eq121=='object'||typeof $eq121=='function')&&typeof $eq121.__cmp__=='function'?$eq121.__cmp__($eq122) === 0:
							((typeof $eq122=='object'||typeof $eq122=='function')&&typeof $eq122.__cmp__=='function'?$eq122.__cmp__($eq121) === 0:
								$eq121==$eq122)))))) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
						false :
						(typeof $bool102=='object'?
							(typeof $bool102.__nonzero__=='function'?
								$bool102.__nonzero__() :
								(typeof $bool102.__len__=='function'?
									($bool102.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					nPoints = c['getNPoints']();
					$iter15_iter = $p['range'](nPoints);
					if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
						$iter15_type = 0;
					} else {
						$iter15_iter = $iter15_iter.__iter__();
						$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter15_idx = 0;
					while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
						j = $iter15_nextval;
						result = self['maxIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
					}
				}
			}
			if ((($bool103=(($eq123=result)===($eq124=(typeof ($usub12=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub12:
				$p['op_usub']($usub12)))&&$eq123===null?true:
				($eq123===null?false:($eq124===null?false:
					((typeof $eq123=='object'||typeof $eq123=='function')&&typeof $eq123.__cmp__=='function'?$eq123.__cmp__($eq124) === 0:
						((typeof $eq124=='object'||typeof $eq124=='function')&&typeof $eq124.__cmp__=='function'?$eq124.__cmp__($eq123) === 0:
							$eq123==$eq124)))))) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
					false :
					(typeof $bool103=='object'?
						(typeof $bool103.__nonzero__=='function'?
							$bool103.__nonzero__() :
							(typeof $bool103.__len__=='function'?
								($bool103.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMax'] = $method;
		$method = $pyjs__bind_method2('getDataMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var nCurves,$iter16_idx,$eq128,result,$iter17_type,$iter16_iter,$iter17_iter,$iter16_type,$eq127,$eq126,$eq125,$iter16_nextval,$iter17_nextval,$bool105,$iter17_array,$bool107,$bool106,nPoints,$iter16_array,c,$bool104,i,j,$iter17_idx;
			result = $p['getattr']($m['Double'], 'MAX_VALUE');
			nCurves = self['chart']['getNCurves']();
			$iter16_iter = $p['range'](nCurves);
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				i = $iter16_nextval;
				c = self['getSystemCurve'](i);
				if ((($bool105=!(($bool104=c['isVisible']()) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
					false :
					(typeof $bool104=='object'?
						(typeof $bool104.__nonzero__=='function'?
							$bool104.__nonzero__() :
							(typeof $bool104.__len__=='function'?
								($bool104.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
						false :
						(typeof $bool105=='object'?
							(typeof $bool105.__nonzero__=='function'?
								$bool105.__nonzero__() :
								(typeof $bool105.__len__=='function'?
									($bool105.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					continue;
				}
				if ((($bool106=(($eq125=c['getYAxis']())===($eq126=$m['Y2_AXIS'])&&$eq125===null?true:
					($eq125===null?false:($eq126===null?false:
						((typeof $eq125=='object'||typeof $eq125=='function')&&typeof $eq125.__cmp__=='function'?$eq125.__cmp__($eq126) === 0:
							((typeof $eq126=='object'||typeof $eq126=='function')&&typeof $eq126.__cmp__=='function'?$eq126.__cmp__($eq125) === 0:
								$eq125==$eq126)))))) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
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
					nPoints = c['getNPoints']();
					$iter17_iter = $p['range'](nPoints);
					if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
						$iter17_type = 0;
					} else {
						$iter17_iter = $iter17_iter.__iter__();
						$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter17_idx = 0;
					while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
						j = $iter17_nextval;
						result = self['minIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
					}
				}
			}
			if ((($bool107=(($eq127=result)===($eq128=$p['getattr']($m['Double'], 'MAX_VALUE'))&&$eq127===null?true:
				($eq127===null?false:($eq128===null?false:
					((typeof $eq127=='object'||typeof $eq127=='function')&&typeof $eq127.__cmp__=='function'?$eq127.__cmp__($eq128) === 0:
						((typeof $eq128=='object'||typeof $eq128=='function')&&typeof $eq128.__cmp__=='function'?$eq128.__cmp__($eq127) === 0:
							$eq127==$eq128)))))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
					false :
					(typeof $bool107=='object'?
						(typeof $bool107.__nonzero__=='function'?
							$bool107.__nonzero__() :
							(typeof $bool107.__len__=='function'?
								($bool107.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr']($m['Double'], 'NaN');
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMin'] = $method;
		$method = $pyjs__bind_method2('getMouseCoordinate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result;
			result = self['chart']['plotPanel']['yChartPixelToY2'](self['chart']['plotPanel']['getYMouse']());
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMouseCoordinate'] = $method;
		$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var $sub19,$add39,$sub20,$add40,yPixel,result;
			yPixel = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, true);
			result = (typeof ($add39=(typeof ($sub19=self['chart']['plotPanel']['getAbsoluteTop']())==typeof ($sub20=$m.Window['getScrollTop']()) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20)))==typeof ($add40=yPixel) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40));
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToClient'] = $method;
		$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, true);
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPixel'] = $method;
		$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yToPixel'](modelCoordinate, true);
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPlotAreaPixel'] = $method;
		$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yChartPixelToY2'](pixelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['pixelToModel'] = $method;
		$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yPixelToY2'](pixelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['plotAreaPixelToModel'] = $method;
		$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLength = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.tickLength = tickLength;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setWidth'](self['getActualTickLength']());
			return null;
		}
	, 1, [null,null,['self'],['tickLength']]);
		$cls_definition['setTickLength'] = $method;
		$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickThickness = arguments[1];
			}

			self.tickThickness = tickThickness;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setHeight'](tickThickness);
			return null;
		}
	, 1, [null,null,['self'],['tickThickness']]);
		$cls_definition['setTickThickness'] = $method;
		var $bases = new Array($m['Axis']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Y2Axis', $p['tuple']($bases), $data);
	})();
	$m['YAxis'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.Axis';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}

			$m['Axis']['__init__'](self, chart);
			self.isHorizontalAxis = false;
			self.ticksId = $m['YTICKS_ID'];
			self.gridlinesId = $m['YGRIDLINES_ID'];
			self.axisId = $m['YAXIS_ID'];
			self.axisPosition = (typeof ($usub13=1)=='number'?
				-$usub13:
				$p['op_usub']($usub13));
			self['setTickLocation']($p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION'));
			self['setTickThickness']($m['DEFAULT_TICK_THICKNESS']);
			self['setTickLength']($m['DEFAULT_TICK_LENGTH']);
			return null;
		}
	, 1, [null,null,['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clientToModel', function() {
			if (this.__is_instance__ === true) {
				var clientCoordinate = this;
			} else {
				var clientCoordinate = arguments[0];
			}
			var $sub22,$sub21,$add42,$add41,yPixel,result;
			yPixel = (typeof ($sub21=(typeof ($add41=$m.Window['getScrollTop']())==typeof ($add42=clientCoordinate) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42)))==typeof ($sub22=$m.self['chart']['plotPanel']['getAbsoluteTop']()) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22));
			result = $m.self['chart']['plotPanel']['yChartPixelToY'](yPixel);
			return result;
		}
	, 1, [null,null,['clientCoordinate']]);
		$cls_definition['clientToModel'] = $method;
		$method = $pyjs__bind_method2('getDataMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var nCurves,$bool110,$bool111,result,$eq129,$iter19_nextval,$iter19_iter,$iter18_idx,$iter18_nextval,$iter18_type,$iter18_iter,$iter19_array,nPoints,$bool109,$bool108,c,$iter19_idx,$iter18_array,i,j,$eq130,$eq131,$eq132,$iter19_type;
			result = (typeof ($usub14=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub14:
				$p['op_usub']($usub14));
			nCurves = self['chart']['getNCurves']();
			$iter18_iter = $p['range'](nCurves);
			if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
				$iter18_type = 0;
			} else {
				$iter18_iter = $iter18_iter.__iter__();
				$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter18_idx = 0;
			while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
				i = $iter18_nextval;
				c = self['getSystemCurve'](i);
				if ((($bool109=!(($bool108=c['isVisible']()) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
					false :
					(typeof $bool108=='object'?
						(typeof $bool108.__nonzero__=='function'?
							$bool108.__nonzero__() :
							(typeof $bool108.__len__=='function'?
								($bool108.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
						false :
						(typeof $bool109=='object'?
							(typeof $bool109.__nonzero__=='function'?
								$bool109.__nonzero__() :
								(typeof $bool109.__len__=='function'?
									($bool109.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					continue;
				}
				if ((($bool110=(($eq129=c['getYAxis']())===($eq130=$m['Y_AXIS'])&&$eq129===null?true:
					($eq129===null?false:($eq130===null?false:
						((typeof $eq129=='object'||typeof $eq129=='function')&&typeof $eq129.__cmp__=='function'?$eq129.__cmp__($eq130) === 0:
							((typeof $eq130=='object'||typeof $eq130=='function')&&typeof $eq130.__cmp__=='function'?$eq130.__cmp__($eq129) === 0:
								$eq129==$eq130)))))) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
						false :
						(typeof $bool110=='object'?
							(typeof $bool110.__nonzero__=='function'?
								$bool110.__nonzero__() :
								(typeof $bool110.__len__=='function'?
									($bool110.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					nPoints = c['getNPoints']();
					$iter19_iter = $p['range'](nPoints);
					if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter.__iter__();
						$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						j = $iter19_nextval;
						result = self['maxIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
					}
				}
			}
			if ((($bool111=(($eq131=result)===($eq132=(typeof ($usub15=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub15:
				$p['op_usub']($usub15)))&&$eq131===null?true:
				($eq131===null?false:($eq132===null?false:
					((typeof $eq131=='object'||typeof $eq131=='function')&&typeof $eq131.__cmp__=='function'?$eq131.__cmp__($eq132) === 0:
						((typeof $eq132=='object'||typeof $eq132=='function')&&typeof $eq132.__cmp__=='function'?$eq132.__cmp__($eq131) === 0:
							$eq131==$eq132)))))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMax'] = $method;
		$method = $pyjs__bind_method2('getDataMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter20_nextval,nCurves,$bool112,$bool113,result,$bool114,$bool115,$iter20_array,$iter20_iter,$iter21_idx,$iter21_nextval,$iter21_iter,nPoints,c,$iter20_type,i,$eq135,$eq136,j,$eq133,$iter21_type,$eq134,$iter20_idx,$iter21_array;
			result = $p['getattr']($m['Double'], 'MAX_VALUE');
			nCurves = self['chart']['getNCurves']();
			$iter20_iter = $p['range'](nCurves);
			if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
				$iter20_type = 0;
			} else {
				$iter20_iter = $iter20_iter.__iter__();
				$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter20_idx = 0;
			while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
				i = $iter20_nextval;
				c = self['getSystemCurve'](i);
				if ((($bool113=!(($bool112=c['isVisible']()) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112.__nonzero__=='function'?
							$bool112.__nonzero__() :
							(typeof $bool112.__len__=='function'?
								($bool112.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
						false :
						(typeof $bool113=='object'?
							(typeof $bool113.__nonzero__=='function'?
								$bool113.__nonzero__() :
								(typeof $bool113.__len__=='function'?
									($bool113.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					continue;
				}
				if ((($bool114=(($eq133=c['getYAxis']())===($eq134=$m['Y_AXIS'])&&$eq133===null?true:
					($eq133===null?false:($eq134===null?false:
						((typeof $eq133=='object'||typeof $eq133=='function')&&typeof $eq133.__cmp__=='function'?$eq133.__cmp__($eq134) === 0:
							((typeof $eq134=='object'||typeof $eq134=='function')&&typeof $eq134.__cmp__=='function'?$eq134.__cmp__($eq133) === 0:
								$eq133==$eq134)))))) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
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
					nPoints = c['getNPoints']();
					$iter21_iter = $p['range'](nPoints);
					if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
						$iter21_type = 0;
					} else {
						$iter21_iter = $iter21_iter.__iter__();
						$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter21_idx = 0;
					while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
						j = $iter21_nextval;
						result = self['minIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
					}
				}
			}
			if ((($bool115=(($eq135=result)===($eq136=$p['getattr']($m['Double'], 'MAX_VALUE'))&&$eq135===null?true:
				($eq135===null?false:($eq136===null?false:
					((typeof $eq135=='object'||typeof $eq135=='function')&&typeof $eq135.__cmp__=='function'?$eq135.__cmp__($eq136) === 0:
						((typeof $eq136=='object'||typeof $eq136=='function')&&typeof $eq136.__cmp__=='function'?$eq136.__cmp__($eq135) === 0:
							$eq135==$eq136)))))) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
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
				return $p['getattr']($m['Double'], 'NaN');
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataMin'] = $method;
		$method = $pyjs__bind_method2('getMouseCoordinate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result;
			result = self['chart']['plotPanel']['yChartPixelToY'](self['chart']['plotPanel']['getYMouse']());
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMouseCoordinate'] = $method;
		$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var $sub23,$sub24,$add44,$add43,yPixel,result;
			yPixel = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, false);
			result = (typeof ($add43=(typeof ($sub23=self['chart']['plotPanel']['getAbsoluteTop']())==typeof ($sub24=$m.Window['getScrollTop']()) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				$p['op_sub']($sub23,$sub24)))==typeof ($add44=yPixel) && (typeof $add43=='number'||typeof $add43=='string')?
				$add43+$add44:
				$p['op_add']($add43,$add44));
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToClient'] = $method;
		$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, false);
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPixel'] = $method;
		$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yToPixel'](modelCoordinate, false);
			return result;
		}
	, 1, [null,null,['self'],['modelCoordinate']]);
		$cls_definition['modelToPlotAreaPixel'] = $method;
		$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yChartPixelToY'](pixelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['pixelToModel'] = $method;
		$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pixelCoordinate = arguments[1];
			}
			var result;
			result = self['chart']['plotPanel']['yPixelToY'](pixelCoordinate);
			return result;
		}
	, 1, [null,null,['self'],['pixelCoordinate']]);
		$cls_definition['plotAreaPixelToModel'] = $method;
		$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickLength = arguments[1];
			}

			self.chartDecorationsChanged = true;
			self.tickLength = tickLength;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setWidth'](self['getActualTickLength']());
			return null;
		}
	, 1, [null,null,['self'],['tickLength']]);
		$cls_definition['setTickLength'] = $method;
		$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tickThickness = arguments[1];
			}

			self.tickThickness = tickThickness;
			self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setHeight'](tickThickness);
			return null;
		}
	, 1, [null,null,['self'],['tickThickness']]);
		$cls_definition['setTickThickness'] = $method;
		var $bases = new Array($m['Axis']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('YAxis', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.chart.Axis */


/* end module: pyjamas.chart.Axis */


/*
PYJS_DEPS: ['time', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.chart.NumberFormat', 'pyjamas.chart', 'pyjamas.chart.DateTimeFormat', 'pyjamas.chart.Double', 'pyjamas.chart.TickLocation', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.Annotation', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_COUNT', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONTSIZE', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_STYLE', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_WEIGHT', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FORMAT', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LENGTH', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_THICKNESS', 'pyjamas.chart.GChartConsts.Y2TICKS_ID', 'pyjamas.chart.GChartConsts.Y2GRIDLINES_ID', 'pyjamas.chart.GChartConsts.Y2AXIS_ID', 'pyjamas.chart.GChartConsts.YTICKS_ID', 'pyjamas.chart.GChartConsts.YGRIDLINES_ID', 'pyjamas.chart.GChartConsts.YAXIS_ID', 'pyjamas.chart.GChartConsts.XTICKS_ID', 'pyjamas.chart.GChartConsts.XGRIDLINES_ID', 'pyjamas.chart.GChartConsts.XAXIS_ID', 'pyjamas.chart.GChartConsts.TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart.GChartConsts.TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart.GChartUtil.htmlHeight', 'pyjamas.chart.GChartUtil', 'pyjamas.chart.GChartUtil.htmlWidth']
*/

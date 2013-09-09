/* start module: pyjamas.chart.GChartWidgets */
$pyjs.loaded_modules['pyjamas.chart.GChartWidgets'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.GChartWidgets'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.GChartWidgets'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.GChartWidgets"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.GChartWidgets>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.GChartWidgets';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['GChartWidgets'] = $pyjs.loaded_modules['pyjamas.chart.GChartWidgets'];


	$m['math'] = $p['___import___']('math', 'pyjamas.chart');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.chart', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.chart', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.chart', null, false);
	$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.chart', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.chart', null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'pyjamas.chart', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.chart', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.chart', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.chart', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.chart', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.chart', null, false);
	$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.chart', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.chart', null, false);
	$m['N_PRE_SYSTEM_CURVES'] = $p['___import___']('pyjamas.chart.GChartConsts.N_PRE_SYSTEM_CURVES', 'pyjamas.chart', null, false);
	$m['TRANSPARENT_BORDER_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.TRANSPARENT_BORDER_COLOR', 'pyjamas.chart', null, false);
	$m['HOVER_ANNOTATION_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.HOVER_ANNOTATION_ID', 'pyjamas.chart', null, false);
	$m['HOVER_CURSOR_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.HOVER_CURSOR_ID', 'pyjamas.chart', null, false);
	$m['USE_CSS'] = $p['___import___']('pyjamas.chart.GChartConsts.USE_CSS', 'pyjamas.chart', null, false);
	$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
	$m['DEFAULT_BLANK_IMAGE_URL_FULLPATH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_BLANK_IMAGE_URL_FULLPATH', 'pyjamas.chart', null, false);
	$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', 'pyjamas.chart', null, false);
	$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
	$m['WIDGETS_PER_PANEL'] = 256;
	$m['PartitionedAbsolutePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self.root = $m['AbsolutePanel']();
			self.subPanel = null;
			self.iSubPanel = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			self.nWidgets = 0;
			$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self]);
			self['initWidget']($p['getattr'](self, 'root'));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['root']['clear']();
			self.subPanel = null;
			self.iSubPanel = (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2));
			self.nWidgets = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('getWidgetCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'nWidgets');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidgetCount'] = $method;
		$method = $pyjs__bind_method2('selectSubPanel', function(iWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iWidget = arguments[1];
			}
			var $eq2,$eq1,$bool1,$div4,$div2,$div3,$div1;
			if ((($bool1=!(($eq1=$p['getattr'](self, 'iSubPanel'))===($eq2=$p['float_int']((typeof ($div1=iWidget)==typeof ($div2=$m['WIDGETS_PER_PANEL']) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))&&$eq1===null?true:
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
				self.iSubPanel = $p['float_int']((typeof ($div3=iWidget)==typeof ($div4=$m['WIDGETS_PER_PANEL']) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)));
				self.subPanel = self['root']['getWidget']($p['getattr'](self, 'iSubPanel'));
			}
			return null;
		}
	, 1, [null,null,['self'],['iWidget']]);
		$cls_definition['selectSubPanel'] = $method;
		$method = $pyjs__bind_method2('add', function(w) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
			}
			var $add2,$eq3,$eq4,$bool2,$add1,$mod1,$mod2;
			if ((($bool2=(($eq3=(typeof ($mod1=$p['getattr'](self, 'nWidgets'))==typeof ($mod2=$m['WIDGETS_PER_PANEL']) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)))===($eq4=0)&&$eq3===null?true:
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
				self.subPanel = $m['AbsolutePanel']();
				$m['GChartUtil']['setOverflow']($p['getattr'](self, 'subPanel'), 'visible');
				self['subPanel']['setPixelSize'](0, 0);
				self['root']['add']($p['getattr'](self, 'subPanel'), 0, 0);
			}
			self['selectSubPanel']($p['getattr'](self, 'nWidgets'));
			self['subPanel']['add'](w);
			self.nWidgets = (typeof ($add1=$p['getattr'](self, 'nWidgets'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			return null;
		}
	, 1, [null,null,['self'],['w']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('getWidget', function(iWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iWidget = arguments[1];
			}
			var result,$cmp4,$or1,$add4,$cmp3,$cmp2,$or2,$mod3,$sub2,$bool3,$add6,$add7,$bool4,$add5,$mod4,$cmp1,$sub1,$add8,$add3;
			if ((($bool4=((($bool3=$or1=((($cmp1=iWidget)===($cmp2=0)?0:
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
					 true ) )?$or1:((((($cmp3=iWidget)===($cmp4=$p['getattr'](self, 'nWidgets'))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				throw ($p['IndexError']((typeof ($add7=(typeof ($add5=(typeof ($add3='Invalid widget index: ')==typeof ($add4=$p['str'](iWidget)) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($add6='. Valid range is: 0...') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8=$p['str']((typeof ($sub1=$p['getattr'](self, 'nWidgets'))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))));
			}
			self['selectSubPanel'](iWidget);
			result = self['subPanel']['getWidget']((typeof ($mod3=iWidget)==typeof ($mod4=$m['WIDGETS_PER_PANEL']) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4)));
			return result;
		}
	, 1, [null,null,['self'],['iWidget']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method2('remove', function(iWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iWidget = arguments[1];
			}
			var $bool5,$mod5,$mod7,$mod6,result,$mod8,$sub8,$sub3,$sub7,$sub6,$sub5,$sub4,$eq8,$eq6,$eq7,$eq5,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$bool6,$add9;
			if ((($bool5=!(($eq5=iWidget)===($eq6=(typeof ($sub3=$p['getattr'](self, 'nWidgets'))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add15=(typeof ($add13=(typeof ($add11=(typeof ($add9='iWidgets arg = ')==typeof ($add10=iWidget) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=' nWidgets-1 (') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($add14=(typeof ($sub5=$p['getattr'](self, 'nWidgets'))==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($add16=') is required.') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))));
			}
			self['selectSubPanel'](iWidget);
			result = self['subPanel']['remove']((typeof ($mod5=iWidget)==typeof ($mod6=$m['WIDGETS_PER_PANEL']) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)));
			if ((($bool6=(($eq7=(typeof ($mod7=iWidget)==typeof ($mod8=$m['WIDGETS_PER_PANEL']) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8)))===($eq8=0)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['root']['remove']($p['getattr'](self, 'subPanel'));
				self.iSubPanel = (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3));
				self.subPanel = null;
			}
			self.nWidgets = (typeof ($sub7=$p['getattr'](self, 'nWidgets'))==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8));
			return result;
		}
	, 1, [null,null,['self'],['iWidget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('setWidgetPosition', function(w, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}

			self['subPanel']['setWidgetPosition'](w, left, top);
			return null;
		}
	, 1, [null,null,['self'],['w'],['left'],['top']]);
		$cls_definition['setWidgetPosition'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PartitionedAbsolutePanel', $p['tuple']($bases), $data);
	})();
	$m['AlignedLabel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['Grid'], '__init__', null, kwargs, [{}, self, 1, 1]);
			self['getCellFormatter']()['setWordWrap'](0, 0, false);
			self['setCellPadding'](0);
			self['setCellSpacing'](0);
			self['setBorderWidth'](0);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Grid']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AlignedLabel', $p['tuple']($bases), $data);
	})();
	$m['Rectangle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('Rect <%fx%f,%f-%f>', $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Rectangle', $p['tuple']($bases), $data);
	})();
	$m['NonoccludingReusuableAlignedLabel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('getInnerGrid', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'innerGrid');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getInnerGrid'] = $method;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.fontSize = $m['NAI'];
			self.fontStyle = $m['USE_CSS'];
			self.fontWeight = $m['USE_CSS'];
			self.fontColor = $m['USE_CSS'];
			self.labelText = null;
			self.isHTML = false;
			self.labelWidget = null;
			self.innerGrid = $m['AlignedLabel']();
			self.hAlign = null;
			self.vAlign = null;
			$m['AlignedLabel']['__init__'](self);
			self['setWidget'](0, 0, $p['getattr'](self, 'innerGrid'));
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'visibility', 'hidden');
			$m['DOM']['setStyleAttribute'](self['innerGrid']['getElement'](), 'visibility', 'visible');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setReusableProperties', function(fontSize, fontStyle, fontWeight, fontColor, hAlign, vAlign, labelText, isHTML, labelWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fontSize = arguments[1];
				fontStyle = arguments[2];
				fontWeight = arguments[3];
				fontColor = arguments[4];
				hAlign = arguments[5];
				vAlign = arguments[6];
				labelText = arguments[7];
				isHTML = arguments[8];
				labelWidget = arguments[9];
			}
			var $bool18,$bool19,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$eq18,$eq30,$or6,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,$eq26,$bool20,$or5,$or4,$eq9,$or3,$eq21,$eq23,$eq22,$eq25,$bool7,$eq27,$eq29,$eq28,$bool8,$bool9,$eq32,$eq20,$eq19,$eq31,$eq24;
			if ((($bool7=!(($eq9=$p['getattr'](self, 'fontSize'))===($eq10=fontSize)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				$m['DOM']['setIntStyleAttribute'](self['innerGrid']['getElement'](), 'fontSize', fontSize);
				self.fontSize = fontSize;
			}
			if ((($bool8=!(($eq11=$p['getattr'](self, 'fontStyle'))===($eq12=fontStyle)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['innerGrid']['getElement'](), 'fontStyle', fontStyle);
				self.fontStyle = fontStyle;
			}
			if ((($bool9=!(($eq13=$p['getattr'](self, 'fontWeight'))===($eq14=fontWeight)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['innerGrid']['getElement'](), 'fontWeight', fontWeight);
				self.fontWeight = fontWeight;
			}
			if ((($bool10=!(($eq15=$p['getattr'](self, 'fontColor'))===($eq16=fontColor)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['innerGrid']['getElement'](), 'color', fontColor);
				self.fontColor = fontColor;
			}
			if ((($bool11=!(($eq17=$p['getattr'](self, 'hAlign'))===($eq18=hAlign)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				self['getCellFormatter']()['setHorizontalAlignment'](0, 0, hAlign);
				self['innerGrid']['getCellFormatter']()['setHorizontalAlignment'](0, 0, hAlign);
				self.hAlign = hAlign;
			}
			if ((($bool12=!(($eq19=$p['getattr'](self, 'vAlign'))===($eq20=vAlign)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['getCellFormatter']()['setVerticalAlignment'](0, 0, vAlign);
				self['innerGrid']['getCellFormatter']()['setVerticalAlignment'](0, 0, vAlign);
				self.vAlign = vAlign;
			}
			if ((($bool13=!(($eq21=null)===($eq22=labelWidget)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				if ((($bool14=!(($eq23=$p['getattr'](self, 'labelWidget'))===($eq24=labelWidget)&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					self['innerGrid']['setWidget'](0, 0, labelWidget);
					self.labelWidget = labelWidget;
					self.labelText = null;
				}
			}
			else if ((($bool16=((($bool15=$or3=!(($eq25=$p['getattr'](self, 'labelText'))===($eq26=labelText)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:!(($eq27=$p['getattr'](self, 'isHTML'))===($eq28=isHTML)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28))))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				if ((($bool18=((($bool17=$or5=(($eq29=null)===($eq30=labelText)&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:(($eq31='')===($eq32=labelText)&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
								$eq31==$eq32))))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					self['innerGrid']['setText'](0, 0, '');
				}
				else if ((($bool20=!(($bool19=isHTML) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					self['innerGrid']['setText'](0, 0, labelText);
				}
				else {
					self['innerGrid']['setHTML'](0, 0, labelText);
				}
				self.isHTML = isHTML;
				self.labelText = labelText;
				self.labelWidget = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['fontSize'],['fontStyle'],['fontWeight'],['fontColor'],['hAlign'],['vAlign'],['labelText'],['isHTML'],['labelWidget']]);
		$cls_definition['setReusableProperties'] = $method;
		var $bases = new Array($m['AlignedLabel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NonoccludingReusuableAlignedLabel', $p['tuple']($bases), $data);
	})();
	$m['AnnotationRenderingPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('getFirstInnerAlignedLabel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp5,$cmp6,parent,$bool21,result;
			result = null;
			if ((($bool21=((($cmp5=$p['getattr'](self, 'labelIndex'))===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				parent = self['getWidget'](0);
				result = parent['getInnerGrid']();
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFirstInnerAlignedLabel'] = $method;
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}

			self.chart = chart;
			self.labelIndex = 0;
			self.lastVisibleLabel = (typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4));
			$m['PartitionedAbsolutePanel']['__init__'](self);
			$m['GChartUtil']['setOverflow'](self, 'visible');
			self['setPixelSize'](0, 0);
			return null;
		}
	, 1, [null,null,['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setLabelPosition', function(lbl, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lbl = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool23,$and1,$eq35,$eq33,$eq36,$and2,$eq34,$bool22;
			if ((($bool23=((($bool22=$and1=(($eq33=x)===($eq34=(typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq35=y)===($eq36=(typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)))&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36))))):$and1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				x = 0;
			}
			self['setWidgetPosition'](lbl, x, y);
			return null;
		}
	, 1, [null,null,['self'],['lbl'],['x'],['y']]);
		$cls_definition['setLabelPosition'] = $method;
		$method = $pyjs__bind_method2('beginRendering', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.labelIndex = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['beginRendering'] = $method;
		$method = $pyjs__bind_method2('endRendering', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp7,iLabel,$sub13,$sub12,$sub10,$cmp8,$sub14,$bool25,$bool24,$sub9,$bool26,w,$sub11;
			if ((($bool24=$p['getattr']($p['getattr'](self, 'chart'), 'optimizeForMemory')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				iLabel = (typeof ($sub9=self['getWidgetCount']())==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
			}
			else {
				iLabel = $p['getattr'](self, 'lastVisibleLabel');
			}
			while ((($bool25=((((($cmp7=iLabel)===($cmp8=$p['getattr'](self, 'labelIndex'))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				w = self['getWidget'](iLabel);
				if ((($bool26=$p['getattr']($p['getattr'](self, 'chart'), 'optimizeForMemory')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					self['remove'](iLabel);
				}
				else {
					w['setVisible'](false);
				}
				iLabel = (typeof ($sub11=iLabel)==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
			}
			self.lastVisibleLabel = (typeof ($sub13=$p['getattr'](self, 'labelIndex'))==typeof ($sub14=1) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['endRendering'] = $method;
		$method = $pyjs__bind_method2('getNextOrNewAlignedLabel', function(fontSize, fontStyle, fontWeight, fontColor, hAlign, vAlign, labelText, isHTML, labelWidget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fontSize = arguments[1];
				fontStyle = arguments[2];
				fontWeight = arguments[3];
				fontColor = arguments[4];
				hAlign = arguments[5];
				vAlign = arguments[6];
				labelText = arguments[7];
				isHTML = arguments[8];
				labelWidget = arguments[9];
			}
			var $cmp12,$eq37,$eq38,$eq39,$bool27,$bool29,$bool28,$or7,$and3,$and4,$or8,$add17,$cmp11,$cmp10,$cmp13,$add18,e,$cmp14,$eq43,$eq41,$eq40,$cmp9,$eq44,$bool32,$bool33,$bool30,$bool31,$eq42,result;
			if ((($bool27=((($cmp9=$p['getattr'](self, 'labelIndex'))===($cmp10=self['getWidgetCount']())?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				result = self['getWidget']($p['getattr'](self, 'labelIndex'));
				if ((($bool29=((($bool28=$and3=!(($eq37=null)===($eq38=$p['getattr'](result, 'labelWidget'))&&$eq37===null?true:
					($eq37===null?false:($eq38===null?false:
						((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
							((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
								$eq37==$eq38)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq39=labelWidget)===($eq40=$p['getattr'](result, 'labelWidget'))&&$eq39===null?true:
					($eq39===null?false:($eq40===null?false:
						((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
							((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
								$eq39==$eq40))))):$and3)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					e = labelWidget['getElement']();
					if ((($bool31=((($bool30=$or7=(($eq41=null)===($eq42=e)&&$eq41===null?true:
						($eq41===null?false:($eq42===null?false:
							((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
								((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
									$eq41==$eq42)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or7:!(($eq43=$m['DOM']['getParent'](e))===($eq44=result['innerGrid']['getCellFormatter']()['getElement'](0, 0))&&$eq43===null?true:
						($eq43===null?false:($eq44===null?false:
							((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
								((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
									$eq43==$eq44))))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						result.labelWidget = null;
					}
				}
				if ((($bool32=((($cmp11=$p['getattr'](self, 'labelIndex'))===($cmp12=$p['getattr'](self, 'lastVisibleLabel'))?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					result['setVisible'](true);
				}
			}
			else {
				result = $m['NonoccludingReusuableAlignedLabel']();
				self['add'](result);
			}
			result['setReusableProperties'](fontSize, fontStyle, fontWeight, fontColor, hAlign, vAlign, labelText, isHTML, labelWidget);
			if ((($bool33=((($cmp13=$p['getattr'](self, 'lastVisibleLabel'))===($cmp14=$p['getattr'](self, 'labelIndex'))?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				self.lastVisibleLabel = $p['getattr'](self, 'labelIndex');
			}
			self.labelIndex = (typeof ($add17=$p['getattr'](self, 'labelIndex'))==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18));
			return result;
		}
	, 1, [null,null,['self'],['fontSize'],['fontStyle'],['fontWeight'],['fontColor'],['hAlign'],['vAlign'],['labelText'],['isHTML'],['labelWidget']]);
		$cls_definition['getNextOrNewAlignedLabel'] = $method;
		$method = $pyjs__bind_method2('renderAnnotation', function(annotation, loc, xCenter, yCenter, symWidth, symHeight, symbol) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				annotation = arguments[1];
				loc = arguments[2];
				xCenter = arguments[3];
				yCenter = arguments[4];
				symWidth = arguments[5];
				symHeight = arguments[6];
				symbol = arguments[7];
			}
			var heightUpperBound,$add21,$add20,$add22,upLeftY,upLeftX,$bool35,$add19,$eq48,$eq47,$eq46,$eq45,$bool34,widthUpperBound,alignedLabel;
			widthUpperBound = annotation['getWidthUpperBound']();
			upLeftX = loc['getUpperLeftX'](xCenter, widthUpperBound, $p['abs'](symWidth));
			heightUpperBound = annotation['getHeightUpperBound']();
			upLeftY = loc['getUpperLeftY'](yCenter, heightUpperBound, $p['abs'](symHeight));
			alignedLabel = self['getNextOrNewAlignedLabel'](annotation['getFontSize'](), annotation['getFontStyle'](), annotation['getFontWeight'](), annotation['getFontColor'](), loc['getHorizontalAlignment'](), loc['getVerticalAlignment'](), annotation['getText'](), annotation['isHTML'](), annotation['getWidget']());
			if ((($bool34=!(($eq45=loc['getHorizontalAlignment']())===($eq46=$p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT'))&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				alignedLabel['setWidth']((typeof ($add19=$p['str'](widthUpperBound))==typeof ($add20='px') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)));
			}
			else {
				alignedLabel['setWidth']('');
			}
			if ((($bool35=!(($eq47=loc['getVerticalAlignment']())===($eq48=$p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP'))&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				alignedLabel['setHeight']((typeof ($add21=$p['str'](heightUpperBound))==typeof ($add22='px') && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)));
			}
			else {
				alignedLabel['setHeight']('');
			}
			self['setLabelPosition'](alignedLabel, upLeftX, upLeftY);
			return null;
		}
	, 1, [null,null,['self'],['annotation'],['loc'],['xCenter'],['yCenter'],['symWidth'],['symHeight'],['symbol']]);
		$cls_definition['renderAnnotation'] = $method;
		var $bases = new Array($m['PartitionedAbsolutePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AnnotationRenderingPanel', $p['tuple']($bases), $data);
	})();
	$m['ReusableImage'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('__init__', function(parent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
			}

			self._parent = parent;
			self.backgroundColor = $m['USE_CSS'];
			self.borderColor = $m['USE_CSS'];
			self.borderStyle = $m['USE_CSS'];
			self.cappedBorderWidthX2 = $m['NAI'];
			self.width = $m['NAI'];
			self.height = $m['NAI'];
			self.x = $m['NAI'];
			self.y = $m['NAI'];
			self.url = null;
			$m['Image']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self'],['parent']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setReusableProperties', function(backgroundColor, borderColor, borderStyle, borderWidth, dWidth, dHeight, xD, yD, url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				backgroundColor = arguments[1];
				borderColor = arguments[2];
				borderStyle = arguments[3];
				borderWidth = arguments[4];
				dWidth = arguments[5];
				dHeight = arguments[6];
				xD = arguments[7];
				yD = arguments[8];
				url = arguments[9];
			}
			var $sub22,$sub23,$sub20,$sub21,$sub26,$sub24,$sub25,$eq72,$eq73,$eq54,$eq55,$eq56,$eq57,$eq50,$eq51,$eq52,$eq53,$eq71,$eq58,$eq59,$eq70,ceilBW,floorBW,$eq65,$eq64,$eq67,$eq66,$eq61,$bool45,$eq60,$bool44,$eq63,$eq62,$mod9,newCappedBorderWidthX2,$add60,thickness,$bool47,$bool46,$sub19,$sub18,$bool43,$bool42,$bool41,$bool40,$sub17,$sub16,$sub15,$bool48,$bool49,$cmp18,$add50,$add51,newH,$add53,$add54,$add55,$add56,$add57,$add58,$div16,$div8,$add47,newX,$div9,$bool36,$bool37,$div15,$bool38,$bool39,newW,$bool50,$add43,$add42,$add40,$add49,$add48,$div14,$add46,$add45,$add44,$div10,$div11,$div12,$div13,$add52,$mul2,$mul1,$add38,$add39,$eq69,$eq68,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add41,$add59,$eq74,$add29,$add28,$add23,$add25,$add24,$add27,$add26,newY,$mod10,$cmp15,$cmp17,$cmp16,$div6,$div7,$div5,$eq49;
			newX = $p['float_int']($p['round'](xD));
			newW = $p['float_int']((typeof ($sub15=$p['round']((typeof ($add23=xD)==typeof ($add24=dWidth) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24))))==typeof ($sub16=newX) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16)));
			newY = $p['float_int']($p['round'](yD));
			newH = $p['float_int']((typeof ($sub17=$p['round']((typeof ($add25=yD)==typeof ($add26=dHeight) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26))))==typeof ($sub18=newY) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18)));
			thickness = $p['min'](newW, newH);
			newCappedBorderWidthX2 = $p['min']((typeof ($mul1=2)==typeof ($mul2=borderWidth) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), thickness);
			if ((($bool36=(($eq49=$m['TRANSPARENT_BORDER_COLOR'])===($eq50=borderColor)&&$eq49===null?true:
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
				if ((($bool37=((($cmp15=newCappedBorderWidthX2)===($cmp16=0)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					newX = (typeof ($add27=newX)==typeof ($add28=(typeof ($div5=newCappedBorderWidthX2)==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
					newY = (typeof ($add29=newY)==typeof ($add30=(typeof ($div7=newCappedBorderWidthX2)==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8))) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30));
					newH = (typeof ($sub19=newH)==typeof ($sub20=newCappedBorderWidthX2) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20));
					newW = (typeof ($sub21=newW)==typeof ($sub22=newCappedBorderWidthX2) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22));
				}
				newCappedBorderWidthX2 = 0;
				borderColor = 'transparent';
				if ((($bool38=(($eq51=backgroundColor)===($eq52=$m['TRANSPARENT_BORDER_COLOR'])&&$eq51===null?true:
					($eq51===null?false:($eq52===null?false:
						((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
							((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
								$eq51==$eq52)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					backgroundColor = 'transparent';
				}
			}
			else if ((($bool39=((($cmp17=newCappedBorderWidthX2)===($cmp18=0)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
				newX = (typeof ($add31=newX)==typeof ($add32=(typeof ($div9=newCappedBorderWidthX2)==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				newY = (typeof ($add33=newY)==typeof ($add34=(typeof ($div11=newCappedBorderWidthX2)==typeof ($div12=2) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34));
			}
			else {
				newH = (typeof ($sub23=newH)==typeof ($sub24=newCappedBorderWidthX2) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24));
				newW = (typeof ($sub25=newW)==typeof ($sub26=newCappedBorderWidthX2) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26));
			}
			if ((($bool40=!(($eq53=$p['getattr'](self, 'cappedBorderWidthX2'))===($eq54=newCappedBorderWidthX2)&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				if ((($bool41=(($eq55=1)===($eq56=(typeof ($mod9=newCappedBorderWidthX2)==typeof ($mod10=2) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)))&&$eq55===null?true:
					($eq55===null?false:($eq56===null?false:
						((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
							((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
								$eq55==$eq56)))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					floorBW = $p['float_int']((typeof ($div13=newCappedBorderWidthX2)==typeof ($div14=2) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14)));
					ceilBW = (typeof ($add35=floorBW)==typeof ($add36=1) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36));
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'borderWidth', (typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41=(typeof ($add39=(typeof ($add37=$p['str'](floorBW))==typeof ($add38='px ') && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($add40=$p['str'](floorBW)) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40)))==typeof ($add42='px ') && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42)))==typeof ($add44=$p['str'](ceilBW)) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44)))==typeof ($add46='px ') && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46)))==typeof ($add48=$p['str'](ceilBW)) && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48)))==typeof ($add50='px ') && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50)));
				}
				else {
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'borderWidth', (typeof ($add51=$p['str']($p['abs']((typeof ($div15=newCappedBorderWidthX2)==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16)))))==typeof ($add52='px') && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)));
				}
				self.cappedBorderWidthX2 = newCappedBorderWidthX2;
			}
			if ((($bool42=(($eq57=$m['NAI'])===($eq58=$p['getattr'](self, 'x'))&&$eq57===null?true:
				($eq57===null?false:($eq58===null?false:
					((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
						((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
							$eq57==$eq58)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				self['_parent']['setImagePosition'](self, newX, newY);
				self.x = newX;
				self.y = newY;
			}
			else {
				if ((($bool43=!(($eq59=$p['getattr'](self, 'x'))===($eq60=newX)&&$eq59===null?true:
					($eq59===null?false:($eq60===null?false:
						((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
							((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
								$eq59==$eq60)))))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'left', (typeof ($add53=$p['str'](newX))==typeof ($add54='px') && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)));
					self.x = newX;
				}
				if ((($bool44=!(($eq61=$p['getattr'](self, 'y'))===($eq62=newY)&&$eq61===null?true:
					($eq61===null?false:($eq62===null?false:
						((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
							((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
								$eq61==$eq62)))))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'top', (typeof ($add55=$p['str'](newY))==typeof ($add56='px') && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56)));
					self.y = newY;
				}
			}
			if ((($bool45=!(($eq63=$p['getattr'](self, 'width'))===($eq64=newW)&&$eq63===null?true:
				($eq63===null?false:($eq64===null?false:
					((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63.__cmp__=='function'?$eq63.__cmp__($eq64) === 0:
						((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64.__cmp__=='function'?$eq64.__cmp__($eq63) === 0:
							$eq63==$eq64)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				self['setWidth']((typeof ($add57=$p['str'](newW))==typeof ($add58='px') && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)));
				self.width = newW;
			}
			if ((($bool46=!(($eq65=$p['getattr'](self, 'height'))===($eq66=newH)&&$eq65===null?true:
				($eq65===null?false:($eq66===null?false:
					((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65.__cmp__=='function'?$eq65.__cmp__($eq66) === 0:
						((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66.__cmp__=='function'?$eq66.__cmp__($eq65) === 0:
							$eq65==$eq66)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				self['setHeight']((typeof ($add59=$p['str'](newH))==typeof ($add60='px') && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60)));
				self.height = newH;
			}
			if ((($bool47=!(($eq67=$p['getattr'](self, 'backgroundColor'))===($eq68=backgroundColor)&&$eq67===null?true:
				($eq67===null?false:($eq68===null?false:
					((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67.__cmp__=='function'?$eq67.__cmp__($eq68) === 0:
						((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68.__cmp__=='function'?$eq68.__cmp__($eq67) === 0:
							$eq67==$eq68)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'backgroundColor', backgroundColor);
				self.backgroundColor = backgroundColor;
			}
			if ((($bool48=!(($eq69=$p['getattr'](self, 'borderColor'))===($eq70=borderColor)&&$eq69===null?true:
				($eq69===null?false:($eq70===null?false:
					((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69.__cmp__=='function'?$eq69.__cmp__($eq70) === 0:
						((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70.__cmp__=='function'?$eq70.__cmp__($eq69) === 0:
							$eq69==$eq70)))))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'borderColor', borderColor);
				self.borderColor = borderColor;
			}
			if ((($bool49=!(($eq71=$p['getattr'](self, 'borderStyle'))===($eq72=borderStyle)&&$eq71===null?true:
				($eq71===null?false:($eq72===null?false:
					((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71.__cmp__=='function'?$eq71.__cmp__($eq72) === 0:
						((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72.__cmp__=='function'?$eq72.__cmp__($eq71) === 0:
							$eq71==$eq72)))))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'borderStyle', borderStyle);
				self.borderStyle = borderStyle;
			}
			if ((($bool50=!(($eq73=$p['getattr'](self, 'url'))===($eq74=url)&&$eq73===null?true:
				($eq73===null?false:($eq74===null?false:
					((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73.__cmp__=='function'?$eq73.__cmp__($eq74) === 0:
						((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74.__cmp__=='function'?$eq74.__cmp__($eq73) === 0:
							$eq73==$eq74)))))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				self['setUrl'](url);
				self.url = url;
			}
			return null;
		}
	, 1, [null,null,['self'],['backgroundColor'],['borderColor'],['borderStyle'],['borderWidth'],['dWidth'],['dHeight'],['xD'],['yD'],['url']]);
		$cls_definition['setReusableProperties'] = $method;
		var $bases = new Array($m['Image']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ReusableImage', $p['tuple']($bases), $data);
	})();
	$m['GraphicsRenderingPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('maybeAddCanvas', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool54,$add64,canvasFactory,$add61,$bool51,$eq78,$eq79,$eq76,$eq77,$eq75,$and5,$and6,$eq80,$bool53,$bool52,$add62,$add63;
			canvasFactory = self['chart']['getCanvasFactory']();
			if ((($bool52=((($bool51=$and5=!(($eq75=null)===($eq76=canvasFactory)&&$eq75===null?true:
				($eq75===null?false:($eq76===null?false:
					((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75.__cmp__=='function'?$eq75.__cmp__($eq76) === 0:
						((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76.__cmp__=='function'?$eq76.__cmp__($eq75) === 0:
							$eq75==$eq76)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
				false :
				(typeof $bool51=='object'?
					(typeof $bool51.__nonzero__=='function'?
						$bool51.__nonzero__() :
						(typeof $bool51.__len__=='function'?
							($bool51.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq77=null)===($eq78=$p['getattr'](self, 'canvas'))&&$eq77===null?true:
				($eq77===null?false:($eq78===null?false:
					((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77.__cmp__=='function'?$eq77.__cmp__($eq78) === 0:
						((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78.__cmp__=='function'?$eq78.__cmp__($eq77) === 0:
							$eq77==$eq78))))):$and5)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				self.canvas = canvasFactory['create']();
				if ((($bool53=!(($eq79=null)===($eq80=$p['getattr'](self, 'canvas'))&&$eq79===null?true:
					($eq79===null?false:($eq80===null?false:
						((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79.__cmp__=='function'?$eq79.__cmp__($eq80) === 0:
							((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80.__cmp__=='function'?$eq80.__cmp__($eq79) === 0:
								$eq79==$eq80)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					if ((($bool54=$p['isinstance']($p['getattr'](self, 'canvas'), $m['Widget'])) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
						$m['DOM']['setElemAttribute'](self['canvas']['getElement'](), 'align', 'left');
						self['canvasPanel']['add']($p['getattr'](self, 'canvas'), 0, 0);
					}
					else {
						throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)((typeof ($add63=(typeof ($add61="Your canvas factory's create method did not return ")==typeof ($add62='either None or a GWT Widget, as required. See the ') && (typeof $add61=='number'||typeof $add61=='string')?
							$add61+$add62:
							$p['op_add']($add61,$add62)))==typeof ($add64='GChart.setCanvasFactory method javadocs for details.') && (typeof $add63=='number'||typeof $add63=='string')?
							$add63+$add64:
							$p['op_add']($add63,$add64))));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['maybeAddCanvas'] = $method;
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				chart = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof chart != 'undefined') {
					if (chart !== null && typeof chart['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = chart;
						chart = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self.chart = chart;
			self.canvas = null;
			self.x0 = 0;
			self.y0 = 0;
			self.canvasWidth = 0;
			self.canvasHeight = 0;
			self.canvasPanel = $m['AbsolutePanel']();
			self.imagePanel = $m['PartitionedAbsolutePanel']();
			self.imageIndex = 0;
			self.lastVisibleImage = (typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7));
			$pyjs_kwargs_call($m['AbsolutePanel'], '__init__', null, kwargs, [{}, self]);
			$m['GChartUtil']['setOverflow']($p['getattr'](self, 'canvasPanel'), 'visible');
			$m['GChartUtil']['setOverflow']($p['getattr'](self, 'imagePanel'), 'visible');
			self['canvasPanel']['setPixelSize'](0, 0);
			self['imagePanel']['setPixelSize'](0, 0);
			self['add']($p['getattr'](self, 'canvasPanel'), 0, 0);
			self['add']($p['getattr'](self, 'imagePanel'), 0, 0);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getCanvas', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'canvas');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCanvas'] = $method;
		$method = $pyjs__bind_method2('setImagePosition', function(img, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $and8,$bool55,$bool56,$eq84,$eq83,$eq81,$and7,$eq82;
			if ((($bool56=((($bool55=$and7=(($eq81=x)===($eq82=(typeof ($usub8=1)=='number'?
				-$usub8:
				$p['op_usub']($usub8)))&&$eq81===null?true:
				($eq81===null?false:($eq82===null?false:
					((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81.__cmp__=='function'?$eq81.__cmp__($eq82) === 0:
						((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82.__cmp__=='function'?$eq82.__cmp__($eq81) === 0:
							$eq81==$eq82)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
				false :
				(typeof $bool55=='object'?
					(typeof $bool55.__nonzero__=='function'?
						$bool55.__nonzero__() :
						(typeof $bool55.__len__=='function'?
							($bool55.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq83=y)===($eq84=(typeof ($usub9=1)=='number'?
				-$usub9:
				$p['op_usub']($usub9)))&&$eq83===null?true:
				($eq83===null?false:($eq84===null?false:
					((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83.__cmp__=='function'?$eq83.__cmp__($eq84) === 0:
						((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84.__cmp__=='function'?$eq84.__cmp__($eq83) === 0:
							$eq83==$eq84))))):$and7)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
				x = 0;
			}
			self['imagePanel']['setWidgetPosition'](img, x, y);
			return null;
		}
	, 1, [null,null,['self'],['img'],['x'],['y']]);
		$cls_definition['setImagePosition'] = $method;
		$method = $pyjs__bind_method2('beginRendering', function(canvasRegion) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				canvasRegion = arguments[1];
			}
			var $bool57,$and9,$bool58,$bool59,height,$eq90,$eq91,$eq92,$eq93,$eq94,$eq95,$eq96,width,$bool61,$bool60,$bool62,$and12,$and10,$and11,$eq87,$eq86,$eq85,$eq89,$eq88,$assign1;
			if ((($bool57=!(($eq85=null)===($eq86=$p['getattr'](self, 'canvas'))&&$eq85===null?true:
				($eq85===null?false:($eq86===null?false:
					((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85.__cmp__=='function'?$eq85.__cmp__($eq86) === 0:
						((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86.__cmp__=='function'?$eq86.__cmp__($eq85) === 0:
							$eq85==$eq86)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool58=(($eq87=null)===($eq88=canvasRegion)&&$eq87===null?true:
					($eq87===null?false:($eq88===null?false:
						((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87.__cmp__=='function'?$eq87.__cmp__($eq88) === 0:
							((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88.__cmp__=='function'?$eq88.__cmp__($eq87) === 0:
								$eq87==$eq88)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
					self['canvas']['resize'](0, 0);
					$assign1 = 0;
					self.canvasWidth = $assign1;
					self.canvasHeight = $assign1;
				}
				else {
					width = $p['float_int']($p['round']($p['getattr'](canvasRegion, 'width')));
					height = $p['float_int']($p['round']($p['getattr'](canvasRegion, 'height')));
					if ((($bool60=((($bool59=$and9=(($eq89=width)===($eq90=$p['getattr'](self, 'canvasWidth'))&&$eq89===null?true:
						($eq89===null?false:($eq90===null?false:
							((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89.__cmp__=='function'?$eq89.__cmp__($eq90) === 0:
								((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90.__cmp__=='function'?$eq90.__cmp__($eq89) === 0:
									$eq89==$eq90)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59.__nonzero__=='function'?
								$bool59.__nonzero__() :
								(typeof $bool59.__len__=='function'?
									($bool59.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq91=height)===($eq92=$p['getattr'](self, 'canvasHeight'))&&$eq91===null?true:
						($eq91===null?false:($eq92===null?false:
							((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91.__cmp__=='function'?$eq91.__cmp__($eq92) === 0:
								((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92.__cmp__=='function'?$eq92.__cmp__($eq91) === 0:
									$eq91==$eq92))))):$and9)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
							false :
							(typeof $bool60=='object'?
								(typeof $bool60.__nonzero__=='function'?
									$bool60.__nonzero__() :
									(typeof $bool60.__len__=='function'?
										($bool60.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['canvas']['clear']();
					}
					else {
						self['canvas']['resize'](width, height);
						self.canvasWidth = width;
						self.canvasHeight = height;
					}
					self.x0 = $p['float_int']($p['round']($p['getattr'](canvasRegion, 'x')));
					self.y0 = $p['float_int']($p['round']($p['getattr'](canvasRegion, 'y')));
					if ((($bool62=((($bool61=$and11=(($eq93=$p['getattr'](self, 'x0'))===($eq94=(typeof ($usub10=1)=='number'?
						-$usub10:
						$p['op_usub']($usub10)))&&$eq93===null?true:
						($eq93===null?false:($eq94===null?false:
							((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93.__cmp__=='function'?$eq93.__cmp__($eq94) === 0:
								((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94.__cmp__=='function'?$eq94.__cmp__($eq93) === 0:
									$eq93==$eq94)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
						false :
						(typeof $bool61=='object'?
							(typeof $bool61.__nonzero__=='function'?
								$bool61.__nonzero__() :
								(typeof $bool61.__len__=='function'?
									($bool61.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq95=$p['getattr'](self, 'y0'))===($eq96=(typeof ($usub11=1)=='number'?
						-$usub11:
						$p['op_usub']($usub11)))&&$eq95===null?true:
						($eq95===null?false:($eq96===null?false:
							((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95.__cmp__=='function'?$eq95.__cmp__($eq96) === 0:
								((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96.__cmp__=='function'?$eq96.__cmp__($eq95) === 0:
									$eq95==$eq96))))):$and11)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
							false :
							(typeof $bool62=='object'?
								(typeof $bool62.__nonzero__=='function'?
									$bool62.__nonzero__() :
									(typeof $bool62.__len__=='function'?
										($bool62.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self.x0 = 0;
					}
					self['canvasPanel']['setWidgetPosition']($p['getattr'](self, 'canvas'), $p['getattr'](self, 'x0'), $p['getattr'](self, 'y0'));
				}
			}
			self.imageIndex = 0;
			return null;
		}
	, 1, [null,null,['self'],['canvasRegion']]);
		$cls_definition['beginRendering'] = $method;
		$method = $pyjs__bind_method2('endRendering', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub31,$sub30,$bool63,$sub32,$bool65,$sub27,iImage,$sub28,$sub29,$cmp20,w,$cmp19,$bool64;
			if ((($bool63=$p['getattr']($p['getattr'](self, 'chart'), 'optimizeForMemory')) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				iImage = (typeof ($sub27=self['imagePanel']['getWidgetCount']())==typeof ($sub28=1) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28));
			}
			else {
				iImage = $p['getattr'](self, 'lastVisibleImage');
			}
			while ((($bool64=((((($cmp19=iImage)===($cmp20=$p['getattr'](self, 'imageIndex'))?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))))|1) == 1)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				w = self['imagePanel']['getWidget'](iImage);
				if ((($bool65=$p['getattr']($p['getattr'](self, 'chart'), 'optimizeForMemory')) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
					self['imagePanel']['remove'](iImage);
				}
				else {
					$m['DOM']['setStyleAttribute'](w['getElement'](), 'visibility', 'hidden');
				}
				iImage = (typeof ($sub29=iImage)==typeof ($sub30=1) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30));
			}
			self.lastVisibleImage = (typeof ($sub31=$p['getattr'](self, 'imageIndex'))==typeof ($sub32=1) && (typeof $sub31=='number'||typeof $sub31=='string')?
				$sub31-$sub32:
				$p['op_sub']($sub31,$sub32));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['endRendering'] = $method;
		$method = $pyjs__bind_method2('addOrRevealImage', function(backgroundColor, borderColor, borderStyle, borderWidth, width, height, x, y, url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				backgroundColor = arguments[1];
				borderColor = arguments[2];
				borderStyle = arguments[3];
				borderWidth = arguments[4];
				width = arguments[5];
				height = arguments[6];
				x = arguments[7];
				y = arguments[8];
				url = arguments[9];
			}
			var $cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$add66,img,$add65,$bool67,$bool66,$bool68;
			if ((($bool66=((($cmp21=$p['getattr'](self, 'imageIndex'))===($cmp22=self['imagePanel']['getWidgetCount']())?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
				img = self['imagePanel']['getWidget']($p['getattr'](self, 'imageIndex'));
				if ((($bool67=((($cmp23=$p['getattr'](self, 'imageIndex'))===($cmp24=$p['getattr'](self, 'lastVisibleImage'))?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
					$m['DOM']['setStyleAttribute'](img['getElement'](), 'visibility', '');
				}
			}
			else {
				img = $m['ReusableImage'](self);
				self['imagePanel']['add'](img);
			}
			img['setReusableProperties'](backgroundColor, borderColor, borderStyle, borderWidth, width, height, x, y, url);
			if ((($bool68=((($cmp25=$p['getattr'](self, 'lastVisibleImage'))===($cmp26=$p['getattr'](self, 'imageIndex'))?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == -1)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
				self.lastVisibleImage = $p['getattr'](self, 'imageIndex');
			}
			self.imageIndex = (typeof ($add65=$p['getattr'](self, 'imageIndex'))==typeof ($add66=1) && (typeof $add65=='number'||typeof $add65=='string')?
				$add65+$add66:
				$p['op_add']($add65,$add66));
			return null;
		}
	, 1, [null,null,['self'],['backgroundColor'],['borderColor'],['borderStyle'],['borderWidth'],['width'],['height'],['x'],['y'],['url']]);
		$cls_definition['addOrRevealImage'] = $method;
		$method = $pyjs__bind_method2('renderBorderedImage', function(backgroundColor, borderColor, borderStyle, borderWidth, width, height, x, y, url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				backgroundColor = arguments[1];
				borderColor = arguments[2];
				borderStyle = arguments[3];
				borderWidth = arguments[4];
				width = arguments[5];
				height = arguments[6];
				x = arguments[7];
				y = arguments[8];
				url = arguments[9];
			}

			self['addOrRevealImage'](backgroundColor, borderColor, borderStyle, borderWidth, width, height, x, y, url);
			return null;
		}
	, 1, [null,null,['self'],['backgroundColor'],['borderColor'],['borderStyle'],['borderWidth'],['width'],['height'],['x'],['y'],['url']]);
		$cls_definition['renderBorderedImage'] = $method;
		var $bases = new Array($m['AbsolutePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GraphicsRenderingPanel', $p['tuple']($bases), $data);
	})();
	$m['DECORATIVE_RENDERING_PANEL_INDEX'] = 0;
	$m['PlotPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartWidgets';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				chart = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof chart != 'undefined') {
					if (chart !== null && typeof chart['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = chart;
						chart = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self.chart = chart;
			self.touchedPoint = null;
			self.touchedHoverWidget = null;
			self.insideHoverUpdate = false;
			self.insideHoverCleanup = false;
			self.xMax = $p['getattr']($m['Double'], 'NaN');
			self.xMin = $p['getattr']($m['Double'], 'NaN');
			self.y2Max = $p['getattr']($m['Double'], 'NaN');
			self.y2Min = $p['getattr']($m['Double'], 'NaN');
			self.yMax = $p['getattr']($m['Double'], 'NaN');
			self.yMin = $p['getattr']($m['Double'], 'NaN');
			self.clientX = $m['NAI'];
			self.clientY = $m['NAI'];
			self.xMouse = $m['NAI'];
			self.yMouse = $m['NAI'];
			self.graphicsPanel = $m['AbsolutePanel']();
			self.annotationPanel = $m['AbsolutePanel']();
			$pyjs_kwargs_call($m['AbsolutePanel'], '__init__', null, kwargs, [{}, self]);
			$m['GChartUtil']['setOverflow'](self, 'visible');
			$m['GChartUtil']['setOverflow']($p['getattr'](self, 'graphicsPanel'), 'visible');
			$m['GChartUtil']['setOverflow']($p['getattr'](self, 'annotationPanel'), 'visible');
			self['graphicsPanel']['setPixelSize'](0, 0);
			self['annotationPanel']['setPixelSize'](0, 0);
			self['add']($p['getattr'](self, 'graphicsPanel'), 0, 0);
			self['add']($p['getattr'](self, 'annotationPanel'), 0, 0);
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONMOUSEMOVE'))|($p['getattr']($m['Event'], 'ONMOUSEOUT'))|($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'ONMOUSEOVER')));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addGraphicsRenderingPanel', function(rpIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpIndex = arguments[1];
			}
			var $eq97,$eq98,$bool72,$or9,$bool70,$bool71,$bool69,$or11,w,domInsert,$or10;
			domInsert = true;
			w = $m['GraphicsRenderingPanel']($p['getattr'](self, 'chart'));
			if ((($bool72=((($bool69=$or9=(($eq97=$m['DECORATIVE_RENDERING_PANEL_INDEX'])===($eq98=rpIndex)&&$eq97===null?true:
				($eq97===null?false:($eq98===null?false:
					((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97.__cmp__=='function'?$eq97.__cmp__($eq98) === 0:
						((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98.__cmp__=='function'?$eq98.__cmp__($eq97) === 0:
							$eq97==$eq98)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
				false :
				(typeof $bool69=='object'?
					(typeof $bool69.__nonzero__=='function'?
						$bool69.__nonzero__() :
						(typeof $bool69.__len__=='function'?
							($bool69.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:((($bool70=$or10=self['chart']['isHoverFeedbackRenderingPanel'](rpIndex)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70.__nonzero__=='function'?
						$bool70.__nonzero__() :
						(typeof $bool70.__len__=='function'?
							($bool70.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or10:!(($bool71=self['chart']['getClipToPlotArea']()) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
				false :
				(typeof $bool71=='object'?
					(typeof $bool71.__nonzero__=='function'?
						$bool71.__nonzero__() :
						(typeof $bool71.__len__=='function'?
							($bool71.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
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
				w['setPixelSize'](0, 0);
				$m['GChartUtil']['setOverflow'](w, 'visible');
			}
			else {
				w['setPixelSize'](self['getXChartSize'](), self['getYChartSize']());
				$m['GChartUtil']['setOverflow'](w, 'hidden');
			}
			self['graphicsPanel']['insert'](w, self['graphicsPanel']['getElement'](), rpIndex);
			self['graphicsPanel']['setWidgetPosition'](w, 0, 0);
			return null;
		}
	, 1, [null,null,['self'],['rpIndex']]);
		$cls_definition['addGraphicsRenderingPanel'] = $method;
		$method = $pyjs__bind_method2('addAnnotationRenderingPanel', function(rpIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpIndex = arguments[1];
			}
			var domInsert,w;
			domInsert = true;
			w = $m['AnnotationRenderingPanel']($p['getattr'](self, 'chart'));
			self['annotationPanel']['insert'](w, self['annotationPanel']['getElement'](), rpIndex);
			self['annotationPanel']['setWidgetPosition'](w, 0, 0);
			return null;
		}
	, 1, [null,null,['self'],['rpIndex']]);
		$cls_definition['addAnnotationRenderingPanel'] = $method;
		$method = $pyjs__bind_method2('removeGraphicsRenderingPanel', function(rpIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpIndex = arguments[1];
			}

			self['graphicsPanel']['remove'](rpIndex);
			return null;
		}
	, 1, [null,null,['self'],['rpIndex']]);
		$cls_definition['removeGraphicsRenderingPanel'] = $method;
		$method = $pyjs__bind_method2('removeAnnotationRenderingPanel', function(rpIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpIndex = arguments[1];
			}

			self['annotationPanel']['remove'](rpIndex);
			return null;
		}
	, 1, [null,null,['self'],['rpIndex']]);
		$cls_definition['removeAnnotationRenderingPanel'] = $method;
		$method = $pyjs__bind_method2('getGraphicsRenderingPanel', function(rpIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpIndex = arguments[1];
			}
			var $eq100,$sub33,$iter1_nextval,$iter1_type,$iter1_idx,i,$eq99,$bool73,$iter1_iter,$len1,rpInd,$sub34,$iter1_array;
			if ((($bool73=(($eq99=0)===($eq100=self['graphicsPanel']['getWidgetCount']())&&$eq99===null?true:
				($eq99===null?false:($eq100===null?false:
					((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99.__cmp__=='function'?$eq99.__cmp__($eq100) === 0:
						((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100.__cmp__=='function'?$eq100.__cmp__($eq99) === 0:
							$eq99==$eq100)))))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
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
				$iter1_iter = $p['range']((typeof ($sub33=$m['N_PRE_SYSTEM_CURVES'])==typeof ($sub34=1) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					$p['op_sub']($sub33,$sub34)), (($len1=$p['getattr']($p['getattr'](self, 'chart'), 'curves')) === null?0:
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
					rpInd = self['chart']['getRenderingPanelIndex'](i);
					self['addGraphicsRenderingPanel'](rpInd);
				}
			}
			return self['graphicsPanel']['getWidget'](rpIndex);
		}
	, 1, [null,null,['self'],['rpIndex']]);
		$cls_definition['getGraphicsRenderingPanel'] = $method;
		$method = $pyjs__bind_method2('getAnnotationRenderingPanel', function(rpIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpIndex = arguments[1];
			}
			var $eq101,$eq102,$iter2_type,$iter2_iter,$sub36,i,$iter2_idx,$iter2_nextval,$len2,$sub35,rpInd,$bool74,$iter2_array;
			if ((($bool74=(($eq101=0)===($eq102=self['annotationPanel']['getWidgetCount']())&&$eq101===null?true:
				($eq101===null?false:($eq102===null?false:
					((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101.__cmp__=='function'?$eq101.__cmp__($eq102) === 0:
						((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102.__cmp__=='function'?$eq102.__cmp__($eq101) === 0:
							$eq101==$eq102)))))) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
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
				$iter2_iter = $p['range']((typeof ($sub35=$m['N_PRE_SYSTEM_CURVES'])==typeof ($sub36=1) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36)), (($len2=$p['getattr']($p['getattr'](self, 'chart'), 'curves')) === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					rpInd = self['chart']['getRenderingPanelIndex'](i);
					self['addAnnotationRenderingPanel'](rpInd);
				}
			}
			return self['annotationPanel']['getWidget'](rpIndex);
		}
	, 1, [null,null,['self'],['rpIndex']]);
		$cls_definition['getAnnotationRenderingPanel'] = $method;
		$method = $pyjs__bind_method2('getClientX', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'clientX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getClientX'] = $method;
		$method = $pyjs__bind_method2('setClientX', function(clientX, isClick) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				clientX = arguments[1];
				isClick = arguments[2];
			}
			var $eq103,$sub38,$eq104,$bool78,$bool76,$bool77,$bool75,$add67,$add68,$and13,$and14,$cmp27,$cmp28,$cmp29,$sub37,$cmp30;
			if ((($bool76=((($bool75=$and13=((($cmp27=clientX)===($cmp28=0)?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) < 1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
				false :
				(typeof $bool75=='object'?
					(typeof $bool75.__nonzero__=='function'?
						$bool75.__nonzero__() :
						(typeof $bool75.__len__=='function'?
							($bool75.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?isClick:$and13)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
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
			else if ((($bool77=((($cmp29=clientX)===($cmp30=0)?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
				clientX = $m['NAI'];
			}
			self.clientX = clientX;
			if ((($bool78=(($eq103=$m['NAI'])===($eq104=clientX)&&$eq103===null?true:
				($eq103===null?false:($eq104===null?false:
					((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103.__cmp__=='function'?$eq103.__cmp__($eq104) === 0:
						((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104.__cmp__=='function'?$eq104.__cmp__($eq103) === 0:
							$eq103==$eq104)))))) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.xMouse = $m['NAI'];
			}
			else {
				self.xMouse = (typeof ($sub37=(typeof ($add67=$m['Window']['getScrollLeft']())==typeof ($add68=clientX) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$p['op_add']($add67,$add68)))==typeof ($sub38=self['getAbsoluteLeft']()) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38));
			}
			return null;
		}
	, 1, [null,null,['self'],['clientX'],['isClick']]);
		$cls_definition['setClientX'] = $method;
		$method = $pyjs__bind_method2('getClientY', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'clientY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getClientY'] = $method;
		$method = $pyjs__bind_method2('setClientY', function(clientY, isClick) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				clientY = arguments[1];
				isClick = arguments[2];
			}
			var $bool81,$bool80,$eq105,$bool82,$add70,$sub39,$bool79,$add69,$eq106,$and16,$and15,$sub40,$cmp34,$cmp33,$cmp32,$cmp31;
			if ((($bool80=((($bool79=$and15=((($cmp31=clientY)===($cmp32=0)?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) < 1)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
				false :
				(typeof $bool79=='object'?
					(typeof $bool79.__nonzero__=='function'?
						$bool79.__nonzero__() :
						(typeof $bool79.__len__=='function'?
							($bool79.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?isClick:$and15)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
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
				return null;
			}
			else if ((($bool81=((($cmp33=clientY)===($cmp34=0)?0:
				(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
					($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
					$p['cmp']($cmp33, $cmp34))) == -1)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
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
				clientY = $m['NAI'];
			}
			self.clientY = clientY;
			if ((($bool82=(($eq105=$m['NAI'])===($eq106=clientY)&&$eq105===null?true:
				($eq105===null?false:($eq106===null?false:
					((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105.__cmp__=='function'?$eq105.__cmp__($eq106) === 0:
						((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106.__cmp__=='function'?$eq106.__cmp__($eq105) === 0:
							$eq105==$eq106)))))) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
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
				self.yMouse = $m['NAI'];
			}
			else {
				self.yMouse = (typeof ($sub39=(typeof ($add69=$m['Window']['getScrollTop']())==typeof ($add70=clientY) && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$p['op_add']($add69,$add70)))==typeof ($sub40=self['getAbsoluteTop']()) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40));
			}
			return null;
		}
	, 1, [null,null,['self'],['clientY'],['isClick']]);
		$cls_definition['setClientY'] = $method;
		$method = $pyjs__bind_method2('repairBadClientX', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var $bool83,$cmp35,$cmp36;
			if ((($bool83=((($cmp35=x)===($cmp36=0)?0:
				(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
					($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
					$p['cmp']($cmp35, $cmp36))) < 1)) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
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
				return $p['getattr'](self, 'clientX');
			}
			else {
				return x;
			}
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['repairBadClientX'] = $method;
		$method = $pyjs__bind_method2('repairBadClientY', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $cmp37,$bool84,$cmp38;
			if ((($bool84=((($cmp37=y)===($cmp38=0)?0:
				(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
					($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
					$p['cmp']($cmp37, $cmp38))) < 1)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
					false :
					(typeof $bool84=='object'?
						(typeof $bool84.__nonzero__=='function'?
							$bool84.__nonzero__() :
							(typeof $bool84.__len__=='function'?
								($bool84.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr'](self, 'clientY');
			}
			else {
				return y;
			}
			return null;
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['repairBadClientY'] = $method;
		$method = $pyjs__bind_method2('getXMouse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'xMouse');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXMouse'] = $method;
		$method = $pyjs__bind_method2('getYMouse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'yMouse');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYMouse'] = $method;
		$method = $pyjs__bind_method2('getXMousePlotArea', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub41,$sub42,result;
			result = (typeof ($sub41=$p['getattr'](self, 'xMouse'))==typeof ($sub42=$p['getattr'](self, 'yAxisEnsembleWidth')) && (typeof $sub41=='number'||typeof $sub41=='string')?
				$sub41-$sub42:
				$p['op_sub']($sub41,$sub42));
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXMousePlotArea'] = $method;
		$method = $pyjs__bind_method2('getYMousePlotArea', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub43,$sub44,result;
			result = (typeof ($sub43=$p['getattr'](self, 'yMouse'))==typeof ($sub44=$p['getattr'](self, 'topMargin')) && (typeof $sub43=='number'||typeof $sub43=='string')?
				$sub43-$sub44:
				$p['op_sub']($sub43,$sub44));
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYMousePlotArea'] = $method;
		$method = $pyjs__bind_method2('getXAxisEnsembleHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'xAxisEnsembleHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXAxisEnsembleHeight'] = $method;
		$method = $pyjs__bind_method2('getXMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'xMax');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXMax'] = $method;
		$method = $pyjs__bind_method2('getXMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'xMin');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXMin'] = $method;
		$method = $pyjs__bind_method2('getY2AxisEnsembleWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'y2AxisEnsembleWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getY2AxisEnsembleWidth'] = $method;
		$method = $pyjs__bind_method2('getY2Max', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'y2Max');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getY2Max'] = $method;
		$method = $pyjs__bind_method2('getY2Min', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'y2Min');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getY2Min'] = $method;
		$method = $pyjs__bind_method2('getYAxisEnsembleWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'yAxisEnsembleWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYAxisEnsembleWidth'] = $method;
		$method = $pyjs__bind_method2('legendThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'chartLegendThickness');
		}
	, 1, [null,null,['self']]);
		$cls_definition['legendThickness'] = $method;
		$method = $pyjs__bind_method2('chartFootnotesThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'chartFootnotesThickness');
		}
	, 1, [null,null,['self']]);
		$cls_definition['chartFootnotesThickness'] = $method;
		$method = $pyjs__bind_method2('chartTitleThickness', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'topMargin');
		}
	, 1, [null,null,['self']]);
		$cls_definition['chartTitleThickness'] = $method;
		$method = $pyjs__bind_method2('getYMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'yMax');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYMax'] = $method;
		$method = $pyjs__bind_method2('getYMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'yMin');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYMin'] = $method;
		$method = $pyjs__bind_method2('reset', function(xChartSize, yChartSize, hasYAxis, hasY2Axis, xAxis, yAxis, y2Axis) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xChartSize = arguments[1];
				yChartSize = arguments[2];
				hasYAxis = arguments[3];
				hasY2Axis = arguments[4];
				xAxis = arguments[5];
				yAxis = arguments[6];
				y2Axis = arguments[7];
			}
			var $add88,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$iter3_idx,$bool87,$bool86,$iter3_array,$or14,axisLimits,$bool88,$iter3_iter,grp,$bool85,$or12,$eq107,$add75,$iter3_type,$add72,$add76,$add77,$add74,$add73,$add71,i,$add78,$add79,$or13,$eq108,$iter3_nextval;
			self['chart']['getXAxis']()['maybePopulateTicks']();
			self['chart']['getYAxis']()['maybePopulateTicks']();
			self['chart']['getY2Axis']()['maybePopulateTicks']();
			self.xChartSize = xChartSize;
			self.yChartSize = yChartSize;
			axisLimits = xAxis['getAxisLimits']();
			self.xMin = $p['getattr'](axisLimits, 'min');
			self.xMax = $p['getattr'](axisLimits, 'max');
			axisLimits = yAxis['getAxisLimits']();
			self.yMin = $p['getattr'](axisLimits, 'min');
			self.yMax = $p['getattr'](axisLimits, 'max');
			axisLimits = y2Axis['getAxisLimits']();
			self.y2Min = $p['getattr'](axisLimits, 'min');
			self.y2Max = $p['getattr'](axisLimits, 'max');
			self.topMargin = self['chart']['getChartTitleThickness']();
			self.xAxisEnsembleHeight = (typeof ($add75=(typeof ($add73=(typeof ($add71=xAxis['getAxisLabelThickness']())==typeof ($add72=xAxis['getTickLabelThickness'](false)) && (typeof $add71=='number'||typeof $add71=='string')?
				$add71+$add72:
				$p['op_add']($add71,$add72)))==typeof ($add74=xAxis['getTickSpace']()) && (typeof $add73=='number'||typeof $add73=='string')?
				$add73+$add74:
				$p['op_add']($add73,$add74)))==typeof ($add76=xAxis['getTickLabelPadding']()) && (typeof $add75=='number'||typeof $add75=='string')?
				$add75+$add76:
				$p['op_add']($add75,$add76));
			self.yAxisEnsembleWidth = (typeof ($add81=(typeof ($add79=(typeof ($add77=yAxis['getAxisLabelThickness']())==typeof ($add78=yAxis['getTickLabelThickness'](false)) && (typeof $add77=='number'||typeof $add77=='string')?
				$add77+$add78:
				$p['op_add']($add77,$add78)))==typeof ($add80=yAxis['getTickSpace']()) && (typeof $add79=='number'||typeof $add79=='string')?
				$add79+$add80:
				$p['op_add']($add79,$add80)))==typeof ($add82=yAxis['getTickLabelPadding']()) && (typeof $add81=='number'||typeof $add81=='string')?
				$add81+$add82:
				$p['op_add']($add81,$add82));
			self.y2AxisEnsembleWidth = (typeof ($add87=(typeof ($add85=(typeof ($add83=y2Axis['getAxisLabelThickness']())==typeof ($add84=y2Axis['getTickLabelThickness'](false)) && (typeof $add83=='number'||typeof $add83=='string')?
				$add83+$add84:
				$p['op_add']($add83,$add84)))==typeof ($add86=y2Axis['getTickSpace']()) && (typeof $add85=='number'||typeof $add85=='string')?
				$add85+$add86:
				$p['op_add']($add85,$add86)))==typeof ($add88=y2Axis['getTickLabelPadding']()) && (typeof $add87=='number'||typeof $add87=='string')?
				$add87+$add88:
				$p['op_add']($add87,$add88));
			self.chartLegendThickness = self['chart']['getLegendThickness']();
			self.chartFootnotesThickness = self['chart']['getChartFootnotesThickness']();
			self['setPixelSize'](self['getXChartSizeDecoratedQuickly'](), self['getYChartSizeDecoratedQuickly']());
			self['setWidgetPosition']($p['getattr'](self, 'graphicsPanel'), $p['getattr'](self, 'yAxisEnsembleWidth'), $p['getattr'](self, 'topMargin'));
			self['setWidgetPosition']($p['getattr'](self, 'annotationPanel'), $p['getattr'](self, 'yAxisEnsembleWidth'), $p['getattr'](self, 'topMargin'));
			$iter3_iter = $p['range'](self['getRenderingPanelCount']());
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				grp = self['graphicsPanel']['getWidget'](i);
				if ((($bool88=((($bool85=$or12=(($eq107=$m['DECORATIVE_RENDERING_PANEL_INDEX'])===($eq108=i)&&$eq107===null?true:
					($eq107===null?false:($eq108===null?false:
						((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107.__cmp__=='function'?$eq107.__cmp__($eq108) === 0:
							((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108.__cmp__=='function'?$eq108.__cmp__($eq107) === 0:
								$eq107==$eq108)))))) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
					false :
					(typeof $bool85=='object'?
						(typeof $bool85.__nonzero__=='function'?
							$bool85.__nonzero__() :
							(typeof $bool85.__len__=='function'?
								($bool85.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or12:((($bool86=$or13=self['chart']['isHoverFeedbackRenderingPanel'](i)) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86.__nonzero__=='function'?
							$bool86.__nonzero__() :
							(typeof $bool86.__len__=='function'?
								($bool86.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:!(($bool87=self['chart']['getClipToPlotArea']()) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87.__nonzero__=='function'?
							$bool87.__nonzero__() :
							(typeof $bool87.__len__=='function'?
								($bool87.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )))) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
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
					grp['setPixelSize'](0, 0);
					$m['GChartUtil']['setOverflow'](grp, 'visible');
				}
				else {
					grp['setPixelSize'](self['getXChartSize'](), self['getYChartSize']());
					$m['GChartUtil']['setOverflow'](grp, 'hidden');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['xChartSize'],['yChartSize'],['hasYAxis'],['hasY2Axis'],['xAxis'],['yAxis'],['y2Axis']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('xToChartPixel', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var $add89,$div17,$sub48,$sub49,result,$add93,$sub45,$sub46,$sub47,$div18,$eq109,$sub50,$bool90,$sub54,$sub53,$sub52,$sub51,$bool91,$add94,$add90,$bool92,$add92,$add91,$mul6,$mul5,$mul4,$mul3,$eq112,$eq113,$eq110,$eq111,$eq114,$bool89;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool89=(($eq109=(typeof ($usub12=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub12:
				$p['op_usub']($usub12)))===($eq110=x)&&$eq109===null?true:
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
				result = $p['getattr'](self, 'yAxisEnsembleWidth');
			}
			else if ((($bool90=(($eq111=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq112=x)&&$eq111===null?true:
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
				result = (typeof ($sub45=(typeof ($add89=$p['getattr'](self, 'yAxisEnsembleWidth'))==typeof ($add90=$p['getattr'](self, 'xChartSize')) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90)))==typeof ($sub46=1.0) && (typeof $sub45=='number'||typeof $sub45=='string')?
					$sub45-$sub46:
					$p['op_sub']($sub45,$sub46));
			}
			else if ((($bool92=!(($bool91=(($eq113=$p['getattr']($m['Double'], 'NaN'))===($eq114=x)&&$eq113===null?true:
				($eq113===null?false:($eq114===null?false:
					((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113.__cmp__=='function'?$eq113.__cmp__($eq114) === 0:
						((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114.__cmp__=='function'?$eq114.__cmp__($eq113) === 0:
							$eq113==$eq114)))))) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
				false :
				(typeof $bool91=='object'?
					(typeof $bool91.__nonzero__=='function'?
						$bool91.__nonzero__() :
						(typeof $bool91.__len__=='function'?
							($bool91.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92.__nonzero__=='function'?
							$bool92.__nonzero__() :
							(typeof $bool92.__len__=='function'?
								($bool92.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($div17=(typeof ($add93=(typeof ($mul3=$p['getattr'](self, 'yAxisEnsembleWidth'))==typeof ($mul4=(typeof ($sub47=$p['getattr'](self, 'xMax'))==typeof ($sub48=x) && (typeof $sub47=='number'||typeof $sub47=='string')?
					$sub47-$sub48:
					$p['op_sub']($sub47,$sub48))) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($add94=(typeof ($mul5=(typeof ($sub49=(typeof ($add91=$p['getattr'](self, 'yAxisEnsembleWidth'))==typeof ($add92=$p['getattr'](self, 'xChartSize')) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92)))==typeof ($sub50=1.0) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$p['op_sub']($sub49,$sub50)))==typeof ($mul6=(typeof ($sub51=x)==typeof ($sub52=$p['getattr'](self, 'xMin')) && (typeof $sub51=='number'||typeof $sub51=='string')?
					$sub51-$sub52:
					$p['op_sub']($sub51,$sub52))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94)))==typeof ($div18=(typeof ($sub53=$p['getattr'](self, 'xMax'))==typeof ($sub54=$p['getattr'](self, 'xMin')) && (typeof $sub53=='number'||typeof $sub53=='string')?
					$sub53-$sub54:
					$p['op_sub']($sub53,$sub54))) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18));
			}
			return result;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['xToChartPixel'] = $method;
		$method = $pyjs__bind_method2('xToPixel', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var result,$sub62,$sub60,$sub61,$div19,$eq120,$sub57,$sub56,$sub55,$sub59,$sub58,$mul8,$mul7,$bool94,$bool95,$div20,$bool93,$eq116,$eq117,$bool96,$eq115,$eq118,$eq119;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool93=(($eq115=(typeof ($usub13=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub13:
				$p['op_usub']($usub13)))===($eq116=x)&&$eq115===null?true:
				($eq115===null?false:($eq116===null?false:
					((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115.__cmp__=='function'?$eq115.__cmp__($eq116) === 0:
						((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116.__cmp__=='function'?$eq116.__cmp__($eq115) === 0:
							$eq115==$eq116)))))) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
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
				result = 0;
			}
			else if ((($bool94=(($eq117=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq118=x)&&$eq117===null?true:
				($eq117===null?false:($eq118===null?false:
					((typeof $eq117=='object'||typeof $eq117=='function')&&typeof $eq117.__cmp__=='function'?$eq117.__cmp__($eq118) === 0:
						((typeof $eq118=='object'||typeof $eq118=='function')&&typeof $eq118.__cmp__=='function'?$eq118.__cmp__($eq117) === 0:
							$eq117==$eq118)))))) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
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
				result = (typeof ($sub55=$p['getattr'](self, 'xChartSize'))==typeof ($sub56=1.0) && (typeof $sub55=='number'||typeof $sub55=='string')?
					$sub55-$sub56:
					$p['op_sub']($sub55,$sub56));
			}
			else if ((($bool96=!(($bool95=(($eq119=$p['getattr']($m['Double'], 'NaN'))===($eq120=x)&&$eq119===null?true:
				($eq119===null?false:($eq120===null?false:
					((typeof $eq119=='object'||typeof $eq119=='function')&&typeof $eq119.__cmp__=='function'?$eq119.__cmp__($eq120) === 0:
						((typeof $eq120=='object'||typeof $eq120=='function')&&typeof $eq120.__cmp__=='function'?$eq120.__cmp__($eq119) === 0:
							$eq119==$eq120)))))) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
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
				result = (typeof ($div19=(typeof ($mul7=(typeof ($sub57=$p['getattr'](self, 'xChartSize'))==typeof ($sub58=1.0) && (typeof $sub57=='number'||typeof $sub57=='string')?
					$sub57-$sub58:
					$p['op_sub']($sub57,$sub58)))==typeof ($mul8=(typeof ($sub59=x)==typeof ($sub60=$p['getattr'](self, 'xMin')) && (typeof $sub59=='number'||typeof $sub59=='string')?
					$sub59-$sub60:
					$p['op_sub']($sub59,$sub60))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($div20=(typeof ($sub61=$p['getattr'](self, 'xMax'))==typeof ($sub62=$p['getattr'](self, 'xMin')) && (typeof $sub61=='number'||typeof $sub61=='string')?
					$sub61-$sub62:
					$p['op_sub']($sub61,$sub62))) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20));
			}
			return result;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['xToPixel'] = $method;
		$method = $pyjs__bind_method2('xChartPixelToX', function(xPx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xPx = arguments[1];
			}
			var $cmp39,result,$sub68,$sub66,$sub67,$sub64,$sub65,$cmp40,$eq122,$sub63,$add95,$add96,$and17,$mul9,$and18,$div21,$div22,$bool97,$bool98,$mul10,$eq121;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool98=((($bool97=$and17=!(($eq121=$m['NAI'])===($eq122=xPx)&&$eq121===null?true:
				($eq121===null?false:($eq122===null?false:
					((typeof $eq121=='object'||typeof $eq121=='function')&&typeof $eq121.__cmp__=='function'?$eq121.__cmp__($eq122) === 0:
						((typeof $eq122=='object'||typeof $eq122=='function')&&typeof $eq122.__cmp__=='function'?$eq122.__cmp__($eq121) === 0:
							$eq121==$eq122)))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
				false :
				(typeof $bool97=='object'?
					(typeof $bool97.__nonzero__=='function'?
						$bool97.__nonzero__() :
						(typeof $bool97.__len__=='function'?
							($bool97.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp39=$p['getattr'](self, 'xChartSize'))===($cmp40=1)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == 1):$and17)) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
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
				result = (typeof ($add95=$p['getattr'](self, 'xMin'))==typeof ($add96=(typeof ($div21=(typeof ($mul9=(typeof ($sub63=$p['getattr'](self, 'xMax'))==typeof ($sub64=$p['getattr'](self, 'xMin')) && (typeof $sub63=='number'||typeof $sub63=='string')?
					$sub63-$sub64:
					$p['op_sub']($sub63,$sub64)))==typeof ($mul10=(typeof ($sub65=xPx)==typeof ($sub66=$p['getattr'](self, 'yAxisEnsembleWidth')) && (typeof $sub65=='number'||typeof $sub65=='string')?
					$sub65-$sub66:
					$p['op_sub']($sub65,$sub66))) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($div22=(typeof ($sub67=$p['getattr'](self, 'xChartSize'))==typeof ($sub68=1.0) && (typeof $sub67=='number'||typeof $sub67=='string')?
					$sub67-$sub68:
					$p['op_sub']($sub67,$sub68))) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22))) && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96));
			}
			return result;
		}
	, 1, [null,null,['self'],['xPx']]);
		$cls_definition['xChartPixelToX'] = $method;
		$method = $pyjs__bind_method2('xPixelToX', function(xPx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xPx = arguments[1];
			}
			var $sub72,$and20,$add98,$mul12,$mul11,$eq123,$bool99,$add97,$div23,$eq124,$div24,$cmp41,result,$sub69,$cmp42,$and19,$sub71,$sub70,$bool100;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool100=((($bool99=$and19=!(($eq123=$m['NAI'])===($eq124=xPx)&&$eq123===null?true:
				($eq123===null?false:($eq124===null?false:
					((typeof $eq123=='object'||typeof $eq123=='function')&&typeof $eq123.__cmp__=='function'?$eq123.__cmp__($eq124) === 0:
						((typeof $eq124=='object'||typeof $eq124=='function')&&typeof $eq124.__cmp__=='function'?$eq124.__cmp__($eq123) === 0:
							$eq123==$eq124)))))) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
				false :
				(typeof $bool99=='object'?
					(typeof $bool99.__nonzero__=='function'?
						$bool99.__nonzero__() :
						(typeof $bool99.__len__=='function'?
							($bool99.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp41=$p['getattr'](self, 'xChartSize'))===($cmp42=1)?0:
				(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
					($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
					$p['cmp']($cmp41, $cmp42))) == 1):$and19)) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add97=$p['getattr'](self, 'xMin'))==typeof ($add98=(typeof ($div23=(typeof ($mul11=(typeof ($sub69=$p['getattr'](self, 'xMax'))==typeof ($sub70=$p['getattr'](self, 'xMin')) && (typeof $sub69=='number'||typeof $sub69=='string')?
					$sub69-$sub70:
					$p['op_sub']($sub69,$sub70)))==typeof ($mul12=xPx) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($div24=(typeof ($sub71=$p['getattr'](self, 'xChartSize'))==typeof ($sub72=1.0) && (typeof $sub71=='number'||typeof $sub71=='string')?
					$sub71-$sub72:
					$p['op_sub']($sub71,$sub72))) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))) && (typeof $add97=='number'||typeof $add97=='string')?
					$add97+$add98:
					$p['op_add']($add97,$add98));
			}
			return result;
		}
	, 1, [null,null,['self'],['xPx']]);
		$cls_definition['xPixelToX'] = $method;
		$method = $pyjs__bind_method2('dxToPixel', function(dx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dx = arguments[1];
			}
			var $mul14,$mul13,$div26,$div25,$sub75,$sub74,$sub76,$sub73,result;
			result = (typeof ($div25=(typeof ($mul13=dx)==typeof ($mul14=(typeof ($sub73=$p['getattr'](self, 'xChartSize'))==typeof ($sub74=1) && (typeof $sub73=='number'||typeof $sub73=='string')?
				$sub73-$sub74:
				$p['op_sub']($sub73,$sub74))) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)))==typeof ($div26=(typeof ($sub75=$p['getattr'](self, 'xMax'))==typeof ($sub76=$p['getattr'](self, 'xMin')) && (typeof $sub75=='number'||typeof $sub75=='string')?
				$sub75-$sub76:
				$p['op_sub']($sub75,$sub76))) && typeof $div25=='number' && $div26 !== 0?
				$div25/$div26:
				$p['op_div']($div25,$div26));
			return result;
		}
	, 1, [null,null,['self'],['dx']]);
		$cls_definition['dxToPixel'] = $method;
		$method = $pyjs__bind_method2('yToChartPixel', function(y, isY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
				isY2 = arguments[2];
			}
			var maxY,$sub84,$sub85,$sub86,$sub80,result,$sub82,$sub83,$add104,$eq129,$eq128,$eq127,$eq126,$eq125,minY,$add101,$add100,$add103,$add102,$add99,$bool105,$bool104,$bool101,$sub78,$bool103,$bool102,$sub77,$mul17,$mul16,$mul15,$div27,$div28,$eq130,$mul18,$sub79,$sub81;
			if ((($bool101=isY2) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
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
				minY = $p['getattr'](self, 'y2Min');
				maxY = $p['getattr'](self, 'y2Max');
			}
			else {
				minY = $p['getattr'](self, 'yMin');
				maxY = $p['getattr'](self, 'yMax');
			}
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool102=(($eq125=(typeof ($usub14=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub14:
				$p['op_usub']($usub14)))===($eq126=y)&&$eq125===null?true:
				($eq125===null?false:($eq126===null?false:
					((typeof $eq125=='object'||typeof $eq125=='function')&&typeof $eq125.__cmp__=='function'?$eq125.__cmp__($eq126) === 0:
						((typeof $eq126=='object'||typeof $eq126=='function')&&typeof $eq126.__cmp__=='function'?$eq126.__cmp__($eq125) === 0:
							$eq125==$eq126)))))) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
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
				result = (typeof ($sub77=(typeof ($add99=$p['getattr'](self, 'yChartSize'))==typeof ($add100=$p['getattr'](self, 'topMargin')) && (typeof $add99=='number'||typeof $add99=='string')?
					$add99+$add100:
					$p['op_add']($add99,$add100)))==typeof ($sub78=1.0) && (typeof $sub77=='number'||typeof $sub77=='string')?
					$sub77-$sub78:
					$p['op_sub']($sub77,$sub78));
			}
			else if ((($bool103=(($eq127=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq128=y)&&$eq127===null?true:
				($eq127===null?false:($eq128===null?false:
					((typeof $eq127=='object'||typeof $eq127=='function')&&typeof $eq127.__cmp__=='function'?$eq127.__cmp__($eq128) === 0:
						((typeof $eq128=='object'||typeof $eq128=='function')&&typeof $eq128.__cmp__=='function'?$eq128.__cmp__($eq127) === 0:
							$eq127==$eq128)))))) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
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
				result = $p['getattr'](self, 'topMargin');
			}
			else if ((($bool105=!(($bool104=(($eq129=$p['getattr']($m['Double'], 'NaN'))===($eq130=y)&&$eq129===null?true:
				($eq129===null?false:($eq130===null?false:
					((typeof $eq129=='object'||typeof $eq129=='function')&&typeof $eq129.__cmp__=='function'?$eq129.__cmp__($eq130) === 0:
						((typeof $eq130=='object'||typeof $eq130=='function')&&typeof $eq130.__cmp__=='function'?$eq130.__cmp__($eq129) === 0:
							$eq129==$eq130)))))) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
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
				result = (typeof ($div27=(typeof ($add103=(typeof ($mul15=$p['getattr'](self, 'topMargin'))==typeof ($mul16=(typeof ($sub79=y)==typeof ($sub80=minY) && (typeof $sub79=='number'||typeof $sub79=='string')?
					$sub79-$sub80:
					$p['op_sub']($sub79,$sub80))) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))==typeof ($add104=(typeof ($mul17=(typeof ($sub81=(typeof ($add101=$p['getattr'](self, 'yChartSize'))==typeof ($add102=$p['getattr'](self, 'topMargin')) && (typeof $add101=='number'||typeof $add101=='string')?
					$add101+$add102:
					$p['op_add']($add101,$add102)))==typeof ($sub82=1.0) && (typeof $sub81=='number'||typeof $sub81=='string')?
					$sub81-$sub82:
					$p['op_sub']($sub81,$sub82)))==typeof ($mul18=(typeof ($sub83=maxY)==typeof ($sub84=y) && (typeof $sub83=='number'||typeof $sub83=='string')?
					$sub83-$sub84:
					$p['op_sub']($sub83,$sub84))) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))) && (typeof $add103=='number'||typeof $add103=='string')?
					$add103+$add104:
					$p['op_add']($add103,$add104)))==typeof ($div28=(typeof ($sub85=maxY)==typeof ($sub86=minY) && (typeof $sub85=='number'||typeof $sub85=='string')?
					$sub85-$sub86:
					$p['op_sub']($sub85,$sub86))) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28));
			}
			return result;
		}
	, 1, [null,null,['self'],['y'],['isY2']]);
		$cls_definition['yToChartPixel'] = $method;
		$method = $pyjs__bind_method2('yToPixel', function(y, isY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
				isY2 = arguments[2];
			}
			var maxY,$bool110,$sub87,result,$sub88,$sub89,$div30,minY,$mul20,$div29,$sub93,$sub92,$sub91,$bool106,$sub94,$bool109,$bool108,$eq134,$eq135,$eq136,$eq131,$eq132,$eq133,$bool107,$mul19,$sub90;
			if ((($bool106=isY2) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
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
				minY = $p['getattr'](self, 'y2Min');
				maxY = $p['getattr'](self, 'y2Max');
			}
			else {
				minY = $p['getattr'](self, 'yMin');
				maxY = $p['getattr'](self, 'yMax');
			}
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool107=(($eq131=(typeof ($usub15=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub15:
				$p['op_usub']($usub15)))===($eq132=y)&&$eq131===null?true:
				($eq131===null?false:($eq132===null?false:
					((typeof $eq131=='object'||typeof $eq131=='function')&&typeof $eq131.__cmp__=='function'?$eq131.__cmp__($eq132) === 0:
						((typeof $eq132=='object'||typeof $eq132=='function')&&typeof $eq132.__cmp__=='function'?$eq132.__cmp__($eq131) === 0:
							$eq131==$eq132)))))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
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
				result = (typeof ($sub87=$p['getattr'](self, 'yChartSize'))==typeof ($sub88=1.0) && (typeof $sub87=='number'||typeof $sub87=='string')?
					$sub87-$sub88:
					$p['op_sub']($sub87,$sub88));
			}
			else if ((($bool108=(($eq133=$p['getattr']($m['Double'], 'MAX_VALUE'))===($eq134=y)&&$eq133===null?true:
				($eq133===null?false:($eq134===null?false:
					((typeof $eq133=='object'||typeof $eq133=='function')&&typeof $eq133.__cmp__=='function'?$eq133.__cmp__($eq134) === 0:
						((typeof $eq134=='object'||typeof $eq134=='function')&&typeof $eq134.__cmp__=='function'?$eq134.__cmp__($eq133) === 0:
							$eq133==$eq134)))))) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
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
				result = 0;
			}
			else if ((($bool110=!(($bool109=(($eq135=$p['getattr']($m['Double'], 'NaN'))===($eq136=y)&&$eq135===null?true:
				($eq135===null?false:($eq136===null?false:
					((typeof $eq135=='object'||typeof $eq135=='function')&&typeof $eq135.__cmp__=='function'?$eq135.__cmp__($eq136) === 0:
						((typeof $eq136=='object'||typeof $eq136=='function')&&typeof $eq136.__cmp__=='function'?$eq136.__cmp__($eq135) === 0:
							$eq135==$eq136)))))) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
				false :
				(typeof $bool109=='object'?
					(typeof $bool109.__nonzero__=='function'?
						$bool109.__nonzero__() :
						(typeof $bool109.__len__=='function'?
							($bool109.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
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
				result = (typeof ($div29=(typeof ($mul19=(typeof ($sub89=$p['getattr'](self, 'yChartSize'))==typeof ($sub90=1.0) && (typeof $sub89=='number'||typeof $sub89=='string')?
					$sub89-$sub90:
					$p['op_sub']($sub89,$sub90)))==typeof ($mul20=(typeof ($sub91=maxY)==typeof ($sub92=y) && (typeof $sub91=='number'||typeof $sub91=='string')?
					$sub91-$sub92:
					$p['op_sub']($sub91,$sub92))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))==typeof ($div30=(typeof ($sub93=maxY)==typeof ($sub94=minY) && (typeof $sub93=='number'||typeof $sub93=='string')?
					$sub93-$sub94:
					$p['op_sub']($sub93,$sub94))) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30));
			}
			return result;
		}
	, 1, [null,null,['self'],['y'],['isY2']]);
		$cls_definition['yToPixel'] = $method;
		$method = $pyjs__bind_method2('yChartPixelToY', function(yPx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yPx = arguments[1];
			}
			var $sub100,$bool111,result,$and22,$cmp43,$and21,$cmp44,$div32,$div31,$mul22,$mul21,$add105,$add106,$sub97,$sub96,$sub95,$sub99,$sub98,$bool112,$eq138,$eq137;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool112=((($bool111=$and21=!(($eq137=$m['NAI'])===($eq138=yPx)&&$eq137===null?true:
				($eq137===null?false:($eq138===null?false:
					((typeof $eq137=='object'||typeof $eq137=='function')&&typeof $eq137.__cmp__=='function'?$eq137.__cmp__($eq138) === 0:
						((typeof $eq138=='object'||typeof $eq138=='function')&&typeof $eq138.__cmp__=='function'?$eq138.__cmp__($eq137) === 0:
							$eq137==$eq138)))))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
				false :
				(typeof $bool111=='object'?
					(typeof $bool111.__nonzero__=='function'?
						$bool111.__nonzero__() :
						(typeof $bool111.__len__=='function'?
							($bool111.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp43=$p['getattr'](self, 'yChartSize'))===($cmp44=1)?0:
				(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
					($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
					$p['cmp']($cmp43, $cmp44))) == 1):$and21)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112.__nonzero__=='function'?
							$bool112.__nonzero__() :
							(typeof $bool112.__len__=='function'?
								($bool112.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add105=$p['getattr'](self, 'yMax'))==typeof ($add106=(typeof ($div31=(typeof ($mul21=(typeof ($sub95=$p['getattr'](self, 'yMin'))==typeof ($sub96=$p['getattr'](self, 'yMax')) && (typeof $sub95=='number'||typeof $sub95=='string')?
					$sub95-$sub96:
					$p['op_sub']($sub95,$sub96)))==typeof ($mul22=(typeof ($sub97=yPx)==typeof ($sub98=$p['getattr'](self, 'topMargin')) && (typeof $sub97=='number'||typeof $sub97=='string')?
					$sub97-$sub98:
					$p['op_sub']($sub97,$sub98))) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)))==typeof ($div32=(typeof ($sub99=$p['getattr'](self, 'yChartSize'))==typeof ($sub100=1.0) && (typeof $sub99=='number'||typeof $sub99=='string')?
					$sub99-$sub100:
					$p['op_sub']($sub99,$sub100))) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32))) && (typeof $add105=='number'||typeof $add105=='string')?
					$add105+$add106:
					$p['op_add']($add105,$add106));
			}
			return result;
		}
	, 1, [null,null,['self'],['yPx']]);
		$cls_definition['yChartPixelToY'] = $method;
		$method = $pyjs__bind_method2('yPixelToY', function(yPx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yPx = arguments[1];
			}
			var $div33,$add107,$eq139,$div34,$sub101,$add108,$mul23,$bool113,$sub102,$sub103,result,$bool114,$and23,$sub104,$mul24,$cmp45,$cmp46,$eq140,$and24;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool114=((($bool113=$and23=!(($eq139=$m['NAI'])===($eq140=yPx)&&$eq139===null?true:
				($eq139===null?false:($eq140===null?false:
					((typeof $eq139=='object'||typeof $eq139=='function')&&typeof $eq139.__cmp__=='function'?$eq139.__cmp__($eq140) === 0:
						((typeof $eq140=='object'||typeof $eq140=='function')&&typeof $eq140.__cmp__=='function'?$eq140.__cmp__($eq139) === 0:
							$eq139==$eq140)))))) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
				false :
				(typeof $bool113=='object'?
					(typeof $bool113.__nonzero__=='function'?
						$bool113.__nonzero__() :
						(typeof $bool113.__len__=='function'?
							($bool113.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp45=$p['getattr'](self, 'yChartSize'))===($cmp46=1)?0:
				(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
					($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
					$p['cmp']($cmp45, $cmp46))) == 1):$and23)) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
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
				result = (typeof ($add107=$p['getattr'](self, 'yMax'))==typeof ($add108=(typeof ($div33=(typeof ($mul23=(typeof ($sub101=$p['getattr'](self, 'yMin'))==typeof ($sub102=$p['getattr'](self, 'yMax')) && (typeof $sub101=='number'||typeof $sub101=='string')?
					$sub101-$sub102:
					$p['op_sub']($sub101,$sub102)))==typeof ($mul24=yPx) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)))==typeof ($div34=(typeof ($sub103=$p['getattr'](self, 'yChartSize'))==typeof ($sub104=1.0) && (typeof $sub103=='number'||typeof $sub103=='string')?
					$sub103-$sub104:
					$p['op_sub']($sub103,$sub104))) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34))) && (typeof $add107=='number'||typeof $add107=='string')?
					$add107+$add108:
					$p['op_add']($add107,$add108));
			}
			return result;
		}
	, 1, [null,null,['self'],['yPx']]);
		$cls_definition['yPixelToY'] = $method;
		$method = $pyjs__bind_method2('yChartPixelToY2', function(yPx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yPx = arguments[1];
			}
			var $bool115,$add110,$cmp48,$bool116,result,$sub106,$sub107,$sub108,$sub109,$and26,$and25,$div36,$div35,$cmp47,$mul26,$mul25,$eq141,$eq142,$add109,$sub110,$sub105;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool116=((($bool115=$and25=!(($eq141=$m['NAI'])===($eq142=yPx)&&$eq141===null?true:
				($eq141===null?false:($eq142===null?false:
					((typeof $eq141=='object'||typeof $eq141=='function')&&typeof $eq141.__cmp__=='function'?$eq141.__cmp__($eq142) === 0:
						((typeof $eq142=='object'||typeof $eq142=='function')&&typeof $eq142.__cmp__=='function'?$eq142.__cmp__($eq141) === 0:
							$eq141==$eq142)))))) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115.__nonzero__=='function'?
						$bool115.__nonzero__() :
						(typeof $bool115.__len__=='function'?
							($bool115.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp47=$p['getattr'](self, 'yChartSize'))===($cmp48=1)?0:
				(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
					($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
					$p['cmp']($cmp47, $cmp48))) == 1):$and25)) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116.__nonzero__=='function'?
							$bool116.__nonzero__() :
							(typeof $bool116.__len__=='function'?
								($bool116.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add109=$p['getattr'](self, 'y2Max'))==typeof ($add110=(typeof ($div35=(typeof ($mul25=(typeof ($sub105=$p['getattr'](self, 'y2Min'))==typeof ($sub106=$p['getattr'](self, 'y2Max')) && (typeof $sub105=='number'||typeof $sub105=='string')?
					$sub105-$sub106:
					$p['op_sub']($sub105,$sub106)))==typeof ($mul26=(typeof ($sub107=yPx)==typeof ($sub108=$p['getattr'](self, 'topMargin')) && (typeof $sub107=='number'||typeof $sub107=='string')?
					$sub107-$sub108:
					$p['op_sub']($sub107,$sub108))) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)))==typeof ($div36=(typeof ($sub109=$p['getattr'](self, 'yChartSize'))==typeof ($sub110=1.0) && (typeof $sub109=='number'||typeof $sub109=='string')?
					$sub109-$sub110:
					$p['op_sub']($sub109,$sub110))) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36))) && (typeof $add109=='number'||typeof $add109=='string')?
					$add109+$add110:
					$p['op_add']($add109,$add110));
			}
			return result;
		}
	, 1, [null,null,['self'],['yPx']]);
		$cls_definition['yChartPixelToY2'] = $method;
		$method = $pyjs__bind_method2('yPixelToY2', function(yPx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yPx = arguments[1];
			}
			var $div37,$cmp49,$mul27,$sub114,$add112,$add111,$sub113,$sub112,$sub111,$and28,$div38,result,$mul28,$cmp50,$eq144,$bool118,$and27,$eq143,$bool117;
			result = $p['getattr']($m['Double'], 'NaN');
			if ((($bool118=((($bool117=$and27=!(($eq143=$m['NAI'])===($eq144=yPx)&&$eq143===null?true:
				($eq143===null?false:($eq144===null?false:
					((typeof $eq143=='object'||typeof $eq143=='function')&&typeof $eq143.__cmp__=='function'?$eq143.__cmp__($eq144) === 0:
						((typeof $eq144=='object'||typeof $eq144=='function')&&typeof $eq144.__cmp__=='function'?$eq144.__cmp__($eq143) === 0:
							$eq143==$eq144)))))) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
				false :
				(typeof $bool117=='object'?
					(typeof $bool117.__nonzero__=='function'?
						$bool117.__nonzero__() :
						(typeof $bool117.__len__=='function'?
							($bool117.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp49=$p['getattr'](self, 'yChartSize'))===($cmp50=1)?0:
				(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
					($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
					$p['cmp']($cmp49, $cmp50))) == 1):$and27)) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
					false :
					(typeof $bool118=='object'?
						(typeof $bool118.__nonzero__=='function'?
							$bool118.__nonzero__() :
							(typeof $bool118.__len__=='function'?
								($bool118.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add111=$p['getattr'](self, 'y2Max'))==typeof ($add112=(typeof ($div37=(typeof ($mul27=(typeof ($sub111=$p['getattr'](self, 'y2Min'))==typeof ($sub112=$p['getattr'](self, 'y2Max')) && (typeof $sub111=='number'||typeof $sub111=='string')?
					$sub111-$sub112:
					$p['op_sub']($sub111,$sub112)))==typeof ($mul28=yPx) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)))==typeof ($div38=(typeof ($sub113=$p['getattr'](self, 'yChartSize'))==typeof ($sub114=1.0) && (typeof $sub113=='number'||typeof $sub113=='string')?
					$sub113-$sub114:
					$p['op_sub']($sub113,$sub114))) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					$p['op_div']($div37,$div38))) && (typeof $add111=='number'||typeof $add111=='string')?
					$add111+$add112:
					$p['op_add']($add111,$add112));
			}
			return result;
		}
	, 1, [null,null,['self'],['yPx']]);
		$cls_definition['yPixelToY2'] = $method;
		$method = $pyjs__bind_method2('dyToPixel', function(dy, isY2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dy = arguments[1];
				isY2 = arguments[2];
			}
			var result,maxY,$div40,$mul29,minY,$sub117,$sub115,$div39,$sub118,$bool119,$mul30,$sub116;
			if ((($bool119=isY2) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
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
				minY = $p['getattr'](self, 'y2Min');
				maxY = $p['getattr'](self, 'y2Max');
			}
			else {
				minY = $p['getattr'](self, 'yMin');
				maxY = $p['getattr'](self, 'yMax');
			}
			result = (typeof ($div39=(typeof ($mul29=dy)==typeof ($mul30=(typeof ($sub115=$p['getattr'](self, 'yChartSize'))==typeof ($sub116=1) && (typeof $sub115=='number'||typeof $sub115=='string')?
				$sub115-$sub116:
				$p['op_sub']($sub115,$sub116))) && typeof $mul29=='number'?
				$mul29*$mul30:
				$p['op_mul']($mul29,$mul30)))==typeof ($div40=(typeof ($sub117=maxY)==typeof ($sub118=minY) && (typeof $sub117=='number'||typeof $sub117=='string')?
				$sub117-$sub118:
				$p['op_sub']($sub117,$sub118))) && typeof $div39=='number' && $div40 !== 0?
				$div39/$div40:
				$p['op_div']($div39,$div40));
			return result;
		}
	, 1, [null,null,['self'],['dy'],['isY2']]);
		$cls_definition['dyToPixel'] = $method;
		$method = $pyjs__bind_method2('getOpenedHoverContainer', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalIndex,arp,c,rpIndex,$and29,result,$and30,$bool121,$bool120;
			result = null;
			c = self['chart']['getSystemCurve']($m['HOVER_ANNOTATION_ID']);
			if ((($bool121=((($bool120=$and29=($p['getattr'](self, 'touchedPoint') !== null)) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
				false :
				(typeof $bool120=='object'?
					(typeof $bool120.__nonzero__=='function'?
						$bool120.__nonzero__() :
						(typeof $bool120.__len__=='function'?
							($bool120.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?c['isVisible']():$and29)) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
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
				internalIndex = self['chart']['getInternalCurveIndex'](c);
				rpIndex = self['chart']['getRenderingPanelIndex'](internalIndex);
				arp = self['getAnnotationRenderingPanel'](rpIndex);
				result = arp['getFirstInnerAlignedLabel']();
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOpenedHoverContainer'] = $method;
		$method = $pyjs__bind_method2('getOpenedHoverElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and31,$or15,$or16,hoverContainer,$bool123,$bool122,$and32;
			hoverContainer = self['getOpenedHoverContainer']();
			return ((($bool123=$or15=((($bool122=$and31=hoverContainer) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
				false :
				(typeof $bool122=='object'?
					(typeof $bool122.__nonzero__=='function'?
						$bool122.__nonzero__() :
						(typeof $bool122.__len__=='function'?
							($bool122.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?hoverContainer['getElement']():$and31)) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
				false :
				(typeof $bool123=='object'?
					(typeof $bool123.__nonzero__=='function'?
						$bool123.__nonzero__() :
						(typeof $bool123.__len__=='function'?
							($bool123.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or15:null);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOpenedHoverElement'] = $method;
		$method = $pyjs__bind_method2('touch', function(p) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p = arguments[1];
			}
			var cAnnotation,$and34,$bool138,$bool139,$bool126,$bool134,$bool135,$bool136,$bool137,$bool130,$bool125,$bool132,$bool133,$bool143,$bool142,$eq163,$eq162,fillThickness,$eq160,$bool145,fillSpacing,$bool146,$bool131,$pyjs_try_err,$eq149,$eq148,$eq145,$eq147,$eq146,$or20,$bool140,hovertext,prevTouchedPoint,$eq164,$bool129,$bool128,$bool127,$and35,$and36,$bool124,$bool141,$bool144,$and33,$eq161,cCursor,cTouched,$eq152,$eq153,$or17,borderWidth,$eq158,$eq159,$eq156,$eq157,$eq154,$eq155,$or19,$or18,$eq150,$eq151;
			prevTouchedPoint = $p['getattr'](self, 'touchedPoint');
			self.touchedPoint = p;
			cAnnotation = self['chart']['getSystemCurve']($m['HOVER_ANNOTATION_ID']);
			cCursor = self['chart']['getSystemCurve']($m['HOVER_CURSOR_ID']);
			cTouched = ((($bool125=$or17=((($bool124=$and33=p) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
				false :
				(typeof $bool124=='object'?
					(typeof $bool124.__nonzero__=='function'?
						$bool124.__nonzero__() :
						(typeof $bool124.__len__=='function'?
							($bool124.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?p['getParent']():$and33)) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
				false :
				(typeof $bool125=='object'?
					(typeof $bool125.__nonzero__=='function'?
						$bool125.__nonzero__() :
						(typeof $bool125.__len__=='function'?
							($bool125.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or17:null);
			if ((($bool126=!(($eq145=null)===($eq146=$p['getattr'](self, 'touchedHoverWidget'))&&$eq145===null?true:
				($eq145===null?false:($eq146===null?false:
					((typeof $eq145=='object'||typeof $eq145=='function')&&typeof $eq145.__cmp__=='function'?$eq145.__cmp__($eq146) === 0:
						((typeof $eq146=='object'||typeof $eq146=='function')&&typeof $eq146.__cmp__=='function'?$eq146.__cmp__($eq145) === 0:
							$eq145==$eq146)))))) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
					false :
					(typeof $bool126=='object'?
						(typeof $bool126.__nonzero__=='function'?
							$bool126.__nonzero__() :
							(typeof $bool126.__len__=='function'?
								($bool126.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool128=!(($bool127=$p['getattr'](self, 'insideHoverCleanup')) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
					false :
					(typeof $bool127=='object'?
						(typeof $bool127.__nonzero__=='function'?
							$bool127.__nonzero__() :
							(typeof $bool127.__len__=='function'?
								($bool127.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
						false :
						(typeof $bool128=='object'?
							(typeof $bool128.__nonzero__=='function'?
								$bool128.__nonzero__() :
								(typeof $bool128.__len__=='function'?
									($bool128.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					try {
						self.insideHoverCleanup = true;
						self['touchedHoverWidget']['hoverCleanup'](prevTouchedPoint);
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
						}
					}
					self.insideHoverCleanup = false;
				}
			}
			self.touchedHoverWidget = ((($bool130=$or19=((($bool129=$and35=cTouched) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
				false :
				(typeof $bool129=='object'?
					(typeof $bool129.__nonzero__=='function'?
						$bool129.__nonzero__() :
						(typeof $bool129.__len__=='function'?
							($bool129.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?cTouched['getSymbol']()['getHoverWidget']():$and35)) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
				false :
				(typeof $bool130=='object'?
					(typeof $bool130.__nonzero__=='function'?
						$bool130.__nonzero__() :
						(typeof $bool130.__len__=='function'?
							($bool130.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or19:null);
			if ((($bool131=(($eq147=null)===($eq148=$p['getattr'](self, 'touchedHoverWidget'))&&$eq147===null?true:
				($eq147===null?false:($eq148===null?false:
					((typeof $eq147=='object'||typeof $eq147=='function')&&typeof $eq147.__cmp__=='function'?$eq147.__cmp__($eq148) === 0:
						((typeof $eq148=='object'||typeof $eq148=='function')&&typeof $eq148.__cmp__=='function'?$eq148.__cmp__($eq147) === 0:
							$eq147==$eq148)))))) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
					false :
					(typeof $bool131=='object'?
						(typeof $bool131.__nonzero__=='function'?
							$bool131.__nonzero__() :
							(typeof $bool131.__len__=='function'?
								($bool131.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool132=!(($eq149=null)===($eq150=p)&&$eq149===null?true:
					($eq149===null?false:($eq150===null?false:
						((typeof $eq149=='object'||typeof $eq149=='function')&&typeof $eq149.__cmp__=='function'?$eq149.__cmp__($eq150) === 0:
							((typeof $eq150=='object'||typeof $eq150=='function')&&typeof $eq150.__cmp__=='function'?$eq150.__cmp__($eq149) === 0:
								$eq149==$eq150)))))) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
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
					hovertext = p['getHovertext']();
					cAnnotation['getPoint'](0)['setAnnotationText'](hovertext, $p['getattr'](cTouched['getSymbol']()['getHoverAnnotation'](), 'widthUpperBound'), $p['getattr'](cTouched['getSymbol']()['getHoverAnnotation'](), 'heightUpperBound'));
				}
			}
			else {
				if ((($bool134=!(($bool133=$p['getattr'](self, 'insideHoverUpdate')) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
					false :
					(typeof $bool133=='object'?
						(typeof $bool133.__nonzero__=='function'?
							$bool133.__nonzero__() :
							(typeof $bool133.__len__=='function'?
								($bool133.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
						false :
						(typeof $bool134=='object'?
							(typeof $bool134.__nonzero__=='function'?
								$bool134.__nonzero__() :
								(typeof $bool134.__len__=='function'?
									($bool134.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					try {
						self.insideHoverUpdate = true;
						self['touchedHoverWidget']['hoverUpdate'](p);
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
						}
					}
					self.insideHoverUpdate = false;
				}
				cAnnotation['getPoint'](0)['setAnnotationWidget']($p['getattr'](self, 'touchedHoverWidget'), $p['getattr'](cTouched['getSymbol']()['getHoverAnnotation'](), 'widthUpperBound'), $p['getattr'](cTouched['getSymbol']()['getHoverAnnotation'](), 'heightUpperBound'));
			}
			if ((($bool135=(($eq151=null)===($eq152=p)&&$eq151===null?true:
				($eq151===null?false:($eq152===null?false:
					((typeof $eq151=='object'||typeof $eq151=='function')&&typeof $eq151.__cmp__=='function'?$eq151.__cmp__($eq152) === 0:
						((typeof $eq152=='object'||typeof $eq152=='function')&&typeof $eq152.__cmp__=='function'?$eq152.__cmp__($eq151) === 0:
							$eq151==$eq152)))))) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
					false :
					(typeof $bool135=='object'?
						(typeof $bool135.__nonzero__=='function'?
							$bool135.__nonzero__() :
							(typeof $bool135.__len__=='function'?
								($bool135.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cAnnotation['setVisible'](false);
				cCursor['setVisible'](false);
			}
			else {
				if ((($bool137=!(($bool136=cTouched['getSymbol']()['getHoverAnnotationEnabled']()) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
					false :
					(typeof $bool136=='object'?
						(typeof $bool136.__nonzero__=='function'?
							$bool136.__nonzero__() :
							(typeof $bool136.__len__=='function'?
								($bool136.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
						false :
						(typeof $bool137=='object'?
							(typeof $bool137.__nonzero__=='function'?
								$bool137.__nonzero__() :
								(typeof $bool137.__len__=='function'?
									($bool137.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					cAnnotation['setVisible'](false);
				}
				else {
					cAnnotation['setVisible'](true);
					cAnnotation['setYAxis'](cTouched['getYAxis']());
					cAnnotation['getPoint'](0)['setX'](p['getX']());
					cAnnotation['getPoint'](0)['setY'](p['getY']());
					cAnnotation['getSymbol']()['copy'](cTouched['getSymbol']());
					cAnnotation['getSymbol']()['setImageURL']($m['DEFAULT_BLANK_IMAGE_URL_FULLPATH']);
					cAnnotation['getSymbol']()['setBackgroundColor']('transparent');
					cAnnotation['getSymbol']()['setBorderColor']($m['TRANSPARENT_BORDER_COLOR']);
					if ((($bool138=!(($eq153=null)===($eq154=cTouched['getSymbol']()['getHoverAnnotationSymbolType']())&&$eq153===null?true:
						($eq153===null?false:($eq154===null?false:
							((typeof $eq153=='object'||typeof $eq153=='function')&&typeof $eq153.__cmp__=='function'?$eq153.__cmp__($eq154) === 0:
								((typeof $eq154=='object'||typeof $eq154=='function')&&typeof $eq154.__cmp__=='function'?$eq154.__cmp__($eq153) === 0:
									$eq153==$eq154)))))) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
							false :
							(typeof $bool138=='object'?
								(typeof $bool138.__nonzero__=='function'?
									$bool138.__nonzero__() :
									(typeof $bool138.__len__=='function'?
										($bool138.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						cAnnotation['getSymbol']()['setSymbolType'](cTouched['getSymbol']()['getHoverAnnotationSymbolType']());
					}
					cAnnotation['getPoint'](0)['setAnnotationFontColor'](cTouched['getSymbol']()['getHoverFontColor']());
					cAnnotation['getPoint'](0)['setAnnotationFontSize'](cTouched['getSymbol']()['getHoverFontSize']());
					cAnnotation['getPoint'](0)['setAnnotationFontStyle'](cTouched['getSymbol']()['getHoverFontStyle']());
					cAnnotation['getPoint'](0)['setAnnotationFontWeight'](cTouched['getSymbol']()['getHoverFontWeight']());
					cAnnotation['getPoint'](0)['setAnnotationLocation'](cTouched['getSymbol']()['getHoverLocation']());
					cAnnotation['getPoint'](0)['setAnnotationXShift'](cTouched['getSymbol']()['getHoverXShift']());
					cAnnotation['getPoint'](0)['setAnnotationYShift'](cTouched['getSymbol']()['getHoverYShift']());
				}
				if ((($bool140=!(($bool139=cTouched['getSymbol']()['getHoverSelectionEnabled']()) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
					false :
					(typeof $bool139=='object'?
						(typeof $bool139.__nonzero__=='function'?
							$bool139.__nonzero__() :
							(typeof $bool139.__len__=='function'?
								($bool139.__len__()>0 ?
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
							 true ) )) {
					cCursor['setVisible'](false);
				}
				else {
					cCursor['setVisible'](true);
					cCursor['setYAxis'](cTouched['getYAxis']());
					cCursor['getPoint'](0)['setX'](p['getX']());
					cCursor['getPoint'](0)['setY'](p['getY']());
					cCursor['getSymbol']()['copy'](cTouched['getSymbol']());
					if ((($bool141=!(($eq155=null)===($eq156=cTouched['getSymbol']()['getHoverSelectionSymbolType']())&&$eq155===null?true:
						($eq155===null?false:($eq156===null?false:
							((typeof $eq155=='object'||typeof $eq155=='function')&&typeof $eq155.__cmp__=='function'?$eq155.__cmp__($eq156) === 0:
								((typeof $eq156=='object'||typeof $eq156=='function')&&typeof $eq156.__cmp__=='function'?$eq156.__cmp__($eq155) === 0:
									$eq155==$eq156)))))) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
							false :
							(typeof $bool141=='object'?
								(typeof $bool141.__nonzero__=='function'?
									$bool141.__nonzero__() :
									(typeof $bool141.__len__=='function'?
										($bool141.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						cCursor['getSymbol']()['setSymbolType'](cTouched['getSymbol']()['getHoverSelectionSymbolType']());
					}
					fillSpacing = cTouched['getSymbol']()['getHoverSelectionFillSpacing']();
					if ((($bool143=!(($bool142=(($eq157=$p['getattr']($m['Double'], 'NaN'))===($eq158=fillSpacing)&&$eq157===null?true:
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
							 true ) )) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
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
						cCursor['getSymbol']()['setFillSpacing'](fillSpacing);
					}
					fillThickness = cTouched['getSymbol']()['getHoverSelectionFillThickness']();
					if ((($bool144=!(($eq159=$m['NAI'])===($eq160=fillThickness)&&$eq159===null?true:
						($eq159===null?false:($eq160===null?false:
							((typeof $eq159=='object'||typeof $eq159=='function')&&typeof $eq159.__cmp__=='function'?$eq159.__cmp__($eq160) === 0:
								((typeof $eq160=='object'||typeof $eq160=='function')&&typeof $eq160.__cmp__=='function'?$eq160.__cmp__($eq159) === 0:
									$eq159==$eq160)))))) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
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
						cCursor['getSymbol']()['setFillThickness'](fillThickness);
					}
					if ((($bool145=!(($eq161=$m['NAI'])===($eq162=cTouched['getSymbol']()['getHoverSelectionHeight']())&&$eq161===null?true:
						($eq161===null?false:($eq162===null?false:
							((typeof $eq161=='object'||typeof $eq161=='function')&&typeof $eq161.__cmp__=='function'?$eq161.__cmp__($eq162) === 0:
								((typeof $eq162=='object'||typeof $eq162=='function')&&typeof $eq162.__cmp__=='function'?$eq162.__cmp__($eq161) === 0:
									$eq161==$eq162)))))) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
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
						cCursor['getSymbol']()['setHeight'](cTouched['getSymbol']()['getHoverSelectionHeight']());
					}
					if ((($bool146=!(($eq163=$m['NAI'])===($eq164=cTouched['getSymbol']()['getHoverSelectionWidth']())&&$eq163===null?true:
						($eq163===null?false:($eq164===null?false:
							((typeof $eq163=='object'||typeof $eq163=='function')&&typeof $eq163.__cmp__=='function'?$eq163.__cmp__($eq164) === 0:
								((typeof $eq164=='object'||typeof $eq164=='function')&&typeof $eq164.__cmp__=='function'?$eq164.__cmp__($eq163) === 0:
									$eq163==$eq164)))))) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
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
						cCursor['getSymbol']()['setWidth'](cTouched['getSymbol']()['getHoverSelectionWidth']());
					}
					cCursor['getSymbol']()['setImageURL'](cTouched['getSymbol']()['getHoverSelectionImageURL']());
					cCursor['getSymbol']()['setBackgroundColor'](cTouched['getSymbol']()['getHoverSelectionBackgroundColor']());
					cCursor['getSymbol']()['setBorderColor'](cTouched['getSymbol']()['getHoverSelectionBorderColor']());
					cCursor['getSymbol']()['setBorderStyle'](cTouched['getSymbol']()['getHoverSelectionBorderStyle']());
					borderWidth = cTouched['getSymbol']()['getHoverSelectionBorderWidth']();
					cCursor['getSymbol']()['setBorderWidth'](borderWidth);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['p']]);
		$cls_definition['touch'] = $method;
		$method = $pyjs__bind_method2('isContainedIn', function(container, et) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				container = arguments[1];
				et = arguments[2];
			}
			var $eq166,$eq165,$and37,$bool150,$bool151,$pyjs_try_err,$bool149,$bool148,part,$and38,ancestor,$bool147;
			if ((($bool147=(container === null)) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
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
				return false;
			}
			return $m['DOM']['isOrHasChild'](et, container);
			part = et;
			if ((($bool148=(($eq165=null)===($eq166=part)&&$eq165===null?true:
				($eq165===null?false:($eq166===null?false:
					((typeof $eq165=='object'||typeof $eq165=='function')&&typeof $eq165.__cmp__=='function'?$eq165.__cmp__($eq166) === 0:
						((typeof $eq166=='object'||typeof $eq166=='function')&&typeof $eq166.__cmp__=='function'?$eq166.__cmp__($eq165) === 0:
							$eq165==$eq166)))))) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
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
				return true;
			}
			try {
				ancestor = part;
				while ((($bool150=((($bool149=$and37=(ancestor !== null)) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
					false :
					(typeof $bool149=='object'?
						(typeof $bool149.__nonzero__=='function'?
							$bool149.__nonzero__() :
							(typeof $bool149.__len__=='function'?
								($bool149.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(container !== null):$and37)) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
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
					if ((($bool151=$m['DOM']['isSameNode'](container, ancestor)) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
							false :
							(typeof $bool151=='object'?
								(typeof $bool151.__nonzero__=='function'?
									$bool151.__nonzero__() :
									(typeof $bool151.__len__=='function'?
										($bool151.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return true;
					}
					ancestor = ancestor['getParentElement']();
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['container'],['et']]);
		$cls_definition['isContainedIn'] = $method;
		$method = $pyjs__bind_method2('isGeometricallyContainedIn', function(container, clientX, clientY) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				container = arguments[1];
				clientX = arguments[2];
				clientY = arguments[3];
			}
			var $add118,$add119,$add116,$add117,$add114,$add115,$add113,result,$and42,$eq167,$bool154,$bool155,$bool153,$and41,$and40,$eq168,$cmp56,$add124,$add123,$add122,$add121,$add120,$cmp58,$and39,$cmp51,$bool152,$cmp53,$cmp52,$cmp55,$cmp54,$cmp57,absTop,absLeft,y,x,$bool156;
			if ((($bool152=(($eq167=null)===($eq168=container)&&$eq167===null?true:
				($eq167===null?false:($eq168===null?false:
					((typeof $eq167=='object'||typeof $eq167=='function')&&typeof $eq167.__cmp__=='function'?$eq167.__cmp__($eq168) === 0:
						((typeof $eq168=='object'||typeof $eq168=='function')&&typeof $eq168.__cmp__=='function'?$eq168.__cmp__($eq167) === 0:
							$eq167==$eq168)))))) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
					false :
					(typeof $bool152=='object'?
						(typeof $bool152.__nonzero__=='function'?
							$bool152.__nonzero__() :
							(typeof $bool152.__len__=='function'?
								($bool152.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('Container cannot be None'));
			}
			result = false;
			y = (typeof ($add113=$m['Window']['getScrollTop']())==typeof ($add114=self['repairBadClientY'](clientY)) && (typeof $add113=='number'||typeof $add113=='string')?
				$add113+$add114:
				$p['op_add']($add113,$add114));
			absTop = $m['DOM']['getAbsoluteTop'](container);
			if ((($bool154=((($bool153=$and39=((($cmp51=absTop)===($cmp52=y)?0:
				(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
					($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
					$p['cmp']($cmp51, $cmp52))) == -1)) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
				false :
				(typeof $bool153=='object'?
					(typeof $bool153.__nonzero__=='function'?
						$bool153.__nonzero__() :
						(typeof $bool153.__len__=='function'?
							($bool153.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp53=(typeof ($add115=y)==typeof ($add116=1) && (typeof $add115=='number'||typeof $add115=='string')?
				$add115+$add116:
				$p['op_add']($add115,$add116)))===($cmp54=(typeof ($add117=absTop)==typeof ($add118=$m['DOM']['getOffsetHeight'](container)) && (typeof $add117=='number'||typeof $add117=='string')?
				$add117+$add118:
				$p['op_add']($add117,$add118)))?0:
				(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
					($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
					$p['cmp']($cmp53, $cmp54))) == -1):$and39)) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
					false :
					(typeof $bool154=='object'?
						(typeof $bool154.__nonzero__=='function'?
							$bool154.__nonzero__() :
							(typeof $bool154.__len__=='function'?
								($bool154.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				x = (typeof ($add119=$m['Window']['getScrollLeft']())==typeof ($add120=self['repairBadClientX'](clientX)) && (typeof $add119=='number'||typeof $add119=='string')?
					$add119+$add120:
					$p['op_add']($add119,$add120));
				absLeft = $m['DOM']['getAbsoluteLeft'](container);
				if ((($bool156=((($bool155=$and41=((($cmp55=absLeft)===($cmp56=x)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == -1)) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
					false :
					(typeof $bool155=='object'?
						(typeof $bool155.__nonzero__=='function'?
							$bool155.__nonzero__() :
							(typeof $bool155.__len__=='function'?
								($bool155.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp57=(typeof ($add121=x)==typeof ($add122=1) && (typeof $add121=='number'||typeof $add121=='string')?
					$add121+$add122:
					$p['op_add']($add121,$add122)))===($cmp58=(typeof ($add123=absLeft)==typeof ($add124=$m['DOM']['getOffsetWidth'](container)) && (typeof $add123=='number'||typeof $add123=='string')?
					$add123+$add124:
					$p['op_add']($add123,$add124)))?0:
					(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
						($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
						$p['cmp']($cmp57, $cmp58))) == -1):$and41)) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
						false :
						(typeof $bool156=='object'?
							(typeof $bool156.__nonzero__=='function'?
								$bool156.__nonzero__() :
								(typeof $bool156.__len__=='function'?
									($bool156.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = true;
				}
			}
			return result;
		}
	, 1, [null,null,['self'],['container'],['clientX'],['clientY']]);
		$cls_definition['isGeometricallyContainedIn'] = $method;
		$method = $pyjs__bind_method2('touchObjectAtMousePosition', function(retouch) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				retouch = arguments[1];
			}
			if (typeof retouch == 'undefined') retouch=arguments.callee.__args__[3][1];
			var $bool157,$eq169,pointAtPosition,result,$eq170,$or21,$or22,$bool158;
			result = false;
			pointAtPosition = self['chart']['getClosestBrushTouchingPointNoCheck'](self['getXMousePlotArea'](), self['getYMousePlotArea']());
			if ((($bool158=((($bool157=$or21=!(($eq169=pointAtPosition)===($eq170=$p['getattr'](self, 'touchedPoint'))&&$eq169===null?true:
				($eq169===null?false:($eq170===null?false:
					((typeof $eq169=='object'||typeof $eq169=='function')&&typeof $eq169.__cmp__=='function'?$eq169.__cmp__($eq170) === 0:
						((typeof $eq170=='object'||typeof $eq170=='function')&&typeof $eq170.__cmp__=='function'?$eq170.__cmp__($eq169) === 0:
							$eq169==$eq170)))))) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
				false :
				(typeof $bool157=='object'?
					(typeof $bool157.__nonzero__=='function'?
						$bool157.__nonzero__() :
						(typeof $bool157.__len__=='function'?
							($bool157.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or21:retouch)) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
					false :
					(typeof $bool158=='object'?
						(typeof $bool158.__nonzero__=='function'?
							$bool158.__nonzero__() :
							(typeof $bool158.__len__=='function'?
								($bool158.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['touch'](pointAtPosition);
				result = true;
			}
			return result;
		}
	, 1, [null,null,['self'],['retouch', false]]);
		$cls_definition['touchObjectAtMousePosition'] = $method;
		$method = $pyjs__bind_method2('retouchObjectAtMousePosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['touchObjectAtMousePosition'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['retouchObjectAtMousePosition'] = $method;
		$method = $pyjs__bind_method2('isOverOpenedHoverAnnotation', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool161,$bool160,$bool159,hoverElement,result,$eq171,$eq172;
			result = false;
			hoverElement = self['getOpenedHoverElement']();
			if ((($bool159=!(($eq171=null)===($eq172=hoverElement)&&$eq171===null?true:
				($eq171===null?false:($eq172===null?false:
					((typeof $eq171=='object'||typeof $eq171=='function')&&typeof $eq171.__cmp__=='function'?$eq171.__cmp__($eq172) === 0:
						((typeof $eq172=='object'||typeof $eq172=='function')&&typeof $eq172.__cmp__=='function'?$eq172.__cmp__($eq171) === 0:
							$eq171==$eq172)))))) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
					false :
					(typeof $bool159=='object'?
						(typeof $bool159.__nonzero__=='function'?
							$bool159.__nonzero__() :
							(typeof $bool159.__len__=='function'?
								($bool159.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool160=self['isContainedIn'](hoverElement, $m['DOM']['eventGetTarget'](event))) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
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
					result = true;
				}
				else if ((($bool161=self['isGeometricallyContainedIn'](hoverElement, $m['DOM']['eventGetClientX'](event), $m['DOM']['eventGetClientY'](event))) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
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
					result = true;
				}
			}
			return result;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['isOverOpenedHoverAnnotation'] = $method;
		$method = $pyjs__bind_method2('takesUsCompletelyOutsideChart', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool163,$bool162,$bool165,$bool164,hoverElement,result,$eq173,$eq174;
			result = true;
			if ((($bool162=self['isContainedIn'](self['getElement'](), $m['DOM']['eventGetToElement'](event))) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
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
				result = false;
			}
			else if ((($bool163=self['isGeometricallyContainedIn'](self['getElement'](), $m['DOM']['eventGetClientX'](event), $m['DOM']['eventGetClientY'](event))) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
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
				result = false;
			}
			else {
				hoverElement = self['getOpenedHoverElement']();
				if ((($bool164=!(($eq173=null)===($eq174=hoverElement)&&$eq173===null?true:
					($eq173===null?false:($eq174===null?false:
						((typeof $eq173=='object'||typeof $eq173=='function')&&typeof $eq173.__cmp__=='function'?$eq173.__cmp__($eq174) === 0:
							((typeof $eq174=='object'||typeof $eq174=='function')&&typeof $eq174.__cmp__=='function'?$eq174.__cmp__($eq173) === 0:
								$eq173==$eq174)))))) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
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
					if ((($bool165=self['isGeometricallyContainedIn'](hoverElement, $m['DOM']['eventGetClientX'](event), $m['DOM']['eventGetClientY'](event))) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
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
						result = false;
					}
				}
			}
			return result;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['takesUsCompletelyOutsideChart'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var isClick,$and47,eventId,$bool171,$bool172,$bool173,$bool174,$bool175,$bool176,$bool177,$and45,$and44,$and46,$and43,$or24,$or25,$or26,$or27,$or23,$bool170,$eq181,$eq180,$eq182,$and49,$bool178,$and48,$bool167,$bool166,$bool169,$bool168,$bool181,$bool180,$and50,$and51,$eq178,$eq179,$bool179,$eq175,$eq176,$eq177;
			$m['AbsolutePanel']['onBrowserEvent'](self, event);
			eventId = $m['DOM']['eventGetType'](event);
			isClick = (($eq175='click')===($eq176=eventId)&&$eq175===null?true:
				($eq175===null?false:($eq176===null?false:
					((typeof $eq175=='object'||typeof $eq175=='function')&&typeof $eq175.__cmp__=='function'?$eq175.__cmp__($eq176) === 0:
						((typeof $eq176=='object'||typeof $eq176=='function')&&typeof $eq176.__cmp__=='function'?$eq176.__cmp__($eq175) === 0:
							$eq175==$eq176)))));
			if ((($bool170=((($bool168=$and43=((($bool166=$or23=(($eq177='mousemove')===($eq178=eventId)&&$eq177===null?true:
				($eq177===null?false:($eq178===null?false:
					((typeof $eq177=='object'||typeof $eq177=='function')&&typeof $eq177.__cmp__=='function'?$eq177.__cmp__($eq178) === 0:
						((typeof $eq178=='object'||typeof $eq178=='function')&&typeof $eq178.__cmp__=='function'?$eq178.__cmp__($eq177) === 0:
							$eq177==$eq178)))))) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
				false :
				(typeof $bool166=='object'?
					(typeof $bool166.__nonzero__=='function'?
						$bool166.__nonzero__() :
						(typeof $bool166.__len__=='function'?
							($bool166.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or23:((($bool167=$or24=(($eq179='mouseover')===($eq180=eventId)&&$eq179===null?true:
				($eq179===null?false:($eq180===null?false:
					((typeof $eq179=='object'||typeof $eq179=='function')&&typeof $eq179.__cmp__=='function'?$eq179.__cmp__($eq180) === 0:
						((typeof $eq180=='object'||typeof $eq180=='function')&&typeof $eq180.__cmp__=='function'?$eq180.__cmp__($eq179) === 0:
							$eq179==$eq180)))))) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
				false :
				(typeof $bool167=='object'?
					(typeof $bool167.__nonzero__=='function'?
						$bool167.__nonzero__() :
						(typeof $bool167.__len__=='function'?
							($bool167.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or24:isClick))) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
				false :
				(typeof $bool168=='object'?
					(typeof $bool168.__nonzero__=='function'?
						$bool168.__nonzero__() :
						(typeof $bool168.__len__=='function'?
							($bool168.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool169=self['isOverOpenedHoverAnnotation'](event)) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
				false :
				(typeof $bool169=='object'?
					(typeof $bool169.__nonzero__=='function'?
						$bool169.__nonzero__() :
						(typeof $bool169.__len__=='function'?
							($bool169.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and43)) === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
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
				if ((($bool172=((($bool171=$or26=self['chart']['getHoverTouchingEnabled']()) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
					false :
					(typeof $bool171=='object'?
						(typeof $bool171.__nonzero__=='function'?
							$bool171.__nonzero__() :
							(typeof $bool171.__len__=='function'?
								($bool171.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or26:isClick)) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
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
					self['setClientX']($m['DOM']['eventGetClientX'](event), isClick);
					self['setClientY']($m['DOM']['eventGetClientY'](event), isClick);
					if ((($bool175=((($bool174=$and45=!(($bool173=self['chart']['isUpdateNeeded']()) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
						false :
						(typeof $bool173=='object'?
							(typeof $bool173.__nonzero__=='function'?
								$bool173.__nonzero__() :
								(typeof $bool173.__len__=='function'?
									($bool173.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
						false :
						(typeof $bool174=='object'?
							(typeof $bool174.__nonzero__=='function'?
								$bool174.__nonzero__() :
								(typeof $bool174.__len__=='function'?
									($bool174.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?self['touchObjectAtMousePosition'](isClick):$and45)) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
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
						self['chart']['assembleChart']();
					}
				}
			}
			else if ((($bool178=((($bool176=$and47=(($eq181='mouseout')===($eq182=eventId)&&$eq181===null?true:
				($eq181===null?false:($eq182===null?false:
					((typeof $eq181=='object'||typeof $eq181=='function')&&typeof $eq181.__cmp__=='function'?$eq181.__cmp__($eq182) === 0:
						((typeof $eq182=='object'||typeof $eq182=='function')&&typeof $eq182.__cmp__=='function'?$eq182.__cmp__($eq181) === 0:
							$eq181==$eq182)))))) === null || $bool176 === false || $bool176 === 0 || $bool176 === '' ?
				false :
				(typeof $bool176=='object'?
					(typeof $bool176.__nonzero__=='function'?
						$bool176.__nonzero__() :
						(typeof $bool176.__len__=='function'?
							($bool176.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool177=$and48=self['chart']['getHoverTouchingEnabled']()) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
				false :
				(typeof $bool177=='object'?
					(typeof $bool177.__nonzero__=='function'?
						$bool177.__nonzero__() :
						(typeof $bool177.__len__=='function'?
							($bool177.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['takesUsCompletelyOutsideChart'](event):$and48):$and47)) === null || $bool178 === false || $bool178 === 0 || $bool178 === '' ?
					false :
					(typeof $bool178=='object'?
						(typeof $bool178.__nonzero__=='function'?
							$bool178.__nonzero__() :
							(typeof $bool178.__len__=='function'?
								($bool178.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setClientX']($m['NAI'], false);
				self['setClientY']($m['NAI'], false);
				if ((($bool181=((($bool180=$and50=!(($bool179=self['chart']['isUpdateNeeded']()) === null || $bool179 === false || $bool179 === 0 || $bool179 === '' ?
					false :
					(typeof $bool179=='object'?
						(typeof $bool179.__nonzero__=='function'?
							$bool179.__nonzero__() :
							(typeof $bool179.__len__=='function'?
								($bool179.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool180 === false || $bool180 === 0 || $bool180 === '' ?
					false :
					(typeof $bool180=='object'?
						(typeof $bool180.__nonzero__=='function'?
							$bool180.__nonzero__() :
							(typeof $bool180.__len__=='function'?
								($bool180.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?self['touchObjectAtMousePosition']():$and50)) === null || $bool181 === false || $bool181 === 0 || $bool181 === '' ?
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
					self['chart']['assembleChart']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('isValidated', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add126,$add125,$cmp60,i,$and52,$and53,$bool183,$bool182,$cmp59,result,$1,$2,$len3;
			result = true;
			i = 0;
			while ((($bool183=((($bool182=$and52=result) === null || $bool182 === false || $bool182 === 0 || $bool182 === '' ?
				false :
				(typeof $bool182=='object'?
					(typeof $bool182.__nonzero__=='function'?
						$bool182.__nonzero__() :
						(typeof $bool182.__len__=='function'?
							($bool182.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp59=i)===($cmp60=(($len3=$p['getattr']($p['getattr'](self, 'chart'), 'curves')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))?0:
				(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
					($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
					$p['cmp']($cmp59, $cmp60))) == -1):$and52)) === null || $bool183 === false || $bool183 === 0 || $bool183 === '' ?
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
				result = (typeof ($1=$p['getattr']($p['getattr'](self, 'chart'), 'curves')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i))['isValidated']();
				i = (typeof ($add125=i)==typeof ($add126=1) && (typeof $add125=='number'||typeof $add125=='string')?
					$add125+$add126:
					$p['op_add']($add125,$add126));
			}
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isValidated'] = $method;
		$method = $pyjs__bind_method2('getRenderingPanelCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var result;
			result = self['graphicsPanel']['getWidgetCount']();
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRenderingPanelCount'] = $method;
		$method = $pyjs__bind_method2('getXChartSize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'xChartSize');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXChartSize'] = $method;
		$method = $pyjs__bind_method2('getYChartSize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'yChartSize');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYChartSize'] = $method;
		$method = $pyjs__bind_method2('getXChartSizeDecoratedQuickly', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add127,$add130,$add131,$add132,$add129,$add128,result;
			result = (typeof ($add131=(typeof ($add129=(typeof ($add127=$p['getattr'](self, 'xChartSize'))==typeof ($add128=$p['getattr'](self, 'yAxisEnsembleWidth')) && (typeof $add127=='number'||typeof $add127=='string')?
				$add127+$add128:
				$p['op_add']($add127,$add128)))==typeof ($add130=$p['getattr'](self, 'y2AxisEnsembleWidth')) && (typeof $add129=='number'||typeof $add129=='string')?
				$add129+$add130:
				$p['op_add']($add129,$add130)))==typeof ($add132=$p['getattr'](self, 'chartLegendThickness')) && (typeof $add131=='number'||typeof $add131=='string')?
				$add131+$add132:
				$p['op_add']($add131,$add132));
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getXChartSizeDecoratedQuickly'] = $method;
		$method = $pyjs__bind_method2('getYChartSizeDecoratedQuickly', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add134,$add135,$add136,$add137,$add133,$add138,result;
			result = (typeof ($add137=(typeof ($add135=(typeof ($add133=$p['getattr'](self, 'yChartSize'))==typeof ($add134=$p['getattr'](self, 'xAxisEnsembleHeight')) && (typeof $add133=='number'||typeof $add133=='string')?
				$add133+$add134:
				$p['op_add']($add133,$add134)))==typeof ($add136=$p['getattr'](self, 'topMargin')) && (typeof $add135=='number'||typeof $add135=='string')?
				$add135+$add136:
				$p['op_add']($add135,$add136)))==typeof ($add138=$p['getattr'](self, 'chartFootnotesThickness')) && (typeof $add137=='number'||typeof $add137=='string')?
				$add137+$add138:
				$p['op_add']($add137,$add138));
			return result;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getYChartSizeDecoratedQuickly'] = $method;
		var $bases = new Array($m['AbsolutePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PlotPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.chart.GChartWidgets */


/* end module: pyjamas.chart.GChartWidgets */


/*
PYJS_DEPS: ['math', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui.UIObject', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.chart.GChartConsts.N_PRE_SYSTEM_CURVES', 'pyjamas.chart', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.TRANSPARENT_BORDER_COLOR', 'pyjamas.chart.GChartConsts.HOVER_ANNOTATION_ID', 'pyjamas.chart.GChartConsts.HOVER_CURSOR_ID', 'pyjamas.chart.GChartConsts.USE_CSS', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart.GChartConsts.DEFAULT_BLANK_IMAGE_URL_FULLPATH', 'pyjamas.chart.GChartUtil', 'pyjamas.chart.Double']
*/

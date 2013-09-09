/* start module: pyjamas.ui.Calendar */
$pyjs.loaded_modules['pyjamas.ui.Calendar'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Calendar'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Calendar'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Calendar"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Calendar>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Calendar';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Calendar'] = $pyjs.loaded_modules['pyjamas.ui.Calendar'];


	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'pyjamas.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
	$m['HyperlinkImage'] = $p['___import___']('pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.ui', null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['time'] = $p['___import___']('time', 'pyjamas.ui');
	$m['datetime'] = $p['___import___']('datetime.datetime', 'pyjamas.ui', null, false);
	$m['Calendar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Calendar';
		$cls_definition['monthsOfYear'] = $p['list'](['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
		$cls_definition['daysOfWeek'] = $p['list'](['S', 'M', 'T', 'W', 'T', 'F', 'S']);
		$cls_definition['today'] = 'Today';
		$cls_definition['tomorrow'] = 'Tomorrow';
		$cls_definition['yesterday'] = 'Yesterday';
		$cls_definition['cancel'] = 'Cancel';
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
			var yr,mth,day;
			$pyjs_kwargs_call($m['FocusPanel'], '__init__', null, kwargs, [{}, self]);
			var $tupleassign1 = $p['__ass_unpack']($m['time']['strftime']('%Y-%m-%d')['$$split']('-'), 3, null);
			yr = $tupleassign1[0];
			mth = $tupleassign1[1];
			day = $tupleassign1[2];
			self.todayYear = $p['float_int'](yr);
			self.todayMonth = $p['float_int'](mth);
			self.todayDay = $p['float_int'](day);
			self.currentMonth = $p['getattr'](self, 'todayMonth');
			self.currentYear = $p['getattr'](self, 'todayYear');
			self.currentDay = $p['getattr'](self, 'todayDay');
			self.selectedDateListeners = $p['list']([]);
			self.defaultGrid = null;
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setDate', function(_date) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_date = arguments[1];
			}

			self.currentMonth = $p['getattr'](_date, 'month');
			self.currentYear = $p['getattr'](_date, 'year');
			self.currentDay = $p['getattr'](_date, 'day');
			return null;
		}
	, 1, [null,null,['self'],['_date']]);
		$cls_definition['setDate'] = $method;
		$method = $pyjs__bind_method2('getMonthsOfYear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'monthsOfYear');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMonthsOfYear'] = $method;
		$method = $pyjs__bind_method2('getDaysOfWeek', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'daysOfWeek');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDaysOfWeek'] = $method;
		$method = $pyjs__bind_method2('addSelectedDateListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['selectedDateListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addSelectedDateListener'] = $method;
		$method = $pyjs__bind_method2('removeSelectedDateListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['selectedDateListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeSelectedDateListener'] = $method;
		$method = $pyjs__bind_method2('isLeapYear', function(year) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
			}
			var $mod5,$eq3,$or1,$bool3,$or2,$eq2,$and1,$eq1,$eq4,$eq5,$bool2,$mod4,$bool1,$mod1,$mod3,$mod2,$eq6,$and2,$mod6;
			if ((($bool3=((($bool2=$or1=((($bool1=$and1=(($eq1=(typeof ($mod1=year)==typeof ($mod2=4) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)))===($eq2=0)&&$eq1===null?true:
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
					 true ) )?!(($eq3=(typeof ($mod3=year)==typeof ($mod4=100) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4)))===($eq4=0)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))):$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:(($eq5=(typeof ($mod5=year)==typeof ($mod6=400) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)))===($eq6=0)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['year']]);
		$cls_definition['isLeapYear'] = $method;
		$method = $pyjs__bind_method2('getDaysInMonth', function(mth, year) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mth = arguments[1];
				year = arguments[2];
			}
			var $eq8,$and3,$and4,days,$eq7,$bool6,$bool7,$bool4,$bool5;
			days = 0;
			if ((($bool4=$p['list']([1, 3, 5, 7, 8, 10, 12]).__contains__(mth)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				days = 31;
			}
			else if ((($bool5=$p['list']([4, 6, 9, 11]).__contains__(mth)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				days = 30;
			}
			else if ((($bool7=((($bool6=$and3=(($eq7=mth)===($eq8=2)&&$eq7===null?true:
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
					 true ) )?self['isLeapYear'](year):$and3)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				days = 29;
			}
			else {
				days = 28;
			}
			return days;
		}
	, 1, [null,null,['self'],['mth'],['year']]);
		$cls_definition['getDaysInMonth'] = $method;
		$method = $pyjs__bind_method2('setPosition', function(left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var element;
			element = self['getElement']();
			$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', left));
			$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', top));
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['setPosition'] = $method;
		$method = $pyjs__bind_method2('show', function(left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var $cmp4,$cmp1,$cmp3,$cmp2,$bool8,$bool9;
			if ((($bool8=((($cmp1=left)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				left = 0;
			}
			if ((($bool9=((($cmp3=top)===($cmp4=0)?0:
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
						 true ) )) {
				top = 0;
			}
			self['setPosition'](left, top);
			self['drawCurrent']();
			self['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('drawCurrent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var yr,mth,day;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentDay')]), 3, null);
			yr = $tupleassign2[0];
			mth = $tupleassign2[1];
			day = $tupleassign2[2];
			self['draw']($p['float_int'](mth), $p['float_int'](yr));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawCurrent'] = $method;
		$method = $pyjs__bind_method2('draw', function(month, year) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}
			var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,hasChangeMonth,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,txt,$sub2,$sub1,tod,$or4,$eq9,$or3,$and5,$and6,$and7,yy,$bool17,$2,$1,g,mm,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
			tod = $m['time']['localtime']();
			mm = $p['getattr'](tod, 'tm_mon');
			yy = $p['getattr'](tod, 'tm_year');
			hasChangeMonth = false;
			if ((($bool11=((($bool10=$or3=!(($eq9=yy)===($eq10=$p['getattr'](self, 'todayYear'))&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:!(($eq11=mm)===($eq12=$p['getattr'](self, 'todayMonth'))&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12))))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				hasChangeMonth = true;
				self.todayYear = yy;
				self.todayMonth = mm;
			}
			if ((($bool12=($p['getattr'](self, 'defaultGrid') === null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['drawFull'](month, year);
			}
			else {
				if ((($bool16=((($bool14=$and5=!(($bool13=hasChangeMonth) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool15=$and6=(($eq13=month)===($eq14=$p['getattr'](self, 'todayMonth'))&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq15=year)===($eq16=$p['getattr'](self, 'todayYear'))&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16))))):$and6):$and5)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['middlePanel']['setWidget']($p['getattr'](self, 'defaultGrid'));
					self.currentMonth = $p['getattr'](self, 'todayMonth');
					self.currentYear = $p['getattr'](self, 'todayYear');
				}
				else {
					g = self['drawGrid'](month, year);
					if ((($bool17=hasChangeMonth) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						self.defaultGrid = (typeof grid == "undefined"?$m.grid:grid);
					}
				}
				txt = '<b>';
				txt = (typeof ($add5=txt)==typeof ($add6=(typeof ($add3=(typeof ($add1=(typeof ($1=self['getMonthsOfYear']()).__array != 'undefined'?
					((typeof $1.__array[$2=(typeof ($sub1=month)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__((typeof ($sub1=month)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))))==typeof ($add2=' ') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4=$p['str'](year)) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				txt = (typeof ($add7=txt)==typeof ($add8='</b>') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				self['titlePanel']['setWidget']($m['HTML'](txt));
				self['setVisible'](true);
			}
			return null;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('drawFull', function(month, year) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}
			var h2,h1,tvp,h4,h5,b2,txt,bh3,yr,tp,bh4,$sub3,$sub4,bh2,$add14,$add15,$add16,$add10,$add11,$add12,$add13,bh1,$4,$3,b,mth,grid,$add9;
			self.vp = $m['VerticalPanel']();
			self['vp']['setSpacing'](2);
			self['vp']['addStyleName']('calendarbox calendar-module calendar');
			self['setWidget']($p['getattr'](self, 'vp'));
			self['setVisible'](false);
			mth = $p['float_int'](month);
			yr = $p['float_int'](year);
			tp = $m['HorizontalPanel']();
			tp['addStyleName']('calendar-top-panel');
			tp['setSpacing'](5);
			h1 = $m['Hyperlink']('<<');
			h1['addClickListener']($p['getattr'](self, 'onPreviousYear'));
			h2 = $m['Hyperlink']('<');
			h2['addClickListener']($p['getattr'](self, 'onPreviousMonth'));
			h4 = $m['Hyperlink']('>');
			h4['addClickListener']($p['getattr'](self, 'onNextMonth'));
			h5 = $m['Hyperlink']('>>');
			h5['addClickListener']($p['getattr'](self, 'onNextYear'));
			tp['add'](h1);
			tp['add'](h2);
			txt = '<b>';
			txt = (typeof ($add13=txt)==typeof ($add14=(typeof ($add11=(typeof ($add9=(typeof ($3=self['getMonthsOfYear']()).__array != 'undefined'?
				((typeof $3.__array[$4=(typeof ($sub3=mth)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__((typeof ($sub3=mth)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))))==typeof ($add10=' ') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($add12=$p['str'](yr)) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12))) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			txt = (typeof ($add15=txt)==typeof ($add16='</b>') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16));
			self.titlePanel = $m['SimplePanel']();
			self['titlePanel']['setWidget']($m['HTML'](txt));
			self['titlePanel']['setStyleName']('calendar-center');
			tp['add']($p['getattr'](self, 'titlePanel'));
			tp['add'](h4);
			tp['add'](h5);
			tvp = $m['VerticalPanel']();
			tvp['setSpacing'](10);
			tvp['add'](tp);
			self['vp']['add'](tvp);
			self.middlePanel = $m['SimplePanel']();
			grid = self['drawGrid'](mth, yr);
			self['middlePanel']['setWidget'](grid);
			self['vp']['add']($p['getattr'](self, 'middlePanel'));
			self.defaultGrid = grid;
			bh1 = $m['Hyperlink']($p['getattr'](self, 'yesterday'));
			bh1['addClickListener']($p['getattr'](self, 'onYesterday'));
			bh2 = $m['Hyperlink']($p['getattr'](self, 'today'));
			bh2['addClickListener']($p['getattr'](self, 'onToday'));
			bh3 = $m['Hyperlink']($p['getattr'](self, 'tomorrow'));
			bh3['addClickListener']($p['getattr'](self, 'onTomorrow'));
			bh4 = $m['Hyperlink']($p['getattr'](self, 'cancel'));
			bh4['addClickListener']($p['getattr'](self, 'onCancel'));
			b = $m['HorizontalPanel']();
			b['add'](bh1);
			b['add'](bh2);
			b['add'](bh3);
			b['addStyleName']('calendar-shortcuts');
			self['vp']['add'](b);
			b2 = $m['SimplePanel']();
			b2['add'](bh4);
			b2['addStyleName']('calendar-cancel');
			self['vp']['add'](b2);
			self['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['drawFull'] = $method;
		$method = $pyjs__bind_method2('drawGrid', function(month, year) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}
			var $bool18,$bool19,$and10,$add36,pos,$eq18,$6,$mod7,$add35,daysInMonth,slots,$add26,$mod9,startPos,$and11,row,$add29,$add28,rows,struct,$add21,$add20,$add22,$add25,$add24,$add27,$mod8,$bool25,$bool24,$bool21,$iter1_array,$bool23,$bool22,$eq17,$sub6,$sub5,$bool20,$and8,$and9,$iter1_nextval,$mod10,$mod12,$5,$mod11,$eq21,day,$eq23,$add17,grid,$eq24,$eq26,$div2,$div1,$add18,$add19,$cmp5,$and12,$cmp7,$cmp6,$iter1_type,$eq20,$eq19,$iter1_iter,$add33,$add30,$add31,$cmp9,$cmp8,$add34,col,i,secs,$eq22,$iter1_idx,$add32,$eq25,$add23,$cmp10;
			daysInMonth = self['getDaysInMonth'](month, year);
			secs = $m['time']['mktime']($p['tuple']([year, month, 1, 0, 0, 0, 0, 0, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]));
			struct = $m['time']['localtime'](secs);
			startPos = (typeof ($mod7=(typeof ($add17=$p['getattr'](struct, 'tm_wday'))==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)))==typeof ($mod8=7) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8));
			slots = (typeof ($sub5=(typeof ($add19=startPos)==typeof ($add20=daysInMonth) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20)))==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6));
			rows = (typeof ($add21=$p['float_int']((typeof ($div1=slots)==typeof ($div2=7) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22));
			grid = $m['Grid']((typeof ($add23=rows)==typeof ($add24=1) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24)), 7);
			grid['setWidth']('100%');
			grid['addTableListener'](self);
			self['middlePanel']['setWidget'](grid);
			$iter1_iter = $p['range'](7);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				grid['setText'](0, i, (typeof ($5=self['getDaysOfWeek']()).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)));
				grid['cellFormatter']['addStyleName'](0, i, 'calendar-header');
			}
			day = 0;
			pos = 0;
			while ((($bool18=((($cmp5=pos)===($cmp6=startPos)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				grid['setText'](1, pos, ' ');
				grid['cellFormatter']['setStyleAttr'](1, pos, 'background', '#f3f3f3');
				grid['cellFormatter']['addStyleName'](1, pos, 'calendar-blank-cell');
				pos = (typeof ($add25=pos)==typeof ($add26=1) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
			}
			row = 1;
			day = 1;
			col = startPos;
			while ((($bool19=((($cmp7=day)===($cmp8=daysInMonth)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) < 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				if ((($bool21=((($bool20=$and8=(($eq17=(typeof ($mod9=pos)==typeof ($mod10=7) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)))===($eq18=0)&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($eq19=day)===($eq20=1)&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20))))):$and8)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					row = (typeof ($add27=row)==typeof ($add28=1) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
				}
				col = (typeof ($mod11=pos)==typeof ($mod12=7) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12));
				grid['setText'](row, col, $p['str'](day));
				if ((($bool24=((($bool22=$and10=(($eq21=$p['getattr'](self, 'currentYear'))===($eq22=$p['getattr'](self, 'todayYear'))&&$eq21===null?true:
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
						 true ) )?((($bool23=$and11=(($eq23=$p['getattr'](self, 'currentMonth'))===($eq24=$p['getattr'](self, 'todayMonth'))&&$eq23===null?true:
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
						 true ) )?(($eq25=day)===($eq26=$p['getattr'](self, 'todayDay'))&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
								$eq25==$eq26))))):$and11):$and10)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					grid['cellFormatter']['addStyleName'](row, col, 'calendar-cell-today');
				}
				else {
					grid['cellFormatter']['addStyleName'](row, col, 'calendar-day-cell');
				}
				day = (typeof ($add29=day)==typeof ($add30=1) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30));
				pos = (typeof ($add31=pos)==typeof ($add32=1) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
			}
			col = (typeof ($add33=col)==typeof ($add34=1) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34));
			while ((($bool25=((($cmp9=col)===($cmp10=7)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				grid['setText'](row, col, ' ');
				grid['cellFormatter']['setStyleAttr'](row, col, 'background', '#f3f3f3');
				grid['cellFormatter']['addStyleName'](row, col, 'calendar-blank-cell');
				col = (typeof ($add35=col)==typeof ($add36=1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
			}
			return grid;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['drawGrid'] = $method;
		$method = $pyjs__bind_method2('onCellClicked', function(grid, row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				grid = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}
			var selectedDay,listener,$iter2_nextval,e,$iter2_iter,text,$iter2_idx,$bool27,$bool28,$iter2_type,$eq30,$bool26,$pyjs_try_err,$eq27,$eq29,$eq28,$iter2_array;
			if ((($bool26=(($eq27=row)===($eq28=0)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				return null;
			}
			text = grid['getText'](row, col)['strip']();
			if ((($bool27=(($eq29=text)===($eq30='')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				return null;
			}
			try {
				selectedDay = $p['float_int'](text);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					e = $pyjs_try_err;
					return null;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$iter2_iter = $p['getattr'](self, 'selectedDateListeners');
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				if ((($bool28=$p['hasattr'](listener, 'onDateSelected')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					listener['onDateSelected']($p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), selectedDay);
				}
				else {
					listener($p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), selectedDay);
				}
			}
			self['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['grid'],['row'],['col']]);
		$cls_definition['onCellClicked'] = $method;
		$method = $pyjs__bind_method2('onPreviousYear', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawPreviousYear']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onPreviousYear'] = $method;
		$method = $pyjs__bind_method2('onPreviousMonth', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawPreviousMonth']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onPreviousMonth'] = $method;
		$method = $pyjs__bind_method2('onNextMonth', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawNextMonth']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onNextMonth'] = $method;
		$method = $pyjs__bind_method2('onNextYear', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawNextYear']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onNextYear'] = $method;
		$method = $pyjs__bind_method2('onDate', function(event, yy, mm, dd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				yy = arguments[2];
				mm = arguments[3];
				dd = arguments[4];
			}
			var listener,$iter3_idx,$iter3_array,$iter3_iter,$iter3_type,$iter3_nextval,$bool29;
			$iter3_iter = $p['getattr'](self, 'selectedDateListeners');
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				listener = $iter3_nextval;
				if ((($bool29=$p['hasattr'](listener, 'onDateSelected')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					listener['onDateSelected'](yy, mm, dd);
				}
				else {
					listener(yy, mm, dd);
				}
			}
			self['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['event'],['yy'],['mm'],['dd']]);
		$cls_definition['onDate'] = $method;
		$method = $pyjs__bind_method2('onYesterday', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var mm,yesterday,$mul2,yy,$sub8,dd,$sub7,$mul1;
			yesterday = $m['time']['localtime']((typeof ($sub7=$m['time']['time']())==typeof ($sub8=(typeof ($mul1=3600)==typeof ($mul2=24) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)));
			mm = $p['getattr'](yesterday, 'tm_mon');
			dd = $p['getattr'](yesterday, 'tm_mday');
			yy = $p['getattr'](yesterday, 'tm_year');
			self['onDate'](event, yy, mm, dd);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onYesterday'] = $method;
		$method = $pyjs__bind_method2('onToday', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var mm,yy,dd,tod;
			tod = $m['time']['localtime']();
			mm = $p['getattr'](tod, 'tm_mon');
			dd = $p['getattr'](tod, 'tm_mday');
			yy = $p['getattr'](tod, 'tm_year');
			self['onDate'](event, yy, mm, dd);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onToday'] = $method;
		$method = $pyjs__bind_method2('onTomorrow', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add38,mm,$add37,yy,dd,tom,$mul4,$mul3;
			tom = $m['time']['localtime']((typeof ($add37=$m['time']['time']())==typeof ($add38=(typeof ($mul3=3600)==typeof ($mul4=24) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$p['op_add']($add37,$add38)));
			mm = $p['getattr'](tom, 'tm_mon');
			dd = $p['getattr'](tom, 'tm_mday');
			yy = $p['getattr'](tom, 'tm_year');
			self['onDate'](event, yy, mm, dd);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTomorrow'] = $method;
		$method = $pyjs__bind_method2('onCancel', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onCancel'] = $method;
		$method = $pyjs__bind_method2('drawDate', function(month, year) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}

			self.currentMonth = month;
			self.currentYear = year;
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['drawDate'] = $method;
		$method = $pyjs__bind_method2('drawPreviousMonth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub12,$sub10,$sub9,$eq32,$bool30,$eq31,$sub11;
			if ((($bool30=(($eq31=$p['float_int']($p['getattr'](self, 'currentMonth')))===($eq32=1)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				self.currentMonth = 12;
				self.currentYear = (typeof ($sub9=$p['float_int']($p['getattr'](self, 'currentYear')))==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
			}
			else {
				self.currentMonth = (typeof ($sub11=$p['float_int']($p['getattr'](self, 'currentMonth')))==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
			}
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawPreviousMonth'] = $method;
		$method = $pyjs__bind_method2('drawNextMonth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add39,$add42,$add41,$add40,$eq33,$bool31,$eq34;
			if ((($bool31=(($eq33=$p['float_int']($p['getattr'](self, 'currentMonth')))===($eq34=12)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				self.currentMonth = 1;
				self.currentYear = (typeof ($add39=$p['float_int']($p['getattr'](self, 'currentYear')))==typeof ($add40=1) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40));
			}
			else {
				self.currentMonth = (typeof ($add41=$p['float_int']($p['getattr'](self, 'currentMonth')))==typeof ($add42=1) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42));
			}
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawNextMonth'] = $method;
		$method = $pyjs__bind_method2('drawPreviousYear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub13,$sub14;
			self.currentYear = (typeof ($sub13=$p['float_int']($p['getattr'](self, 'currentYear')))==typeof ($sub14=1) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14));
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawPreviousYear'] = $method;
		$method = $pyjs__bind_method2('drawNextYear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add44,$add43;
			self.currentYear = (typeof ($add43=$p['float_int']($p['getattr'](self, 'currentYear')))==typeof ($add44=1) && (typeof $add43=='number'||typeof $add43=='string')?
				$add43+$add44:
				$p['op_add']($add43,$add44));
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawNextYear'] = $method;
		var $bases = new Array($m['FocusPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Calendar', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'Calendar', $m['Calendar']);
	$m['DateField'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Calendar';
		$cls_definition['icon_img'] = 'icon_calendar.gif';
		$cls_definition['icon_style'] = 'calendar-img';
		$cls_definition['today_text'] = 'Today';
		$cls_definition['today_style'] = 'calendar-today-link';
		$method = $pyjs__bind_method2('__init__', function(format) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			if (typeof format == 'undefined') format=arguments.callee.__args__[3][1];
			var $cmp15,$bool34,$bool33,$bool32,$cmp14,vp,$cmp16,$cmp11,$cmp13,$cmp12,hp;
			self.format = format;
			self.tbox = $m['TextBox']();
			self['tbox']['setVisibleLength'](10);
			if ((($bool32=((((($cmp11=format['find']('-'))===($cmp12=0)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				self.sep = '-';
			}
			else if ((($bool33=((((($cmp13=format['find']('/'))===($cmp14=0)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))))|1) == 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				self.sep = '/';
			}
			else if ((($bool34=((((($cmp15=format['find']('.'))===($cmp16=0)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				self.sep = '.';
			}
			else {
				self.sep = '';
			}
			self.calendar = $m['Calendar']();
			self.img = $m['Image']($p['getattr'](self, 'icon_img'));
			self['img']['addStyleName']($p['getattr'](self, 'icon_style'));
			self.calendarLink = $m['HyperlinkImage']($p['getattr'](self, 'img'));
			self.todayLink = $m['Hyperlink']($p['getattr'](self, 'today_text'));
			self['todayLink']['addStyleName']($p['getattr'](self, 'today_style'));
			hp = $m['HorizontalPanel']();
			hp['setSpacing'](2);
			vp = $m['VerticalPanel']();
			hp['add']($p['getattr'](self, 'tbox'));
			vp['add']($p['getattr'](self, 'calendarLink'));
			vp['add']($p['getattr'](self, 'todayLink'));
			hp['add'](vp);
			$m['Composite']['__init__'](self);
			self['initWidget'](hp);
			self['tbox']['addFocusListener'](self);
			self['calendar']['addSelectedDateListener']($p['getattr'](self, 'onDateSelected'));
			self['todayLink']['addClickListener']($p['getattr'](self, 'onTodayClicked'));
			self['calendarLink']['addClickListener']($p['getattr'](self, 'onShowCalendar'));
			return null;
		}
	, 1, [null,null,['self'],['format', '%d-%m-%Y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getTextBox', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tbox');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextBox'] = $method;
		$method = $pyjs__bind_method2('getCalendar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'calendar');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCalendar'] = $method;
		$method = $pyjs__bind_method2('setID', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			self['tbox']['setID'](id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['setID'] = $method;
		$method = $pyjs__bind_method2('onDateSelected', function(yyyy, mm, dd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yyyy = arguments[1];
				mm = arguments[2];
				dd = arguments[3];
			}
			var d,secs;
			secs = $m['time']['mktime']($p['tuple']([$p['float_int'](yyyy), $p['float_int'](mm), $p['float_int'](dd), 0, 0, 0, 0, 0, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]));
			d = $m['time']['strftime']($p['getattr'](self, 'format'), $m['time']['localtime'](secs));
			self['tbox']['setText'](d);
			return null;
		}
	, 1, [null,null,['self'],['yyyy'],['mm'],['dd']]);
		$cls_definition['onDateSelected'] = $method;
		$method = $pyjs__bind_method2('onLostFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add50,$add51,$add46,$add49,$add48,$add47,text,$len1,$eq35,$add52,$and13,$eq36,$and14,$bool35,$bool36,txt,$add45;
			text = self['tbox']['getText']()['strip']();
			if ((($bool36=((($bool35=$and13=text) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
				false :
				(typeof $bool35=='object'?
					(typeof $bool35.__nonzero__=='function'?
						$bool35.__nonzero__() :
						(typeof $bool35.__len__=='function'?
							($bool35.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq35=(($len1=text) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq36=8)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36))))):$and13)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				txt = (typeof ($add51=(typeof ($add49=(typeof ($add47=(typeof ($add45=$p['__getslice'](text, 0, 2))==typeof ($add46=$p['getattr'](self, 'sep')) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46)))==typeof ($add48=$p['__getslice'](text, 2, 4)) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48)))==typeof ($add50=$p['getattr'](self, 'sep')) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)))==typeof ($add52=$p['__getslice'](text, 4, 8)) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52));
				self['tbox']['setText'](txt);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method2('onTodayClicked', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var today;
			today = $m['time']['strftime']($p['getattr'](self, 'format'));
			self['tbox']['setText'](today);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTodayClicked'] = $method;
		$method = $pyjs__bind_method2('onShowCalendar', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var txt,$add54,$add56,p,$pyjs_try_err,$bool37,$add53,y,x,_d,$add55;
			txt = self['tbox']['getText']()['strip']();
			try {
				if ((($bool37=txt) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					_d = $m['datetime']['strptime'](txt, $p['getattr'](self, 'format'))['date']();
					self['calendar']['setDate'](_d);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			p = (typeof CalendarPopup == "undefined"?$m.CalendarPopup:CalendarPopup)($p['getattr'](self, 'calendar'));
			x = (typeof ($add53=self['tbox']['getAbsoluteLeft']())==typeof ($add54=10) && (typeof $add53=='number'||typeof $add53=='string')?
				$add53+$add54:
				$p['op_add']($add53,$add54));
			y = (typeof ($add55=self['tbox']['getAbsoluteTop']())==typeof ($add56=10) && (typeof $add55=='number'||typeof $add55=='string')?
				$add55+$add56:
				$p['op_add']($add55,$add56));
			p['setPopupPosition'](x, y);
			p['show']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onShowCalendar'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DateField', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'DateField', $m['DateField']);
	$m['CalendarPopup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Calendar';
		$method = $pyjs__bind_method2('__init__', function(c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
			}
			var p;
			$m['PopupPanel']['__init__'](self, true);
			p = $m['SimplePanel']();
			p['add'](c);
			c['show'](10, 10);
			p['setWidth']('100%');
			self['setWidget'](p);
			return null;
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CalendarPopup', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'CalendarPopup', $m['CalendarPopup']);
	return this;
}; /* end pyjamas.ui.Calendar */


/* end module: pyjamas.ui.Calendar */


/*
PYJS_DEPS: ['pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.Factory', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui.HyperlinkImage', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HasAlignment', 'pyjamas.DOM', 'time', 'datetime.datetime', 'datetime']
*/

/* start module: pyjamas.ui.FlashPanel */
$pyjs.loaded_modules['pyjamas.ui.FlashPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FlashPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FlashPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.FlashPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.FlashPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlashPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['FlashPanel'] = $pyjs.loaded_modules['pyjamas.ui.FlashPanel'];
	var $bool1,$bool2;

	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	if ((($bool2=!(($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
		false :
		(typeof $bool1=='object'?
			(typeof $bool1.__nonzero__=='function'?
				$bool1.__nonzero__() :
				(typeof $bool1.__len__=='function'?
					($bool1.__len__()>0 ?
						true :
						false) :
					true ) ) :
			 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
	}
	$m['browser'] = function() {

		return 'ie';
	};
	$m['browser'].__name__ = 'browser';

	$m['browser'].__bind_type__ = 0;
	$m['browser'].__args__ = [null,null];
	$m['FlashPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.FlashPanel';
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
			var element;
			element = $m['DOM']['createDiv']();
			self['setElement'](element);
			$pyjs_kwargs_call($m['Panel'], '__init__', null, kwargs, [{}, self]);
			self.object_id = 'FlashObject';
			self.object_class = null;
			self.object_width = null;
			self.object_height = null;
			self.flash_url = null;
			self.wmode = null;
			self.quality = 'high';
			self.menu = null;
			self.allowScriptAccess = 'always';
			self.allowFullscreen = 'false';
			self.bgColor = '#FFFFFF';
			self.flashvars = '';
			self.browser = $m['browser']();
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['setInnerHTML']($p['getattr'](self, 'element'), self['__getFlashHTML']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('getObjectID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'object_id');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObjectID'] = $method;
		$method = $pyjs__bind_method2('setObjectID', function(object_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				object_id = arguments[1];
			}

			self.object_id = object_id;
			return null;
		}
	, 1, [null,null,['self'],['object_id']]);
		$cls_definition['setObjectID'] = $method;
		$method = $pyjs__bind_method2('getObjectClass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'object_class');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObjectClass'] = $method;
		$method = $pyjs__bind_method2('setObjectClass', function(object_class) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				object_class = arguments[1];
			}

			self.object_class = object_class;
			return null;
		}
	, 1, [null,null,['self'],['object_class']]);
		$cls_definition['setObjectClass'] = $method;
		$method = $pyjs__bind_method2('getObjectWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'object_width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObjectWidth'] = $method;
		$method = $pyjs__bind_method2('setObjectWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			self.object_width = $p['str'](width);
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setObjectWidth'] = $method;
		$method = $pyjs__bind_method2('getObjectHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'object_height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObjectHeight'] = $method;
		$method = $pyjs__bind_method2('setObjectHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			self.object_height = $p['str'](height);
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setObjectHeight'] = $method;
		$method = $pyjs__bind_method2('getFlashUrl', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'flash_url');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFlashUrl'] = $method;
		$method = $pyjs__bind_method2('setFlashUrl', function(flash_url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				flash_url = arguments[1];
			}

			self.flash_url = flash_url;
			return null;
		}
	, 1, [null,null,['self'],['flash_url']]);
		$cls_definition['setFlashUrl'] = $method;
		$method = $pyjs__bind_method2('getWmode', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'wmode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWmode'] = $method;
		$method = $pyjs__bind_method2('setWmode', function(wmode) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wmode = arguments[1];
			}

			self.wmode = wmode;
			return null;
		}
	, 1, [null,null,['self'],['wmode']]);
		$cls_definition['setWmode'] = $method;
		$method = $pyjs__bind_method2('getQuality', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'quality');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getQuality'] = $method;
		$method = $pyjs__bind_method2('setQuality', function(quality) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				quality = arguments[1];
			}

			self.quality = quality;
			return null;
		}
	, 1, [null,null,['self'],['quality']]);
		$cls_definition['setQuality'] = $method;
		$method = $pyjs__bind_method2('getMenu', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$bool3,$eq1;
			if ((($bool3=(($eq1=$p['getattr'](self, 'menu'))===($eq2='true')&&$eq1===null?true:
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
						 true ) )) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMenu'] = $method;
		$method = $pyjs__bind_method2('setMenu', function(menu) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				menu = arguments[1];
			}
			var $bool4;
			if ((($bool4=menu) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self.menu = 'true';
			}
			else {
				self.menu = 'false';
			}
			return null;
		}
	, 1, [null,null,['self'],['menu']]);
		$cls_definition['setMenu'] = $method;
		$method = $pyjs__bind_method2('getAllowFullscreen', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq3,$eq4,$bool5;
			if ((($bool5=(($eq3=$p['getattr'](self, 'allowFullscreen'))===($eq4='true')&&$eq3===null?true:
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAllowFullscreen'] = $method;
		$method = $pyjs__bind_method2('setAllowFullscreen', function(allowFullscreen) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				allowFullscreen = arguments[1];
			}
			var $bool6;
			if ((($bool6=allowFullscreen) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self.allowFullscreen = 'true';
			}
			else {
				self.allowFullscreen = 'false';
			}
			return null;
		}
	, 1, [null,null,['self'],['allowFullscreen']]);
		$cls_definition['setAllowFullscreen'] = $method;
		$method = $pyjs__bind_method2('getBGColor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'bgColor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBGColor'] = $method;
		$method = $pyjs__bind_method2('setBGColor', function(bgcolor) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bgcolor = arguments[1];
			}

			self.bgColor = bgcolor;
			return null;
		}
	, 1, [null,null,['self'],['bgcolor']]);
		$cls_definition['setBGColor'] = $method;
		$method = $pyjs__bind_method2('getFlashVars', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'flashvars');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFlashVars'] = $method;
		$method = $pyjs__bind_method2('setFlashVars', function(flashvars) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				flashvars = arguments[1];
			}

			self.flashvars = flashvars;
			return null;
		}
	, 1, [null,null,['self'],['flashvars']]);
		$cls_definition['setFlashVars'] = $method;
		$method = $pyjs__bind_method2('__getFlashHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,flashvars,$bool7,$bool8,$bool9,$add64,$add61,$add60,$add63,$add62,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$eq10,$eq11,$eq12,$eq13,$eq14,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$add29,$add28,$add21,$add20,$add22,$add25,$add24,$add27,$add26,html,$eq8,$eq9,object,$eq6,$eq7,$eq5,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$add23;
			object = (typeof ($add3=(typeof ($add1='id="')==typeof ($add2=$p['getattr'](self, 'object_id')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4='"') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			if ((($bool7=$p['getattr'](self, 'object_width')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				object = (typeof ($add9=object)==typeof ($add10=(typeof ($add7=(typeof ($add5=' width="')==typeof ($add6=$p['getattr'](self, 'object_width')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8='"') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			if ((($bool8=$p['getattr'](self, 'object_height')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				object = (typeof ($add15=object)==typeof ($add16=(typeof ($add13=(typeof ($add11=' height="')==typeof ($add12=$p['getattr'](self, 'object_height')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($add14='"') && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
			}
			if ((($bool9=$p['getattr'](self, 'object_class')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				object = (typeof ($add21=object)==typeof ($add22=(typeof ($add19=(typeof ($add17=' class="')==typeof ($add18=$p['getattr'](self, 'object_class')) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20='"') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
			}
			if ((($bool10=(($eq5=$p['getattr'](self, 'browser'))===($eq6='ie')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				object = (typeof ($add23=object)==typeof ($add24=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"') && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
			}
			else {
				object = (typeof ($add25=object)==typeof ($add26=' type="application/x-shockwave-flash"') && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				object = (typeof ($add31=object)==typeof ($add32=(typeof ($add29=(typeof ($add27=' data="')==typeof ($add28=$p['getattr'](self, 'flash_url')) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28)))==typeof ($add30='"') && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
			}
			html = $p['list']([$p['sprintf']('<object %s>', object)]);
			if ((($bool11=$p['getattr'](self, 'flash_url')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				html['append']((typeof ($add35=(typeof ($add33='<param name="movie" value="')==typeof ($add34=$p['getattr'](self, 'flash_url')) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($add36='" />') && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)));
			}
			if ((($bool12=$p['getattr'](self, 'quality')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				html['append']((typeof ($add39=(typeof ($add37='<param name="quality" value="')==typeof ($add38=$p['getattr'](self, 'quality')) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)))==typeof ($add40='" />') && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40)));
			}
			if ((($bool13=!(($eq7=$p['getattr'](self, 'allowScriptAccess'))===($eq8=null)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				html['append']((typeof ($add43=(typeof ($add41='<param name="allowscriptaccess" value="')==typeof ($add42=$p['getattr'](self, 'allowScriptAccess')) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)))==typeof ($add44='" />') && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44)));
			}
			if ((($bool14=!(($eq9=$p['getattr'](self, 'allowFullscreen'))===($eq10=null)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				html['append']((typeof ($add47=(typeof ($add45='<param name="allowfullscreen" value="')==typeof ($add46=$p['getattr'](self, 'allowFullscreen')) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46)))==typeof ($add48='" />') && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48)));
			}
			if ((($bool15=$p['getattr'](self, 'bgColor')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				html['append']((typeof ($add51=(typeof ($add49='<param name="bgcolor" value="')==typeof ($add50=$p['getattr'](self, 'bgColor')) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)))==typeof ($add52='"/>') && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)));
			}
			if ((($bool16=!(($eq11=$p['getattr'](self, 'wmode'))===($eq12=null)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				html['append']((typeof ($add55=(typeof ($add53='<param name="wmode" value="')==typeof ($add54=$p['getattr'](self, 'wmode')) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)))==typeof ($add56='" />') && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)));
			}
			if ((($bool17=!(($eq13=$p['getattr'](self, 'menu'))===($eq14=null)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				html['append']((typeof ($add59=(typeof ($add57='<param name="menu" value="')==typeof ($add58=$p['getattr'](self, 'menu')) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)))==typeof ($add60='" />') && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60)));
			}
			html['append']((typeof ($add63=(typeof ($add61='<param name="flashvars" value="')==typeof ($add62=self['getFlashVars']()) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				$p['op_add']($add61,$add62)))==typeof ($add64='" />') && (typeof $add63=='number'||typeof $add63=='string')?
				$add63+$add64:
				$p['op_add']($add63,$add64)));
			html['append']('\n        <div class="noflash">\n            <h3>You have no flash plugin installed</h3>\n            <p>Click here to download latest version</p>\n            <p>Download latest version from <a href=\'http://www.adobe.com/go/getflashplayer\'>here</a></p>\n        </div>\n        ');
			html['append']('</object>');
			flashvars = ''['join'](html);
			return flashvars;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__getFlashHTML'] = $method;
		$method = $pyjs__bind_method2('getMovieElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var element;
			element = $m['DOM']['getElementById']($p['getattr'](self, 'object_id'));
			return element;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMovieElement'] = $method;
		$method = $pyjs__bind_method2('callFlash', function(functionName, $$arguments) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				functionName = arguments[1];
				$$arguments = arguments[2];
			}
			if (typeof $$arguments == 'undefined') $$arguments=arguments.callee.__args__[4][1];
			var $bool18,$bool19,$add67,$add66,$add65,$add68,returnString,$pyjs_try_err,$bool21,$$arguments,returnValue,movieElement,$eq15,$eq16,$bool20;
			movieElement = self['getMovieElement']();
			if ((($bool19=!(($bool18=movieElement) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				return null;
			}
			try {
				returnString = movieElement['CallFunction']($p['sprintf']('<invoke name="%s" returntype="javascript">%s</invoke>', $p['tuple']([functionName, self['flashArgumentsToXML']($$arguments, 0)])));
				returnValue = '';
				if ((($bool20=returnString) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					if ((($bool21=!(($eq15=returnString)===($eq16='undefined')&&$eq15===null?true:
						($eq15===null?false:($eq16===null?false:
							((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
								((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
									$eq15==$eq16)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						returnValue = eval(returnString);
					}
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					$m.log['debug']((typeof ($add67=(typeof ($add65='Call to ')==typeof ($add66=functionName) && (typeof $add65=='number'||typeof $add65=='string')?
						$add65+$add66:
						$p['op_add']($add65,$add66)))==typeof ($add68=' failed') && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68)));
				}
			}
			return returnValue;
		}
	, 1, [null,null,['self'],['functionName'],['$$arguments', $p['list']([])]]);
		$cls_definition['callFlash'] = $method;
		$method = $pyjs__bind_method2('toJS', function(list_or_dict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				list_or_dict = arguments[1];
			}
			var toArray,obj,$bool23,$bool22,toObject;
			toArray = function(self, list) {
				var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,obj,array,$iter1_idx;
				array = Array();
				$iter1_iter = list;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					obj = $iter1_nextval;
					obj = self['toJS'](obj);
					array['push'](obj);
				}
				return array;
			};
			toArray.__name__ = 'toArray';

			toArray.__bind_type__ = 0;
			toArray.__args__ = [null,null,['self'],['list']];
			toObject = function(self, dict) {
				var $iter2_nextval,$iter2_type,$iter2_iter,object,$iter2_idx,key,obj,$iter2_array;
				object = Object();
				$iter2_iter = dict['iteritems']();
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter2_nextval, 2, null);
					key = $tupleassign1[0];
					obj = $tupleassign1[1];
					obj = self['toJS'](obj);
					$p['setattr'](object, key, obj);
				}
				return object;
			};
			toObject.__name__ = 'toObject';

			toObject.__bind_type__ = 0;
			toObject.__args__ = [null,null,['self'],['dict']];
			obj = list_or_dict;
			if ((($bool22=$p['hasattr'](obj, 'keys')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				obj = toObject(self, obj);
			}
			else if ((($bool23=$p['hasattr'](obj, 'append')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				obj = toArray(self, obj);
			}
			return obj;
		}
	, 1, [null,null,['self'],['list_or_dict']]);
		$cls_definition['toJS'] = $method;
		$method = $pyjs__bind_method2('flashArgumentsToXML', function($$arguments, num) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$arguments = arguments[1];
				num = arguments[2];
			}
			var $$arguments;
			$$arguments = self['toJS']($$arguments);
			return $wnd['__flash__argumentsToXML']($$arguments, num);
			return null;
		}
	, 1, [null,null,['self'],['$$arguments'],['num']]);
		$cls_definition['flashArgumentsToXML'] = $method;
		var $bases = new Array($m['Panel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FlashPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.FlashPanel */


/* end module: pyjamas.ui.FlashPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel', 'pyjd']
*/

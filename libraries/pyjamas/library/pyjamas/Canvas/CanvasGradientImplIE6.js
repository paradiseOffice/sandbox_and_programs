/* start module: pyjamas.Canvas.CanvasGradientImplIE6 */
$pyjs.loaded_modules['pyjamas.Canvas.CanvasGradientImplIE6'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.CanvasGradientImplIE6'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.CanvasGradientImplIE6'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.CanvasGradientImplIE6"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.CanvasGradientImplIE6>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.CanvasGradientImplIE6';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['CanvasGradientImplIE6'] = $pyjs.loaded_modules['pyjamas.Canvas.CanvasGradientImplIE6'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['ColorStop'] = $p['___import___']('pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas.Canvas', null, false);
	$m['CanvasGradientImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.Canvas.CanvasGradientImplIE6';
		$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				x1 = arguments[3];
				y1 = arguments[4];
			}
			var $div3,$div1,$div4,$sub3,$sub2,$sub1,$sub4,$eq2,$eq1,$bool1,$div2,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$add2,$add3,$add1,$add4;
			self.startX = x0;
			self.startY = y0;
			self.endX = x1;
			self.endY = y1;
			self.startRad = 0;
			self.endRad = 0;
			self.dx = (typeof ($sub1=x1)==typeof ($sub2=x0) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			self.dy = (typeof ($sub3=y1)==typeof ($sub4=y0) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			self.length = $m['math']['sqrt']((typeof ($add1=(typeof ($mul1=$p['getattr'](self, 'dx'))==typeof ($mul2=$p['getattr'](self, 'dx')) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))==typeof ($add2=(typeof ($mul3=$p['getattr'](self, 'dy'))==typeof ($mul4=$p['getattr'](self, 'dy')) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			if ((($bool1=(($eq1=$p['getattr'](self, 'dy'))===($eq2=0)&&$eq1===null?true:
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
				self.angle = 90;
			}
			else {
				self.angle = (typeof ($add3=$p['float_int']((typeof ($div3=(typeof ($mul5=$m['math']['atan']((typeof ($div1=$p['getattr'](self, 'dx'))==typeof ($div2=$p['getattr'](self, 'dy')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))))==typeof ($mul6=180) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($div4=$p['getattr']($m['math'], 'pi')) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))))==typeof ($add4=180) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
			self.colorStops = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				color = arguments[2];
			}
			var $iter1_nextval,$iter1_type,newColorStop,$len1,$iter1_iter,$bool2,i,$iter1_array,$cmp2,cs,$cmp1,$1,$2,$iter1_idx;
			newColorStop = $m['ColorStop'](offset, color);
			$iter1_iter = $p['range']((($len1=$p['getattr'](self, 'colorStops')) === null?0:
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
				cs = (typeof ($1=$p['getattr'](self, 'colorStops')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i));
				if ((($bool2=((($cmp1=offset)===($cmp2=$p['getattr'](cs, 'offset'))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['colorStops']['append'](i, newColorStop);
					return null;
				}
			}
			self['colorStops']['append'](newColorStop);
			return null;
		}
	, 1, [null,null,['self'],['offset'],['color']]);
		$cls_definition['addColorStop'] = $method;
		$method = $pyjs__bind_method2('cloneGradient', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cloneGradient'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CanvasGradientImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.CanvasGradientImplIE6 */


/* end module: pyjamas.Canvas.CanvasGradientImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.ColorStop']
*/

/* start module: pyjamas.dnd.DNDHelper */
$pyjs.loaded_modules['pyjamas.dnd.DNDHelper'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.dnd.DNDHelper'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.dnd.DNDHelper'];
	if(typeof $pyjs.loaded_modules['pyjamas.dnd'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.dnd'].__was_initialized__) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs.loaded_modules["pyjamas.dnd.DNDHelper"];
	$m.__repr__ = function() { return "<module: pyjamas.dnd.DNDHelper>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.DNDHelper';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.dnd']['DNDHelper'] = $pyjs.loaded_modules['pyjamas.dnd.DNDHelper'];


	$m['time'] = $p['___import___']('time', 'pyjamas.dnd');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.dnd', null, false);
	$m['GlassWidget'] = $p['___import___']('pyjamas.ui.GlassWidget', 'pyjamas.dnd', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.dnd', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.dnd', null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.dnd', null, false);
	$m['DraggingWidget'] = $p['___import___']('pyjamas.dnd.utils.DraggingWidget', 'pyjamas.dnd', null, false);
	$m['isCanceled'] = $p['___import___']('pyjamas.dnd.utils.isCanceled', 'pyjamas.dnd', null, false);
	$m['findDraggable'] = $p['___import___']('pyjamas.dnd.utils.findDraggable', 'pyjamas.dnd', null, false);
	$m['eventCoordinates'] = $p['___import___']('pyjamas.dnd.utils.eventCoordinates', 'pyjamas.dnd', null, false);
	$m['getElementUnderMouse'] = $p['___import___']('pyjamas.dnd.utils.getElementUnderMouse', 'pyjamas.dnd', null, false);
	$m['DataTransfer'] = $p['___import___']('pyjamas.dnd.DataTransfer.DataTransfer', 'pyjamas.dnd', null, false);
	$m['DragDataStore'] = $p['___import___']('pyjamas.dnd.DataTransfer.DragDataStore', 'pyjamas.dnd', null, false);
	$m['DragEvent'] = $p['___import___']('pyjamas.dnd.DragEvent.DragEvent', 'pyjamas.dnd', null, false);
	$m['READ_ONLY'] = $p['___import___']('pyjamas.dnd.READ_ONLY', 'pyjamas.dnd', null, false);
	$m['READ_WRITE'] = $p['___import___']('pyjamas.dnd.READ_WRITE', 'pyjamas.dnd', null, false);
	$m['PROTECTED'] = $p['___import___']('pyjamas.dnd.PROTECTED', 'pyjamas.dnd', null, false);
	$m['ACTIVELY_DRAGGING'] = 3;
	$m['DRAGGING_NO_MOVEMENT_YET'] = 2;
	$m['NOT_DRAGGING'] = 1;
	$m['DNDHelper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.dnd.DNDHelper';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.dropTargets = $p['list']([]);
			self.dragging = $m['NOT_DRAGGING'];
			self.dragBusy = false;
			self._currentTargetElement = null;
			self.previousDropTarget = null;
			self.draggingImage = null;
			self.origMouseX = 0;
			self.origMouseY = 0;
			self.currentDragOperation = 'none';
			self.data = null;
			self.returnTimer = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:$p['getattr'](self, 'onReturningWidget')}]);
			self.mouseEvent = null;
			self.dragDataStore = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setCurrentTargetElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			var $bool2,$bool3,$bool1;
			if ((($bool1=($p['getattr'](self, '_currentTargetElement') !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool3=!(($bool2=$m['DOM']['compare']($p['getattr'](self, '_currentTargetElement'), element)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['fireDNDEvent']('dragleave', $p['getattr'](self, 'currentTargetElement'), $p['getattr'](self, 'currentDropWidget'));
				}
			}
			self._currentTargetElement = element;
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setCurrentTargetElement'] = $method;
		$method = $pyjs__bind_method2('getCurrentTargetElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_currentTargetElement');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentTargetElement'] = $method;
		$cls_definition['currentTargetElement'] = $p['property']($p['staticmethod']($cls_definition['getCurrentTargetElement']), $p['staticmethod']($cls_definition['setCurrentTargetElement']));
		$method = $pyjs__bind_method2('getElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dragWidget']['getElement']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('updateDropEffect', function(dataTransfer, event_type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dataTransfer = arguments[1];
				event_type = arguments[2];
			}
			var $or1,$or2,$eq2,$eq3,$eq1,ea,dropEffect,$eq5,$bool10,$bool6,$eq4,$bool4,$bool5,$bool8,$bool9,$eq6,$bool7;
			dropEffect = 'none';
			if ((($bool4=$p['list'](['dragover', 'dragenter']).__contains__(event_type)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				ea = dataTransfer['getEffectAllowed']();
				if ((($bool5=(($eq1=ea)===($eq2='none')&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					dropEffect = 'none';
				}
				else if ((($bool7=((($bool6=$or1=ea['startswith']('copy')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:(($eq3=ea)===($eq4='all')&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4))))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					dropEffect = 'copy';
				}
				else if ((($bool8=ea['startswith']('link')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					dropEffect = 'link';
				}
				else if ((($bool9=(($eq5=ea)===($eq6='move')&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					dropEffect = 'move';
				}
				else {
					dropEffect = 'copy';
				}
			}
			else if ((($bool10=$p['list'](['drop', 'dragend']).__contains__(event_type)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				dropEffect = $p['getattr'](self, 'currentDragOperation');
			}
			dataTransfer.dropEffect = dropEffect;
			return null;
		}
	, 1, [null,null,['self'],['dataTransfer'],['event_type']]);
		$cls_definition['updateDropEffect'] = $method;
		$method = $pyjs__bind_method2('updateDragOperation', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool11,$bool12,$bool13,ea,$bool15,$bool16,$eq10,$eq11,$eq12,$bool14,$eq8,$eq9,dataTransfer,$and1,$and2,$and3,$and4,$eq7,$and6,$and5,de;
			dataTransfer = $p['getattr'](event, 'dataTransfer');
			ea = $p['getattr'](dataTransfer, 'effectAllowed');
			de = $p['getattr'](dataTransfer, 'dropEffect');
			if ((($bool12=((($bool11=$and1=(($eq7=de)===($eq8='copy')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['list'](['uninitialized', 'copy', 'copyLink', 'copyMove', 'all']).__contains__(ea):$and1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self.currentDragOperation = 'copy';
			}
			else if ((($bool14=((($bool13=$and3=(($eq9=de)===($eq10='link')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['list'](['uninitialized', 'link', 'copyLink', 'linkMove', 'all']).__contains__(ea):$and3)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self.currentDragOperation = 'link';
			}
			else if ((($bool16=((($bool15=$and5=(($eq11=de)===($eq12='move')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['list'](['uninitialized', 'move', 'copyMove', 'linkMove', 'all']).__contains__(ea):$and5)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self.currentDragOperation = 'move';
			}
			else {
				self.currentDragOperation = 'none';
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['updateDragOperation'] = $method;
		$method = $pyjs__bind_method2('updateAllowedEffects', function(drag_event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				drag_event = arguments[1];
			}
			var dt;
			dt = $p['getattr'](drag_event, 'dataTransfer');
			$p['getattr'](self, 'dragDataStore').allowed_effects_state = $p['getattr'](dt, 'effectAllowed');
			return null;
		}
	, 1, [null,null,['self'],['drag_event']]);
		$cls_definition['updateAllowedEffects'] = $method;
		$method = $pyjs__bind_method2('registerTarget', function(target) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $bool18,$bool17;
			if ((($bool18=!(($bool17=$p['getattr'](self, 'dropTargets').__contains__(target)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['dropTargets']['append'](target);
			}
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['registerTarget'] = $method;
		$method = $pyjs__bind_method2('unregisterTarget', function(target) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $bool19;
			while ((($bool19=$p['getattr'](self, 'dropTargets').__contains__(target)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['dropTargets']['remove'](target);
			}
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['unregisterTarget'] = $method;
		$method = $pyjs__bind_method2('setDragImage', function(element, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var src,$bool23,$add2,$add3,$add1,$bool21,$bool20,$add4,$bool22,$eq13,$eq14,position_absolute;
			position_absolute = (($eq13=$m['DOM']['getStyleAttribute'](element, 'position'))===($eq14='absolute')&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))));
			if ((($bool20=position_absolute) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				self.dragLeftOffset = (typeof ($add1=x)==typeof ($add2=$m['DOM']['getAbsoluteLeft']($p['getattr'](element, 'offsetParent'))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				self.dragTopOffset = (typeof ($add3=y)==typeof ($add4=$m['DOM']['getAbsoluteTop']($p['getattr'](element, 'offsetParent'))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
			else {
				self.dragLeftOffset = x;
				self.dragTopOffset = y;
			}
			if ((($bool21=element['tagName']['lower']()['endswith']('img')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				src = $m['DOM']['getAttribute'](element, 'src');
				element = $m['DOM']['createElement']('img');
				$m['DOM']['setAttribute'](element, 'src', src);
			}
			if ((($bool23=!(($bool22=$p['getattr'](self, 'draggingImage')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				self['createDraggingImage'](element);
			}
			else {
				self['draggingImage']['setImage'](element);
			}
			return null;
		}
	, 1, [null,null,['self'],['element'],['x'],['y']]);
		$cls_definition['setDragImage'] = $method;
		$method = $pyjs__bind_method2('addFeedbackElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			var $bool24;
			if ((($bool24=$p['getattr'](self, 'draggingImage')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				self['draggingImage']['addElement'](element);
			}
			else {
				self['createDraggingImage'](element);
			}
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['addFeedbackElement'] = $method;
		$method = $pyjs__bind_method2('createDraggingImage', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self.draggingImage = $m['DraggingWidget'](element);
			return $p['getattr'](self, 'draggingImage');
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['createDraggingImage'] = $method;
		$method = $pyjs__bind_method2('setDragImageLocation', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $sub3,elt_top,$sub2,$sub1,elt_left,$sub4;
			elt_top = (typeof ($sub1=y)==typeof ($sub2=$p['getattr'](self, 'dragTopOffset')) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			elt_left = (typeof ($sub3=x)==typeof ($sub4=$p['getattr'](self, 'dragLeftOffset')) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			self['draggingImage']['setStyleAttribute']('top', elt_top);
			self['draggingImage']['setStyleAttribute']('left', elt_left);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['setDragImageLocation'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dragWidget']['getAbsoluteLeft']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dragWidget']['getAbsoluteTop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('makeDragEvent', function(event, type, target) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				type = arguments[2];
				target = arguments[3];
			}
			if (typeof target == 'undefined') target=arguments.callee.__args__[5][1];
			var dt,drag_event;
			dt = $m['DataTransfer']($p['getattr'](self, 'dragDataStore'));
			self['updateDropEffect'](dt, type);
			drag_event = $m['DragEvent'](event, type, dt, target);
			return drag_event;
		}
	, 1, [null,null,['self'],['event'],['type'],['target', null]]);
		$cls_definition['makeDragEvent'] = $method;
		$method = $pyjs__bind_method2('finalize', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool25;
			$p['getattr'](self, 'dragDataStore').allowed_effects_state = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'effectAllowed');
			if ((($bool25=$p['list'](['dragstart', 'drop']).__contains__($p['getattr'](event, 'type'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				self['dragDataStore']['setMode']($m['PROTECTED']);
			}
			$p['getattr'](event, 'dataTransfer').dataStore = null;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['finalize'] = $method;
		$method = $pyjs__bind_method2('fireDNDEvent', function(name, target, widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				target = arguments[2];
				widget = arguments[3];
			}
			var event,$eq18,$bool27,$bool26,$eq17,$eq15,$eq16;
			if ((($bool26=(($eq15=name)===($eq16='dragstart')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				self['dragDataStore']['setMode']($m['READ_WRITE']);
			}
			else if ((($bool27=(($eq17=name)===($eq18='drop')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				self['dragDataStore']['setMode']($m['READ_ONLY']);
			}
			event = self['makeDragEvent']($p['getattr'](self, 'mouseEvent'), name, target);
			widget['onBrowserEvent'](event);
			self['finalize'](event);
			return event;
		}
	, 1, [null,null,['self'],['name'],['target'],['widget']]);
		$cls_definition['fireDNDEvent'] = $method;
		$method = $pyjs__bind_method2('initFeedbackImage', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var element,$iter1_nextval,$iter1_type,$3,$iter1_idx,$2,$bool28,$bool30,$iter1_array,offset,y,x,$4,$iter1_iter,$bool29,ds,$1;
			ds = $p['getattr'](self, 'dragDataStore');
			x = 0;
			y = 0;
			if ((($bool28=($p['getattr'](ds, 'bitmap') !== null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				if ((($bool29=($p['getattr'](ds, 'hotspot_coordinate') !== null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					offset = $p['getattr'](ds, 'hotspot_coordinate');
					x = (typeof ($1=offset).__array != 'undefined'?
						((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(0));
					y = (typeof ($3=offset).__array != 'undefined'?
						((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(1));
				}
				self['setDragImage']($p['getattr'](ds, 'bitmap'), x, y);
				return null;
			}
			if ((($bool30=$p['getattr']($p['getattr'](self, 'dragDataStore'), 'elements')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				$iter1_iter = $p['getattr']($p['getattr'](self, 'dragDataStore'), 'elements');
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					element = $iter1_nextval;
					self['addFeedbackElement'](element);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initFeedbackImage'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $eq19,event,draggable,fromElement,$bool41,$sub9,$pyjs_try_err,$sub7,$sub6,$sub5,$or4,$bool42,$or3,$bool40,$sub13,$sub12,$sub8,$sub10,$sub11,$eq21,$eq20,$eq23,$eq22,$eq25,$eq24,$eq26,$sub14,dragStartEvent,$cmp1,$cmp2,button,$bool32,$bool33,$bool31,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,position_absolute;
			event = $m['DOM']['eventGetCurrentEvent']();
			self.mouseEvent = event;
			button = $m['DOM']['eventGetButton'](event);
			if ((($bool32=!(($bool31=(($eq19=button)===($eq20=$p['getattr']($m['Event'], 'BUTTON_LEFT'))&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				return null;
			}
			var $tupleassign1 = $p['__ass_unpack']($m['eventCoordinates'](event), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			if ((($bool33=(($eq21=$p['getattr'](self, 'dragging'))===($eq22=$m['DRAGGING_NO_MOVEMENT_YET'])&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				self.origMouseX = x;
				self.origMouseY = y;
				self.currentDragOperation = 'none';
				fromElement = self['dragWidget']['getElement']();
				try {
					draggable = $p['getattr'](fromElement, 'draggable');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						draggable = false;
					}
				}
				if ((($bool35=!(($bool34=draggable) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					fromElement = $m['findDraggable'](sender['getElement'](), $p['getattr'](self, 'origMouseX'), $p['getattr'](self, 'origMouseY'));
				}
				if ((($bool36=(fromElement === null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					self.dragging = $m['NOT_DRAGGING'];
					return null;
				}
				self.origTop = $m['DOM']['getAbsoluteTop'](fromElement);
				self.origLeft = $m['DOM']['getAbsoluteLeft'](fromElement);
				position_absolute = (($eq23=$m['DOM']['getStyleAttribute'](fromElement, 'position'))===($eq24='absolute')&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
								$eq23==$eq24)))));
				if ((($bool37=position_absolute) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					self.dragLeftOffset = (typeof ($sub5=$p['getattr'](self, 'origMouseX'))==typeof ($sub6=$m['DOM']['getAbsoluteLeft']($p['getattr'](fromElement, 'offsetParent'))) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6));
					self.dragTopOffset = (typeof ($sub7=$p['getattr'](self, 'origMouseY'))==typeof ($sub8=$m['DOM']['getAbsoluteTop']($p['getattr'](fromElement, 'offsetParent'))) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8));
				}
				else {
					self.dragLeftOffset = (typeof ($sub9=$p['getattr'](self, 'origMouseX'))==typeof ($sub10=$p['getattr'](self, 'origLeft')) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10));
					self.dragTopOffset = (typeof ($sub11=$p['getattr'](self, 'origMouseY'))==typeof ($sub12=$p['getattr'](self, 'origTop')) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12));
				}
				$p['getattr'](self, 'dragDataStore').elements = $p['list']([fromElement]);
				dragStartEvent = self['fireDNDEvent']('dragstart', null, $p['getattr'](self, 'dragWidget'));
				if ((($bool39=!(($bool38=$m['isCanceled'](dragStartEvent)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					self['initFeedbackImage']();
					$m['RootPanel']()['add']($p['getattr'](self, 'draggingImage'));
					self['setDragImageLocation'](x, y);
					self.dragging = $m['ACTIVELY_DRAGGING'];
					$m['GlassWidget']['show'](self);
				}
			}
			else if ((($bool40=(($eq25=$p['getattr'](self, 'dragging'))===($eq26=$m['ACTIVELY_DRAGGING'])&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				try {
					$doc['selection']['empty']();
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						$wnd['getSelection']()['removeAllRanges']();
					}
				}
				self['setDragImageLocation'](x, y);
				if ((($bool42=((($bool41=$or3=$p['getattr'](self, 'dragBusy')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41.__nonzero__=='function'?
							$bool41.__nonzero__() :
							(typeof $bool41.__len__=='function'?
								($bool41.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($cmp1=(typeof ($sub13=$m['time']['time']())==typeof ($sub14=$p['getattr'](self, 'drag_time')) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)))===($cmp2=0.25)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
					return null;
				}
				self['doDrag'](event, x, y);
				self.drag_time = $m['time']['time']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('doDrag', function(event, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $or5,$bool50,$bool51,$bool52,$bool53,$bool45,$or6,$iter2_type,drag_event,$iter2_iter,enter_event,$bool47,$bool46,widget,$bool44,$bool43,over_event,$bool49,$bool48,$iter2_idx,drop_widget,$iter2_nextval,target,drop_element,$iter2_array;
			self.dragBusy = true;
			drag_event = self['fireDNDEvent']('drag', null, $p['getattr'](self, 'dragWidget'));
			if ((($bool44=!(($bool43=$m['isCanceled'](drag_event)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43.__nonzero__=='function'?
						$bool43.__nonzero__() :
						(typeof $bool43.__len__=='function'?
							($bool43.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				target = null;
				widget = null;
				$iter2_iter = $p['getattr'](self, 'dropTargets');
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					widget = $iter2_nextval;
					target = $m['getElementUnderMouse'](widget, x, y);
					if ((($bool45=(target !== null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
						break;
					}
				}
				if ((($bool46=target) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					drop_widget = widget;
					drop_element = target;
					if ((($bool50=((($bool48=$or5=!(($bool47=$p['getattr'](self, 'currentTargetElement')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47.__nonzero__=='function'?
								$bool47.__nonzero__() :
								(typeof $bool47.__len__=='function'?
									($bool47.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48.__nonzero__=='function'?
								$bool48.__nonzero__() :
								(typeof $bool48.__len__=='function'?
									($bool48.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:!(($bool49=$m['DOM']['compare'](drop_element, $p['getattr'](self, 'currentTargetElement'))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
						enter_event = self['fireDNDEvent']('dragenter', drop_element, drop_widget);
						if ((($bool51=$m['isCanceled'](enter_event)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
							self.currentTargetElement = drop_element;
							self.currentDropWidget = drop_widget;
						}
					}
					if ((($bool52=($p['getattr'](self, 'currentTargetElement') !== null)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
						over_event = self['fireDNDEvent']('dragover', drop_element, $p['getattr'](self, 'currentDropWidget'));
						if ((($bool53=$m['isCanceled'](over_event)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
							self['updateDragOperation'](over_event);
						}
						else {
							self.currentDragOperation = 'none';
						}
						self['draggingImage']['updateCursor']($p['getattr'](self, 'currentDragOperation'));
					}
				}
				else {
					self.currentTargetElement = null;
				}
			}
			else {
				self.currentDragOperation = 'none';
			}
			self.dragBusy = false;
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['doDrag'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool54,event,$eq27,$eq28,button;
			self.dragWidget = sender;
			event = $m['DOM']['eventGetCurrentEvent']();
			self.mouseEvent = event;
			button = $m['DOM']['eventGetButton'](event);
			if ((($bool54=!(($eq27=button)===($eq28=$p['getattr']($m['Event'], 'BUTTON_LEFT'))&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				return null;
			}
			self.dragging = $m['DRAGGING_NO_MOVEMENT_YET'];
			self.drag_time = $m['time']['time']();
			self.dragDataStore = $m['DragDataStore']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool55,$or7,$bool57,$bool59,$bool60,$bool58,$bool56,$or8,$eq29,$eq30,drop_event;
			self.dragging = $m['NOT_DRAGGING'];
			if ((($bool55=$p['getattr'](self, 'draggingImage')) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				$m['GlassWidget']['hide']();
				if ((($bool58=((($bool56=$or7=(($eq29=$p['getattr'](self, 'currentDragOperation'))===($eq30='none')&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:!(($bool57=$p['getattr'](self, 'currentTargetElement')) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
					if ((($bool59=$p['getattr'](self, 'currentTargetElement')) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
						self['fireDNDEvent']('dragleave', $p['getattr'](self, 'currentTargetElement'), $p['getattr'](self, 'currentDropWidget'));
					}
					else {
						self.currentDragOperation = 'none';
					}
					self['returnDrag']();
				}
				else {
					drop_event = self['fireDNDEvent']('drop', $p['getattr'](self, 'currentTargetElement'), $p['getattr'](self, 'currentDropWidget'));
					if ((($bool60=$m['isCanceled'](drop_event)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
						self.currentDragOperation = $p['getattr']($p['getattr'](drop_event, 'dataTransfer'), 'dropEffect');
					}
					else {
						self.currentDragOperation = 'none';
					}
					self['zapDragImage']();
				}
				self['fireDNDEvent']('dragend', null, $p['getattr'](self, 'dragWidget'));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('zapDragImage', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['RootPanel']()['remove']($p['getattr'](self, 'draggingImage'));
			self.draggingImage = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zapDragImage'] = $method;
		$method = $pyjs__bind_method2('returnDrag', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['moveItemTo']($p['getattr'](self, 'draggingImage'), $p['getattr'](self, 'origLeft'), $p['getattr'](self, 'origTop'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['returnDrag'] = $method;
		$method = $pyjs__bind_method2('returnXY', function(start, destination, count) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				destination = arguments[2];
				count = arguments[3];
			}
			var $sub22,$sub23,$sub20,$sub21,$sub26,$sub27,$sub24,$sub25,destination_x,destination_y,$sub28,$sub29,$bool63,$bool62,$bool64,$sub32,$sub37,diff_x,diff_y,$sub31,$sub38,$bool61,$cmp5,$sub19,$sub18,$sub35,$sub34,$sub30,$sub36,$or9,$or12,$sub17,$sub16,$sub15,$div8,$cmp10,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$cmp4,$cmp7,$cmp6,$sub33,$cmp3,$cmp9,$cmp8,$or11,$or10,start_x,start_y;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					var $tupleassign4 = $p['__ass_unpack'](start, 2, null);
					start_x = $tupleassign4[0];
					start_y = $tupleassign4[1];
					var $tupleassign5 = $p['__ass_unpack'](destination, 2, null);
					destination_x = $tupleassign5[0];
					destination_y = $tupleassign5[1];
					diff_x = (typeof ($div5=(typeof ($sub27=start_x)==typeof ($sub28=destination_x) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28)))==typeof ($div6=count) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6));
					diff_y = (typeof ($div7=(typeof ($sub29=start_y)==typeof ($sub30=destination_y) && (typeof $sub29=='number'||typeof $sub29=='string')?
						$sub29-$sub30:
						$p['op_sub']($sub29,$sub30)))==typeof ($div8=count) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8));
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state.splice(1, $generator_state.length-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||((($bool64=((($bool63=$or11=((($cmp7=$p['abs']((typeof ($sub31=start_x)==typeof ($sub32=destination_x) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32))))===($cmp8=10)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or11:((($cmp9=$p['abs']((typeof ($sub33=start_y)==typeof ($sub34=destination_y) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34))))===($cmp10=10)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
							false :
							(typeof $bool64=='object'?
								(typeof $bool64.__nonzero__=='function'?
									$bool64.__nonzero__() :
									(typeof $bool64.__len__=='function'?
										($bool64.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							start_x = (typeof ($sub35=start_x)==typeof ($sub36=diff_x) && (typeof $sub35=='number'||typeof $sub35=='string')?
								$sub35-$sub36:
								$p['op_sub']($sub35,$sub36));
							start_y = (typeof ($sub37=start_y)==typeof ($sub38=diff_y) && (typeof $sub37=='number'||typeof $sub37=='string')?
								$sub37-$sub38:
								$p['op_sub']($sub37,$sub38));
							$yield_value = $p['tuple']([start_x, start_y]);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
					throw ($p['StopIteration']);
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
					$generator_state[0]=5;
				}
				if ($generator_state[0] == 5) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self'],['start'],['destination'],['count']]);
		$cls_definition['returnXY'] = $method;
		$method = $pyjs__bind_method2('onReturningWidget', function(timer) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}
			var next_loc,$pyjs_try_err,y,x;
			try {
				next_loc = self['return_iterator']['next']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
					self['zapDragImage']();
					return null;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			var $tupleassign6 = $p['__ass_unpack'](next_loc, 2, null);
			x = $tupleassign6[0];
			y = $tupleassign6[1];
			self['draggingImage']['setStyleAttribute']('top', $p['str'](y));
			self['draggingImage']['setStyleAttribute']('left', $p['str'](x));
			self['returnTimer']['schedule'](50);
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['onReturningWidget'] = $method;
		$method = $pyjs__bind_method2('moveItemTo', function(widget, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var widgetStart,returnWidgetDestination;
			self.returnWidget = widget;
			returnWidgetDestination = $p['tuple']([x, y]);
			widgetStart = $p['tuple']([widget['getAbsoluteLeft'](), widget['getAbsoluteTop']()]);
			self.return_iterator = self['returnXY'](widgetStart, returnWidgetDestination, 10);
			self['returnTimer']['schedule'](50);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['x'],['y']]);
		$cls_definition['moveItemTo'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $eq32,$eq31,$bool65;
			if ((($bool65=(($eq31=$p['getattr'](self, 'dragging'))===($eq32=$m['DRAGGING_NO_MOVEMENT_YET'])&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
				self.dragging = $m['NOT_DRAGGING'];
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassLeave'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DNDHelper', $p['tuple']($bases), $data);
	})();
	$m['dndHelper'] = null;
	$m['initDNDHelper'] = function() {
		var $bool66;
		if ((($bool66=($m['dndHelper'] === null)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
			$m['dndHelper'] = $m['DNDHelper']();
		}
		return null;
	};
	$m['initDNDHelper'].__name__ = 'initDNDHelper';

	$m['initDNDHelper'].__bind_type__ = 0;
	$m['initDNDHelper'].__args__ = [null,null];
	$m['initDNDHelper']();
	return this;
}; /* end pyjamas.dnd.DNDHelper */


/* end module: pyjamas.dnd.DNDHelper */


/*
PYJS_DEPS: ['time', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.GlassWidget', 'pyjamas.ui', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Event', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.dnd.utils.DraggingWidget', 'pyjamas.dnd', 'pyjamas.dnd.utils', 'pyjamas.dnd.utils.isCanceled', 'pyjamas.dnd.utils.findDraggable', 'pyjamas.dnd.utils.eventCoordinates', 'pyjamas.dnd.utils.getElementUnderMouse', 'pyjamas.dnd.DataTransfer.DataTransfer', 'pyjamas.dnd.DataTransfer', 'pyjamas.dnd.DataTransfer.DragDataStore', 'pyjamas.dnd.DragEvent.DragEvent', 'pyjamas.dnd.DragEvent', 'pyjamas.dnd.READ_ONLY', 'pyjamas.dnd.READ_WRITE', 'pyjamas.dnd.PROTECTED']
*/

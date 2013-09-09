/* start module: pyjamas.ui.RichTextAreaImplStandard */
$pyjs.loaded_modules['pyjamas.ui.RichTextAreaImplStandard'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.RichTextAreaImplStandard'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.RichTextAreaImplStandard'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.RichTextAreaImplStandard"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.RichTextAreaImplStandard>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RichTextAreaImplStandard';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['RichTextAreaImplStandard'] = $pyjs.loaded_modules['pyjamas.ui.RichTextAreaImplStandard'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.ui', null, false);
	$m['RichTextAreaImpl'] = $p['___import___']('pyjamas.ui.RichTextAreaImpl.RichTextAreaImpl', 'pyjamas.ui', null, false);
	$m['elem_focussers'] = $p['dict']([]);
	$m['RichTextAreaImplStandard'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.RichTextAreaImplStandard';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['RichTextAreaImpl']['__init__'](self);
			self.beforeInitPlaceholder = $m['DOM']['createDiv']();
			self.initializing = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['createElement']('iframe');
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('createLink', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			self['execCommand']('CreateLink', url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['createLink'] = $method;
		$method = $pyjs__bind_method2('getBackColor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandValue']('BackColor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBackColor'] = $method;
		$method = $pyjs__bind_method2('getForeColor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandValue']('ForeColor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getForeColor'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1;
			if ((($bool1=($p['getattr'](self, 'beforeInitPlaceholder') === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return self['getHTMLImpl']();
			}
			return $m['DOM']['getInnerHTML']($p['getattr'](self, 'beforeInitPlaceholder'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2;
			if ((($bool2=($p['getattr'](self, 'beforeInitPlaceholder') === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return self['getTextImpl']();
			}
			return $m['DOM']['getInnerText']($p['getattr'](self, 'beforeInitPlaceholder'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(tid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}

			$p['getattr']($p['getattr']($p['getattr'](self, 'elem'), 'contentWindow'), 'document').designMode = 'On';
			self['onElementInitialized']();
			return null;
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('initElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.initializing = true;
			$m['Timer'](50, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initElement'] = $method;
		$method = $pyjs__bind_method2('insertHorizontalRule', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('InsertHorizontalRule', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['insertHorizontalRule'] = $method;
		$method = $pyjs__bind_method2('insertImage', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			self['execCommand']('InsertImage', url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['insertImage'] = $method;
		$method = $pyjs__bind_method2('insertOrderedList', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('InsertOrderedList', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['insertOrderedList'] = $method;
		$method = $pyjs__bind_method2('insertUnorderedList', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('InsertUnorderedList', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['insertUnorderedList'] = $method;
		$method = $pyjs__bind_method2('isBasicEditingSupported', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isBasicEditingSupported'] = $method;
		$method = $pyjs__bind_method2('isBold', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandState']('Bold');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isBold'] = $method;
		$method = $pyjs__bind_method2('isExtendedEditingSupported', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isExtendedEditingSupported'] = $method;
		$method = $pyjs__bind_method2('isItalic', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandState']('Italic');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isItalic'] = $method;
		$method = $pyjs__bind_method2('isStrikethrough', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandState']('Strikethrough');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isStrikethrough'] = $method;
		$method = $pyjs__bind_method2('isSubscript', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandState']('Subscript');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isSubscript'] = $method;
		$method = $pyjs__bind_method2('isSuperscript', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandState']('Superscript');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isSuperscript'] = $method;
		$method = $pyjs__bind_method2('isUnderlined', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['queryCommandState']('Underline');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isUnderlined'] = $method;
		$method = $pyjs__bind_method2('leftIndent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Outdent', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['leftIndent'] = $method;
		$method = $pyjs__bind_method2('removeFormat', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('RemoveFormat', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeFormat'] = $method;
		$method = $pyjs__bind_method2('removeLink', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Unlink', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeLink'] = $method;
		$method = $pyjs__bind_method2('rightIndent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Indent', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rightIndent'] = $method;
		$method = $pyjs__bind_method2('selectAll', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('SelectAll', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['selectAll'] = $method;
		$method = $pyjs__bind_method2('setBackColor', function(color) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
			}

			self['execCommand']('BackColor', color);
			return null;
		}
	, 1, [null,null,['self'],['color']]);
		$cls_definition['setBackColor'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}
			var $bool3;
			if ((($bool3=focused) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['elem']['contentWindow']['focus']();
			}
			else {
				self['elem']['contentWindow']['blur']();
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('setFontName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self['execCommand']('FontName', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setFontName'] = $method;
		$method = $pyjs__bind_method2('setFontSize', function(fontSize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fontSize = arguments[1];
			}

			self['execCommand']('FontSize', $p['str'](fontSize));
			return null;
		}
	, 1, [null,null,['self'],['fontSize']]);
		$cls_definition['setFontSize'] = $method;
		$method = $pyjs__bind_method2('setForeColor', function(color) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
			}

			self['execCommand']('ForeColor', color);
			return null;
		}
	, 1, [null,null,['self'],['color']]);
		$cls_definition['setForeColor'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}
			var $bool4;
			if ((($bool4=($p['getattr'](self, 'beforeInitPlaceholder') === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['setHTMLImpl'](html);
			}
			else {
				$m['DOM']['setInnerHTML']($p['getattr'](self, 'beforeInitPlaceholder'), html);
			}
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setJustification', function(justification) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				justification = arguments[1];
			}
			var $eq2,$eq3,$eq1,$eq6,$eq4,$eq5,$bool6,$bool7,$bool5;
			if ((($bool5=(($eq1=justification)===($eq2=$p['getattr']((typeof RichTextArea == "undefined"?$m.RichTextArea:RichTextArea), 'CENTER'))&&$eq1===null?true:
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
				self['execCommand']('JustifyCenter', '');
			}
			else if ((($bool6=(($eq3=justification)===($eq4=$p['getattr']((typeof RichTextArea == "undefined"?$m.RichTextArea:RichTextArea), 'LEFT'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['execCommand']('JustifyLeft', '');
			}
			else if ((($bool7=(($eq5=justification)===($eq6=$p['getattr']((typeof RichTextArea == "undefined"?$m.RichTextArea:RichTextArea), 'RIGHT'))&&$eq5===null?true:
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
				self['execCommand']('JustifyRight', '');
			}
			return null;
		}
	, 1, [null,null,['self'],['justification']]);
		$cls_definition['setJustification'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $bool8;
			if ((($bool8=($p['getattr'](self, 'beforeInitPlaceholder') === null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self['setTextImpl'](text);
			}
			else {
				$m['DOM']['setInnerText']($p['getattr'](self, 'beforeInitPlaceholder'), text);
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('toggleBold', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Bold', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleBold'] = $method;
		$method = $pyjs__bind_method2('toggleItalic', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Italic', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleItalic'] = $method;
		$method = $pyjs__bind_method2('toggleStrikethrough', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Strikethrough', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleStrikethrough'] = $method;
		$method = $pyjs__bind_method2('toggleSubscript', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Subscript', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleSubscript'] = $method;
		$method = $pyjs__bind_method2('toggleSuperscript', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Superscript', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleSuperscript'] = $method;
		$method = $pyjs__bind_method2('toggleUnderline', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['execCommand']('Underline', 'False');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleUnderline'] = $method;
		$method = $pyjs__bind_method2('uninitElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool9,html;
			if ((($bool9=$p['getattr'](self, 'initializing')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self.initializing = false;
				return null;
			}
			self['unhookEvents']();
			html = self['getHTML']();
			self.beforeInitPlaceholder = $m['DOM']['createDiv']();
			$m['DOM']['setInnerHTML']($p['getattr'](self, 'beforeInitPlaceholder'), html);
			$p['getattr']($p['getattr']($p['getattr'](self, 'elem'), 'contentWindow'), 'document').designMode = 'Off';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['uninitElement'] = $method;
		$method = $pyjs__bind_method2('getHTMLImpl', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'elem'), 'contentWindow'), 'document'), 'body'), 'innerHTML');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTMLImpl'] = $method;
		$method = $pyjs__bind_method2('getTextImpl', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'elem'), 'contentWindow'), 'document'), 'body'), 'textContent');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextImpl'] = $method;
		$method = $pyjs__bind_method2('__gwt_handler', function(view, evt, from_window) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				view = arguments[1];
				evt = arguments[2];
				from_window = arguments[3];
			}
			var $bool10,listener;
			listener = $m['DOM']['get_listener']($p['getattr'](self, 'elem'));
			if ((($bool10=(listener !== null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				listener['onBrowserEvent'](evt);
			}
			return null;
		}
	, 1, [null,null,['self'],['view'],['evt'],['from_window']]);
		$cls_definition['__gwt_handler'] = $method;
		$method = $pyjs__bind_method2('__gwt_focus_handler', function(view, evt, from_window) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				view = arguments[1];
				evt = arguments[2];
				from_window = arguments[3];
			}
			var $bool11;
			if ((($bool11=$m['elem_focussers']['get']($p['getattr'](self, 'elem'), false)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				return null;
			}
			$m['elem_focussers'].__setitem__($p['getattr'](self, 'elem'), true);
			self['__gwt_handler'](view, evt, from_window);
			return null;
		}
	, 1, [null,null,['self'],['view'],['evt'],['from_window']]);
		$cls_definition['__gwt_focus_handler'] = $method;
		$method = $pyjs__bind_method2('__gwt_blur_handler', function(view, evt, from_window) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				view = arguments[1];
				evt = arguments[2];
				from_window = arguments[3];
			}
			var $bool13,$bool12;
			if ((($bool13=!(($bool12=$m['elem_focussers']['get']($p['getattr'](self, 'elem'), false)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12.__nonzero__=='function'?
						$bool12.__nonzero__() :
						(typeof $bool12.__len__=='function'?
							($bool12.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				return null;
			}
			$m['elem_focussers'].__setitem__($p['getattr'](self, 'elem'), false);
			self['__gwt_handler'](view, evt, from_window);
			return null;
		}
	, 1, [null,null,['self'],['view'],['evt'],['from_window']]);
		$cls_definition['__gwt_blur_handler'] = $method;
		$method = $pyjs__bind_method2('hookEvents', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var elem,wnd;
			elem = $p['getattr'](self, 'elem');
			wnd = $p['getattr'](elem, 'contentWindow');

    var elem = elem;
    var wnd = wnd;

    elem.__gwt_handler = function(evt) {
      if (elem.__listener) {
          $m.DOM.dispatchEvent(evt, elem, elem.__listener);
        }
    };

    elem.__gwt_focusHandler = function(evt) {
      if (elem.__gwt_isFocused) {
        return;
      }

      elem.__gwt_isFocused = true;
      elem.__gwt_handler(evt);
    };

    elem.__gwt_blurHandler = function(evt) {
      if (!elem.__gwt_isFocused) {
        return;
      }

      elem.__gwt_isFocused = false;
      elem.__gwt_handler(evt);
    };

    wnd.addEventListener('keydown', elem.__gwt_handler, true);
    wnd.addEventListener('keyup', elem.__gwt_handler, true);
    wnd.addEventListener('keypress', elem.__gwt_handler, true);
    wnd.addEventListener('mousedown', elem.__gwt_handler, true);
    wnd.addEventListener('mouseup', elem.__gwt_handler, true);
    wnd.addEventListener('mousemove', elem.__gwt_handler, true);
    wnd.addEventListener('mouseover', elem.__gwt_handler, true);
    wnd.addEventListener('mouseout', elem.__gwt_handler, true);
    wnd.addEventListener('click', elem.__gwt_handler, true);

    wnd.addEventListener('focus', elem.__gwt_focusHandler, true);
    wnd.addEventListener('blur', elem.__gwt_blurHandler, true);
  
		}
	, 1, [null,null,['self']]);
		$cls_definition['hookEvents'] = $method;
		$method = $pyjs__bind_method2('onElementInitialized', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool14,$bool15,$bool16;
			if ((($bool15=!(($bool14=$p['getattr'](self, 'initializing')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				return null;
			}
			self.initializing = false;
			$m['RichTextAreaImpl']['onElementInitialized'](self);
			if ((($bool16=($p['getattr'](self, 'beforeInitPlaceholder') !== null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self['setHTMLImpl']($m['DOM']['getInnerHTML']($p['getattr'](self, 'beforeInitPlaceholder')));
				self.beforeInitPlaceholder = null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onElementInitialized'] = $method;
		$method = $pyjs__bind_method2('setHTMLImpl', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			$p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'elem'), 'contentWindow'), 'document'), 'body').innerHTML = html;
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTMLImpl'] = $method;
		$method = $pyjs__bind_method2('setTextImpl', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'elem'), 'contentWindow'), 'document'), 'body').textContent = text;
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setTextImpl'] = $method;
		$method = $pyjs__bind_method2('unhookEvents', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unhookEvents'] = $method;
		$method = $pyjs__bind_method2('execCommand', function(cmd, param) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
				param = arguments[2];
			}
			var $bool17;
			if ((($bool17=self['isRichEditingActive']($p['getattr'](self, 'elem'))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['setFocus'](true);
				self['execCommandAssumingFocus'](cmd, param);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmd'],['param']]);
		$cls_definition['execCommand'] = $method;
		$method = $pyjs__bind_method2('execCommandAssumingFocus', function(cmd, param) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
				param = arguments[2];
			}

			self['elem']['contentWindow']['document']['execCommand'](cmd, false, param);
			return null;
		}
	, 1, [null,null,['self'],['cmd'],['param']]);
		$cls_definition['execCommandAssumingFocus'] = $method;
		$method = $pyjs__bind_method2('isRichEditingActive', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $eq8,$eq7;
			return (($eq7=$p['str']($p['getattr']($p['getattr']($p['getattr'](e, 'contentWindow'), 'document'), 'designMode'))['upper']())===($eq8='ON')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))));
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['isRichEditingActive'] = $method;
		$method = $pyjs__bind_method2('queryCommandState', function(cmd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
			}
			var $bool18;
			if ((($bool18=self['isRichEditingActive']($p['getattr'](self, 'elem'))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['setFocus'](true);
				return self['queryCommandStateAssumingFocus'](cmd);
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['cmd']]);
		$cls_definition['queryCommandState'] = $method;
		$method = $pyjs__bind_method2('queryCommandStateAssumingFocus', function(cmd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
			}

			return self['elem']['contentWindow']['document']['queryCommandState'](cmd);
		}
	, 1, [null,null,['self'],['cmd']]);
		$cls_definition['queryCommandStateAssumingFocus'] = $method;
		$method = $pyjs__bind_method2('queryCommandValue', function(cmd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
			}

			self['setFocus'](true);
			return self['queryCommandValueAssumingFocus'](cmd);
		}
	, 1, [null,null,['self'],['cmd']]);
		$cls_definition['queryCommandValue'] = $method;
		$method = $pyjs__bind_method2('queryCommandValueAssumingFocus', function(cmd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
			}

			return self['elem']['contentWindow']['document']['queryCommandValue'](cmd);
		}
	, 1, [null,null,['self'],['cmd']]);
		$cls_definition['queryCommandValueAssumingFocus'] = $method;
		var $bases = new Array($m['RichTextAreaImpl']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RichTextAreaImplStandard', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.RichTextAreaImplStandard */


/* end module: pyjamas.ui.RichTextAreaImplStandard */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.ui.RichTextAreaImpl.RichTextAreaImpl', 'pyjamas.ui', 'pyjamas.ui.RichTextAreaImpl']
*/

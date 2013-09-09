/* start module: pyjamas.JSONService */
$pyjs.loaded_modules['pyjamas.JSONService'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.JSONService'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.JSONService'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.JSONService"];
	$m.__repr__ = function() { return "<module: pyjamas.JSONService>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONService';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['JSONService'] = $pyjs.loaded_modules['pyjamas.JSONService'];
	var $pyjs_try_err;

	$m['sys'] = $p['___import___']('sys', 'pyjamas');
	$m['HTTPRequest'] = $p['___import___']('HTTPRequest.HTTPRequest', 'pyjamas', null, false);
	try {
		$m['dumps'] = $p['___import___']('json.dumps', 'pyjamas', null, false);
		$m['loads'] = $p['___import___']('json.loads', 'pyjamas', null, false);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
		$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
		if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$m['dumps'] = $p['___import___']('simplejson.dumps', 'pyjamas', null, false);
			$m['loads'] = $p['___import___']('simplejson.loads', 'pyjamas', null, false);
		} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
	}
	$m['JSONServiceError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONServiceError', $p['tuple']($bases), $data);
	})();
	$m['__requestID'] = 0;
	$m['__requestIDPrefix'] = 'ID';
	$m['__lastRequestID'] = null;
	$m['nextRequestID'] = function() {
		var $bool1,$add3,$eq2,$eq1,$add2,$add1,$add4,id;
		$m['__requestID'] = (typeof ($add1=$m['__requestID'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		id = $p['sprintf']('%s%s', $p['tuple']([$m['__requestIDPrefix'], $m['__requestID']]));
		if ((($bool1=(($eq1=$m['__lastRequestID'])===($eq2=id)&&$eq1===null?true:
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
			$m['__requestIDPrefix'] = (typeof ($add3=$m['__requestIDPrefix'])==typeof ($add4='_') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			$m['__requestID'] = 0;
			id = $p['sprintf']('%s%s', $p['tuple']([$m['__requestIDPrefix'], $m['__requestID']]));
		}
		$m['__lastRequestID'] = id;
		return id;
	};
	$m['nextRequestID'].__name__ = 'nextRequestID';

	$m['nextRequestID'].__bind_type__ = 0;
	$m['nextRequestID'].__args__ = [null,null];
	$m['JSONService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$cls_definition['content_type'] = 'application/json-rpc';
		$cls_definition['accept'] = 'application/json-rpc';
		$method = $pyjs__bind_method2('__init__', function(url, handler, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				headers = arguments[3];
			}
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];
			var $bool3,$bool2,$bool4;
			self.url = url;
			self.handler = handler;
			self.headers = ((($bool2=(headers !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (headers) : ($p['dict']([])));
			if ((($bool4=!(($bool3=self['headers']['get']('Accept')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$p['getattr'](self, 'headers').__setitem__('Accept', $p['getattr'](self, 'accept'));
			}
			return null;
		}
	, 1, [null,null,['self'],['url'],['handler', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('callMethod', function(method, params, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
				handler = arguments[3];
			}
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[5][1];
			var $bool6,$bool5;
			if ((($bool5=(handler === null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				handler = $p['getattr'](self, 'handler');
			}
			if ((($bool6=(handler === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				return self['sendNotify'](method, params);
			}
			else {
				return self['sendRequest'](method, params, handler);
			}
			return null;
		}
	, 1, [null,null,['self'],['method'],['params'],['handler', null]]);
		$cls_definition['callMethod'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(response) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('sendNotify', function(method, params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
			}
			var $bool7,msg_data,msg,$bool8;
			msg = $p['dict']([['jsonrpc', '2.0'], ['version', '1.1'], ['method', method], ['params', params]]);
			msg_data = $m['dumps'](msg);
			if ((($bool8=!(($bool7=$m['HTTPRequest']()['asyncPost']($p['getattr'](self, 'url'), msg_data, self, false, $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
			}
			return 1;
		}
	, 1, [null,null,['self'],['method'],['params']]);
		$cls_definition['sendNotify'] = $method;
		$method = $pyjs__bind_method2('sendRequest', function(method, params, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
				handler = arguments[3];
			}
			var $bool10,id,msg_data,msg,request_info,$bool9;
			id = $m['nextRequestID']();
			msg = $p['dict']([['jsonrpc', '2.0'], ['id', id], ['method', method], ['params', params]]);
			msg_data = $m['dumps'](msg);
			request_info = (typeof JSONRequestInfo == "undefined"?$m.JSONRequestInfo:JSONRequestInfo)(id, method, handler);
			if ((($bool10=!(($bool9=$m['HTTPRequest']()['asyncPost']($p['getattr'](self, 'url'), msg_data, (typeof JSONResponseTextHandler == "undefined"?$m.JSONResponseTextHandler:JSONResponseTextHandler)(request_info), false, $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
			}
			return id;
		}
	, 1, [null,null,['self'],['method'],['params'],['handler']]);
		$cls_definition['sendRequest'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
	})();
	$m['JSONRequestInfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$method = $pyjs__bind_method2('__init__', function(id, method, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
				method = arguments[2];
				handler = arguments[3];
			}

			self.id = id;
			self.method = method;
			self.handler = handler;
			return null;
		}
	, 1, [null,null,['self'],['id'],['method'],['handler']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONRequestInfo', $p['tuple']($bases), $data);
	})();
	$m['create_object'] = function(items) {

		return items;
	};
	$m['create_object'].__name__ = 'create_object';

	$m['create_object'].__bind_type__ = 0;
	$m['create_object'].__args__ = [null,null,['items']];
	$m['_decode_response'] = function(json_str) {

		return $m['loads'](json_str);
	};
	$m['_decode_response'].__name__ = '_decode_response';

	$m['_decode_response'].__bind_type__ = 0;
	$m['_decode_response'].__args__ = [null,null,['json_str']];
	$m['JSONResponseTextHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$method = $pyjs__bind_method2('__init__', function(request) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				request = arguments[1];
			}

			self.request = request;
			return null;
		}
	, 1, [null,null,['self'],['request']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(json_str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				json_str = arguments[1];
			}
			var code,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,message,$2,response,$pyjs_try_err,$eq3,$eq4,$4,data,$3,$1,jsonrpc,error;
			try {
				response = $m['_decode_response'](json_str);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub3=32700)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), message:'Parse error while decoding response', data:null}]);
					self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
					return null;
				}
			}
			if ((($bool12=!(($bool11=response) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub4=32603)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), message:'Empty Response', data:null}]);
				self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
			}
			else if ((($bool13=response['get']('error')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				error = (typeof ($1=response).__array != 'undefined'?
					((typeof $1.__array[$2='error']) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__('error'));
				jsonrpc = response['get']('jsonrpc');
				code = error['get']('code', 0);
				message = error['get']('message', error);
				data = error['get']('data');
				if ((($bool15=!(($bool14=jsonrpc) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					jsonrpc = response['get']('version', '1.0');
					if ((($bool16=(($eq3=jsonrpc)===($eq4='1.0')&&$eq3===null?true:
						($eq3===null?false:($eq4===null?false:
							((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
								((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
									$eq3==$eq4)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
						message = error;
					}
					else {
						data = error['get']('error');
					}
				}
				error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:code, message:message, data:data}]);
				self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
			}
			else if ((($bool17=response.__contains__('result')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['request']['handler']['onRemoteResponse']((typeof ($3=response).__array != 'undefined'?
					((typeof $3.__array[$4='result']) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__('result')), $p['getattr'](self, 'request'));
			}
			else {
				error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub5=32603)=='number'?
					-$usub5:
					$p['op_usub']($usub5)), message:'No result or error in response', data:response}]);
				self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
			}
			return null;
		}
	, 1, [null,null,['self'],['json_str']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(error_str, error_code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				error_str = arguments[1];
				error_code = arguments[2];
			}
			var error;
			error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:error_code, message:error_str, data:null}]);
			self['request']['handler']['onRemoteError'](error_code, error, $p['getattr'](self, 'request'));
			return null;
		}
	, 1, [null,null,['self'],['error_str'],['error_code']]);
		$cls_definition['onError'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONResponseTextHandler', $p['tuple']($bases), $data);
	})();
	$m['ServiceProxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$method = $pyjs__bind_method2('__init__', function(serviceURL, serviceName, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serviceURL = arguments[1];
				serviceName = arguments[2];
				headers = arguments[3];
			}
			if (typeof serviceName == 'undefined') serviceName=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];

			$pyjs_kwargs_call($m['JSONService'], '__init__', null, null, [{headers:headers}, self, serviceURL]);
			self.__serviceName = serviceName;
			return null;
		}
	, 1, [null,null,['self'],['serviceURL'],['serviceName', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var params = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') params.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var params = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') params.__array.push(kwargs);
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
			var $bool18,$bool19,$bool25,$bool24,$bool27,$bool26,$bool20,$bool23,$bool22,$bool21,handler,$and1,$and2,$and3,$and4,$8,$6,$7,$5;
			if ((($bool18=$p['isinstance'](params, $p['tuple'])) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				params = $p['list'](params);
			}
			if ((($bool20=((($bool19=$and1=params) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['hasattr']((typeof ($5=params).__array != 'undefined'?
				((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(0)), 'onRemoteResponse'):$and1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				handler = params['pop'](0);
			}
			else if ((($bool22=((($bool21=$and3=params) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['hasattr']((typeof ($7=params).__array != 'undefined'?
				((typeof $7.__array[$8=(typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__((typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)))), 'onRemoteResponse'):$and3)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				handler = params['pop']();
			}
			else {
				handler = null;
			}
			if ((($bool23=kwargs) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				if ((($bool24=params) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					if ((($bool26=!(($bool25=$p['isinstance'](params, $p['dict'])) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25.__nonzero__=='function'?
								$bool25.__nonzero__() :
								(typeof $bool25.__len__=='function'?
									($bool25.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
						throw ($m['JSONServiceError']('Cannot mix positional and keyword arguments'));
					}
					params['update'](kwargs);
				}
				else {
					params = kwargs;
				}
			}
			if ((($bool27=(handler !== null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				return $m['JSONService']['sendRequest'](self, $p['getattr'](self, '__serviceName'), params, handler);
			}
			else {
				return $m['JSONService']['sendNotify'](self, $p['getattr'](self, '__serviceName'), params);
			}
			return null;
		}
	, 1, ['params',['kwargs'],['self']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($m['JSONService']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ServiceProxy', $p['tuple']($bases), $data);
	})();
	$m['JSONProxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$method = $pyjs__bind_method2('__init__', function(url, methods, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				methods = arguments[2];
				headers = arguments[3];
			}
			if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];
			var $bool28;
			self._serviceURL = url;
			self.methods = methods;
			self.headers = ((($bool28=(headers === null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ($p['dict']([])) : (headers));
			$pyjs_kwargs_call($m['JSONService'], '__init__', null, null, [{headers:$p['getattr'](self, 'headers')}, self, url]);
			self['_registerMethods'](methods);
			return null;
		}
	, 1, [null,null,['self'],['url'],['methods', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_registerMethods', function(methods) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				methods = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,$bool29,method;
			if ((($bool29=methods) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				$iter1_iter = methods;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					method = $iter1_nextval;
					$p['setattr'](self, method, $p['getattr']($pyjs_kwargs_call(null, $m['ServiceProxy'], null, null, [{headers:$p['getattr'](self, 'headers')}, $p['getattr'](self, '_serviceURL'), method]), '__call__'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['methods']]);
		$cls_definition['_registerMethods'] = $method;
		var $bases = new Array($m['JSONService']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONProxy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.JSONService */


/* end module: pyjamas.JSONService */


/*
PYJS_DEPS: ['sys', 'HTTPRequest.HTTPRequest', 'HTTPRequest', 'json.dumps', 'json', 'json.loads', 'simplejson.dumps', 'simplejson', 'simplejson.loads']
*/

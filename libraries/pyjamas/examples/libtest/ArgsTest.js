/* start module: ArgsTest */
$pyjs.loaded_modules['ArgsTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ArgsTest'].__was_initialized__) return $pyjs.loaded_modules['ArgsTest'];
	var $m = $pyjs.loaded_modules["ArgsTest"];
	$m.__repr__ = function() { return "<module: ArgsTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ArgsTest';
	$m.__name__ = __mod_name__;


	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['aArgs'] = function() {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


		return args;
	};
	$m['aArgs'].__name__ = 'aArgs';

	$m['aArgs'].__bind_type__ = 0;
	$m['aArgs'].__args__ = ['args',null];
	$m['ftest'] = function(a, b) {

		return $p['list']([a, b]);
	};
	$m['ftest'].__name__ = 'ftest';

	$m['ftest'].__bind_type__ = 0;
	$m['ftest'].__args__ = [null,null,['a'],['b']];
	$m['ArgsTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('testNaming1', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var values,$4,$2,$3,$1;
			values = $m['ftest'](1, 2);
			self['assertEquals']((typeof ($1=values).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), 1);
			self['assertEquals']((typeof ($3=values).__array != 'undefined'?
				((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(1)), 2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNaming1'] = $method;
		$method = $pyjs__bind_method2('testNaming2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var values,$8,$6,$7,$5;
			values = $pyjs_kwargs_call(null, $m['ftest'], null, null, [{a:1, b:2}]);
			self['assertEquals']((typeof ($5=values).__array != 'undefined'?
				((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(0)), 1);
			self['assertEquals']((typeof ($7=values).__array != 'undefined'?
				((typeof $7.__array[$8=1]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(1)), 2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNaming2'] = $method;
		$method = $pyjs__bind_method2('testNaming3', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $10,$11,$12,values,$9;
			values = $pyjs_kwargs_call(null, $m['ftest'], null, null, [{b:2}, 1]);
			self['assertEquals']((typeof ($9=values).__array != 'undefined'?
				((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(0)), 1);
			self['assertEquals']((typeof ($11=values).__array != 'undefined'?
				((typeof $11.__array[$12=1]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(1)), 2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNaming3'] = $method;
		$method = $pyjs__bind_method2('testNaming4', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,values,t,exc_raised;
			exc_raised = false;
			try {
				values = $pyjs_kwargs_call(null, $m['ftest'], null, null, [{c:2}, 1]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					t = $pyjs_try_err;
					exc_raised = true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertTrue'](exc_raised, "TypeError 'c' unexpected arg not raised");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNaming4'] = $method;
		$method = $pyjs__bind_method2('testNaming5', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,values,t,exc_raised;
			exc_raised = false;
			try {
				values = $m['ftest']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					t = $pyjs_try_err;
					exc_raised = true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertTrue'](exc_raised, "TypeError 'ftest() takes exactly 2 arguments (0 given)' not raised");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testNaming5'] = $method;
		$method = $pyjs__bind_method2('testSimpleCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $14,$15,$16,$17,$13,$21,$20,$22,$18,$19,$24,values,$23;
			values = (typeof foo == "undefined"?$m.foo:foo)(1, 2, 3);
			self['assertEquals']((typeof ($13=values).__array != 'undefined'?
				((typeof $13.__array[$14=0]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(0)), 1);
			self['assertEquals']((typeof ($15=values).__array != 'undefined'?
				((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(1)), 2);
			self['assertEquals']((typeof ($17=values).__array != 'undefined'?
				((typeof $17.__array[$18=2]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(2)), 3);
			values = (typeof foo2 == "undefined"?$m.foo2:foo2)(1, 2, 3);
			self['assertEquals']((typeof ($19=values).__array != 'undefined'?
				((typeof $19.__array[$20=0]) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__(0)), 1);
			self['assertEquals']((typeof ($21=values).__array != 'undefined'?
				((typeof $21.__array[$22=1]) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__(1)), 2);
			self['assertEquals']((typeof ($23=values).__array != 'undefined'?
				((typeof $23.__array[$24=2]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSimpleCall'] = $method;
		$method = $pyjs__bind_method2('testKeywordCall1', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $29,$28,$25,$27,$26,values,$30;
			values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{c:3, b:2, a:1}]);
			self['assertEquals']((typeof ($25=values).__array != 'undefined'?
				((typeof $25.__array[$26=0]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(0)), 1);
			self['assertEquals']((typeof ($27=values).__array != 'undefined'?
				((typeof $27.__array[$28=1]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(1)), 2);
			self['assertEquals']((typeof ($29=values).__array != 'undefined'?
				((typeof $29.__array[$30=2]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordCall1'] = $method;
		$method = $pyjs__bind_method2('testKeywordCall2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $36,$34,$35,$32,$33,$31,values;
			values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{b:2, a:1, c:3}]);
			self['assertEquals']((typeof ($31=values).__array != 'undefined'?
				((typeof $31.__array[$32=0]) != 'undefined'?$31.__array[$32]:
					$31.__getitem__($32)):
					$31.__getitem__(0)), 1);
			self['assertEquals']((typeof ($33=values).__array != 'undefined'?
				((typeof $33.__array[$34=1]) != 'undefined'?$33.__array[$34]:
					$33.__getitem__($34)):
					$33.__getitem__(1)), 2);
			self['assertEquals']((typeof ($35=values).__array != 'undefined'?
				((typeof $35.__array[$36=2]) != 'undefined'?$35.__array[$36]:
					$35.__getitem__($36)):
					$35.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordCall2'] = $method;
		$method = $pyjs__bind_method2('testKeywordCall3', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $38,$39,$37,values,$42,$41,$40;
			values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{c:3}, 1]);
			self['assertEquals']((typeof ($37=values).__array != 'undefined'?
				((typeof $37.__array[$38=0]) != 'undefined'?$37.__array[$38]:
					$37.__getitem__($38)):
					$37.__getitem__(0)), 1);
			self['assertEquals']((typeof ($39=values).__array != 'undefined'?
				((typeof $39.__array[$40=1]) != 'undefined'?$39.__array[$40]:
					$39.__getitem__($40)):
					$39.__getitem__(1)), null);
			self['assertEquals']((typeof ($41=values).__array != 'undefined'?
				((typeof $41.__array[$42=2]) != 'undefined'?$41.__array[$42]:
					$41.__getitem__($42)):
					$41.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordCall3'] = $method;
		$method = $pyjs__bind_method2('testKeywordCall4', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $48,values,$43,$47,$46,$45,$44;
			values = (typeof foo2 == "undefined"?$m.foo2:foo2)();
			self['assertEquals']((typeof ($43=values).__array != 'undefined'?
				((typeof $43.__array[$44=0]) != 'undefined'?$43.__array[$44]:
					$43.__getitem__($44)):
					$43.__getitem__(0)), null);
			self['assertEquals']((typeof ($45=values).__array != 'undefined'?
				((typeof $45.__array[$46=1]) != 'undefined'?$45.__array[$46]:
					$45.__getitem__($46)):
					$45.__getitem__(1)), null);
			self['assertEquals']((typeof ($47=values).__array != 'undefined'?
				((typeof $47.__array[$48=2]) != 'undefined'?$47.__array[$48]:
					$47.__getitem__($48)):
					$47.__getitem__(2)), null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordCall4'] = $method;
		$method = $pyjs__bind_method2('testKeywordCall5', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $49,values,$50,$51,$52,$53,$54;
			values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{c:true}]);
			self['assertEquals']((typeof ($49=values).__array != 'undefined'?
				((typeof $49.__array[$50=0]) != 'undefined'?$49.__array[$50]:
					$49.__getitem__($50)):
					$49.__getitem__(0)), null);
			self['assertEquals']((typeof ($51=values).__array != 'undefined'?
				((typeof $51.__array[$52=1]) != 'undefined'?$51.__array[$52]:
					$51.__getitem__($52)):
					$51.__getitem__(1)), null);
			self['assertEquals']((typeof ($53=values).__array != 'undefined'?
				((typeof $53.__array[$54=2]) != 'undefined'?$53.__array[$54]:
					$53.__getitem__($54)):
					$53.__getitem__(2)), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordCall5'] = $method;
		$method = $pyjs__bind_method2('testStarArgs', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,exc,res,args,$add2,$add3,$pyjs_try_err,$add4,$add1,called;
			args = $p['tuple']([1, 2]);
			res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
			self['assertEquals'](args, res);
			args = '123';
			try {
				res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
				called = true;
				exc = null;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					called = false;
					exc = e;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertTrue'](called, (typeof ($add3=(typeof ($add1='exception not expected but function called:')==typeof ($add2=$p['repr'](res)) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4=$p['repr'](exc)) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			self['assertEquals'](res, $p['tuple'](['1', '2', '3']));
			args = 1;
			try {
				res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
				called = true;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					called = false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['assertFalse'](called, 'exception expected but not raised - TypeError: aArgs() argument after * must be a sequence');
			args = $p['tuple']([1]);
			res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
			self['assertEquals'](args, res);
			args = $p['tuple']([1]);
			res = $m['aArgs'](args);
			self['assertEquals']($p['tuple']([args]), res);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testStarArgs'] = $method;
		$method = $pyjs__bind_method2('testDefaultValuesCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $72,$68,$70,$66,$69,$60,$58,$59,$71,values,$63,$65,$64,$67,$62,$61,$55,$56,$57;
			values = $pyjs_kwargs_call(null, (typeof foo3 == "undefined"?$m.foo3:foo3), null, null, [{b:7}]);
			self['assertEquals']((typeof ($55=values).__array != 'undefined'?
				((typeof $55.__array[$56=0]) != 'undefined'?$55.__array[$56]:
					$55.__getitem__($56)):
					$55.__getitem__(0)), 1);
			self['assertEquals']((typeof ($57=values).__array != 'undefined'?
				((typeof $57.__array[$58=1]) != 'undefined'?$57.__array[$58]:
					$57.__getitem__($58)):
					$57.__getitem__(1)), 7);
			self['assertEquals']((typeof ($59=values).__array != 'undefined'?
				((typeof $59.__array[$60=2]) != 'undefined'?$59.__array[$60]:
					$59.__getitem__($60)):
					$59.__getitem__(2)), 3);
			values = $pyjs_kwargs_call(null, (typeof foo3 == "undefined"?$m.foo3:foo3), null, null, [{a:9}]);
			self['assertEquals']((typeof ($61=values).__array != 'undefined'?
				((typeof $61.__array[$62=0]) != 'undefined'?$61.__array[$62]:
					$61.__getitem__($62)):
					$61.__getitem__(0)), 9);
			self['assertEquals']((typeof ($63=values).__array != 'undefined'?
				((typeof $63.__array[$64=1]) != 'undefined'?$63.__array[$64]:
					$63.__getitem__($64)):
					$63.__getitem__(1)), 2);
			self['assertEquals']((typeof ($65=values).__array != 'undefined'?
				((typeof $65.__array[$66=2]) != 'undefined'?$65.__array[$66]:
					$65.__getitem__($66)):
					$65.__getitem__(2)), 3);
			values = (typeof foo3 == "undefined"?$m.foo3:foo3)();
			self['assertEquals']((typeof ($67=values).__array != 'undefined'?
				((typeof $67.__array[$68=0]) != 'undefined'?$67.__array[$68]:
					$67.__getitem__($68)):
					$67.__getitem__(0)), 1);
			self['assertEquals']((typeof ($69=values).__array != 'undefined'?
				((typeof $69.__array[$70=1]) != 'undefined'?$69.__array[$70]:
					$69.__getitem__($70)):
					$69.__getitem__(1)), 2);
			self['assertEquals']((typeof ($71=values).__array != 'undefined'?
				((typeof $71.__array[$72=2]) != 'undefined'?$71.__array[$72]:
					$71.__getitem__($72)):
					$71.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDefaultValuesCall'] = $method;
		$method = $pyjs__bind_method2('testVarargsCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $98,$99,$94,$95,$96,$97,$90,$91,$92,$93,$107,$106,$108,$101,$100,$103,$102,$105,$104,$89,$88,$87,$86,$85,$84,$83,$82,$81,$80,$73,$76,$77,$74,$75,$78,$79,values;
			values = (typeof foo4 == "undefined"?$m.foo4:foo4)(9, 8, 7, 2, 3, 4);
			self['assertEquals']((typeof ($73=values).__array != 'undefined'?
				((typeof $73.__array[$74=0]) != 'undefined'?$73.__array[$74]:
					$73.__getitem__($74)):
					$73.__getitem__(0)), 9);
			self['assertEquals']((typeof ($75=values).__array != 'undefined'?
				((typeof $75.__array[$76=1]) != 'undefined'?$75.__array[$76]:
					$75.__getitem__($76)):
					$75.__getitem__(1)), 8);
			self['assertEquals']((typeof ($77=values).__array != 'undefined'?
				((typeof $77.__array[$78=2]) != 'undefined'?$77.__array[$78]:
					$77.__getitem__($78)):
					$77.__getitem__(2)), 7);
			self['assertEquals']((typeof ($81=(typeof ($79=values).__array != 'undefined'?
				((typeof $79.__array[$80=3]) != 'undefined'?$79.__array[$80]:
					$79.__getitem__($80)):
					$79.__getitem__(3))).__array != 'undefined'?
				((typeof $81.__array[$82=0]) != 'undefined'?$81.__array[$82]:
					$81.__getitem__($82)):
					$81.__getitem__(0)), 2);
			self['assertEquals']((typeof ($85=(typeof ($83=values).__array != 'undefined'?
				((typeof $83.__array[$84=3]) != 'undefined'?$83.__array[$84]:
					$83.__getitem__($84)):
					$83.__getitem__(3))).__array != 'undefined'?
				((typeof $85.__array[$86=1]) != 'undefined'?$85.__array[$86]:
					$85.__getitem__($86)):
					$85.__getitem__(1)), 3);
			self['assertEquals']((typeof ($89=(typeof ($87=values).__array != 'undefined'?
				((typeof $87.__array[$88=3]) != 'undefined'?$87.__array[$88]:
					$87.__getitem__($88)):
					$87.__getitem__(3))).__array != 'undefined'?
				((typeof $89.__array[$90=2]) != 'undefined'?$89.__array[$90]:
					$89.__getitem__($90)):
					$89.__getitem__(2)), 4);
			values = (typeof foo4 == "undefined"?$m.foo4:foo4)(9, 8, 7, 3, 2, 1);
			self['assertEquals']((typeof ($91=values).__array != 'undefined'?
				((typeof $91.__array[$92=0]) != 'undefined'?$91.__array[$92]:
					$91.__getitem__($92)):
					$91.__getitem__(0)), 9);
			self['assertEquals']((typeof ($93=values).__array != 'undefined'?
				((typeof $93.__array[$94=1]) != 'undefined'?$93.__array[$94]:
					$93.__getitem__($94)):
					$93.__getitem__(1)), 8);
			self['assertEquals']((typeof ($95=values).__array != 'undefined'?
				((typeof $95.__array[$96=2]) != 'undefined'?$95.__array[$96]:
					$95.__getitem__($96)):
					$95.__getitem__(2)), 7);
			self['assertEquals']((typeof ($99=(typeof ($97=values).__array != 'undefined'?
				((typeof $97.__array[$98=3]) != 'undefined'?$97.__array[$98]:
					$97.__getitem__($98)):
					$97.__getitem__(3))).__array != 'undefined'?
				((typeof $99.__array[$100=0]) != 'undefined'?$99.__array[$100]:
					$99.__getitem__($100)):
					$99.__getitem__(0)), 3);
			self['assertEquals']((typeof ($103=(typeof ($101=values).__array != 'undefined'?
				((typeof $101.__array[$102=3]) != 'undefined'?$101.__array[$102]:
					$101.__getitem__($102)):
					$101.__getitem__(3))).__array != 'undefined'?
				((typeof $103.__array[$104=1]) != 'undefined'?$103.__array[$104]:
					$103.__getitem__($104)):
					$103.__getitem__(1)), 2);
			self['assertEquals']((typeof ($107=(typeof ($105=values).__array != 'undefined'?
				((typeof $105.__array[$106=3]) != 'undefined'?$105.__array[$106]:
					$105.__getitem__($106)):
					$105.__getitem__(3))).__array != 'undefined'?
				((typeof $107.__array[$108=2]) != 'undefined'?$107.__array[$108]:
					$107.__getitem__($108)):
					$107.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVarargsCall'] = $method;
		$method = $pyjs__bind_method2('testKwargsCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $116,$117,$114,$115,$112,$113,$110,$111,$109,$118,$119,values,$122,$121,$120;
			values = $pyjs_kwargs_call(null, (typeof foo5 == "undefined"?$m.foo5:foo5), null, null, [{x:5, y:7}, 9, 8, 7]);
			self['assertEquals']((typeof ($109=values).__array != 'undefined'?
				((typeof $109.__array[$110=0]) != 'undefined'?$109.__array[$110]:
					$109.__getitem__($110)):
					$109.__getitem__(0)), 9);
			self['assertEquals']((typeof ($111=values).__array != 'undefined'?
				((typeof $111.__array[$112=1]) != 'undefined'?$111.__array[$112]:
					$111.__getitem__($112)):
					$111.__getitem__(1)), 8);
			self['assertEquals']((typeof ($113=values).__array != 'undefined'?
				((typeof $113.__array[$114=2]) != 'undefined'?$113.__array[$114]:
					$113.__getitem__($114)):
					$113.__getitem__(2)), 7);
			self['assertEquals']((typeof ($117=(typeof ($115=values).__array != 'undefined'?
				((typeof $115.__array[$116=3]) != 'undefined'?$115.__array[$116]:
					$115.__getitem__($116)):
					$115.__getitem__(3))).__array != 'undefined'?
				((typeof $117.__array[$118='x']) != 'undefined'?$117.__array[$118]:
					$117.__getitem__($118)):
					$117.__getitem__('x')), 5);
			self['assertEquals']((typeof ($121=(typeof ($119=values).__array != 'undefined'?
				((typeof $119.__array[$120=3]) != 'undefined'?$119.__array[$120]:
					$119.__getitem__($120)):
					$119.__getitem__(3))).__array != 'undefined'?
				((typeof $121.__array[$122='y']) != 'undefined'?$121.__array[$122]:
					$121.__getitem__($122)):
					$121.__getitem__('y')), 7);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargsCall'] = $method;
		$method = $pyjs__bind_method2('testComboCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $138,$139,$130,$131,$132,$133,$134,$135,$136,$137,$145,$127,$126,$143,$124,$129,$128,$148,$123,$144,$147,$146,$141,$140,$125,$142,values;
			values = $pyjs_kwargs_call(null, (typeof foo6 == "undefined"?$m.foo6:foo6), null, null, [{x:4, y:5}, 9, 8, 7, 1, 2, 3]);
			self['assertEquals']((typeof ($123=values).__array != 'undefined'?
				((typeof $123.__array[$124=0]) != 'undefined'?$123.__array[$124]:
					$123.__getitem__($124)):
					$123.__getitem__(0)), 9);
			self['assertEquals']((typeof ($125=values).__array != 'undefined'?
				((typeof $125.__array[$126=1]) != 'undefined'?$125.__array[$126]:
					$125.__getitem__($126)):
					$125.__getitem__(1)), 8);
			self['assertEquals']((typeof ($127=values).__array != 'undefined'?
				((typeof $127.__array[$128=2]) != 'undefined'?$127.__array[$128]:
					$127.__getitem__($128)):
					$127.__getitem__(2)), 7);
			self['assertEquals']((typeof ($131=(typeof ($129=values).__array != 'undefined'?
				((typeof $129.__array[$130=3]) != 'undefined'?$129.__array[$130]:
					$129.__getitem__($130)):
					$129.__getitem__(3))).__array != 'undefined'?
				((typeof $131.__array[$132=0]) != 'undefined'?$131.__array[$132]:
					$131.__getitem__($132)):
					$131.__getitem__(0)), 1);
			self['assertEquals']((typeof ($135=(typeof ($133=values).__array != 'undefined'?
				((typeof $133.__array[$134=3]) != 'undefined'?$133.__array[$134]:
					$133.__getitem__($134)):
					$133.__getitem__(3))).__array != 'undefined'?
				((typeof $135.__array[$136=1]) != 'undefined'?$135.__array[$136]:
					$135.__getitem__($136)):
					$135.__getitem__(1)), 2);
			self['assertEquals']((typeof ($139=(typeof ($137=values).__array != 'undefined'?
				((typeof $137.__array[$138=3]) != 'undefined'?$137.__array[$138]:
					$137.__getitem__($138)):
					$137.__getitem__(3))).__array != 'undefined'?
				((typeof $139.__array[$140=2]) != 'undefined'?$139.__array[$140]:
					$139.__getitem__($140)):
					$139.__getitem__(2)), 3);
			self['assertEquals']((typeof ($143=(typeof ($141=values).__array != 'undefined'?
				((typeof $141.__array[$142=4]) != 'undefined'?$141.__array[$142]:
					$141.__getitem__($142)):
					$141.__getitem__(4))).__array != 'undefined'?
				((typeof $143.__array[$144='x']) != 'undefined'?$143.__array[$144]:
					$143.__getitem__($144)):
					$143.__getitem__('x')), 4);
			self['assertEquals']((typeof ($147=(typeof ($145=values).__array != 'undefined'?
				((typeof $145.__array[$146=4]) != 'undefined'?$145.__array[$146]:
					$145.__getitem__($146)):
					$145.__getitem__(4))).__array != 'undefined'?
				((typeof $147.__array[$148='y']) != 'undefined'?$147.__array[$148]:
					$147.__getitem__($148)):
					$147.__getitem__('y')), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComboCall'] = $method;
		$method = $pyjs__bind_method2('testEdgeCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$167,$166,$165,$164,$163,$162,$161,$160,$168,vaules,values,$149;
			values = $pyjs_kwargs_call(null, (typeof foo7 == "undefined"?$m.foo7:foo7), null, null, [{b:2}, 1, 2, 3]);
			self['assertEqual']((typeof ($149=values).__array != 'undefined'?
				((typeof $149.__array[$150=0]) != 'undefined'?$149.__array[$150]:
					$149.__getitem__($150)):
					$149.__getitem__(0)), 1);
			self['assertEqual']((typeof ($151=values).__array != 'undefined'?
				((typeof $151.__array[$152=1]) != 'undefined'?$151.__array[$152]:
					$151.__getitem__($152)):
					$151.__getitem__(1)), $p['tuple']([2, 3]));
			self['assertEqual']((typeof ($153=values).__array != 'undefined'?
				((typeof $153.__array[$154=2]) != 'undefined'?$153.__array[$154]:
					$153.__getitem__($154)):
					$153.__getitem__(2)), $p['dict']([['b', 2]]));
			values = (typeof foo7 == "undefined"?$m.foo7:foo7)(1, 2, 3, $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($155=values).__array != 'undefined'?
				((typeof $155.__array[$156=0]) != 'undefined'?$155.__array[$156]:
					$155.__getitem__($156)):
					$155.__getitem__(0)), 1);
			self['assertEqual']((typeof ($157=values).__array != 'undefined'?
				((typeof $157.__array[$158=1]) != 'undefined'?$157.__array[$158]:
					$157.__getitem__($158)):
					$157.__getitem__(1)), $p['tuple']([2, 3, $p['dict']([['b', 2]])]));
			self['assertEqual']((typeof ($159=values).__array != 'undefined'?
				((typeof $159.__array[$160=2]) != 'undefined'?$159.__array[$160]:
					$159.__getitem__($160)):
					$159.__getitem__(2)), $p['dict']([]));
			vaules = $pyjs_kwargs_call(null, (typeof foo8 == "undefined"?$m.foo8:foo8), null, null, [{b:2}, 1]);
			self['assertEqual']((typeof ($161=vaules).__array != 'undefined'?
				((typeof $161.__array[$162=0]) != 'undefined'?$161.__array[$162]:
					$161.__getitem__($162)):
					$161.__getitem__(0)), 1);
			self['assertEqual']((typeof ($163=vaules).__array != 'undefined'?
				((typeof $163.__array[$164=1]) != 'undefined'?$163.__array[$164]:
					$163.__getitem__($164)):
					$163.__getitem__(1)), $p['dict']([['b', 2]]));
			vaules = (typeof foo8 == "undefined"?$m.foo8:foo8)($p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($165=vaules).__array != 'undefined'?
				((typeof $165.__array[$166=0]) != 'undefined'?$165.__array[$166]:
					$165.__getitem__($166)):
					$165.__getitem__(0)), $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($167=vaules).__array != 'undefined'?
				((typeof $167.__array[$168=1]) != 'undefined'?$167.__array[$168]:
					$167.__getitem__($168)):
					$167.__getitem__(1)), $p['dict']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEdgeCall'] = $method;
		$method = $pyjs__bind_method2('testSimpleCtorCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $180,$174,$175,$176,$177,$170,$171,$172,$173,values,$178,$179,$169;
			values = $p['getattr']((typeof ArgsTestClass_foo == "undefined"?$m.ArgsTestClass_foo:ArgsTestClass_foo)(1, 2, 3), 'x');
			self['assertEquals']((typeof ($169=values).__array != 'undefined'?
				((typeof $169.__array[$170=0]) != 'undefined'?$169.__array[$170]:
					$169.__getitem__($170)):
					$169.__getitem__(0)), 1);
			self['assertEquals']((typeof ($171=values).__array != 'undefined'?
				((typeof $171.__array[$172=1]) != 'undefined'?$171.__array[$172]:
					$171.__getitem__($172)):
					$171.__getitem__(1)), 2);
			self['assertEquals']((typeof ($173=values).__array != 'undefined'?
				((typeof $173.__array[$174=2]) != 'undefined'?$173.__array[$174]:
					$173.__getitem__($174)):
					$173.__getitem__(2)), 3);
			values = $p['getattr']((typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2)(1, 2, 3), 'x');
			self['assertEquals']((typeof ($175=values).__array != 'undefined'?
				((typeof $175.__array[$176=0]) != 'undefined'?$175.__array[$176]:
					$175.__getitem__($176)):
					$175.__getitem__(0)), 1);
			self['assertEquals']((typeof ($177=values).__array != 'undefined'?
				((typeof $177.__array[$178=1]) != 'undefined'?$177.__array[$178]:
					$177.__getitem__($178)):
					$177.__getitem__(1)), 2);
			self['assertEquals']((typeof ($179=values).__array != 'undefined'?
				((typeof $179.__array[$180=2]) != 'undefined'?$179.__array[$180]:
					$179.__getitem__($180)):
					$179.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSimpleCtorCall'] = $method;
		$method = $pyjs__bind_method2('testKeywordCtorCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $189,$188,$181,$183,$182,$185,$184,$187,$186,$202,$203,$200,$201,$204,values,$198,$199,$196,$197,$194,$195,$192,$193,$190,$191;
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2), null, null, [{c:3, b:2, a:1}]), 'x');
			self['assertEquals']((typeof ($181=values).__array != 'undefined'?
				((typeof $181.__array[$182=0]) != 'undefined'?$181.__array[$182]:
					$181.__getitem__($182)):
					$181.__getitem__(0)), 1);
			self['assertEquals']((typeof ($183=values).__array != 'undefined'?
				((typeof $183.__array[$184=1]) != 'undefined'?$183.__array[$184]:
					$183.__getitem__($184)):
					$183.__getitem__(1)), 2);
			self['assertEquals']((typeof ($185=values).__array != 'undefined'?
				((typeof $185.__array[$186=2]) != 'undefined'?$185.__array[$186]:
					$185.__getitem__($186)):
					$185.__getitem__(2)), 3);
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2), null, null, [{b:2, a:1, c:3}]), 'x');
			self['assertEquals']((typeof ($187=values).__array != 'undefined'?
				((typeof $187.__array[$188=0]) != 'undefined'?$187.__array[$188]:
					$187.__getitem__($188)):
					$187.__getitem__(0)), 1);
			self['assertEquals']((typeof ($189=values).__array != 'undefined'?
				((typeof $189.__array[$190=1]) != 'undefined'?$189.__array[$190]:
					$189.__getitem__($190)):
					$189.__getitem__(1)), 2);
			self['assertEquals']((typeof ($191=values).__array != 'undefined'?
				((typeof $191.__array[$192=2]) != 'undefined'?$191.__array[$192]:
					$191.__getitem__($192)):
					$191.__getitem__(2)), 3);
			values = $p['getattr']((typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2)(), 'x');
			self['assertEquals']((typeof ($193=values).__array != 'undefined'?
				((typeof $193.__array[$194=0]) != 'undefined'?$193.__array[$194]:
					$193.__getitem__($194)):
					$193.__getitem__(0)), null);
			self['assertEquals']((typeof ($195=values).__array != 'undefined'?
				((typeof $195.__array[$196=1]) != 'undefined'?$195.__array[$196]:
					$195.__getitem__($196)):
					$195.__getitem__(1)), null);
			self['assertEquals']((typeof ($197=values).__array != 'undefined'?
				((typeof $197.__array[$198=2]) != 'undefined'?$197.__array[$198]:
					$197.__getitem__($198)):
					$197.__getitem__(2)), null);
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2), null, null, [{c:true}]), 'x');
			self['assertEquals']((typeof ($199=values).__array != 'undefined'?
				((typeof $199.__array[$200=0]) != 'undefined'?$199.__array[$200]:
					$199.__getitem__($200)):
					$199.__getitem__(0)), null);
			self['assertEquals']((typeof ($201=values).__array != 'undefined'?
				((typeof $201.__array[$202=1]) != 'undefined'?$201.__array[$202]:
					$201.__getitem__($202)):
					$201.__getitem__(1)), null);
			self['assertEquals']((typeof ($203=values).__array != 'undefined'?
				((typeof $203.__array[$204=2]) != 'undefined'?$203.__array[$204]:
					$203.__getitem__($204)):
					$203.__getitem__(2)), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordCtorCall'] = $method;
		$method = $pyjs__bind_method2('testDefaultValuesCtorCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $208,$209,$220,$221,$206,$207,$222,$205,$215,$214,$217,$216,values,$210,$213,$212,$211,$219,$218;
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo3 == "undefined"?$m.ArgsTestClass_foo3:ArgsTestClass_foo3), null, null, [{b:7}]), 'x');
			self['assertEquals']((typeof ($205=values).__array != 'undefined'?
				((typeof $205.__array[$206=0]) != 'undefined'?$205.__array[$206]:
					$205.__getitem__($206)):
					$205.__getitem__(0)), 1);
			self['assertEquals']((typeof ($207=values).__array != 'undefined'?
				((typeof $207.__array[$208=1]) != 'undefined'?$207.__array[$208]:
					$207.__getitem__($208)):
					$207.__getitem__(1)), 7);
			self['assertEquals']((typeof ($209=values).__array != 'undefined'?
				((typeof $209.__array[$210=2]) != 'undefined'?$209.__array[$210]:
					$209.__getitem__($210)):
					$209.__getitem__(2)), 3);
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo3 == "undefined"?$m.ArgsTestClass_foo3:ArgsTestClass_foo3), null, null, [{a:9}]), 'x');
			self['assertEquals']((typeof ($211=values).__array != 'undefined'?
				((typeof $211.__array[$212=0]) != 'undefined'?$211.__array[$212]:
					$211.__getitem__($212)):
					$211.__getitem__(0)), 9);
			self['assertEquals']((typeof ($213=values).__array != 'undefined'?
				((typeof $213.__array[$214=1]) != 'undefined'?$213.__array[$214]:
					$213.__getitem__($214)):
					$213.__getitem__(1)), 2);
			self['assertEquals']((typeof ($215=values).__array != 'undefined'?
				((typeof $215.__array[$216=2]) != 'undefined'?$215.__array[$216]:
					$215.__getitem__($216)):
					$215.__getitem__(2)), 3);
			values = $p['getattr']((typeof ArgsTestClass_foo3 == "undefined"?$m.ArgsTestClass_foo3:ArgsTestClass_foo3)(), 'x');
			self['assertEquals']((typeof ($217=values).__array != 'undefined'?
				((typeof $217.__array[$218=0]) != 'undefined'?$217.__array[$218]:
					$217.__getitem__($218)):
					$217.__getitem__(0)), 1);
			self['assertEquals']((typeof ($219=values).__array != 'undefined'?
				((typeof $219.__array[$220=1]) != 'undefined'?$219.__array[$220]:
					$219.__getitem__($220)):
					$219.__getitem__(1)), 2);
			self['assertEquals']((typeof ($221=values).__array != 'undefined'?
				((typeof $221.__array[$222=2]) != 'undefined'?$221.__array[$222]:
					$221.__getitem__($222)):
					$221.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDefaultValuesCtorCall'] = $method;
		$method = $pyjs__bind_method2('testVarargsCtorCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $239,$238,$237,$236,$235,$234,$233,$232,$231,$230,$248,$249,$246,$247,$244,$245,$242,$243,$240,$241,$228,$229,$224,$225,$226,$227,$223,$258,values,$251,$250,$253,$252,$255,$254,$257,$256;
			values = $p['getattr']((typeof ArgsTestClass_foo4 == "undefined"?$m.ArgsTestClass_foo4:ArgsTestClass_foo4)(9, 8, 7, 2, 3, 4), 'x');
			self['assertEquals']((typeof ($223=values).__array != 'undefined'?
				((typeof $223.__array[$224=0]) != 'undefined'?$223.__array[$224]:
					$223.__getitem__($224)):
					$223.__getitem__(0)), 9);
			self['assertEquals']((typeof ($225=values).__array != 'undefined'?
				((typeof $225.__array[$226=1]) != 'undefined'?$225.__array[$226]:
					$225.__getitem__($226)):
					$225.__getitem__(1)), 8);
			self['assertEquals']((typeof ($227=values).__array != 'undefined'?
				((typeof $227.__array[$228=2]) != 'undefined'?$227.__array[$228]:
					$227.__getitem__($228)):
					$227.__getitem__(2)), 7);
			self['assertEquals']((typeof ($231=(typeof ($229=values).__array != 'undefined'?
				((typeof $229.__array[$230=3]) != 'undefined'?$229.__array[$230]:
					$229.__getitem__($230)):
					$229.__getitem__(3))).__array != 'undefined'?
				((typeof $231.__array[$232=0]) != 'undefined'?$231.__array[$232]:
					$231.__getitem__($232)):
					$231.__getitem__(0)), 2);
			self['assertEquals']((typeof ($235=(typeof ($233=values).__array != 'undefined'?
				((typeof $233.__array[$234=3]) != 'undefined'?$233.__array[$234]:
					$233.__getitem__($234)):
					$233.__getitem__(3))).__array != 'undefined'?
				((typeof $235.__array[$236=1]) != 'undefined'?$235.__array[$236]:
					$235.__getitem__($236)):
					$235.__getitem__(1)), 3);
			self['assertEquals']((typeof ($239=(typeof ($237=values).__array != 'undefined'?
				((typeof $237.__array[$238=3]) != 'undefined'?$237.__array[$238]:
					$237.__getitem__($238)):
					$237.__getitem__(3))).__array != 'undefined'?
				((typeof $239.__array[$240=2]) != 'undefined'?$239.__array[$240]:
					$239.__getitem__($240)):
					$239.__getitem__(2)), 4);
			values = $p['getattr']((typeof ArgsTestClass_foo4 == "undefined"?$m.ArgsTestClass_foo4:ArgsTestClass_foo4)(9, 8, 7, 3, 2, 1), 'x');
			self['assertEquals']((typeof ($241=values).__array != 'undefined'?
				((typeof $241.__array[$242=0]) != 'undefined'?$241.__array[$242]:
					$241.__getitem__($242)):
					$241.__getitem__(0)), 9);
			self['assertEquals']((typeof ($243=values).__array != 'undefined'?
				((typeof $243.__array[$244=1]) != 'undefined'?$243.__array[$244]:
					$243.__getitem__($244)):
					$243.__getitem__(1)), 8);
			self['assertEquals']((typeof ($245=values).__array != 'undefined'?
				((typeof $245.__array[$246=2]) != 'undefined'?$245.__array[$246]:
					$245.__getitem__($246)):
					$245.__getitem__(2)), 7);
			self['assertEquals']((typeof ($249=(typeof ($247=values).__array != 'undefined'?
				((typeof $247.__array[$248=3]) != 'undefined'?$247.__array[$248]:
					$247.__getitem__($248)):
					$247.__getitem__(3))).__array != 'undefined'?
				((typeof $249.__array[$250=0]) != 'undefined'?$249.__array[$250]:
					$249.__getitem__($250)):
					$249.__getitem__(0)), 3);
			self['assertEquals']((typeof ($253=(typeof ($251=values).__array != 'undefined'?
				((typeof $251.__array[$252=3]) != 'undefined'?$251.__array[$252]:
					$251.__getitem__($252)):
					$251.__getitem__(3))).__array != 'undefined'?
				((typeof $253.__array[$254=1]) != 'undefined'?$253.__array[$254]:
					$253.__getitem__($254)):
					$253.__getitem__(1)), 2);
			self['assertEquals']((typeof ($257=(typeof ($255=values).__array != 'undefined'?
				((typeof $255.__array[$256=3]) != 'undefined'?$255.__array[$256]:
					$255.__getitem__($256)):
					$255.__getitem__(3))).__array != 'undefined'?
				((typeof $257.__array[$258=2]) != 'undefined'?$257.__array[$258]:
					$257.__getitem__($258)):
					$257.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVarargsCtorCall'] = $method;
		$method = $pyjs__bind_method2('testKwargsCtorCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $260,$272,$269,$259,$261,$262,$263,values,$265,$266,$267,$268,$264,$270,$271;
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo5 == "undefined"?$m.ArgsTestClass_foo5:ArgsTestClass_foo5), null, null, [{x:5, y:7}, 9, 8, 7]), 'x');
			self['assertEquals']((typeof ($259=values).__array != 'undefined'?
				((typeof $259.__array[$260=0]) != 'undefined'?$259.__array[$260]:
					$259.__getitem__($260)):
					$259.__getitem__(0)), 9);
			self['assertEquals']((typeof ($261=values).__array != 'undefined'?
				((typeof $261.__array[$262=1]) != 'undefined'?$261.__array[$262]:
					$261.__getitem__($262)):
					$261.__getitem__(1)), 8);
			self['assertEquals']((typeof ($263=values).__array != 'undefined'?
				((typeof $263.__array[$264=2]) != 'undefined'?$263.__array[$264]:
					$263.__getitem__($264)):
					$263.__getitem__(2)), 7);
			self['assertEquals']((typeof ($267=(typeof ($265=values).__array != 'undefined'?
				((typeof $265.__array[$266=3]) != 'undefined'?$265.__array[$266]:
					$265.__getitem__($266)):
					$265.__getitem__(3))).__array != 'undefined'?
				((typeof $267.__array[$268='x']) != 'undefined'?$267.__array[$268]:
					$267.__getitem__($268)):
					$267.__getitem__('x')), 5);
			self['assertEquals']((typeof ($271=(typeof ($269=values).__array != 'undefined'?
				((typeof $269.__array[$270=3]) != 'undefined'?$269.__array[$270]:
					$269.__getitem__($270)):
					$269.__getitem__(3))).__array != 'undefined'?
				((typeof $271.__array[$272='y']) != 'undefined'?$271.__array[$272]:
					$271.__getitem__($272)):
					$271.__getitem__('y')), 7);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargsCtorCall'] = $method;
		$method = $pyjs__bind_method2('testComboCtorCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $298,$295,$294,$297,$296,$291,$290,$293,$292,$277,$282,$283,$280,$281,$286,$287,$284,$285,$288,$289,$273,values,$276,$275,$274,$279,$278;
			values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo6 == "undefined"?$m.ArgsTestClass_foo6:ArgsTestClass_foo6), null, null, [{x:4, y:5}, 9, 8, 7, 1, 2, 3]), 'x');
			self['assertEquals']((typeof ($273=values).__array != 'undefined'?
				((typeof $273.__array[$274=0]) != 'undefined'?$273.__array[$274]:
					$273.__getitem__($274)):
					$273.__getitem__(0)), 9);
			self['assertEquals']((typeof ($275=values).__array != 'undefined'?
				((typeof $275.__array[$276=1]) != 'undefined'?$275.__array[$276]:
					$275.__getitem__($276)):
					$275.__getitem__(1)), 8);
			self['assertEquals']((typeof ($277=values).__array != 'undefined'?
				((typeof $277.__array[$278=2]) != 'undefined'?$277.__array[$278]:
					$277.__getitem__($278)):
					$277.__getitem__(2)), 7);
			self['assertEquals']((typeof ($281=(typeof ($279=values).__array != 'undefined'?
				((typeof $279.__array[$280=3]) != 'undefined'?$279.__array[$280]:
					$279.__getitem__($280)):
					$279.__getitem__(3))).__array != 'undefined'?
				((typeof $281.__array[$282=0]) != 'undefined'?$281.__array[$282]:
					$281.__getitem__($282)):
					$281.__getitem__(0)), 1);
			self['assertEquals']((typeof ($285=(typeof ($283=values).__array != 'undefined'?
				((typeof $283.__array[$284=3]) != 'undefined'?$283.__array[$284]:
					$283.__getitem__($284)):
					$283.__getitem__(3))).__array != 'undefined'?
				((typeof $285.__array[$286=1]) != 'undefined'?$285.__array[$286]:
					$285.__getitem__($286)):
					$285.__getitem__(1)), 2);
			self['assertEquals']((typeof ($289=(typeof ($287=values).__array != 'undefined'?
				((typeof $287.__array[$288=3]) != 'undefined'?$287.__array[$288]:
					$287.__getitem__($288)):
					$287.__getitem__(3))).__array != 'undefined'?
				((typeof $289.__array[$290=2]) != 'undefined'?$289.__array[$290]:
					$289.__getitem__($290)):
					$289.__getitem__(2)), 3);
			self['assertEquals']((typeof ($293=(typeof ($291=values).__array != 'undefined'?
				((typeof $291.__array[$292=4]) != 'undefined'?$291.__array[$292]:
					$291.__getitem__($292)):
					$291.__getitem__(4))).__array != 'undefined'?
				((typeof $293.__array[$294='x']) != 'undefined'?$293.__array[$294]:
					$293.__getitem__($294)):
					$293.__getitem__('x')), 4);
			self['assertEquals']((typeof ($297=(typeof ($295=values).__array != 'undefined'?
				((typeof $295.__array[$296=4]) != 'undefined'?$295.__array[$296]:
					$295.__getitem__($296)):
					$295.__getitem__(4))).__array != 'undefined'?
				((typeof $297.__array[$298='y']) != 'undefined'?$297.__array[$298]:
					$297.__getitem__($298)):
					$297.__getitem__('y')), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComboCtorCall'] = $method;
		$method = $pyjs__bind_method2('testSimpleMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $310,$307,$303,$302,$301,$300,$299,$306,$305,$304,values,$309,$308;
			values = $m.ArgsTestClass()['foo'](1, 2, 3);
			self['assertEquals']((typeof ($299=values).__array != 'undefined'?
				((typeof $299.__array[$300=0]) != 'undefined'?$299.__array[$300]:
					$299.__getitem__($300)):
					$299.__getitem__(0)), 1);
			self['assertEquals']((typeof ($301=values).__array != 'undefined'?
				((typeof $301.__array[$302=1]) != 'undefined'?$301.__array[$302]:
					$301.__getitem__($302)):
					$301.__getitem__(1)), 2);
			self['assertEquals']((typeof ($303=values).__array != 'undefined'?
				((typeof $303.__array[$304=2]) != 'undefined'?$303.__array[$304]:
					$303.__getitem__($304)):
					$303.__getitem__(2)), 3);
			values = $m.ArgsTestClass()['foo2'](1, 2, 3);
			self['assertEquals']((typeof ($305=values).__array != 'undefined'?
				((typeof $305.__array[$306=0]) != 'undefined'?$305.__array[$306]:
					$305.__getitem__($306)):
					$305.__getitem__(0)), 1);
			self['assertEquals']((typeof ($307=values).__array != 'undefined'?
				((typeof $307.__array[$308=1]) != 'undefined'?$307.__array[$308]:
					$307.__getitem__($308)):
					$307.__getitem__(1)), 2);
			self['assertEquals']((typeof ($309=values).__array != 'undefined'?
				((typeof $309.__array[$310=2]) != 'undefined'?$309.__array[$310]:
					$309.__getitem__($310)):
					$309.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSimpleMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKeywordMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $329,$328,$314,$321,$320,$323,$322,$325,$324,$327,$326,$311,$312,$313,values,$315,$316,$317,$318,$319,$334,$332,$333,$330,$331;
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo2', null, null, [{c:3, b:2, a:1}]);
			self['assertEquals']((typeof ($311=values).__array != 'undefined'?
				((typeof $311.__array[$312=0]) != 'undefined'?$311.__array[$312]:
					$311.__getitem__($312)):
					$311.__getitem__(0)), 1);
			self['assertEquals']((typeof ($313=values).__array != 'undefined'?
				((typeof $313.__array[$314=1]) != 'undefined'?$313.__array[$314]:
					$313.__getitem__($314)):
					$313.__getitem__(1)), 2);
			self['assertEquals']((typeof ($315=values).__array != 'undefined'?
				((typeof $315.__array[$316=2]) != 'undefined'?$315.__array[$316]:
					$315.__getitem__($316)):
					$315.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo2', null, null, [{b:2, a:1, c:3}]);
			self['assertEquals']((typeof ($317=values).__array != 'undefined'?
				((typeof $317.__array[$318=0]) != 'undefined'?$317.__array[$318]:
					$317.__getitem__($318)):
					$317.__getitem__(0)), 1);
			self['assertEquals']((typeof ($319=values).__array != 'undefined'?
				((typeof $319.__array[$320=1]) != 'undefined'?$319.__array[$320]:
					$319.__getitem__($320)):
					$319.__getitem__(1)), 2);
			self['assertEquals']((typeof ($321=values).__array != 'undefined'?
				((typeof $321.__array[$322=2]) != 'undefined'?$321.__array[$322]:
					$321.__getitem__($322)):
					$321.__getitem__(2)), 3);
			values = $m.ArgsTestClass()['foo2']();
			self['assertEquals']((typeof ($323=values).__array != 'undefined'?
				((typeof $323.__array[$324=0]) != 'undefined'?$323.__array[$324]:
					$323.__getitem__($324)):
					$323.__getitem__(0)), null);
			self['assertEquals']((typeof ($325=values).__array != 'undefined'?
				((typeof $325.__array[$326=1]) != 'undefined'?$325.__array[$326]:
					$325.__getitem__($326)):
					$325.__getitem__(1)), null);
			self['assertEquals']((typeof ($327=values).__array != 'undefined'?
				((typeof $327.__array[$328=2]) != 'undefined'?$327.__array[$328]:
					$327.__getitem__($328)):
					$327.__getitem__(2)), null);
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo2', null, null, [{c:true}]);
			self['assertEquals']((typeof ($329=values).__array != 'undefined'?
				((typeof $329.__array[$330=0]) != 'undefined'?$329.__array[$330]:
					$329.__getitem__($330)):
					$329.__getitem__(0)), null);
			self['assertEquals']((typeof ($331=values).__array != 'undefined'?
				((typeof $331.__array[$332=1]) != 'undefined'?$331.__array[$332]:
					$331.__getitem__($332)):
					$331.__getitem__(1)), null);
			self['assertEquals']((typeof ($333=values).__array != 'undefined'?
				((typeof $333.__array[$334=2]) != 'undefined'?$333.__array[$334]:
					$333.__getitem__($334)):
					$333.__getitem__(2)), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordMethodCall'] = $method;
		$method = $pyjs__bind_method2('testDefaultValuesMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $349,$348,$347,$346,$344,$343,$342,$341,$340,$351,values,$352,$338,$339,$336,$337,$350,$335,$345;
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo3', null, null, [{b:7}]);
			self['assertEquals']((typeof ($335=values).__array != 'undefined'?
				((typeof $335.__array[$336=0]) != 'undefined'?$335.__array[$336]:
					$335.__getitem__($336)):
					$335.__getitem__(0)), 1);
			self['assertEquals']((typeof ($337=values).__array != 'undefined'?
				((typeof $337.__array[$338=1]) != 'undefined'?$337.__array[$338]:
					$337.__getitem__($338)):
					$337.__getitem__(1)), 7);
			self['assertEquals']((typeof ($339=values).__array != 'undefined'?
				((typeof $339.__array[$340=2]) != 'undefined'?$339.__array[$340]:
					$339.__getitem__($340)):
					$339.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo3', null, null, [{a:9}]);
			self['assertEquals']((typeof ($341=values).__array != 'undefined'?
				((typeof $341.__array[$342=0]) != 'undefined'?$341.__array[$342]:
					$341.__getitem__($342)):
					$341.__getitem__(0)), 9);
			self['assertEquals']((typeof ($343=values).__array != 'undefined'?
				((typeof $343.__array[$344=1]) != 'undefined'?$343.__array[$344]:
					$343.__getitem__($344)):
					$343.__getitem__(1)), 2);
			self['assertEquals']((typeof ($345=values).__array != 'undefined'?
				((typeof $345.__array[$346=2]) != 'undefined'?$345.__array[$346]:
					$345.__getitem__($346)):
					$345.__getitem__(2)), 3);
			values = $m.ArgsTestClass()['foo3']();
			self['assertEquals']((typeof ($347=values).__array != 'undefined'?
				((typeof $347.__array[$348=0]) != 'undefined'?$347.__array[$348]:
					$347.__getitem__($348)):
					$347.__getitem__(0)), 1);
			self['assertEquals']((typeof ($349=values).__array != 'undefined'?
				((typeof $349.__array[$350=1]) != 'undefined'?$349.__array[$350]:
					$349.__getitem__($350)):
					$349.__getitem__(1)), 2);
			self['assertEquals']((typeof ($351=values).__array != 'undefined'?
				((typeof $351.__array[$352=2]) != 'undefined'?$351.__array[$352]:
					$351.__getitem__($352)):
					$351.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDefaultValuesMethodCall'] = $method;
		$method = $pyjs__bind_method2('testVarargsMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $358,$359,$354,$355,$357,$353,$364,values,$360,$363,$362,$361,$356;
			values = $m.ArgsTestClass()['foo4'](1, 2, 3);
			self['assertEquals']((typeof ($353=values).__array != 'undefined'?
				((typeof $353.__array[$354=0]) != 'undefined'?$353.__array[$354]:
					$353.__getitem__($354)):
					$353.__getitem__(0)), 1);
			self['assertEquals']((typeof ($355=values).__array != 'undefined'?
				((typeof $355.__array[$356=1]) != 'undefined'?$355.__array[$356]:
					$355.__getitem__($356)):
					$355.__getitem__(1)), 2);
			self['assertEquals']((typeof ($357=values).__array != 'undefined'?
				((typeof $357.__array[$358=2]) != 'undefined'?$357.__array[$358]:
					$357.__getitem__($358)):
					$357.__getitem__(2)), 3);
			values = $m.ArgsTestClass()['foo4'](3, 2, 1);
			self['assertEquals']((typeof ($359=values).__array != 'undefined'?
				((typeof $359.__array[$360=0]) != 'undefined'?$359.__array[$360]:
					$359.__getitem__($360)):
					$359.__getitem__(0)), 3);
			self['assertEquals']((typeof ($361=values).__array != 'undefined'?
				((typeof $361.__array[$362=1]) != 'undefined'?$361.__array[$362]:
					$361.__getitem__($362)):
					$361.__getitem__(1)), 2);
			self['assertEquals']((typeof ($363=values).__array != 'undefined'?
				((typeof $363.__array[$364=2]) != 'undefined'?$363.__array[$364]:
					$363.__getitem__($364)):
					$363.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVarargsMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKwargsMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $365,$367,$366,values,$368;
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo5', null, null, [{x:5, y:7}]);
			self['assertEquals']((typeof ($365=values).__array != 'undefined'?
				((typeof $365.__array[$366='x']) != 'undefined'?$365.__array[$366]:
					$365.__getitem__($366)):
					$365.__getitem__('x')), 5);
			self['assertEquals']((typeof ($367=values).__array != 'undefined'?
				((typeof $367.__array[$368='y']) != 'undefined'?$367.__array[$368]:
					$367.__getitem__($368)):
					$367.__getitem__('y')), 7);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargsMethodCall'] = $method;
		$method = $pyjs__bind_method2('testComboMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $378,$379,$372,$373,$370,$371,$376,$377,$374,$375,$369,$388,$383,$382,$381,$380,$387,$386,$385,$384,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo6', null, null, [{x:4, y:5}, 1, 2, 3]);
			self['assertEquals']((typeof ($371=(typeof ($369=values).__array != 'undefined'?
				((typeof $369.__array[$370=0]) != 'undefined'?$369.__array[$370]:
					$369.__getitem__($370)):
					$369.__getitem__(0))).__array != 'undefined'?
				((typeof $371.__array[$372=0]) != 'undefined'?$371.__array[$372]:
					$371.__getitem__($372)):
					$371.__getitem__(0)), 1);
			self['assertEquals']((typeof ($375=(typeof ($373=values).__array != 'undefined'?
				((typeof $373.__array[$374=0]) != 'undefined'?$373.__array[$374]:
					$373.__getitem__($374)):
					$373.__getitem__(0))).__array != 'undefined'?
				((typeof $375.__array[$376=1]) != 'undefined'?$375.__array[$376]:
					$375.__getitem__($376)):
					$375.__getitem__(1)), 2);
			self['assertEquals']((typeof ($379=(typeof ($377=values).__array != 'undefined'?
				((typeof $377.__array[$378=0]) != 'undefined'?$377.__array[$378]:
					$377.__getitem__($378)):
					$377.__getitem__(0))).__array != 'undefined'?
				((typeof $379.__array[$380=2]) != 'undefined'?$379.__array[$380]:
					$379.__getitem__($380)):
					$379.__getitem__(2)), 3);
			self['assertEquals']((typeof ($383=(typeof ($381=values).__array != 'undefined'?
				((typeof $381.__array[$382=1]) != 'undefined'?$381.__array[$382]:
					$381.__getitem__($382)):
					$381.__getitem__(1))).__array != 'undefined'?
				((typeof $383.__array[$384='x']) != 'undefined'?$383.__array[$384]:
					$383.__getitem__($384)):
					$383.__getitem__('x')), 4);
			self['assertEquals']((typeof ($387=(typeof ($385=values).__array != 'undefined'?
				((typeof $385.__array[$386=1]) != 'undefined'?$385.__array[$386]:
					$385.__getitem__($386)):
					$385.__getitem__(1))).__array != 'undefined'?
				((typeof $387.__array[$388='y']) != 'undefined'?$387.__array[$388]:
					$387.__getitem__($388)):
					$387.__getitem__('y')), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComboMethodCall'] = $method;
		$method = $pyjs__bind_method2('testEdgeMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $398,$399,$408,$392,$391,$404,$405,$406,$407,$400,$401,$402,$403,$393,$394,$395,$396,$397,$389,$390,vaules,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo7', null, null, [{b:2}, 1, 2, 3]);
			self['assertEqual']((typeof ($389=values).__array != 'undefined'?
				((typeof $389.__array[$390=0]) != 'undefined'?$389.__array[$390]:
					$389.__getitem__($390)):
					$389.__getitem__(0)), 1);
			self['assertEqual']((typeof ($391=values).__array != 'undefined'?
				((typeof $391.__array[$392=1]) != 'undefined'?$391.__array[$392]:
					$391.__getitem__($392)):
					$391.__getitem__(1)), $p['tuple']([2, 3]));
			self['assertEqual']((typeof ($393=values).__array != 'undefined'?
				((typeof $393.__array[$394=2]) != 'undefined'?$393.__array[$394]:
					$393.__getitem__($394)):
					$393.__getitem__(2)), $p['dict']([['b', 2]]));
			values = $m.ArgsTestClass()['foo7'](1, 2, 3, $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($395=values).__array != 'undefined'?
				((typeof $395.__array[$396=0]) != 'undefined'?$395.__array[$396]:
					$395.__getitem__($396)):
					$395.__getitem__(0)), 1);
			self['assertEqual']((typeof ($397=values).__array != 'undefined'?
				((typeof $397.__array[$398=1]) != 'undefined'?$397.__array[$398]:
					$397.__getitem__($398)):
					$397.__getitem__(1)), $p['tuple']([2, 3, $p['dict']([['b', 2]])]));
			self['assertEqual']((typeof ($399=values).__array != 'undefined'?
				((typeof $399.__array[$400=2]) != 'undefined'?$399.__array[$400]:
					$399.__getitem__($400)):
					$399.__getitem__(2)), $p['dict']([]));
			vaules = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo8', null, null, [{b:2}, 1]);
			self['assertEqual']((typeof ($401=vaules).__array != 'undefined'?
				((typeof $401.__array[$402=0]) != 'undefined'?$401.__array[$402]:
					$401.__getitem__($402)):
					$401.__getitem__(0)), 1);
			self['assertEqual']((typeof ($403=vaules).__array != 'undefined'?
				((typeof $403.__array[$404=1]) != 'undefined'?$403.__array[$404]:
					$403.__getitem__($404)):
					$403.__getitem__(1)), $p['dict']([['b', 2]]));
			vaules = $m.ArgsTestClass()['foo8']($p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($405=vaules).__array != 'undefined'?
				((typeof $405.__array[$406=0]) != 'undefined'?$405.__array[$406]:
					$405.__getitem__($406)):
					$405.__getitem__(0)), $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($407=vaules).__array != 'undefined'?
				((typeof $407.__array[$408=1]) != 'undefined'?$407.__array[$408]:
					$407.__getitem__($408)):
					$407.__getitem__(1)), $p['dict']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEdgeMethodCall'] = $method;
		$method = $pyjs__bind_method2('testSimpleStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $420,values,$409,$419,$418,$417,$416,$415,$414,$413,$412,$411,$410;
			values = $m.ArgsTestClass2['foo'](1, 2, 3);
			self['assertEquals']((typeof ($409=values).__array != 'undefined'?
				((typeof $409.__array[$410=0]) != 'undefined'?$409.__array[$410]:
					$409.__getitem__($410)):
					$409.__getitem__(0)), 1);
			self['assertEquals']((typeof ($411=values).__array != 'undefined'?
				((typeof $411.__array[$412=1]) != 'undefined'?$411.__array[$412]:
					$411.__getitem__($412)):
					$411.__getitem__(1)), 2);
			self['assertEquals']((typeof ($413=values).__array != 'undefined'?
				((typeof $413.__array[$414=2]) != 'undefined'?$413.__array[$414]:
					$413.__getitem__($414)):
					$413.__getitem__(2)), 3);
			values = $m.ArgsTestClass2['foo2'](1, 2, 3);
			self['assertEquals']((typeof ($415=values).__array != 'undefined'?
				((typeof $415.__array[$416=0]) != 'undefined'?$415.__array[$416]:
					$415.__getitem__($416)):
					$415.__getitem__(0)), 1);
			self['assertEquals']((typeof ($417=values).__array != 'undefined'?
				((typeof $417.__array[$418=1]) != 'undefined'?$417.__array[$418]:
					$417.__getitem__($418)):
					$417.__getitem__(1)), 2);
			self['assertEquals']((typeof ($419=values).__array != 'undefined'?
				((typeof $419.__array[$420=2]) != 'undefined'?$419.__array[$420]:
					$419.__getitem__($420)):
					$419.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSimpleStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKeywordStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $440,$441,$442,$443,$444,$428,$429,$422,$423,$421,$426,$427,$424,$425,$435,$434,$437,$436,$431,$430,$433,$432,$439,$438,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo2', null, null, [{c:3, b:2, a:1}]);
			self['assertEquals']((typeof ($421=values).__array != 'undefined'?
				((typeof $421.__array[$422=0]) != 'undefined'?$421.__array[$422]:
					$421.__getitem__($422)):
					$421.__getitem__(0)), 1);
			self['assertEquals']((typeof ($423=values).__array != 'undefined'?
				((typeof $423.__array[$424=1]) != 'undefined'?$423.__array[$424]:
					$423.__getitem__($424)):
					$423.__getitem__(1)), 2);
			self['assertEquals']((typeof ($425=values).__array != 'undefined'?
				((typeof $425.__array[$426=2]) != 'undefined'?$425.__array[$426]:
					$425.__getitem__($426)):
					$425.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo2', null, null, [{b:2, a:1, c:3}]);
			self['assertEquals']((typeof ($427=values).__array != 'undefined'?
				((typeof $427.__array[$428=0]) != 'undefined'?$427.__array[$428]:
					$427.__getitem__($428)):
					$427.__getitem__(0)), 1);
			self['assertEquals']((typeof ($429=values).__array != 'undefined'?
				((typeof $429.__array[$430=1]) != 'undefined'?$429.__array[$430]:
					$429.__getitem__($430)):
					$429.__getitem__(1)), 2);
			self['assertEquals']((typeof ($431=values).__array != 'undefined'?
				((typeof $431.__array[$432=2]) != 'undefined'?$431.__array[$432]:
					$431.__getitem__($432)):
					$431.__getitem__(2)), 3);
			values = $m.ArgsTestClass2['foo2']();
			self['assertEquals']((typeof ($433=values).__array != 'undefined'?
				((typeof $433.__array[$434=0]) != 'undefined'?$433.__array[$434]:
					$433.__getitem__($434)):
					$433.__getitem__(0)), null);
			self['assertEquals']((typeof ($435=values).__array != 'undefined'?
				((typeof $435.__array[$436=1]) != 'undefined'?$435.__array[$436]:
					$435.__getitem__($436)):
					$435.__getitem__(1)), null);
			self['assertEquals']((typeof ($437=values).__array != 'undefined'?
				((typeof $437.__array[$438=2]) != 'undefined'?$437.__array[$438]:
					$437.__getitem__($438)):
					$437.__getitem__(2)), null);
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo2', null, null, [{c:true}]);
			self['assertEquals']((typeof ($439=values).__array != 'undefined'?
				((typeof $439.__array[$440=0]) != 'undefined'?$439.__array[$440]:
					$439.__getitem__($440)):
					$439.__getitem__(0)), null);
			self['assertEquals']((typeof ($441=values).__array != 'undefined'?
				((typeof $441.__array[$442=1]) != 'undefined'?$441.__array[$442]:
					$441.__getitem__($442)):
					$441.__getitem__(1)), null);
			self['assertEquals']((typeof ($443=values).__array != 'undefined'?
				((typeof $443.__array[$444=2]) != 'undefined'?$443.__array[$444]:
					$443.__getitem__($444)):
					$443.__getitem__(2)), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testDefaultValuesStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $453,$452,$451,$450,$457,$445,$446,$447,$448,$449,$454,$462,$460,$455,values,$461,$459,$458,$456;
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo3', null, null, [{b:7}]);
			self['assertEquals']((typeof ($445=values).__array != 'undefined'?
				((typeof $445.__array[$446=0]) != 'undefined'?$445.__array[$446]:
					$445.__getitem__($446)):
					$445.__getitem__(0)), 1);
			self['assertEquals']((typeof ($447=values).__array != 'undefined'?
				((typeof $447.__array[$448=1]) != 'undefined'?$447.__array[$448]:
					$447.__getitem__($448)):
					$447.__getitem__(1)), 7);
			self['assertEquals']((typeof ($449=values).__array != 'undefined'?
				((typeof $449.__array[$450=2]) != 'undefined'?$449.__array[$450]:
					$449.__getitem__($450)):
					$449.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo3', null, null, [{a:9}]);
			self['assertEquals']((typeof ($451=values).__array != 'undefined'?
				((typeof $451.__array[$452=0]) != 'undefined'?$451.__array[$452]:
					$451.__getitem__($452)):
					$451.__getitem__(0)), 9);
			self['assertEquals']((typeof ($453=values).__array != 'undefined'?
				((typeof $453.__array[$454=1]) != 'undefined'?$453.__array[$454]:
					$453.__getitem__($454)):
					$453.__getitem__(1)), 2);
			self['assertEquals']((typeof ($455=values).__array != 'undefined'?
				((typeof $455.__array[$456=2]) != 'undefined'?$455.__array[$456]:
					$455.__getitem__($456)):
					$455.__getitem__(2)), 3);
			values = $m.ArgsTestClass2['foo3']();
			self['assertEquals']((typeof ($457=values).__array != 'undefined'?
				((typeof $457.__array[$458=0]) != 'undefined'?$457.__array[$458]:
					$457.__getitem__($458)):
					$457.__getitem__(0)), 1);
			self['assertEquals']((typeof ($459=values).__array != 'undefined'?
				((typeof $459.__array[$460=1]) != 'undefined'?$459.__array[$460]:
					$459.__getitem__($460)):
					$459.__getitem__(1)), 2);
			self['assertEquals']((typeof ($461=values).__array != 'undefined'?
				((typeof $461.__array[$462=2]) != 'undefined'?$461.__array[$462]:
					$461.__getitem__($462)):
					$461.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDefaultValuesStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testVarargsStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $472,$473,$468,$469,$466,$467,$465,$463,$474,$471,values,$470,$464;
			values = $m.ArgsTestClass2['foo4'](1, 2, 3);
			self['assertEquals']((typeof ($463=values).__array != 'undefined'?
				((typeof $463.__array[$464=0]) != 'undefined'?$463.__array[$464]:
					$463.__getitem__($464)):
					$463.__getitem__(0)), 1);
			self['assertEquals']((typeof ($465=values).__array != 'undefined'?
				((typeof $465.__array[$466=1]) != 'undefined'?$465.__array[$466]:
					$465.__getitem__($466)):
					$465.__getitem__(1)), 2);
			self['assertEquals']((typeof ($467=values).__array != 'undefined'?
				((typeof $467.__array[$468=2]) != 'undefined'?$467.__array[$468]:
					$467.__getitem__($468)):
					$467.__getitem__(2)), 3);
			values = $m.ArgsTestClass2['foo4'](3, 2, 1);
			self['assertEquals']((typeof ($469=values).__array != 'undefined'?
				((typeof $469.__array[$470=0]) != 'undefined'?$469.__array[$470]:
					$469.__getitem__($470)):
					$469.__getitem__(0)), 3);
			self['assertEquals']((typeof ($471=values).__array != 'undefined'?
				((typeof $471.__array[$472=1]) != 'undefined'?$471.__array[$472]:
					$471.__getitem__($472)):
					$471.__getitem__(1)), 2);
			self['assertEquals']((typeof ($473=values).__array != 'undefined'?
				((typeof $473.__array[$474=2]) != 'undefined'?$473.__array[$474]:
					$473.__getitem__($474)):
					$473.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVarargsStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKwargsStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $478,$475,$477,$476,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo5', null, null, [{x:5, y:7}]);
			self['assertEquals']((typeof ($475=values).__array != 'undefined'?
				((typeof $475.__array[$476='x']) != 'undefined'?$475.__array[$476]:
					$475.__getitem__($476)):
					$475.__getitem__('x')), 5);
			self['assertEquals']((typeof ($477=values).__array != 'undefined'?
				((typeof $477.__array[$478='y']) != 'undefined'?$477.__array[$478]:
					$477.__getitem__($478)):
					$477.__getitem__('y')), 7);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargsStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testComboStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $484,$485,$486,$487,$480,$481,$482,$483,$488,$489,$479,$497,$496,$495,$494,$493,$492,$491,$490,$498,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo6', null, null, [{x:4, y:5}, 1, 2, 3]);
			self['assertEquals']((typeof ($481=(typeof ($479=values).__array != 'undefined'?
				((typeof $479.__array[$480=0]) != 'undefined'?$479.__array[$480]:
					$479.__getitem__($480)):
					$479.__getitem__(0))).__array != 'undefined'?
				((typeof $481.__array[$482=0]) != 'undefined'?$481.__array[$482]:
					$481.__getitem__($482)):
					$481.__getitem__(0)), 1);
			self['assertEquals']((typeof ($485=(typeof ($483=values).__array != 'undefined'?
				((typeof $483.__array[$484=0]) != 'undefined'?$483.__array[$484]:
					$483.__getitem__($484)):
					$483.__getitem__(0))).__array != 'undefined'?
				((typeof $485.__array[$486=1]) != 'undefined'?$485.__array[$486]:
					$485.__getitem__($486)):
					$485.__getitem__(1)), 2);
			self['assertEquals']((typeof ($489=(typeof ($487=values).__array != 'undefined'?
				((typeof $487.__array[$488=0]) != 'undefined'?$487.__array[$488]:
					$487.__getitem__($488)):
					$487.__getitem__(0))).__array != 'undefined'?
				((typeof $489.__array[$490=2]) != 'undefined'?$489.__array[$490]:
					$489.__getitem__($490)):
					$489.__getitem__(2)), 3);
			self['assertEquals']((typeof ($493=(typeof ($491=values).__array != 'undefined'?
				((typeof $491.__array[$492=1]) != 'undefined'?$491.__array[$492]:
					$491.__getitem__($492)):
					$491.__getitem__(1))).__array != 'undefined'?
				((typeof $493.__array[$494='x']) != 'undefined'?$493.__array[$494]:
					$493.__getitem__($494)):
					$493.__getitem__('x')), 4);
			self['assertEquals']((typeof ($497=(typeof ($495=values).__array != 'undefined'?
				((typeof $495.__array[$496=1]) != 'undefined'?$495.__array[$496]:
					$495.__getitem__($496)):
					$495.__getitem__(1))).__array != 'undefined'?
				((typeof $497.__array[$498='y']) != 'undefined'?$497.__array[$498]:
					$497.__getitem__($498)):
					$497.__getitem__('y')), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComboStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testEdgeStaticMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $505,$504,$507,$506,$501,$500,$503,$502,$509,$508,$518,$512,$513,$510,$511,$516,$517,$514,$515,$499,vaules,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo7', null, null, [{b:2}, 1, 2, 3]);
			self['assertEqual']((typeof ($499=values).__array != 'undefined'?
				((typeof $499.__array[$500=0]) != 'undefined'?$499.__array[$500]:
					$499.__getitem__($500)):
					$499.__getitem__(0)), 1);
			self['assertEqual']((typeof ($501=values).__array != 'undefined'?
				((typeof $501.__array[$502=1]) != 'undefined'?$501.__array[$502]:
					$501.__getitem__($502)):
					$501.__getitem__(1)), $p['tuple']([2, 3]));
			self['assertEqual']((typeof ($503=values).__array != 'undefined'?
				((typeof $503.__array[$504=2]) != 'undefined'?$503.__array[$504]:
					$503.__getitem__($504)):
					$503.__getitem__(2)), $p['dict']([['b', 2]]));
			values = $m.ArgsTestClass2['foo7'](1, 2, 3, $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($505=values).__array != 'undefined'?
				((typeof $505.__array[$506=0]) != 'undefined'?$505.__array[$506]:
					$505.__getitem__($506)):
					$505.__getitem__(0)), 1);
			self['assertEqual']((typeof ($507=values).__array != 'undefined'?
				((typeof $507.__array[$508=1]) != 'undefined'?$507.__array[$508]:
					$507.__getitem__($508)):
					$507.__getitem__(1)), $p['tuple']([2, 3, $p['dict']([['b', 2]])]));
			self['assertEqual']((typeof ($509=values).__array != 'undefined'?
				((typeof $509.__array[$510=2]) != 'undefined'?$509.__array[$510]:
					$509.__getitem__($510)):
					$509.__getitem__(2)), $p['dict']([]));
			vaules = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo8', null, null, [{b:2}, 1]);
			self['assertEqual']((typeof ($511=vaules).__array != 'undefined'?
				((typeof $511.__array[$512=0]) != 'undefined'?$511.__array[$512]:
					$511.__getitem__($512)):
					$511.__getitem__(0)), 1);
			self['assertEqual']((typeof ($513=vaules).__array != 'undefined'?
				((typeof $513.__array[$514=1]) != 'undefined'?$513.__array[$514]:
					$513.__getitem__($514)):
					$513.__getitem__(1)), $p['dict']([['b', 2]]));
			vaules = $m.ArgsTestClass2['foo8']($p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($515=vaules).__array != 'undefined'?
				((typeof $515.__array[$516=0]) != 'undefined'?$515.__array[$516]:
					$515.__getitem__($516)):
					$515.__getitem__(0)), $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($517=vaules).__array != 'undefined'?
				((typeof $517.__array[$518=1]) != 'undefined'?$517.__array[$518]:
					$517.__getitem__($518)):
					$517.__getitem__(1)), $p['dict']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEdgeStaticMethodCall'] = $method;
		$method = $pyjs__bind_method2('testSimpleClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $530,$519,values,$529,$528,$527,$526,$525,$524,$523,$522,$521,$520;
			values = $m.ArgsTestClass3['foo'](1, 2, 3);
			self['assertEquals']((typeof ($519=values).__array != 'undefined'?
				((typeof $519.__array[$520=0]) != 'undefined'?$519.__array[$520]:
					$519.__getitem__($520)):
					$519.__getitem__(0)), 1);
			self['assertEquals']((typeof ($521=values).__array != 'undefined'?
				((typeof $521.__array[$522=1]) != 'undefined'?$521.__array[$522]:
					$521.__getitem__($522)):
					$521.__getitem__(1)), 2);
			self['assertEquals']((typeof ($523=values).__array != 'undefined'?
				((typeof $523.__array[$524=2]) != 'undefined'?$523.__array[$524]:
					$523.__getitem__($524)):
					$523.__getitem__(2)), 3);
			values = $m.ArgsTestClass3['foo2'](1, 2, 3);
			self['assertEquals']((typeof ($525=values).__array != 'undefined'?
				((typeof $525.__array[$526=0]) != 'undefined'?$525.__array[$526]:
					$525.__getitem__($526)):
					$525.__getitem__(0)), 1);
			self['assertEquals']((typeof ($527=values).__array != 'undefined'?
				((typeof $527.__array[$528=1]) != 'undefined'?$527.__array[$528]:
					$527.__getitem__($528)):
					$527.__getitem__(1)), 2);
			self['assertEquals']((typeof ($529=values).__array != 'undefined'?
				((typeof $529.__array[$530=2]) != 'undefined'?$529.__array[$530]:
					$529.__getitem__($530)):
					$529.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSimpleClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKeywordClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $549,$548,$541,$540,$543,$542,$545,$544,$547,$546,$554,$552,$553,$550,$551,$538,$539,$534,$535,$536,$537,$531,$532,$533,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo2', null, null, [{c:3, b:2, a:1}]);
			self['assertEquals']((typeof ($531=values).__array != 'undefined'?
				((typeof $531.__array[$532=0]) != 'undefined'?$531.__array[$532]:
					$531.__getitem__($532)):
					$531.__getitem__(0)), 1);
			self['assertEquals']((typeof ($533=values).__array != 'undefined'?
				((typeof $533.__array[$534=1]) != 'undefined'?$533.__array[$534]:
					$533.__getitem__($534)):
					$533.__getitem__(1)), 2);
			self['assertEquals']((typeof ($535=values).__array != 'undefined'?
				((typeof $535.__array[$536=2]) != 'undefined'?$535.__array[$536]:
					$535.__getitem__($536)):
					$535.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo2', null, null, [{b:2, a:1, c:3}]);
			self['assertEquals']((typeof ($537=values).__array != 'undefined'?
				((typeof $537.__array[$538=0]) != 'undefined'?$537.__array[$538]:
					$537.__getitem__($538)):
					$537.__getitem__(0)), 1);
			self['assertEquals']((typeof ($539=values).__array != 'undefined'?
				((typeof $539.__array[$540=1]) != 'undefined'?$539.__array[$540]:
					$539.__getitem__($540)):
					$539.__getitem__(1)), 2);
			self['assertEquals']((typeof ($541=values).__array != 'undefined'?
				((typeof $541.__array[$542=2]) != 'undefined'?$541.__array[$542]:
					$541.__getitem__($542)):
					$541.__getitem__(2)), 3);
			values = $m.ArgsTestClass3['foo2']();
			self['assertEquals']((typeof ($543=values).__array != 'undefined'?
				((typeof $543.__array[$544=0]) != 'undefined'?$543.__array[$544]:
					$543.__getitem__($544)):
					$543.__getitem__(0)), null);
			self['assertEquals']((typeof ($545=values).__array != 'undefined'?
				((typeof $545.__array[$546=1]) != 'undefined'?$545.__array[$546]:
					$545.__getitem__($546)):
					$545.__getitem__(1)), null);
			self['assertEquals']((typeof ($547=values).__array != 'undefined'?
				((typeof $547.__array[$548=2]) != 'undefined'?$547.__array[$548]:
					$547.__getitem__($548)):
					$547.__getitem__(2)), null);
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo2', null, null, [{c:true}]);
			self['assertEquals']((typeof ($549=values).__array != 'undefined'?
				((typeof $549.__array[$550=0]) != 'undefined'?$549.__array[$550]:
					$549.__getitem__($550)):
					$549.__getitem__(0)), null);
			self['assertEquals']((typeof ($551=values).__array != 'undefined'?
				((typeof $551.__array[$552=1]) != 'undefined'?$551.__array[$552]:
					$551.__getitem__($552)):
					$551.__getitem__(1)), null);
			self['assertEquals']((typeof ($553=values).__array != 'undefined'?
				((typeof $553.__array[$554=2]) != 'undefined'?$553.__array[$554]:
					$553.__getitem__($554)):
					$553.__getitem__(2)), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testDefaultValuesClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $563,$562,$561,$560,$567,$565,$558,$559,$556,$557,$555,$572,values,$568,$571,$570,$564,$569,$566;
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo3', null, null, [{b:7}]);
			self['assertEquals']((typeof ($555=values).__array != 'undefined'?
				((typeof $555.__array[$556=0]) != 'undefined'?$555.__array[$556]:
					$555.__getitem__($556)):
					$555.__getitem__(0)), 1);
			self['assertEquals']((typeof ($557=values).__array != 'undefined'?
				((typeof $557.__array[$558=1]) != 'undefined'?$557.__array[$558]:
					$557.__getitem__($558)):
					$557.__getitem__(1)), 7);
			self['assertEquals']((typeof ($559=values).__array != 'undefined'?
				((typeof $559.__array[$560=2]) != 'undefined'?$559.__array[$560]:
					$559.__getitem__($560)):
					$559.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo3', null, null, [{a:9}]);
			self['assertEquals']((typeof ($561=values).__array != 'undefined'?
				((typeof $561.__array[$562=0]) != 'undefined'?$561.__array[$562]:
					$561.__getitem__($562)):
					$561.__getitem__(0)), 9);
			self['assertEquals']((typeof ($563=values).__array != 'undefined'?
				((typeof $563.__array[$564=1]) != 'undefined'?$563.__array[$564]:
					$563.__getitem__($564)):
					$563.__getitem__(1)), 2);
			self['assertEquals']((typeof ($565=values).__array != 'undefined'?
				((typeof $565.__array[$566=2]) != 'undefined'?$565.__array[$566]:
					$565.__getitem__($566)):
					$565.__getitem__(2)), 3);
			values = $m.ArgsTestClass3['foo3']();
			self['assertEquals']((typeof ($567=values).__array != 'undefined'?
				((typeof $567.__array[$568=0]) != 'undefined'?$567.__array[$568]:
					$567.__getitem__($568)):
					$567.__getitem__(0)), 1);
			self['assertEquals']((typeof ($569=values).__array != 'undefined'?
				((typeof $569.__array[$570=1]) != 'undefined'?$569.__array[$570]:
					$569.__getitem__($570)):
					$569.__getitem__(1)), 2);
			self['assertEquals']((typeof ($571=values).__array != 'undefined'?
				((typeof $571.__array[$572=2]) != 'undefined'?$571.__array[$572]:
					$571.__getitem__($572)):
					$571.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDefaultValuesClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testVarargsClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $573,$574,$575,$576,$577,$578,$579,$581,$580,$583,$582,values,$584;
			values = $m.ArgsTestClass3['foo4'](1, 2, 3);
			self['assertEquals']((typeof ($573=values).__array != 'undefined'?
				((typeof $573.__array[$574=0]) != 'undefined'?$573.__array[$574]:
					$573.__getitem__($574)):
					$573.__getitem__(0)), 1);
			self['assertEquals']((typeof ($575=values).__array != 'undefined'?
				((typeof $575.__array[$576=1]) != 'undefined'?$575.__array[$576]:
					$575.__getitem__($576)):
					$575.__getitem__(1)), 2);
			self['assertEquals']((typeof ($577=values).__array != 'undefined'?
				((typeof $577.__array[$578=2]) != 'undefined'?$577.__array[$578]:
					$577.__getitem__($578)):
					$577.__getitem__(2)), 3);
			values = $m.ArgsTestClass3['foo4'](3, 2, 1);
			self['assertEquals']((typeof ($579=values).__array != 'undefined'?
				((typeof $579.__array[$580=0]) != 'undefined'?$579.__array[$580]:
					$579.__getitem__($580)):
					$579.__getitem__(0)), 3);
			self['assertEquals']((typeof ($581=values).__array != 'undefined'?
				((typeof $581.__array[$582=1]) != 'undefined'?$581.__array[$582]:
					$581.__getitem__($582)):
					$581.__getitem__(1)), 2);
			self['assertEquals']((typeof ($583=values).__array != 'undefined'?
				((typeof $583.__array[$584=2]) != 'undefined'?$583.__array[$584]:
					$583.__getitem__($584)):
					$583.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVarargsClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKwargsClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $588,$585,$586,values,$587;
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo5', null, null, [{x:5, y:7}]);
			self['assertEquals']((typeof ($585=values).__array != 'undefined'?
				((typeof $585.__array[$586='x']) != 'undefined'?$585.__array[$586]:
					$585.__getitem__($586)):
					$585.__getitem__('x')), 5);
			self['assertEquals']((typeof ($587=values).__array != 'undefined'?
				((typeof $587.__array[$588='y']) != 'undefined'?$587.__array[$588]:
					$587.__getitem__($588)):
					$587.__getitem__('y')), 7);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargsClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testComboClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $608,$606,$607,$604,$605,$602,$603,$600,$601,$589,$592,$593,$590,$591,$596,$597,$594,$595,$598,$599,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo6', null, null, [{x:4, y:5}, 1, 2, 3]);
			self['assertEquals']((typeof ($591=(typeof ($589=values).__array != 'undefined'?
				((typeof $589.__array[$590=0]) != 'undefined'?$589.__array[$590]:
					$589.__getitem__($590)):
					$589.__getitem__(0))).__array != 'undefined'?
				((typeof $591.__array[$592=0]) != 'undefined'?$591.__array[$592]:
					$591.__getitem__($592)):
					$591.__getitem__(0)), 1);
			self['assertEquals']((typeof ($595=(typeof ($593=values).__array != 'undefined'?
				((typeof $593.__array[$594=0]) != 'undefined'?$593.__array[$594]:
					$593.__getitem__($594)):
					$593.__getitem__(0))).__array != 'undefined'?
				((typeof $595.__array[$596=1]) != 'undefined'?$595.__array[$596]:
					$595.__getitem__($596)):
					$595.__getitem__(1)), 2);
			self['assertEquals']((typeof ($599=(typeof ($597=values).__array != 'undefined'?
				((typeof $597.__array[$598=0]) != 'undefined'?$597.__array[$598]:
					$597.__getitem__($598)):
					$597.__getitem__(0))).__array != 'undefined'?
				((typeof $599.__array[$600=2]) != 'undefined'?$599.__array[$600]:
					$599.__getitem__($600)):
					$599.__getitem__(2)), 3);
			self['assertEquals']((typeof ($603=(typeof ($601=values).__array != 'undefined'?
				((typeof $601.__array[$602=1]) != 'undefined'?$601.__array[$602]:
					$601.__getitem__($602)):
					$601.__getitem__(1))).__array != 'undefined'?
				((typeof $603.__array[$604='x']) != 'undefined'?$603.__array[$604]:
					$603.__getitem__($604)):
					$603.__getitem__('x')), 4);
			self['assertEquals']((typeof ($607=(typeof ($605=values).__array != 'undefined'?
				((typeof $605.__array[$606=1]) != 'undefined'?$605.__array[$606]:
					$605.__getitem__($606)):
					$605.__getitem__(1))).__array != 'undefined'?
				((typeof $607.__array[$608='y']) != 'undefined'?$607.__array[$608]:
					$607.__getitem__($608)):
					$607.__getitem__('y')), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComboClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testEdgeClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $620,$621,$622,$623,$624,$625,$626,$609,$628,$627,$619,$618,$611,$610,$613,$612,$615,$614,$617,$616,vaules,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo7', null, null, [{b:2}, 1, 2, 3]);
			self['assertEqual']((typeof ($609=values).__array != 'undefined'?
				((typeof $609.__array[$610=0]) != 'undefined'?$609.__array[$610]:
					$609.__getitem__($610)):
					$609.__getitem__(0)), 1);
			self['assertEqual']((typeof ($611=values).__array != 'undefined'?
				((typeof $611.__array[$612=1]) != 'undefined'?$611.__array[$612]:
					$611.__getitem__($612)):
					$611.__getitem__(1)), $p['tuple']([2, 3]));
			self['assertEqual']((typeof ($613=values).__array != 'undefined'?
				((typeof $613.__array[$614=2]) != 'undefined'?$613.__array[$614]:
					$613.__getitem__($614)):
					$613.__getitem__(2)), $p['dict']([['b', 2]]));
			values = $m.ArgsTestClass3['foo7'](1, 2, 3, $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($615=values).__array != 'undefined'?
				((typeof $615.__array[$616=0]) != 'undefined'?$615.__array[$616]:
					$615.__getitem__($616)):
					$615.__getitem__(0)), 1);
			self['assertEqual']((typeof ($617=values).__array != 'undefined'?
				((typeof $617.__array[$618=1]) != 'undefined'?$617.__array[$618]:
					$617.__getitem__($618)):
					$617.__getitem__(1)), $p['tuple']([2, 3, $p['dict']([['b', 2]])]));
			self['assertEqual']((typeof ($619=values).__array != 'undefined'?
				((typeof $619.__array[$620=2]) != 'undefined'?$619.__array[$620]:
					$619.__getitem__($620)):
					$619.__getitem__(2)), $p['dict']([]));
			vaules = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo8', null, null, [{b:2}, 1]);
			self['assertEqual']((typeof ($621=vaules).__array != 'undefined'?
				((typeof $621.__array[$622=0]) != 'undefined'?$621.__array[$622]:
					$621.__getitem__($622)):
					$621.__getitem__(0)), 1);
			self['assertEqual']((typeof ($623=vaules).__array != 'undefined'?
				((typeof $623.__array[$624=1]) != 'undefined'?$623.__array[$624]:
					$623.__getitem__($624)):
					$623.__getitem__(1)), $p['dict']([['b', 2]]));
			vaules = $m.ArgsTestClass3['foo8']($p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($625=vaules).__array != 'undefined'?
				((typeof $625.__array[$626=0]) != 'undefined'?$625.__array[$626]:
					$625.__getitem__($626)):
					$625.__getitem__(0)), $p['dict']([['b', 2]]));
			self['assertEqual']((typeof ($627=vaules).__array != 'undefined'?
				((typeof $627.__array[$628=1]) != 'undefined'?$627.__array[$628]:
					$627.__getitem__($628)):
					$627.__getitem__(1)), $p['dict']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testEdgeClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testSimpleIndirectClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $633,$632,$631,$630,$637,$636,$635,$634,$629,$638,values,$640,$639;
			values = $m.ArgsTestClass3()['foo'](1, 2, 3);
			self['assertEquals']((typeof ($629=values).__array != 'undefined'?
				((typeof $629.__array[$630=0]) != 'undefined'?$629.__array[$630]:
					$629.__getitem__($630)):
					$629.__getitem__(0)), 1);
			self['assertEquals']((typeof ($631=values).__array != 'undefined'?
				((typeof $631.__array[$632=1]) != 'undefined'?$631.__array[$632]:
					$631.__getitem__($632)):
					$631.__getitem__(1)), 2);
			self['assertEquals']((typeof ($633=values).__array != 'undefined'?
				((typeof $633.__array[$634=2]) != 'undefined'?$633.__array[$634]:
					$633.__getitem__($634)):
					$633.__getitem__(2)), 3);
			values = $m.ArgsTestClass3()['foo2'](1, 2, 3);
			self['assertEquals']((typeof ($635=values).__array != 'undefined'?
				((typeof $635.__array[$636=0]) != 'undefined'?$635.__array[$636]:
					$635.__getitem__($636)):
					$635.__getitem__(0)), 1);
			self['assertEquals']((typeof ($637=values).__array != 'undefined'?
				((typeof $637.__array[$638=1]) != 'undefined'?$637.__array[$638]:
					$637.__getitem__($638)):
					$637.__getitem__(1)), 2);
			self['assertEquals']((typeof ($639=values).__array != 'undefined'?
				((typeof $639.__array[$640=2]) != 'undefined'?$639.__array[$640]:
					$639.__getitem__($640)):
					$639.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSimpleIndirectClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKeywordIndirectClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $664,$648,$649,$642,$643,$641,$660,$647,$644,$645,$646,$661,$662,$663,$655,$654,$657,$656,$651,$650,$653,$652,$659,$658,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo2', null, null, [{c:3, b:2, a:1}]);
			self['assertEquals']((typeof ($641=values).__array != 'undefined'?
				((typeof $641.__array[$642=0]) != 'undefined'?$641.__array[$642]:
					$641.__getitem__($642)):
					$641.__getitem__(0)), 1);
			self['assertEquals']((typeof ($643=values).__array != 'undefined'?
				((typeof $643.__array[$644=1]) != 'undefined'?$643.__array[$644]:
					$643.__getitem__($644)):
					$643.__getitem__(1)), 2);
			self['assertEquals']((typeof ($645=values).__array != 'undefined'?
				((typeof $645.__array[$646=2]) != 'undefined'?$645.__array[$646]:
					$645.__getitem__($646)):
					$645.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo2', null, null, [{b:2, a:1, c:3}]);
			self['assertEquals']((typeof ($647=values).__array != 'undefined'?
				((typeof $647.__array[$648=0]) != 'undefined'?$647.__array[$648]:
					$647.__getitem__($648)):
					$647.__getitem__(0)), 1);
			self['assertEquals']((typeof ($649=values).__array != 'undefined'?
				((typeof $649.__array[$650=1]) != 'undefined'?$649.__array[$650]:
					$649.__getitem__($650)):
					$649.__getitem__(1)), 2);
			self['assertEquals']((typeof ($651=values).__array != 'undefined'?
				((typeof $651.__array[$652=2]) != 'undefined'?$651.__array[$652]:
					$651.__getitem__($652)):
					$651.__getitem__(2)), 3);
			values = $m.ArgsTestClass3()['foo2']();
			self['assertEquals']((typeof ($653=values).__array != 'undefined'?
				((typeof $653.__array[$654=0]) != 'undefined'?$653.__array[$654]:
					$653.__getitem__($654)):
					$653.__getitem__(0)), null);
			self['assertEquals']((typeof ($655=values).__array != 'undefined'?
				((typeof $655.__array[$656=1]) != 'undefined'?$655.__array[$656]:
					$655.__getitem__($656)):
					$655.__getitem__(1)), null);
			self['assertEquals']((typeof ($657=values).__array != 'undefined'?
				((typeof $657.__array[$658=2]) != 'undefined'?$657.__array[$658]:
					$657.__getitem__($658)):
					$657.__getitem__(2)), null);
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo2', null, null, [{c:true}]);
			self['assertEquals']((typeof ($659=values).__array != 'undefined'?
				((typeof $659.__array[$660=0]) != 'undefined'?$659.__array[$660]:
					$659.__getitem__($660)):
					$659.__getitem__(0)), null);
			self['assertEquals']((typeof ($661=values).__array != 'undefined'?
				((typeof $661.__array[$662=1]) != 'undefined'?$661.__array[$662]:
					$661.__getitem__($662)):
					$661.__getitem__(1)), null);
			self['assertEquals']((typeof ($663=values).__array != 'undefined'?
				((typeof $663.__array[$664=2]) != 'undefined'?$663.__array[$664]:
					$663.__getitem__($664)):
					$663.__getitem__(2)), true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKeywordIndirectClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testDefaultValuesIndirectClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $674,$675,$680,$681,$673,$678,$682,values,$669,$679,$676,$677,$665,$666,$667,$671,$672,$668,$670;
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo3', null, null, [{b:7}]);
			self['assertEquals']((typeof ($665=values).__array != 'undefined'?
				((typeof $665.__array[$666=0]) != 'undefined'?$665.__array[$666]:
					$665.__getitem__($666)):
					$665.__getitem__(0)), 1);
			self['assertEquals']((typeof ($667=values).__array != 'undefined'?
				((typeof $667.__array[$668=1]) != 'undefined'?$667.__array[$668]:
					$667.__getitem__($668)):
					$667.__getitem__(1)), 7);
			self['assertEquals']((typeof ($669=values).__array != 'undefined'?
				((typeof $669.__array[$670=2]) != 'undefined'?$669.__array[$670]:
					$669.__getitem__($670)):
					$669.__getitem__(2)), 3);
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo3', null, null, [{a:9}]);
			self['assertEquals']((typeof ($671=values).__array != 'undefined'?
				((typeof $671.__array[$672=0]) != 'undefined'?$671.__array[$672]:
					$671.__getitem__($672)):
					$671.__getitem__(0)), 9);
			self['assertEquals']((typeof ($673=values).__array != 'undefined'?
				((typeof $673.__array[$674=1]) != 'undefined'?$673.__array[$674]:
					$673.__getitem__($674)):
					$673.__getitem__(1)), 2);
			self['assertEquals']((typeof ($675=values).__array != 'undefined'?
				((typeof $675.__array[$676=2]) != 'undefined'?$675.__array[$676]:
					$675.__getitem__($676)):
					$675.__getitem__(2)), 3);
			values = $m.ArgsTestClass3()['foo3']();
			self['assertEquals']((typeof ($677=values).__array != 'undefined'?
				((typeof $677.__array[$678=0]) != 'undefined'?$677.__array[$678]:
					$677.__getitem__($678)):
					$677.__getitem__(0)), 1);
			self['assertEquals']((typeof ($679=values).__array != 'undefined'?
				((typeof $679.__array[$680=1]) != 'undefined'?$679.__array[$680]:
					$679.__getitem__($680)):
					$679.__getitem__(1)), 2);
			self['assertEquals']((typeof ($681=values).__array != 'undefined'?
				((typeof $681.__array[$682=2]) != 'undefined'?$681.__array[$682]:
					$681.__getitem__($682)):
					$681.__getitem__(2)), 3);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDefaultValuesIndirectClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testVarargsIndirectClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $691,$690,$694,$693,$692,$686,$687,$684,$685,values,$683,$688,$689;
			values = $m.ArgsTestClass3()['foo4'](1, 2, 3);
			self['assertEquals']((typeof ($683=values).__array != 'undefined'?
				((typeof $683.__array[$684=0]) != 'undefined'?$683.__array[$684]:
					$683.__getitem__($684)):
					$683.__getitem__(0)), 1);
			self['assertEquals']((typeof ($685=values).__array != 'undefined'?
				((typeof $685.__array[$686=1]) != 'undefined'?$685.__array[$686]:
					$685.__getitem__($686)):
					$685.__getitem__(1)), 2);
			self['assertEquals']((typeof ($687=values).__array != 'undefined'?
				((typeof $687.__array[$688=2]) != 'undefined'?$687.__array[$688]:
					$687.__getitem__($688)):
					$687.__getitem__(2)), 3);
			values = $m.ArgsTestClass3()['foo4'](3, 2, 1);
			self['assertEquals']((typeof ($689=values).__array != 'undefined'?
				((typeof $689.__array[$690=0]) != 'undefined'?$689.__array[$690]:
					$689.__getitem__($690)):
					$689.__getitem__(0)), 3);
			self['assertEquals']((typeof ($691=values).__array != 'undefined'?
				((typeof $691.__array[$692=1]) != 'undefined'?$691.__array[$692]:
					$691.__getitem__($692)):
					$691.__getitem__(1)), 2);
			self['assertEquals']((typeof ($693=values).__array != 'undefined'?
				((typeof $693.__array[$694=2]) != 'undefined'?$693.__array[$694]:
					$693.__getitem__($694)):
					$693.__getitem__(2)), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testVarargsIndirectClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKwargsIndirectClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $696,$695,$697,$698,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo5', null, null, [{x:5, y:7}]);
			self['assertEquals']((typeof ($695=values).__array != 'undefined'?
				((typeof $695.__array[$696='x']) != 'undefined'?$695.__array[$696]:
					$695.__getitem__($696)):
					$695.__getitem__('x')), 5);
			self['assertEquals']((typeof ($697=values).__array != 'undefined'?
				((typeof $697.__array[$698='y']) != 'undefined'?$697.__array[$698]:
					$697.__getitem__($698)):
					$697.__getitem__('y')), 7);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwargsIndirectClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testComboIndirectClassMethodCall', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $714,$715,$716,$717,$710,$711,$712,$713,$718,$707,$706,$705,$704,$703,$702,$701,$700,$699,$709,$708,values;
			values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo6', null, null, [{x:4, y:5}, 1, 2, 3]);
			self['assertEquals']((typeof ($701=(typeof ($699=values).__array != 'undefined'?
				((typeof $699.__array[$700=0]) != 'undefined'?$699.__array[$700]:
					$699.__getitem__($700)):
					$699.__getitem__(0))).__array != 'undefined'?
				((typeof $701.__array[$702=0]) != 'undefined'?$701.__array[$702]:
					$701.__getitem__($702)):
					$701.__getitem__(0)), 1);
			self['assertEquals']((typeof ($705=(typeof ($703=values).__array != 'undefined'?
				((typeof $703.__array[$704=0]) != 'undefined'?$703.__array[$704]:
					$703.__getitem__($704)):
					$703.__getitem__(0))).__array != 'undefined'?
				((typeof $705.__array[$706=1]) != 'undefined'?$705.__array[$706]:
					$705.__getitem__($706)):
					$705.__getitem__(1)), 2);
			self['assertEquals']((typeof ($709=(typeof ($707=values).__array != 'undefined'?
				((typeof $707.__array[$708=0]) != 'undefined'?$707.__array[$708]:
					$707.__getitem__($708)):
					$707.__getitem__(0))).__array != 'undefined'?
				((typeof $709.__array[$710=2]) != 'undefined'?$709.__array[$710]:
					$709.__getitem__($710)):
					$709.__getitem__(2)), 3);
			self['assertEquals']((typeof ($713=(typeof ($711=values).__array != 'undefined'?
				((typeof $711.__array[$712=1]) != 'undefined'?$711.__array[$712]:
					$711.__getitem__($712)):
					$711.__getitem__(1))).__array != 'undefined'?
				((typeof $713.__array[$714='x']) != 'undefined'?$713.__array[$714]:
					$713.__getitem__($714)):
					$713.__getitem__('x')), 4);
			self['assertEquals']((typeof ($717=(typeof ($715=values).__array != 'undefined'?
				((typeof $715.__array[$716=1]) != 'undefined'?$715.__array[$716]:
					$715.__getitem__($716)):
					$715.__getitem__(1))).__array != 'undefined'?
				((typeof $717.__array[$718='y']) != 'undefined'?$717.__array[$718]:
					$717.__getitem__($718)):
					$717.__getitem__('y')), 5);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testComboIndirectClassMethodCall'] = $method;
		$method = $pyjs__bind_method2('testKwArgsRecurse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var kwa,$732,$733,$730,$731,$736,$737,$734,$735,$750,$751,$738,$739,$719,$741,$740,$747,$746,$742,$pyjs_try_err,$745,$744,$752,$bool2,$749,$bool1,$729,$728,$725,$724,$727,$726,$721,$720,$723,$722,e,$743,$748,values;
			kwa = $pyjs_kwargs_call(null, (typeof kw_args == "undefined"?$m.kw_args:kw_args), null, null, [{x:5, y:6}]);
			if ((($bool1=kwa) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['assertEquals'](kwa['get']('x'), 5);
				self['assertEquals'](kwa['get']('y'), 6);
			}
			kwa = $pyjs_kwargs_call(null, (typeof kw_args2 == "undefined"?$m.kw_args2:kw_args2), null, null, [{x:5, y:6}]);
			if ((($bool2=kwa) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['assertEquals'](kwa['get']('x'), 5);
				self['assertEquals'](kwa['get']('y'), 6);
			}
			values = $pyjs_kwargs_call(null, (typeof varargs_kwargs == "undefined"?$m.varargs_kwargs:varargs_kwargs), null, null, [{c:3}, 1, 2, 3, 4]);
			self['assertEquals']((typeof ($719=values).__array != 'undefined'?
				((typeof $719.__array[$720=0]) != 'undefined'?$719.__array[$720]:
					$719.__getitem__($720)):
					$719.__getitem__(0)), 1);
			self['assertEquals']((typeof ($721=values).__array != 'undefined'?
				((typeof $721.__array[$722=1]) != 'undefined'?$721.__array[$722]:
					$721.__getitem__($722)):
					$721.__getitem__(1)), 2);
			self['assertEquals']((typeof ($723=values).__array != 'undefined'?
				((typeof $723.__array[$724=2]) != 'undefined'?$723.__array[$724]:
					$723.__getitem__($724)):
					$723.__getitem__(2)), $p['tuple']([3, 4]));
			self['assertEquals']((typeof ($727=(typeof ($725=values).__array != 'undefined'?
				((typeof $725.__array[$726=3]) != 'undefined'?$725.__array[$726]:
					$725.__getitem__($726)):
					$725.__getitem__(3))).__array != 'undefined'?
				((typeof $727.__array[$728='c']) != 'undefined'?$727.__array[$728]:
					$727.__getitem__($728)):
					$727.__getitem__('c')), 3);
			values = $pyjs_kwargs_call(null, (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2), null, null, [{c:3}, 1, 2, 3, 4]);
			self['assertEquals']((typeof ($729=values).__array != 'undefined'?
				((typeof $729.__array[$730=0]) != 'undefined'?$729.__array[$730]:
					$729.__getitem__($730)):
					$729.__getitem__(0)), 1);
			self['assertEquals']((typeof ($731=values).__array != 'undefined'?
				((typeof $731.__array[$732=1]) != 'undefined'?$731.__array[$732]:
					$731.__getitem__($732)):
					$731.__getitem__(1)), 2);
			self['assertEquals']((typeof ($733=values).__array != 'undefined'?
				((typeof $733.__array[$734=2]) != 'undefined'?$733.__array[$734]:
					$733.__getitem__($734)):
					$733.__getitem__(2)), $p['tuple']([3, 4]));
			self['assertEquals']((typeof ($737=(typeof ($735=values).__array != 'undefined'?
				((typeof $735.__array[$736=3]) != 'undefined'?$735.__array[$736]:
					$735.__getitem__($736)):
					$735.__getitem__(3))).__array != 'undefined'?
				((typeof $737.__array[$738='c']) != 'undefined'?$737.__array[$738]:
					$737.__getitem__($738)):
					$737.__getitem__('c')), 3);
			values = (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2)(1);
			self['assertEquals']((typeof ($739=values).__array != 'undefined'?
				((typeof $739.__array[$740=0]) != 'undefined'?$739.__array[$740]:
					$739.__getitem__($740)):
					$739.__getitem__(0)), 1);
			self['assertEquals']((typeof ($741=values).__array != 'undefined'?
				((typeof $741.__array[$742=1]) != 'undefined'?$741.__array[$742]:
					$741.__getitem__($742)):
					$741.__getitem__(1)), 3);
			values = (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2)(1, $p['dict']([['a', 1]]), $p['dict']([]));
			self['assertEquals']((typeof ($743=values).__array != 'undefined'?
				((typeof $743.__array[$744=0]) != 'undefined'?$743.__array[$744]:
					$743.__getitem__($744)):
					$743.__getitem__(0)), 1);
			self['assertEquals']((typeof ($747=(typeof ($745=values).__array != 'undefined'?
				((typeof $745.__array[$746=1]) != 'undefined'?$745.__array[$746]:
					$745.__getitem__($746)):
					$745.__getitem__(1))).__array != 'undefined'?
				((typeof $747.__array[$748='a']) != 'undefined'?$747.__array[$748]:
					$747.__getitem__($748)):
					$747.__getitem__('a')), 1);
			values = (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2)(1, $p['dict']([['a', 1]]));
			self['assertEquals']((typeof ($749=values).__array != 'undefined'?
				((typeof $749.__array[$750=0]) != 'undefined'?$749.__array[$750]:
					$749.__getitem__($750)):
					$749.__getitem__(0)), 1);
			try {
				self['assertEquals']((typeof ($751=values).__array != 'undefined'?
					((typeof $751.__array[$752=1]) != 'undefined'?$751.__array[$752]:
						$751.__getitem__($752)):
						$751.__getitem__(1)), $p['dict']([['a', 1]]));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					e = $pyjs_try_err;
					self['fail']('Last arg in *args,**kwargs is dict problem');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwArgsRecurse'] = $method;
		$method = $pyjs__bind_method2('testKwArgsInherit', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var kwa,c,$bool3,$pyjs_try_err,$bool6,$bool7,$bool4,$bool5;
			c = $pyjs_kwargs_call(null, (typeof KwArgs == "undefined"?$m.KwArgs:KwArgs), null, null, [{x:5, y:6}]);
			self['assertTrue']($p['hasattr'](c, 'kwargs'));
			kwa = $p['getattr'](c, 'kwargs', null);
			if ((($bool3=kwa) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['assertEquals'](kwa['get']('x'), 5);
				self['assertEquals'](kwa['get']('y'), 6);
				self['assertEquals'](kwa['get']('z'), 7);
			}
			try {
				c = $pyjs_kwargs_call(null, (typeof Kwargs2 == "undefined"?$m.Kwargs2:Kwargs2), null, null, [{x:5, y:6}]);
				self['assertTrue']($p['hasattr'](c, 'kwargs'));
				kwa = $p['getattr'](c, 'kwargs', null);
				if ((($bool4=kwa) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['assertEquals'](kwa['get']('x'), 5);
					self['assertEquals'](kwa['get']('y'), 6);
					self['assertEquals'](kwa['get']('z'), 7);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['assertTrue'](false, 'runtime error in kwargs, needs investigating');
				}
			}
			$pyjs_kwargs_call(c, 'set_kwargs', null, null, [{x:5, y:6}]);
			self['assertTrue']($p['hasattr'](c, 'kwargs'));
			kwa = $p['getattr'](c, 'kwargs', null);
			if ((($bool5=kwa) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['assertEquals'](kwa['get']('x'), 5);
				self['assertEquals'](kwa['get']('y'), 6);
				self['assertEquals'](kwa['get']('z'), 8);
			}
			$pyjs_kwargs_call(c, 'set_kwargs2', null, null, [{x:5, y:6}]);
			self['assertTrue']($p['hasattr'](c, 'kwargs'));
			kwa = $p['getattr'](c, 'kwargs', null);
			if ((($bool6=kwa) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['assertEquals'](kwa['get']('x'), 5);
				self['assertEquals'](kwa['get']('y'), 6);
				self['assertEquals'](kwa['get']('z'), 8);
			}
			$pyjs_kwargs_call(c, 'set_kwargs3', null, null, [{x:5, y:6}]);
			self['assertTrue']($p['hasattr'](c, 'kwargs'));
			kwa = $p['getattr'](c, 'kwargs', null);
			if ((($bool7=kwa) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				self['assertEquals'](kwa['get']('x'), 5);
				self['assertEquals'](kwa['get']('y'), 6);
				self['assertEquals'](kwa['get']('z'), 8);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwArgsInherit'] = $method;
		$method = $pyjs__bind_method2('testKwArgsNameMapping', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var kwargs_out,fn,kwargs;
			kwargs = $pyjs_kwargs_call(null, $p['dict'], null, null, [{$$comment:'Comment', name:'Name'}]);
			fn = function($$comment, name) {
				if (typeof $$comment == 'undefined') $$comment=arguments.callee.__args__[2][1];
				if (typeof name == 'undefined') name=arguments.callee.__args__[3][1];
				var $$comment;
				return $pyjs_kwargs_call(null, $p['dict'], null, null, [{$$comment:$$comment, name:name}]);
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,null,['$$comment', null],['name', null]];
			kwargs_out = $pyjs_kwargs_call(null, fn, null, kwargs, [{}]);
			self['assertEquals'](kwargs, kwargs_out);
			kwargs = $p['dict']([['comment', 'Comment'], ['name', 'Name']]);
			kwargs_out = $pyjs_kwargs_call(null, fn, null, kwargs, [{}]);
			self['assertEquals'](kwargs, kwargs_out);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testKwArgsNameMapping'] = $method;
		$method = $pyjs__bind_method2('testLookupOrder', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var A,fn;
			fn = function(fint) {
				if (typeof fint == 'undefined') fint=arguments.callee.__args__[2][1];

				return fint(1.2);
				return null;
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,null,['fint', $p['float_int']]];
			A = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'ArgsTest';
				$method = $pyjs__bind_method2('fn', function(fint) {
					if (this.__is_instance__ === true) {
						var self = this;
					} else {
						var self = arguments[0];
						fint = arguments[1];
					}
					if (typeof fint == 'undefined') fint=arguments.callee.__args__[3][1];

					return fint(1.2);
					return null;
				}
	, 1, [null,null,['self'],['fint', $p['float_int']]]);
				$cls_definition['fn'] = $method;
				var $bases = new Array(pyjslib.object);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('A', $p['tuple']($bases), $data);
			})();
			self['assertEqual'](fn(), 1);
			self['assertEqual'](A()['fn'](), 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLookupOrder'] = $method;
		$method = $pyjs__bind_method2('testArgIsModuleName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var fn;
			fn = function(ArgsTest) {

				return (typeof foo == "undefined"?$m.foo:foo)(ArgsTest, 2, 3);
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,null,['ArgsTest']];
			self['assertEqual']((typeof __name__ == "undefined"?$m.__name__:__name__), 'ArgsTest', 'Argument to fn must be equal to module name');
			self['assertEqual'](fn('foo'), $p['list'](['foo', 2, 3]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testArgIsModuleName'] = $method;
		$method = $pyjs__bind_method2('testGetattr', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $770,$758,$759,$753,$754,$755,$756,$757,instance,$pyjs_try_err,foo,$761,$760,$763,$762,$765,$764,$767,$766,$769,$768,values;
			instance = (typeof ArgsTestClass == "undefined"?$m.ArgsTestClass:ArgsTestClass)();
			foo = $p['getattr'](instance, 'foo');
			values = foo(1, 2, 3);
			self['assertEquals']((typeof ($753=values).__array != 'undefined'?
				((typeof $753.__array[$754=0]) != 'undefined'?$753.__array[$754]:
					$753.__getitem__($754)):
					$753.__getitem__(0)), 1);
			self['assertEquals']((typeof ($755=values).__array != 'undefined'?
				((typeof $755.__array[$756=1]) != 'undefined'?$755.__array[$756]:
					$755.__getitem__($756)):
					$755.__getitem__(1)), 2);
			self['assertEquals']((typeof ($757=values).__array != 'undefined'?
				((typeof $757.__array[$758=2]) != 'undefined'?$757.__array[$758]:
					$757.__getitem__($758)):
					$757.__getitem__(2)), 3);
			values = $pyjs_kwargs_call(null, foo, $p['tuple']([1, 2, 3]), null, [{}]);
			self['assertEquals']((typeof ($759=values).__array != 'undefined'?
				((typeof $759.__array[$760=0]) != 'undefined'?$759.__array[$760]:
					$759.__getitem__($760)):
					$759.__getitem__(0)), 1);
			self['assertEquals']((typeof ($761=values).__array != 'undefined'?
				((typeof $761.__array[$762=1]) != 'undefined'?$761.__array[$762]:
					$761.__getitem__($762)):
					$761.__getitem__(1)), 2);
			self['assertEquals']((typeof ($763=values).__array != 'undefined'?
				((typeof $763.__array[$764=2]) != 'undefined'?$763.__array[$764]:
					$763.__getitem__($764)):
					$763.__getitem__(2)), 3);
			try {
				values = $pyjs_kwargs_call(null, foo, $p['tuple']([1, 2]), $pyjs_kwargs_call(null, $p['dict'], null, null, [{c:3}]), [{}]);
				self['assertEquals']((typeof ($765=values).__array != 'undefined'?
					((typeof $765.__array[$766=0]) != 'undefined'?$765.__array[$766]:
						$765.__getitem__($766)):
						$765.__getitem__(0)), 1);
				self['assertEquals']((typeof ($767=values).__array != 'undefined'?
					((typeof $767.__array[$768=1]) != 'undefined'?$767.__array[$768]:
						$767.__getitem__($768)):
						$767.__getitem__(1)), 2);
				self['assertEquals']((typeof ($769=values).__array != 'undefined'?
					((typeof $769.__array[$770=2]) != 'undefined'?$769.__array[$770]:
						$769.__getitem__($770)):
						$769.__getitem__(2)), 3);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					self['fail']('foo() takes exactly 4 arguments (5 given), bug #503');
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testGetattr'] = $method;
		$method = $pyjs__bind_method2('testArgsUnpack', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,func;
			func = function(a, b, c, d) {
				var $add6,$add7,$add5,$add10,$add8,$add9;
				return (typeof ($add9=(typeof ($add7=(typeof ($add5=a)==typeof ($add6=b) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8=c) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10=d) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			};
			func.__name__ = 'func';

			func.__bind_type__ = 0;
			func.__args__ = [null,null,['a'],['b'],['c'],['d']];
			try {
				self['assertEqual'](func(1, $p['tuple']([2, 3]), 4), 10, 'Function args unpacking not supported, #527');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self['fail']('Bug #527 Function args unpacking not supported');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testArgsUnpack'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTest', $p['tuple']($bases), $data);
	})();
	$m['foo'] = function(a, b, c) {

		return $p['list']([a, b, c]);
	};
	$m['foo'].__name__ = 'foo';

	$m['foo'].__bind_type__ = 0;
	$m['foo'].__args__ = [null,null,['a'],['b'],['c']];
	$m['foo2'] = function(a, b, c) {
		if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
		if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
		if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

		return $p['list']([a, b, c]);
	};
	$m['foo2'].__name__ = 'foo2';

	$m['foo2'].__bind_type__ = 0;
	$m['foo2'].__args__ = [null,null,['a', null],['b', null],['c', null]];
	$m['foo3'] = function(a, b, c) {
		if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
		if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
		if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

		return $p['list']([a, b, c]);
	};
	$m['foo3'].__name__ = 'foo3';

	$m['foo3'].__bind_type__ = 0;
	$m['foo3'].__args__ = [null,null,['a', 1],['b', 2],['c', 3]];
	$m['foo4'] = function(a, b, c) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));


		return $p['tuple']([a, b, c, args]);
	};
	$m['foo4'].__name__ = 'foo4';

	$m['foo4'].__bind_type__ = 0;
	$m['foo4'].__args__ = ['args',null,['a'],['b'],['c']];
	$m['foo5'] = function(a, b, c) {
		var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof c != 'undefined') {
				if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = c;
					c = arguments[3];
				}
			} else 			if (typeof b != 'undefined') {
				if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = b;
					b = arguments[3];
				}
			} else 			if (typeof a != 'undefined') {
				if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = a;
					a = arguments[3];
				}
			} else {
			}
		}

		return $p['tuple']([a, b, c, kwargs]);
	};
	$m['foo5'].__name__ = 'foo5';

	$m['foo5'].__bind_type__ = 0;
	$m['foo5'].__args__ = [null,['kwargs'],['a'],['b'],['c']];
	$m['foo6'] = function(a, b, c) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

		var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			if (typeof kwargs != 'undefined') args.__array.push(kwargs);
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof c != 'undefined') {
				if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = c;
					c = arguments[3];
				}
			} else 			if (typeof b != 'undefined') {
				if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = b;
					b = arguments[3];
				}
			} else 			if (typeof a != 'undefined') {
				if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = a;
					a = arguments[3];
				}
			} else {
			}
		}

		return $p['tuple']([a, b, c, args, kwargs]);
	};
	$m['foo6'].__name__ = 'foo6';

	$m['foo6'].__bind_type__ = 0;
	$m['foo6'].__args__ = ['args',['kwargs'],['a'],['b'],['c']];
	$m['foo7'] = function(a) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			if (typeof kwargs != 'undefined') args.__array.push(kwargs);
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof a != 'undefined') {
				if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = a;
					a = arguments[1];
				}
			} else {
			}
		}

		return $p['tuple']([a, args, kwargs]);
	};
	$m['foo7'].__name__ = 'foo7';

	$m['foo7'].__bind_type__ = 0;
	$m['foo7'].__args__ = ['args',['kwargs'],['a']];
	$m['foo8'] = function(a) {
		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof a != 'undefined') {
				if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = a;
					a = arguments[1];
				}
			} else {
			}
		}

		return $p['tuple']([a, kwargs]);
	};
	$m['foo8'].__name__ = 'foo8';

	$m['foo8'].__bind_type__ = 0;
	$m['foo8'].__args__ = [null,['kwargs'],['a']];
	$m['ArgsTestClass_foo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}

			self.x = $p['list']([a, b, c]);
			return null;
		}
	, 1, [null,null,['self'],['a'],['b'],['c']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass_foo', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass_foo2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			self.x = $p['list']([a, b, c]);
			return null;
		}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass_foo2', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass_foo3'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			self.x = $p['list']([a, b, c]);
			return null;
		}
	, 1, [null,null,['self'],['a', 1],['b', 2],['c', 3]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass_foo3', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass_foo4'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));

			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,4,arguments.length));

			}

			self.x = $p['tuple']([a, b, c, args]);
			return null;
		}
	, 1, ['args',null,['self'],['a'],['b'],['c']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass_foo4', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass_foo5'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof c != 'undefined') {
					if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = c;
						c = arguments[4];
					}
				} else 				if (typeof b != 'undefined') {
					if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = b;
						b = arguments[4];
					}
				} else 				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}

			self.x = $p['tuple']([a, b, c, kwargs]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['a'],['b'],['c']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass_foo5', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass_foo6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,4,arguments.length-1));

				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof c != 'undefined') {
					if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = c;
						c = arguments[4];
					}
				} else 				if (typeof b != 'undefined') {
					if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = b;
						b = arguments[4];
					}
				} else 				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}

			self.x = $p['tuple']([a, b, c, args, kwargs]);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['a'],['b'],['c']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass_foo6', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('foo', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}

			return $p['list']([a, b, c]);
		}
	, 1, [null,null,['self'],['a'],['b'],['c']]);
		$cls_definition['foo'] = $method;
		$method = $pyjs__bind_method2('foo2', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			return $p['list']([a, b, c]);
		}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
		$cls_definition['foo2'] = $method;
		$method = $pyjs__bind_method2('foo3', function(a, b, c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				a = arguments[1];
				b = arguments[2];
				c = arguments[3];
			}
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			return $p['list']([a, b, c]);
		}
	, 1, [null,null,['self'],['a', 1],['b', 2],['c', 3]]);
		$cls_definition['foo3'] = $method;
		$method = $pyjs__bind_method2('foo4', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			return args;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['foo4'] = $method;
		$method = $pyjs__bind_method2('foo5', function() {
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

			return kwargs;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['foo5'] = $method;
		$method = $pyjs__bind_method2('foo6', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
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

			return $p['tuple']([args, kwargs]);
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['foo6'] = $method;
		$method = $pyjs__bind_method2('foo7', function(a) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				a = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			return $p['tuple']([a, args, kwargs]);
		}
	, 1, ['args',['kwargs'],['self'],['a']]);
		$cls_definition['foo7'] = $method;
		$method = $pyjs__bind_method2('foo8', function(a) {
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
				a = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			return $p['tuple']([a, kwargs]);
		}
	, 1, [null,['kwargs'],['self'],['a']]);
		$cls_definition['foo8'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('foo', function(a, b, c) {

			return $p['list']([a, b, c]);
		}
	, 3, [null,null,['a'],['b'],['c']]);
		$cls_definition['foo'] = $method;
		$method = $pyjs__bind_method2('foo2', function(a, b, c) {
			if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

			return $p['list']([a, b, c]);
		}
	, 3, [null,null,['a', null],['b', null],['c', null]]);
		$cls_definition['foo2'] = $method;
		$method = $pyjs__bind_method2('foo3', function(a, b, c) {
			if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

			return $p['list']([a, b, c]);
		}
	, 3, [null,null,['a', 1],['b', 2],['c', 3]]);
		$cls_definition['foo3'] = $method;
		$method = $pyjs__bind_method2('foo4', function() {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


			return args;
		}
	, 3, ['args',null]);
		$cls_definition['foo4'] = $method;
		$method = $pyjs__bind_method2('foo5', function() {
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
{
				}
			}

			return kwargs;
		}
	, 3, [null,['kwargs']]);
		$cls_definition['foo5'] = $method;
		$method = $pyjs__bind_method2('foo6', function() {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
{
				}
			}

			return $p['tuple']([args, kwargs]);
		}
	, 3, ['args',['kwargs']]);
		$cls_definition['foo6'] = $method;
		$method = $pyjs__bind_method2('foo7', function(a) {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[1];
					}
				} else {
				}
			}

			return $p['tuple']([a, args, kwargs]);
		}
	, 3, ['args',['kwargs'],['a']]);
		$cls_definition['foo7'] = $method;
		$method = $pyjs__bind_method2('foo8', function(a) {
			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[1];
					}
				} else {
				}
			}

			return $p['tuple']([a, kwargs]);
		}
	, 3, [null,['kwargs'],['a']]);
		$cls_definition['foo8'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass2', $p['tuple']($bases), $data);
	})();
	$m['ArgsTestClass3'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('foo', function(a, b, c) {
    var self = this.prototype;

			return $p['list']([a, b, c]);
		}
	, 2, [null,null,['self'],['a'],['b'],['c']]);
		$cls_definition['foo'] = $method;
		$method = $pyjs__bind_method2('foo2', function(a, b, c) {
    var self = this.prototype;
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			return $p['list']([a, b, c]);
		}
	, 2, [null,null,['self'],['a', null],['b', null],['c', null]]);
		$cls_definition['foo2'] = $method;
		$method = $pyjs__bind_method2('foo3', function(a, b, c) {
    var self = this.prototype;
			if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

			return $p['list']([a, b, c]);
		}
	, 2, [null,null,['self'],['a', 1],['b', 2],['c', 3]]);
		$cls_definition['foo3'] = $method;
		$method = $pyjs__bind_method2('foo4', function() {
    var self = this.prototype;
			var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


			return args;
		}
	, 2, ['args',null,['self']]);
		$cls_definition['foo4'] = $method;
		$method = $pyjs__bind_method2('foo5', function() {
    var self = this.prototype;
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
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

			return kwargs;
		}
	, 2, [null,['kwargs'],['self']]);
		$cls_definition['foo5'] = $method;
		$method = $pyjs__bind_method2('foo6', function() {
    var self = this.prototype;
			var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
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

			return $p['tuple']([args, kwargs]);
		}
	, 2, ['args',['kwargs'],['self']]);
		$cls_definition['foo6'] = $method;
		$method = $pyjs__bind_method2('foo7', function(a) {
    var self = this.prototype;
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			return $p['tuple']([a, args, kwargs]);
		}
	, 2, ['args',['kwargs'],['self'],['a']]);
		$cls_definition['foo7'] = $method;
		$method = $pyjs__bind_method2('foo8', function(a) {
    var self = this.prototype;
			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			return $p['tuple']([a, kwargs]);
		}
	, 2, [null,['kwargs'],['self'],['a']]);
		$cls_definition['foo8'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ArgsTestClass3', $p['tuple']($bases), $data);
	})();
	$m['KwArgs'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
		$method = $pyjs__bind_method2('__init__', function(z, zz) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				z = arguments[1];
				zz = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof zz != 'undefined') {
					if (zz !== null && typeof zz['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = zz;
						zz = arguments[3];
					}
				} else 				if (typeof z != 'undefined') {
					if (z !== null && typeof z['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = z;
						z = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof z == 'undefined') z=arguments.callee.__args__[3][1];
			if (typeof zz == 'undefined') zz=arguments.callee.__args__[4][1];

			self.kwargs = kwargs;
			$p['getattr'](self, 'kwargs').__setitem__('z', z);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['z', 7],['zz', 77]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_kwargs', function(z) {
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
				z = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof z != 'undefined') {
					if (z !== null && typeof z['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = z;
						z = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof z == 'undefined') z=arguments.callee.__args__[3][1];

			self.kwargs = kwargs;
			$p['getattr'](self, 'kwargs').__setitem__('z', z);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['z', 8]]);
		$cls_definition['set_kwargs'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('KwArgs', $p['tuple']($bases), $data);
	})();
	$m['Kwargs2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ArgsTest';
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

			$pyjs_kwargs_call($m['KwArgs'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_kwargs2', function() {
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

			$pyjs_kwargs_call($m['KwArgs'], 'set_kwargs', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['set_kwargs2'] = $method;
		$method = $pyjs__bind_method2('set_kwargs3', function() {
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
			var skw;
			skw = $p['getattr'](self, 'set_kwargs');
			$pyjs_kwargs_call(null, skw, null, kwargs, [{}]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['set_kwargs3'] = $method;
		var $bases = new Array($m['KwArgs']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Kwargs2', $p['tuple']($bases), $data);
	})();
	$m['kw_args'] = function() {
		var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}

		return kwargs;
	};
	$m['kw_args'].__name__ = 'kw_args';

	$m['kw_args'].__bind_type__ = 0;
	$m['kw_args'].__args__ = [null,['kwargs']];
	$m['kw_args2'] = function() {
		var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}

		return $pyjs_kwargs_call(null, $m['kw_args'], null, kwargs, [{}]);
	};
	$m['kw_args2'].__name__ = 'kw_args2';

	$m['kw_args2'].__bind_type__ = 0;
	$m['kw_args2'].__args__ = [null,['kwargs']];
	$m['varargs_kwargs'] = function(arg1, arg2) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

		var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			if (typeof kwargs != 'undefined') args.__array.push(kwargs);
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof arg2 != 'undefined') {
				if (arg2 !== null && typeof arg2['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = arg2;
					arg2 = arguments[2];
				}
			} else 			if (typeof arg1 != 'undefined') {
				if (arg1 !== null && typeof arg1['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = arg1;
					arg1 = arguments[2];
				}
			} else {
			}
		}
		if (typeof arg2 == 'undefined') arg2=arguments.callee.__args__[3][1];

		return $p['tuple']([arg1, arg2, args, kwargs]);
	};
	$m['varargs_kwargs'].__name__ = 'varargs_kwargs';

	$m['varargs_kwargs'].__bind_type__ = 0;
	$m['varargs_kwargs'].__args__ = ['args',['kwargs'],['arg1'],['arg2', 2]];
	$m['varargs_kwargs2'] = function(arg1, arg2) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

		var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			if (typeof kwargs != 'undefined') args.__array.push(kwargs);
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof arg2 != 'undefined') {
				if (arg2 !== null && typeof arg2['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = arg2;
					arg2 = arguments[2];
				}
			} else 			if (typeof arg1 != 'undefined') {
				if (arg1 !== null && typeof arg1['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = arg1;
					arg1 = arguments[2];
				}
			} else {
			}
		}
		if (typeof arg2 == 'undefined') arg2=arguments.callee.__args__[3][1];

		return $pyjs_kwargs_call(null, $m['varargs_kwargs'], args, kwargs, [{}, arg1, arg2]);
	};
	$m['varargs_kwargs2'].__name__ = 'varargs_kwargs2';

	$m['varargs_kwargs2'].__bind_type__ = 0;
	$m['varargs_kwargs2'].__args__ = ['args',['kwargs'],['arg1'],['arg2', 3]];
	return this;
}; /* end ArgsTest */


/* end module: ArgsTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/

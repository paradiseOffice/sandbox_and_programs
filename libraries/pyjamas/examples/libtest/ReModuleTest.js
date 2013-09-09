/* start module: ReModuleTest */
$pyjs.loaded_modules['ReModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ReModuleTest'].__was_initialized__) return $pyjs.loaded_modules['ReModuleTest'];
	var $m = $pyjs.loaded_modules["ReModuleTest"];
	$m.__repr__ = function() { return "<module: ReModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ReModuleTest';
	$m.__name__ = __mod_name__;


	$m['sys'] = $p['___import___']('sys', null);
	$m['UnitTest'] = $p['___import___']('UnitTest', null);
	$m['re'] = $p['___import___']('re', null);
	$m['ReModuleTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ReModuleTest';
		$method = $pyjs__bind_method2('matchTest', function(msg, pat, flags, string, groups, span) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
				pat = arguments[2];
				flags = arguments[3];
				string = arguments[4];
				groups = arguments[5];
				span = arguments[6];
			}
			var $8,$iter1_iter,$7,$len5,$iter1_array,$11,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$eq2,$eq3,$eq1,$eq4,$bool1,$9,$6,$4,$5,$2,$3,$1,$14,$10,$iter1_type,$12,$iter1_idx,i,$13,m,$len4,r,$len2,$len3,$len1;
			r = $m['re']['compile'](pat, flags);
			m = r['match'](string);
			if ((($bool1=(groups === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['assertTrue']((m === null), $p['sprintf']('%s: None expected', msg));
				return null;
			}
			self['assertTrue']((m !== null), $p['sprintf']('%s: Unexpected None', msg));
			self['assertTrue']((($eq1=(($len1=m['groups']()) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq2=(typeof ($sub1=(($len2=groups) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))), $p['sprintf']('%s: len(m.groups()) = %s != %s', $p['tuple']([msg, (($len3=m['groups']()) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))), (typeof ($sub3=(($len4=groups) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))])));
			$iter1_iter = $p['range']((($len5=groups) === null?0:
				(typeof $len5.__array != 'undefined' ? $len5.__array.length:
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'?$len5.length:
							$p['len']($len5))))));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['assertEqual'](m['group'](i), (typeof ($1=groups).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)), $p['sprintf']("%s: m.group(%d) = '%s' != groups[%d] = '%s'", $p['tuple']([msg, i, m['group'](i), i, (typeof ($3=groups).__array != 'undefined'?
					((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(i))])));
			}
			self['assertEqual'](m['start'](), (typeof ($5=span).__array != 'undefined'?
				((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(0)), $p['sprintf']('%s: start = %d != %d', $p['tuple']([msg, m['start'](), (typeof ($7=span).__array != 'undefined'?
				((typeof $7.__array[$8=0]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(0))])));
			self['assertEqual'](m['end'](), (typeof ($9=span).__array != 'undefined'?
				((typeof $9.__array[$10=1]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(1)), $p['sprintf']('%s: end = %d != %d', $p['tuple']([msg, m['end'](), (typeof ($11=span).__array != 'undefined'?
				((typeof $11.__array[$12=1]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__(1))])));
			self['assertTrue']((($eq3=m['span']())===($eq4=span)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))), $p['sprintf']('%s: span = %r != %r', $p['tuple']([msg, m['span'](), (typeof ($13=span).__array != 'undefined'?
				((typeof $13.__array[$14=1]) != 'undefined'?$13.__array[$14]:
					$13.__getitem__($14)):
					$13.__getitem__(1))])));
			return null;
		}
	, 1, [null,null,['self'],['msg'],['pat'],['flags'],['string'],['groups'],['span']]);
		$cls_definition['matchTest'] = $method;
		$method = $pyjs__bind_method2('searchTest', function(msg, pat, flags, string, groups, span) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
				pat = arguments[2];
				flags = arguments[3];
				string = arguments[4];
				groups = arguments[5];
				span = arguments[6];
			}
			var $18,$28,$iter2_iter,$21,$20,$22,$25,$24,$27,$26,$sub8,$sub7,$sub6,$sub5,$eq8,$iter2_type,$eq6,$eq7,$eq5,$bool2,$iter2_idx,$17,$len10,$15,$16,$iter2_nextval,i,m,$19,$len6,$len7,r,$iter2_array,$23,$len8,$len9;
			r = $m['re']['compile'](pat, flags);
			m = r['search'](string);
			if ((($bool2=(groups === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['assertTrue']((m === null), $p['sprintf']('%s: None expected', msg));
				return null;
			}
			self['assertTrue']((m !== null), $p['sprintf']('%s: Unexpected None', msg));
			self['assertTrue']((($eq5=(($len6=m['groups']()) === null?0:
				(typeof $len6.__array != 'undefined' ? $len6.__array.length:
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'?$len6.length:
							$p['len']($len6))))))===($eq6=(typeof ($sub5=(($len7=groups) === null?0:
				(typeof $len7.__array != 'undefined' ? $len7.__array.length:
					(typeof $len7.__len__ == 'function'?$len7.__len__():
						(typeof $len7.length != 'undefined'?$len7.length:
							$p['len']($len7))))))==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6)))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))), $p['sprintf']('%s: len(m.groups()) = %s != %s', $p['tuple']([msg, (($len8=m['groups']()) === null?0:
				(typeof $len8.__array != 'undefined' ? $len8.__array.length:
					(typeof $len8.__len__ == 'function'?$len8.__len__():
						(typeof $len8.length != 'undefined'?$len8.length:
							$p['len']($len8))))), (typeof ($sub7=(($len9=groups) === null?0:
				(typeof $len9.__array != 'undefined' ? $len9.__array.length:
					(typeof $len9.__len__ == 'function'?$len9.__len__():
						(typeof $len9.length != 'undefined'?$len9.length:
							$p['len']($len9))))))==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))])));
			$iter2_iter = $p['range']((($len10=groups) === null?0:
				(typeof $len10.__array != 'undefined' ? $len10.__array.length:
					(typeof $len10.__len__ == 'function'?$len10.__len__():
						(typeof $len10.length != 'undefined'?$len10.length:
							$p['len']($len10))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				self['assertEqual'](m['group'](i), (typeof ($15=groups).__array != 'undefined'?
					((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(i)), $p['sprintf']("%s: m.group(%d) = '%s' != groups[%d] = '%s'", $p['tuple']([msg, i, m['group'](i), i, (typeof ($17=groups).__array != 'undefined'?
					((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(i))])));
			}
			self['assertEqual'](m['start'](), (typeof ($19=span).__array != 'undefined'?
				((typeof $19.__array[$20=0]) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__(0)), $p['sprintf']('%s: start = %d != %d', $p['tuple']([msg, m['start'](), (typeof ($21=span).__array != 'undefined'?
				((typeof $21.__array[$22=0]) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__(0))])));
			self['assertEqual'](m['end'](), (typeof ($23=span).__array != 'undefined'?
				((typeof $23.__array[$24=1]) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__(1)), $p['sprintf']('%s: end = %d != %d', $p['tuple']([msg, m['end'](), (typeof ($25=span).__array != 'undefined'?
				((typeof $25.__array[$26=1]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(1))])));
			self['assertTrue']((($eq7=m['span']())===($eq8=span)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8))))), $p['sprintf']('%s: span = %r != %r', $p['tuple']([msg, m['span'](), (typeof ($27=span).__array != 'undefined'?
				((typeof $27.__array[$28=1]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(1))])));
			return null;
		}
	, 1, [null,null,['self'],['msg'],['pat'],['flags'],['string'],['groups'],['span']]);
		$cls_definition['searchTest'] = $method;
		$method = $pyjs__bind_method2('testMatchBasics', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var m;
			self['matchTest']('test 1', 'Ab.cd', 0, 'AbXcd', $p['list'](['AbXcd']), $p['tuple']([0, 5]));
			self['matchTest']('test 2', 'Ab.cd', 0, 'abXcd', null, $p['tuple']([0, 5]));
			self['matchTest']('test 3a', 'Ab.cd', $p['getattr']($m['re'], 'I'), 'abXcd', $p['list'](['abXcd']), $p['tuple']([0, 5]));
			self['matchTest']('test 3b', '(?i)Ab.cd', 0, 'abXcd', $p['list'](['abXcd']), $p['tuple']([0, 5]));
			self['matchTest']('test 4', 'Ab.cd', 0, 'ab\ncd', null, $p['tuple']([0, 5]));
			self['matchTest']('test 5a', 'Ab.cd', $p['getattr']($m['re'], 'S'), 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([0, 5]));
			self['matchTest']('test 5b', '(?s)Ab.cd', 0, 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([0, 5]));
			self['matchTest']('test 6a', 'A(b).(c)d', ($p['getattr']($m['re'], 'I'))|($p['getattr']($m['re'], 'S')), 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([0, 5]));
			self['matchTest']('test 6b', '(?is)A(b).(c)d', 0, 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([0, 5]));
			m = $m['re']['match']('1..4', '1234');
			self['assertFalse']((m === null), 're.match("1..4", "1234")');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMatchBasics'] = $method;
		$method = $pyjs__bind_method2('testSearchBasics', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var m;
			self['searchTest']('test 1', 'Ab.cd', 0, 'AbXcd', $p['list'](['AbXcd']), $p['tuple']([0, 5]));
			self['searchTest']('test 2', 'Ab.cd', 0, 'abXcd', null, $p['tuple']([0, 5]));
			self['searchTest']('test 3a', 'Ab.cd', $p['getattr']($m['re'], 'I'), 'abXcd', $p['list'](['abXcd']), $p['tuple']([0, 5]));
			self['searchTest']('test 3b', '(?i)Ab.cd', 0, 'abXcd', $p['list'](['abXcd']), $p['tuple']([0, 5]));
			self['searchTest']('test 4', 'Ab.cd', 0, 'ab\ncd', null, $p['tuple']([0, 5]));
			self['searchTest']('test 5a', 'Ab.cd', $p['getattr']($m['re'], 'S'), 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([0, 5]));
			self['searchTest']('test 5b', 'Ab.cd(?s)', 0, 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([0, 5]));
			self['searchTest']('test 6a', 'A(b).(c)d', ($p['getattr']($m['re'], 'I'))|($p['getattr']($m['re'], 'S')), 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([0, 5]));
			self['searchTest']('test 6b', 'A(b)(?is).(c)d', 0, 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([0, 5]));
			self['searchTest']('test 7', 'Ab.cd', 0, 'AAAbXcd', $p['list'](['AbXcd']), $p['tuple']([2, 7]));
			self['searchTest']('test 8', ' ', 0, 'Spaces in a sentence', $p['list']([' ']), $p['tuple']([6, 7]));
			m = $m['re']['search']('ab', 'dab abba a b');
			self['assertFalse']((m === null), 're.search("ab", "dab abba a b")');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSearchBasics'] = $method;
		$method = $pyjs__bind_method2('testFindallBasics', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len11,e;
			e = $m['re']['compile']('e')['findall']('Where are all these eees');
			self['assertEqual']((($len11=e) === null?0:
				(typeof $len11.__array != 'undefined' ? $len11.__array.length:
					(typeof $len11.__len__ == 'function'?$len11.__len__():
						(typeof $len11.length != 'undefined'?$len11.length:
							$p['len']($len11))))), 8);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testFindallBasics'] = $method;
		$method = $pyjs__bind_method2('testFindallExtra', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var r,s,out;
			r = $m['re']['compile']('\\w+ly');
			s = 'He was carefully disguised but captured quickly by police.';
			out = $p['list'](['carefully', 'quickly']);
			self['assertEqual'](r['findall'](s), out);
			r = $m['re']['compile']('\\$(?:(\\$)|([_a-z][_a-z0-9]*)|{([_a-z][_a-z0-9]*)}|())');
			s = 'Here is $$some $text which contains ${some} $2 placeholders';
			out = $p['list']([$p['tuple'](['$', '', '', '']), $p['tuple'](['', 'text', '', '']), $p['tuple'](['', '', 'some', '']), $p['tuple'](['', '', '', ''])]);
			self['assertEqual'](r['findall'](s), out);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testFindallExtra'] = $method;
		$method = $pyjs__bind_method2('testSubBasics', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var matches,r,s,fn;
			matches = $p['list']([]);
			fn = function(m) {
				var $len12;
				matches['append'](m);
				return $p['sprintf']('%s', (($len12=matches) === null?0:
					(typeof $len12.__array != 'undefined' ? $len12.__array.length:
						(typeof $len12.__len__ == 'function'?$len12.__len__():
							(typeof $len12.length != 'undefined'?$len12.length:
								$p['len']($len12))))));
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,null,['m']];
			r = $m['re']['compile']('e');
			s = 'Where are all these eees';
			self['assertEqual'](r['sub']('Q', s), 'WhQrQ arQ all thQsQ QQQs');
			self['assertEqual'](r['sub'](fn, s), 'Wh1r2 ar3 all th4s5 678s');
			self['assertEqual'](r['sub']('Q', s, 4), 'WhQrQ arQ all thQse eees');
			matches = $p['list']([]);
			self['assertEqual'](r['sub'](fn, s, 5), 'Wh1r2 ar3 all th4s5 eees');
			self['assertEqual'](r['subn']('Q', s), $p['tuple'](['WhQrQ arQ all thQsQ QQQs', 8]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSubBasics'] = $method;
		$method = $pyjs__bind_method2('testSplitBasics', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var r,s;
			r = $m['re']['compile']('e');
			s = 'Where are all these eees';
			self['assertEqual'](r['$$split'](s), $p['list'](['Wh', 'r', ' ar', ' all th', 's', ' ', '', '', 's']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testSplitBasics'] = $method;
		$method = $pyjs__bind_method2('testMatchExtended', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var r,m,g;
			r = $m['re']['compile']('ed');
			m = r['match']('ed ed', 0);
			self['assertEqual'](m['group'](0), 'ed');
			m = r['match']('ed ed', 1);
			self['assertTrue']((m === null), 'match("ed ed", 1)');
			m = r['match']('ed ed', 3);
			self['assertEqual'](m['group'](0), 'ed');
			r = $m['re']['compile']('^a.*$', $p['getattr']($m['re'], 'M'));
			m = r['match']('a  ');
			self['assertEqual'](m['group'](0), 'a  ');
			m = r['match']('a1\na2');
			self['assertEqual'](m['group'](0), 'a1');
			m = r['match']('a1\na2', 2);
			self['assertTrue']((m === null), 'match("a1\na2", 2)');
			m = r['match']('a1\na2', 3);
			self['assertEqual'](m['group'](0), 'a2');
			m = r['match']('a1\na2', 3, 4);
			self['assertEqual'](m['group'](0), 'a');
			r = $m['re']['compile']('([+])?(\\d{1,})?');
			m = r['match']('1');
			g = m['groups']('');
			self['assertEqual'](g, $p['tuple'](['', '1']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testMatchExtended'] = $method;
		$method = $pyjs__bind_method2('testBackReferences', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var expected,s,EM_re,B_re;
			B_re = $m['re']['compile']('\\*\\*(.*?)\\*\\*', $p['getattr']($m['re'], 'DOTALL'));
			EM_re = $m['re']['compile']('\\*(.*?)\\*', $p['getattr']($m['re'], 'DOTALL'));
			s = 'Text between *single asterisks* is emphasized.<br>Text between **double asterisks** is bolded.<br>You **can *even* embed** them!';
			expected = 'Text between <EM>single asterisks</EM> is emphasized.<br>Text between <STRONG>double asterisks</STRONG> is bolded.<br>You <STRONG>can <EM>even</EM> embed</STRONG> them!';
			s = B_re['sub']('<STRONG>\\1</STRONG>', s);
			s = EM_re['sub']('<EM>\\1</EM>', s);
			self['assertEqual'](s, expected, 'Bug #495');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testBackReferences'] = $method;
		var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ReModuleTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ReModuleTest */


/* end module: ReModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 're']
*/

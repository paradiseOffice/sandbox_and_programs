/* start module: pyjamas.chart.GChartConsts */
$pyjs.loaded_modules['pyjamas.chart.GChartConsts'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.GChartConsts'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.GChartConsts'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.GChartConsts"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.GChartConsts>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.GChartConsts';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['GChartConsts'] = $pyjs.loaded_modules['pyjamas.chart.GChartConsts'];
	var $sub22,$sub23,$sub20,$sub21,$sub27,$sub24,$sub26,$sub28,$sub31,$sub30,$sub33,$sub29,$sub35,$sub34,$sub36,$pow2,$pow1,$sub3,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$sub7,$mul4,$mul3,$mul2,$mul1,$sub25,$add2,$add3,$add1,$add4,$sub32,$sub9,$sub8,$sub2,$sub1,$sub6,$sub5,$sub4;

	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
	$m['formatAsHovertext'] = $p['___import___']('pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas.chart', null, false);
	$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.chart');
	$m['YAxisId'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.chart.GChartConsts';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('YAxisId', $p['tuple']($bases), $data);
	})();
	$m['DEFAULT_ANNOTATION_FONTSIZE'] = 12;
	$m['DEFAULT_BRUSH_HEIGHT'] = 1;
	$m['DEFAULT_BRUSH_WIDTH'] = 1;
	$m['DEFAULT_LEGEND_BORDER_COLOR'] = 'black';
	$m['DEFAULT_LEGEND_BORDER_WIDTH'] = 1;
	$m['DEFAULT_LEGEND_BORDER_STYLE'] = 'solid';
	$m['DEFAULT_LEGEND_BACKGROUND_COLOR'] = 'transparent';
	$m['DEFAULT_FONT_COLOR'] = 'black';
	$m['DEFAULT_FONT_STYLE'] = 'normal';
	$m['DEFAULT_FONT_WEIGHT'] = 'normal';
	$m['DEFAULT_HOVERTEXT_TEMPLATE'] = $m['formatAsHovertext']('(${x}, ${y})');
	$m['DEFAULT_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'NORTHWEST');
	$m['DEFAULT_LEGEND_FONTSIZE'] = 12;
	$m['DEFAULT_PLOTAREA_BACKGROUND_COLOR'] = 'transparent';
	$m['DEFAULT_PLOTAREA_BORDER_COLOR'] = 'black';
	$m['DEFAULT_PLOTAREA_BORDER_STYLE'] = 'solid';
	$m['DEFAULT_PLOTAREA_BORDER_WIDTH'] = 0;
	$m['DEFAULT_SYMBOL_BACKGROUND_COLOR'] = 'transparent';
	$m['DEFAULT_SYMBOL_BORDER_COLORS'] = $p['list'](['red', 'green', 'blue', 'fuchsia', 'aqua', 'teal', 'maroon', 'lime', 'navy', 'silver', 'olive', 'purple']);
	$m['DEFAULT_SYMBOL_BORDER_STYLE'] = 'solid';
	$m['DEFAULT_SYMBOL_BORDER_WIDTH'] = 1;
	$m['DEFAULT_SYMBOL_FILL_SPACING'] = 4;
	$m['DEFAULT_SYMBOL_FILL_THICKNESS'] = 0;
	$m['DEFAULT_BAR_FILL_SPACING'] = 0;
	$m['DEFAULT_LINE_FILL_THICKNESS'] = 1;
	$m['DEFAULT_LINE_FILL_SPACING'] = 0;
	$m['DEFAULT_PIE_SLICE_FILL_SPACING'] = 4;
	$m['DEFAULT_PIE_SLICE_FILL_THICKNESS'] = 2;
	$m['DEFAULT_PIE_SLICE_HOVERTEXT_TEMPLATE'] = $m['formatAsHovertext']('${pieSliceSize}');
	$m['DEFAULT_PIE_SLICE_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'OUTSIDE_PIE_ARC');
	$m['DEFAULT_SYMBOL_HEIGHT'] = 7;
	$m['DEFAULT_SYMBOL_WIDTH'] = $m['DEFAULT_SYMBOL_HEIGHT'];
	$m['DEFAULT_TICK_COUNT'] = 10;
	$m['DEFAULT_TICK_LABEL_FONT_COLOR'] = 'black';
	$m['DEFAULT_TICK_LABEL_FONT_STYLE'] = 'normal';
	$m['DEFAULT_TICK_LABEL_FONT_WEIGHT'] = 'normal';
	$m['DEFAULT_TICK_LABEL_FONTSIZE'] = 12;
	$m['DEFAULT_TICK_LABEL_FORMAT'] = '#.##';
	$m['DEFAULT_TICK_LENGTH'] = 6;
	$m['DEFAULT_TICK_THICKNESS'] = 1;
	$m['DEFAULT_VBAR_BASELINE_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'FARTHEST_FROM_HORIZONTAL_BASELINE');
	$m['DEFAULT_VBARBOTTOM_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'NORTH');
	$m['DEFAULT_VBARTOP_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'SOUTH');
	$m['DEFAULT_HBAR_BASELINE_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'FARTHEST_FROM_VERTICAL_BASELINE');
	$m['DEFAULT_HBARLEFT_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'EAST');
	$m['DEFAULT_HBARRIGHT_HOVER_LOCATION'] = $p['getattr']($m['AnnotationLocation'], 'WEST');
	$m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'] = 400;
	$m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'] = 400;
	$m['DEFAULT_X_CHARTSIZE'] = 300;
	$m['DEFAULT_Y_CHARTSIZE'] = 300;
	$m['NAI'] = (typeof ($pow1=2)==typeof ($pow2=31) && typeof $pow1=='number'?
		Math.pow($pow1,$pow2):
		$p['op_pow']($pow1,$pow2));
	$m['TRANSPARENT_BORDER_COLOR'] = null;
	$m['USE_CSS'] = '';
	$m['Y_AXIS'] = $m['YAxisId']();
	$m['Y2_AXIS'] = $m['YAxisId']();
	$m['DEFAULT_BLANK_IMAGE_URL'] = 'gchart.gif';
	$m['DEFAULT_BLANK_IMAGE_URL_FULLPATH'] = (typeof ($add1=$m['pygwt']['getModuleBaseURL']())==typeof ($add2=$m['DEFAULT_BLANK_IMAGE_URL']) && (typeof $add1=='number'||typeof $add1=='string')?
		$add1+$add2:
		$p['op_add']($add1,$add2));
	$m['DEFAULT_GRID_HEIGHT'] = $m['DEFAULT_TICK_THICKNESS'];
	$m['DEFAULT_GRID_WIDTH'] = $m['DEFAULT_TICK_THICKNESS'];
	$m['GRID_BORDER_STYLE'] = 'solid';
	$m['GRID_BORDER_WIDTH'] = 1;
	$m['DEFAULT_GRID_COLOR'] = 'black';
	$m['DEFAULT_FOOTNOTES_THICKNESS'] = 15;
	$m['DEFAULT_TITLE_THICKNESS'] = 15;
	$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND'] = 1.0;
	$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND'] = 0.7;
	$m['CHARHEIGHT_TO_FONTSIZE_UPPERBOUND'] = (typeof ($mul1=2)==typeof ($mul2=1.5) && typeof $mul1=='number'?
		$mul1*$mul2:
		$p['op_mul']($mul1,$mul2));
	$m['CHARWIDTH_TO_FONTSIZE_UPPERBOUND'] = (typeof ($mul3=2)==typeof ($mul4=0.7) && typeof $mul3=='number'?
		$mul3*$mul4:
		$p['op_mul']($mul3,$mul4));
	$m['TICK_BORDER_STYLE'] = $m['GRID_BORDER_STYLE'];
	$m['TICK_BORDER_WIDTH'] = $m['GRID_BORDER_WIDTH'];
	$m['N_PRE_SYSTEM_CURVES'] = 16;
	$m['N_POST_SYSTEM_CURVES'] = 2;
	$m['N_SYSTEM_CURVES'] = (typeof ($add3=$m['N_PRE_SYSTEM_CURVES'])==typeof ($add4=$m['N_POST_SYSTEM_CURVES']) && (typeof $add3=='number'||typeof $add3=='string')?
		$add3+$add4:
		$p['op_add']($add3,$add4));
	$m['PLOTAREA_ID'] = (typeof ($sub1=0)==typeof ($sub2=$m['N_SYSTEM_CURVES']) && (typeof $sub1=='number'||typeof $sub1=='string')?
		$sub1-$sub2:
		$p['op_sub']($sub1,$sub2));
	$m['TITLE_ID'] = (typeof ($sub3=1)==typeof ($sub4=$m['N_SYSTEM_CURVES']) && (typeof $sub3=='number'||typeof $sub3=='string')?
		$sub3-$sub4:
		$p['op_sub']($sub3,$sub4));
	$m['YAXIS_ID'] = (typeof ($sub5=2)==typeof ($sub6=$m['N_SYSTEM_CURVES']) && (typeof $sub5=='number'||typeof $sub5=='string')?
		$sub5-$sub6:
		$p['op_sub']($sub5,$sub6));
	$m['YTICKS_ID'] = (typeof ($sub7=3)==typeof ($sub8=$m['N_SYSTEM_CURVES']) && (typeof $sub7=='number'||typeof $sub7=='string')?
		$sub7-$sub8:
		$p['op_sub']($sub7,$sub8));
	$m['YGRIDLINES_ID'] = (typeof ($sub9=4)==typeof ($sub10=$m['N_SYSTEM_CURVES']) && (typeof $sub9=='number'||typeof $sub9=='string')?
		$sub9-$sub10:
		$p['op_sub']($sub9,$sub10));
	$m['YLABEL_ID'] = (typeof ($sub11=5)==typeof ($sub12=$m['N_SYSTEM_CURVES']) && (typeof $sub11=='number'||typeof $sub11=='string')?
		$sub11-$sub12:
		$p['op_sub']($sub11,$sub12));
	$m['Y2AXIS_ID'] = (typeof ($sub13=6)==typeof ($sub14=$m['N_SYSTEM_CURVES']) && (typeof $sub13=='number'||typeof $sub13=='string')?
		$sub13-$sub14:
		$p['op_sub']($sub13,$sub14));
	$m['Y2TICKS_ID'] = (typeof ($sub15=7)==typeof ($sub16=$m['N_SYSTEM_CURVES']) && (typeof $sub15=='number'||typeof $sub15=='string')?
		$sub15-$sub16:
		$p['op_sub']($sub15,$sub16));
	$m['Y2GRIDLINES_ID'] = (typeof ($sub17=8)==typeof ($sub18=$m['N_SYSTEM_CURVES']) && (typeof $sub17=='number'||typeof $sub17=='string')?
		$sub17-$sub18:
		$p['op_sub']($sub17,$sub18));
	$m['Y2LABEL_ID'] = (typeof ($sub19=9)==typeof ($sub20=$m['N_SYSTEM_CURVES']) && (typeof $sub19=='number'||typeof $sub19=='string')?
		$sub19-$sub20:
		$p['op_sub']($sub19,$sub20));
	$m['LEGEND_ID'] = (typeof ($sub21=10)==typeof ($sub22=$m['N_SYSTEM_CURVES']) && (typeof $sub21=='number'||typeof $sub21=='string')?
		$sub21-$sub22:
		$p['op_sub']($sub21,$sub22));
	$m['XAXIS_ID'] = (typeof ($sub23=11)==typeof ($sub24=$m['N_SYSTEM_CURVES']) && (typeof $sub23=='number'||typeof $sub23=='string')?
		$sub23-$sub24:
		$p['op_sub']($sub23,$sub24));
	$m['XTICKS_ID'] = (typeof ($sub25=12)==typeof ($sub26=$m['N_SYSTEM_CURVES']) && (typeof $sub25=='number'||typeof $sub25=='string')?
		$sub25-$sub26:
		$p['op_sub']($sub25,$sub26));
	$m['XGRIDLINES_ID'] = (typeof ($sub27=13)==typeof ($sub28=$m['N_SYSTEM_CURVES']) && (typeof $sub27=='number'||typeof $sub27=='string')?
		$sub27-$sub28:
		$p['op_sub']($sub27,$sub28));
	$m['XLABEL_ID'] = (typeof ($sub29=14)==typeof ($sub30=$m['N_SYSTEM_CURVES']) && (typeof $sub29=='number'||typeof $sub29=='string')?
		$sub29-$sub30:
		$p['op_sub']($sub29,$sub30));
	$m['FOOTNOTES_ID'] = (typeof ($sub31=15)==typeof ($sub32=$m['N_SYSTEM_CURVES']) && (typeof $sub31=='number'||typeof $sub31=='string')?
		$sub31-$sub32:
		$p['op_sub']($sub31,$sub32));
	$m['HOVER_CURSOR_ID'] = (typeof ($sub33=16)==typeof ($sub34=$m['N_SYSTEM_CURVES']) && (typeof $sub33=='number'||typeof $sub33=='string')?
		$sub33-$sub34:
		$p['op_sub']($sub33,$sub34));
	$m['HOVER_ANNOTATION_ID'] = (typeof ($sub35=17)==typeof ($sub36=$m['N_SYSTEM_CURVES']) && (typeof $sub35=='number'||typeof $sub35=='string')?
		$sub35-$sub36:
		$p['op_sub']($sub35,$sub36));
	return this;
}; /* end pyjamas.chart.GChartConsts */


/* end module: pyjamas.chart.GChartConsts */


/*
PYJS_DEPS: ['pyjamas.chart.AnnotationLocation', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas.chart.HovertextChunk', 'pygwt']
*/

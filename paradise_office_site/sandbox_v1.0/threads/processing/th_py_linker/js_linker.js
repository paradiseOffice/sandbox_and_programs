
(function get_selected() {
  var selected = // selected javascript object
  // see last bookmark (javascript get selection/createselection.
  console.log(selected);
  var jsonSelected = JSON.stringify(selected);
  console.log(jsonSelected);
  // JSON.parse method to return js object back.
});

(function send_selected_data() {
  $('#btn1').bind('click', function() {
    $.ajax({
      type: "POST",
      url: "test_plugin.php",
      data: { jsonSelected }, 
      dataType: json
    }).done(function( fetch_modified_xml_data ) {
      $("#file_port").append("<p class=\"info\">Success</p>");
    });
  });
});

// get_selected_data (same for any file port type)
function
var selected_start
var selected_end
var selected (xml)


returns selected data as xml 

// set_selected_data (same for any file port type)

returns xml data modified by an external python program

function send_selected_data(get_selected_data, options)

sends xml via ajax to the php file - on success calls receive_modified_data.
and the options via json, which then goes in the call to the Python file.
returns sucess msg (debugging) or an error msg.

function receive_modified_data(xml_data)
Uses ajax to receive modified xml 
appends it after the selection start - one node
/*
 var iframe = document.getElementById("your_iframe");
var iframeDoc = iframe.contentDocument, iframeWin;
if (iframeDoc) {
    iframeWin = iframeDoc.defaultView;
} else {
    iframeWin = iframe.contentWindow;
    iframeDoc = iframeWin.document;
}

var sel = rangy.getSelection(iframeWin);
if (sel.rangeCount) {
    var range = sel.getRangeAt(0);

    // If the range has either boundary within a text node, split that text node
    // so that we can work with the part that is selected
    range.splitBoundaries();

    // Get an array of all text nodes within the 
    var textNodes = range.getNodes([3]); // [3] specifies the types of node required

    // Surround each text node
    for (var i = 0, len = textNodes.length, el, n; i < len; ++i) {
        n = textNodes[i];
        el = iframeDoc.createElement("b");
        n.parentNode.insertBefore(el, n);
        el.appendChild(n);
    }
}
*/
$(function () {
	$("#jstree").jstree({
	    "search": {
	        "show_only_matches" : true
	    },
	    "plugins": ["search", "themes", "types"]
	});

    $("#jstree").jstree('open_all');
    var to = false;
    $('#search_cell').keyup(function () {
	   	var v = $('#search_cell').val();
      	$('#jstree').jstree(false).search(v);

      	$context = $("#jstree li");
	    var term = $(this).val();
	    $context.unmark().mark(term);
    });
});
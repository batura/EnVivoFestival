/*
$(document).bind("mobileinit", function(){
  
	$('#page-idioma').live('pageshow',function(event){


	  var lang=$.cookie('lang_LTI');

	  if (lang=='es'){

	  var div = $("div")[0];

	  jQuery.data(div, "test1", "cast");
	  jQuery.data(div, "test2", "eng");
	  jQuery.data(div, "test3", "fra");



	  $("span:eq(0)").text("" + jQuery.data(div, "test1"));
	  $("span:eq(1)").text("" + jQuery.data(div, "test2"));
	  $("span:eq(2)").text("" + jQuery.data(div, "test3"));
	  
	  jQuery.removeData(div, "test1");
	  jQuery.removeData(div, "test2");
	  jQuery.removeData(div, "test3");
	  }
	  else {if (lang=='en'){

	  var div = $("div")[0];

	  jQuery.data(div, "test1", "Spanish");
	  jQuery.data(div, "test2", "English");
	  jQuery.data(div, "test3", "French");



	  $("span:eq(0)").text("" + jQuery.data(div, "test1"));
	  $("span:eq(1)").text("" + jQuery.data(div, "test2"));
	  $("span:eq(2)").text("" + jQuery.data(div, "test3"));
	  
	  jQuery.removeData(div, "test1");
	  jQuery.removeData(div, "test2");
	  jQuery.removeData(div, "test3");
	  }

	  else {

	  var div = $("div")[0];

	  jQuery.data(div, "test1", "spa");
	  jQuery.data(div, "test2", "eng");
	  jQuery.data(div, "test3", "fra");



	  $("span:eq(0)").text("" + jQuery.data(div, "test1"));
	  $("span:eq(1)").text("" + jQuery.data(div, "test2"));
	  $("span:eq(2)").text("" + jQuery.data(div, "test3"));
	  
	  jQuery.removeData(div, "test1");
	  jQuery.removeData(div, "test2");
	  jQuery.removeData(div, "test3");
	  }
	  }

      });
});*/
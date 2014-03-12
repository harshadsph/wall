 (function ($) {
 
 Drupal.behaviors.initWall = {
	 attach: function (context, settings) {
		$('a[href="#ADDBUTTON"]').click(function(){
			alert('Sign new href executed.'); 
		}); 
	 }
 }
 
})(jQuery);
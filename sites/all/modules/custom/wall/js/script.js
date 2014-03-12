 (function ($) {
 
 Drupal.behaviors.initWall = {
	 attach: function (context, settings) {
		$('a[href="#ADDBUTTON"]').click(function(){
			$poster_url = $('#ADDIMAGE').val();
			
		}); 
	 }
 }
 
})(jQuery);
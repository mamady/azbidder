$(document).ready(function(){
	var url = window.location.href.toString().split(window.location.host)[1];
	
	var results_page = '/search_beta';
	var property_page = '/property.php';
	if(url.substring(0, results_page.length) === results_page) {
		checkProcessingReady();
		$('#button2').on('click', checkProcessingReady);
		$('body').on('click', 'button.blacklist', blacklistProperty);
	}

	function blacklistProperty() {
		var azb_id = $(this).prev().prop('href').substring(36);
		doBlacklist(azb_id);
		$(this).parent().parent().parent().remove();
	}
	
	function checkProcessingReady(){
		console.log('checking to see if processing is ready yet');
		var size_of_table = $('#sortedtable > tbody > tr').size();
		if(size_of_table > 1 && size_of_table < 200) {
			// wait 500ms
			setTimeout(process_results_page, 100);
		} else if(size_of_table < 200) {
			setTimeout(checkProcessingReady, 500);
		}
	}
	
	function process_results_page() {
		console.log('processing results page');
		removeBlacklisted();
		//addBlacklistButton();
	}
	
	function doBlacklist(azb_id) {
		// set value of property to -100
		$.ajax({
		  url: '/postAction.php',
		  type: 'post',
		  data: 'request=PostAction&tn='+azb_id+'&xValue=-100&xComm=&xAction=MY_PRICE_COMP',
		  dataType: 'text',
		  success: function(response) {}
		});
	}

	function removeBlacklisted() {
		var wait_time = 0;
		$('#sortedtable > tbody > tr').each(function(i) {
		
			var that = this;
			setTimeout(function() { doProcess(that) }, wait_time);
			wait_time = wait_time + 50;
			
		});
	}
	
	function doProcess(tr_element) {
		// get azb id
		var property_link = $(tr_element).find('a.plink').prop('href');
		var azb_id = property_link.substring(36);

		// check value of property
		$.ajax({
		  url: '/refresh_property_stat.php?request=RefreshComment&tn=' + azb_id,
		  dataType: 'html',
		  success: function(response) {
			if( $('<div></div>').html(response).find('#stat_value').text() == '-100') {
				$(tr_element).remove();
			} else if(!$(tr_element).find('a.plink').next().hasClass('blacklist')){
				$($(tr_element).find('a.plink')[0]).after('&nbsp; &nbsp; &nbsp; &nbsp; <button class="blacklist" style="height: 15px; margin: 0; padding: 0; font-size: smaller;">Blacklist</button>');

				// update lot size
				$.ajax({
				  url: property_link,
				  dataType: 'html',
				  success: function(response) {
					var az_property = $('<div></div>').html(response);
					var lot_size = az_property.find('.fixedAddressField:eq(2)').find('.fixedAddressValue').text();
					lot_size = lot_size.substring(0, lot_size.length - 2);
					$(tr_element).find('td:eq(13)').html(lot_size);
				  }
				});
			}
		  }
		});

	}
});